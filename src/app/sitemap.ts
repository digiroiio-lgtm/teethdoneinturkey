import { MetadataRoute } from 'next';

const BASE = 'https://teethdoneinturkey.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/treatments',
    '/treatments/veneers-turkey',
    '/treatments/dental-implants-turkey',
    '/treatments/all-on-4-turkey',
    '/treatments/all-on-6-turkey',
    '/treatments/full-smile-makeover-turkey',
    '/prices/teeth-done-in-turkey-cost',
    '/prices/veneers-turkey-cost',
    '/prices/dental-implants-turkey-cost',
    '/monthly-payment',
    '/reviews',
    '/before-after',
    '/travel-to-turkey',
    '/travel-to-turkey/dental-holiday-turkey',
    '/travel-to-turkey/how-long-stay-turkey-dental',
    '/blog',
    '/blog/veneers-turkey-cost-uk-vs-turkey',
    '/blog/is-it-safe-to-get-teeth-done-in-turkey',
    '/blog/how-long-do-dental-veneers-last',
    '/blog/best-dental-clinics-turkey',
    '/blog/turkey-teeth-reviews',
    '/blog/dental-holiday-turkey-guide',
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
