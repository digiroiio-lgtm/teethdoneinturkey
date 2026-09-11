# SERP & Search Console History

Week-over-week memory for the weekly SERP / content opportunity run.
Newest week first. Read this before the next run so recommendations are not
repeated and previous changes are judged on real performance before being
rewritten again.

---

## 2026-09-11 (second run — full-mouth implant cluster)

Second run of the day. The morning run (below) reversed the cost merge and
repositioned the finance cluster. Both of those pages were changed ~4 hours
before this run, so under the "judge a change on real performance before
rewriting it" rule **neither was touched again here**. This run took the cluster
the morning run explicitly flagged as next and left untouched.

### Search Console — 2026-09-04..09-10 (data now complete to 09-10)

Daily impressions 21 → 50 → 121 → 204 → 348 → 160 → 141. 4 clicks, all still in
the `(unknown)` aggregation row, so analysis remains position-led not CTR-led.

Striking-distance picture by cluster (positions 4–20 first, per the hierarchy):

| Cluster | Impr in pos 4–20 | Status |
|---|---|---|
| Finance / pay-monthly | ~70 | **Worked this morning — left to settle** |
| Full-mouth implants | 53 @ pos 24–38 | **Today's action** |
| Hollywood smile | ~10 @ pos 2–20 | KEEP, performing |
| Packages | ~25, split across 5 URLs | Next priority |

### The finding: a second suppressed-duplicate pair, same shape as the cost one

The entire full-mouth implant family lands on **one** URL,
`/blog/full-mouth-implants-uk-vs-turkey` — 69 impressions at average position
24.9, first seen 09-05:

| Query | Impr | Pos |
|---|---|---|
| full mouth dental implants turkey price | 13 | 33.7 |
| full mouth dental implant turkey costs | 11 | 30.8 |
| full mouth dental implant turkey costs procedures | 8 | 28.0 |
| full mouth dental implants cost turkey | 8 | 27.4 |
| full set of teeth implants cost turkey | 5 | 38.0 |
| full mouth dental implants turkey cost | 3 | 29.7 |

Meanwhile `/blog/full-mouth-dental-implants-turkey-cost` — a 1,005-word page
with the same All-on-4/All-on-6/individual breakdown, the same both-arches
table, the same "what's included", "how many trips" and monthly-payment
sections — has recorded **zero impressions on zero queries across the entire
lifetime of the property** (checked 08-20..09-11, not just the 7-day window).
`/prices/dental-implants-turkey-cost` and
`/prices/all-on-6-dental-implants-turkey-package` are also at zero lifetime.

**This is the inverse of the 09-08 mistake, and the difference was checked
explicitly before acting.** There, the redirected URL had entered the SERP the
day before the merge and looked like a zero only because nobody had looked at
the daily data. Here the suppressed URL has had the same six days of SERP life
as the winner and earned nothing on any query. That is duplicate suppression,
not a page that has yet to appear.

### Decisions taken this run

- **MERGE-AVOID (critical).** 301'd (308) `/blog/full-mouth-dental-implants-turkey-cost`
  into `/blog/full-mouth-implants-uk-vs-turkey`. Removed from `sitemap.ts`, the
  blog index and `llms.txt`; verified single-hop with no chains. The winner's
  sitemap priority raised 0.75 → 0.9 to match the other high-ticket money pages.
- **OPTIMISE EXISTING (high).** Repositioned the surviving URL onto the cost
  intent it actually ranks for. **The URL was deliberately not changed** — it is
  the ranking asset, and the target architecture's preferred
  `/prices/full-mouth-dental-implants-turkey-cost` is exactly the kind of
  "move demand to the URL we prefer" that caused the 09-08 regression.
  - Title `Full Mouth Implants: UK vs Turkey Cost 2026` → `Full Mouth Dental
    Implants Turkey Cost 2026` (43 chars). Every recorded query is a *cost*
    query; none is a comparison query, but the title led on the comparison.
  - New sections built on the recorded wording: a direct-answer block, "What
    does a **full set of teeth** implants cost" (5 impr @ 38, phrase was absent
    from the site), "Full mouth dental implant Turkey costs: the **procedure**
    stage by stage" as a 10-row stage/cost table (8 impr @ 28 — a cost+process
    query the page did not answer), and explicit **package** inclusions and
    exclusions (flights, bone graft, sinus lift, extra nights).
  - Key takeaways, TOC, 6 FAQs + FAQPage schema (page had none), sources list,
    `dateModified`. Article, BreadcrumbList and FAQPage all verified
    **server-rendered** against a production build.
