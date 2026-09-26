// Single source of truth for "which URLs belong in the sitemap, and what is
// each one's content fingerprint".
//
// Used by scripts/update-route-lastmod.mjs to regenerate seo/route-lastmod.json.
// The sitemap itself reads that generated manifest, so a new page enters the
// sitemap automatically the next time the manifest is generated (which happens
// on every build via the `prebuild` npm script).

import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const PAGE_FILE = 'page.tsx';

// Folders under src/app that never produce indexable HTML routes.
const SKIPPED_SEGMENTS = new Set(['api', 'fonts', 'node_modules']);

/** A folder is a Next.js route group — `(marketing)` — and contributes no URL segment. */
const isRouteGroup = (segment) => segment.startsWith('(') && segment.endsWith(')');

/** Dynamic (`[slug]`), parallel (`@modal`) and private (`_lib`) folders are out of scope. */
const isNonStaticSegment = (segment) =>
  segment.startsWith('[') || segment.startsWith('@') || segment.startsWith('_') || segment.startsWith('.');

/**
 * A redirect stub is a `page.tsx` whose only job is to call redirect() /
 * permanentRedirect() from next/navigation. Those URLs answer 301, so listing
 * them would feed Google known-redirect URLs and waste crawl budget.
 */
export function isRedirectStub(source) {
  return (
    /from\s+["']next\/navigation["']/.test(source) &&
    /\b(permanentRedirect|redirect)\s*\(/.test(source) &&
    !/<[A-Za-z]/.test(source.replace(/^\s*\/\/.*$/gm, ''))
  );
}

/** Pages that explicitly ask not to be indexed must not be advertised in the sitemap. */
export function isNoindex(source) {
  return /robots\s*:\s*{[^}]*index\s*:\s*false/s.test(source);
}

/**
 * Files whose contents count as "this page's content" for freshness purposes:
 * the page module plus anything it pulls in from its own route folder
 * (co-located form/calculator components, content tables, …).
 *
 * Shared components under src/components are deliberately excluded — a tweak to
 * the footer or a CTA button is not a substantive modification of 70 pages, and
 * counting it would re-introduce exactly the bulk-lastmod-bump problem we are
 * trying to remove.
 *
 * Shared *content data* is the exception: when a page imports prices, travel
 * budgets or a cluster's follow-up answers from src/lib, a change there changes
 * what the page says, so those files (and the data files they import) count.
 */
// src/lib modules that hold page content rather than code or chrome.
const CONTENT_DATA = /^(prices|travel|[a-z]+-cluster)\.ts$/;

function resolveContentData(specifier, libDir) {
  const name = specifier.replace(/^@\/lib\//, '');
  const file = path.join(libDir, `${name}.ts`);
  return CONTENT_DATA.test(path.basename(file)) && fs.existsSync(file) ? file : null;
}

function collectRouteFiles(pageFile, routeDir) {
  const libDir = path.resolve(routeDir.slice(0, routeDir.indexOf(`${path.sep}app`)), 'lib');
  const seen = new Set();
  const queue = [pageFile];

  while (queue.length) {
    const file = queue.shift();
    if (seen.has(file) || !fs.existsSync(file)) continue;
    seen.add(file);

    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/from\s+["'](@\/lib\/[^"']+)["']/g)) {
      const data = resolveContentData(match[1], libDir);
      if (data) queue.push(data);
    }
    for (const match of source.matchAll(/from\s+["'](\.[^"']+)["']/g)) {
      const resolved = resolveLocalImport(path.dirname(file), match[1]);
      // Stay inside this route's own folder (or src/lib content data reached
      // from it), and never follow into a nested route.
      if (!resolved) continue;
      const inLibData = resolved.startsWith(libDir + path.sep) && CONTENT_DATA.test(path.basename(resolved));
      if (!inLibData && !resolved.startsWith(routeDir + path.sep)) continue;
      if (path.basename(resolved) === PAGE_FILE) continue;
      queue.push(resolved);
    }
  }

  return [...seen].sort();
}

function resolveLocalImport(fromDir, specifier) {
  const base = path.resolve(fromDir, specifier);
  const candidates = [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    `${base}.json`,
    path.join(base, 'index.tsx'),
    path.join(base, 'index.ts'),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) ?? null;
}

/**
 * Walk src/app and return every static, indexable route.
 *
 * @param {string} appDir absolute path to src/app
 * @returns {{ route: string, files: string[], hash: string }[]} sorted by route
 */
export function discoverRoutes(appDir) {
  const routes = [];

  const walk = (dir, urlPath) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    if (entries.some((entry) => entry.isFile() && entry.name === PAGE_FILE)) {
      const pageFile = path.join(dir, PAGE_FILE);
      const source = fs.readFileSync(pageFile, 'utf8');

      if (!isRedirectStub(source) && !isNoindex(source)) {
        const files = collectRouteFiles(pageFile, dir);
        const hash = createHash('sha256');
        for (const file of files) {
          hash.update(path.relative(appDir, file));
          hash.update('\0');
          hash.update(fs.readFileSync(file));
          hash.update('\0');
        }
        routes.push({
          route: urlPath === '' ? '/' : urlPath,
          files: files.map((file) => path.relative(appDir, file)),
          hash: hash.digest('hex').slice(0, 16),
        });
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (SKIPPED_SEGMENTS.has(entry.name) || isNonStaticSegment(entry.name)) continue;
      const nextPath = isRouteGroup(entry.name) ? urlPath : `${urlPath}/${entry.name}`;
      walk(path.join(dir, entry.name), nextPath);
    }
  };

  walk(appDir, '');

  return routes.sort((a, b) => a.route.localeCompare(b.route));
}
