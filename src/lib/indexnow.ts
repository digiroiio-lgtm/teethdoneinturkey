const HOST = "www.teethdoneinturkey.co.uk";
const SITE_URL = `https://${HOST}`;
const KEY = process.env.INDEXNOW_KEY ?? "7e8fa3d2b9e5c741f0a1b2c3d4e5f678";

/**
 * Notify IndexNow (Bing/Yandex/others) about new, updated, or removed pages.
 * Call from server-side code only (Route Handlers, Server Actions, scripts).
 * Paths must start with "/" e.g. ["/blog/new-post", "/prices/turkey-teeth-cost"].
 */
export async function submitIndexNow(paths: string[]): Promise<void> {
  if (!paths.length) return;
  const urlList = paths.map((p) => `${SITE_URL}${p}`);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList,
    }),
  });
  if (!res.ok && res.status !== 202) {
    throw new Error(`IndexNow: ${res.status} ${res.statusText}`);
  }
}
