# SERP & Search Console History

Week-over-week memory for the weekly SERP / content opportunity run.
Newest week first. Read this before the next run so recommendations are not
repeated and previous changes are judged on real performance before being
rewritten again.

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
