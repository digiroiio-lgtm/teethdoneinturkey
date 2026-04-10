import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-veneers-turkey" },
  title: "Pay Monthly for Veneers Turkey",
  description: "Yes — you can pay monthly for veneers in Turkey. A complete guide to dental finance options for UK patients, from £82/month with 0% interest options available.",
};

export default function MonthlyVeneersPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Veneers in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 5 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Yes — you can absolutely pay monthly for veneers in Turkey. We offer UK-based dental finance plans that let you spread the cost of your treatment over 12, 24, or 36 months, making your dream smile more accessible than ever.</p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Payment Examples for Turkey Veneers</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase">
                    <th className="text-left py-2">Treatment</th>
                    <th className="text-right py-2">Cost</th>
                    <th className="text-right py-2">12 months</th>
                    <th className="text-right py-2">24 months</th>
                    <th className="text-right py-2">36 months</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { t: "10 veneers (E-max)", cost: "£1,900", m12: "£158/mo", m24: "£79/mo", m36: "£53/mo" },
                    { t: "16 veneers (E-max)", cost: "£3,040", m12: "£253/mo", m24: "£127/mo", m36: "£84/mo" },
                    { t: "20 veneers (E-max)", cost: "£3,800", m12: "£317/mo", m24: "£158/mo", m36: "£106/mo" },
                    { t: "20 veneers (Zirconia)", cost: "£4,400", m12: "£367/mo", m24: "£183/mo", m36: "£122/mo" },
                  ].map(r => (
                    <tr key={r.t}>
                      <td className="py-2 font-medium">{r.t}</td>
                      <td className="py-2 text-right">{r.cost}</td>
                      <td className="py-2 text-right text-[#1e40af] font-bold">{r.m12}</td>
                      <td className="py-2 text-right text-[#1e40af] font-bold">{r.m24}</td>
                      <td className="py-2 text-right text-[#1e40af] font-bold">{r.m36}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">* Representative figures. Exact rates subject to credit assessment and lender terms.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does the Finance Work?</h2>
          <p>Our finance is arranged through UK-based lenders — so you apply, receive approval, and make repayments entirely in the UK in pounds sterling. Here&apos;s how it works:</p>
          <ol className="space-y-3 my-4">
            {[
              { title: "Pre-qualify online", desc: "Apply in 60 seconds. Soft credit check only — no impact on your credit score for pre-qualification." },
              { title: "Instant decision", desc: "Most pre-qualification decisions are instant. Know your options before you commit to anything." },
              { title: "Book your treatment", desc: "With finance confirmed, book your treatment dates with confidence." },
              { title: "Travel to Turkey", desc: "Have your veneers done in Turkey as planned. Treatment is typically completed in 5–7 days." },
              { title: "Repay from home", desc: "Monthly repayments start on your agreed date. Simple direct debit from your UK bank account." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <span className="font-semibold text-gray-900">{step.title}: </span>
                  <span className="text-gray-600">{step.desc}</span>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is 0% Finance Available?</h2>
          <p>Yes — 0% interest finance is available for qualifying applicants. Eligibility depends on your credit profile and the term chosen. Our team will present all available options clearly before you commit, with no hidden fees.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What If I Have Bad Credit?</h2>
          <p>We work with specialist lenders who consider all credit profiles, including those with imperfect credit history. Pre-qualifying takes 60 seconds and uses a soft check — so you can see what&apos;s available without any impact on your credit file.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Changes Everything</h2>
          <p>Even with finance, veneers in Turkey are dramatically cheaper than the UK. A full set of 20 veneers in Turkey financed over 36 months costs approximately £106/month. The equivalent UK treatment, even if financed, would be £500+/month for the same term. The gap is enormous.</p>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Pre-qualify for veneer finance today</p>
            <p className="text-blue-200 text-sm mb-4">60-second application. Instant decision. No impact on your credit score.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Pre-Qualify Now</Link>
          </div>

          <div className="mt-6 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related pages:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/monthly-payment" className="text-[#1e40af] hover:underline">→ Full monthly payment guide</Link></li>
              <li><Link href="/treatments/veneers-turkey" className="text-[#1e40af] hover:underline">→ Veneers Turkey treatment page</Link></li>
              <li><Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] hover:underline">→ Veneers Turkey cost guide</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
