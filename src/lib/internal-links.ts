/**
 * Centralized internal link graph for hub → spoke → support → commercial architecture.
 * All pages should derive their RelatedLinksGrid data from this registry rather than
 * hardcoding links individually.
 *
 * Cluster layout:
 *   Master Hub  → Cluster Hubs (spokes)
 *   Cluster Hub → Treatment / Price Pages (spokes)
 *   Support     → Blog posts & guides pointing up to cluster hubs
 *   Commercial  → Conversion pages (/book-consultation, /free-treatment-plan, etc.)
 */

export type PageTier = 'master-hub' | 'cluster-hub' | 'spoke' | 'support' | 'commercial';
export type ClusterId =
  | 'master'
  | 'cost'
  | 'finance'
  | 'implants'
  | 'veneers'
  | 'safety'
  | 'travel';

export interface ClusterDefinition {
  id: ClusterId;
  name: string;
  /** The primary hub URL for this cluster */
  hub: string;
  /** Direct spoke URLs (treatment pages, price pages) */
  spokes: string[];
  /** Supporting content URLs (blog posts, secondary guides) */
  support: string[];
  /** Final conversion step URLs */
  commercial: string[];
}

export interface LinkEntry {
  from: string;
  to: string;
  anchorText: string;
  /** Where this link should appear in the page */
  placement: 'contextual' | 'related-links';
  /** required = P0, must exist; recommended = P1, should exist */
  priority: 'required' | 'recommended';
}

