import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/veneers-turkey-cost" },
  title: "Veneers Turkey Cost: UK Price Guide",
  description: "Veneers Turkey cost guide 2024. E-max from £190/tooth, Zirconia from £250/tooth. Full UK vs Turkey price comparison. Save up to 79%.",
};

export default function VeneersCostPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey Cost – 2024 Price Guide</h1>
          <p className="text-xl text-blue-200">Everything you need to know about veneer prices in Turkey</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Do Veneers Cost in Turkey?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Veneers in Turkey typically cost between £190–£280 per tooth depending on the material and clinic. Compare this to £800–£1,200 per tooth in the UK — a saving of up to 79%.</p>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Veneer Type</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Zirconia Crown", uk: "£1,000–£1,500", turkey: "£130", saving: "~90%" },
                    { type: "E-max Porcelain Veneer", uk: "£800–£1,000", turkey: "£190–£220", saving: "78%" },
                    { type: "Composite (direct)", uk: "£300–£500", turkey: "£80–£120", saving: "75%" },
                    { type: "Hollywood Smile 20 Crowns (package)", uk: "£20,000–£30,000", turkey: "£2,800", saving: "~87%" },
                    { type: "Hollywood Smile 24 Crowns (package)", uk: "£24,000–£36,000", turkey: "£3,100", saving: "~87%" },
                  ].map((r, i) => (
                    <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.type}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                      <td className="px-4 py-3 text-right"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.saving}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Veneer Prices in Turkey</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                { title: "Material", desc: "E-max is premium and most popular. Zirconia is stronger for grinders. Composite is most affordable." },
                { title: "Number of veneers", desc: "Clinics often offer package discounts for 12+ veneers." },
                { title: "Clinic reputation", desc: "Top-tier Istanbul clinics with digital smile design may charge a small premium." },
                { title: "Dentist experience", desc: "Specialist aesthetic dentists with international training command slightly higher fees." },
              ].map(f => (
                <li key={f.title} className="flex gap-3">
                  <span className="text-[#1e40af] font-bold mt-0.5">→</span>
                  <div><strong className="text-gray-900">{f.title}:</strong> {f.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Veneer Quote</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Hollywood Smile Packages</Link>
          </div>
        </div>
      </section>
      <CTASection title="Find Out Exactly What Your Veneers Will Cost" subtitle="Send us your photos and we'll prepare a personalised veneer quote within 24 hours — free, no obligation." buttonText="Get Free Quote" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
