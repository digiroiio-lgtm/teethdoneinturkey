import { permanentRedirect } from "next/navigation";

// Merged into /blog/full-mouth-implants-uk-vs-turkey on 2026-09-14.
//
// This is a regression fix, not a new judgement. On 2026-09-11 the full-mouth
// implant cluster was deliberately consolidated onto
// /blog/full-mouth-implants-uk-vs-turkey after that URL was shown to hold the
// entire family of cost queries (69 impressions at average position 24.9) while
// /blog/full-mouth-dental-implants-turkey-cost — a near-identical page — had
// recorded zero impressions on zero queries across the lifetime of the property.
// That duplicate was 301'd away and the surviving URL was rebuilt on the cost
// intent it actually ranks for.
//
// On 2026-09-13 a batch of twelve new pages recreated that same page at this
// path, under /guides/ instead of /blog/: the same All-on-4 / All-on-6 /
// both-arches breakdown, the same Turkey-vs-UK price comparison, the same
// package-cost and FAQ sections, with an exact-match title. The batch did not
// read seo/serp-history.md, so it had no way to know the merge had happened.
//
// The page it duplicates is now the second-strongest URL on the property —
// 92 impressions at average position 30.1 over 2026-08-18..09-14, holding
// "turkey teeth costs" at position 4.0, "full mouth dental implants turkey" at
// 5.0 and "cost of turkey teeth" at 5.2. Leaving an exact-match duplicate live
// against it risks exactly the suppression the 09-11 merge was fixing, so the
// 09-11 decision is restored here.
//
// One section of this page was genuinely new and is NOT duplicated on the
// survivor: "Titanium Bar vs Zirconia Bridge" (which permanent restoration is
// fitted on the second visit, and why that changes the price). It is recorded
// verbatim in seo/serp-history.md to be ported into
// /blog/full-mouth-implants-uk-vs-turkey once that page has had time to settle
// after its 09-11 rebuild — it is not being ported today, because rewriting a
// page three days after a rebuild is how you lose the ability to read the
// result of the rebuild.
export default function FullMouthDentalImplantsTurkeyCostGuideRedirect() {
  permanentRedirect("/blog/full-mouth-implants-uk-vs-turkey");
}
