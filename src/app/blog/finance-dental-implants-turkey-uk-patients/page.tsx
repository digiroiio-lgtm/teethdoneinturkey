import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/finance-dental-implants-turkey-uk-patients" },
  title: "Finance Implants Turkey – UK Guide",
  description: "How to finance dental implants in Turkey as a UK patient. Monthly payment options, 0% interest plans, and how to make implants affordable from £54/month.",
};

export default function FinanceImplantsPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Finance Dental Implants in Turkey: UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Dental implants are life-changing — but even at significantly reduced Turkish prices, a full mouth restoration represents a substantial investment. UK-based dental finance makes it possible to have your implants done in Turkey and spread the cost over time from home.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Finance Turkey Implants?</h2>
          <p>Even after the dramatic savings from having implants in Turkey (typically 70–80% less than UK prices), some treatments — particularly All-on-4 or All-on-6 full arch restorations — involve costs of £4,500–£11,000. Finance makes this accessible with payments starting from £83/month.</p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
              {[
                { label: "Single implant", cost: "£650", monthly: "From £18/mo" },
                { label: "3 implants", cost: "£1,950", monthly: "From £54/mo" },
                { label: "All-on-4 (1 arch)", cost: "£4,500", monthly: "From £125/mo" },
                { label: "Full mouth All-on-4", cost: "£9,000", monthly: "From £250/mo" },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-3">
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.cost}</p>
                  <p className="text-[#1e40af] font-bold text-xs">{item.monthly}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">*Over 36 months. Representative figures subject to credit assessment.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Finance Works for Turkey Implants</h2>
          <p>Our finance is entirely UK-based:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>Apply online with a UK lender through our portal</li>
            <li>Funds are disbursed in GBP — no currency risk</li>
            <li>You pay the Turkish clinic directly; the finance covers your total treatment cost</li>
            <li>Monthly repayments are made from your UK bank account</li>
            <li>Full FCA-regulated process</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Finance Options Available</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Plan Type</th>
                  <th className="px-4 py-3 text-left">Term</th>
                  <th className="px-4 py-3 text-left">Interest</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "0% Interest", term: "12 months", int: "0%", note: "For qualifying applicants" },
                  { type: "Low Rate", term: "24 months", int: "Low APR", note: "Competitive rates for good credit" },
                  { type: "Flexible", term: "36 months", int: "Low APR", note: "Lowest monthly payments" },
                  { type: "Bad Credit", term: "12–36 months", int: "Specialist rates", note: "All profiles considered" },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.type}</td>
                    <td className="px-4 py-3">{r.term}</td>
                    <td className="px-4 py-3">{r.int}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Wider Case: Even Financed, Turkey Is Cheaper</h2>
          <p>The comparison between financed Turkey implants and UK NHS/private implants demonstrates the ongoing value:</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Scenario</th>
                  <th className="px-4 py-3 text-right">Monthly Payment (36 mo.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "All-on-4 UK private (£15,000 financed)", m: "£417/month" },
                  { s: "All-on-4 Turkey (£4,500 financed)", m: "£125/month" },
                  { s: "Full mouth UK private (£30,000 financed)", m: "£833/month" },
                  { s: "Full mouth Turkey All-on-4 (£9,000 financed)", m: "£250/month" },
                ].map((r, i) => (
                  <tr key={r.s} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3">{r.s}</td>
                    <td className="px-4 py-3 text-right font-bold text-[#1e40af]">{r.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step: Financing Your Turkey Implants</h2>
          <ol className="space-y-2 my-3 list-decimal list-inside">
            <li>Book a free consultation — we prepare your personalised implant plan and cost</li>
            <li>Pre-qualify for finance online (60 seconds, soft check only)</li>
            <li>Review finance options and choose your plan</li>
            <li>Book your Turkey treatment dates</li>
            <li>Travel and receive treatment</li>
            <li>Repay monthly from home</li>
          </ol>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your implant finance quote today</p>
            <p className="text-blue-200 mb-4">Free consultation + finance pre-qualification. No impact on your credit score. No obligation.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get Started Free</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/treatments/all-on-4-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-4 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full arch restoration</span>
            </Link>
            <Link href="/treatments/all-on-6-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-6 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">6-implant full arch</span>
            </Link>
            <Link href="/prices/dental-implants-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Implant Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">All implant prices</span>
            </Link>
            <Link href="/monthly-payment" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Monthly Payment Plans</span>
              <span className="text-xs text-gray-500 mt-0.5">From £82/month</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
