import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// The hub already lists 8 to 24 veneer prices; the 20-veneer all-in trip example moved there.
export default function Redirect() {
  permanentRedirect("/prices/veneers-turkey-cost");
}
