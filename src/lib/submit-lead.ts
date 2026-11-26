// Sends a lead form to our own /api/contact route (Resend email).
// Returns null on success, or a user-facing error message.
export async function submitLead(payload: Record<string, string>): Promise<string | null> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, pageUrl: window.location.href }),
    });
    if (res.ok) return null;
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    return data?.error || 'Something went wrong. Please try again or contact us via WhatsApp.';
  } catch {
    return 'Network error. Please try again or contact us via WhatsApp.';
  }
}
