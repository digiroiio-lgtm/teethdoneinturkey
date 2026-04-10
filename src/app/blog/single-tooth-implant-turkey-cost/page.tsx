import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Single Tooth Implant Turkey Cost 2026",
  description: "How much does a single tooth implant cost in Turkey? Full 2026 price guide for UK patients, including brands used, what's included, and monthly payment options.",
};

export default function SingleToothImplantPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Single Tooth Implant Turkey Cost 2026</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 5 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>A single dental implant in Turkey — including the titanium post, abutment, and final crown — typically costs <strong>£450–£650</strong> depending on the implant brand and clinic. Compare this to £2,000–£2,800 in the UK for equivalent quality treatment: a saving of up to 82%.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Single Implant Cost by Brand</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Implant Brand</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { brand: "Straumann", turkey: "£550–£650", uk: "£2,500–£3,000", save: "78%" },
                  { brand: "Nobel Biocare", turkey: "£500–£600", uk: "£2,200–£2,800", save: "77%" },
                  { brand: "Astra Tech", turkey: "£480–£580", uk: "£2,000–£2,500", save: "76%" },
                  { brand: "Premium Turkish brands", turkey: "£450–£500", uk: "N/A in UK", save: "—" },
                ].map((r, i) => (
                  <tr key={r.brand} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.brand}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    <td className="px-4 py-3 text-right">
                      {r.save !== "—" && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.save}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What&apos;s Included in the Turkey Single Implant Price?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full clinical consultation and examination</li>
            <li>CBCT 3D cone beam scan (bone assessment)</li>
            <li>Titanium implant placement surgery</li>
            <li>Healing cap or temporary crown</li>
            <li>Abutment (connector)</li>
            <li>Final zirconia or porcelain-fused crown</li>
            <li>Follow-up appointments during your Turkey stay</li>
            <li>10-year implant guarantee</li>
          </ul>
          <p>Note: If bone grafting is required due to insufficient bone volume, this is priced separately — typically £300–£600 in Turkey vs £1,000–£2,000 in the UK.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The All-In Cost Including Travel</h2>
          <p>For a single implant, you&apos;re looking at two trips to Turkey (one for placement, one for crown fitting ~4 months later). Travel costs per trip from the UK are typically £100–£300 all-in (flight + accommodation).</p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-4">
            <div className="space-y-2 text-sm">
              {[
                { item: "Single implant (Straumann)", cost: "£600" },
                { item: "Trip 1 travel (flight + hotel, 4 days)", cost: "£250" },
                { item: "Trip 2 travel (flight + hotel, 3 days)", cost: "£200" },
                { item: "Total all-in", cost: "~£1,050" },
                { item: "UK equivalent (implant only)", cost: "£2,500" },
              ].map((row, i) => (
                <div key={row.item} className={`flex justify-between ${i === 3 ? "border-t border-blue-300 pt-2 font-bold" : ""} ${i === 4 ? "text-red-500 line-through" : ""}`}>
                  <span>{row.item}</span>
                  <span className={i === 3 ? "text-[#1e40af]" : ""}>{row.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Brands Do Turkish Clinics Use?</h2>
          <p>The implant brand used significantly affects long-term outcomes. Our partner clinics use only premium international brands:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li><strong>Straumann</strong> — the global gold standard, Swiss-made, highest long-term success rates</li>
            <li><strong>Nobel Biocare</strong> — another global leader, favoured for complex cases</li>
            <li><strong>Astra Tech</strong> — premium Swedish brand with excellent osseointegration</li>
          </ul>
          <p>We always recommend Straumann or Nobel Biocare for UK patients who want the most globally-trusted brands.</p>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your single implant quote</p>
            <p className="text-blue-200 mb-4">Share your dental X-rays and we&apos;ll provide a personalised treatment plan with exact costings within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/dental-implants-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Implants Turkey Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
