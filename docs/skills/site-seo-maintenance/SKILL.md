---
name: site-seo-maintenance
description: Recurring SEO/content maintenance for any site repo — weekly GSC/GA4 monitoring, monthly content-pruning report (KEEP/IMPROVE/MERGE/301/NOINDEX), update-incident triage. Report-only; applying changes needs human approval. Use for "weekly SEO run", "content pruning", "low-value pages", "traffic dropped".
---

# Site SEO maintenance

Core logic is site-agnostic. Everything site-specific comes from the repo:
`seo/site.config.json`, `docs/seo-directive.md` (generic rules + `§SİTE`), `seo/serp-history.md`, `seo/deployment-log.md`.
If `site.config.json` is missing, create it from the repo's facts; leave unverified values `null`. Never invent numbers (baseline, impressions, prices).

## Principle
Optimise information gain per URL, not URL count. Order of decisions: user value → originality → evidence → intent differentiation → trust → technical → SEO → GEO → scale.
Priority of work: thin cleanup > local/first-party evidence > author/reviewer > sources > internal links > technical health > schema > llms.txt (llms.txt is not a Google signal).

## Hard limits (agent authority)
Allowed: audit, GSC/GA4 analysis, duplicate/intent clustering, fact checks, link suggestions, reports.
Needs explicit approval first: bulk noindex, bulk 301, deletion, canonical changes, large sitemap pruning, taxonomy changes. Never act during a verified Google update rollout. Never treat `[DOĞRULANMAMIŞ]` claims as fact.

## Modes
Read the repo's directive and `seo/serp-history.md` first in every mode.

### weekly
1. Pull GSC (and GA4 if configured): last 7 vs previous 7 days (28 vs 28 when noisy). Break down Query → Page → Intent cluster.
2. KPIs: impressions, clicks, non-brand clicks, avg position by query, top-10 URL traffic share, indexed URLs with zero impressions, crawled-not-indexed trend, new URLs gaining impressions, conversions. Compare with `baseline` only if it is set.
3. Cross-check `seo/deployment-log.md`. Do not touch a page changed since the last run until real data exists for that change.
4. Run `npm run seo:audit` if present; list errors.
5. Write `seo/reports/YYYY-MM-DD-weekly.md` and prepend a dated entry to `seo/serp-history.md`. Add recommendations, not edits.

### monthly (pruning)
1. Inventory indexable URLs (`seo:audit --json`, sitemap manifest) × GSC 90 days × page age × internal links × backlinks × content similarity.
2. LOW-VALUE candidates = 90d, 0 clicks, <10 impressions. A candidate is not a decision: apply `references/decision-framework.md`.
3. Report table `URL | Clicks | Impr | Age | Intent | Duplicate | Info-gain | Action | Why | Risk`. Actions: KEEP / IMPROVE / MERGE / 301 / NOINDEX / REMOVE.
4. Local/programmatic pages: A merge into hub, B improve with local data, C noindex.
5. Output `seo/reports/YYYY-MM-DD-monthly.md` marked "awaiting approval". Apply nothing.

### incident (traffic drop)
Diagnose before changing code: Search Status → GSC (query/page/country/device) → GA4 → control channels (Bing, direct) → technical (200s, robots, canonical, sitemap, CDN) → URL Inspection sample → deployment timeline. Classify as "algorithmic reassessment candidate", not a verdict.

## Gates for any new/changed page
Intent, overlap, originality (≥2 real unique-value signals, no filler), evidence (primary source > first-party > secondary > generic), authorship (real person; never fake persona), YMYL who/what/when/expert-review, spam (scaled/doorway/programmatic). If the main reason is "capture a keyword", stop.

## After any approved change
Add a row to `seo/deployment-log.md`: DATE | URL/TEMPLATE | CHANGE | REASON | EXPECTED EFFECT.
