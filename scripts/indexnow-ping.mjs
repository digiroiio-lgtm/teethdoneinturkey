#!/usr/bin/env node
// Pings the IndexNow API (Bing/Yandex) for a list of URL paths.
//
// Usage:
//   node scripts/indexnow-ping.mjs /path1 /path2 ...
//   node scripts/indexnow-ping.mjs          # pings all routes from seo/route-lastmod.json
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
const KEY = '7e8fa3d2b9e5c741f0a1b2c3d4e5f678';
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

export async function ping(paths) {
  if (!paths.length) return;
  const urlList = paths.map(p => `${BASE}${p}`);
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    if (res.ok || res.status === 202) {
      console.log(`indexnow-ping: ${res.status} — ${urlList.length} URL(s) submitted`);
      for (const url of urlList) console.log(`  ${url}`);
    } else {
      const text = await res.text().catch(() => '');
      console.error(`indexnow-ping: unexpected status ${res.status} — ${text.slice(0, 200)}`);
    }
  } catch (err) {
    console.error(`indexnow-ping: network error — ${err.message}`);
    process.exit(1);
  }
}

// Standalone: called directly as a script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const cliPaths = process.argv.slice(2);
  const paths = cliPaths.length
    ? cliPaths
    : Object.keys(JSON.parse(fs.readFileSync(MANIFEST, 'utf8')).routes);
  await ping(paths);
}
