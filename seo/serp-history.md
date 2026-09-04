# SERP & Search Console History

Week-over-week memory for the weekly SERP / content opportunity run.
Newest week first. Read this before the next run so recommendations are not
repeated and previous changes are judged on real performance before being
rewritten again.

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