- **FIX (factual).** The individual-implant row read "20 implants,
  £8,400–£12,000", which matched neither the site's £250 Osstem nor its £800
  Straumann published unit price. Restated as £5,000–£16,000, derived from those
  unit prices, with a clinical note that one implant per tooth is rarely the
  right plan for a full mouth. Saving percentages recomputed like-for-like
  (low-vs-low, high-vs-high) — three were arithmetically wrong.
- **FIX (YMYL).** The finance section said treatment "costs from approximately
  £250/month" with no eligibility, APR or approval wording. Replaced with a
  labelled **Example Treatment Scenario** (£9,000 All-on-4, £1,000 deposit,
  £8,000 financed over 6/12/18/24/36 months, total repayable shown), stated as
  0% APR representative, explicitly not a credit offer, subject to credit check
  and lender approval, not everyone will qualify. Also softened "the same level
  of clinical risk as the UK — which is to say, very low" into a named list of
  real surgical risks plus the aftercare-distance problem, which is the honest
  version and the one the NHS guidance supports.
- **INTERNAL LINKS.** The cluster had none flowing into the winner. Added
  contextual links from `/guides/dental-implants-turkey` (59 impr, the POWER
  page), `/treatments/all-on-4-turkey`, `/treatments/all-on-6-turkey` and
  `/prices/dental-implants-turkey-cost`; the winner now links out to
  `/prices/turkey-teeth-cost`, `/monthly-payment` and `/finance-options-uk`.
- **DO NOTHING — finance.** `teeth on finance bad credit` is genuinely split
  across two URLs (`/finance-options-uk` 15 @ 7.6 and
  `/blog/dental-tourism-finance-explained` 7 @ 8.1), as is `pay monthly turkey
  teeth` across three. Real cannibalisation on the account's best query, but
  `/finance-options-uk` was rewritten four hours earlier. Left to settle.
- **DO NOTHING — packages.** `turkey teeth packages` is split across five URLs
  (positions 7.5 to 99.7) with no owning page, and the target architecture calls
  for `/packages/turkey-teeth-packages`. Deliberately not created: adding a
  sixth URL to a query already split five ways is the wrong first move, and a
  second URL change in one day in a second cluster is not auditable.

### Technical health check

- 69 sitemap URLs (70 − the merged one), **every one verified 200** against a
  production build.
- Full internal-link crawl of all 69 pages, 73 distinct targets: **0 broken
  links, 0 links pointing at a redirect, 0 orphan pages**, 0 remaining
  references to the merged URL.
- Redirect verified single-hop 308 → 200.
- Title 43 chars, description 152 chars — no SERP truncation.
- typecheck clean, lint clean (2 pre-existing warnings, unrelated), build clean.

### What to check next run

1. **Did the retitle move the cluster off position 24–38?** Watch
   `full mouth dental implants turkey price` (33.7),
   `full mouth dental implant turkey costs` (30.8) and
   `full set of teeth implants cost turkey` (38.0). Do **not** touch this page
   again before ~2 weeks of data. If it does not move, the next hypothesis is
   content depth against the competing clinic pages, not another title change.
2. Did `/blog/full-mouth-dental-implants-turkey-cost` disappear cleanly, and did
   the winner absorb its (nil) demand without losing anything?
3. **Packages is now the top untouched cluster.** Before creating
   `/packages/turkey-teeth-packages`, establish which of the five current URLs
   Google actually prefers on `turkey teeth packages` — the same head-to-head
   check that would have prevented the 09-08 regression.
4. **Finance cannibalisation**, once the 09-11 morning changes have settled:
   `teeth on finance bad credit` on two URLs, `pay monthly turkey teeth` on
   three. Decide an owner per query rather than rewriting pages again.
5. `/prices/dental-implants-turkey-cost` (911 words) and
   `/prices/all-on-6-dental-implants-turkey-package` are both at zero lifetime
   impressions while `/guides/dental-implants-turkey` earns 59. Same shape as
   the pair merged today, but **not** acted on: three URL changes in one cluster
   in one day is not auditable. Candidate after the packages work.
6. Still 0 clicks at query level and **0 GA4 conversions ever recorded**. The
   GA4 key-event configuration check flagged on the morning run is still open
   and still blocks any business-value-led prioritisation.

---

## 2026-09-11 (morning run — cost merge reversal, finance reposition)

