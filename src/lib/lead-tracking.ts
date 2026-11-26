import { useEffect, useRef, type FocusEvent } from 'react';
import { trackEvent } from '@/lib/analytics';
import { useViewEvent } from '@/lib/use-view-event';

// GA4 funnel events for the lead forms. GA4's automatic `form_submit` fires on
// every submit attempt, including ones our validation blocks, so on its own it
// cannot tell a failed attempt from a sent lead. The funnel is:
//   lead_form_view           -> the form was at least 40% on screen
//   lead_form_start          -> first field focused (first_field)
//   lead_form_field_complete -> a field was left filled in (field name only, never the value)
//   lead_form_error          -> validation stopped the submit (error_field)
//   lead_form_submit_valid   -> validation passed, the form is being sent to /api/contact
//   generate_lead            -> /api/contact accepted the lead (fired in the forms)
//   lead_form_abandon        -> the visitor left after starting but before a valid submit (last_field)
// valid minus generate_lead = submissions lost between our page and the endpoint.
// Window.gtag is typed in AiReferralTracking.tsx.

export type LeadFormType = 'full' | 'quick';

interface FormState {
  started: boolean;
  submitted: boolean;
  abandonSent: boolean;
  startedAt: number;
  lastField: string;
  fields: Set<string>;
}

const forms = new Map<string, FormState>();

function stateFor(formType: LeadFormType, formPath: string): FormState {
  const key = `${formType}|${formPath}`;
  let state = forms.get(key);
  if (!state) {
    state = { started: false, submitted: false, abandonSent: false, startedAt: 0, lastField: '', fields: new Set() };
    forms.set(key, state);
  }
  return state;
}

export function trackLeadFormError(formType: LeadFormType, formPath: string, field: string) {
  trackEvent('lead_form_error', {
    form_type: formType,
    form_path: formPath,
    error_field: field,
  });
}

export function trackLeadFormValidSubmit(formType: LeadFormType, formPath: string) {
  const state = stateFor(formType, formPath);
  state.submitted = true;
  trackEvent('lead_form_submit_valid', {
    form_type: formType,
    form_path: formPath,
    fields_completed: state.fields.size,
    seconds_in_form: state.started ? Math.round((Date.now() - state.startedAt) / 1000) : undefined,
    transport_type: 'beacon',
  });
}

type FormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function fieldOf(event: FocusEvent<HTMLFormElement>): FormField | null {
  const target = event.target as unknown as FormField;
  if (!target || !target.name || target.name === 'website' || target.type === 'hidden') return null;
  return target;
}

/**
 * Attach `ref`, `onFocus` and `onBlur` to the <form>. Call it before any early
 * return in the component. Only field names are reported, never what was typed.
 */
export function useLeadFormTracking(formType: LeadFormType, formPath: string) {
  const ref = useRef<HTMLFormElement>(null);
  useViewEvent(ref, 'lead_form_view', { form_type: formType, form_path: formPath }, 0.4);

  useEffect(() => {
    const sendAbandon = () => {
      const state = stateFor(formType, formPath);
      if (!state.started || state.submitted || state.abandonSent) return;
      state.abandonSent = true;
      trackEvent('lead_form_abandon', {
        form_type: formType,
        form_path: formPath,
        last_field: state.lastField,
        fields_completed: state.fields.size,
        seconds_in_form: Math.round((Date.now() - state.startedAt) / 1000),
        transport_type: 'beacon',
      });
    };
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') sendAbandon();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', sendAbandon);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', sendAbandon);
      sendAbandon(); // client-side navigation away from the form
    };
  }, [formType, formPath]);

  const onFocus = (event: FocusEvent<HTMLFormElement>) => {
    const field = fieldOf(event);
    if (!field) return;
    const state = stateFor(formType, formPath);
    if (!state.started) {
      state.started = true;
      state.startedAt = Date.now();
      state.abandonSent = false;
      trackEvent('lead_form_start', { form_type: formType, form_path: formPath, first_field: field.name });
    }
    state.lastField = field.name;
  };

  const onBlur = (event: FocusEvent<HTMLFormElement>) => {
    const field = fieldOf(event);
    if (!field || !field.value.trim()) return;
    const state = stateFor(formType, formPath);
    if (state.fields.has(field.name)) return;
    state.fields.add(field.name);
    trackEvent('lead_form_field_complete', { form_type: formType, form_path: formPath, field: field.name });
  };

  return { ref, onFocus, onBlur };
}
