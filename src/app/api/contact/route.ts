import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const DUPLICATE_WINDOW_MS = 30_000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_INJECTION_REGEX = /[\r\n]/;

type RequestLog = { count: number; windowStart: number };
const rateLimitStore = new Map<string, RequestLog>();
const recentSubmissions = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function isDuplicateSubmission(key: string): boolean {
  const now = Date.now();
  const lastSeen = recentSubmissions.get(key);
  recentSubmissions.set(key, now);
  if (lastSeen && now - lastSeen < DUPLICATE_WINDOW_MS) return true;
  return false;
}

function cleanupStores() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) rateLimitStore.delete(ip);
  }
  for (const [key, ts] of recentSubmissions) {
    if (now - ts > DUPLICATE_WINDOW_MS) recentSubmissions.delete(key);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  phone: string;
  treatmentInterest: string;
  message: string;
  pageUrl: string;
  submittedAt: string;
}): string {
  const { name, email, phone, treatmentInterest, message, pageUrl, submittedAt } = fields;
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background-color:#1e40af;padding:20px 24px;">
                <h1 style="color:#ffffff;font-size:18px;margin:0;">New Dental Enquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Name</td></tr>
                  <tr><td style="padding:0 0 12px 0;color:#111827;font-size:15px;font-weight:bold;">${escapeHtml(name)}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td></tr>
                  <tr><td style="padding:0 0 12px 0;color:#111827;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#1e40af;">${escapeHtml(email)}</a></td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td></tr>
                  <tr><td style="padding:0 0 12px 0;color:#111827;font-size:15px;">${escapeHtml(phone || 'Not provided')}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Treatment Interest</td></tr>
                  <tr><td style="padding:0 0 12px 0;color:#111827;font-size:15px;">${escapeHtml(treatmentInterest || 'Not selected')}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Message</td></tr>
                  <tr><td style="padding:0 0 16px 0;color:#111827;font-size:15px;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
                </table>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:4px 0;color:#9ca3af;font-size:12px;">Page: ${escapeHtml(pageUrl)}</td></tr>
                  <tr><td style="padding:4px 0;color:#9ca3af;font-size:12px;">Submitted: ${escapeHtml(submittedAt)}</td></tr>
                  <tr><td style="padding:4px 0;color:#9ca3af;font-size:12px;">Reply-To: ${escapeHtml(email)}</td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(fields: {
  name: string;
  email: string;
  phone: string;
  treatmentInterest: string;
  message: string;
  pageUrl: string;
  submittedAt: string;
}): string {
  const { name, email, phone, treatmentInterest, message, pageUrl, submittedAt } = fields;
  return `NEW DENTAL ENQUIRY

Name:
${name}

Email:
${email}

Phone:
${phone || 'Not provided'}

Treatment Interest:
${treatmentInterest || 'Not selected'}

Message:
${message}

SOURCE
Page:
${pageUrl}

Submitted:
${submittedAt}

Reply-To:
${email}`;
}

export async function POST(req: NextRequest) {
  cleanupStores();

  const contentLength = Number(req.headers.get('content-length') || '0');
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large.' }, { status: 413 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  let body: unknown;
  try {
    const rawText = await req.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large.' }, { status: 413 });
    }
    body = JSON.parse(rawText);
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  const honeypot = typeof data.website === 'string' ? data.website : '';
  if (honeypot.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const treatmentInterest = typeof data.treatmentInterest === 'string' ? data.treatmentInterest.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  const pageUrl = typeof data.pageUrl === 'string' ? data.pageUrl.trim().slice(0, 500) : '';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (name.length > 200 || email.length > 320 || phone.length > 50 || treatmentInterest.length > 100 || message.length > 5000) {
    return NextResponse.json({ error: 'One or more fields exceed the allowed length.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (
    HEADER_INJECTION_REGEX.test(name) ||
    HEADER_INJECTION_REGEX.test(email) ||
    HEADER_INJECTION_REGEX.test(phone) ||
    HEADER_INJECTION_REGEX.test(treatmentInterest)
  ) {
    return NextResponse.json({ error: 'Invalid characters detected in submission.' }, { status: 400 });
  }

  const duplicateKey = `${ip}:${email.toLowerCase()}`;
  if (isDuplicateSubmission(duplicateKey)) {
    return NextResponse.json({ error: 'Duplicate submission detected. Please wait before resubmitting.' }, { status: 429 });
  }

  const submittedAt = new Date().toISOString();
  const recipient = process.env.FORM_RECIPIENT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !recipient) {
    console.error('Contact form misconfigured: missing RESEND_API_KEY or FORM_RECIPIENT_EMAIL');
    return NextResponse.json({ error: 'Something went wrong. Please try again or contact us via WhatsApp.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const emailFields = { name, email, phone, treatmentInterest, message, pageUrl, submittedAt };
  const subject = treatmentInterest
    ? `New Dental Enquiry - ${treatmentInterest} - ${name}`
    : `New Dental Enquiry - ${name}`;

  try {
    const { error } = await resend.emails.send({
      from: 'Teeth Done in Turkey <forms@teethdoneinturkey.co.uk>',
      to: [recipient],
      replyTo: email,
      subject,
      html: buildEmailHtml(emailFields),
      text: buildEmailText(emailFields),
    });

    if (error) {
      console.error('Resend send error:', error.message);
      return NextResponse.json({ error: 'Something went wrong. Please try again or contact us via WhatsApp.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form submission failed:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ error: 'Something went wrong. Please try again or contact us via WhatsApp.' }, { status: 500 });
  }
}
