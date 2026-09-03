'use client';

import { useEffect } from 'react';

// GA4 lumps AI assistants into "Referral" (or "Direct" when the assistant sends
// no referrer), so AI answer-engine traffic is invisible in the default channel
// report. This fires one `ai_referral` event per session with the assistant name,
// which can be built into a custom dimension / comparison in GA4.
const AI_REFERRERS: { pattern: RegExp; source: string }[] = [
  { pattern: /(^|\.)chatgpt\.com$/, source: 'ChatGPT' },
  { pattern: /(^|\.)chat\.openai\.com$/, source: 'ChatGPT' },
  { pattern: /(^|\.)oai\.azure\.com$/, source: 'ChatGPT' },
  { pattern: /(^|\.)perplexity\.ai$/, source: 'Perplexity' },
  { pattern: /(^|\.)claude\.ai$/, source: 'Claude' },
  { pattern: /(^|\.)anthropic\.com$/, source: 'Claude' },
  { pattern: /(^|\.)gemini\.google\.com$/, source: 'Gemini' },
  { pattern: /(^|\.)bard\.google\.com$/, source: 'Gemini' },
  { pattern: /(^|\.)copilot\.microsoft\.com$/, source: 'Copilot' },
  { pattern: /(^|\.)edgeservices\.bing\.com$/, source: 'Copilot' },
  { pattern: /(^|\.)you\.com$/, source: 'You.com' },
  { pattern: /(^|\.)poe\.com$/, source: 'Poe' },
  { pattern: /(^|\.)phind\.com$/, source: 'Phind' },
  { pattern: /(^|\.)mistral\.ai$/, source: 'Mistral' },
  { pattern: /(^|\.)deepseek\.com$/, source: 'DeepSeek' },
  { pattern: /(^|\.)grok\.com$/, source: 'Grok' },
  { pattern: /(^|\.)x\.ai$/, source: 'Grok' },
];

const SESSION_KEY = 'tdit_ai_referral_sent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function resolveAiSource(): string | null {
  // Explicit campaign tagging wins — some assistants append their own utm_source.
  const utmSource = new URLSearchParams(window.location.search).get('utm_source');
  if (utmSource) {
    const match = AI_REFERRERS.find(entry => entry.pattern.test(utmSource.toLowerCase()));
    if (match) return match.source;
    if (/chatgpt|openai|perplexity|claude|gemini|copilot/i.test(utmSource)) return utmSource;
  }

  if (!document.referrer) return null;

  let host: string;
  try {
    host = new URL(document.referrer).hostname.toLowerCase();
  } catch {
    return null;
  }

  if (host === window.location.hostname) return null;

  return AI_REFERRERS.find(entry => entry.pattern.test(host))?.source ?? null;
}

export default function AiReferralTracking() {
  useEffect(() => {
    let alreadySent = false;
    try {
      alreadySent = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      // Private mode / storage disabled — fall through and just send the event.
    }
    if (alreadySent) return;

    const source = resolveAiSource();
    if (!source) return;

    window.gtag?.('event', 'ai_referral', {
      ai_source: source,
      page_location: window.location.href,
      page_referrer: document.referrer || '(none)',
    });

    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Non-fatal: worst case the event fires again on the next page view.
    }
  }, []);

  return null;
}
