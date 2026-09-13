import { MetadataRoute } from 'next';

import manifest from '../../seo/route-lastmod.json';

const BASE = 'https://www.teethdoneinturkey.co.uk';

// The URL list is no longer hand-maintained. seo/route-lastmod.json is
// regenerated from src/app on every build (`prebuild` → scripts/update-route-lastmod.mjs),
// so a new page — a finance/affordability guide, a treatment page, a blog post —
// is in the sitemap the moment it exists, and redirect stubs and noindex pages
// stay out of it automatically.
//
// `lastmod` comes from the same manifest and tracks each page's own content
// fingerprint: a URL keeps its date until that page is actually edited. No
// site-wide bump on deploy, which is what makes the signal worth anything.

type Rule = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Section defaults, first match wins. Anything new inherits from its section,
// which is what keeps the generator dynamic — a page only needs an entry below
// if it should rank differently from its siblings.
const SECTION_RULES: { match: (route: string) => boolean; rule: Rule }[] = [
  { match: (r) => r === '/', rule: { priority: 1.0, changeFrequency: 'daily' } },
  { match: (r) => r.startsWith('/treatments/'), rule: { priority: 0.9, changeFrequency: 'weekly' } },
  { match: (r) => r.startsWith('/prices/'), rule: { priority: 0.9, changeFrequency: 'weekly' } },
  // Guides are the evergreen intent cluster (finance, affordability, comparisons).
  { match: (r) => r.startsWith('/guides/'), rule: { priority: 0.9, changeFrequency: 'monthly' } },
  { match: (r) => r.startsWith('/travel-to-turkey'), rule: { priority: 0.7, changeFrequency: 'monthly' } },
  { match: (r) => r.startsWith('/blog/'), rule: { priority: 0.7, changeFrequency: 'monthly' } },
];

const DEFAULT_RULE: Rule = { priority: 0.7, changeFrequency: 'monthly' };

// Per-URL tuning that deviates from the section default.
const OVERRIDES: Record<string, Rule> = {
  // Hubs and conversion surfaces
  '/about-us': { priority: 0.6, changeFrequency: 'monthly' },
  '/contact': { priority: 0.6, changeFrequency: 'monthly' },
  '/book-consultation': { priority: 0.9, changeFrequency: 'weekly' },
  '/reviews': { priority: 0.8, changeFrequency: 'weekly' },
  '/before-after': { priority: 0.7, changeFrequency: 'weekly' },
  '/turkey-teeth-before-after': { priority: 0.8, changeFrequency: 'weekly' },
  '/guides': { priority: 0.9, changeFrequency: 'weekly' },
  '/treatments': { priority: 0.9, changeFrequency: 'weekly' },
  '/blog': { priority: 0.7, changeFrequency: 'daily' },

  // Head-term money pages
  '/guides/teeth-in-turkey': { priority: 0.95, changeFrequency: 'monthly' },
  '/guides/turkey-teeth-veneers-or-crowns': { priority: 0.95, changeFrequency: 'monthly' },
  '/prices/turkey-teeth-cost': { priority: 0.95, changeFrequency: 'monthly' },
  '/turkey-teeth-clinic': { priority: 0.9, changeFrequency: 'weekly' },

  // Batch 2 destination and veneer cluster — elevated priority for head-term quality
  '/guides/turkey-teeth-antalya': { priority: 0.95, changeFrequency: 'monthly' },
  '/guides/best-veneers-turkey': { priority: 0.92, changeFrequency: 'monthly' },
  '/guides/turkish-veneers-safety': { priority: 0.9, changeFrequency: 'monthly' },
  '/guides/veneers-turkey-packages': { priority: 0.9, changeFrequency: 'monthly' },
  '/prices/veneers-antalya-cost': { priority: 0.92, changeFrequency: 'monthly' },

  // Finance / affordability cluster — commercial intent, refreshed often
  '/monthly-payment': { priority: 0.85, changeFrequency: 'weekly' },
  '/finance-options-uk': { priority: 0.85, changeFrequency: 'weekly' },
  '/free-treatment-plan': { priority: 0.85, changeFrequency: 'weekly' },
  '/price-calculator': { priority: 0.85, changeFrequency: 'weekly' },

  // Standalone guides
  '/teeth-done-in-turkey-guide': { priority: 0.8, changeFrequency: 'monthly' },
  '/teeth-done-in-turkey-problems': { priority: 0.75, changeFrequency: 'monthly' },
  '/why-choose-turkey-for-dental-work': { priority: 0.7, changeFrequency: 'monthly' },

  // Blog posts that outperform their cluster default
  '/blog/turkey-teeth-reviews': { priority: 0.8, changeFrequency: 'weekly' },
  '/blog/turkey-teeth-explained': { priority: 0.8, changeFrequency: 'monthly' },
  '/blog/full-mouth-implants-uk-vs-turkey': { priority: 0.9, changeFrequency: 'weekly' },
  '/blog/veneers-turkey-cost-uk-vs-turkey': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/is-it-safe-to-get-teeth-done-in-turkey': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/best-dental-clinics-turkey': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/risks-of-turkey-teeth': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/will-uk-dentists-fix-turkey-teeth': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/implants-cost-uk-vs-turkey': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/hollywood-smile-uk-vs-turkey': { priority: 0.75, changeFrequency: 'monthly' },
  '/blog/dental-implant-recovery-time': { priority: 0.65, changeFrequency: 'monthly' },
  '/blog/signs-of-dental-implant-failure': { priority: 0.65, changeFrequency: 'monthly' },
  '/blog/dental-tourism-finance-explained': { priority: 0.65, changeFrequency: 'monthly' },
  '/blog/dental-holiday-packages-turkey': { priority: 0.65, changeFrequency: 'monthly' },
  '/blog/4-8-10-rule-for-veneers': { priority: 0.6, changeFrequency: 'monthly' },
};

function ruleFor(route: string): Rule {
  return OVERRIDES[route] ?? SECTION_RULES.find(({ match }) => match(route))?.rule ?? DEFAULT_RULE;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(manifest.routes).map(([route, { lastmod }]) => {
    const { priority, changeFrequency } = ruleFor(route);
    return {
      // The home route is stored as "/" but canonicalised without a trailing slash.
      url: route === '/' ? BASE : `${BASE}${route}`,
      lastModified: new Date(lastmod),
      changeFrequency,
      priority,
    };
  });
}
