import { permanentRedirect } from "next/navigation";

// Redirected 2026-10-27. The "implant cost" intent is owned by
// /blog/implants-cost-uk-vs-turkey, which Google already ranks for these queries.
// This URL had zero impressions since launch. Nothing unique was carried over:
// its brand price rows conflict with the blog's figures and its guarantee
// claim is unsourced.
export default function DentalImplantsCostRedirect() {
  permanentRedirect("/blog/implants-cost-uk-vs-turkey");
}
