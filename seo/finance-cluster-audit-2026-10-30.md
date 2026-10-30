# Finance / monthly-payment cluster audit — 2026-10-30

Scope: read-only audit (plan steps 1–3). No page, redirect, sitemap or robots change was made.
Goal: capture UK visitors who are close to booking dental treatment in Turkey and search for finance, monthly payment, instalments and dental finance.

## 1. What the data says

Source: Nightwatch project 384402 (`teethdoneinturkey.co.uk`, GB), 30 Sep – 30 Oct 2026.

| Query (UK) | Position now | Notes |
|---|---|---|
| can you pay monthly for turkey teeth | 17 | History 9–19, with gaps and two 1s; 4 impressions, 0 clicks |
| pay monthly teeth turkey | 14 | Alternated 1–14 over the month; 4 impressions |
| pay monthly turkey teeth | 14 | Alternated 1–14; 2 impressions |
| turkey teeth cost pay monthly | 14 | 9–16 with many gaps; 2 impressions |
| veneers pay monthly uk | 28 | Best 2, mostly 43–47 |
| veneers turkey pay monthly | 32 | −24 in a week; best 2 |
| veneers monthly payments | none (best 39) | 1 impression |
| monthly payment dental implants | none | |
| pay monthly dental implants uk | none | 1 impression at position 89 |
| pay monthly veneers | none | |

- Finance queries do rank, but each has 1–4 impressions in total. The signal is too small to judge page quality from it, and positions jump between 1 and 40+ within days, which is typical of a new site being tested.
- No tracked keyword contains "instal" (0 results) or "dental finance turkey", so those intents are not being measured.
- Not yet verified: which URL Nightwatch records as the ranking result for each query. `list_keywords` did not return it. `get_serp_data` should, and this is the first thing to check before any consolidation decision.

## 2. Page inventory (finance intent)

| URL | State | Title / H1 focus | Role |
|---|---|---|---|
| `/finance-options-uk` | live, 472 lines | "Turkey Teeth Finance: Pay Monthly Plans for UK Patients" / "Can You Pay Monthly for Turkey Teeth?" | Proposed primary page for finance, instalments, dental finance |
| `/monthly-payment` | live, 483 lines | "Turkey Teeth Monthly Payments: Cost Per Treatment" | Per-treatment monthly cost; proposed primary for "cost per month" |
| `/guides/cant-afford-dental-treatment-uk` | live, 304 lines | affordability, NHS, finance vs loan | Different intent (cannot afford UK care); keep, link to primary |
| `/blog/can-you-pay-monthly-for-teeth-in-turkey` | live, 195 lines | "Monthly Payment for Teeth in Turkey" | Overlaps the exact question on `/finance-options-uk` (its H1 is the same question) |
| `/blog/can-you-pay-monthly-for-veneers-turkey` | live | veneers + pay monthly | Treatment-specific overlap with the two above |
| `/blog/finance-dental-implants-turkey-uk-patients` | live, 177 lines | "Finance Implants Turkey – UK Guide" | Implant-specific overlap |
| `/blog/dental-tourism-finance-explained` | live, 202 lines | consumer credit, FCA authorised lender check | More distinct: explains how to check a lender |
| `/guides/turkey-teeth-monthly-payments` | 301 stub → `/finance-options-uk` | | Already consolidated |
| `/blog/dental-treatment-turkey-payment-plans` | 301 stub → `/finance-options-uk` | | Already consolidated |

- No page in `src` links to either 301 stub, so the internal-link rule in docs/seo-directive.md §SİTE is currently met for these two.
- Seven live pages answer one broad intent ("can I pay monthly / finance Turkey dental work"). That is the cannibalisation pattern in directive §7. The directive also says not to redirect on keyword similarity alone, so every MERGE below is a candidate that needs the ranking-URL check first.

### Candidate decisions (not applied; need approval per directive §22, §28)

