'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  /** Human-readable CTA name sent with the `cta_click` event. */
  ctaLabel: string;
};

// Link that reports a GA4 `cta_click` event (label + page path) before navigating.
// Window.gtag is typed in AiReferralTracking.tsx.
export default function TrackedLink({ ctaLabel, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={event => {
        window.gtag?.('event', 'cta_click', {
          cta_label: ctaLabel,
          cta_destination: String(props.href),
          page_path: window.location.pathname,
        });
        onClick?.(event);
      }}
    />
  );
}
