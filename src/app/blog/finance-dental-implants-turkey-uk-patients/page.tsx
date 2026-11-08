import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Implant-specific copy of the finance hub; implant amounts and staged-treatment note now in the hub FAQ.
export default function Redirect() {
  permanentRedirect("/finance-options-uk");
}
