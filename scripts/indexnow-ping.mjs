#!/usr/bin/env node
// Pings the IndexNow API (Bing/Yandex) for a list of URL paths.
//
// Usage:
//   node scripts/indexnow-ping.mjs --deployed /path1 /path2 ...
// Run only after confirming a successful production deployment. No implicit
// whole-site submission: pass newly created or meaningfully updated paths.
//
// Or import ping() and call it from another script:
//   import { ping } from './indexnow-ping.mjs';
//   await ping(['/blog/new-post', '/']);

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = path.join(ROOT, 'seo', 'route-lastmod.json');
const HOST = 'www.teethdoneinturkey.co.uk';
const BASE = `https://${HOST}`;
const KEY = process.env.INDEXNOW_KEY ?? '7e8fa3d2b9e5c741f0a1b2c3d4e5f678';
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

export async function ping(paths) {
  if (!paths.length) return;
  const routes = JSON.parse(fs.readFileSync(MANIFEST, 'utf8')).routes;
  const uniquePaths = [...new Set(paths)];
  for (const route of uniquePaths) {
    if (!Object.hasOwn(routes, route)) {
      throw new Error(`IndexNow: not an indexable canonical route: ${route}`);
    }
  }
  // Check the public key before submitting. A changed environment key needs its
  // matching file deployed on the same canonical host.
  const keyResponse = await fetch(KEY_LOCATION, { signal: AbortSignal.timeout(15000), redirect: 'error' });
  if (!keyResponse.ok || (await keyResponse.text()).trim() !== KEY) {
    throw new Error('IndexNow: deployed key file does not match the configured key');
  }
  const urlList = uniquePaths.map(p => `${BASE}${p}`);
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });
    if (res.ok || res.status === 202) {
      console.log(`indexnow-ping: ${res.status} — ${urlList.length} URL(s) submitted (indexing is not guaranteed)`);
      for (const url of urlList) console.log(`  ${url}`);
    } else {
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} — ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.error(`indexnow-ping: network error — ${err.message}`);
    throw err;
  }
}

// Standalone: called directly as a script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const paths = args.filter(arg => arg !== '--deployed');
  if (!args.includes('--deployed') || !paths.length) {
    console.error('After a successful production deployment: npm run seo:indexnow -- --deployed /changed-path [...]');
    process.exitCode = 1;
  } else {
    await ping(paths);
  }
}
