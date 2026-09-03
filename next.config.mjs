/** @type {import('next').NextConfig} */
// script-src allows 'unsafe-inline' because Next.js's App Router injects inline
// RSC flight-data/bootstrap <script> tags on every page (including fully static/ISR
// pages, which can't receive a fresh per-request nonce). A nonce+'strict-dynamic'
// CSP was tried via middleware, but it blocks those static-page scripts outright
// and breaks hydration site-wide. Nothing in this app renders unsanitised user input
// via dangerouslySetInnerHTML (the only usages are hardcoded JSON-LD), so this does
// not open a new practical injection vector for this codebase.
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
