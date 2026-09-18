import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. "Full set of teeth turkey cost" intent is owned by
// /guides/full-mouth-dental-implants-turkey-cost, which covers All-on-4, All-on-6,
// full arch pricing and the two-visit process. Consolidating equity to one page.
export default function FullSetOfTeethTurkeyCostRedirect() {
  permanentRedirect("/guides/full-mouth-dental-implants-turkey-cost");
}
