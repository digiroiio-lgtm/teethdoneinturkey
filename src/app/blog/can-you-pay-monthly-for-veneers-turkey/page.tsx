import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { REVIEWER_PERSON } from "@/lib/reviewer";
import FinanceDisclosure from "@/components/FinanceDisclosure";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-veneers-turkey" },
  title: "Pay Monthly for Veneers Turkey",
  description: "Some UK patients pay monthly for veneers in Turkey. A guide to the options, what decides a monthly payment and what to check before you borrow.",
};

export default function MonthlyVeneersPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-veneers-turkey"
        path="/blog/can-you-pay-monthly-for-veneers-turkey"
        headline="Pay Monthly for Veneers Turkey"
        description="Some UK patients pay monthly for veneers in Turkey. A guide to the options, what decides a monthly payment and what to check before you borrow."
        datePublished="2026-01-01"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Pay Monthly for Veneers Turkey", path: "/blog/can-you-pay-monthly-for-veneers-turkey" },
        ]}
              reviewer={REVIEWER_PERSON}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Veneers in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 5 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Some UK patients spread the cost of veneers in Turkey using credit arranged in the UK. Borrowing is optional, and whether you are offered credit, and on what terms, is the lender&apos;s decision.</p>

          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Veneer Prices in Turkey</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase">
                    <th className="text-left py-2">Treatment</th>
                    <th className="text-right py-2">Treatment price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { t: "10 veneers (E-max)", cost: "£1,900" },
                    { t: "16 veneers (E-max)", cost: "£3,040" },
                    { t: "20 veneers (E-max)", cost: "£3,800" },
                    { t: "20 veneers (Zirconia)", cost: "£4,400" },
                  ].map(r => (
                    <tr key={r.t}>
                      <td className="py-2 font-medium">{r.t}</td>
                      <td className="py-2 text-right text-[#1e40af] font-bold">{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">* Treatment prices, not finance quotes. If you borrow, the lender sets the interest, term and monthly payment.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does the Finance Work?</h2>
          <p>We are an Introducer Appointed Representative of a credit broker, Ideal4Finance. We do not lend or give credit advice. If you ask, we introduce you to the broker, and any credit is arranged with a UK lender and repaid in pounds sterling. Here&apos;s how it works:</p>
          <ol className="space-y-3 my-4">
            {[
              { title: "Get a treatment plan", desc: "Start with a written plan so you know the full cost before deciding whether to borrow." },
              { title: "Ask for an introduction", desc: "If you want to explore finance, ask for an introduction to the broker. You can also arrange credit yourself." },
              { title: "Lender assessment", desc: "The lender decides whether to offer credit and on what terms. Approval is not guaranteed." },
              { title: "Read the offer, then book", desc: "Check the APR, monthly payment, term and total repayable in writing before you agree and book your treatment dates." },
              { title: "Travel to Turkey", desc: "Have your veneers done in Turkey as planned. Treatment is typically completed in 5–7 days." },
              { title: "Repay as agreed", desc: "Repayments follow the schedule in your credit agreement." },
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Decides the Monthly Payment?</h2>
          <p>The amount borrowed, the length of the agreement, the interest rate and any fees. A longer term usually lowers the monthly amount but can raise the total you repay, so compare the total repayable. We do not publish monthly figures because they depend on the offer you receive.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What If I Have a Difficult Credit History?</h2>
          <p>Imperfect credit does not automatically rule you out, but approval is the lender&apos;s decision and cannot be guaranteed. Ask the broker which kind of check is used and whether it is recorded on your credit file before you apply. See <Link href="/finance-options-uk#bad-credit" className="text-[#1e40af] font-semibold hover:underline">what is realistic with a difficult credit history</Link>.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why the Treatment Price Matters</h2>
          <p>A full set of 20 veneers costs roughly £16,000–£20,000 at UK private prices and £3,800–£5,000 in Turkey. Whatever you decide about borrowing, a lower price means less to pay or to repay.</p>

          <FinanceDisclosure className="my-6" />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Start with a free veneer treatment plan</p>
            <p className="text-blue-200 text-sm mb-4">Know the full cost first. Borrowing is optional and approval is not guaranteed.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get My Free Plan</Link>
          </div>

          <div className="mt-6 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related pages:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ All dental finance options for UK patients</Link></li>
              <li><Link href="/monthly-payment" className="text-[#1e40af] hover:underline">→ Full monthly payment guide</Link></li>
              <li><Link href="/treatments/veneers-turkey" className="text-[#1e40af] hover:underline">→ Veneers Turkey treatment page</Link></li>
              <li><Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] hover:underline">→ Veneers Turkey cost guide</Link></li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/full-smile-makeover-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Full Smile Makeover</span>
              <span className="text-xs text-gray-500 mt-0.5">Veneers + more</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/monthly-payment" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Paying Monthly: What to Know</span>
              <span className="text-xs text-gray-500 mt-0.5">UK vs Turkey prices and what to know</span>
            </Link>
            <Link href="/prices/veneers-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">Prices & comparisons</span>
            </Link>
            <Link href="/finance-options-uk" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Finance & Payment Options</span>
              <span className="text-xs text-gray-500 mt-0.5">Payment plans, loans and what to check</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
