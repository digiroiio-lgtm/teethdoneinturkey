import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AiReferralTracking from "@/components/AiReferralTracking";

// GA4 (Google Analytics)
const GA_MEASUREMENT_ID = "G-57QGPCQQKT";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Canonical host (matches sitemap.ts). Keep in sync everywhere.
const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const SITE_NAME = "Teeth Done in Turkey";
const DEFAULT_TITLE =
  "Turkey Teeth: Veneers & Implants | Teeth Done in Turkey";
const DEFAULT_DESC =
  "UK patient guide and coordination service for dental treatment in Turkey, covering veneers, implants, treatment costs, clinic selection, travel and aftercare.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Teeth Done in Turkey",
    default: DEFAULT_TITLE,
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "health",
  keywords: [
    "turkey teeth",
    "turkey teeth cost",
    "veneers turkey",
    "dental implants turkey",
    "hollywood smile turkey",
    "all on 4 turkey",
    "all on 6 turkey",
    "dental treatment turkey uk patients",
    "monthly payment dental turkey",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Single-locale en-GB site: canonical is the meaningful signal. Locale is
  // already conveyed by <html lang="en-GB"> and og:locale. A self-referential
  // hreflang adds negligible value here and, because per-page metadata replaces
  // (not deep-merges) `alternates`, it would be dropped on any page that sets
  // its own canonical — so it is intentionally omitted.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    // opengraph-image.tsx is picked up automatically by Next 15
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  themeColor: "#1e40af",
};

// ---- Structured data ----------------------------------------------------------
// Teeth Done in Turkey is an advisory / patient-coordination service, not a
// dental clinic or registered healthcare provider. Keep entity schema aligned
// with the site's visible legal/editorial positioning.

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "UK patient guide and coordination service for people researching dental treatment in Turkey.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  publishingPrinciples: `${SITE_URL}/editorial-policy`,
  actionableFeedbackPolicy: `${SITE_URL}/methodology#corrections`,
  email: "hello@teethdoneinturkey.co.uk",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@teethdoneinturkey.co.uk",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased font-sans`}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <AiReferralTracking />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
