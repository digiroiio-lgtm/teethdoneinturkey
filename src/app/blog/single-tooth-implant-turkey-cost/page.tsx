import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Lost to the implants cost hub on every shared query; the two-trip single-implant example moved there.
export default function Redirect() {
  permanentRedirect("/blog/implants-cost-uk-vs-turkey");
}
