# Guides hub editorial refresh

Deployment log: 22 October 2026 | `/guides` | Restructure the existing library
into question-led reading paths with evidence, FAQ and dated head JSON-LD |
Improve navigation, standalone answers and evidence traceability.

Context.dev baseline checked directly: **65/100, D**. Structure 15/30,
Schema 15/20, Quality 15/25, Technical 15/15, Freshness 5/10.

## Changes, following the requested priorities

1. One H1, five H2 reading paths and H3 guide summaries replace a flat card list.
   FAQ, sources and the enquiry section bring the total to eight H2s. All fourteen
   existing guide destinations are retained without redirects or new content URLs.
2. Five visible FAQ answers share their data with FAQPage JSON-LD in the actual
   server-rendered head. CollectionPage, ItemList and BreadcrumbList are there too.
3. Dated NHSBSA charges, original percentage calculations from preceding/current
   charges, BDA dentist-survey findings and FCA household context add factual depth.
   Populations, jurisdictions, publication dates and limits are explicit.
4. The hub's visible editorial date and Article/CollectionPage dateModified share
   `2026-10-21`. No new medical review, reviewer assignment or changed dates for
   linked articles are claimed. The previous blanket medical-review claim is removed.
5. Twenty-seven H2/H3 passages each contain 75–300 words in built HTML.
6. Rendered main content contains 3,577 words, excluding navigation/footer.
   Each guide summary explains when to read it and what to check in a personal plan.
7. All eight H2s begin with direct answers of 40–60 words.
8. Two short original-source quotations identify Eddie Crouch and Sarah Pritchard,
   their roles at publication and the statement date. No endorsement is implied.

The Article describes this new, visible reading guidance. ItemList describes the
linked library. FDA, NIDCR and CDC links support relevant clinical planning points;
historical BDA figures are not presented as overseas-patient complication rates.
NHS urgent-care references do not promise free appointments or confirmed access.

## Validation

- Local lint, production build, TypeScript and freshness-manifest check passed.
- `scripts/check-guides-aeo.py` validates built headings, passage lengths, direct
  answers, visible/schema FAQ parity, attribution, fourteen direct destinations,
  head-only schema and isolation from 98 other HTML pages.
- The existing homepage AEO assertions also passed with its content unchanged.
- HTTP checks returned 200 for the hub, representative linked routes and contact;
  an unknown guide returned 404. Hub JSON-LD appears only on `/guides`.
- Only `/guides` changes in the 77-route sitemap freshness manifest.
- CI runs both homepage and guides HTML checks after the build. The connected PR
  records the deployment and final Context.dev result after publication.

No canonical, redirect, noindex, finance-offer or enquiry-processing changes are
included. The score is a checker result, not a measurement of actual AI citations.
