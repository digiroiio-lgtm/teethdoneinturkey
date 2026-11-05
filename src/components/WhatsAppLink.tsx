'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

const WHATSAPP_URL = 'https://wa.me/905353998999';

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  /** Where on the page the link sits, sent with the `whatsapp_click` event. */
  placement: string;
  children: ReactNode;
};

// WhatsApp link that reports a GA4 `whatsapp_click` event (placement + page path)
// before the chat opens. Window.gtag is typed in AiReferralTracking.tsx.
export default function WhatsAppLink({ placement, onClick, children, ...props }: WhatsAppLinkProps) {
  return (
    <a
      {...props}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={event => {
        window.gtag?.('event', 'whatsapp_click', {
          placement,
          page_path: window.location.pathname,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
