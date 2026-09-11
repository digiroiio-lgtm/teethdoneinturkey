This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sitemap & freshness

The sitemap is generated, not hand-maintained.

* `src/app/sitemap.ts` emits one `<url>` per entry in `seo/route-lastmod.json`.
* `scripts/update-route-lastmod.mjs` regenerates that manifest by scanning
  `src/app`: every static `page.tsx` is included, while redirect stubs
  (`permanentRedirect(...)`) and `noindex` pages are skipped.
* `lastmod` is per page. Each route carries a fingerprint of its own source
  files; the stored date only moves when that page's content actually changes,
  so a deploy never bulk-bumps the whole site.

It runs automatically via `prebuild`, so `npm run build` (locally and on Vercel)
always ships a current sitemap. After editing page content, run:

```bash
npm run seo:lastmod   # rewrite seo/route-lastmod.json
```

and commit the result — CI runs `npm run seo:lastmod:check` and fails if the
manifest is stale (a new page missing from the sitemap, or a stale `lastmod`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
