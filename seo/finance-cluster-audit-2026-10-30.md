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
