# Structural Cannibalisation Map

Generated 2026-09-28 from `src/app` (titles, H1s, canonicals, internal links).

## Why this file exists

The 2026-09-11 run left a standing instruction: *before* creating or merging
anything in the packages cluster, "establish which of the five current URLs
Google actually prefers — the same head-to-head check that would have prevented
the 09-08 regression."

That check needs Search Console. Search Console has been unavailable since
2026-09-17 (see `serp-history.md`, 2026-09-28 entry). This file is the half of
the check that can be done from the codebase alone: **which URLs compete for the
same intent**. It deliberately stops short of naming winners, because the
codebase cannot tell you which URL Google prefers — only impressions can.

**How to use it when GSC returns:** for each cluster below, pull
`query x page` for the cluster's head query. The URL with impressions is the
owner. Everything else is MERGE-AVOID or gets repositioned onto a distinct
intent. Do not pick an owner from the target architecture — pick it from the
data. That inversion is what caused the 09-08 regression.

## Method

Title-token Jaccard similarity across the 79 live pages (redirect stubs
excluded), threshold 0.55, plus incoming-internal-link counts. Similarity is a
*prompt* to check an intent, not a verdict: `/blog/hollywood-smile-turkey-cost`
and `/blog/hollywood-smile-uk-vs-turkey` score 0.80 but are a legitimate
cost-vs-comparison split.

## Cluster 1 — dental implant cost (5 URLs) — WORST

| URL | Title | Known GSC (to 09-10) |
|---|---|---|
| `/guides/dental-implants-turkey` | Dental Implants Turkey: Complete UK Guide 2026 | 59 impr — POWER page |
| `/blog/full-mouth-implants-uk-vs-turkey` | Full Mouth Dental Implants Turkey Cost 2026 | 69 impr @ 24.9 — retitled 09-11 |
| `/prices/dental-implants-turkey-cost` | Dental Implants Turkey Cost: UK Guide | **zero lifetime impressions** |
| `/treatments/dental-implants-turkey` | Dental Implants Turkey – From £250 | not recorded |
| `/blog/implants-cost-uk-vs-turkey` | Dental Implants Cost: UK vs Turkey 2026 | not recorded |

Five URLs carry "dental implants Turkey [cost]" in the title. `/guides/` and
`/treatments/dental-implants-turkey` differ only by path segment. The 09-11 run
already flagged `/prices/dental-implants-turkey-cost` (911 words, zero lifetime
impressions) as the same suppressed-duplicate shape as the page merged that day,
and deferred it only to keep one day's changes auditable.

**Blocked on:** head-to-head on `dental implants turkey cost` /
`dental implants turkey price`. Note `/blog/full-mouth-implants-uk-vs-turkey`
was retitled 09-11 and is inside its "do not touch for ~2 weeks" window; that
window has now expired, so its retitle can be judged as soon as data returns.

## Cluster 2 — packages (5 URLs) — the 09-11 standing item

| URL | Title | Incoming internal links |
|---|---|---|
| `/guides/turkey-teeth-packages` | Turkey Teeth Packages: What Is Included and What Does It Really Cost? | **3** |
| `/guides/veneers-turkey-packages` | Veneers Turkey Packages: What Is Included and What Does It Really Cost? | 5 |
| `/prices/hollywood-smile-turkey-package` | Hollywood Smile Turkey: Zirconia Crowns from £2,800 | 8 |
| `/prices/all-on-6-dental-implants-turkey-package` | All-on-6 Turkey Package: £5,600 All-Inclusive | 8 |
| `/blog/dental-holiday-packages-turkey` | Dental Holiday Packages Turkey | 1 |

Two structural facts, both independent of GSC:

1. **The two `/guides/` titles are the same sentence with one word swapped.**
   A copy-paste template across a hub and its own spoke.
2. **Link inversion.** The page the target architecture treats as the packages
   hub has the fewest incoming links in its own cluster — fewer than either
   `/prices/` spoke.

The two `/prices/` pages are properly differentiated (price-led, transactional)
and should be left alone.

**Do not create `/packages/turkey-teeth-packages`.** The 09-11 run recorded this
as the target architecture's preferred URL, but `/guides/turkey-teeth-packages`
already exists and serves that intent. Creating it would add a sixth URL to a
query already split five ways.

**Blocked on:** head-to-head on `turkey teeth packages` (five URLs spanning
positions 7.5–99.7 as of 09-10; the log never recorded *which* URL held 7.5,
which is exactly the gap this check must close). Fixing the link inversion is
held back for the same reason — pushing links into the wrong owner deepens the
split rather than resolving it.

## Cluster 3 — finance / pay monthly (2–3 URLs)

`teeth on finance bad credit` was split between `/finance-options-uk` (15 @ 7.6)
and `/blog/dental-tourism-finance-explained` (7 @ 8.1); `pay monthly turkey
teeth` across three URLs. These are the account's **best-performing queries**,
so this is the highest-value cluster and the one to resolve first when data
returns. `/finance-options-uk` was rewritten 2026-09-11 and has now had well
over the two weeks needed to judge the change.

**Blocked on:** per-query owner decision from fresh position data.

## Legitimate splits — no action

Checked and deliberately left alone:

- `/blog/hollywood-smile-turkey-cost` vs `/blog/hollywood-smile-uk-vs-turkey` —
  cost intent vs comparison intent. The cost page is a known winner (09-11).
- `/guides/teeth-in-turkey` vs `/guides/turkey-teeth-antalya` — national vs
  city-qualified. The 09-04 run explicitly rejected an Antalya split on data.
- `/prices/all-on-6-dental-implants-turkey-package` vs
  `/treatments/all-on-6-turkey` — price page vs treatment page, the intended
  PRICE/TREATMENT separation.
- `/guides` vs `/travel-to-turkey` — section hubs, not competing documents.

## Technical notes from the same sweep

- All 79 live pages have a self-referential canonical. No mismatches, none missing.
- All 79 have an H1.
- 19 redirect stubs correctly excluded from the sitemap.
- 12 titles exceed 60 characters and risk SERP truncation. Both `/guides/`
  package titles (69 and 71 chars) are on that list, so the template duplication
  and the truncation are one fix when the owner is known.

## Priority order when Search Console returns

1. Finance cluster — best positions in the account, changes have settled.
2. Dental implant cost cluster — five URLs, one confirmed zero-impression duplicate.
3. Packages cluster — resolve the owner, then fix the link inversion and the duplicate titles together.
