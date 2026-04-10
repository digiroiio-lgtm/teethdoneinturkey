import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/full-set-veneers-turkey-cost" },
  title: "Full Set of Veneers in Turkey – Cost",
  description: "Exactly how much does a full set of veneers cost in Turkey? A complete cost breakdown for 8, 10, 16, and 20 veneers, including travel, for UK patients.",
};

export default function FullSetVeneersCostPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full Set of Veneers in Turkey: Cost Breakdown 2026</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>One of the most common questions we receive is: <strong>&quot;How much will a full set of veneers cost me in Turkey, all-in?&quot;</strong> This guide breaks down exactly what you&apos;d pay — including the procedure, flights, accommodation, and transfers — so you can make an informed decision.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is a &quot;Full Set&quot; of Veneers?</h2>
          <p>A &quot;full set&quot; typically refers to the teeth visible when you smile. For most people this is 8–10 teeth on the upper arch (and sometimes matched lower). However, full sets of 16 or 20 veneers are also common for patients who want a complete smile transformation that covers every visible tooth.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Veneer Procedure Costs in Turkey</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Number of Veneers</th>
                  <th className="px-4 py-3 text-right">E-max Turkey</th>
                  <th className="px-4 py-3 text-right">Zirconia Turkey</th>
                  <th className="px-4 py-3 text-right">E-max UK equiv.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "8 veneers", emax: "£1,520", zir: "£1,760", uk: "£7,200–£8,000" },
                  { n: "10 veneers", emax: "£1,900", zir: "£2,200", uk: "£9,000–£10,000" },
                  { n: "16 veneers", emax: "£3,040", zir: "£3,520", uk: "£14,400–£16,000" },
                  { n: "20 veneers", emax: "£3,800", zir: "£4,400", uk: "£18,000–£20,000" },
                ].map((r, i) => (
                  <tr key={r.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.n}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.emax}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.zir}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Based on E-max at £190/tooth and zirconia at £220/tooth.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Travel & Accommodation Costs</h2>
          <p>The procedure cost above doesn&apos;t include travel. Here&apos;s a realistic breakdown for a typical 6-night trip:</p>
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 my-4">
            <div className="space-y-2 text-sm">
              {[
                { item: "Return flights (UK to Istanbul/Antalya)", cost: "£80–£200" },
                { item: "Accommodation (6 nights, mid-range hotel)", cost: "£240–£480" },
                { item: "Airport transfers (clinic-arranged)", cost: "Often free or £20–£40" },
                { item: "Food & incidentals", cost: "£150–£300" },
                { item: "Travel insurance", cost: "£40–£80" },
              ].map(row => (
                <div key={row.item} className="flex justify-between">
                  <span className="text-gray-700">{row.item}</span>
                  <span className="font-semibold text-gray-900">{row.cost}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-2 flex justify-between font-bold">
                <span>Estimated total trip cost</span>
                <span className="text-[#1e40af]">£510–£1,060</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Total All-In Cost: 20 Veneers</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK (procedure only)</p>
              <p className="text-3xl font-extrabold text-red-500 line-through">£18,000–£20,000</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey (all-in incl. travel)</p>
              <p className="text-3xl font-extrabold text-green-600">£4,300–£4,860</p>
              <p className="text-xs text-green-600 font-semibold mt-1">Save ~£14,000</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I Spread the Cost?</h2>
          <p>Yes. We offer monthly payment plans that allow you to pay for your Turkey veneer treatment from £82/month over 36 months — meaning you can have your dream smile now and pay gradually from home.</p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Explore monthly payment options</Link>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What&apos;s Included in the Turkey Veneer Price?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full clinical consultation and examination</li>
            <li>Digital Smile Design preview</li>
            <li>X-rays and clinical assessment</li>
            <li>Tooth preparation (minimal for E-max)</li>
            <li>Temporary veneers while final ones are crafted</li>
            <li>Final veneer bonding and fitting</li>
            <li>Fine adjustments and polishing</li>
            <li>10-year structural guarantee</li>
          </ul>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Get your personalised quote</p>
            <p className="text-blue-200 text-sm mb-4">Send us your photos — we&apos;ll provide a detailed treatment plan and exact cost breakdown within 24 hours.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get Free Quote</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
