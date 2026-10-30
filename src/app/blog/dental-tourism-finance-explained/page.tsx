import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";
import { REVIEWER_PERSON } from "@/lib/reviewer";
import FinanceDisclosure from "@/components/FinanceDisclosure";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/dental-tourism-finance-explained" },
  title: "Dental Tourism Finance Explained – UK",
  description: "How dental tourism finance works for UK patients: how to fund dental treatment abroad, from monthly payment plans to medical loans.",
};

const faqs = [
  {
    question: "How does dental finance work if I get treatment abroad?",
    answer: "You borrow in the UK, in pounds, from a UK lender, and repay monthly from your UK bank account. The money pays your clinic in Turkey and the finance agreement is separate from the treatment contract. Options include dental finance plans, personal loans, 0% purchase credit cards and savings. Approval depends on a credit check and is never guaranteed.",
  },
  {
    question: "Is dental finance for treatment abroad regulated in the UK?",
    answer: "Consumer credit from a UK lender is regulated by the Financial Conduct Authority, so check that the lender is FCA authorised and read the credit agreement for the APR, total cost of credit and early repayment terms. The treatment itself is carried out by a Turkish clinic and is not covered by UK dental regulation.",
  },
  {
    question: "Does applying for dental finance affect my credit score?",
    answer: "Some eligibility checks are soft searches that other lenders cannot see, while a full application usually involves a hard search that is recorded on your credit file. Ask which applies before you proceed, and only continue once you are happy with the terms shown.",
  },
  {
    question: "Which is cheaper: a dental finance plan, a loan or a credit card?",
    answer: "A 0% purchase credit card costs nothing extra if you repay within the promotional period, and some payment plans may also be interest-free depending on the lender. A personal loan is useful for larger amounts or longer terms but charges interest. Compare the representative APR and total amount payable, not just the monthly payment.",
  },
];

