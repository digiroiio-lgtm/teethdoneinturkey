import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Treatment Turkey Payment Plans",
  description: "How payment plans work for dental treatment in Turkey. Everything UK patients need to know about spreading costs for veneers, implants, and smile makeovers.",
};

export default function PaymentPlansTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Treatment Turkey Payment Plans: UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Getting dental treatment in Turkey doesn&apos;t have to mean paying the full cost upfront. Our UK-based payment plans let you spread the cost of your Turkey dental treatment over 12, 24, or 36 months — while having your treatment done in Turkey as planned.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Treatment Can Be Financed?</h2>
          <p>Our payment plans cover all dental treatments available through our Turkish partner clinics:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
            {[
              { t: "Veneers", p: "From £190/tooth" },
              { t: "Dental Implants", p: "From £450" },
              { t: "All-on-4", p: "From £4,500" },
              { t: "All-on-6", p: "From £5,500" },
              { t: "Smile Makeover", p: "From £3,500" },
              { t: "Hollywood Smile", p: "From £4,500" },
            ].map(item => (
              <div key={item.t} className="bg-blue-50 rounded-xl p-3 text-center border border-blue-200">
                <p className="font-bold text-gray-900 text-sm">{item.t}</p>
                <p className="text-[#1e40af] text-xs font-semibold">{item.p}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Plan Options</h2>
          <div className="space-y-4 my-4">
            {[
              {
                plan: "12-Month Plan",
                interest: "0% available for qualifying applicants",
                benefit: "Pay the least total if 0% — clear within a year",
                example: "£3,800 treatment = ~£317/month",
                icon: "⚡",
              },
              {
                plan: "24-Month Plan",
                interest: "Low APR",
                benefit: "Balanced payments — manageable monthly without long commitment",
                example: "£3,800 treatment = ~£158/month",
                icon: "⚖️",
              },
              {
                plan: "36-Month Plan",
                interest: "Low APR",
                benefit: "Lowest monthly payment — maximum affordability",
                example: "£3,800 treatment = ~£106/month",
                icon: "💫",
              },
            ].map(item => (
              <div key={item.plan} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.plan}</h3>
                    <p className="text-sm text-gray-600">{item.interest}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.benefit}</p>
                    <p className="text-[#1e40af] font-bold text-sm mt-2">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eligibility Requirements</h2>
          <p>Our finance plans are available to UK residents who:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Are aged 18 or over</li>
            <li>Are UK residents with a UK bank account</li>
            <li>Have a regular income (employed, self-employed, or pension)</li>
            <li>Meet the lender&apos;s credit criteria (we work with providers for all credit profiles)</li>
          </ul>
          <p>Bad credit, CCJs, or defaults don&apos;t automatically disqualify you — specialist lenders consider all profiles. Pre-qualify to see what&apos;s available in your situation.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Apply</h2>
          <ol className="space-y-3 my-4 list-decimal list-inside">
            <li>Book a free consultation to receive your personalised treatment plan and cost</li>
            <li>Click to pre-qualify online — takes 60 seconds with a soft credit check</li>
            <li>Review your plan options — all presented clearly with full APR and total cost of credit</li>
            <li>Sign your credit agreement digitally</li>
            <li>Book your treatment in Turkey — we handle all clinic co-ordination</li>
            <li>Travel and receive your dental treatment</li>
            <li>Monthly repayments begin on your agreed date</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Numbers at a Glance</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Cost</th>
                  <th className="px-4 py-3 text-right">36 months</th>
                  <th className="px-4 py-3 text-right">UK equivalent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "20 Veneers", cost: "£3,800", mo: "£106/mo", uk: "£18,000+" },
                  { t: "All-on-4 (1 arch)", cost: "£4,500", mo: "£125/mo", uk: "£12,000+" },
                  { t: "Full Mouth All-on-4", cost: "£9,000", mo: "£250/mo", uk: "£24,000+" },
                  { t: "Smile Makeover", cost: "£5,000", mo: "£139/mo", uk: "£12,000+" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.mo}</td>
                    <td className="px-4 py-3 text-right text-red-500 text-xs">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Monthly figures are representative at 0% APR over 36 months. Actual rate dependent on credit assessment.</p>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Check your payment plan options now</p>
            <p className="text-blue-200 mb-4">60-second pre-qualification. No impact on your credit score. Instant decision.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Pre-Qualify Free</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
