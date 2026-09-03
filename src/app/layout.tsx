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

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

export const metadata: Metadata = {
  title: {
    template: "%s | Teeth Done in Turkey",
    default: "Teeth Done in Turkey | Cost, Veneers & Dental Implants Turkey",
  },
  description:
    "Save up to 70% on dental treatments in Turkey. Veneers, dental implants and full smile makeovers for UK patients with monthly payment options.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "Teeth Done in Turkey",
    locale: "en_GB",
    url: SITE_URL,
    title: "Teeth Done in Turkey | Cost, Veneers & Dental Implants Turkey",
    description:
      "Save up to 70% on dental treatments in Turkey. Veneers, dental implants and full smile makeovers for UK patients with monthly payment options.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Done in Turkey | Cost, Veneers & Dental Implants Turkey",
    description:
      "Save up to 70% on dental treatments in Turkey. Veneers, dental implants and full smile makeovers for UK patients with monthly payment options.",
  },
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Teeth Done in Turkey",
  url: "https://teethdoneinturkey.co.uk",
  description: "Premium dental treatments in Turkey for UK patients",
  priceRange: "££",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
  },
  email: "hello@teethdoneinturkey.co.uk",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
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
