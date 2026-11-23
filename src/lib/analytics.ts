// Shared GA4 helpers for the tracking components. No personal data is ever
// sent: only event names, placements, field NAMES (never values), page types and
// coarse numbers. `window.gtag` is typed in AiReferralTracking.tsx and is only
// defined on production hosts (see the ga4-init script in layout.tsx), so every
// call here is a no-op in previews, local builds and development.

export type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) clean[key] = value;
  }
  window.gtag?.('event', name, clean);
}

/** Coarse page group, so events can be compared by template instead of by URL. */
export function pageTypeOf(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/finance-options-uk') || pathname.startsWith('/monthly-payment')) return 'finance';
  if (
    pathname.startsWith('/book-consultation') ||
    pathname.startsWith('/free-treatment-plan') ||
    pathname.startsWith('/contact')
  ) {
    return 'conversion';
  }
  if (pathname.startsWith('/prices') || pathname.startsWith('/price-calculator')) return 'prices';
  if (pathname.startsWith('/treatments')) return 'treatment';
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.startsWith('/guides')) return 'guide';
  if (
    pathname.startsWith('/reviews') ||
    pathname.startsWith('/turkey-teeth-before-after') ||
    pathname.startsWith('/before-after')
  ) {
    return 'proof';
  }
  return 'other';
}

// Internal destinations that count as a step towards an enquiry.
export const CTA_PATHS = ['/book-consultation', '/free-treatment-plan', '/price-calculator'];

// How far this visitor has scrolled and how long the tab has been visible on the
// current page. AnalyticsEvents keeps it up to date; click events read it.
const engagement = { maxScroll: 0, seconds: 0 };

export function resetEngagement() {
  engagement.maxScroll = 0;
  engagement.seconds = 0;
}

export function noteScroll(percent: number) {
  if (percent > engagement.maxScroll) engagement.maxScroll = percent;
}

export function noteSeconds(seconds: number) {
  engagement.seconds = seconds;
}

export function engagementParams(): EventParams {
  return {
    page_type: pageTypeOf(window.location.pathname),
    scroll_percent: engagement.maxScroll,
    seconds_on_page: engagement.seconds,
  };
}

/** Readable, bounded label for where a link sits on the page. */
export function placementOf(element: Element): string {
  const explicit = element.closest('[data-ga-placement]')?.getAttribute('data-ga-placement');
  if (explicit) return explicit;
  if (element.closest('header')) return 'header';
  if (element.closest('footer')) return 'footer';
  if (element.closest('nav')) return 'nav';
  const section = element.closest('section, aside, article');
  const heading = section?.querySelector('h1, h2, h3')?.textContent?.replace(/\s+/g, ' ').trim();
  return heading ? `section: ${heading.slice(0, 50)}` : 'body';
}

export function linkTextOf(element: Element): string {
  const raw = element.getAttribute('aria-label') || element.textContent || '';
  return raw.replace(/\s+/g, ' ').trim().slice(0, 60);
}