Branch note resolved: the consolidation flagged as the top risk on 2026-09-08 is
done. `main` now carries the full `/guides/*` cluster and
`claude/lucid-hypatia-2res8k` is level with `origin/main`, so runs are no longer
overwriting each other.

### Search Console — first week with a real prior period

First run with a genuine prior period. 08-28..09-03 vs 09-04..09-10 — note the
property's first-ever impression was 09-02, so the prior window is really only
two days of data and the growth figure flatters accordingly. A 28-day comparison
is still impossible.

| Metric | 08-28 → 09-03 | 09-04 → 09-10 |
|---|---|---|
| Impressions | 66 | 1,045 |
| Clicks | 0 | 4 |
| CTR | 0% | 0.38% |
| Average position | 65.5 | 43.7 |
| URLs with impressions | 3 | 30 |
| Queries recorded | 30 | 240+ |

(Both impression totals are the aggregate figures. Summing the query-level rows
gives 1,111 for the current week because of Google's dimension-split
discrepancy rows — use the aggregate, not the sum.)

The prior window was two clusters on two URLs — veneer pricing on
`/prices/veneers-turkey-cost` and clinic selection on
`/blog/best-dental-clinics-turkey`. Everything else below is new demand.

Daily impressions: 21 → 50 → 121 → 204 → 348 → 160 → 141. All 4 clicks sit in
the `(unknown)` aggregation row at position 7.4, so query-level CTR is still not
readable. Analysis below is still position-led, not CTR-led.

### The finding that mattered: last run's merge was a regression

`/prices/turkey-teeth-cost` was 301'd into `/guides/turkey-teeth-cost` on 09-08
because the prices URL "earned no impressions". That was wrong — it had simply
not entered the SERP yet. It first appeared **2026-09-07, the day before the
merge**, and over 09-04..09-10 earned **111 impressions at average position
34.1** against the guide's **121 at 64.1**.

Same-query, same-week head-to-heads (this controls for query mix, which average
position does not):

| Query | `/prices` | `/guides` |
|---|---|---|
| how much do turkey teeth cost | **33.7** | 72.6 |
| how much for turkey teeth | **28.3** | 88.3 |
| turkey dental prices | 89.3 | **72.0** |

Two of three favour the prices URL by 40–60 positions, so the 301 was pointing
the site's biggest commercial cluster at the weaker of the two URLs. **Direction
reversed this run** (see decisions). Daily position volatility on this property
is ±30 places, so the head-to-head table is the only reliable comparison —
do not judge either URL on its average position alone.

### GA4 — AI search is now the biggest qualified channel

Property "TeethDoneTurkey" (552638430), 2026-08-29 → 09-10: 33 sessions,
21 engaged, **0 conversions / key events** (still none, ever).

| Channel | Sessions | Engaged |
|---|---|---|
| Direct | 13 | 7 |
| **AI Assistant** | **12** | **9 (75%)** |
| Organic Search | 5 | 4 |

All 12 AI sessions are `chatgpt.com`. Where they land:

| Landing page | AI sessions | GSC impressions (7d) |
|---|---|---|
| `/monthly-payment` | 6 | **0** |
| `/finance-options-uk` | 4 (4 engaged) | 92 |
| `/book-consultation` | 2 | 0 |

**ChatGPT sends more traffic than Google and Bing combined, and it cites the
finance pages almost exclusively.** `/monthly-payment` is the single
most-cited URL on the site and is simultaneously invisible in Google. Any future
decision to merge or prune a finance page must be checked against AI referrals
first, not just Search Console.

### Finance is the strongest cluster on both fronts — confirmed

~160 impressions, and the best positions in the account. Turkey-qualified:
`can you pay monthly for turkey teeth` 6.75, `teeth on finance bad credit` 7.77
(22 impr), `turkey teeth packages pay monthly` 10.7, `pay monthly turkey teeth`
10.7, `turkey teeth pay monthly` 10.3, `turkey teeth finance bad credit` 10.5.

The gap is the **generic, non-Turkey UK finance intent** — ~45 impressions at
positions 59–89, all on `/finance-options-uk`: `teeth on finance` 75,
`loans for dental work` 76, `dental implant finance uk` 84, `denture financing`
80.8, `veneers uk finance` 70.3, `financing for veneers` 75, `teeth financing`
69, `dental surgery loans` 74, `pay monthly dental implants uk` 85,
`0% dental finance` 19. The page was titled for Turkey treatment, so it matched
none of them.

