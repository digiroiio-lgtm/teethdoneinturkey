import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Same intent and sections as the finance hub; its only unique FAQ (early repayment) moved there.
export default function Redirect() {
  permanentRedirect("/finance-options-uk");
}
