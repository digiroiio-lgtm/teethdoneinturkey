import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How Much Does Teeth Done in Turkey Cost? 2024 Price Guide",
  description: "Complete guide to teeth done in Turkey cost. Compare veneers, implants, All-on-4 prices UK vs Turkey. Save up to 82% on dental treatment.",
};

const allPrices = [
  { treatment: "Porcelain Veneer (E-max)", uk: "£800–£1,000", turkey: "£190–£250", saving: "75–79%" },
  { treatment: "Zirconia Veneer", uk: "£900–£1,200", turkey: "£220–£280", saving: "74–77%" },
  { treatment: "Composite Veneer", uk: "£300–£500", turkey: "£80–£120", saving: "73–76%" },
  { treatment: "Single Dental Implant (incl. crown)", uk: "£2,000–£3,000", turkey: "£420–£600", saving: "78–82%" },
  { treatment: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "£4,000–£5,500", saving: "67–72%" },
  { treatment: "All-on-6 (per arch)", uk: "£15,000–£22,000", turkey: "£5,000–£7,000", saving: "66–71%" },
  { treatment: "Full Smile Makeover (20 veneers)", uk: "£15,000–£20,000", turkey: "£3,500–£5,000", saving: "73–78%" },
  { treatment: "Zirconia Crown", uk: "£1,000–£1,500", turkey: "£220–£280", saving: "77–81%" },
  { treatment: "Teeth Whitening (laser)", uk: "£400–£700", turkey: "£100–£150", saving: "75–79%" },
  { treatment: "Composite Bonding (per tooth)", uk: "£300–£500", turkey: "£70–£120", saving: "73–78%" },
  { treatment: "Gum Contouring", uk: "£500–£800", turkey: "£100–£200", saving: "75–80%" },
  { treatment: "Root Canal (molar)", uk: "£600–£900", turkey: "£100–£180", saving: "78–83%" },
];

export default function TurkeyDentalCostPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">How Much Does Teeth Done in Turkey Cost?</h1>
          <p className="text-xl text-blue-200">Complete 2024 price guide — UK vs Turkey comparison</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Turkey has become the go-to destination for UK dental patients looking to save significant money on high-quality dental work. On average, patients save <strong>70–82%</strong> compared to equivalent UK treatments — while receiving care from highly qualified dentists using the same premium materials.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Turkey Dental Price Guide 2024</h2>
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
                  {allPrices.map((row, i) => (
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
            <p className="text-xs text-gray-500 mt-3">* Prices are indicative. Your personal quote may vary based on clinical assessment. All prices include the procedure; additional costs (hotel, flights) are separate.</p>
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
