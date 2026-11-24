import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Its loan / credit card / savings comparison duplicated the hub's "Payment Plan, Loan, Credit Card or NHS Charge" section; savings and the FCA Register check moved there.
export default function Redirect() {
  permanentRedirect("/finance-options-uk");
}
