// Fetch Google Search Console performance data straight from the Search
// Analytics API and write a snapshot the daily SEO run reads.
//
// Why this exists: GSC data used to reach this repo through a third-party
// reporting connector. On 2026-09-17 that connector's trial lapsed and every
// query started returning TRIAL_EXPIRED, which left the daily run with no
// feedback loop — four build runs shipped blind before anyone noticed. This
// script removes the paid middleman: it talks to Google directly, needs no npm
// dependency, and fails loudly instead of silently returning nothing.
//
//   node scripts/gsc-fetch.mjs --check    verify credentials only, fetch nothing
//   node scripts/gsc-fetch.mjs            write seo/gsc-snapshot.json
//   node scripts/gsc-fetch.mjs --stdout   print the snapshot instead of writing
//
// Credentials — set EITHER of these (see docs/gsc-access.md):
//
//   1. Service account (preferred for scheduled runs). The service account's
//      email must be added as a user on the Search Console property.
//        GSC_SERVICE_ACCOUNT_KEY_FILE=/path/to/key.json
//      or GSC_SERVICE_ACCOUNT_JSON='{"client_email":...,"private_key":...}'
//
//   2. OAuth refresh token (if you would rather authorise your own Google
//      account than add a service account to the property).
//        GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN
//
// Optional:
//   GSC_PROPERTY   override the property URL (default: the site's domain property)

import { createSign } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const PROPERTY = process.env.GSC_PROPERTY || 'sc-domain:teethdoneinturkey.co.uk';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const OUT_FILE = path.join('seo', 'gsc-snapshot.json');

/**
 * Search Console finalises data on a 2–3 day lag. `dataState: 'all'` includes
 * the fresh, still-moving rows — which is what the daily run wants, because a
 * breakout query showing up yesterday is the signal. The snapshot records which
 * windows are partial so a run does not mistake incomplete data for a decline.
 */
const DATA_STATE = 'all';
const FRESH_DATA_LAG_DAYS = 3;

/** The position buckets the daily routine prioritises by. 4–20 is striking distance. */
const POSITION_BUCKETS = [
  { id: '1-3', min: 0, max: 3.5 },
  { id: '4-10', min: 3.5, max: 10.5 },
  { id: '11-20', min: 10.5, max: 20.5 },
  { id: '21-30', min: 20.5, max: 30.5 },
  { id: '31+', min: 30.5, max: Infinity },
];

// ---------------------------------------------------------------------------
// dates
// ---------------------------------------------------------------------------

const iso = (d) => d.toISOString().slice(0, 10);

