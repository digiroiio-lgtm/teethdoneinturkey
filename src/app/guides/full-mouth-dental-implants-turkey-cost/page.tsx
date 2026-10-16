import { permanentRedirect } from "next/navigation";

// Redirected 2026-10-16. The "full mouth implants cost" intent is owned by
// /blog/full-mouth-implants-uk-vs-turkey, which Google already ranks for these
// queries. This URL had zero impressions in its first month, so there was no
// equity to lose. The bridge-type section was merged into the blog page.
export default function FullMouthImplantsCostRedirect() {
  permanentRedirect("/blog/full-mouth-implants-uk-vs-turkey");
}