| URL | Candidate action | Reason |
|---|---|---|
| `/finance-options-uk` | KEEP + IMPROVE | Strongest, most complete page, updated 2026-10-29 |
| `/monthly-payment` | KEEP + IMPROVE | Distinct angle (per-treatment monthly figures), but check it does not duplicate the finance page's example table |
| `/guides/cant-afford-dental-treatment-uk` | KEEP | Different problem |
| `/blog/dental-tourism-finance-explained` | KEEP, rewrite as the "how to check a lender" explainer | Has a distinct purpose |
| `/blog/can-you-pay-monthly-for-teeth-in-turkey` | MERGE candidate → `/finance-options-uk` | Same question as the H1 of the finance page |
| `/blog/can-you-pay-monthly-for-veneers-turkey` | decide after SERP check | Treatment-specific query ("veneers turkey pay monthly") may justify a separate page |
| `/blog/finance-dental-implants-turkey-uk-patients` | decide after SERP check | Same, for implants |

## 3. Claims that need verification (directive §11, §23)

Finance is YMYL and, in the UK, a financial promotion. I am not able to judge what is legally permitted. This list is for the site owner and, if needed, a compliance adviser.

| Where | Claim | Issue |
|---|---|---|
| `/finance-options-uk` meta description and hero | "Bad credit considered", "0% APR representative", "from £78/month" (hero) and "from £6/month" (meta) | The page body correctly says approval is the lender's decision and cannot be guaranteed. "Bad credit considered" in the title area reads closer to a promise than the body does. Two different "from" figures sit on the same page. |
| `/guides/cant-afford-dental-treatment-uk` | "from £6/month for a single veneer", "about £17/month for a single implant" | £6/month over 36 months implies a total of about £216. Check it against the veneer price used elsewhere (£190 per E-max veneer per the veneers pages) and against a real lender quote. |
| `/finance-options-uk`, `/monthly-payment`, `/guides/turkey-teeth-packages` | "0% APR representative … at least 51% of accepted applicants" wording | "Representative APR" has a specific legal meaning. It must match an actual lender offer. No lender or broker is named on any of these pages. |
| `/blog/finance-dental-implants-turkey-uk-patients` | "Apply online with a UK lender through our portal", "Full FCA-regulated process" | States that a portal and an FCA-regulated process exist. Confirm both and who is authorised (the lender, a broker, or this business). |
| `/finance-options-uk`, `/monthly-payment` | "Pre-qualify in 60 seconds", "instant decision", "no impact on your credit score" | Depends on the provider's actual product. Soft-search wording is hedged correctly in the FAQ answers. |
| All finance pages | No visible statement of who provides the credit, whether the site is a credit broker or an introducer, and which firm is FCA authorised | Not found by searching `src` for "credit broker", "introducer" and named lenders. Only `/blog/dental-tourism-finance-explained` explains how to check a lender's FCA status in general terms. |

What is already done well: the finance and monthly-payment FAQs, the bad-credit section and the blog FAQ consistently say that no provider can guarantee approval, that pre-qualification is a soft search, and that figures are examples, not quotes. The risk is in the headline claims and in the missing "who is the lender / are we a broker" disclosure.

## 4. Sister domain: `turkeyteethfinance.co.uk`

- Nightwatch has a separate project (386041, created 2026-10-28, 55 keywords, 10 pages indexed) whose competitor list includes `teethdoneinturkey.co.uk`, `turkeyteethfinance.com`, `remedifinance.com` and `kandoo.co.uk`.
- Nothing in this repo references it (searched for `turkeyteethfinance`, `losmiles`, `uksmiles`).
- If it targets the same queries with similar content, the two sites compete with each other and may read as a doorway/duplicate pair (directive §9). Needs a decision from the owner: separate brand with its own content, or consolidate. No action taken.

## 5. Recommended next steps (in order)

