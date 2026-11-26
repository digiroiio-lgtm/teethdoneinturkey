'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/submit-lead';
import { trackLeadFormError, trackLeadFormValidSubmit, useLeadFormTracking } from '@/lib/lead-tracking';

// Short 3-field lead form (name, phone, treatment) for high-intent landing
// pages such as /finance-options-uk and /monthly-payment, so visitors can ask
// for a plan without leaving the page. Posts to /api/contact like LeadForm
// and fires the same `generate_lead` event (with form_type: 'quick').
const PHONE_REGEX = /^[+()\d\s-]{7,20}$/;

const TREATMENTS = [
  'Veneers',
  'Crowns',
  'Dental implants',
  'All-on-4 / All-on-6',
  'Hollywood smile',
  'Not sure yet',
];

interface QuickLeadFormProps {
  /** Page path used to label analytics events, e.g. "/finance-options-uk". */
  successPath: string;
  /** Anchor id of the form block. */
  anchorId?: string;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
  /** Small print under the button. Defaults to the finance-page wording; pass a plain one on non-finance pages. */
  note?: string;
  /** Heading element. Use 'p' on pages whose H2 sections are word-count checked (the form then adds no extra section). */
  headingAs?: 'h2' | 'p';
}

export default function QuickLeadForm({
  successPath,
  anchorId = 'quick-plan',
  heading = 'Get your free treatment plan',
  subheading = 'Leave your name and number and a UK patient coordinator will call or WhatsApp you.',
  submitLabel = 'Send my free plan request →',
  headingAs = 'h2',
  note = "Free and no obligation. We do not make lending decisions; borrowing is optional and any credit is subject to the lender's own checks.",
}: QuickLeadFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const tracking = useLeadFormTracking('quick', successPath);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || honeypot.trim()) return;
    const fail = (field: string, msg: string) => {
      setError(msg);
      trackLeadFormError('quick', successPath, field);
    };
    if (!name.trim()) { fail('name', 'Please enter your name.'); return; }
    if (!PHONE_REGEX.test(phone.trim())) { fail('phone', 'Please enter a valid phone number.'); return; }
    if (!treatment) { fail('treatment', 'Please choose a treatment (or "Not sure yet").'); return; }
    setError('');
    setIsSubmitting(true);
    trackLeadFormValidSubmit('quick', successPath);
    const failure = await submitLead({ formType: 'quick', name, phone, treatment, website: honeypot });
    setIsSubmitting(false);
    if (failure) {
      setError(failure);
      trackLeadFormError('quick', successPath, 'server');
      return;
    }
    window.gtag?.('event', 'generate_lead', { form_path: successPath, form_type: 'quick' });
    setIsSuccess(true);
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]';

  return (
    <div
      id={anchorId}
      className="scroll-mt-24 bg-white border-2 border-[#1e40af]/20 rounded-2xl shadow-sm p-6 text-left"
      {...(headingAs === 'p' ? { role: 'region', 'aria-label': heading } : {})}
    >
      {isSuccess ? (
        <div className="text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="font-bold text-gray-900 mb-2">Thank you, we have your request.</h3>
          <p className="text-gray-600 text-sm">
            A patient coordinator will contact you within 24 hours. For a faster reply, WhatsApp us on +90 535 399 8999.
          </p>
        </div>
      ) : (
        <>
          {headingAs === 'p' ? (
            <p className="text-xl font-bold text-gray-900 mb-1">{heading}</p>
          ) : (
            <h2 className="text-xl font-bold text-gray-900 mb-1">{heading}</h2>
          )}
          <p className="text-sm text-gray-600 mb-5">{subheading}</p>
          <form
            ref={tracking.ref}
            onSubmit={handleSubmit}
            onFocus={tracking.onFocus}
            onBlur={tracking.onBlur}
            noValidate
          >
            <div className="space-y-3">
              <div>
                <label htmlFor={`${anchorId}-name`} className="block text-sm font-medium text-gray-700 mb-1">Your name *</label>
                <input
                  id={`${anchorId}-name`}
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor={`${anchorId}-phone`} className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
                <input
                  id={`${anchorId}-phone`}
                  type="tel"
                  name="phone"
                  required
                  inputMode="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className={inputClass}
                  placeholder="+44 7700 900000"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor={`${anchorId}-treatment`} className="block text-sm font-medium text-gray-700 mb-1">Treatment you are interested in *</label>
                <select
                  id={`${anchorId}-treatment`}
                  name="treatment"
                  required
                  value={treatment}
                  onChange={e => setTreatment(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Choose a treatment…</option>
                  {TREATMENTS.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Honeypot — hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor={`${anchorId}-website`}>Website</label>
                <input
                  type="text"
                  id={`${anchorId}-website`}
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : submitLabel}
              </button>
              <p className="text-xs text-gray-500">
                {note}
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
