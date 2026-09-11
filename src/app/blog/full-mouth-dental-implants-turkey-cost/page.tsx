import { permanentRedirect } from "next/navigation";

// Merged into /blog/full-mouth-implants-uk-vs-turkey on 2026-09-11.
//
// The two pages were near-duplicates of one intent: the same All-on-4 /
// All-on-6 / individual-implant breakdown, the same both-arches price table,
// the same "what's included", "how many trips" and monthly-payment sections.
//
// Google picked the other one and suppressed this one completely. Over the
// whole lifetime of the Search Console property (first impression 2026-09-02,
// data to 09-10) this URL has recorded ZERO impressions on ZERO queries, while
// /blog/full-mouth-implants-uk-vs-turkey entered the SERP on 09-05 and earned
// 69 impressions at average position 24.9 across the full-mouth cost family:
//   full mouth dental implants turkey price            13 @ 33.7
//   full mouth dental implant turkey costs             11 @ 30.8
//   full mouth dental implant turkey costs procedures   8 @ 28.0
//   full mouth dental implants cost turkey              8 @ 27.4
//   full set of teeth implants cost turkey              5 @ 38.0
//
// This is the inverse of the 2026-09-08 cost merge that had to be reversed on
// 09-11. There, the redirected URL had simply not entered the SERP yet — it
// first appeared the day before the merge. Here the suppressed URL has had the
// same six days of SERP life as the winner and earned nothing on any query, so
// the direction of this consolidation is evidence-led rather than assumed.
//
// Unique content ported to the target before redirecting: the explicit
// exclusions (flights, accommodation, insurance, bone grafting) and the
// per-implant unit pricing, which replaced a £8,400-£12,000 full-mouth
// individual-implant figure that matched neither the site's £250 Osstem nor
// its £800 Straumann published unit price.
export default function FullMouthDentalImplantsTurkeyCostRedirect() {
  permanentRedirect("/blog/full-mouth-implants-uk-vs-turkey");
}
