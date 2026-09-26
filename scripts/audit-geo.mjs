/**
 * SEO / GEO scoring audit.
 *
 * Usage: npm run build && node scripts/audit-geo.mjs
 *
 * Scores every sitemap route from the HTML Next.js actually prerendered
 * (.next/server/app/**.html) — what crawlers and answer engines receive — on
 * three 0–100 scales:
 *
 *   structure   technical extractability (headings, meta, canonical, schema)
 *   geo         citability (direct answer, key facts, evidence, freshness,
 *               decision support, price consistency, no absolute claims)
 *   visibility  repo data only: internal inbound links, llms.txt listing,
 *               sitemap freshness, and the Search Console and GA4 AI-referral
 *               figures recorded in seo/serp-history.md. A page with no
 *               recorded figure is scored on the remaining signals and marked
 *               partial — never estimated.
 *
 * Writes seo/geo-audit.json and seo/geo-audit.md. When a previous
 * seo/geo-audit.json exists, the report adds a Δ column against that run.
 * Report only: it is deliberately not a CI gate yet.
 */

import { existsSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const BUILD_APP = join(ROOT, '.next', 'server', 'app');
const MANIFEST = join(ROOT, 'seo', 'route-lastmod.json');
const OUT_JSON = join(ROOT, 'seo', 'geo-audit.json');
const OUT_MD = join(ROOT, 'seo', 'geo-audit.md');
const BASE = 'https://www.teethdoneinturkey.co.uk';

// Tune here. Check weights within each score sum to 100.
const WEIGHTS = {
  overall: { structure: 0.35, geo: 0.4, visibility: 0.25 },
  structure: {
    singleH1: 10,
    headingOrder: 5,
    titleLength: 8,
    metaDescription: 8,
    canonical: 10,
    jsonLdParses: 10,
    pageTypeSchema: 8,
    breadcrumb: 6,
    faqMatchesPage: 10,
    structuredContent: 8,
    schemaDates: 7,
    wordCount: 10,
  },
  geo: {
    directAnswer: 20,
    keyFacts: 10,
    evidence: 12,
    freshness: 12,
    methodologyLink: 6,
    decisionSupport: 10,
    followUps: 10,
    priceConsistency: 12,
    noAbsoluteClaims: 8,
  },
  visibility: {
    inboundLinks: 30,
    llmsTxt: 10,
    sitemapFresh: 10,
    gscImpressions: 20,
    gscPosition: 15,
    aiReferrals: 15,
  },
};

const FIX = {
  singleH1: 'Use exactly one <h1>.',
  headingOrder: 'Do not skip heading levels (e.g. h2 → h4).',
  titleLength: 'Keep <title> between 30 and 65 characters.',
  metaDescription: 'Write a 70–160 character meta description.',
  canonical: 'Add a canonical URL that matches the route.',
  jsonLdParses: 'Fix the JSON-LD block that does not parse.',
  pageTypeSchema: 'Add Article, BlogPosting, WebPage or Dataset schema.',
  breadcrumb: 'Add BreadcrumbList schema.',
  faqMatchesPage: 'FAQPage schema lists questions that are not visible on the page.',
  structuredContent: 'Add a table, list or definition list to the main content.',
  schemaDates: 'Add datePublished / dateModified to the page schema.',
  wordCount: 'Main content is under 400 words.',
  directAnswer: 'Answer the page question in ≤100 words near the top (QuickAnswer).',
  keyFacts: 'Add a key-facts box (AtAGlance <dl>).',
  evidence: 'Add a "How we know this" evidence block or a sourced references list.',
  freshness: 'Show Published / Last reviewed dates that match schema dateModified (PageFreshness).',
  methodologyLink: 'Link to /methodology or /editorial-policy from the main content.',
  decisionSupport: 'Add "who this may not suit" or a decision guide.',
  followUps: 'Add a follow-up question graph linking the pages that own each next question.',
  priceConsistency: 'A price on the page does not match the price index (src/lib/prices.ts).',
  noAbsoluteClaims: 'Make absolute claims conditional (fixed guarantee lengths, "save 90%", "all clinics JCI").',
  inboundLinks: 'Few pages link here from their main content.',
  llmsTxt: 'Not listed in public/llms.txt.',
  sitemapFresh: 'Sitemap lastmod is more than 90 days old.',
  gscImpressions: 'Low Search Console impressions.',
  gscPosition: 'Low average Search Console position.',
  aiReferrals: 'Few recorded AI-assistant referral sessions.',
};

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------

if (!existsSync(BUILD_APP)) {
  console.error('audit-geo: .next build output not found. Run `npm run build` first.');
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8')).routes;
const routes = Object.keys(manifest).sort();

function htmlPathFor(route) {
  return join(BUILD_APP, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
}

const newestLastmod = Math.max(...routes.map((r) => Date.parse(manifest[r].lastmod)));
const staleBuild = routes.some((r) => {
  const p = htmlPathFor(r);
  return !existsSync(p) || statSync(p).mtimeMs < newestLastmod - 60_000;
});
if (staleBuild) {
  console.error('audit-geo: the build is older than seo/route-lastmod.json or missing pages. Run `npm run build` first.');
  process.exit(1);
}

const llmsTxt = readFileSync(join(ROOT, 'public', 'llms.txt'), 'utf8');

// Canonical Turkey per-unit prices, from the built price-index dataset.
const indexBody = join(BUILD_APP, 'turkey-dental-price-index', 'data.json.body');
const priceIndex = existsSync(indexBody) ? JSON.parse(readFileSync(indexBody, 'utf8')).rows : [];
const priceById = Object.fromEntries(priceIndex.map((r) => [r.id, r]));
const canonicalTurkeyPrices = new Set(priceIndex.map((r) => r.turkey_price_gbp));

// Cluster membership from the *_INTENT_OWNERS maps.
const clusterOf = {};
for (const [name, file] of [
  ['implants', 'implant-cluster.ts'],
  ['veneers', 'veneer-cluster.ts'],
  ['hollywood', 'hollywood-cluster.ts'],
  ['finance', 'finance-cluster.ts'],
]) {
  const src = readFileSync(join(ROOT, 'src', 'lib', file), 'utf8');
  const block = src.match(/_INTENT_OWNERS\s*=\s*\{([\s\S]*?)\}\s*as const/);
  for (const m of (block?.[1] ?? '').matchAll(/:\s*"(\/[^"]+)"/g)) clusterOf[m[1]] ??= name;
}
clusterOf['/methodology'] = 'foundation';
clusterOf['/turkey-dental-price-index'] = 'foundation';

// Search Console and GA4 AI-referral rows recorded in seo/serp-history.md.
// The file is newest first, so the first row seen for a URL is its latest.
const leadingNumber = (cell) => Number((cell ?? '').replace(/[*,]/g, '').match(/^-?[\d.]+/)?.[0] ?? NaN);

function parseSerpHistory() {
  const text = readFileSync(join(ROOT, 'seo', 'serp-history.md'), 'utf8');
  const lines = text.split('\n');
  const gsc = {};
  const ai = {};
  let section = null;
  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(/^## (\d{4}-\d{2}-\d{2})/);
    if (heading) section = heading[1];
    const isHeader = lines[i].startsWith('|') && /^\|\s*:?-{3}/.test(lines[i + 1] ?? '');
    if (!isHeader) continue;
    const cols = lines[i].split('|').slice(1, -1).map((c) => c.trim().toLowerCase());
    const imprCol = cols.findIndex((c) => /^impr/.test(c));
    const posCol = cols.findIndex((c) => /\bpos(ition)?\b/.test(c) && !/^impr/.test(c));
    const aiCol = cols.findIndex((c) => /^ai sessions/.test(c));
    if ((imprCol < 0 || posCol < 0) && aiCol < 0) continue;
    for (let j = i + 2; j < lines.length && lines[j].startsWith('|'); j++) {
      const cells = lines[j].split('|').slice(1, -1).map((c) => c.trim());
      const url = cells[0]?.match(/^`(\/[^`]*)`$/)?.[1];
      if (!url) continue;
      if (imprCol >= 0 && posCol >= 0) {
        const impressions = leadingNumber(cells[imprCol]);
        const position = leadingNumber(cells[posCol]);
        if (Number.isFinite(impressions) && Number.isFinite(position) && !(url in gsc)) {
          gsc[url] = { impressions, position, week: section };
        }
      }
      if (aiCol >= 0) {
        const sessions = leadingNumber(cells[aiCol]);
        if (Number.isFinite(sessions) && !(url in ai)) ai[url] = { sessions, week: section };
      }
    }
  }
  return { gsc, ai };
}
const { gsc, ai: aiReferrals } = parseSerpHistory();

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'");

const toText = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<!-- -->/g, '')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();

const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9£]+/g, ' ').trim();

function parsePage(route) {
  const html = readFileSync(htmlPathFor(route), 'utf8');
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html;
  const jsonLdRaw = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const jsonLd = [];
  let jsonLdErrors = 0;
  for (const raw of jsonLdRaw) {
    try {
      const parsed = JSON.parse(raw);
      jsonLd.push(...(parsed['@graph'] ?? [parsed]));
    } catch {
      jsonLdErrors++;
    }
  }
  return {
    html,
    main,
    mainText: toText(main),
    title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''),
    description: decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ''),
    canonical: html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? null,
    jsonLd,
    jsonLdCount: jsonLdRaw.length,
    jsonLdErrors,
    mainLinks: [...main.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)].map((m) => (m[1].length > 1 ? m[1].replace(/\/$/, '') : m[1])),
  };
}

// ---------------------------------------------------------------------------
// Checks — each returns a 0..1 credit and optional detail
// ---------------------------------------------------------------------------

const PAGE_TYPES = new Set(['Article', 'BlogPosting', 'WebPage', 'Dataset', 'MedicalWebPage', 'CollectionPage']);
const pageNode = (p) => p.jsonLd.find((n) => PAGE_TYPES.has(n['@type']));

function structureChecks(route, p) {
  const h1s = (p.html.match(/<h1[\s>]/g) ?? []).length;
  const levels = [...p.main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const skipped = levels.some((l, i) => i > 0 && l > levels[i - 1] + 1);
  const words = p.mainText.split(' ').filter(Boolean).length;
  const faq = p.jsonLd.find((n) => n['@type'] === 'FAQPage');
  const body = normalise(toText(p.html));
  const missingFaq = faq
    ? (faq.mainEntity ?? []).filter((q) => !body.includes(normalise(q.name ?? '').slice(0, 60)))
    : [];
  const node = pageNode(p);
  return {
    singleH1: { credit: h1s === 1 ? 1 : 0, detail: `${h1s} h1` },
    headingOrder: { credit: skipped ? 0 : 1 },
    titleLength: { credit: p.title.length >= 30 && p.title.length <= 65 ? 1 : 0.5 * (p.title.length > 0), detail: `${p.title.length} chars` },
    metaDescription: { credit: p.description.length >= 70 && p.description.length <= 160 ? 1 : 0.5 * (p.description.length > 0), detail: `${p.description.length} chars` },
    canonical: { credit: p.canonical === (route === '/' ? BASE : `${BASE}${route}`) ? 1 : 0, detail: p.canonical ?? 'missing' },
    jsonLdParses: { credit: p.jsonLdCount > 0 && p.jsonLdErrors === 0 ? 1 : 0 },
    pageTypeSchema: { credit: node ? 1 : 0 },
    breadcrumb: { credit: p.jsonLd.some((n) => n['@type'] === 'BreadcrumbList') ? 1 : 0 },
    faqMatchesPage: { credit: missingFaq.length === 0 ? 1 : 0, detail: missingFaq.length ? `${missingFaq.length} hidden questions` : undefined },
    structuredContent: { credit: /<(table|ol|ul|dl)[\s>]/.test(p.main) ? 1 : 0 },
    schemaDates: { credit: node?.dateModified || node?.datePublished ? 1 : 0 },
    wordCount: { credit: Math.min(words / 400, 1), detail: `${words} words` },
  };
}

// Prices quoted right after a treatment keyword that match no canonical price
// in the index — how the old conflicts (£800 Straumann, £220 zirconia, £90
// composite) looked on the page.
const PRICE_RULES = [
  { id: 'implant-straumann', re: /Straumann/g },
  { id: 'emax-veneer', re: /E-?max/gi },
  // Lab-made composite is a separate, dearer product with no index price.
  { id: 'composite-veneer', re: /composite(?! veneers? \(lab)(?! \(lab)/gi },
  { id: 'zirconia-crown', re: /zirconi(a|um) (crowns?|veneers?|units?)/gi },
];

function priceConflicts(text) {
  const conflicts = [];
  for (const rule of PRICE_RULES) {
    const record = priceById[rule.id];
    if (!record) continue;
    for (const m of text.matchAll(rule.re)) {
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + 50);
      const quoted = after.match(/^[^£\d]{0,20}£([\d,]+)(.{0,12})/);
      const price = quoted?.[1];
      // "£680 more than Osstem" is a difference, and "compared with £2,000" is
      // the UK side of a comparison — neither is a Turkey price.
      if (!price || /^\s*(more|less|extra|cheaper|dearer)\b/.test(quoted[2])) continue;
      // "£159 a month" / "£159/mo" is a finance instalment, not a treatment price.
      if (/^\s*(\/\s*mo|a mo|per mo|\/month|monthly)/i.test(quoted[2])) continue;
      if (/\b(UK|compared|vs|versus|against)\b/i.test(after.slice(0, after.indexOf('£')))) continue;
      const n = Number(price.replace(/,/g, ''));
      if (n < record.uk_private_min_gbp && !canonicalTurkeyPrices.has(n)) {
        conflicts.push(`${m[0]} £${price}`);
      }
    }
  }
  return [...new Set(conflicts)];
}

const ABSOLUTE_CLAIMS = [
  /\b(10|5[–-]10)[- ]year (written |structural )?guarantee/i,
  /\bsave (up to )?[89]\d%/i,
  /\ball (our )?(partner )?clinics (are|hold) JCI/i,
  /\bno upfront fees\b/i,
  // 0% APR applies to 12- and 24-month plans only (src/lib/finance.ts).
  /\b36[- ]months?\b[^.]{0,40}\bat 0%|\b0%[^.]{0,80}\bover 36 months\b(?! with interest)|\b36-month 0%/i,
];

const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';

function geoChecks(route, p) {
  const text = p.mainText;
  const firstFifth = text.slice(0, Math.max(600, Math.floor(text.length * 0.2)));
  const quickAnswer = /id="quick-answer"/.test(p.main);
  const questionH2 = [...p.main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
    .map((m) => toText(m[1]))
    .find((h) => h.endsWith('?') && firstFifth.includes(h));

  const node = pageNode(p);
  const modified = (node?.dateModified ?? '').slice(0, 10);
  const reviewed = text.match(new RegExp(`(?:Last reviewed|Updated|Published):? (\\d{1,2} (?:${MONTHS}) \\d{4})`));
  let freshness = /(Published|Last reviewed|Updated|last verified|Pricing checked)/i.test(text) ? 0.5 : 0;
  if (freshness && modified && reviewed) {
    const shown = new Date(`${reviewed[1]} UTC`).toISOString().slice(0, 10);
    const reviewedLine = text.match(new RegExp(`Last reviewed:? (\\d{1,2} (?:${MONTHS}) \\d{4})`));
    const compare = reviewedLine ? new Date(`${reviewedLine[1]} UTC`).toISOString().slice(0, 10) : shown;
    if (compare === modified) freshness = 1;
  }

  const internalTargets = new Set(p.mainLinks.filter((l) => l !== route && !['/book-consultation', '/contact', '/free-treatment-plan'].includes(l)));
  const conflicts = priceConflicts(text);
  const claims = ABSOLUTE_CLAIMS.filter((re) => re.test(text)).map((re) => text.match(re)[0]);

  return {
    directAnswer: { credit: quickAnswer ? 1 : questionH2 ? 0.6 : 0 },
    keyFacts: { credit: /<dl[\s>]/.test(p.main) ? 1 : 0 },
    evidence: {
      credit: /How we know this/.test(text) ? 1 : /Sources|References/.test(text) && /href="https?:\/\//.test(p.main) ? 0.6 : 0,
    },
    freshness: { credit: freshness },
    methodologyLink: { credit: p.mainLinks.some((l) => l === '/methodology' || l === '/editorial-policy') ? 1 : 0 },
    decisionSupport: {
      credit: /id="(not-for-you|decision-guide)"/.test(p.main) || /may not (suit|be the right)/i.test(text) ? 1 : 0,
    },
    followUps: {
      credit: /id="follow-up-questions"/.test(p.main) ? 1 : internalTargets.size >= 3 ? 0.5 : 0,
    },
    priceConsistency: { credit: conflicts.length ? 0 : 1, detail: conflicts.join('; ') || undefined },
    noAbsoluteClaims: { credit: claims.length ? 0 : 1, detail: claims.join('; ') || undefined },
  };
}

function visibilityChecks(route, inbound) {
  const url = route === '/' ? BASE : `${BASE}${route}`;
  const listed = new RegExp(`${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?[)\\s|]`).test(llmsTxt);
  const ageDays = (Date.now() - Date.parse(manifest[route].lastmod)) / 86_400_000;
  const g = gsc[route];
  const posCredit = (pos) => (pos <= 3 ? 1 : pos <= 10 ? 0.8 : pos <= 20 ? 0.5 : pos <= 50 ? 0.25 : 0.1);
  return {
    inboundLinks: { credit: Math.min(inbound / 10, 1), detail: `${inbound} pages` },
    llmsTxt: { credit: listed ? 1 : 0 },
    sitemapFresh: { credit: ageDays <= 90 ? 1 : 0, detail: `${Math.round(ageDays)} days` },
    gscImpressions: g
      ? { credit: Math.min(Math.log10(g.impressions + 1) / 2, 1), detail: `${g.impressions} impr (${g.week})` }
      : { credit: null, detail: 'no data' },
    gscPosition: g ? { credit: posCredit(g.position), detail: `pos ${g.position} (${g.week})` } : { credit: null, detail: 'no data' },
    aiReferrals: aiReferrals[route]
      ? { credit: Math.min(aiReferrals[route].sessions / 5, 1), detail: `${aiReferrals[route].sessions} AI sessions (${aiReferrals[route].week})` }
      : { credit: null, detail: 'no data' },
  };
}

function score(checks, weights) {
  let got = 0;
  let possible = 0;
  const failing = [];
  for (const [key, weight] of Object.entries(weights)) {
    const c = checks[key];
    if (c.credit === null) continue; // no data: excluded, not zero
    got += weight * c.credit;
    possible += weight;
    if (c.credit < 1) failing.push({ check: key, lost: Math.round(weight * (1 - c.credit)), fix: FIX[key], detail: c.detail });
  }
  return {
    score: possible ? Math.round((got / possible) * 100) : 0,
    partial: possible < Object.values(weights).reduce((a, b) => a + b, 0),
    failing,
  };
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const pages = Object.fromEntries(routes.map((r) => [r, parsePage(r)]));

const inboundSources = Object.fromEntries(routes.map((r) => [r, new Set()]));
for (const [from, p] of Object.entries(pages)) {
  for (const to of p.mainLinks) if (to !== from && inboundSources[to]) inboundSources[to].add(from);
}

// Conversion pages are scored but kept out of the content backlog: they are
// forms, not answers.
const UTILITY = new Set(['/contact', '/book-consultation', '/free-treatment-plan']);
const SECTIONS = ['/blog', '/guides', '/prices', '/treatments', '/travel-to-turkey'];
const sectionOf = (route) => {
  if (clusterOf[route]) return clusterOf[route];
  if (UTILITY.has(route)) return 'conversion pages';
  const top = `/${route.split('/')[1]}`;
  return SECTIONS.includes(top) ? `${top} (other)` : 'standalone pages';
};

const results = routes.map((route) => {
  const p = pages[route];
  const structure = score(structureChecks(route, p), WEIGHTS.structure);
  const geo = score(geoChecks(route, p), WEIGHTS.geo);
  const visibility = score(visibilityChecks(route, inboundSources[route].size), WEIGHTS.visibility);
  const o = WEIGHTS.overall;
  const overall = Math.round(structure.score * o.structure + geo.score * o.geo + visibility.score * o.visibility);
  return { route, group: sectionOf(route), overall, structure, geo, visibility };
});

const previous = existsSync(OUT_JSON) ? JSON.parse(readFileSync(OUT_JSON, 'utf8')) : null;
const previousOverall = Object.fromEntries((previous?.pages ?? []).map((p) => [p.route, p.overall]));

const avg = (xs) => (xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : 0);
const site = {
  pages: results.length,
  overall: avg(results.map((r) => r.overall)),
  structure: avg(results.map((r) => r.structure.score)),
  geo: avg(results.map((r) => r.geo.score)),
  visibility: avg(results.map((r) => r.visibility.score)),
  withGscData: results.filter((r) => gsc[r.route]).length,
  withAiReferralData: results.filter((r) => aiReferrals[r.route]).length,
};

const groups = {};
for (const r of results) (groups[r.group] ??= []).push(r);
const groupRows = Object.entries(groups)
  .map(([g, rs]) => ({
    group: g,
    pages: rs.length,
    overall: avg(rs.map((r) => r.overall)),
    structure: avg(rs.map((r) => r.structure.score)),
    geo: avg(rs.map((r) => r.geo.score)),
    visibility: avg(rs.map((r) => r.visibility.score)),
  }))
  .sort((a, b) => b.overall - a.overall);

const failCounts = {};
for (const r of results) {
  for (const f of [...r.structure.failing, ...r.geo.failing, ...r.visibility.failing]) {
    failCounts[f.check] = (failCounts[f.check] ?? 0) + 1;
  }
}

const generatedAt = new Date().toISOString();
writeFileSync(
  OUT_JSON,
  JSON.stringify({ generatedAt, weights: WEIGHTS, site, groups: groupRows, pages: results }, null, 2) + '\n',
);

// ---------------------------------------------------------------------------
// Markdown report
// ---------------------------------------------------------------------------

const sorted = [...results].sort((a, b) => b.overall - a.overall || a.route.localeCompare(b.route));
const delta = (r) => {
  const before = previousOverall[r.route];
  if (before === undefined) return '';
  const d = r.overall - before;
  return d === 0 ? '±0' : d > 0 ? `+${d}` : `${d}`;
};
const band = (s) => (s >= 80 ? 'strong' : s >= 60 ? 'fair' : 'weak');
const gscDates = [...new Set(Object.values(gsc).map((g) => g.week).filter(Boolean))].sort();

const md = [];
md.push('# SEO / GEO Scorecard', '');
md.push(`Generated ${generatedAt.slice(0, 10)} by \`scripts/audit-geo.mjs\` from the production build. ${site.pages} sitemap routes.`, '');
md.push('## Site summary', '');
md.push('| Score | Site average |', '|---|---|');
md.push(`| **Overall** | **${site.overall}** |`);
md.push(`| Structure quality | ${site.structure} |`);
md.push(`| GEO readiness | ${site.geo} |`);
md.push(`| Visibility (repo data) | ${site.visibility} |`);
md.push('');
const bands = { strong: 0, fair: 0, weak: 0 };
for (const r of results) bands[band(r.overall)]++;
md.push(`Distribution: ${bands.strong} strong (80+), ${bands.fair} fair (60–79), ${bands.weak} weak (<60). Search Console figures recorded for ${site.withGscData} of ${site.pages} pages; AI-referral figures for ${site.withAiReferralData}.`, '');

md.push('## By cluster / section', '');
md.push('| Group | Pages | Overall | Structure | GEO | Visibility |', '|---|---|---|---|---|---|');
for (const g of groupRows) md.push(`| ${g.group} | ${g.pages} | **${g.overall}** | ${g.structure} | ${g.geo} | ${g.visibility} |`);
md.push('');

md.push('## Most common gaps', '');
md.push('| Check | Pages failing | Fix |', '|---|---|---|');
for (const [check, n] of Object.entries(failCounts).sort((a, b) => b[1] - a[1]).slice(0, 12)) {
  md.push(`| ${check} | ${n} | ${FIX[check]} |`);
}
md.push('');

md.push('## Rollout backlog: 15 lowest-scoring pages', '');
for (const r of sorted.filter((r) => !UTILITY.has(r.route)).slice(-15).reverse()) {
  const top = [...r.structure.failing, ...r.geo.failing, ...r.visibility.failing]
    .filter((f) => !['gscImpressions', 'gscPosition', 'aiReferrals'].includes(f.check))
    .sort((a, b) => b.lost - a.lost)
    .slice(0, 3);
  md.push(`- **${r.route}** — ${r.overall} (S ${r.structure.score} · G ${r.geo.score} · V ${r.visibility.score})`);
  for (const f of top) md.push(`  - ${f.fix}${f.detail ? ` _(${f.detail})_` : ''}`);
}
md.push('');

md.push('## All pages', '');
md.push(`| Page | Group | Overall | Structure | GEO | Visibility | GSC | AI referrals | ${previous ? 'Δ |' : ''}`);
md.push(`|---|---|---|---|---|---|---|---|${previous ? '---|' : ''}`);
for (const r of sorted) {
  const g = gsc[r.route];
  const gscCell = g ? `${g.impressions} impr · pos ${g.position}` : 'no data';
  const aiCell = aiReferrals[r.route] ? `${aiReferrals[r.route].sessions}` : '—';
  md.push(`| \`${r.route}\` | ${r.group} | **${r.overall}** | ${r.structure.score} | ${r.geo.score} | ${r.visibility.score}${r.visibility.partial ? '*' : ''} | ${gscCell} | ${aiCell} | ${previous ? `${delta(r)} |` : ''}`);
}
md.push('', '\\* Visibility scored without some external data (no Search Console or AI-referral row for this URL in `seo/serp-history.md`).', '');

md.push('## Method and limits', '');
md.push(`- **Overall** = Structure × ${WEIGHTS.overall.structure} + GEO × ${WEIGHTS.overall.geo} + Visibility × ${WEIGHTS.overall.visibility}. Check weights are in \`WEIGHTS\` at the top of the script.`);
md.push('- **Structure**: one H1, heading order, title and meta description length, canonical, JSON-LD validity, page-type and breadcrumb schema, FAQ schema matching visible questions, lists/tables, schema dates, word count.');
md.push('- **GEO**: direct answer near the top, key-facts box, evidence block, visible freshness matching `dateModified`, methodology link, decision support, follow-up question graph, prices consistent with the price index, no unconditional absolute claims.');
md.push('- **Visibility** uses repo data only: pages linking in from their main content, `public/llms.txt` listing, sitemap lastmod within 90 days, the latest Search Console impressions/position, and GA4 AI-assistant referral sessions (e.g. chatgpt.com) recorded in `seo/serp-history.md`' + (gscDates.length ? ` (runs ${gscDates[0]} to ${gscDates[gscDates.length - 1]})` : '') + '. These are point-in-time figures from a young property with low volumes; treat them as directional.');
md.push('- **Not measured**: live Search Console data, rankings for queries not recorded in `serp-history.md`, backlinks, and AI citations that send no click (only referral sessions are recorded). Missing data is excluded from the score, never estimated.');
md.push('- Price consistency flags a price quoted straight after Straumann, E-max, composite or zirconia that matches no Turkey price in the index; it does not catch every possible wording.');
md.push('');

writeFileSync(OUT_MD, md.join('\n'));

console.log(`audit-geo: ${site.pages} pages · overall ${site.overall} · structure ${site.structure} · GEO ${site.geo} · visibility ${site.visibility}`);
console.log(`audit-geo: ${bands.strong} strong / ${bands.fair} fair / ${bands.weak} weak. Wrote seo/geo-audit.json and seo/geo-audit.md.`);
