'use client';

import { useRef } from 'react';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { engagementParams, trackEvent } from '@/lib/analytics';
import { useViewEvent } from '@/lib/use-view-event';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** Human-readable CTA name sent with the `cta_click` and `cta_view` events. */
  ctaLabel: string;
};

// Link that reports a GA4 `cta_click` event (label + page path + how far the
// visitor had scrolled) before navigating, and a `cta_view` event the first time
// it is on screen, so click-through rate per CTA can be read in GA4. The
// data-ga-tracked flag stops the site-wide click listener from counting it twice.
// Window.gtag is typed in AiReferralTracking.tsx.
export default function TrackedLink({ ctaLabel, onClick, ...props }: TrackedLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useViewEvent(ref, 'cta_view', { cta_label: ctaLabel, cta_destination: String(props.href) });

  return (
    <Link
      {...props}
      ref={ref}
      data-ga-tracked="1"
      onClick={event => {
        trackEvent('cta_click', {
          cta_label: ctaLabel,
          cta_destination: String(props.href),
          page_path: window.location.pathname,
          ...engagementParams(),
        });
        onClick?.(event);
      }}
    />
  );
}
