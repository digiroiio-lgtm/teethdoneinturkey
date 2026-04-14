import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dental Treatment Prices in Turkey vs UK | Teeth Done in Turkey",
  description: "Compare dental treatment prices in Turkey vs UK. Veneers from £195, implants from £450, Hollywood Smile from £2,500. See all prices and start saving 60–75%.",
  openGraph: {
    title: "Dental Treatment Prices in Turkey vs UK",
    description: "Compare all dental treatment prices: Turkey vs UK vs USA.",
    url: "https://www.teethdoneinturkey.co.uk/prices",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/prices" },
};

const priceData = [
  { treatment: "Composite Veneer", turkey: "£120–£180", uk: "£400–£600", usa: "$800–$1,500", saving: "~70%", href: "/prices/dental-veneers-cost" },
  { treatment: "Porcelain Veneer", turkey: "£195–£250", uk: "£800–£1,200", usa: "$1,500–$2,500", saving: "~75%", href: "/prices/dental-veneers-cost" },
  { treatment: "Hollywood Smile (10 teeth)", turkey: "£2,500–£3,000", uk: "£8,000–£12,000", usa: "$15,000–$25,000", saving: "~70%", href: "/prices/hollywood-smile-cost" },
  { treatment: "Dental Implant (single)", turkey: "£450–£700", uk: "£2,000–£3,000", usa: "$3,000–$5,000", saving: "~77%", href: "/prices/dental-implants-cost" },
  { treatment: "All-on-4 (per arch)", turkey: "£3,500–£5,000", uk: "£14,000–£20,000", usa: "$20,000–$35,000", saving: "~75%", href: "/prices/all-on-4-cost" },
  { treatment: "All-on-6 (per arch)", turkey: "£4,500–£6,000", uk: "£18,000–£25,000", usa: "$25,000–$40,000", saving: "~75%", href: "/prices/all-on-4-cost" },
  { treatment: "Dental Crown (Zirconia)", turkey: "£195–£250", uk: "£700–£1,200", usa: "$1,200–$2,000", saving: "~72%", href: "/prices/dental-crowns-cost" },
  { treatment: "Dental Crown (Emax)", turkey: "£220–£280", uk: "£800–£1,400", usa: "$1,500–$2,500", saving: "~72%", href: "/prices/dental-crowns-cost" },
  { treatment: "Laser Teeth Whitening", turkey: "£150–£200", uk: "£400–£600", usa: "$500–$800", saving: "~63%", href: "/prices/teeth-whitening-cost" },
  { treatment: "Zoom Whitening", turkey: "£180–£250", uk: "£450–£700", usa: "$600–$1,000", saving: "~60%", href: "/prices/teeth-whitening-cost" },
  { treatment: "Dental Bone Graft", turkey: "£200–£400", uk: "£500–£1,000", usa: "$800–$1,500", saving: "~60%", href: "/prices/dental-implants-cost" },
  { treatment: "Sinus Lift", turkey: "£350–£600", uk: "£1,000–£2,000", usa: "$1,500–$3,000", saving: "~65%", href: "/prices/dental-implants-cost" },
  { treatment: "Dental Extraction (surgical)", turkey: "£50–£100", uk: "£150–£300", usa: "$200–$500", saving: "~67%", href: "/contact" },
  { treatment: "Root Canal Treatment", turkey: "£80–£150", uk: "£300–£700", usa: "$700–$1,500", saving: "~75%", href: "/contact" },
  { treatment: "Gum Contouring", turkey: "£100–£200", uk: "£300–£600", usa: "$500–$1,000", saving: "~67%", href: "/contact" },
];

export default function PricesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dental Treatment Prices in Turkey vs UK
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            See exactly how much you could save on every dental treatment. Our partner clinics in Turkey offer the same quality as the UK at 60–77% less cost.
          </p>
          <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">
            Get My Personalised Quote →
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Full Price Comparison Table</h2>
            <p className="text-gray-600">All prices are indicative. Your exact quote depends on your specific needs. <Link href="/contact" className="text-[#1a6b3c] underline">Get a free personalised quote.</Link></p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-[#1a6b3c] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Treatment</th>
                  <th className="px-6 py-4 text-center font-semibold">🇹🇷 Turkey</th>
                  <th className="px-6 py-4 text-center font-semibold">🇬🇧 UK</th>
                  <th className="px-6 py-4 text-center font-semibold">🇺🇸 USA</th>
                  <th className="px-6 py-4 text-center font-semibold">Saving</th>
                  <th className="px-6 py-4 text-center font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-[#1a1a1a]">{row.treatment}</td>
                    <td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.uk}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.usa}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-[#f5a623]/10 text-[#f5a623] font-bold px-2 py-1 rounded-full text-sm">{row.saving}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link href={row.href} className="text-xs text-[#1a6b3c] font-semibold hover:underline">Details →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#1a6b3c]/5 border border-[#1a6b3c]/10 rounded-xl p-4">
            <p className="text-sm text-gray-600">
              <strong>What&apos;s included:</strong> All quoted prices include the dental procedure, anaesthesia, follow-up appointments, and all materials. All-inclusive packages also include airport transfers, hotel accommodation, and patient coordination. Flights are not included.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 text-center">Detailed Pricing Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Dental Veneer Costs", href: "/prices/dental-veneers-cost", desc: "Composite vs porcelain, package deals" },
              { title: "Dental Implant Costs", href: "/prices/dental-implants-cost", desc: "Single, multiple, full arch" },
              { title: "Hollywood Smile Costs", href: "/prices/hollywood-smile-cost", desc: "8, 10, 16 tooth packages" },
              { title: "Dental Crown Costs", href: "/prices/dental-crowns-cost", desc: "Zirconia, porcelain, emax" },
              { title: "All-on-4 Costs", href: "/prices/all-on-4-cost", desc: "Full arch and full mouth" },
              { title: "Teeth Whitening Costs", href: "/prices/teeth-whitening-cost", desc: "Laser, zoom, home kits" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-[#1a6b3c] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
                <span className="text-[#1a6b3c] font-semibold text-sm">View pricing guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
