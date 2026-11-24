'use client';

import { useRef } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { engagementParams, trackEvent } from '@/lib/analytics';
import { useViewEvent } from '@/lib/use-view-event';

const WHATSAPP_URL = 'https://wa.me/905353998999';

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  /** Where on the page the link sits, sent with the `whatsapp_click` and `whatsapp_view` events. */
  placement: string;
  children: ReactNode;
};

// WhatsApp link that reports a GA4 `whatsapp_click` event (placement, page path,
// scroll depth, seconds on page) before the chat opens, and a `whatsapp_view`
// event the first time it is on screen, so click-through rate per placement can
// be read in GA4. The data-ga-tracked flag stops the site-wide click listener
// from counting it twice. Window.gtag is typed in AiReferralTracking.tsx.
export default function WhatsAppLink({ placement, onClick, children, ...props }: WhatsAppLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useViewEvent(ref, 'whatsapp_view', { placement });

  return (
    <a
      {...props}
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ga-tracked="1"
      onClick={event => {
        trackEvent('whatsapp_click', {
          placement,
          page_path: window.location.pathname,
          ...engagementParams(),
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
