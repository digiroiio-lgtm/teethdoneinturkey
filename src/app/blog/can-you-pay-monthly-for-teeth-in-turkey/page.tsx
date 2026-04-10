import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: "Monthly Payment for Teeth in Turkey",
  description: "Yes — you can pay monthly for teeth done in Turkey. Everything UK patients need to know about dental finance, monthly payment plans, and 0% interest options.",
};

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Teeth in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <p className="font-bold text-green-800 text-lg">✓ Yes — monthly payment plans are available for teeth done in Turkey</p>
            <p className="text-green-700 text-sm mt-1">UK-based finance. Apply in 60 seconds. 0% options available.</p>
          </div>

          <p>One of the most common barriers to getting dental treatment — even at significantly lower Turkish prices — is finding the upfront cost. Monthly payment plans solve this by letting you pay over 12, 24, or 36 months while your treatment is completed in Turkey.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Monthly Payment for Turkey Dental Treatment Works</h2>
          <ol className="space-y-4 my-4">
            {[
              { title: "Pre-qualify online (60 seconds)", desc: "Complete a quick pre-qualification form. This uses a soft credit check — no impact on your credit score. You see what plans are available instantly." },
              { title: "Choose your plan", desc: "Select from 12, 24, or 36 month plans. 0% interest options are available for qualifying applicants. All costs are presented clearly — no hidden fees." },
              { title: "Book your treatment", desc: "With finance approved, book your treatment dates in Turkey. Our team handles clinic booking, travel advice, and pre-trip support." },
              { title: "Travel to Turkey", desc: "Have your dental treatment done in Turkey as planned. Your UK finance is separate — you pay the clinic in Turkey and repay the finance from the UK." },
              { title: "Monthly repayments from home", desc: "Repayments start on your agreed date via direct debit from your UK bank account. Simple and straightforward." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3 list-none">
                <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Payment Examples</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Cost</th>
                  <th className="px-4 py-3 text-right">12 mo.</th>
                  <th className="px-4 py-3 text-right">24 mo.</th>
                  <th className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "10 Veneers", cost: "£1,900", m12: "£158", m24: "£79", m36: "£53" },
                  { t: "20 Veneers", cost: "£3,800", m12: "£317", m24: "£158", m36: "£106" },
                  { t: "Single Implant", cost: "£650", m12: "£54", m24: "£27", m36: "£18" },
                  { t: "All-on-4 (one arch)", cost: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
                  { t: "Full Mouth All-on-4", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
                  { t: "Smile Makeover", cost: "£5,000", m12: "£417", m24: "£208", m36: "£139" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">£{r.m12}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">£{r.m24}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">£{r.m36}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">* Representative figures. Exact rates depend on credit assessment and lender terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Even With Finance, Turkey Is Dramatically Cheaper Than the UK</h2>
          <p>Consider 20 veneers financed over 36 months:</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
              <p className="text-xs text-gray-500 mb-1">UK (financed 36 months)</p>
              <p className="text-2xl font-extrabold text-red-500">£500+/mo</p>
              <p className="text-xs text-gray-400">Based on £18,000 over 36 months</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Turkey (financed 36 months)</p>
              <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
              <p className="text-xs text-gray-400">Based on £3,800 over 36 months</p>
            </div>
          </div>
          <p>The monthly savings are as significant as the headline savings.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQs About Monthly Payment</h2>
          <div className="space-y-3 my-4">
            {[
              { q: "Is 0% interest available?", a: "Yes, for qualifying applicants. Your credit profile and term length determine eligibility. All options are presented clearly before you commit." },
              { q: "Does applying affect my credit score?", a: "Pre-qualification uses a soft check — no impact. Only a full application creates a footprint on your credit file." },
              { q: "I have bad credit — can I still apply?", a: "Yes. We work with specialist lenders who consider all profiles. Pre-qualify to see what's available for your situation." },
              { q: "Can I pay off early?", a: "Yes, most plans allow early repayment. Exact terms are confirmed in your credit agreement before you sign." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Pre-qualify in 60 seconds</p>
            <p className="text-blue-200 mb-4">No impact on your credit score. Instant decision. Get your new smile now, pay monthly.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Pre-Qualify Now — Free</Link>
          </div>

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/monthly-payment" className="text-[#1e40af] hover:underline">→ Full monthly payment guide</Link></li>
              <li><Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] hover:underline">→ Dental tourism finance explained</Link></li>
              <li><Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] hover:underline">→ Finance dental implants Turkey</Link></li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/treatments/all-on-4-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-4 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full arch restoration</span>
            </Link>
            <Link href="/monthly-payment" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Monthly Payment Plans</span>
              <span className="text-xs text-gray-500 mt-0.5">From £82/month</span>
            </Link>
            <Link href="/prices/teeth-done-in-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All Treatment Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">Full price guide</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
