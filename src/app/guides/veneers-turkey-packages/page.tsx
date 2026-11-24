import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Google preferred the veneers cost hub for package queries; package vs treatment price, written checks and red flags moved there (#veneer-packages).
export default function Redirect() {
  permanentRedirect("/prices/veneers-turkey-cost");
}
