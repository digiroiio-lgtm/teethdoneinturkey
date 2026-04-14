import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dental Crown Cost in Turkey 2024 — From £195 Per Crown | Teeth Done in Turkey",
  description: "How much do dental crowns cost in Turkey? From £195 per crown vs £700–£1,200 in the UK. Compare zirconia, porcelain and emax crown prices.",
  openGraph: {
    title: "Dental Crown Cost in Turkey 2024 — From £195 Per Crown",
    description: "How much do dental crowns cost in Turkey? From £195 per crown vs £700–£1,200 in the UK. Compare zirconia, porcelain and emax crown prices.",
    url: "https://www.teethdoneinturkey.co.uk/prices/dental-crowns-cost",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/prices/dental-crowns-cost" },
};

export default function DentalCrownsCostPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/prices" className="hover:text-white">Prices</Link><span>/</span>
            <span>Dental Crowns Cost</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How Much Do Dental Crowns Cost in Turkey?</h1>
          <p className="text-xl text-green-100 max-w-3xl mb-6">
            Compare prices for Dental Crowns in Turkey vs the UK and USA. All-inclusive packages available with accommodation, transfers, and aftercare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">Get My Quote</Link>
            <Link href="/monthly-payment" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">Monthly Payment Options</Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Price Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <thead>
                  <tr className="bg-[#1a6b3c] text-white">
                    <th className="px-6 py-4 text-left">Treatment</th>
                    <th className="px-6 py-4 text-center">🇹🇷 Turkey</th>
                    <th className="px-6 py-4 text-center">🇬🇧 UK</th>
                    <th className="px-6 py-4 text-center">🇺🇸 USA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Porcelain-Fused-to-Metal</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£150–£195</td><td className="px-6 py-4 text-center text-gray-500">£600–£1,000</td><td className="px-6 py-4 text-center text-gray-500">$1,000–$1,500</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Full Zirconia Crown</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£195–£250</td><td className="px-6 py-4 text-center text-gray-500">£700–£1,200</td><td className="px-6 py-4 text-center text-gray-500">$1,200–$2,000</td></tr>
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Emax Ceramic Crown</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£220–£280</td><td className="px-6 py-4 text-center text-gray-500">£800–£1,400</td><td className="px-6 py-4 text-center text-gray-500">$1,500–$2,500</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Implant Crown only</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£200–£280</td><td className="px-6 py-4 text-center text-gray-500">£700–£1,200</td><td className="px-6 py-4 text-center text-gray-500">$1,000–$2,000</td></tr>
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Full Mouth Crowns (all teeth)</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£3,500–£5,000</td><td className="px-6 py-4 text-center text-gray-500">£15,000–£25,000</td><td className="px-6 py-4 text-center text-gray-500">$25,000–$45,000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">Prices are indicative. <Link href="/contact" className="text-[#1a6b3c] underline">Request a free personalised quote</Link> for exact pricing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What&apos;s Included in the Price?</h2>
            <div className="bg-[#1a6b3c]/5 rounded-2xl p-6 border border-[#1a6b3c]/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Crown material (zirconia/porcelain/emax)</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Tooth preparation</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Temporary crown</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Permanent fitting and cementation</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Post-fitting review</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Hotel and transfers (with package)</span></div>
                
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Why Are Prices So Much Lower in Turkey?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Turkey offers dramatically lower dental prices due to the significantly lower cost of living, lower overheads for dental practices, government subsidies for the medical tourism sector, and the favourable exchange rate against the pound. Crucially, this does not mean lower quality — Turkish dental clinics use the same or equivalent materials, equipment, and techniques as UK practices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many Turkish dental surgeons trained in Germany, the UK, or USA, and the country has a thriving dental profession with some of the highest dentist-to-patient ratios in Europe. Clinics that cater to international patients are typically held to exceptionally high standards, as reviews and reputation are everything in medical tourism.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {["💰 Lower operating costs", "🏆 Same materials used", "📋 Internationally accredited"].map(item => (
                <div key={item} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <p className="font-medium text-[#1a1a1a]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Payment Options</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that even with Turkish savings, dental treatment is a significant investment. We offer flexible payment options to help spread the cost:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Full Payment", desc: "Pay the full amount upfront and receive a loyalty discount on your treatment." },
                { title: "Split Payment", desc: "Pay a deposit to confirm your booking and the remainder before or on your arrival day." },
                { title: "Finance Options", desc: "0% finance plans available for UK patients through our partner finance providers." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/monthly-payment" className="text-[#1a6b3c] font-semibold hover:underline">→ Learn more about monthly payment plans</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/treatments/dental-crowns" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Dental Crowns Treatment</p></Link>
              <Link href="/treatments/dental-veneers" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Dental Veneers (alternative)</p></Link>
              <Link href="/treatments/dental-implants" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Dental Implants</p></Link>
              <Link href="/monthly-payment" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Monthly Payment Plans</p></Link>
              
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
