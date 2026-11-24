# GA4 events

Measurement ID `G-57QGPCQQKT`. Events are sent only on the production hosts (see the `ga4-init` script in `src/app/layout.tsx`); previews, local builds and development send nothing. No personal data is sent: only event names, placements, field names (never what was typed), page types and coarse numbers.

Code: `src/lib/analytics.ts` (helpers), `src/components/AnalyticsEvents.tsx` (site-wide events), `src/components/TrackedLink.tsx`, `src/components/WhatsAppLink.tsx`, `src/lib/lead-tracking.ts` (form funnel), `src/lib/use-view-event.ts`.

## Event dictionary

| Event | When | Parameters |
|---|---|---|
| `page_view`, `session_start`, `first_visit`, `scroll` (90%), `click` (outbound), `form_start`, `form_submit`, `user_engagement` | Automatic GA4 events | `form_submit` also fires when our validation blocks the submit, so use the `lead_form_*` events below for the form funnel |
| `ai_referral` | Once per session when the visitor arrives from an AI assistant | AI source name |
| `scroll_depth` | 25, 50, 75, 90% of the page reached, once each per page view (only after a real scroll) | `percent`, `page_type` |
| `time_on_page` | 15, 30, 60, 120, 300 seconds with the tab visible, once each | `seconds`, `page_type` |
| `web_vitals` | LCP, INP, CLS, FCP, TTFB as Next.js reports them | `metric_name`, `metric_value` (ms; CLS is multiplied by 1000), `metric_rating` (good / needs-improvement / poor), `page_type` |
| `cta_view` | A `TrackedLink` is at least half on screen, once per page view | `cta_label`, `cta_destination`, `page_type` |
| `cta_click` | A `TrackedLink` click, or any link to `/book-consultation`, `/free-treatment-plan` or `/price-calculator` | `cta_label`, `cta_destination`, `page_path`, `page_type`, `scroll_percent`, `seconds_on_page`; links caught automatically also carry `placement` and `link_text` |
| `whatsapp_view` | A `WhatsAppLink` is at least half on screen, once per page view | `placement`, `page_type` |
| `whatsapp_click` | Any link to `wa.me` (footer, hero, closing CTA block, contact and finance pages, mobile bar, floating bubble) | `placement`, `page_path`, `page_type`, `scroll_percent`, `seconds_on_page`; automatic ones also carry `link_text` |
| `email_click`, `phone_click` | `mailto:` and `tel:` links | `placement`, `link_text`, `page_path`, `page_type`, `scroll_percent`, `seconds_on_page` |
| `faq_open` | A visitor opens an FAQ answer | `question` (first 80 characters), `position` |
| `lead_form_view` | A lead form is at least 40% on screen, once per page view | `form_type` (`quick` / `full`), `form_path`, `page_type` |
| `lead_form_start` | First field focused | `form_type`, `form_path`, `first_field` |
| `lead_form_field_complete` | A field was left filled in, once per field | `form_type`, `form_path`, `field` |
| `lead_form_error` | Validation blocked the submit | `form_type`, `form_path`, `error_field` |
| `lead_form_submit_valid` | Validation passed, the browser is posting the form | `form_type`, `form_path`, `fields_completed`, `seconds_in_form` |
| `generate_lead` | The form endpoint redirected back to the page | `form_type`, `form_path` |
| `lead_form_abandon` | The visitor left after starting a form and before a valid submit | `form_type`, `form_path`, `last_field`, `fields_completed`, `seconds_in_form` |

Placement names set in code: `floating_bubble`, `mobile_bar`, `finance_top`, `booking_top`, `booking_side`, `plan_hero`. Links caught automatically use `header`, `footer`, `nav` or `section: <heading>`. A `data-ga-placement` attribute on an element (or a parent) overrides the automatic name.

`page_type` values: `home`, `finance`, `conversion` (booking, plan, contact), `prices`, `treatment`, `blog`, `guide`, `proof`, `other`.

## GA4 admin setup (needed once)

1. **Key events** (Admin > Events): mark `generate_lead` and `whatsapp_click`. Remove `page_view` and `session_start` from key events; while they are marked, every session counts as engaged and the engagement rate reads 100%.
2. **Custom dimensions** (Admin > Custom definitions, scope Event): `placement`, `cta_label`, `cta_destination`, `form_type`, `form_path`, `first_field`, `last_field`, `field`, `error_field`, `page_type`, `percent`, `seconds`, `metric_name`, `metric_rating`, `link_text`, `question`. Parameters only appear in reports after they are registered; the first data shows after about a day.
3. **Custom metrics** (scope Event, standard): `metric_value`, `scroll_percent`, `seconds_on_page`, `fields_completed`, `seconds_in_form`.
4. **Filters**: internal traffic and the `vercel.com` and `app.neuronwriter.com` referrals.

## Reports to build (Explore)

- **Form funnel** (funnel exploration): `lead_form_view` > `lead_form_start` > `lead_form_submit_valid` > `generate_lead`, broken down by `form_path` and device. The step with the largest drop is the one to fix.
- **Where forms are abandoned**: `lead_form_abandon` by `last_field`, and `lead_form_error` by `error_field`.
- **WhatsApp conversion rate per placement**: `whatsapp_click` divided by `whatsapp_view`, by `placement` (for links caught automatically, compare clicks by `placement` with `scroll_depth` and page views).
- **CTA click-through per label**: `cta_click` divided by `cta_view`, by `cta_label`.
- **Reading depth**: `scroll_depth` and `time_on_page` by `page_type`; pages where visitors leave before 50% are candidates for a clearer opening.
- **Speed and stability**: `web_vitals` by `metric_name`, `metric_rating` and `page_type`.
- **Enquiry paths**: `scroll_percent` and `seconds_on_page` on `whatsapp_click` and `cta_click` show how far people read before they act.

## Reading the numbers

Traffic is small, so compare periods of at least two to three weeks and read UK traffic only. Counts of one or two events are noise. A change in a rate matters only when both the numerator and the denominator have a few dozen events.
