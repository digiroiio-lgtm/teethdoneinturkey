// Inspect production HTML, not JSX patterns. Run after npm run build.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const BASE = 'https://www.teethdoneinturkey.co.uk';
const routes = Object.keys(JSON.parse(fs.readFileSync('seo/route-lastmod.json', 'utf8')).routes);
const pages = new Map();
const errors = [];
const warnings = [];
const inventory = {};
let scripts = 0;
const walk = (value, visit) => {
  if (!value || typeof value !== 'object') return;
  if (!Array.isArray(value)) visit(value);
  for (const child of Object.values(value)) walk(child, visit);
};

for (const route of routes) {
  const file = path.join('.next/server/app', route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  const html = fs.readFileSync(file, 'utf8');
  pages.set(route, html);
  if (!html.includes('<html lang="en-GB"')) errors.push(`${route}: missing en-GB`);
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  if (canonical?.[1] !== `${BASE}${route === '/' ? '' : route}` && canonical?.[1] !== `${BASE}${route}`) errors.push(`${route}: incorrect canonical ${canonical?.[1]}`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${route}: expected one H1`);
  const definitions = new Map();
  const references = [];
  const types = new Set();
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    scripts++;
    let graph;
    try { graph = JSON.parse(match[1]); } catch { errors.push(`${route}: invalid JSON-LD`); continue; }
    walk(graph, (node) => {
      if (node['@type']) for (const type of [node['@type']].flat()) types.add(type);
      if (node['@id']) {
        if (node['@type']) {
          if (definitions.has(node['@id'])) errors.push(`${route}: duplicate entity definition ${node['@id']}`);
          definitions.set(node['@id'], node);
        } else references.push(node['@id']);
      }
      if (node.reviewedBy && !html.includes('Medically reviewed by')) errors.push(`${route}: hidden-only medical review attribution`);
    });
  }
  for (const id of references) {
    if (id.startsWith(`${BASE}/#`) && !definitions.has(id)) errors.push(`${route}: dangling site entity ${id}`);
  }
  inventory[route] = [...types].sort();
  if (/\b(?:JCI-accredited|0% APR representative|no credit impact)\b/i.test(html)) warnings.push(route);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    const url = new URL(href, BASE);
    if (url.origin !== BASE) continue;
    const target = decodeURI(url.pathname).replace(/\/$/, '') || '/';
    if (routes.includes(target)) continue;
    const asset = path.join('public', target);
    const routeFile = path.join('src/app', target, 'page.tsx');
    if (!fs.existsSync(asset) && !fs.existsSync(routeFile)) errors.push(`${route}: broken internal link ${href}`);
  }
}
const newEvidencePages = ['/', ...['veneers-turkey','dental-implants-turkey','all-on-4-turkey','all-on-6-turkey','full-smile-makeover-turkey'].map(s => `/treatments/${s}`), ...['4-8-10-rule-for-veneers','composite-vs-porcelain-veneers-turkey','e-max-vs-zirconia-veneers-turkey','are-veneers-in-turkey-worth-it','risks-of-veneers-in-turkey'].map(s => `/blog/${s}`)];
for (const route of newEvidencePages) {
  const html = pages.get(route);
  assert.ok(html.includes('Clinical References'), `${route}: missing server-rendered references`);
  assert.ok(html.includes('www.mouthhealthy.org') || html.includes('www.fda.gov'), `${route}: missing reference URL`);
}
// These pages used to emit reviewedBy even though the visible badge said no
// review was completed. Keep that distinction intact in actual production HTML.
assert.ok(!pages.get('/blog/4-8-10-rule-for-veneers').includes('"reviewedBy"'));
assert.ok(pages.get('/blog/risks-of-veneers-in-turkey').includes('"reviewedBy"'));
const report = { pagesChecked: routes.length, jsonLdScriptsParsed: scripts, evidencePagesChecked: newEvidencePages.length, errors: [...new Set(errors)], existingClaimsForHumanReview: [...new Set(warnings)], schemaTypesByPage: inventory };
fs.writeFileSync('seo/geo-validation.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({pagesChecked: report.pagesChecked, jsonLdScriptsParsed: scripts, evidencePagesChecked: newEvidencePages.length, errors: report.errors, existingClaimPages: report.existingClaimsForHumanReview.length}, null, 2));
if (report.errors.length) process.exitCode = 1;