Google Trends (GB, 90d) corroborates: `dental finance` scores **36** against
`turkey teeth` at 100, and its top related queries are `dental finance uk` (100)
and `dental finance bad credit` (14). `pay monthly teeth` only scores 3.8 — the
demand is in the generic framing, not the pay-monthly one.

### Decisions taken this run

Ladder applied FIX → REFRESH → EXPAND → MERGE → CREATE. **No new URLs created** —
every opportunity mapped to an existing page.

- **FIX (critical). Reversed the 09-08 cost merge.** Moved the full guide content
  (2,557 words, Article + BreadcrumbList schema, TOC, sources, medical review) to
  `/prices/turkey-teeth-cost`, which is also where the site's other cost pages
  live, and 301'd `/guides/turkey-teeth-cost` there instead. Repointed all 19
  internal references, both head-term stubs (`/turkey-teeth-cost`,
  `/turkey-teeth-price`), `sitemap.ts`, `llms.txt` and the `/guides` hub. Verified
  single-hop redirects with no chains. `dateModified` deliberately **not** bumped:
  the URL changed, the content did not.
- **FIX (high). Repositioned `/finance-options-uk` onto the generic UK
  dental-finance intent** it already ranks for. New title/H1/description built on
  "dental finance uk", dental loans and bad credit instead of Turkey treatment.
  Added a server-rendered short-answer block (payment plan vs dental loan vs NHS
  band charges), a **finance-by-treatment table** (the missing piece behind the
  59–89 positions: the queries are treatment-qualified and the page had only one
  generic monthly table), an honest five-point **bad credit** section, a
  dentures answer that gains the entity without inventing a price the site does
  not publish, and four FAQs matching real recorded queries. Removed the old
  duplicate bad-credit FAQ so the FAQPage schema has no near-duplicate pair.
  Monthly figures are existing site prices ÷ 36 at 0% APR representative, so no
  new or conflicting price was introduced.
- **FIX (high). Differentiated `/monthly-payment` from `/finance-options-uk`.**
  The two carried near-duplicate titles for one intent and Google had suppressed
  this one to 0 impressions. **Not merged** — it is the top AI-cited page, so the
  two were split by job instead: `/finance-options-uk` owns the generic
  question, `/monthly-payment` owns the per-treatment monthly figures (which is
  what ChatGPT cites it for), and `/blog/can-you-pay-monthly-for-teeth-in-turkey`
  (position 10.5, 70 impr) keeps the "can you pay monthly" question intent
  untouched because it is performing. Retitled, new H1, cross-link anchor text
  rewritten in both directions.
- **DO NOTHING.** `zirconium dental veneer prices turkey` moved 49 → 41.5 after
  last run's entity fix, and the full-set unit table is in place. Left to
  accumulate data rather than rewritten again.
- **DO NOTHING.** The Antalya decision stays rejected. One Antalya query finally
  appeared — `why should you choose antalya for dental implants?`, 1 impression
  at position 48 — which is not enough to overturn it. Threshold for next run:
  revisit only if Antalya-qualified impressions reach ~10/week.
- **DO NOTHING.** `john may turkey teeth` still absent from GSC; the celebrity
  breakout remains correctly ignored.

### Technical health check

- 70 sitemap URLs, **every one verified 200** against a production build.
- Full internal-link crawl of all 70 pages, 74 distinct link targets:
  **0 broken links, 0 redirect chains, 0 orphan pages.**
- All 30 impression-earning URLs return `index, follow` with a self-referencing
  canonical (checked via the GSC landing-page tag dimensions).
- `/prices/turkey-teeth-cost` canonical, Article, BreadcrumbList and FAQPage
  schema all confirmed **server-rendered**, as are every new finance section and
  FAQ — the thing that matters for AI answer engines.
- Titles 38–51 chars, descriptions 146–155 chars; both new descriptions were
  trimmed from 169/175 to stop SERP truncation.
- lint clean (2 pre-existing warnings, unrelated), typecheck clean, build clean.

### What to check next run

1. **Did the reversal work?** `/prices/turkey-teeth-cost` should absorb the cost
   family and `/guides/turkey-teeth-cost` should fall out of impressions. Watch
   the three head-to-head queries above. If the prices URL does **not** improve
   on position 34 within ~2 weeks, the cannibalisation is not the cause and the
   cost cluster needs a content review instead of another URL change. **Do not
   swap these two URLs a third time.**
2. Did `/monthly-payment` break out of 0 impressions once its title stopped
   duplicating `/finance-options-uk`? And did AI referrals to it hold?
