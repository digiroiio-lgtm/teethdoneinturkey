import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Competed with the packages guide for the same queries; city choice and trip-planning tips moved there (#planning-the-trip).
export default function Redirect() {
  permanentRedirect("/guides/turkey-teeth-packages");
}
