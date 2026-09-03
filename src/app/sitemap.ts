import { MetadataRoute } from 'next';

const BASE = 'https://www.teethdoneinturkey.co.uk';

// Stable lastModified — use a fixed release date rather than `new Date()`,
// which would flip on every build/revalidate and dilute GSC crawl signals.
// Update this when there's a meaningful content refresh across the site.
const LAST_MODIFIED = new Date('2026-09-03T00:00:00Z');

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const routes: Route[] = [
  // Top-level
  { path: '', priority: 1.0, changeFrequency: 'daily' },
  { path: '/about-us', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/book-consultation', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/reviews', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/before-after', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-before-after', priority: 0.8, changeFrequency: 'weekly' },

  // Guides — evergreen patient education cluster, separate from /blog
  { path: '/guides', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/guides/teeth-in-turkey', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/guides/dental-implants-turkey', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guides/turkey-teeth-cost', priority: 0.9, changeFrequency: 'monthly' },

  // Money pages — treatments cluster
  { path: '/treatments', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/treatments/veneers-turkey', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/treatments/dental-implants-turkey', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/treatments/all-on-4-turkey', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/treatments/all-on-6-turkey', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/treatments/full-smile-makeover-turkey', priority: 0.9, changeFrequency: 'weekly' },

  // Prices cluster
  { path: '/prices/teeth-done-in-turkey-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prices/veneers-turkey-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prices/dental-implants-turkey-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prices/turkey-teeth-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prices/all-on-6-dental-implants-turkey-package', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prices/hollywood-smile-turkey-package', priority: 0.9, changeFrequency: 'weekly' },

  // "Turkey teeth" head-term pages (highest GT interest in UK last 7d)
  { path: '/turkey-teeth-clinic', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-price', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-review', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-real-results', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/turkey-teeth-dangers', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/veneers-turkey-cost', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/dental-implants-turkey-cost', priority: 0.9, changeFrequency: 'weekly' },

  // Finance cluster
  { path: '/monthly-payment', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/finance-options-uk', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/free-treatment-plan', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/price-calculator', priority: 0.85, changeFrequency: 'weekly' },

  // Travel cluster
  { path: '/travel-to-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/travel-to-turkey/dental-holiday-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/travel-to-turkey/how-long-stay-turkey-dental', priority: 0.7, changeFrequency: 'monthly' },

  // Guides
  { path: '/teeth-done-in-turkey-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/why-choose-turkey-for-dental-work', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/teeth-done-in-turkey-problems', priority: 0.75, changeFrequency: 'monthly' },

  // Blog index + core cluster
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
  { path: '/blog/veneers-turkey-cost-uk-vs-turkey', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/is-it-safe-to-get-teeth-done-in-turkey', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/how-long-do-dental-veneers-last', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/best-dental-clinics-turkey', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/turkey-teeth-reviews', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/blog/dental-holiday-turkey-guide', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/why-are-dental-treatments-cheaper-in-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/uk-dentist-vs-turkey-dentist', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/turkey-teeth-explained', priority: 0.8, changeFrequency: 'monthly' },

  // Veneers cluster
  { path: '/blog/e-max-vs-zirconia-veneers-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/full-set-veneers-turkey-cost', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/are-veneers-in-turkey-worth-it', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/risks-of-veneers-in-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/can-you-pay-monthly-for-veneers-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/4-8-10-rule-for-veneers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/composite-vs-porcelain-veneers-turkey', priority: 0.7, changeFrequency: 'monthly' },

  // Implants cluster
  { path: '/blog/full-mouth-dental-implants-turkey-cost', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/same-day-dental-implants-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/dental-implant-recovery-time', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/blog/signs-of-dental-implant-failure', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/blog/single-tooth-implant-turkey-cost', priority: 0.7, changeFrequency: 'monthly' },

  // Finance cluster (blog)
  { path: '/blog/can-you-pay-monthly-for-teeth-in-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/dental-treatment-turkey-payment-plans', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/finance-dental-implants-turkey-uk-patients', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/dental-tourism-finance-explained', priority: 0.65, changeFrequency: 'monthly' },

  // Safety cluster
  { path: '/blog/risks-of-turkey-teeth', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/aftercare-for-dental-work-in-turkey', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/will-uk-dentists-fix-turkey-teeth', priority: 0.75, changeFrequency: 'monthly' },

  // Travel & cost cluster (blog)
  { path: '/blog/hollywood-smile-turkey-cost', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/antalya-vs-istanbul-dental-clinics', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/dental-holiday-packages-turkey', priority: 0.65, changeFrequency: 'monthly' },

  // UK vs Turkey comparison
  { path: '/blog/implants-cost-uk-vs-turkey', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/hollywood-smile-uk-vs-turkey', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog/full-mouth-implants-uk-vs-turkey', priority: 0.75, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
