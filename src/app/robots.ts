import { MetadataRoute } from 'next';

// Keep canonical host aligned with sitemap.ts and layout.tsx.
const BASE = 'https://www.teethdoneinturkey.co.uk';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all traditional search crawlers.
      { userAgent: '*', allow: '/' },

      // GEO — explicit allow for major generative-engine crawlers so answers
      // can cite our content. Flip these to `disallow` if we ever want to opt
      // out of AI training/answer surfaces.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
