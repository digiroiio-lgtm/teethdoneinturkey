# Safe Akdeniz contextual-link audit

Audit date: 2026-10-01. Scores measure editorial fit, not expected ranking gains. Live pages were fetched without following redirects; HTTP status, canonical, robots meta and X-Robots-Tag were checked. Added targets are direct HTTP 200, indexable and self-canonical.

## Candidate scores

Score = relevance /35 + intent /25 + entity /20 + naturalness /10 + usefulness /10 − network risk /30. Only missing links with a score of at least 85 and no risk override are implemented.

| Priority | Source domain | Source URL | Target URL | Anchor | Context | Score | Result |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/editorial-policy | https://akdenizdental.com/our-team | Akdeniz Dental Clinic | Existing named reviewer affiliation; official team lists Mustafa Akça | 100 | IMPLEMENTED |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/medical-reviewers/mustafa-akca | https://akdenizdental.com/mustafa-akca | akdenizdental.com/mustafa-akca | Existing verification link; target canonical incorrectly points to /before-after; retained, no extra link | 100 | ALREADY EXISTS |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/medical-reviewers/mustafa-akca | https://akdenizdental.com/our-team | Akdeniz Dental Clinic — Our Team↗ | Existing verification link; verified canonical team page | 100 | ALREADY EXISTS |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/turkey-teeth-clinic | https://akdenizdental.com/our-history | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/treatments/dental-implants-turkey | https://akdenizdental.com/dental-implants | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/treatments/all-on-4-turkey | https://akdenizdental.com/all-on-4 | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/treatments/all-on-6-turkey | https://akdenizdental.com/our-history | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/treatments/veneers-turkey | https://akdenizdental.com/e-max | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/treatments/full-smile-makeover-turkey | https://akdenizdental.com/our-history | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/guides/turkey-teeth-antalya | https://akdenizdental.com/our-history | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| P2 | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk/prices/hollywood-smile-turkey-package | https://akdenizdental.com/our-history | — | Generic education/logistics or provider details unconfirmed; shared review badge alone is insufficient | 45 | SKIPPED — GENERIC CONTENT |
| — | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk (architecture) | — | — | Header/footer/sidebar-wide provider injection | -30 | SKIPPED — NETWORK / SEO RISK |
| — | https://www.teethdoneinturkey.co.uk | https://www.teethdoneinturkey.co.uk (architecture) | — | — | English ↔ Polish reciprocal links | -30 | SKIPPED — NETWORK / SEO RISK |

## Implemented score breakdown

| Source | Relevance | Intent | Entity | Naturalness | Usefulness | Risk | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| https://www.teethdoneinturkey.co.uk/editorial-policy | 35 | 25 | 20 | 10 | 10 | -0 | 100 |

## Target validation

| Official URL | HTTP | Canonical | Result |
| --- | ---: | --- | --- |
| https://akdenizdental.com/all-on-4 | 200 | https://akdenizdental.com/all-on-4 | ALREADY EXISTS |
| https://akdenizdental.com/dental-implants | 200 | https://akdenizdental.com/dental-implants | ALREADY EXISTS |
| https://akdenizdental.com/e-max | 200 | https://akdenizdental.com/e-max | ALREADY EXISTS |
| https://akdenizdental.com/mustafa-akca | 200 | https://akdenizdental.com/before-after | MANUAL REVIEW |
| https://akdenizdental.com/our-history | 200 | https://akdenizdental.com/our-history | ALREADY EXISTS |
| https://akdenizdental.com/our-team | 200 | https://akdenizdental.com/our-team | IMPLEMENTED |

All 12 individual dentist URLs inspected return HTTP 200 but advertise `/before-after` as canonical. No new links to those URLs are added. Existing links and provider files are preserved; fixing the official site is outside this two-repository implementation.

Shared headers, footers, review badges, sidebar/templates, Organization schema, canonicals and robots are unchanged. No cross-link between the English and Polish sites was added. A pre-existing Polish expert-source reference to the English reviewer profile is retained as unrelated work. Clinical/government citations are preserved.

Open work preserved: Polish PR #16 (clinic gallery); English PRs #1, #3, #4, #6, #11, #21, #22. Branches start at current main; no merges are performed.

## Validation

Polish: `npm run verify` passed (lint, TypeScript, lead delivery, build, SEO contract, AI content, guide contract). English: `npx tsc --noEmit`, `npm run lint`, `npm run build` passed; lint has three pre-existing warnings in untouched files. English build also emits existing themeColor warnings. The prebuild freshness generator found 40 unrelated stale main entries; only its generated `/editorial-policy` entry is included in this PR.

Overall audit found 19 existing visible Akdeniz link occurrences, representing 18 unique source-target pairs. New links: Polish 2, English 1, total 3. Generic source-page candidates rejected: 15. Architecture proposals rejected: 2 types, applicable to both sites.