export default function DentalTourismFinancePage() {
  return (
    <>
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-dental-tourism-finance-explained"
        path="/blog/dental-tourism-finance-explained"
        headline="Dental Tourism Finance Explained – UK"
        description="How dental tourism finance works for UK patients: how to fund dental treatment abroad, from monthly payment plans to medical loans."
        datePublished="2026-01-01"
        dateModified="2026-10-29"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Dental Tourism Finance Explained – UK", path: "/blog/dental-tourism-finance-explained" },
        ]}
              reviewer={REVIEWER_PERSON}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Tourism Finance Explained: A UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Last updated 29 October 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Short answer:</strong> dental finance for treatment abroad works like any UK credit: you borrow in pounds from a UK lender and repay monthly from your UK bank account, while the funds pay your clinic in Turkey. The main routes are a dental finance plan, a personal loan, a credit card or savings. Approval depends on a credit check and is never guaranteed.</p>

          <p>Dental tourism offers remarkable savings — but even the reduced costs of treatment in Turkey can represent a significant sum for many UK patients. Some patients bridge the gap with credit, while others pay from savings. Borrowing is a serious decision, so compare the total cost of each route.</p>
          <p>This guide explains the different funding options, how each works and what to compare. It is general information, not advice on which option is right for you.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 1: Dental Finance Plans</h2>
          <p>Specialist dental tourism finance plans are designed specifically for patients funding treatment abroad. These are UK-based credit products, and the lender should be authorised by the FCA. Check the FCA Register.</p>
          <p><strong>How it works:</strong> You apply for a personal loan or credit facility in the UK, denominated in GBP. The funds are used to cover your treatment in Turkey. You repay monthly from your UK bank account.</p>
          <p>For UK-specific detail on this route, including what to check and the honest position on a difficult credit history, see our{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">dental finance UK guide</Link>.</p>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200 my-4">
            <h3 className="font-bold text-green-800 mb-2">✓ Advantages</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ Fixed monthly payments over an agreed term</li>
              <li>→ Eligibility checks vary; ask whether a check is recorded on your credit file</li>
              <li>→ Interest, fees and approval depend on the lender and your circumstances</li>
              <li>→ Repayments in GBP, so no currency risk on the credit</li>
              <li>→ Check that the lender is FCA authorised on the FCA register</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 2: Personal Loan</h2>
          <p>A standard personal loan from a UK bank or online lender can be used to fund any purpose, including dental treatment abroad. Rates vary significantly based on your credit profile and the lender.</p>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 my-4">
            <h3 className="font-bold text-gray-900 mb-2">Key facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ Loan amounts typically £1,000–£25,000</li>
              <li>→ Terms of 12–60 months</li>
              <li>→ Rates vary widely with your credit profile; compare the representative APR</li>
              <li>→ Fixed monthly payments throughout the term</li>
              <li>→ Hard credit check required for full application</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 3: Medical Credit Cards</h2>
          <p>Some patients use 0% purchase credit cards to spread the cost of dental treatment. If you can repay within the 0% promotional period (typically 12–24 months), this can be a cost-effective option.</p>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 my-4">
            <h3 className="font-bold text-gray-900 mb-2">Key facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ 0% on purchases for 12–24 months on leading cards</li>
              <li>→ Must repay before promotional period ends to avoid high standard rate</li>
              <li>→ Credit limit determines maximum treatment cost coverable</li>
              <li>→ Widely available to those with good credit</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 4: Saving Up</h2>
          <p>For patients with time flexibility, saving for treatment is the lowest-cost option as it avoids interest entirely. Given the dramatically lower costs in Turkey compared to the UK, saving for Turkish dental treatment is often far more achievable than for UK private treatment on the same timeline.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Comparing Finance Options</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Option</th>
                  <th className="px-4 py-3 text-center">Speed</th>
                  <th className="px-4 py-3 text-center">0% Available</th>
                  <th className="px-4 py-3 text-center">Bad Credit</th>
                  <th className="px-4 py-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { opt: "Dental Finance Plan", speed: "Varies by lender", zero: "Depends on lender", bad: "Lender's decision", best: "Spreading one treatment" },
                  { opt: "Personal Loan", speed: "1–3 days", zero: "✗", bad: "Limited", best: "Good credit / larger amounts" },
                  { opt: "0% Credit Card", speed: "1–2 days", zero: "✓", bad: "✗", best: "Good credit, repaying quickly" },
                  { opt: "Savings", speed: "Months", zero: "N/A", bad: "No credit check", best: "No urgency, avoid interest" },
                ].map((r, i) => (
                  <tr key={r.opt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.opt}</td>
                    <td className="px-4 py-3 text-center">{r.speed}</td>
                    <td className="px-4 py-3 text-center">{r.zero}</td>
                    <td className="px-4 py-3 text-center">{r.bad}</td>
                    <td className="px-4 py-3 text-center text-xs">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Considerations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Always borrow responsibly</strong> — ensure monthly repayments are comfortable within your budget before committing</li>
            <li><strong>Read the credit agreement</strong> — understand APR, total cost of credit, and early repayment terms before signing</li>
            <li><strong>Your home is not at risk</strong> — dental finance plans are unsecured personal credit, not secured against your property</li>
            <li><strong>Finance does not affect your Turkey treatment</strong> — your clinic in Turkey is paid normally; finance is a UK-side arrangement</li>
          </ul>

          <SourcesList
            introduction="Regulator guidance on dental treatment abroad. It does not endorse this site or any lender."
            sources={[
              { label: "General Dental Council: going abroad for dental treatment", href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
              { label: "Financial Conduct Authority: check the FCA Register", href: "https://register.fca.org.uk/" },
            ]}
          />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Start with a free treatment plan</p>
            <p className="text-blue-200 mb-4">Know the full cost first. Borrowing is optional and approval is not guaranteed.</p>
            <FinanceDisclosure className="mb-4 text-gray-700" />
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get My Free Plan</Link>
              <Link href="/monthly-payment" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Paying Monthly: What to Know</Link>
            </div>
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
    <FAQSection faqs={faqs} title="Dental Finance Abroad: FAQs" />
    </>
  );
}
