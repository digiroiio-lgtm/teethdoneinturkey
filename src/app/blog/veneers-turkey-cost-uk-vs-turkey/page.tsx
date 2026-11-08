import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// The hub already carries the UK vs Turkey veneer price comparison.
export default function Redirect() {
  permanentRedirect("/prices/veneers-turkey-cost");
}
