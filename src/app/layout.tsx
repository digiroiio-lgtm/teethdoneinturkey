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

export const metadata: Metadata = {
  title: {
    template: "%s | Teeth Done in Turkey",
    default: "Teeth Done in Turkey | Cost, Veneers & Dental Implants Turkey",
  },
  description:
    "Save up to 70% on dental treatments in Turkey. Veneers, dental implants and full smile makeovers for UK patients with monthly payment options.",
  metadataBase: new URL("https://www.teethdoneinturkey.co.uk"),
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Teeth Done in Turkey",
  url: "https://teethdoneinturkey.co.uk",
  description: "Premium dental treatments in Turkey for UK patients",
  priceRange: "££",
  areaServed: "United Kingdom",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to get teeth done in Turkey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Turkey has world-class JCI-accredited dental clinics with highly trained dentists who use the same brand materials as UK practices.",
      },
    },
    {
      "@type": "Question",
      name: "How much do veneers cost in Turkey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veneers in Turkey cost from £190 per tooth, compared to £900+ in the UK — a saving of around 79%.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay monthly for dental treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer monthly payment plans starting from £82/month over 36 months with no hidden fees.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