1. Run `get_serp_data` for the 10 queries above and record the ranking URL for each, then finalise the table in section 2.
2. Owner provides: finance partner/lender name and current product terms (APR, term, min and max amount), authorisation status, and the relationship to `turkeyteethfinance.co.uk`.
3. Align the headline numbers (£6, £17, £78, "bad credit considered") with those terms. Remove or qualify any that cannot be sourced and dated.
4. Add one visible, dated "Finance disclosure" block on the primary pages once step 2 is answered.
5. Then apply plan steps 4–7 to existing pages only (information gain, instalment/"dental finance Turkey" wording, internal links, GEO answer block).
6. Add tracking keywords for "turkey teeth instalments", "dental finance turkey", "turkey dental instalment plan" (needs approval).

## 6. Deployment log

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | `seo/finance-cluster-audit-2026-10-30.md` | New audit report, no site change | Baseline before finance-cluster optimisation | None on rankings |

## 7. Update 2026-10-30: finance partner and our status

Owner confirmed: the finance partner is Ideal Sales Solutions Ltd (T/A Ideal4Finance), a credit broker, and this site is its Introducer Appointed Representative (IAR).

NOT verified: principal's FRN and permissions. The FCA Register, Companies House and ideal4finance.com could not be reached from this session (hosts not in the network allow-list). Do not publish an FRN until checked on the FCA Register.

Consequences for the page work (not legal advice; confirm with a compliance adviser and the principal):
- Finance claims on our pages are financial promotions. Headline figures (0% APR representative, from £78/£6/£17 per month), "bad credit considered", "instant decision" and "no impact on your credit score" should be approved in writing by the principal before they stay or are reworded.
- Copy must not imply we lend, assess applications, or give credit advice. Candidates to review: "Our finance is entirely UK-based", "Full FCA-regulated process" (`/blog/finance-dental-implants-turkey-uk-patients`), "Apply online with a UK lender through our portal".
- Add a visible disclosure naming the principal, our IAR status and the broker-not-lender role. Draft (unpublished, needs principal approval): "[Company] is an Introducer Appointed Representative of Ideal Sales Solutions Ltd (T/A Ideal4Finance, FCA FRN [VERIFY]). We do not lend or give credit advice; we introduce you to Ideal4Finance, a credit broker. Offers come from lenders on its panel. Approval is the lender's decision and is not guaranteed. Monthly figures are examples, not quotes."

Open inputs needed: principal's written approval process and approved wording/representative example, our own IAR registration details, and confirmation that £6, £17 and £78 per month match current panel offers.

## 8. Change applied 2026-10-30: finance claims removed, IAR-compliant wording

Owner decision: drop the aggressive finance claims and use soft, UK-compliant introducer wording.

Removed everywhere (35 files incl. `public/llms.txt`, `public/llms-full.txt`, FAQ schema data):
- "0% APR representative", "0% interest" and "interest-free" claims about our own offer
- Every monthly figure (£6, £17, £78, £106, £125, £156 and the 12/24/36-month tables), because each was derived by dividing the price at 0%
- "Bad credit considered", "instant decision", "pre-qualify in 60 seconds", "no impact on your credit score", "Full FCA-regulated process", "apply through our portal", the £500–£30,000 finance range, and the "Our Recommended Route" ranking of a finance product

Added / reworded:
- `src/components/FinanceDisclosure.tsx`: IAR disclosure (Introducer Appointed Representative of Ideal Sales Solutions Ltd T/A Ideal4Finance; we do not lend or give credit advice; approval not guaranteed; you can arrange finance independently). Rendered on the finance, monthly-payment, three finance blogs, the full-mouth implants, packages, root-canal, cant-afford, cost and main guide pages.
- `PRINCIPAL_FRN` in that file is empty on purpose. It renders only once the FRN is verified on the FCA Register.
- `MonthlyPaymentTable` replaced by `TreatmentTotalsTable` (treatment prices only).
- `/finance-options-uk` and `/monthly-payment` rewritten; titles now "Turkey Teeth Finance: Paying Monthly for UK Patients" (52 chars) and "Paying Monthly for Turkey Teeth: What to Know" (45). URLs, canonicals and anchors `#how-to-apply`, `#bad-credit` unchanged. No redirects, noindex or sitemap change.
- Price calculator no longer shows a "£X/month" estimate.

