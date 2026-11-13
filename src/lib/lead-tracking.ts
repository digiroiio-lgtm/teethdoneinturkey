// GA4 diagnostics for the lead forms. GA4's automatic `form_submit` fires on
// every submit attempt, including ones our validation blocks, so on its own it
// cannot tell a failed attempt from a sent lead. These events split the funnel:
//   lead_form_error        -> validation stopped the submit (which field)
//   lead_form_submit_valid -> validation passed, the browser is posting the form
//   generate_lead          -> the form endpoint redirected back (fired in the forms)
// valid minus generate_lead = submissions lost between our page and the endpoint.
// Window.gtag is typed in AiReferralTracking.tsx.

export type LeadFormType = 'full' | 'quick';

export function trackLeadFormError(formType: LeadFormType, formPath: string, field: string) {
  window.gtag?.('event', 'lead_form_error', {
    form_type: formType,
    form_path: formPath,
    error_field: field,
  });
}

export function trackLeadFormValidSubmit(formType: LeadFormType, formPath: string) {
  // Beacon transport so the hit survives the native POST navigating away.
  window.gtag?.('event', 'lead_form_submit_valid', {
    form_type: formType,
    form_path: formPath,
    transport_type: 'beacon',
  });
}
