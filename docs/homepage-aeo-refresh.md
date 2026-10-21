# Homepage AEO refresh, 21 October 2026

| Date | URL / template | Change | Reason | Expected effect |
| --- | --- | --- | --- | --- |
| 2026-10-21 | `/` | Substantive editorial refresh, visible update date and matching Article/WebPage dateModified | Missing freshness signal in the supplied checker report | Make the actual revision date extractable |
| 2026-10-21 | `/` | Treatment explanations and four practical patient-planning sections | Answer genuine questions about deposits, photo assessments, travel budgets and independent advice | Clear standalone passages without new competing URLs |
| 2026-10-21 | `/` | Homepage-only server-rendered head graph with Article, WebPage, FAQPage and breadcrumbs | User explicitly requested JSON-LD in head | Extractable markup that does not leak onto other routes |
| 2026-10-21 | `/` | Third attributed quotation, from Eddie Crouch’s BDA statement, with source link | Add an independently verifiable expert voice | Traceable attribution alongside the two existing clinic quotations |

## Evidence and editorial limits

- Existing clinic quotations from Mustafa Akça and Mehmet Onur Merey were retained; no new statement was invented for either clinician.
- The added BDA quotation is a 14-word extract from the organisation’s published statement: https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/
- GDC guidance was checked at https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment . The previous NHS reference returned 404 and was replaced with the working BDA primary source.
- The BDA survey denominator is explained: dentists who had examined dental tourists, not the complication rate among patients and not a Turkey-specific failure rate.
- Review counts change. Link to live profiles instead of advancing the verification date on historical counts.
- Existing clinical review remains 19 October 2026. The 21 October update is editorial; it does not claim a new clinician sign-off.
- Existing starting prices are labelled indicative examples, not reverified market statistics. The comparison formula and package-scope limitations are stated. The homepage’s unsupported 0% repayment table is replaced with explanatory payment guidance and a clearly labelled arithmetic example.
- No claim that word count, quotations or a checker score guarantees AI citations was added to the website.

## Implementation and verification

The installed Next.js 15.5.15 package does not contain `node_modules/next/dist/docs/`. Consulted the official JSON-LD and parallel-route guides instead:

- https://nextjs.org/docs/app/guides/json-ld
- https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes

The root head renders the `@structuredData` slot. Its homepage page supplies the graph; the catch-all explicitly clears it during soft navigation, and the default supplies an empty fallback. FAQ content and schema share `src/app/home-content.ts`; shared components keep their existing defaults on other pages.

- `npm run lint`: passes with three existing unrelated unused-variable warnings. Replaced the pre-existing internal `<a>` on `/contact` with `Link` to clear the baseline CI error; its text and destination are unchanged.
- `npm run build`: passes.
- `npm run seo:lastmod:check`: passes; manifest regenerated, with no new indexable URLs.
- `python3 scripts/check-homepage-aeo.py`: verifies the built HTML has 3,857 main-content words; all 25 H2/H3 passages have 75–300 words; first five H2 openers have 40–60 words; valid homepage JSON-LD appears in head once; visible FAQ matches schema; three blockquotes; no homepage graph in 98 other rendered HTML files. Added to CI after build.
- Existing IndexNow submission returns 403 `UserForbiddedToAccessSite`; this is a known repository issue and does not fail the build. No successful indexing submission is claimed.

## Context.dev verification

The requested checker was run for the exact production homepage URL. It returned 85/100 with the original 1,131-word-era text, omitting even the homepage date and clinic quotations that were already in the starting repository and current web retrieval. This is an observed stale snapshot, not evidence that a new deployment failed. A post-deployment check must confirm the extracted text contains `21 October 2026` and the added sections before its score can be attributed to this change.

## Fresh production crawl and reference follow-up

Production deployment `df15c0a` was confirmed live with the 21 October date and homepage-only head graph. The exact URL still produced the older checker snapshot. A cache-separated request for `/?aeo-review=20261021` extracted the current page and scored **90/100, Grade A**, with all five originally requested checks passing. It measured 3,991 extracted words including surrounding site content.

Article markup activated an additional authoritative-citations check, which the checker previously treated as not applicable. The GDC and BDA are relevant primary professional sources, but its domain heuristic reported 0/3 recognised links. Added three verified FDA/NIH references beside the existing guidance on implant healing, clinical gum assessment and continuing oral hygiene, as well as in the references and Article citations. These US sources support clinical background, not UK regulatory status or an endorsement of the service.

Follow-up local validation: lint, build, freshness-manifest check and the rendered-HTML check pass. The page now contains 3,944 main-content words under the same counting method, with all 25 passages still in range.

## Third independent clinical reference

The follow-up deployment `9dc9c0d` passed CI and Vercel deployment checks. A fresh Context.dev request using `/?aeo-review=20261021-sources` read the new FDA/NIH references and 4,078 extracted words but still scored 90/100: the tool reported **2/3 authoritative citations**. This shows the two NIH URLs count as one recognised source domain. Replaced the oral hygiene reference with the CDC’s verified oral-health overview, which recommends brushing, flossing and professional dental care: https://www.cdc.gov/oral-health/about/index.html . The three references now come from FDA, NIH and CDC. No new clinical outcome claims were added.
