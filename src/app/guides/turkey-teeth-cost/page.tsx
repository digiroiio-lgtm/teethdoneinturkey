import { permanentRedirect } from "next/navigation";

// Consolidation direction reversed 2026-09-11.
//
// On 2026-09-08 this guide absorbed /prices/turkey-teeth-cost, on the basis that
// Google had "already picked the guide (21 impressions, position 38) while the
// prices URL earned none". That read was wrong: the prices URL had simply not
// entered the SERP yet. It first appeared 2026-09-07 — the day before the merge
// — and over 09-04..09-10 earned 111 impressions at average position 34.1
// against this guide's 121 at position 64.1.
//
// The decisive evidence is same-query, same-week, which controls for query mix:
//   "how much do turkey teeth cost"  prices 33.7  vs  guide 72.6
//   "how much for turkey teeth"      prices 28.3  vs  guide 88.3
//   "turkey dental prices"           prices 89.3  vs  guide 72.0
//
// Two of three head-to-heads favour the prices URL by 40-60 positions, so the
// 301 was pointing the cluster at the weaker of the two URLs. The full guide
// content (the deeper page) has been moved to /prices/turkey-teeth-cost, which
// is also where the site's other cost pages live, and this URL now redirects
// there instead.
export default function TurkeyTeethCostGuideRedirect() {
  permanentRedirect("/prices/turkey-teeth-cost");
}
