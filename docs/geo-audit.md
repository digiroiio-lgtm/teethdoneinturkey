# GEO audit and implementation, 18 October 2026 (UTC)

## Scope and evidence

Repository baseline: `c98dfd024d1c7487cc5304f04df2f804075f0464`.
The supplied Readdy screenshot reports **85 overall**, with 27 discoverability,
21 extractability, 24 entity citability and 5 structured data. These are checker
subscores, not independently measured percentages. No new score is claimed.

`seo/geo-audit-baseline.json` inventories every indexable source page, direct schema
types, shared ArticleJsonLd usage, visible named review records and claim-review
candidates. Flags identify evidence gaps, not proof that a claim is false.

| Baseline finding | Evidence | Result in this change |
| --- | --- | --- |
| 77 indexable static pages | Source and sitemap inventory | Same routes and indexability retained |
| 32 blog pages use ArticleJsonLd | Shared component callers | Added linked WebPage, article and breadcrumb IDs |
| 39 hidden-only review attributions | 26 blog callers and 13 inline guide graphs | Removed/gated to match actual visible attribution |
| 6 dated named medical reviews | Existing page badges and reviewer profile | Preserved existing month-level records in one register |
| 16 pages used SourcesList | Source inventory | Added clinical references to 11 further eligible pages |
| 5 treatment detail pages lack clinical references/review status | Existing treatment template | Added short answers, clinical information notices, risk/aftercare context and references |
| 3 graphs reference undefined `/#business` | Home, guides hub and veneer cost page | Point to existing `/#organization` |
| IndexNow ran while building | update-route-lastmod imported ping | Manifest generation is now local only; post-deploy command is explicit |
| 38 page sources contain finance claim candidates | Baseline claim flags | Requires finance-owner evidence; no new product terms published |

## Schema inventory

- Root: Organization (patient coordination), WebSite. Kept separate from the
  clinical provider. Added a single identified Akdeniz Dental Clinic Dentist
  entity, supported by the clinic's public contact/profile details.
- Home and selected hubs/prices: WebPage, BreadcrumbList. Fixed dangling entity
  references without changing canonical URLs.
- Treatment details: Article, MedicalProcedure and BreadcrumbList. Added stable
  page/article/breadcrumb IDs, linked WebPage, visible-matching citations and a
  clinic reference. No rating, review count, clinician qualification or treatment
  outcome was invented.
- Blog: BlogPosting and BreadcrumbList via ArticleJsonLd; WebPage now connects
  them. `reviewedBy` belongs to the page and is emitted only for existing recorded
  reviews. A generic reviewer prop cannot establish a completed review.
- Guides: Article (some also use MedicalWebPage), FAQPage and BreadcrumbList.
  Removed 13 unrecorded reviewer attributions. Other guide-template refactoring
  can be assessed separately; no unnecessary page creation is included here.
- FAQs: Existing shared component renders questions and answers in the initial
  HTML and uses the same data for FAQPage. No claim of guaranteed rich results.
- Service: No clinical Service was attributed to the coordination company.
  Adding product/provider-specific offers requires a verified contractual role.

The report from `node scripts/validate-geo.mjs` lists **rendered**, rather than
inferred, schema types per URL and checks JSON parsing, duplicated IDs, dangling
site entities, canonical URLs, internal route targets and hidden review claims.
This is a local validation, not a claimed Schema.org or Google Rich Results Test
pass. Run both external validators on the final deployed URLs.

## Evidence-based content implemented

- Home plus five treatment detail pages and five veneer articles now have visible
  clinical reference sections, with exact source titles, publishers, URLs and
  the claims each source supports.
- Five treatment pages have short answer blocks near the start and contextual
  risk/aftercare links. Existing lead forms, WhatsApp destinations, hero layout,
  treatment price figures and analytics code were retained.
- The veneer treatment page no longer promises perfect/natural outcomes, equal
  quality by country, a universal ten-year veneer guarantee, a fixed preparation
  depth, or suitability for grinding. Sources support general patient guidance,
  not clinic outcome or price claims.
- Akdeniz's public clinician biography supports the existing Medipol education
  and clinic affiliation. The clinic address and telephone are shown visibly
  alongside the schema. The website's coordinating role is stated separately.
- Review dates remain the dates already recorded in the repository. No new
  clinician review was performed or claimed. New treatment information carries
  a clinical information notice until actual professional review.

## Claims still needing owner/clinical evidence

These remain an explicit review queue; adding references does not validate them.
The baseline JSON provides the full page list.

