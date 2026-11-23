'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useReportWebVitals } from 'next/web-vitals';
import {
  CTA_PATHS,
  engagementParams,
  linkTextOf,
  noteScroll,
  noteSeconds,
  pageTypeOf,
  placementOf,
  resetEngagement,
  trackEvent,
} from '@/lib/analytics';

// Site-wide GA4 events for user experience and enquiry paths. See
// docs/ga4-events.md for the event dictionary and the GA4 admin setup.
//   scroll_depth      25 / 50 / 75 / 90 % of the page, once per page view
//   time_on_page      15 / 30 / 60 / 120 / 300 visible seconds, once each
//   web_vitals        LCP, INP, CLS, FCP, TTFB with the good / needs-improvement / poor rating
//   whatsapp_click    any wa.me link not already reported by <WhatsAppLink>
//   cta_click         any link to an enquiry page not already reported by <TrackedLink>
//   email_click / phone_click   mailto: and tel: links
const SCROLL_STEPS = [25, 50, 75, 90];
const TIME_STEPS = [15, 30, 60, 120, 300];

export default function AnalyticsEvents() {
  const pathname = usePathname();

  useReportWebVitals(metric => {
    trackEvent('web_vitals', {
      metric_name: metric.name,
      // CLS is a small decimal: report it x1000 so GA4 keeps the precision.
      metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      page_type: pageTypeOf(window.location.pathname),
    });
  });

  // Scroll depth and visible time, re-armed on every client-side navigation.
  useEffect(() => {
    resetEngagement();
    const pageType = pageTypeOf(pathname);
    const reached = new Set<number>();
    let frame = 0;

    const measure = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight;
      if (total <= 0) return;
      const percent = Math.min(100, Math.round(((window.scrollY + window.innerHeight) / total) * 100));
      noteScroll(percent);
      for (const step of SCROLL_STEPS) {
        if (percent >= step && !reached.has(step)) {
          reached.add(step);
          trackEvent('scroll_depth', { percent: step, page_type: pageType });
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let seconds = 0;
    const timer = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      seconds += 1;
      noteSeconds(seconds);
      if (TIME_STEPS.includes(seconds)) trackEvent('time_on_page', { seconds, page_type: pageType });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearInterval(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // One delegated click listener for links that are not wrapped in a tracking component.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a');
      if (!anchor || anchor.dataset.gaTracked) return;
      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      const base = {
        placement: placementOf(anchor),
        link_text: linkTextOf(anchor),
        page_path: window.location.pathname,
        ...engagementParams(),
      };
      if (url.hostname === 'wa.me') {
        trackEvent('whatsapp_click', base);
      } else if (url.protocol === 'mailto:') {
        trackEvent('email_click', base);
      } else if (url.protocol === 'tel:') {
        trackEvent('phone_click', base);
      } else if (url.origin === window.location.origin && CTA_PATHS.includes(url.pathname)) {
        trackEvent('cta_click', { ...base, cta_label: base.link_text, cta_destination: url.pathname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
