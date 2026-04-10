import { MetadataRoute } from 'next';

const BASE = 'https://www.teethdoneinturkey.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/teeth-done-in-turkey-guide',
    '/why-choose-turkey-for-dental-work',
    '/teeth-done-in-turkey-problems',
    '/turkey-teeth-before-after',
    '/treatments',
    '/treatments/veneers-turkey',
    '/treatments/dental-implants-turkey',
    '/treatments/all-on-4-turkey',
    '/treatments/all-on-6-turkey',
    '/treatments/full-smile-makeover-turkey',
    '/prices/teeth-done-in-turkey-cost',
    '/prices/veneers-turkey-cost',
    '/prices/dental-implants-turkey-cost',
    '/prices/turkey-teeth-cost',
    '/monthly-payment',
    '/reviews',
    '/before-after',
    '/travel-to-turkey',
    '/travel-to-turkey/dental-holiday-turkey',
    '/travel-to-turkey/how-long-stay-turkey-dental',
    '/blog',
    // Core cluster
    '/blog/veneers-turkey-cost-uk-vs-turkey',
    '/blog/is-it-safe-to-get-teeth-done-in-turkey',
    '/blog/how-long-do-dental-veneers-last',
    '/blog/best-dental-clinics-turkey',
    '/blog/turkey-teeth-reviews',
    '/blog/dental-holiday-turkey-guide',
    '/blog/why-are-dental-treatments-cheaper-in-turkey',
    '/blog/uk-dentist-vs-turkey-dentist',
    '/blog/turkey-teeth-explained',
    // Veneers cluster
    '/blog/e-max-vs-zirconia-veneers-turkey',
    '/blog/full-set-veneers-turkey-cost',
    '/blog/are-veneers-in-turkey-worth-it',
    '/blog/risks-of-veneers-in-turkey',
    '/blog/can-you-pay-monthly-for-veneers-turkey',
    '/blog/4-8-10-rule-for-veneers',
    '/blog/composite-vs-porcelain-veneers-turkey',
    // Implants cluster
    '/blog/full-mouth-dental-implants-turkey-cost',
    '/blog/same-day-dental-implants-turkey',
    '/blog/dental-implant-recovery-time',
    '/blog/signs-of-dental-implant-failure',
    '/blog/single-tooth-implant-turkey-cost',
    // Finance cluster
    '/blog/can-you-pay-monthly-for-teeth-in-turkey',
    '/blog/dental-treatment-turkey-payment-plans',
    '/blog/finance-dental-implants-turkey-uk-patients',
    '/blog/dental-tourism-finance-explained',
    // Safety cluster
    '/blog/risks-of-turkey-teeth',
    '/blog/aftercare-for-dental-work-in-turkey',
    '/blog/will-uk-dentists-fix-turkey-teeth',
    // Travel & cost cluster
    '/blog/hollywood-smile-turkey-cost',
    '/blog/antalya-vs-istanbul-dental-clinics',
    '/blog/dental-holiday-packages-turkey',
    // UK vs Turkey comparison cluster
    '/blog/implants-cost-uk-vs-turkey',
    '/blog/hollywood-smile-uk-vs-turkey',
    '/blog/full-mouth-implants-uk-vs-turkey',
    '/contact',
    '/book-consultation',
  ];

  return routes.map(route => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/treatments') || route.startsWith('/prices') ? 0.9 : 0.7,
  }));
}
