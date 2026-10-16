import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. "Full set of teeth turkey cost" intent is owned by
// /blog/full-mouth-implants-uk-vs-turkey, which covers All-on-4, All-on-6,
// full arch pricing and the two-visit process. Consolidating equity to one page.
export default function FullSetOfTeethTurkeyCostRedirect() {
  permanentRedirect("/blog/full-mouth-implants-uk-vs-turkey");
}
