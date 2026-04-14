import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: { default: "Teeth Done in Turkey — Save Up to 70% on Dental Treatment", template: "%s | Teeth Done in Turkey" },
  description: "World-class dental treatment in Turkey at a fraction of UK prices. Veneers from £195, implants from £450. JCI-accredited clinics, 10,000+ happy patients.",
  metadataBase: new URL("https://www.teethdoneinturkey.co.uk"),
  openGraph: { siteName: "Teeth Done in Turkey", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
