#!/usr/bin/env node
/**
 * Read-only audit for the 19 Search Console "Discovered - currently not indexed"
 * URLs reported on 2026-10-12. No Indexing API calls, sitemap pings, or writes.
 * Usage: node scripts/audit-gsc-discovered.mjs
 */
import { writeFileSync } from 'node:fs';

const BASE = 'https://www.teethdoneinturkey.co.uk';
const ROUTES = [
  '/treatments/veneers-turkey',
  '/treatments/dental-implants-turkey',
  '/prices/dental-implants-turkey-cost',
  '/monthly-payment',
  '/treatments/all-on-6-turkey',
  '/treatments/full-smile-makeover-turkey',
  '/prices/hollywood-smile-turkey-package',
  '/reviews',
  '/about-us',
  '/guides/cant-afford-dental-treatment-uk',
  '/teeth-done-in-turkey-guide',
  '/travel-to-turkey/dental-holiday-turkey',
  '/blog',
  '/blog/4-8-10-rule-for-veneers',
  '/blog/dental-implant-recovery-time',
  '/blog/dental-treatment-turkey-payment-plans',
  '/blog/hollywood-smile-uk-vs-turkey',
  '/blog/is-it-safe-to-get-teeth-done-in-turkey',
  '/blog/same-day-dental-implants-turkey',
];

async function read(url) {
  const response = await fetch(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(15000),
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SEOReadOnlyAudit/1.0)' },
  });
  return { response, text: await response.text() };
}
function normalized(u) {
  try {
    const url = new URL(u, BASE);
    return url.origin + (url.pathname.replace(/\/$/, '') || '/');
  } catch { return null; }
}
function tag(html, name) {
  const match = html.match(new RegExp('<' + name + '\\b[^>]*>([\\s\\S]*?)<\\/' + name + '>', 'i'));
  return match?.[1]?.replace(/<[^>]*>/g, ' ').trim() || null;
}
function metaRobots(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(x => x[0])
    .filter(x => /name\s*=\s*["'](?:robots|googlebot)["']/i.test(x))
    .map(x => x.match(/content\s*=\s*["']([^"']+)/i)?.[1] || '');
}
function canonical(html) {
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(x => x[0]);
  return links.filter(x => /rel\s*=\s*["']canonical["']/i.test(x))
    .map(x => x.match(/href\s*=\s*["']([^"']+)/i)?.[1] || null);
}
let robotsText = null, sitemapText = null;
try { const r = await read(BASE + '/robots.txt'); if (r.response.ok) robotsText = r.text; }
catch (error) { console.error('robots.txt fetch failed:', error.message); }
try { const r = await read(BASE + '/sitemap.xml'); if (r.response.ok) sitemapText = r.text; }
catch (error) { console.error('sitemap.xml fetch failed:', error.message); }
const results = [];
for (let i = 0; i < ROUTES.length; i++) {
  const route = ROUTES[i], url = BASE + route;
  try {
    const { response, text } = await read(url);
    const canonicalTags = canonical(text);
    const robots = metaRobots(text);
    const headerRobots = response.headers.get('x-robots-tag') || '';
    const issues = [];
    if (response.status !== 200) issues.push('HTTP_NOT_200');
    if (canonicalTags.length !== 1 || normalized(canonicalTags[0]) !== normalized(url)) issues.push('CANONICAL_REVIEW');
    if (robots.some(x => /noindex/i.test(x)) || /noindex/i.test(headerRobots)) issues.push('NOINDEX');
    if (!tag(text, 'h1')) issues.push('MISSING_SERVER_H1');
    if (!tag(text, 'title')) issues.push('MISSING_SERVER_TITLE');
    if (text.length < 2000) issues.push('THIN_HTML_REVIEW');
    if (sitemapText && !sitemapText.includes('<loc>' + url + '</loc>')) issues.push('NOT_IN_SITEMAP');
    results.push({ priority: i < 5 ? 'P0' : i < 10 ? 'P1' : 'P2',
      route, status: response.status, location: response.headers.get('location'),
      title: tag(text, 'title'), h1: tag(text, 'h1'), canonical: canonicalTags,
      metaRobots: robots, xRobotsTag: headerRobots, htmlBytes: Buffer.byteLength(text),
      sitemapListed: sitemapText ? sitemapText.includes('<loc>' + url + '</loc>') : null,
      issues });
  } catch(error) {
    results.push({ priority: i < 5 ? 'P0' : i < 10 ? 'P1' : 'P2', route,
      issues: ['FETCH_FAILED'], error: error.message });
  }
}
const report = {
  generatedAt: new Date().toISOString(),
  gscSnapshotDate: '2026-10-12',
  category: 'Discovered - currently not indexed',
  urlCount: ROUTES.length,
  robotsFetched: robotsText !== null,
  sitemapFetched: sitemapText !== null,
  caveats: [
    'This is a public HTTP audit, not Googlebot verification or live GSC inspection.',
    'Robots directives require manual path-specific evaluation; robotsFetched does not imply Googlebot allowed.',
    'Regex-based HTML checks are indicators, not final determinations.',
    'GSC indexing status cannot be established through this script.',
  ], results,
};
writeFileSync('/tmp/teethdone-gsc-19-audit.json', JSON.stringify(report, null, 2));
console.table(results.map(({priority,route,status,issues})=>({priority,route,status,issues:issues.join(', ') || 'none flagged'})));
console.log('Report: /tmp/teethdone-gsc-19-audit.json');
if (results.some(r => r.priority === 'P0' && r.issues.length)) process.exitCode = 1;