3. Did the generic finance queries (`dental loans`, `teeth financing`,
   `denture financing`, `dental implant finance uk`) move off positions 59–89?
4. **Clicks.** 4 arrived this week, all in the `(unknown)` row. Once query-level
   clicks exist, switch from position analysis to CTR and re-check
   `teeth on finance bad credit` (22 impr at 7.77, still 0 clicks) — the title
   rewrite this run was the intended fix for exactly that.
5. **Next cluster, evidence already collected — full-mouth implants.** ~53
   impressions at positions 24–38 (`full mouth dental implants turkey price` 13
   @ 33.7, `full mouth dental implant turkey costs` 11 @ 30.8, `full mouth
   dental implants cost turkey` 8 @ 27.4, `full set of teeth implants cost
   turkey` 5 @ 38), **all landing on `/blog/full-mouth-implants-uk-vs-turkey`, a
   1,457-word comparison post** — while `/prices/dental-implants-turkey-cost`
   (911 words, sitemap priority 0.9) earns **zero**. Same shape as the cost-page
   problem fixed this run. Check which URL Google actually prefers on shared
   queries *before* touching either one.
6. **Cost-cluster duplication still outstanding.** `/prices/teeth-done-in-turkey-cost`
   (1,018 words, 0 impressions, doubles as the `/prices` hub target) is a third
   page for the cost intent alongside `/prices/turkey-teeth-cost` and
   `/guides/teeth-in-turkey`. Left alone this run deliberately — three URL
   changes in one cluster in one run is not auditable. Candidate for next run.
7. **0 conversions across 33 sessions, and none ever recorded.** Before any
   further conversion-led prioritisation, verify GA4 key events are actually
   configured — an unconfigured key event and a genuine 0% conversion rate look
   identical in this data, and every opportunity score so far has had to ignore
   business value for that reason.

---

## 2026-09-08

