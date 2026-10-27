import { permanentRedirect } from "next/navigation";

// Redirected 2026-10-27. The "dental payment plans Turkey" intent is owned by
// /finance-options-uk, which already covers plans, examples and bad credit and now
// also carries this page's eligibility list and application walkthrough (#how-to-apply).
// This URL had zero impressions in its first months.
export default function PaymentPlansRedirect() {
  permanentRedirect("/finance-options-uk");
}
