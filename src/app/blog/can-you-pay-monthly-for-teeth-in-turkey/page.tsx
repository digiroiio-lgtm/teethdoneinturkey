import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { REVIEWER_PERSON } from "@/lib/reviewer";
import FinanceDisclosure from "@/components/FinanceDisclosure";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: "Monthly Payment for Teeth in Turkey",
  description: "Some UK patients pay monthly for teeth done in Turkey. What to know about dental finance, payment plans and what to check before you borrow or sign.",
};

const faqs = [
  { q: "Can you pay monthly for teeth in Turkey?", a: "Some UK patients do, using credit arranged in the UK. Whether you are offered credit, and on what terms, is the lender's decision and depends on your circumstances. We introduce you to a credit broker if you ask; we do not lend." },
  { q: "Does applying affect my credit file?", a: "It depends on the check that is run. Some checks are soft searches and some applications are recorded on your credit file. Ask which applies before you proceed." },
  { q: "Can I still apply with a poor credit history?", a: "You can ask, but no one can promise approval. The lender decides based on your circumstances and its criteria. A deposit or a smaller treatment total means less is being borrowed." },
  { q: "Can I pay off early?", a: "Many credit agreements allow early repayment, sometimes with a charge. The exact terms are in the written agreement, so check them before you sign." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
        path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
        headline="Monthly Payment for Teeth in Turkey"
        description="Some UK patients pay monthly for teeth done in Turkey. What to know about dental finance, payment plans and what to check before you borrow or sign."
        datePublished="2026-01-01"
        dateModified="2026-10-29"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Monthly Payment for Teeth in Turkey", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
        ]}
              reviewer={REVIEWER_PERSON}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Teeth in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Last updated 29 October 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <p className="font-bold text-green-800 text-lg">Some UK patients spread the cost of treatment in Turkey</p>
            <p className="text-green-700 text-sm mt-1">Borrowing is optional. Credit is subject to status and the lender&apos;s approval, which is never guaranteed.</p>
          </div>

          <p>One of the most common barriers to getting dental treatment — even at significantly lower Turkish prices — is finding the upfront cost. Some people spread the cost with credit arranged in the UK and repaid over a term agreed with the lender. Others pay in full or use savings.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Monthly Payment for Turkey Dental Treatment Works</h2>
          <ol className="space-y-4 my-4">
            {[
              { title: "Get a written treatment plan", desc: "Start with a free personalised plan so you know the full cost before you decide whether to borrow." },
              { title: "Decide whether to borrow", desc: "You can pay in full, use savings, or arrange credit yourself. You are not required to use the broker we introduce." },
              { title: "Ask for an introduction", desc: "If you want to explore finance, we can introduce you to Ideal4Finance, a credit broker. We do not lend or give credit advice." },
              { title: "The broker and lender assess you", desc: "The lender decides whether to offer credit, and on what terms. Approval is not guaranteed." },
              { title: "Read the offer, then book", desc: "Check the APR, monthly payment, term, total repayable and cancellation terms in writing. Book your treatment once you are comfortable." },
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Decides a Monthly Payment</h2>
          <p>A monthly payment depends on the amount borrowed, the length of the agreement, the interest rate and any fees. A longer term usually lowers the monthly amount but can raise the total you repay, so compare the total repayable as well as the monthly figure. We do not publish monthly figures because they depend on the offer you receive.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why the Treatment Price Matters</h2>
          <p>Whatever you decide about borrowing, the treatment price sets how much you need to pay or borrow. For 20 veneers, UK private prices are roughly £16,000–£20,000, while the Turkey price is £3,800–£5,000. See the <Link href="/prices/turkey-teeth-cost" className="underline">Turkey teeth cost guide</Link> for the full breakdown. A smaller amount means a smaller sum to repay if you borrow.</p>

          <FinanceDisclosure className="my-6" />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQs About Monthly Payment</h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
          />
          <div className="space-y-3 my-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Start with a free treatment plan</p>
            <p className="text-blue-200 mb-4">Know the full cost first. Borrowing is optional and approval is not guaranteed.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get My Free Treatment Plan</Link>
          </div>

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">→ Turkey Teeth Cost: Complete 2026 Price Guide</Link></li>
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ Finance Options UK</Link></li>
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
              <span className="font-semibold text-gray-900 text-sm">Paying Monthly: What to Know</span>
              <span className="text-xs text-gray-500 mt-0.5">UK vs Turkey prices and what to know</span>
            </Link>
            <Link href="/prices/turkey-teeth-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">All treatment prices &amp; comparisons</span>
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