> **Branch note, read this first.** This file was recovered from
> `claude/awesome-faraday-2kubvv` (PR #6, still open and unmerged) and copied
> onto `claude/lucid-hypatia-5scn34`. Those two branches independently edited
> the same two pages — `/prices/veneers-turkey-cost` and
> `/blog/best-dental-clinics-turkey` — four days apart, because each run forked
> a fresh branch and none of them ever landed. `main` is now ~16 commits behind
> and does not contain `/guides/*` at all, even though those URLs are indexed
> and earning impressions, so production is being served from a branch rather
> than from `main`. **Before the next run: consolidate the open PRs (#1, #3, #4,
> #6) and get one branch merged to `main`.** Otherwise these runs will keep
> overwriting each other's work.

### Search Console — impressions ramping hard, head terms have arrived

GSC lifetime for this property is still only 2026-09-02 → 2026-09-07, so there
is no true prior period to difference against; the 28-day window and the 7-day
window return the same rows. Comparison below is against the 2026-09-04 entry.

| Metric | 2026-09-04 | 2026-09-08 | Change |
|---|---|---|---|
| Impressions (28d window) | 22 | 279 | ~12x |
| URLs with impressions | 3 | 20 | ~6.7x |
| Clicks | 0 | 1 (first ever, 09-07) | +1 |

Daily impressions: 27 → 39 → 21 → 50 → **121 → 131** (09-02 to 09-07). Average
position improved to 26.7 on 09-06 as the ramp hit.

| Our URL | Impr | Avg pos | vs 2026-09-04 |
|---|---|---|---|
| `/prices/veneers-turkey-cost` | 72 | 72.1 | 9 → 72 impr; pos 54.8 → 72.1 |
| `/blog/best-dental-clinics-turkey` | 56 | 62.4 | 7 → 56 impr; pos 66.0 → 62.4 |
| `/guides/turkey-teeth-cost` | 21 | 38.3 | new |
| `/` | 18 | 57.9 | 6 → 18 impr |
| `/finance-options-uk` | 14 | 13.0 | new |
| `/blog/why-are-dental-treatments-cheaper-in-turkey` | 13 | 23.0 | new |
| `/blog/full-mouth-implants-uk-vs-turkey` | 12 | 16.1 | new |
| `/turkey-teeth-clinic` | 11 | 19.1 | new |
| `/blog/hollywood-smile-turkey-cost` | 10 | 26.1 | new |
| `/blog/turkey-teeth-explained` | 9 | 22.8 | new |

The veneers page position getting *worse* while impressions grew 8x is not a
regression — it is the whole deep veneer-price query family entering at
positions 44–95, which drags the average down. Judge that page on impressions
and on the best-positioned member of the family, not on its average.

### Answers to last week's open questions

1. **Veneers cost page:** impressions 9 → 72. Average position moved the wrong
   way (54.8 → 72.1) for the reason above.
2. **Best-clinics page:** 66.0 → 62.4, impressions 7 → 56. The position-24
   conversational query is now 4 impressions at 32.5 and **has gained a
   sibling** — "who are the top-rated companies for full-arch dental
   restoration in turkey?" at 3 impressions, position 84.3. Two AI-shaped
   clinic-selection queries now, not one.
3. **Finance queries: yes, and they are the best-positioned cluster in the
   account.** `teeth on finance bad credit` 11 impr at position **8.45**, plus
   `pay monthly turkey teeth` (1 @ 11), `how to finance dental work` (1 @ 26),
   `turkey teeth payment plan` (3 @ 71), `turkey teeth on finance` (1 @ 62),
   `veneers monthly payments` (1 @ 59). `/finance-options-uk` earned 14
   impressions at position 13. **No Antalya-qualified query appeared**, so the
   rejected `/veneers-antalya` decision still stands.
4. **"Turkey teeth" head terms have appeared — last week's central finding is
   now reversed.** `turkey teeth packages` (7 @ 29.9), `turkey teeth cost`
   (6 @ 24.5), `turkey teeth before and after` (3 @ 11.7), `cost of turkey
   teeth` (3 @ **2**), `turkey teeth price full set` (2 @ **9**), `turkey teeth
   price` (1 @ **8**), `how much does turkey teeth cost` (1 @ **6**), `turkey
   teeth` (1 @ 43). The head-term pages do **not** need the strategic review
   flagged last week. Several already sit in the top 10 on tiny impression
   counts.
5. The 2026-dated title test is not readable yet — too much else changed in the
   same window.

### GA4 (property "TeethDoneTurkey", 552638430)

21 sessions across 09-03 → 09-07, 14 engaged, **0 conversions / key events**.
Too small to draw business-value conclusions; every Search Console opportunity
below is therefore scored on search data, not on GA4 revenue signal.

### Google Trends (GB, 90d)

Head-term interest: `turkey teeth` 100, `dental implants turkey` 26.8,
`veneers turkey` 21.0, `hollywood smile turkey` 2.9 — the existing content
weighting matches demand. Rising related queries: `john may turkey teeth`
(breakout), `turkey teeth veneers price`, `turkey teeth whitening cost`.

The breakout is a named individual on a news/celebrity spike, so **no content
was created for it** — no durable search intent, and it would mean publishing
about a private person. `turkey teeth veneers price` corroborates the veneers
work below. `turkey teeth whitening cost` is only partly covered; a whitening
price row was added to the cost guide rather than a new URL.

### Decisions taken this run

Ladder applied FIX → REFRESH → EXPAND → MERGE → CREATE. **No new URLs created**
— every recorded query mapped to an existing page, so there was no verified
content gap to justify one.

- **MERGE (critical).** `/prices/turkey-teeth-cost` and
  `/guides/turkey-teeth-cost` were near-title-duplicates for one intent
  ("Turkey Teeth Cost: UK Price Guide 2026" vs "Turkey Teeth Cost 2026: UK
  Price Guide"). Google had already picked the guide (21 impr @ 38) and given
  the prices URL zero. Ported the two unique price rows (Straumann implant,
  teeth whitening) and two FAQ angles into the guide, 301'd the prices URL to
  it, repointed all 7 inbound links plus the `/turkey-teeth-cost` and
  `/turkey-teeth-price` stubs directly at the guide to avoid chains, removed it
  from `sitemap.ts` and `llms.txt`.
- **EXPAND.** `/blog/best-dental-clinics-turkey` — 14% of all site impressions
  on ~800 words at position 62. Added a six-step verification method, six
  questions to ask, a city comparison (Istanbul is the family's best position
  at 8 for "best dental clinics in istanbul turkey"), a full-arch section,
  expanded red flags, six FAQs + server-rendered FAQPage schema. Still **no
  ranked list of named clinics** — no auditable dataset exists and a fabricated
  league table is exactly what the page warns readers about.
- **EXPAND.** `/prices/veneers-turkey-cost` — added an 8/10/16/20/24-unit cost
  table (serves `turkey teeth price full set`, position 9), a
  zirconium/zirconia entity-clarity section (the word "zirconium" appeared
  nowhere on the site despite `zirconium dental veneer prices turkey` ranking
  44 on 6 impressions, the veneer family's best), three FAQs matching real
  queries, and FAQPage schema — the FAQs render through `FAQSection`, a client
  component, so the answers were missing from the server HTML that rich-result
  parsers and AI answer engines read.
- **DO NOTHING.** The "September 2024" stamp on `/blog/dental-holiday-turkey-guide`
  in the blog index is the genuine publication date and its schema agrees.
  Bumping it would be artificial freshness, so it was left alone.
- **DO NOTHING.** Pre-existing `react/no-unescaped-entities` lint errors in
  `/guides/teeth-in-turkey` were left in place — unrelated to this run's diff
  and `eslint.ignoreDuringBuilds` means they do not block the build.

### What to check next run

1. **Consolidate the branches and open PRs before anything else** (see the
   branch note at the top). This is now the biggest risk to the site.
2. Did the merge work? `/guides/turkey-teeth-cost` should absorb the
   `turkey teeth cost` family; watch whether position 38 improves and whether
   the 301'd URL disappears from impressions.
3. Did `/blog/best-dental-clinics-turkey` move off 62.4, and did the two
   AI-shaped clinic queries improve? They are the clearest GEO signal here.
4. Did the veneers page's *family* positions improve, especially `zirconium
   dental veneer prices turkey` (44) now that the term exists on the page, and
   the full-set queries now that the unit table exists?
5. **Finance is the strongest cluster and is under-served.**
   `teeth on finance bad credit` sits at position 8.45. If it holds or grows,
   the finance cluster deserves the next expansion, and `/finance-options-uk`
   (14 impr @ 13) is the page to build on.
6. First clicks: one arrived on 09-07. Once there are enough, switch the
   analysis from position to CTR and re-check title/meta on the pages earning
   impressions but no clicks.

---

## 2026-09-04

### Search Console — first week with real query data

Property still very new. Previous runs (2026-09-03 and earlier) recorded zero
impressions, so this is the first usable baseline. **Compare next week against
these exact figures.**

Last 30 days: **22 impressions, 0 clicks, 0% CTR, 3 URLs with impressions.**

| Our URL | Impressions | Clicks | Avg position |
|---|---|---|---|
| `/prices/veneers-turkey-cost` | 9 | 0 | 54.8 |
| `/blog/best-dental-clinics-turkey` | 7 | 0 | 66.0 |
| `/` | 6 | 0 | 53.3 |

Queries recorded (all 0 clicks):

| Query | Impr | Avg pos |
|---|---|---|
| best dental clinic in turkey | 2 | 50.0 |
| turkey veneers | 2 | 80.0 |
| turkey veneers price | 2 | 49.5 |
| turkish veneers | 2 | 69.0 |
| veneers turkey cost | 2 | 40.5 |
| (unknown) | 2 | 11.0 |
| best dentist in turkey | 1 | 91.0 |
| best place in turkey for teeth | 1 | 93.0 |
| best turkey teeth | 1 | 95.0 |
| turkey veneers cost | 1 | 43.0 |
| turkish dental clinic | 1 | 59.0 |
| veneer cost turkey | 1 | 88.0 |
| veneers cost turkey | 1 | 93.0 |
| veneers price turkey | 1 | 40.0 |
| which turkish clinics should i choose for porcelain veneers with uk-based consultations? | 1 | 24.0 |
| zirconium dental veneer prices turkey | 1 | 49.0 |

**The finding that matters:** not one impression came from a "turkey teeth"
head term, the cluster the site is largely built around. Every recorded query
is either veneers + price or clinic selection. Two demand clusters, and the
best position in the whole account (24) belongs to a long conversational
AI-search-shaped query about porcelain veneers with UK-based consultations.

Indexation: at least 3 URLs indexed and serving. No URL-level index coverage
data pulled this week.

### SERP observations

`veneers turkey cost` / `veneers antalya cost` top-10, September 2026:

- healthioturkey.com — "Veneers Turkey Cost 2026: Per Tooth, UK vs Antalya Prices"
- sevilsmile.com — "Turkey Teeth Cost: Complete 2026 Price Guide (UK Patients)"
- mydentalfly.com — "Veneers in Turkey: 2026 Prices Per Tooth"
- maltepedentalclinic.com, dcareturkey.com, livistmedical.com, drvisor.com — all 2026-dated cost guides
- adalyadentalclinic.com — "Cost of Veneers in Turkey 2026"
- bookimed.com, whatclinic.com, dentaldepartures.com — aggregator/directory pages for Antalya
- dentatur.com, antlaradental.com — package/treatment pages

Patterns Google is currently rewarding for this cluster:

1. Explicit current year in the title — effectively universal in the top 10.
2. Price per tooth broken out by material (composite / zirconium / E-max).
3. Full-set and package pricing alongside per-tooth.
4. UK-vs-Turkey framing with an explicit saving percentage.
5. What is and is not included in a package.
6. Antalya named as a location entity within cost content.

`turkey teeth finance` and `turkey teeth gone wrong` were also checked. Finance
SERP is dominated by regulated UK brokers (kandoo.co.uk ranks twice) plus clinic
finance pages. "Gone wrong" SERP is dominated by UK clinics selling rescue
treatment; the dominant sub-theme is over-preparation and crowns being sold as
veneers. No action taken on either this week — see below.

### Actions taken

| Type | URL | Score | What was done |
|---|---|---|---|
| EXPAND | `/prices/veneers-turkey-cost` | 97 | ~350 → 2,677 words. Was titled "2024" against a SERP where every competitor says 2026. Added direct answer, key takeaways, TOC, per-tooth table by material, full-set table, veneers-vs-crowns section, included/excluded, total trip cost, UK-vs-Turkey, Antalya vs Istanbul, lifespan, finance, quote process, 8 FAQs, Article + BreadcrumbList + FAQPage schema, breadcrumbs. Fixed table that listed a zirconia crown as a veneer and gave composite as £80–£120 against £90 elsewhere on the site. |
| EXPAND | `/blog/best-dental-clinics-turkey` | 84 | Added UK-based consultation and aftercare section (targets the position-24 conversational query), 8-question pre-deposit checklist, 4 more quality signals, 4 more red flags, key takeaways, 6 FAQs + FAQPage schema (page had none). dateModified set. |
| REFRESH | 4 page H1s + 4 blog-index titles | — | Removed stale "2024" from visible headings. Deliberately removed rather than swapped to 2026 — claiming a current year on pages not actually refreshed is a false freshness signal. Publication dates and patient-review dates left untouched as records. |

### Rejected this week

- **`/veneers-antalya` (or similar) new URL — score ~55.** "Veneers Antalya" is
  a named priority keyword, but no first-party evidence supports it yet (zero
  Antalya-qualified impressions) and a new page would cannibalise
  `/prices/veneers-turkey-cost` and `/treatments/veneers-turkey`, the two pages
  actually earning impressions. Covered as a section on the cost page instead.
  **Revisit** if Antalya-qualified queries appear in GSC.
- **A dedicated "turkey teeth gone wrong" page.** Intent is already served by
  `/teeth-done-in-turkey-problems`, `/blog/risks-of-turkey-teeth` and
  `/blog/will-uk-dentists-fix-turkey-teeth`. No GSC evidence for the term yet.
  **Backlog.**
- **Finance cluster work.** `/finance-options-uk` and `/monthly-payment` were
  both upgraded on 2026-08-28 and have produced zero impressions since. Per the
  rule about judging previous changes on real performance before rewriting
  them, they were left alone this week to accumulate data.

### What to check next week

1. Did `/prices/veneers-turkey-cost` move from avg position 54.8? Did impressions
   grow beyond 9? Any first clicks?
2. Did `/blog/best-dental-clinics-turkey` move from 66.0, and did the
   position-24 conversational query improve or gain siblings?
3. Do any Antalya-qualified or finance queries appear? If Antalya appears, the
   rejected new-page decision above should be reconsidered.
4. Do "turkey teeth" head terms appear at all? If they still do not after
   several weeks, the site's head-term pages need a strategic review rather
   than another content addition.
5. Whether the 2026-dated title on the veneers cost page correlates with any
   position change — it is the cleanest single-variable test available.

---

## Before 2026-09-04

No query-level data existed. Prior runs are recorded in git history:

- **2026-09-03** — Fixed 4 orphaned pages; expanded
  `/blog/how-long-do-dental-veneers-last` for rising "turkey teeth last"
  demand. GSC property was 2 days old (19 impressions, 0 clicks).
- **2026-08-28** — Created `/guides/cant-afford-dental-treatment-uk`; upgraded
  `/finance-options-uk`; corrected an unverifiable bad-credit claim on
  `/monthly-payment`. Zero GSC/GA4 data at the time.
- **2026-08-27** — AI/LLM/GEO discovery layer: server-rendered schema, sitemap
  and llms.txt fixes.