Still open:
- Ideal4Finance must approve the wording (directive §11; IAR promotions need principal sign-off) before this goes live.
- Verify principal FRN and our own IAR registration, then set `PRINCIPAL_FRN`.
- `seo/route-lastmod.json` was refreshed offline; the IndexNow ping was deliberately not sent because the content is not deployed.
- Rankings for queries built on the removed phrases ("0% finance", "bad credit") may change; track the finance keyword group for 2–3 weeks before further edits.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | finance cluster (35 files) | Removed 0% APR, monthly-figure, bad-credit and instant-decision claims; added IAR disclosure | Site is an IAR of a credit broker; promotions need principal approval | Lower compliance risk; possible movement on "0% / bad credit / £x per month" queries |

## 9. Numeric examples added 2026-10-30 (after #57)

Goal: restore concrete, citable numbers for SEO/GEO without breaking IAR limits.

- `/prices/turkey-teeth-cost#total-cost`: two worked "total from the UK" examples built from all-inclusive packages (Hollywood Smile 20 crowns £2,800 and All-on-4 one arch £4,500, plus typical return flights £300–£600), shown next to the UK private prices already on that page. Labelled indicative; prices are those published on the site on 30 October 2026. The flight range is an existing unsourced site figure, so it is worded "typical" and "check current fares". `DATE_MODIFIED` on that page was left alone because the older prices were not re-verified.
- `/finance-options-uk#interest-term-illustration`: hypothetical £3,000 repayment tables (0/10/20% APR over 24 months; 12/24/36 months at 10% APR), labelled as not an offer, not a quote and not the rates of Ideal4Finance or any lender. Figures recomputed with the effective-monthly-rate amortisation formula and match the page. Not used in title, meta description, hero, FAQ answers or `llms*.txt`.
- Links only (no copies): `/monthly-payment` to the illustration; `/blog/hollywood-smile-turkey-cost` to `#total-cost`.

Still open: Ideal4Finance or a compliance adviser should see the illustration before it is relied on; the flight fare range needs a source or a date check.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | /prices/turkey-teeth-cost, /finance-options-uk (+2 link edits) | Added total-trip cost examples and a hypothetical repayment illustration | Restore citable numbers for AI/Google answers within IAR limits | Better fit for "total cost for a UK patient" and "how does finance work" prompts |

## 10. Finance page FAQ and heading tweak (draft review)