export interface RelatedLink {
  title: string;
  desc: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Cluster definitions
// ---------------------------------------------------------------------------

export const CLUSTERS: ClusterDefinition[] = [
  {
    id: 'master',
    name: 'Complete UK Patient Guide',
    hub: '/guides/teeth-in-turkey',
    spokes: [
      '/prices/turkey-teeth-cost',
      '/finance-options-uk',
      '/guides/dental-implants-turkey',
      '/guides/best-veneers-turkey',
      '/guides/turkish-veneers-safety',
      '/guides/turkey-teeth-antalya',
    ],
    support: [
      '/blog/turkey-teeth-explained',
      '/blog/why-are-dental-treatments-cheaper-in-turkey',
      '/blog/uk-dentist-vs-turkey-dentist',
      '/teeth-done-in-turkey-guide',
    ],
    commercial: ['/book-consultation', '/free-treatment-plan', '/price-calculator'],
  },
  {
    id: 'cost',
    name: 'Turkey Teeth Cost & Prices',
    hub: '/prices/turkey-teeth-cost',
    spokes: [
      '/guides/turkey-teeth-packages',
      '/prices/veneers-turkey-cost',
      '/prices/dental-implants-turkey-cost',
      '/prices/hollywood-smile-turkey-package',
      '/prices/all-on-6-dental-implants-turkey-package',
      '/prices/veneers-antalya-cost',
    ],
    support: [
      '/blog/implants-cost-uk-vs-turkey',
      '/blog/veneers-turkey-cost-uk-vs-turkey',
      '/blog/full-mouth-implants-uk-vs-turkey',
      '/blog/full-set-veneers-turkey-cost',
      '/blog/hollywood-smile-turkey-cost',
      '/blog/hollywood-smile-uk-vs-turkey',
      '/blog/single-tooth-implant-turkey-cost',
    ],
    commercial: ['/price-calculator', '/free-treatment-plan', '/book-consultation'],
  },
  {
    id: 'finance',
    name: 'Turkey Teeth Finance & Payment Plans',
    hub: '/finance-options-uk',
    spokes: ['/monthly-payment'],
    support: [
      '/blog/dental-treatment-turkey-payment-plans',
      '/blog/dental-tourism-finance-explained',
      '/blog/finance-dental-implants-turkey-uk-patients',
      '/blog/can-you-pay-monthly-for-teeth-in-turkey',
      '/blog/can-you-pay-monthly-for-veneers-turkey',
    ],
    commercial: ['/free-treatment-plan', '/book-consultation'],
  },
  {
    id: 'implants',
    name: 'Dental Implants Turkey',
    hub: '/guides/dental-implants-turkey',
    spokes: [
      '/treatments/dental-implants-turkey',
      '/treatments/all-on-4-turkey',
      '/treatments/all-on-6-turkey',
      '/prices/dental-implants-turkey-cost',
      '/prices/all-on-6-dental-implants-turkey-package',
      '/guides/full-mouth-dental-implants-turkey-cost',
    ],
    support: [
      '/blog/implants-cost-uk-vs-turkey',
      '/blog/single-tooth-implant-turkey-cost',
      '/blog/same-day-dental-implants-turkey',
      '/blog/dental-implant-recovery-time',
      '/blog/signs-of-dental-implant-failure',
      '/blog/full-mouth-implants-uk-vs-turkey',
    ],
    commercial: ['/book-consultation', '/free-treatment-plan'],
  },
  {
    id: 'veneers',
    name: 'Veneers Turkey',
    hub: '/guides/best-veneers-turkey',
    spokes: [
      '/treatments/veneers-turkey',
      '/guides/turkey-teeth-veneers-or-crowns',
      '/prices/veneers-turkey-cost',
      '/prices/veneers-antalya-cost',
    ],
    support: [
      '/blog/veneers-turkey-cost-uk-vs-turkey',
      '/blog/full-set-veneers-turkey-cost',
      '/blog/are-veneers-in-turkey-worth-it',
      '/blog/do-turkey-teeth-look-fake',
      '/blog/e-max-vs-zirconia-veneers-turkey',
      '/blog/composite-vs-porcelain-veneers-turkey',
      '/blog/how-long-do-dental-veneers-last',
      '/blog/4-8-10-rule-for-veneers',
      '/blog/risks-of-veneers-in-turkey',
      '/blog/can-you-pay-monthly-for-veneers-turkey',
    ],
    commercial: ['/book-consultation', '/free-treatment-plan'],
  },
  {
    id: 'safety',
    name: 'Turkey Teeth Safety & Trust',
    hub: '/guides/turkish-veneers-safety',
    spokes: [
      '/turkey-teeth-clinic',
      '/blog/is-it-safe-to-get-teeth-done-in-turkey',
    ],
    support: [
      '/blog/risks-of-turkey-teeth',
      '/blog/risks-of-veneers-in-turkey',
      '/blog/will-uk-dentists-fix-turkey-teeth',
      '/reviews',
      '/blog/best-dental-clinics-turkey',
      '/teeth-done-in-turkey-problems',
    ],
    commercial: ['/book-consultation'],
  },
  {
    id: 'travel',
    name: 'Dental Holiday Turkey',
    hub: '/guides/turkey-teeth-antalya',
    spokes: [
      '/travel-to-turkey/dental-holiday-turkey',
      '/travel-to-turkey',
      '/travel-to-turkey/how-long-stay-turkey-dental',
    ],
    support: [
      '/blog/dental-holiday-packages-turkey',
      '/blog/antalya-vs-istanbul-dental-clinics',
      '/travel-to-turkey/dental-holiday-turkey',
      '/guides/veneers-turkey-packages',
    ],
    commercial: ['/book-consultation', '/free-treatment-plan'],
  },
];

// ---------------------------------------------------------------------------
// Explicit link registry — P0 required links with anchor text
// ---------------------------------------------------------------------------

export const LINK_REGISTRY: LinkEntry[] = [
  // ── Master hub ← cluster hubs (upward flow) ──
  {
    from: '/prices/turkey-teeth-cost',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete guide to teeth in Turkey',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/finance-options-uk',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete UK patient guide to teeth in Turkey',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/monthly-payment',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete Turkey teeth guide',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/dental-implants-turkey',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete guide to teeth in Turkey',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/best-veneers-turkey',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete UK patient guide',
    placement: 'contextual',
    priority: 'required',
  },

  // ── Master hub → cluster hubs (downward flow) ──
  {
    from: '/guides/teeth-in-turkey',
    to: '/prices/turkey-teeth-cost',
    anchorText: 'Turkey teeth cost guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/finance-options-uk',
    anchorText: 'pay monthly for Turkey teeth',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/monthly-payment',
    anchorText: 'monthly payment options',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/treatments/veneers-turkey',
    anchorText: 'dental veneers in Turkey',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/treatments/all-on-4-turkey',
    anchorText: 'All-on-4 dental implants Turkey',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/treatments/all-on-6-turkey',
    anchorText: 'All-on-6 dental implants Turkey',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/guides/best-veneers-turkey',
    anchorText: 'best veneers in Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/guides/teeth-in-turkey',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },

  // ── Finance cluster blog posts → finance hub ──
  {
    from: '/blog/dental-treatment-turkey-payment-plans',
    to: '/finance-options-uk',
    anchorText: 'Turkey teeth finance options',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/dental-tourism-finance-explained',
    to: '/finance-options-uk',
    anchorText: 'Turkey teeth finance options',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/can-you-pay-monthly-for-teeth-in-turkey',
    to: '/finance-options-uk',
    anchorText: 'Turkey teeth finance options',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/finance-dental-implants-turkey-uk-patients',
    to: '/finance-options-uk',
    anchorText: 'Turkey teeth finance options',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/can-you-pay-monthly-for-veneers-turkey',
    to: '/finance-options-uk',
    anchorText: 'Turkey teeth finance options',
    placement: 'related-links',
    priority: 'required',
  },

  // ── Cost pages → master hub ──
  {
    from: '/prices/dental-implants-turkey-cost',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete guide to teeth in Turkey',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/prices/veneers-turkey-cost',
    to: '/guides/teeth-in-turkey',
    anchorText: 'complete guide to teeth in Turkey',
    placement: 'contextual',
    priority: 'required',
  },

  // ── Cost pages → cluster hubs ──
  {
    from: '/prices/dental-implants-turkey-cost',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/prices/veneers-turkey-cost',
    to: '/guides/best-veneers-turkey',
    anchorText: 'best veneers in Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },

  // ── Implants blog posts → implants cluster hub ──
  {
    from: '/blog/implants-cost-uk-vs-turkey',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/full-mouth-implants-uk-vs-turkey',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/single-tooth-implant-turkey-cost',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/same-day-dental-implants-turkey',
    to: '/guides/dental-implants-turkey',
    anchorText: 'dental implants Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },

  // ── Veneers blog posts → veneers cluster hub ──
  {
    from: '/blog/veneers-turkey-cost-uk-vs-turkey',
    to: '/guides/best-veneers-turkey',
    anchorText: 'best veneers in Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/full-set-veneers-turkey-cost',
    to: '/guides/best-veneers-turkey',
    anchorText: 'best veneers in Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },
  {
    from: '/blog/are-veneers-in-turkey-worth-it',
    to: '/guides/best-veneers-turkey',
    anchorText: 'best veneers in Turkey guide',
    placement: 'related-links',
    priority: 'required',
  },

  // -- Packages owner: /guides/turkey-teeth-packages --
  // One intent = one canonical URL. The packages query family is split across
  // several URLs with no owning page; this registers the guide as the owner and
  // flows cost-hub authority into it, then out to the package price pages and
  // the finance cluster.
  {
    from: '/prices/turkey-teeth-cost',
    to: '/guides/turkey-teeth-packages',
    anchorText: 'what Turkey teeth packages include and cost',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/turkey-teeth-packages',
    to: '/prices/turkey-teeth-cost',
    anchorText: 'Turkey teeth cost: the complete 2026 price guide',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/turkey-teeth-packages',
    to: '/monthly-payment',
    anchorText: 'what Turkey teeth cost per month',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/turkey-teeth-packages',
    to: '/finance-options-uk',
    anchorText: 'UK dental finance options',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/turkey-teeth-packages',
    to: '/prices/hollywood-smile-turkey-package',
    anchorText: 'the Hollywood Smile zirconia crown package',
    placement: 'contextual',
    priority: 'required',
  },
  {
    from: '/guides/turkey-teeth-packages',
    to: '/prices/all-on-6-dental-implants-turkey-package',
    anchorText: 'the All-on-6 full-arch implant package',
    placement: 'contextual',
    priority: 'required',
  },
];

// ---------------------------------------------------------------------------
// Human-readable labels for RelatedLinksGrid card titles and descriptions
// ---------------------------------------------------------------------------

const PAGE_META: Record<string, { title: string; desc: string }> = {
  '/guides/teeth-in-turkey': {
    title: 'Complete UK Patient Guide to Teeth in Turkey',
    desc: 'Treatments, costs, safety, travel and finance — everything in one guide.',
  },
  '/prices/turkey-teeth-cost': {
    title: 'Turkey Teeth Cost Guide 2026',
    desc: 'Full price breakdown: veneers, implants, crowns and packages.',
  },
  '/finance-options-uk': {
    title: 'Turkey Teeth Finance & Payment Plans',
    desc: 'Monthly payment options and finance plans for UK patients.',
  },
  '/monthly-payment': {
    title: 'Monthly Payment Calculator',
    desc: 'See exactly what your treatment costs per month at 12, 24 or 36 months.',
  },
  '/treatments/veneers-turkey': {
    title: 'Dental Veneers Turkey',
    desc: 'E-max and zirconia veneers. Full guide with current pricing.',
  },
  '/treatments/dental-implants-turkey': {
    title: 'Dental Implants Turkey',
    desc: 'Premium implant brands. Full guide with current pricing.',
  },
  '/treatments/all-on-4-turkey': {
    title: 'All-on-4 Dental Implants Turkey',
    desc: 'Full arch replacement on 4 implants. Completed in one trip.',
  },
  '/treatments/all-on-6-turkey': {
    title: 'All-on-6 Dental Implants Turkey',
    desc: 'Maximum stability full arch restoration on 6 implants.',
  },
  '/treatments/full-smile-makeover-turkey': {
    title: 'Full Smile Makeover Turkey',
    desc: 'Combined veneers, crowns and whitening — full guide.',
  },
  '/guides/dental-implants-turkey': {
    title: 'Dental Implants Turkey: Complete Guide',
    desc: 'Brands, costs, process, safety and what to expect.',
  },
  '/guides/best-veneers-turkey': {
    title: 'Best Veneers in Turkey: UK Patient Guide',
    desc: 'How to choose the right veneers, clinic and material.',
  },
  '/guides/turkey-teeth-veneers-or-crowns': {
    title: 'Veneers or Crowns in Turkey?',
    desc: 'Which treatment is right for you — explained clearly.',
  },
  '/guides/turkish-veneers-safety': {
    title: 'Are Turkish Veneers Safe?',
    desc: 'The honest safety guide: what to check before you book.',
  },
  '/guides/turkey-teeth-antalya': {
    title: 'Turkey Teeth in Antalya',
    desc: 'Best Antalya dental clinics, costs and what to expect.',
  },
  '/guides/cant-afford-dental-treatment-uk': {
    title: "Can't Afford Dental Treatment in the UK?",
    desc: 'Your options — including Turkey at a fraction of UK prices.',
  },
  '/prices/veneers-turkey-cost': {
    title: 'Veneers Turkey Cost 2026',
    desc: 'E-max vs zirconia prices, per-tooth and full-set comparisons.',
  },
  '/prices/dental-implants-turkey-cost': {
    title: 'Dental Implants Turkey Cost 2026',
    desc: 'Single implant, All-on-4 and All-on-6 price breakdowns.',
  },
  '/guides/turkey-teeth-packages': {
    title: 'Turkey Teeth Packages: What Is Included & 2026 Prices',
    desc: 'All-inclusive package prices from £2,800, what is and is not covered, and monthly payment examples.',
  },
  '/prices/hollywood-smile-turkey-package': {
    title: 'Hollywood Smile Turkey Package',
    desc: '20 zirconia crowns, hotel and transfers in one package.',
  },
  '/prices/all-on-6-dental-implants-turkey-package': {
    title: 'All-on-6 Turkey Package',
    desc: 'Full arch restoration with implants, hotel and transfers.',
  },
  '/prices/veneers-antalya-cost': {
    title: 'Veneers Antalya Cost',
    desc: 'Antalya clinic prices vs Istanbul — what to know.',
  },
  '/turkey-teeth-clinic': {
    title: 'How to Choose a Turkey Teeth Clinic',
    desc: 'Accreditation, reviews, materials — the full checklist.',
  },
  '/price-calculator': {
    title: 'Turkey Teeth Price Calculator',
    desc: 'Estimate your total cost in 60 seconds.',
  },
  '/free-treatment-plan': {
    title: 'Get a Free Treatment Plan',
    desc: 'Personalised plan and cost estimate within 24 hours.',
  },
  '/book-consultation': {
    title: 'Book Free Consultation',
    desc: 'No obligation. Speak with a patient coordinator today.',
  },
  '/travel-to-turkey/dental-holiday-turkey': {
    title: 'Dental Holiday Turkey Guide',
    desc: 'Flights, hotels, transfers and what to pack.',
  },
  '/travel-to-turkey': {
    title: 'Travel to Turkey for Dental Treatment',
    desc: 'Everything you need to plan your dental trip.',
  },
};

// ---------------------------------------------------------------------------
// Helper: get RelatedLink cards for a given page URL
// ---------------------------------------------------------------------------

/** Returns the outgoing related links for `url` as RelatedLink objects ready for RelatedLinksGrid. */
export function getRelatedLinksFor(url: string): RelatedLink[] {
  const targets = LINK_REGISTRY.filter(
    (e) => e.from === url && e.placement === 'related-links'
  ).map((e) => e.to);

  return targets.map((href) => {
    const meta = PAGE_META[href];
    return meta
      ? { href, title: meta.title, desc: meta.desc }
      : { href, title: href, desc: '' };
  });
}

/** Returns all LINK_REGISTRY entries that should point TO `url`. */
export function getIncomingLinksFor(url: string): LinkEntry[] {
  return LINK_REGISTRY.filter((e) => e.to === url);
}

/** Returns the cluster this URL belongs to (as hub, spoke, or support). */
export function getClusterOf(url: string): ClusterDefinition | undefined {
  return CLUSTERS.find(
    (c) =>
      c.hub === url ||
      c.spokes.includes(url) ||
      c.support.includes(url) ||
      c.commercial.includes(url)
  );
}

/** P0 money pages — used by the audit script. */
export const MONEY_PAGES = [
  '/guides/teeth-in-turkey',
  '/prices/turkey-teeth-cost',
  '/finance-options-uk',
  '/monthly-payment',
  '/prices/dental-implants-turkey-cost',
  '/prices/veneers-turkey-cost',
  '/treatments/dental-implants-turkey',
  '/treatments/veneers-turkey',
  '/treatments/all-on-4-turkey',
  '/treatments/all-on-6-turkey',
  '/book-consultation',
  '/free-treatment-plan',
  '/price-calculator',
  '/guides/dental-implants-turkey',
  '/guides/best-veneers-turkey',
] as const;