/** `daysAgo(0)` is today in UTC; GSC date ranges are inclusive on both ends. */
function daysAgo(n) {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

/**
 * The windows the routine compares. Each carries the previous equal-length
 * period so growth is measured rather than guessed.
 */
function buildWindows() {
  return [
    { id: 'last_1_day', label: 'Last 24h', start: daysAgo(1), end: daysAgo(1) },
    { id: 'last_7_days', label: 'Last 7 days', start: daysAgo(7), end: daysAgo(1) },
    { id: 'prev_7_days', label: 'Previous 7 days', start: daysAgo(14), end: daysAgo(8) },
    { id: 'last_28_days', label: 'Last 28 days', start: daysAgo(28), end: daysAgo(1) },
    { id: 'prev_28_days', label: 'Previous 28 days', start: daysAgo(56), end: daysAgo(29) },
  ];
}

// ---------------------------------------------------------------------------
// auth
// ---------------------------------------------------------------------------

const b64url = (buf) =>
  Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

function readServiceAccount() {
  const inline = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const file = process.env.GSC_SERVICE_ACCOUNT_KEY_FILE;
  let raw;
  if (inline && inline.trim()) {
    raw = inline;
  } else if (file && file.trim()) {
    if (!fs.existsSync(file)) {
      throw new Error(`GSC_SERVICE_ACCOUNT_KEY_FILE points at a file that does not exist: ${file}`);
    }
    raw = fs.readFileSync(file, 'utf8');
  } else {
    return null;
  }

  let key;
  try {
    key = JSON.parse(raw);
  } catch {
    throw new Error('Service account credentials are not valid JSON.');
  }
  if (!key.client_email || !key.private_key) {
    throw new Error('Service account JSON is missing client_email or private_key.');
  }
  // Env vars commonly carry the PEM with literal \n sequences.
  key.private_key = key.private_key.replace(/\\n/g, '\n');
  return key;
}

/** Mint an access token by signing a JWT assertion (RFC 7523). */
async function tokenFromServiceAccount(key) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const assertion = `${header}.${claims}.${b64url(signer.sign(key.private_key))}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      `Service account token exchange failed (${res.status}): ${body.error_description || body.error || 'unknown error'}`,
    );
  }
  return { token: body.access_token, via: `service account ${key.client_email}` };
}

async function tokenFromRefreshToken() {
  const client_id = process.env.GSC_CLIENT_ID;
  const client_secret = process.env.GSC_CLIENT_SECRET;
  const refresh_token = process.env.GSC_REFRESH_TOKEN;
  if (!client_id || !client_secret || !refresh_token) return null;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id, client_secret, refresh_token, grant_type: 'refresh_token' }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      `OAuth refresh failed (${res.status}): ${body.error_description || body.error || 'unknown error'}`,
    );
  }
  return { token: body.access_token, via: 'OAuth refresh token' };
}

async function getAccessToken() {
  const key = readServiceAccount();
  if (key) return tokenFromServiceAccount(key);

  const refreshed = await tokenFromRefreshToken();
  if (refreshed) return refreshed;

  throw new Error(
    'No Search Console credentials found. Set GSC_SERVICE_ACCOUNT_KEY_FILE (or ' +
      'GSC_SERVICE_ACCOUNT_JSON), or all of GSC_CLIENT_ID / GSC_CLIENT_SECRET / ' +
      'GSC_REFRESH_TOKEN. See docs/gsc-access.md.',
  );
}

// ---------------------------------------------------------------------------
// api
// ---------------------------------------------------------------------------

const API_ROOT = 'https://searchconsole.googleapis.com/webmasters/v3/sites';

/**
 * One Search Analytics call, paged to exhaustion. The API caps rowLimit at
 * 25,000 and pages via startRow; a short page means the end of the result set.
 */
async function querySearchAnalytics(token, { start, end, dimensions }) {
  const PAGE = 5000;
  const rows = [];
  for (let startRow = 0; ; startRow += PAGE) {
    const res = await fetch(`${API_ROOT}/${encodeURIComponent(PROPERTY)}/searchAnalytics/query`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: iso(start),
        endDate: iso(end),
        dimensions,
        rowLimit: PAGE,
        startRow,
        dataState: DATA_STATE,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      if (res.status === 403) {
        throw new Error(
          `403 from Search Console for ${PROPERTY}. The authorised identity is not a user on ` +
            `this property — add it in Search Console → Settings → Users and permissions. (${text.slice(0, 300)})`,
        );
      }
      throw new Error(`Search Analytics query failed (${res.status}): ${text.slice(0, 300)}`);
    }

    const body = await res.json();
    const page = body.rows || [];
    rows.push(...page);
    if (page.length < PAGE) break;
  }
  return rows;
}

// ---------------------------------------------------------------------------
// shaping
// ---------------------------------------------------------------------------

const bucketFor = (position) =>
  POSITION_BUCKETS.find((b) => position >= b.min && position < b.max)?.id ?? '31+';

/**
 * CTR and average position are ratios, so they are recomputed from summed
 * clicks/impressions rather than averaged across rows — averaging a ratio
 * across rows is mathematically wrong and would misreport the totals.
 */
function totalsFrom(rows) {
  const clicks = rows.reduce((n, r) => n + (r.clicks || 0), 0);
  const impressions = rows.reduce((n, r) => n + (r.impressions || 0), 0);
  const weightedPosition = rows.reduce((n, r) => n + (r.position || 0) * (r.impressions || 0), 0);
  return {
    clicks,
    impressions,
    ctr: impressions ? Number((clicks / impressions).toFixed(4)) : 0,
    position: impressions ? Number((weightedPosition / impressions).toFixed(1)) : 0,
  };
}

function shapeRows(rows, dimensions) {
  return rows
    .map((r) => {
      const out = {};
      dimensions.forEach((d, i) => {
        out[d] = r.keys?.[i] ?? null;
      });
      out.clicks = r.clicks || 0;
      out.impressions = r.impressions || 0;
      out.ctr = Number((r.ctr || 0).toFixed(4));
      out.position = Number((r.position || 0).toFixed(1));
      if (out.position) out.bucket = bucketFor(out.position);
      return out;
    })
    .sort((a, b) => b.impressions - a.impressions);
}

/** Impressions per position bucket — the shape STEP 1 of the routine reads first. */
function bucketSummary(rows) {
  const summary = Object.fromEntries(POSITION_BUCKETS.map((b) => [b.id, { queries: 0, impressions: 0, clicks: 0 }]));
  for (const r of rows) {
    const b = summary[bucketFor(r.position)];
    b.queries += 1;
    b.impressions += r.impressions;
    b.clicks += r.clicks;
  }
  return summary;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  const args = new Set(process.argv.slice(2));
  const checkOnly = args.has('--check');
  const toStdout = args.has('--stdout');

  const { token, via } = await getAccessToken();
  process.stderr.write(`gsc-fetch: authenticated via ${via}\n`);

  if (checkOnly) {
    // Cheapest possible authorised call that still proves property access.
    const probe = buildWindows().find((w) => w.id === 'last_7_days');
    await querySearchAnalytics(token, { start: probe.start, end: probe.end, dimensions: ['date'] });
    process.stderr.write(`gsc-fetch: OK — ${PROPERTY} is readable.\n`);
    return;
  }

  const freshFrom = iso(daysAgo(FRESH_DATA_LAG_DAYS));
  const snapshot = {
    property: PROPERTY,
    fetchedAt: new Date().toISOString(),
    dataState: DATA_STATE,
    note:
      `Rows dated ${freshFrom} or later are fresh and may still change; treat a dip ` +
      `inside that span as incomplete data, not a decline.`,
    windows: {},
  };

  for (const w of buildWindows()) {
    const queryRows = await querySearchAnalytics(token, {
      start: w.start,
      end: w.end,
      dimensions: ['query', 'page'],
    });
    const dateRows = await querySearchAnalytics(token, {
      start: w.start,
      end: w.end,
      dimensions: ['date'],
    });

    const shaped = shapeRows(queryRows, ['query', 'page']);
    snapshot.windows[w.id] = {
      label: w.label,
      startDate: iso(w.start),
      endDate: iso(w.end),
      partial: iso(w.end) >= freshFrom,
      totals: totalsFrom(queryRows),
      positionBuckets: bucketSummary(shaped),
      daily: shapeRows(dateRows, ['date']).sort((a, b) => a.date.localeCompare(b.date)),
      queries: shaped,
    };
    process.stderr.write(
      `gsc-fetch: ${w.id} (${iso(w.start)}..${iso(w.end)}) — ` +
        `${shaped.length} query/page rows, ${snapshot.windows[w.id].totals.impressions} impressions\n`,
    );
  }

  const json = `${JSON.stringify(snapshot, null, 2)}\n`;
  if (toStdout) {
    process.stdout.write(json);
    return;
  }
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, json);
  process.stderr.write(`gsc-fetch: wrote ${OUT_FILE}\n`);
}

main().catch((err) => {
  process.stderr.write(`gsc-fetch: ${err.message}\n`);
  process.exit(1);
});
