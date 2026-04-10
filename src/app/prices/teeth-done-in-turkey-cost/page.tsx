import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/prices/teeth-done-in-turkey-cost" },
  title: "Teeth Done in Turkey Cost – Full Price Guide 2026",
  description: "Complete guide to teeth done in Turkey cost. Packages from £2,800. Veneers, implants, Hollywood Smile and individual treatment prices. Save up to 90% vs UK.",
};

const individualPrices = [
  { treatment: "Zirconia Crown", uk: "£1,000–£1,500", turkey: "£130", saving: "~90%" },
  { treatment: "Osstem Implant", uk: "£2,000–£3,000", turkey: "£250", saving: "~88%" },
  { treatment: "Medentika Implant (Straumann Group)", uk: "£2,500–£3,500", turkey: "£300", saving: "~90%" },
  { treatment: "Straumann Implant", uk: "£3,000–£4,500", turkey: "£800", saving: "~80%" },
  { treatment: "Root Canal Treatment", uk: "£600–£900", turkey: "£200", saving: "~75%" },
  { treatment: "Dental Filling", uk: "£150–£300", turkey: "£70", saving: "~65%" },
  { treatment: "Gingivectomy (per tooth)", uk: "£100–£200", turkey: "£25", saving: "~80%" },
  { treatment: "Surgical Tooth Extraction", uk: "£200–£400", turkey: "£80", saving: "~75%" },
  { treatment: "Bone Graft", uk: "£400–£800", turkey: "£200", saving: "~65%" },
  { treatment: "Sinus Lift", uk: "£1,000–£2,000", turkey: "£200", saving: "~85%" },
  { treatment: "Botox", uk: "£300–£500", turkey: "£250", saving: "~40%" },
  { treatment: "Teeth Whitening (with cleaning)", uk: "£400–£700", turkey: "£250", saving: "~50%" },
  { treatment: "Dental Cleaning", uk: "£100–£200", turkey: "£60", saving: "~60%" },
  { treatment: "Full Mouth Curettage", uk: "£600–£1,200", turkey: "£250", saving: "~70%" },
];

export default function TurkeyDentalCostPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">How Much Does Teeth Done in Turkey Cost?</h1>
          <p className="text-xl text-blue-200">2026 price guide — packages, individual treatments &amp; UK vs Turkey comparison</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Turkey has become the go-to destination for UK dental patients looking to save significant money on high-quality dental work. On average, patients save <strong>70–90%</strong> compared to equivalent UK treatments — while receiving care from highly qualified dentists using the same premium materials.
            </p>
          </div>

          {/* Most Popular Packages */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Popular Treatment Packages</h2>
            <p className="text-gray-500 text-sm mb-6">All-inclusive packages with hotel, transfers &amp; everything arranged for you.</p>

            {/* All-on-6 package */}
            <div className="rounded-2xl border-2 border-[#1e40af] bg-blue-50 p-7 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">Most Popular</div>
                  <h3 className="text-xl font-extrabold text-gray-900">All-on-6 Dental Implants Package</h3>
                  <p className="text-gray-500 text-sm mt-1">Complete full-arch restoration using high-quality implants</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-gray-500 mb-1">Package Price</p>
                  <p className="text-3xl font-extrabold text-[#1e40af]">£5,600</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {[
                      "Osstem implants",
                      "First visit: 3 nights hotel stay",
                      "Second visit: 5 nights hotel stay",
                      "VIP airport & clinic transfers",
                      "Temporary teeth during healing",
                      "Final fixed prosthesis",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Optional upgrade:</p>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
                    <p className="text-sm text-yellow-700">Titanium bar reinforcement (recommended for durability)</p>
                    <p className="text-lg font-extrabold text-yellow-800 mt-1">+£1,500</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex gap-3 flex-wrap">
                <Link href="/prices/all-on-6-dental-implants-turkey-package" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">View Full Package Details</Link>
                <Link href="/book-consultation" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get My Quote</Link>
              </div>
            </div>

            {/* Hollywood Smile packages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Hollywood Smile – 24 Zirconia Crowns",
                  subtitle: "Perfect for a full smile transformation",
                  price: "£3,100",
                  badge: "Best Value",
                  includes: ["24 zirconia crowns", "5 nights hotel accommodation", "VIP airport transfers", "Digital smile design", "Professional teeth cleaning"],
                },
                {
                  name: "Hollywood Smile – 20 Zirconia Crowns",
                  subtitle: "Ideal for upper smile enhancement",
                  price: "£2,800",
                  badge: null,
                  includes: ["20 zirconia crowns", "5 nights hotel accommodation", "VIP airport transfers", "Smile design consultation"],
                },
              ].map(pkg => (
                <div key={pkg.name} className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
                  {pkg.badge && (
                    <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">{pkg.badge}</div>
                  )}
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{pkg.subtitle}</p>
                  <p className="text-2xl font-extrabold text-[#1e40af] mb-4">{pkg.price}</p>
                  <ul className="space-y-1.5 text-sm text-gray-700 mb-5">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                    ))}
                  </ul>
                  <Link href="/prices/hollywood-smile-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-4 py-2 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">View Package Details</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Individual treatment prices */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Individual Treatment Prices</h2>
            <p className="text-gray-500 text-sm mb-6">Transparent pricing with premium implant brands available.</p>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                    <th className="px-4 py-3 text-right font-semibold">UK Price</th>
                    <th className="px-4 py-3 text-right font-semibold">Turkey Price</th>
                    <th className="px-4 py-3 text-right font-semibold">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {individualPrices.map((row, i) => (
                    <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {row.saving}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">* Turkey prices are fixed clinic prices. UK prices are indicative ranges for private dental treatment. Hotel and flights are separate unless booking a package.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Is Dental Treatment Cheaper in Turkey?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The lower cost is not due to inferior quality — it is due to Turkey&apos;s significantly lower cost of living, labour costs, and clinic overheads. Turkish dentists can charge less while still earning excellent salaries relative to local costs.
            </p>
            <ul className="space-y-2 text-gray-600">
              {["Lower dentist salary expectations vs UK", "Lower clinic rent and overheads", "Government support for medical tourism", "High volume of international patients reduces per-patient costs", "Favourable exchange rate for GBP vs Turkish Lira"].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Personal Treatment Plan</Link>
            <Link href="/monthly-payment" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Monthly Payment Options</Link>
          </div>
        </div>
      </section>

      <CTASection title="Get Your Personal Quote" subtitle="Send us your photos and we'll prepare a detailed treatment plan and cost estimate within 24 hours." buttonText="Request Free Quote" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
