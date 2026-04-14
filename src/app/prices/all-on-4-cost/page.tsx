import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "All-on-4 Implants Cost in Turkey 2024 — From £3,500 Per Arch | Teeth Done in Turkey",
  description: "How much do All-on-4 implants cost in Turkey? From £3,500 per arch vs £14,000–£20,000 in the UK. Full cost breakdown for single and full mouth packages.",
  openGraph: {
    title: "All-on-4 Implants Cost in Turkey 2024 — From £3,500 Per Arch",
    description: "How much do All-on-4 implants cost in Turkey? From £3,500 per arch vs £14,000–£20,000 in the UK. Full cost breakdown for single and full mouth packages.",
    url: "https://www.teethdoneinturkey.co.uk/prices/all-on-4-cost",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/prices/all-on-4-cost" },
};

export default function AllOn4CostPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/prices" className="hover:text-white">Prices</Link><span>/</span>
            <span>All-on-4 Implants Cost</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">All-on-4 Implants Cost in Turkey</h1>
          <p className="text-xl text-green-100 max-w-3xl mb-6">
            Compare prices for All-on-4 Implants in Turkey vs the UK and USA. All-inclusive packages available with accommodation, transfers, and aftercare.
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
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">All-on-4 Single Arch</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£3,500–£5,000</td><td className="px-6 py-4 text-center text-gray-500">£14,000–£20,000</td><td className="px-6 py-4 text-center text-gray-500">$20,000–$35,000</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-[#1a1a1a]">All-on-4 Full Mouth (both arches)</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£7,000–£10,000</td><td className="px-6 py-4 text-center text-gray-500">£28,000–£40,000</td><td className="px-6 py-4 text-center text-gray-500">$40,000–$70,000</td></tr>
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">All-on-6 Single Arch</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£4,500–£6,000</td><td className="px-6 py-4 text-center text-gray-500">£18,000–£25,000</td><td className="px-6 py-4 text-center text-gray-500">$25,000–$40,000</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-[#1a1a1a]">All-on-6 Full Mouth</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">£9,000–£12,000</td><td className="px-6 py-4 text-center text-gray-500">£36,000–£50,000</td><td className="px-6 py-4 text-center text-gray-500">$50,000–$80,000</td></tr>
                  <tr className="bg-white"><td className="px-6 py-4 font-medium text-[#1a1a1a]">Temporary bridge (per arch)</td><td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">Included</td><td className="px-6 py-4 text-center text-gray-500">Included</td><td className="px-6 py-4 text-center text-gray-500">Included</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">Prices are indicative. <Link href="/contact" className="text-[#1a6b3c] underline">Request a free personalised quote</Link> for exact pricing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What&apos;s Included in the Price?</h2>
            <div className="bg-[#1a6b3c]/5 rounded-2xl p-6 border border-[#1a6b3c]/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>4 or 6 titanium implants</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>All extractions</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Temporary prosthesis (day of surgery)</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Permanent zirconia or hybrid prosthesis</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>All CT scans and X-rays</span></div>
                <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#1a6b3c]">✓</span><span>Anaesthetic (local or sedation)</span></div>
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
              <Link href="/treatments/all-on-4-implants" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">All-on-4 Treatment</p></Link>
              <Link href="/treatments/dental-implants" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Single Dental Implants</p></Link>
              <Link href="/monthly-payment" className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"><p className="font-semibold text-[#1a1a1a]">Monthly Payment Plans</p></Link>
              
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