| Priority | Location / example | Evidence or action needed |
| --- | --- | --- |
| P1 | `/monthly-payment`, `/finance-options-uk`, MonthlyPaymentTable and finance blogs | Approved finance promotion text, current provider/broker identity, legal introducer role and approval record |
| P1 | 0% APR, 12/24/36-month plans, fee-free claims and advertised repayments | Current product terms and approved representative example, including amount borrowed, deposit, APR, fees, total repayable and term |
| P1 | Soft search/no credit impact, instant decision, 60-second pre-qualification | Verified provider application journey, eligibility and check type; do not infer from other lenders |
| P1 | £250 single implant at £7/month versus a stated £500 finance minimum | Reconcile the product minimum with actual eligible treatment, rather than dividing price by months |
| P1 | MonthlyPaymentTable: £2,800 at £82/36 months and £122/24 months alongside 0% claims | These do not reconcile to £2,800 at 0%; obtain approved terms instead of silently inventing a rate |
| P1 | Monthly page: £3,800 veneer totals alongside £267/£140/£95 plan figures | Resolve inconsistent principal/deposit/term assumptions |
| P1 | Finance cancellation and credit eligibility assertions | Compliance-owner review of the actual agreement; no general legal assurance inferred |
| P1 | UK company / site contractual relationship | Confirm website operator, contracting parties and whether Akdeniz Dental Consultancy UK Ltd introduces finance; no FCA status inferred from company incorporation |
| P1 | JCI-accredited, ten-year structural guarantee, lifetime implants, universal same-day teeth | Clinic certificates, written guarantee/exclusions and clinician-approved wording; source references are not proof |
| P1 | All-on-6 'all-inclusive' versus final arch charged separately | Written itemised package inclusions for both visits before a promise is made |
| P2 | Fixed veneer/crown/implant lifespans in older articles | Relevant clinical evidence and actual clinician review; avoid country-based outcome equivalence |
| P2 | Ratings, testimonials and patient totals | First-party records, consent and traceable review sources before any structured Review/AggregateRating |

No APR, lender identity, FCA claim, eligibility rule, loan fee or monthly product
figure was created in this change. The finance pages' existing commercial text
was audited, not represented as approved. The supplied task explicitly says:
**"Do not publish financial promotions without appropriate compliance review."**
Consequently this is a reviewable PR, not a production publication or a completed
finance-compliance sign-off. Resolve the items above before claiming the entire
site passes the requested clinical/financial publication gate.

## Technical accessibility and indexing

The site uses `en-GB`, self canonicals, server-rendered JSON-LD, a generated
canonical sitemap and explicit crawler rules. Existing robots policies were
preserved. The optional llms files remain experiments; they are not evidence of
ranking or citation gains. Bing ownership/account configuration cannot be
verified from source code alone.

Manifest generation no longer contacts IndexNow during preview, CI or failed
builds. After a successful production deployment, submit only affected canonical
paths using:

```sh
npm run seo:indexnow -- --deployed / /about-us /treatments/veneers-turkey
```

Pass the complete changed URL list for the release. The command checks that paths
are canonical/indexable and verifies the live key file before submitting. An API
failure now fails the command; HTTP acceptance is not proof of indexing. This PR
does not assert that the historical Bing 403 is resolved. No live indexing
submission was made during local verification.

## Validation and rollout

Run lint, TypeScript, production build, manifest consistency and the production
HTML audit. Local HTTP checks cover seven key routes, consultation form controls and
WhatsApp/consultation destinations without transmitting patient data. See the
validation JSON and PR for observed results. Browser/mobile overflow, FAQ
interaction and visual QA are pending: this environment has no installed browser
executable and the browser download failed. A controlled Lighthouse mobile
before/after comparison was not performed. The production shared first-load
JavaScript is 102 kB; all new information components are server components.

Deployment log entry: **pending production release**. Expected effects are clearer
entity relationships, truthful medical attribution and easier extraction of
supported treatment information; no ranking or score increase is guaranteed.
Do not mark the production deployment complete without a successful deployment
status and live smoke check. The current connector exposes repository/PR tools,
not a verified Vercel production release operation.

After release, run Readdy against the same URL/configuration and record:

| Metric | Before | After |
| --- | --- | --- |
| Overall GEO | 85 | Pending deployed retest |
| AI Discoverability | 27 | Pending deployed retest |
| Content Extractability | 21 | Pending deployed retest |
| Entity Citability | 24 | Pending deployed retest |
| Structured Data | 5 | Pending deployed retest |

Use existing AiReferralTracking and lead/CTA events to compare AI-source sessions,
landing pages and qualified enquiries over 7/28 days. Referral sessions do not
capture all AI mentions; citation monitoring is a separate measurement. GSC/GA4
performance data and page-level 90-day impressions were not provided in this
session, so no low-value pruning decisions are made.

## Checked primary sources

- [ADA MouthHealthy: Veneers](https://www.mouthhealthy.org/all-topics-a-z/veneers)
- [NHS: Dental treatments](https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/)
- [FDA: Dental Implants: What You Should Know](https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know)
- [European Federation of Periodontology: Peri-implant diseases](https://www.efp.org/for-patients/dental-implants/peri-implant-diseases/)
- [Akdeniz: Dr. Mustafa Akça](https://akdenizdental.com/mustafa-akca)
- [Akdeniz: Our team](https://akdenizdental.com/our-team)
- [Next.js: JSON-LD](https://nextjs.org/docs/app/guides/json-ld)

The installed version is Next.js 15.5.15. The AGENTS.md documentation path
`node_modules/next/dist/docs/` is absent in this package; the installed README
points to official Next.js documentation, which was consulted before changes.
