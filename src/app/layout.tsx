import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Canonical host (matches sitemap.ts). Keep in sync everywhere.
const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const SITE_NAME = "Teeth Done in Turkey";
const DEFAULT_TITLE =
  "Turkey Teeth: Veneers & Dental Implants for UK Patients | Teeth Done in Turkey";
const DEFAULT_DESC =
  "UK patients' guide to Turkey teeth — veneers from £190/tooth, dental implants from £250. JCI-accredited clinics, English-speaking dentists, monthly payment plans from £82/mo. Save up to 70% vs UK.";

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
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
    },
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
};

// ---- Structured data ----------------------------------------------------------
// One consolidated MedicalBusiness for the entity, plus WebSite + Organization
// so Google can build a proper knowledge panel and generative engines (GEO) can
// extract clean facts.

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Concierge service for UK patients seeking veneers, dental implants and full smile makeovers at JCI-accredited clinics in Turkey. UK-based support, transparent pricing, and monthly payment plans.",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/opengraph-image`,
  priceRange: "££",
  currenciesAccepted: "GBP, EUR, USD",
  paymentAccepted: "Credit Card, Debit Card, Bank Transfer, Financing",
  medicalSpecialty: [
    "https://schema.org/CosmeticDentistry",
    "https://schema.org/Dentistry",
  ],
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "AdministrativeArea", name: "England" },
    { "@type": "AdministrativeArea", name: "Scotland" },
    { "@type": "AdministrativeArea", name: "Wales" },
    { "@type": "AdministrativeArea", name: "Northern Ireland" },
    { "@type": "AdministrativeArea", name: "Republic of Ireland" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressRegion: "Antalya",
  },
  email: "hello@teethdoneinturkey.co.uk",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1284",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Treatments in Turkey",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Zirconia Crowns / Full Veneers",
        priceCurrency: "GBP",
        price: "130",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "130",
          priceCurrency: "GBP",
          unitText: "per tooth",
        },
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Zirconia Crowns",
        },
      },
      {
        "@type": "Offer",
        name: "Porcelain / E-max Veneers",
        priceCurrency: "GBP",
        price: "190",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "190",
          priceCurrency: "GBP",
          unitText: "per tooth",
        },
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Porcelain Veneers",
        },
      },
      {
        "@type": "Offer",
        name: "Dental Implants (Straumann / Nobel Biocare)",
        priceCurrency: "GBP",
        price: "250",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Dental Implant",
        },
      },
      {
        "@type": "Offer",
        name: "All-on-4 Implants (per arch)",
        priceCurrency: "GBP",
        price: "4500",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "All-on-4 Dental Implants",
        },
      },
      {
        "@type": "Offer",
        name: "All-on-6 Implants (per arch)",
        priceCurrency: "GBP",
        price: "5600",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "All-on-6 Dental Implants",
        },
      },
      {
        "@type": "Offer",
        name: "Full Smile Makeover",
        priceCurrency: "GBP",
        price: "3500",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Full Smile Makeover",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
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

const graph = {
  "@context": "https://schema.org",
  "@graph": [medicalBusinessSchema, websiteSchema, organizationSchema],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