A drafted new "pay monthly" page was reviewed instead of published: it targeted the same queries as `/finance-options-uk`, so adding it as a new URL would cannibalise the existing page (directive §1, §7). Not adopted: the clinic payment-plan and deposit text (clinic terms unknown), the soft-search claim (unverified with Ideal4Finance), the link to `turkeyteethfinance.co.uk` (relationship and approval unknown), a "Z% APR" example (needs principal approval), and a title/H1 change (inside the 2–3 week measurement window after #57).

Applied to `/finance-options-uk` only: two FAQs ("Can you get Turkey teeth on finance?", "Can I get a quote before applying for finance?"), the `#bad-credit` heading now reads "Turkey Teeth Finance with Bad Credit: What Is Realistic" (anchor unchanged, content already makes no approval promise), and FAQPage JSON-LD built from the visible FAQs. Google limits FAQ rich results to a narrow set of sites, so no visible SERP change is expected. The meta description was already 153 characters, so it was left alone.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | /finance-options-uk | +2 FAQs, FAQPage schema, bad-credit H2 wording | Cover "turkey teeth on finance" and "finance bad credit" phrasing without a competing page | Better phrase coverage; schema helps machine reading |

## 11. Search Console baseline (30 Sep – 28 Oct 2026, before #57 went live)

Source: Search Console, `sc-domain:teethdoneinturkey.co.uk`. This is the pre-change baseline for the 2–3 week measurement window (directive §25).

Key pages (28 days):

| Page | Clicks | Impressions | Avg position |
|---|---|---|---|
| /finance-options-uk | 16 | 1,117 | 14.9 |
| /prices/turkey-teeth-cost | 3 | 1,002 | 16.4 |
| / (home) | 3 | 483 | 33.5 |
| /blog/can-you-pay-monthly-for-teeth-in-turkey | 1 | 190 | 9.3 |
| /blog/can-you-pay-monthly-for-veneers-turkey | 1 | 15 | 6.3 |
| /guides/turkey-teeth-monthly-payments (301 stub since 27 Oct) | 1 | 63 | 12.6 |
| /blog/dental-tourism-finance-explained | 0 | 6 | 9.7 |
| /blog/finance-dental-implants-turkey-uk-patients | 0 | 7 | 10.9 |

Findings:
- `/finance-options-uk` is the site's best click page. Its only clicks in the sampled queries came from "turkey teeth finance bad credit" (49 impressions, 3 clicks, position 8.2). #57 removed "bad credit considered" from the meta and hero but kept an on-page `#bad-credit` section, and the H2 now says "Turkey Teeth Finance with Bad Credit: What Is Realistic". Watch this query first; do not change title, H1 or meta during the window.
- Phrases in the new FAQs already have impressions: "can you get turkey teeth on finance" (31, position 18.4), "can you get turkey teeth on a payment plan" (18, position 17.3), "can you finance turkey teeth" (15, position 19.2), "new teeth on finance" (12), "denture financing" (6).
- The home page also shows for "pay monthly turkey teeth", "can you finance turkey teeth" and "can you get turkey teeth on a payment plan" at positions 16–43, below `/finance-options-uk`. Mild overlap, no action.
- The two thin finance blogs (`dental-tourism-finance-explained`, `finance-dental-implants-turkey-uk-patients`) have 6–7 impressions each. The site is under 90 days old, so the 90-day low-value rule does not apply yet. Candidate for IMPROVE or MERGE after the window, with approval.
- `can-you-pay-monthly-for-teeth-in-turkey` (190 impressions, position 9.3) is a real traffic source. Do not merge it away.
- The 301 stub `/guides/turkey-teeth-monthly-payments` still appears in results, which is normal in the first weeks after a redirect.
- Hollywood Smile: only `/blog/hollywood-smile-turkey-cost` appears (47 impressions, position 26.8); the other two Hollywood pages did not show in the top 200 pages, so Search Console shows no cannibalisation there. The 0% AI-visibility score for that prompt is therefore not a Google-ranking problem.

Sister site `https://turkeyteethfinance.co.uk/` (9 days of data, 1–7 impressions per query): it has one page per treatment (`/all-on-4-finance`, `/smile-makeover-finance`, `/zirconia-crowns-finance`), `/dental-finance`, `/finance-faq`, `/how-it-works`, `/our-clinic` and `/reviews`, and it already shows for "can you finance turkey teeth" and "turkey teeth finance", the same queries as this site. A per-treatment finance template on a second domain is the scaled/doorway pattern in directive §2 and §9. Relationship to this site still needs the owner's decision.

## 12. Flight cost range: replaced the unsourced £300–£600 (2026-10-30)

Problem: the total-cost examples used a flat £300–£600 return flight, an unsourced site figure that also looks too high for most of the year.

Evidence found (web search summaries only; the fare sites themselves were not reachable from this session, so the figures are second-hand and must be re-checked by a person):
- Cheapflights, London to Antalya: December average return about £57, August about £411.
- Kayak, UK to Antalya: January average return about £68.
- Other aggregators disagree on the cheapest month (January, February, June, November and December all appear) and on levels (Momondo shows about £244 from Heathrow in November), because airport, airline, booking date and lowest-vs-average methods differ.

A pasted month-by-month table (per-month ranges such as "March £50–£120", "November £45–£100", with a 1 GBP = 65 TRY conversion and easyJet/Jet2 starting fares) had no source or date, and its mid-month ranges are not supported by any source found, so it was not published (directive §23: verify, qualify, remove).

Applied on `/prices/turkey-teeth-cost`:
- Flights in the two worked examples now span "about £60–£410" (winter to August), giving about £2,860–£3,210 for the 20-crown Hollywood Smile package and about £4,560–£4,910 for one All-on-4 arch.
- New H3 `#flight-costs-by-month`: month-by-month fare *levels* (lowest / moderate / highest) tied to the UK school calendar (Easter, late-May and late-October half-term, summer holidays, Christmas), with only the three sourced averages quoted and attributed to Cheapflights and Kayak "checked on 30 October 2026".

Still open:
- A person should replace the second-hand figures with a dated Google Flights / Skyscanner month-view check from London and one regional airport (for example Manchester), then re-state the range.
- Four other pages still say "flights and hotel ... typically £300–£600 for a 3–5 day trip" (`guides/severe-toothache-cant-afford-dentist`, `guides/tooth-abscess-cant-afford-dentist`, `guides/cant-afford-root-canal-uk` twice). That is a different claim (flights plus hotel for a non-package stay) but is also unsourced.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | /prices/turkey-teeth-cost | Flight range replaced; month-by-month fare-level section added | Unsourced figure; more useful and quotable total-cost answer | Better fit for "how much do Turkey teeth cost for a UK patient" prompts |

### 12a. Cross-check of a second set of pasted "verified" fare figures (2026-10-30)

A second pasted message cited Skyscanner (best £48, annual average £113), Kayak (UK direct average £182, £29 one-way) and a Google Flights saved-search URL, and proposed the sentence "annual return average £113 to £182, about £40 in winter, £250 to £500 at the summer peak". The pages were not reachable from this session; a fresh web search of the same sites returned different snapshots:
- Skyscanner London to Antalya Province: best return £55 (easyJet, Luton, 20 Nov to 20 Dec), average about £109; its own text says the figures are estimates from the last four days.
- Kayak: UK-wide direct average about £253–£256 return (not £182); London route average about £158; London January average about £99; direct August average about £313; cheapest headline fare £32 to £39 (one-way or return depending on page).
- The Google Flights link is a saved search for two specific December dates, not a price-history report, so it cannot support an annual or seasonal average.

Conclusion: every aggregator number is a dated snapshot that moves daily and differs by page, airport and one-way vs return. A single "annual average" combining Skyscanner, Kayak (direct only) and Google would mix incompatible measures, so it was not published. The page now says "about £50 off-peak to about £410 at the August peak" and lists the snapshots by tool and date. Totals changed to about £2,850–£3,210 (Hollywood Smile) and about £4,550–£4,910 (All-on-4, one arch).

## 13. Nightwatch baseline for the nine added finance keywords (2026-10-30)

Keywords were added at 18:02 UTC with tag `finance-cluster` (UK, Google, desktop). First readings arrived at 18:16 UTC for four of the nine; the other five had not been processed yet.

| Keyword | First position (UTC 18:16, 30 Oct) | Search Console 30 Sep – 28 Oct |
|---|---|---|
| turkey teeth finance bad credit | 7 | 49 impressions, 3 clicks, position 8.2 |
| turkey teeth finance | 10 | not in the sampled top rows |
| can you get turkey teeth on finance | 14 | 31 impressions, position 18.4 |
| turkey teeth on finance | 38 | not in the sampled top rows |
| turkey teeth payment plan | pending | |
| dental finance turkey | pending | |
| turkey teeth instalments | 35 (read 18:21 UTC) | |
| turkey teeth instalment plan | 12 (read 18:22 UTC) | |
| pay in instalments turkey teeth | pending | |

Caveat: this is not a strict pre-change baseline. #57 had been live since the morning and the #58 deployment (created 18:07 UTC) was almost certainly live at 18:16 UTC; the #59 deployment (created 18:18 UTC) came after. SERP effects lag by days, so treat these as the starting point for the 2–3 week window rather than as proof of any effect. Three keywords were still unprocessed at the 18:22 UTC re-check (turkey teeth payment plan, dental finance turkey, pay in instalments turkey teeth); fill them in at the next check.

Deploy status (Vercel, production): #58 commit `e9997d6` READY, #59 commit `8b80597` READY.

Observation: the same Vercel team also deploys `turkeyteethfinance-co-uk` from `digiroiio-lgtm/turkeyteethfinance.co.uk`, and its latest merge (PR #28, deployed 18:14 UTC) retitled its homepage to target "finance turkey teeth". Both sites are therefore being optimised for the same finance queries by the same owner, which sharpens the open question about how the two sites should be positioned (separate brand, consolidate, or cut the per-treatment finance pages).

## 14. Flight wording simplified to rounded ranges (2026-10-30)

Owner decision: fare data cannot be verified to the pound from this setup, and the owner is not a fare authority, so the page should give rounded, range-style guidance by season and booking time instead of precise snapshot numbers.

Owner-provided input used: early winter (November–December) returns can be found around £30–£40; July–August last-minute bookings can reach £300–£600 or more. Combined with the earlier snapshots (Skyscanner best return about £55, Kayak London January about £99 and direct August about £313, Cheapflights December about £57 and August about £411), the page now shows:
- Winter (November–February), booked ahead: about £30–£100 (lowest fares around £30–£40)
- Spring and autumn: "in between", with Easter, half-term and Christmas weeks dearer
- Summer holidays (July–August), typical: about £300–£400
- Summer holidays, last minute: about £300–£600 or more
- Worked examples: flights about £30–£600, giving about £2,850–£3,400 (Hollywood Smile 20 crowns) and about £4,550–£5,100 (All-on-4, one arch)

The per-month level table and the precise snapshot list were removed to keep the section simple. The note says the ranges are rounded and indicative, based on comparison snapshots and typical booking patterns, change daily, differ by airport, airline and baggage, and that the sites disagree. The earlier "about £50 to £410" figures from section 12 are superseded.

Still open: a dated Google Flights or Skyscanner check would let the ranges be tightened and attributed more precisely; the four pages with "flights and hotel typically £300–£600" remain unsourced.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | /prices/turkey-teeth-cost | Flight section rewritten as rounded seasonal and booking-time ranges; totals updated | Owner-preferred simpler, defensible wording | Clearer, quotable total-cost answer |

## 15. Disclosure simplified: introducer only, no APR promised (2026-10-30)

Owner clarification: the arrangement with Ideal4Finance is an introducer / IAR agreement. The business only refers UK patients who apply through its UK company; it does not lend, arrange credit, advise on credit or promise any APR. Rates, terms and approval depend on each person's credit history, income and circumstances.

Applied:
- `FinanceDisclosure` rewritten shorter: IAR status; "We only introduce UK patients to Ideal4Finance. We do not lend, arrange credit or give credit advice."; "We do not promise any APR or approval. Rates, terms and approval depend on each person's credit history, income and circumstances, and are decided by the lender. Any figures on this site are illustrations or treatment prices, not finance offers."; finance is optional and can be arranged independently. The principal FRN still renders only when set.
- `/finance-options-uk`: new FAQ "Do you promise a particular APR?"; FAQPage schema updates automatically.
- `public/llms.txt`: finance line now says the site only introduces UK patients and promises no APR or approval.

Not changed: the hypothetical repayment illustration (already labelled as not an offer and not any lender's rates). The principal's written view on it and on the disclosure wording is still outstanding, as are the FRN and the legal entity name.

| DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT |
|---|---|---|---|---|
| 2026-10-30 | FinanceDisclosure (12 pages), /finance-options-uk, llms.txt | Shorter disclosure, explicit "no APR promised", +1 FAQ | Owner confirmed introducer-only role and no APR promise | Clearer, simpler compliance wording |
