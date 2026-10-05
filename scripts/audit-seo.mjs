/**
 * Read-only SEO hygiene audit (the monthly/weekly maintenance routine's
 * mechanical layer). It never edits pages, redirects or robots.
 *
 * Usage: node scripts/audit-seo.mjs [--strict] [--json]
 *
 * ERRORS (exit 1 with --strict):
 *   - sitemap manifest lists a noindex page or a redirect stub
 *   - sitemap manifest lists a route that no longer exists
 *   - a live page links to a redirect stub (link to the target instead)
 * WARNINGS (report only — quality calls need a human, see docs/seo-directive.md):
 *   - <title> > 60 chars, meta description outside 150–160
 *   - orphan indexable pages (no internal link from another live page)
 *
 * Deciding KEEP / IMPROVE / MERGE / NOINDEX needs GSC data and intent review;
 * that is the skill's job, not this script's.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { discoverRoutes, isNoindex, isRedirectStub } from './lib/site-routes.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'src', 'app');
const args = new Set(process.argv.slice(2));

const SKIPPED = new Set(['api', 'fonts', 'node_modules']);
const skipDir = (n) => SKIPPED.has(n) || /^[[@_.]/.test(n);

const pages = []; // { route, source, stub, noindex }
(function walk(dir, url) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && e.name === 'page.tsx')) {
    const source = fs.readFileSync(path.join(dir, 'page.tsx'), 'utf8');
    pages.push({
      route: url === '' ? '/' : url,
      source,
      stub: isRedirectStub(source),
      noindex: isNoindex(source),
    });
  }
  for (const e of entries) {
    if (!e.isDirectory() || skipDir(e.name)) continue;
    walk(path.join(dir, e.name), /^\(.*\)$/.test(e.name) ? url : `${url}/${e.name}`);
  }
})(APP, '');

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo', 'route-lastmod.json'), 'utf8')).routes;
const byRoute = new Map(pages.map((p) => [p.route, p]));
const errors = [];
const warnings = [];

for (const route of Object.keys(manifest)) {
  const p = byRoute.get(route);
  if (!p) errors.push(`manifest route missing on disk: ${route}`);
  else if (p.noindex) errors.push(`noindex page listed in sitemap manifest: ${route}`);
  else if (p.stub) errors.push(`redirect stub listed in sitemap manifest: ${route}`);
}

const live = discoverRoutes(APP).map((r) => r.route);
const stubs = new Set(pages.filter((p) => p.stub).map((p) => p.route));
const incoming = new Map(live.map((r) => [r, 0]));
// Any quoted site path counts as a link: pages build links through href=, data
// arrays (`{ href: '/x' }`) and template literals, not only literal href attributes.
const hrefRe = /["'`](\/[a-z0-9][a-z0-9\-/]*)(?=[#?"'`])/g;
for (const p of pages.filter((x) => !x.stub)) {
  for (const m of p.source.matchAll(hrefRe)) {
    const to = m[1].length > 1 ? m[1].replace(/\/$/, '') : m[1];
    if (stubs.has(to)) errors.push(`${p.route} links to redirect stub ${to}`);
    if (to !== p.route && incoming.has(to)) incoming.set(to, incoming.get(to) + 1);
  }
}

for (const p of pages.filter((x) => !x.stub && !x.noindex)) {
  const title = p.source.match(/\btitle\s*:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const desc = p.source.match(/\bdescription\s*:\s*\n?\s*["'`]([^"'`]+)["'`]/)?.[1];
  if (title && title.length > 60) warnings.push(`title ${title.length} chars > 60: ${p.route}`);
  if (desc && (desc.length < 150 || desc.length > 160)) warnings.push(`description ${desc.length} chars (want 150–160): ${p.route}`);
}
for (const [route, n] of incoming) {
  // Links built in shared components or src/lib data are invisible here, so a
  // zero means "needs a look", not "defect".
  if (route !== '/' && n === 0) warnings.push(`no internal link found from another page: ${route}`);
}

const result = { indexable: live.length, redirectStubs: stubs.size, noindex: pages.filter((p) => p.noindex).length, errors, warnings };
if (args.has('--json')) console.log(JSON.stringify(result, null, 2));
else {
  console.log(`indexable: ${result.indexable}  redirect stubs: ${result.redirectStubs}  noindex: ${result.noindex}`);
  for (const e of errors) console.log(`ERROR   ${e}`);
  for (const w of warnings) console.log(`WARN    ${w}`);
  console.log(`${errors.length} error(s), ${warnings.length} warning(s)`);
}
if (args.has('--strict') && errors.length) process.exit(1);
