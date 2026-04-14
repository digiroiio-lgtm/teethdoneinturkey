import type { Metadata } from "next";
import Link from "next/link";
import TreatmentCard from "@/components/TreatmentCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dental Treatments in Turkey — Veneers, Implants, Hollywood Smile & More",
  description:
    "Explore all dental treatments available in Turkey. Veneers from £195, implants from £450, Hollywood Smile from £2,500. JCI-accredited clinics, all-inclusive packages.",
  openGraph: {
    title: "Dental Treatments in Turkey",
    description: "Explore all dental treatments available in Turkey at a fraction of UK prices.",
    url: "https://www.teethdoneinturkey.co.uk/treatments",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments" },
};

const treatments = [
  {
    title: "Dental Veneers",
    description: "Ultra-thin porcelain or composite shells that transform the appearance of your teeth. Perfect for covering stains, chips, and gaps.",
    price: "£195/tooth",
    href: "/treatments/dental-veneers",
    emoji: "✨",
  },
  {
    title: "Dental Implants",
    description: "Permanent titanium implants that replace missing teeth, looking and functioning just like your natural teeth.",
    price: "£450/implant",
    href: "/treatments/dental-implants",
    emoji: "🦷",
  },
  {
    title: "Hollywood Smile",
    description: "A complete smile makeover combining veneers, whitening, and shaping for that perfect celebrity smile.",
    price: "£2,500",
    href: "/treatments/hollywood-smile",
    emoji: "⭐",
  },
  {
    title: "Dental Crowns",
    description: "Protective caps for damaged or decayed teeth, restoring function and appearance with durable porcelain or zirconia.",
    price: "£195/crown",
    href: "/treatments/dental-crowns",
    emoji: "👑",
  },
  {
    title: "All-on-4 Implants",
    description: "A full arch of teeth supported by just four implants — the gold standard for full mouth restoration.",
    price: "£3,500/arch",
    href: "/treatments/all-on-4-implants",
    emoji: "🌟",
  },
  {
    title: "Teeth Whitening",
    description: "Professional laser teeth whitening that removes years of staining for a brighter, whiter smile in just one visit.",
    price: "£150",
    href: "/treatments/teeth-whitening",
    emoji: "💎",
  },
  {
    title: "Smile Makeover",
    description: "A fully personalised combination of treatments designed to give you the exact smile transformation you want.",
    price: "Custom quote",
    href: "/treatments/smile-makeover",
    emoji: "🎯",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Dental Treatments in Turkey</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            From a single tooth restoration to a complete smile makeover, our partner clinics in Turkey offer every treatment you need at prices that make a real difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <TreatmentCard key={t.href} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">Quick Price Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-[#1a6b3c] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Treatment</th>
                  <th className="px-6 py-4 text-center font-semibold">Turkey</th>
                  <th className="px-6 py-4 text-center font-semibold">UK</th>
                  <th className="px-6 py-4 text-center font-semibold">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "Dental Veneer", turkey: "from £195", uk: "from £800", saving: "~75%" },
                  { t: "Dental Implant", turkey: "from £450", uk: "from £2,000", saving: "~77%" },
                  { t: "Hollywood Smile (10)", turkey: "from £2,500", uk: "from £8,000", saving: "~69%" },
                  { t: "Dental Crown", turkey: "from £195", uk: "from £700", saving: "~72%" },
                  { t: "All-on-4 (per arch)", turkey: "from £3,500", uk: "from £14,000", saving: "~75%" },
                  { t: "Teeth Whitening", turkey: "from £150", uk: "from £400", saving: "~63%" },
                ].map((row, i) => (
                  <tr key={row.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-[#1a1a1a]">{row.t}</td>
                    <td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.uk}</td>
                    <td className="px-6 py-4 text-center text-[#f5a623] font-bold">{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Prices are indicative. <Link href="/contact" className="text-[#1a6b3c] underline">Request a free personalised quote</Link> for exact pricing.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
