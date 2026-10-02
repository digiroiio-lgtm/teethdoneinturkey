# Search Console access for the daily SEO run

The daily SEO run is evidence-led: Step 1 of its routine is "read current
Search Console data", and every classification (KEEP / OPTIMISE EXISTING /
NEW PAGE / MERGE-AVOID) depends on real positions and impressions. With no GSC
data the run cannot safely do its most valuable work — deciding which of several
competing URLs Google actually prefers — because that decision is exactly what
caused the 2026-09-08 regression when it was made on assumption instead of data.

## What happened

GSC data used to reach this repo through the Supermetrics reporting connector.
The free trial on team *Team digiroiio* expired on **2026-09-17**. Since then
every query returns:

```
[TRIAL_EXPIRED] Your free trial on team Team digiroiio has expired on 2026-09-17
```

`seo/serp-history.md` stops at 2026-09-11 for this reason, while commits
continued to 2026-10-01 — four build runs shipped with no feedback loop.

## The fix: talk to Google directly

`scripts/gsc-fetch.mjs` queries the Search Analytics API itself. It needs no npm
dependency and no paid connector — just credentials for an identity that can read
the property.

```bash
npm run seo:gsc:check    # verify credentials and property access, fetch nothing
npm run seo:gsc          # write seo/gsc-snapshot.json
```

Pick **one** of the two credential routes below.

### Route 1 — service account (preferred for scheduled runs)

A service account does not expire, needs no browser, and is not tied to a person's
login, which is what a daily unattended run wants.

1. In [Google Cloud Console](https://console.cloud.google.com/) create (or reuse) a
   project and enable the **Google Search Console API**.
2. *IAM & Admin → Service Accounts → Create service account*. No project roles are
   needed — Search Console does its own permissioning.
3. On the new service account: *Keys → Add key → Create new key → JSON*. Download it.
4. Copy the service account's email (`…@….iam.gserviceaccount.com`).
5. In [Search Console](https://search.google.com/search-console) open the
   `teethdoneinturkey.co.uk` property → *Settings → Users and permissions → Add user*.
   Paste the service account email and grant **Full** or **Restricted** (either can
   read Search Analytics).
6. Expose the key to the run:

   ```bash
   export GSC_SERVICE_ACCOUNT_KEY_FILE=/secure/path/gsc-service-account.json
   # or, for CI / a hosted scheduler where only env vars exist:
   export GSC_SERVICE_ACCOUNT_JSON='{"client_email":"…","private_key":"-----BEGIN PRIVATE KEY-----\n…"}'
   ```

   `GSC_SERVICE_ACCOUNT_JSON` tolerates a private key whose newlines are escaped as
   `\n`, which is how most secret stores hand it back.

Step 5 is the one that is easy to miss. Without it the API answers `403` and the
script says so explicitly rather than reporting zero data.

### Route 2 — OAuth refresh token

Use this to authorise an existing Google account that already has property access,
instead of adding a service account.

1. Create an **OAuth client ID** (type: Desktop app) in the same Cloud project.
2. Authorise it once against the
   `https://www.googleapis.com/auth/webmasters.readonly` scope and keep the
   refresh token from the exchange.
3. Export all three:

   ```bash
   export GSC_CLIENT_ID=…
   export GSC_CLIENT_SECRET=…
   export GSC_REFRESH_TOKEN=…
   ```

A refresh token can be revoked when its owner changes their Google password or
removes app access, so Route 1 is the more durable choice for an unattended run.

## Never commit credentials

The key JSON and all `GSC_*` values are secrets. Keep the file outside the repo
(or in an ignored path) and inject the env vars from the scheduler's secret store.

`.gitignore` was tightened alongside this doc to cover the two ways these leak:
it previously ignored only `.env*.local`, so a plain `.env` holding `GSC_*`
values was committable. It now ignores `.env` and `.env*` (keeping
`.env.example` tracked) plus `*service-account*.json`. Verify with
`git status` before committing anyway — an ignore rule is a safety net, not a
guarantee.

## What the snapshot contains

`seo/gsc-snapshot.json` is written for the run to read, not for a human to page
through:

| Field | Why the run needs it |
|---|---|
| `windows.last_1_day` / `last_7_days` / `last_28_days` | The three windows the routine compares |
| `windows.prev_7_days` / `prev_28_days` | Equal-length prior periods, so growth is measured rather than guessed |
| `windows.*.partial` | `true` when the window includes not-yet-final data — stops the run reading incomplete days as a decline |
| `windows.*.positionBuckets` | Impressions split 1-3 / 4-10 / 11-20 / 21-30 / 31+; striking distance is 4–20 |
| `windows.*.queries` | Every query × landing-page row, with clicks, impressions, CTR, position and bucket |
| `windows.*.daily` | Day-by-day totals for the trend read |
| `windows.*.totals` | Clicks, impressions, CTR and impression-weighted average position |

Two deliberate choices worth knowing:

- **`dataState: 'all'`** — fresh, still-moving rows are included, because a query
  that broke out yesterday is the signal the run is looking for. The snapshot's
  `note` and each window's `partial` flag mark which data is not yet final.
- **CTR and average position are recomputed from summed clicks and impressions**,
  never averaged across rows. Averaging a ratio across rows is mathematically
  invalid and would misreport every total.

## Query-level clicks and `(unknown)` rows

The Search Analytics API anonymises rare queries, so query-level clicks and
impressions do not sum to the property totals. This script reports what the API
returns and does not synthesise an `(unknown)` balancing row. Expect
query-level sums to fall short of the totals in the Search Console UI; that gap is
Google's anonymisation, not a bug here.
