/**
 * Internal link audit script.
 *
 * Usage: node scripts/audit-internal-links.mjs
 *
 * Parses all src/app page.tsx files recursively, extracts href values and their
 * surrounding anchor text, then cross-references against LINK_REGISTRY.
 *
 * For each P0 money page it prints:
 *   - Total incoming link count
 *   - Source pages + anchor text
 *   - Missing required links per registry
 *
 * Writes seo/internal-link-audit.json for trend tracking.
 */

import { readFileSync, readdirSync, writeFileSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_APP = join(ROOT, 'src', 'app');
const SEO_DIR = join(ROOT, 'seo');

// ---------------------------------------------------------------------------
// Load registry (read the TS source as text and parse the relevant arrays)
// ---------------------------------------------------------------------------

const registrySource = readFileSync(
  join(ROOT, 'src', 'lib', 'internal-links.ts'),
  'utf8'
);

// Extract LINK_REGISTRY entries using a simple pattern matcher
// Matches: { from: '...', to: '...', anchorText: '...', placement: '...', priority: '...' }
const entryPattern =
  /\{\s*from:\s*'([^']+)',\s*to:\s*'([^']+)',\s*anchorText:\s*'([^']+)',\s*placement:\s*'([^']+)',\s*priority:\s*'([^']+)'/g;

const REGISTRY = [];
let m;
while ((m = entryPattern.exec(registrySource)) !== null) {
  REGISTRY.push({
    from: m[1],
    to: m[2],
    anchorText: m[3],
    placement: m[4],
    priority: m[5],
  });
}

const MONEY_PAGES = [
  '/guides/teeth-in-turkey',
  '/prices/turkey-teeth-cost',
  '/finance-options-uk',
  '/monthly-payment',
  '/prices/dental-implants-turkey-cost',
  '/prices/veneers-turkey-cost',
  '/treatments/dental-implants-turkey',
  '/treatments/veneers-turkey',
  '/treatments/all-on-4-turkey',
  '/treatments/all-on-6-turkey',
  '/book-consultation',
  '/free-treatment-plan',
  '/price-calculator',
  '/guides/dental-implants-turkey',
  '/guides/best-veneers-turkey',
  '/guides/turkey-teeth-packages',
];

// ---------------------------------------------------------------------------
// Glob all page.tsx files
// ---------------------------------------------------------------------------

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (entry === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const pages = walk(SRC_APP);

// ---------------------------------------------------------------------------
// Extract links from each file
// ---------------------------------------------------------------------------

function urlFromFile(filePath) {
  const rel = relative(SRC_APP, filePath);
  // page.tsx → ""  (root)  |  blog/foo/page.tsx → "/blog/foo"
  const parts = rel.split('/').slice(0, -1); // drop "page.tsx"
  return '/' + parts.join('/');
}

// Extract href="..." values and try to capture anchor text from Link elements
function extractLinks(source) {
  const links = [];

  // Match both JSX href="..." and object literal href: "..." patterns
  const hrefRe = /href[=:]\s*"([^"]+)"/g;
  let hm;
  while ((hm = hrefRe.exec(source)) !== null) {
    const href = hm[1];
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('#')) continue;

    // Attempt to find anchor text: text inside <Link href="...">..anchor..</Link>
    // Simple heuristic: look for text content 30 chars after href=
    let anchorText = '';
    const offset = hm.index;
    const snippet = source.slice(offset, offset + 400);
    // Look for >text< pattern (naive but works for JSX without nested elements)
    const textMatch = snippet.match(/>([\w\s:£&–—,'./?!°]+)</);
    if (textMatch) {
      anchorText = textMatch[1].trim().replace(/\s+/g, ' ').slice(0, 80);
    }

    links.push({ href, anchorText });
  }

  return links;
}

// ---------------------------------------------------------------------------
// Build in/out maps
// ---------------------------------------------------------------------------

/** Map: url → array of { from, anchorText } */
const inLinks = new Map();
/** Map: url → array of { to, anchorText } */
const outLinks = new Map();

// Page priority lookup from sitemap data
const routeData = JSON.parse(
  readFileSync(join(ROOT, 'seo', 'route-lastmod.json'), 'utf8')
);

for (const filePath of pages) {
  const source = readFileSync(filePath, 'utf8');
  const fromUrl = urlFromFile(filePath);
  const links = extractLinks(source);

  if (!outLinks.has(fromUrl)) outLinks.set(fromUrl, []);
  for (const { href, anchorText } of links) {
    outLinks.get(fromUrl).push({ to: href, anchorText });
    if (!inLinks.has(href)) inLinks.set(href, []);
    inLinks.get(href).push({ from: fromUrl, anchorText });
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const HIGH_PRIORITY_PAGES = [
  '/guides/teeth-in-turkey',
  '/prices/turkey-teeth-cost',
  '/finance-options-uk',
  '/guides/dental-implants-turkey',
  '/guides/best-veneers-turkey',
  '/guides/turkish-veneers-safety',
  '/guides/turkey-teeth-antalya',
];

const auditResults = [];

console.log('\n═══════════════════════════════════════════════════════════');
console.log('  INTERNAL LINK AUDIT — TeethDoneInTurkey.co.uk');
console.log('═══════════════════════════════════════════════════════════\n');

for (const page of MONEY_PAGES) {
  const incoming = inLinks.get(page) || [];
  const fromHighAuth = incoming.filter((l) => HIGH_PRIORITY_PAGES.includes(l.from));
  const requiredLinks = REGISTRY.filter((e) => e.to === page && e.priority === 'required');
  const missingRequired = requiredLinks.filter(
    (e) => !incoming.some((l) => l.from === e.from)
  );

  console.log(`▸ ${page}`);
  console.log(`  Incoming links : ${incoming.length} total`);
  console.log(`  From high-auth : ${fromHighAuth.length}`);
  if (fromHighAuth.length > 0) {
    for (const l of fromHighAuth) {
      console.log(`    ← ${l.from}  "${l.anchorText || '(no anchor extracted)'}"`);
    }
  }
  if (missingRequired.length > 0) {
    console.log(`  ⚠  Missing ${missingRequired.length} required link(s):`);
    for (const e of missingRequired) {
      console.log(`    ✗ from ${e.from}  anchor: "${e.anchorText}"`);
    }
  } else {
    console.log('  ✓ All required incoming links present');
  }
  console.log();

  auditResults.push({
    page,
    incomingTotal: incoming.length,
    incomingFromHighAuth: fromHighAuth.length,
    sources: incoming.map((l) => ({ from: l.from, anchorText: l.anchorText })),
    missingRequired: missingRequired.map((e) => ({ from: e.from, anchorText: e.anchorText })),
  });
}

// ---------------------------------------------------------------------------
// Write JSON output
// ---------------------------------------------------------------------------

const outputPath = join(SEO_DIR, 'internal-link-audit.json');
writeFileSync(
  outputPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      registrySize: REGISTRY.length,
      pagesScanned: pages.length,
      results: auditResults,
    },
    null,
    2
  )
);

console.log(`Audit written to ${relative(ROOT, outputPath)}`);
console.log(
  `Registry: ${REGISTRY.length} entries | Pages scanned: ${pages.length}\n`
);
