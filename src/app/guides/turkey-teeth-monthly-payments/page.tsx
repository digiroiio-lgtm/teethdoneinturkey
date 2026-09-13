import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/turkey-teeth-monthly-payments`;
const TITLE = "How Much Are Turkey Teeth Per Month? UK Dental Finance & Payment Examples";
const H1 = "How Much Are Turkey Teeth Per Month?";
const DESCRIPTION =
  "Illustrative monthly payment examples for Turkey dental treatment from £3,000 to £8,000 — across 12, 18, 24 and 36-month plans, with 0% representative APR finance.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-monthly-payments" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "how-finance-works", label: "How 0% Finance Works" },
  { id: "payment-table-3000", label: "£3,000 Treatment" },
  { id: "payment-table-4500", label: "£4,500 Treatment" },
  { id: "payment-table-6000", label: "£6,000 Treatment" },
  { id: "payment-table-8000", label: "£8,000 Treatment" },
  { id: "eligibility", label: "Eligibility & Pre-Qualification" },
  { id: "faqs", label: "FAQs" },
];

const paymentRows3000 = [
  { term: "12 months", monthly: "£250/mo", total: "£3,000" },
  { term: "18 months", monthly: "£167/mo", total: "£3,000" },
  { term: "24 months", monthly: "£125/mo", total: "£3,000" },
  { term: "36 months", monthly: "£83/mo", total: "£3,000" },
];

const paymentRows4500 = [
  { term: "12 months", monthly: "£375/mo", total: "£4,500" },
  { term: "18 months", monthly: "£250/mo", total: "£4,500" },
  { term: "24 months", monthly: "£188/mo", total: "£4,500" },
  { term: "36 months", monthly: "£125/mo", total: "£4,500" },
];

const paymentRows6000 = [
  { term: "12 months", monthly: "£500/mo", total: "£6,000" },
  { term: "18 months", monthly: "£333/mo", total: "£6,000" },
  { term: "24 months", monthly: "£250/mo", total: "£6,000" },
  { term: "36 months", monthly: "£167/mo", total: "£6,000" },
];

const paymentRows8000 = [
  { term: "12 months", monthly: "£667/mo", total: "£8,000" },
  { term: "18 months", monthly: "£444/mo", total: "£8,000" },
  { term: "24 months", monthly: "£333/mo", total: "£8,000" },
  { term: "36 months", monthly: "£222/mo", total: "£8,000" },
];

function PaymentTable({ rows, label }: { rows: { term: string; monthly: string; total: string }[]; label: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
      <table className="w-full bg-white text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
            <th className="px-4 py-3 text-left font-semibold">{label}</th>
            <th className="px-4 py-3 text-right font-semibold">Monthly Payment</th>
            <th className="px-4 py-3 text-right font-semibold">Total Repaid</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 font-medium text-gray-800">{r.term}</td>
              <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.monthly}</td>
              <td className="px-4 py-3 text-right text-gray-700">{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs = [
  {
    question: "How much are Turkey teeth per month?",
    answer: "It depends on your treatment total and the finance term you choose. At 0% representative APR over 36 months: a £3,000 treatment is £83/month; £4,500 is £125/month; £6,000 is £167/month; £8,000 is £222/month. Shorter terms increase the monthly amount but reduce the total time to pay off. These are illustrative figures based on 0% APR — your actual monthly payment is confirmed after a soft-search pre-qualification.",
  },
  {
    question: "Is 0% finance really available for Turkey dental treatment?",
    answer: "Yes. 0% representative APR finance is available for treatment booked through this site, subject to a credit and affordability assessment. The representative APR means that 51% or more of successful applicants receive 0% — actual terms depend on your individual circumstances. A soft-search pre-qualification check lets you see an indicative decision without affecting your credit score.",
  },
  {
    question: "Does the finance cover flights and hotel as well as treatment?",
    answer: "The finance is structured around your treatment cost. Flights and hotel are typically paid separately and upfront. Some patients choose to add estimated travel costs to their financed amount — ask your treatment coordinator about this when you receive your personalised plan.",
  },
  {
    question: "What is the minimum monthly payment?",
    answer: "The minimum financed treatment amount and shortest available term will determine the lowest monthly payment. As a guide, financing £2,000 over 36 months at 0% APR results in approximately £56/month. The exact minimum is confirmed during the pre-qualification process.",
  },
  {
    question: "Will applying for finance affect my credit score?",
    answer: "The pre-qualification step uses a soft search, which does not appear on your credit file or affect your credit score. A hard search is only performed once you proceed to a formal application after receiving your indicative decision.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Turkey Teeth Monthly Payments", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkeyTeethMonthlyPaymentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Turkey Teeth Monthly Payments" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            If you know roughly what your Turkey dental treatment costs, this guide turns that total into a monthly payment — across 12, 18, 24 and 36-month terms with 0% representative APR finance.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            At 0% representative APR over 36 months: <strong>£3,000 treatment = £83/month</strong>; <strong>£4,500 = £125/month</strong>; <strong>£6,000 = £167/month</strong>; <strong>£8,000 = £222/month</strong>. Figures are illustrative based on 0% APR — actual terms are confirmed after a soft-search pre-qualification that does not affect your credit score.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "0% representative APR finance is available for treatment booked through this site, subject to credit and affordability assessment.",
              "Monthly payments are calculated on treatment cost — flights and hotel are usually paid separately.",
              "A soft-search pre-qualification check shows your indicative decision without affecting your credit score.",
              "Shorter terms (12 months) give higher monthly payments but clear the balance faster.",
              "36-month plans offer the lowest monthly payment — from approximately £83/month for a £3,000 treatment.",
            ]}
          />

          <h2 id="how-finance-works" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How 0% Finance Works</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            0% representative APR finance means you repay exactly what you borrow — no interest added. The &ldquo;representative&rdquo; qualifier means that 51% or more of successful applicants receive the 0% rate; actual terms depend on individual credit and affordability assessment. Finance is arranged through a FCA-regulated provider. A{" "}
            <strong>soft search pre-qualification</strong> is available to check your indicative decision before a formal application is submitted — this does not affect your credit score.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For per-treatment monthly figures (e.g., what does a single implant cost per month), see the{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">Monthly Payment page</Link>. This guide focuses on converting a known treatment total into monthly payment options.
          </p>

          <h2 id="payment-table-3000" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">£3,000 Treatment — Monthly Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-2 text-sm text-gray-500 italic">
            Illustrative figures based on 0% representative APR. Actual terms confirmed after pre-qualification.
          </p>
          <PaymentTable rows={paymentRows3000} label="Finance Term" />

          <h2 id="payment-table-4500" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">£4,500 Treatment — Monthly Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-2 text-sm text-gray-500 italic">
            Illustrative figures based on 0% representative APR. Actual terms confirmed after pre-qualification.
          </p>
          <PaymentTable rows={paymentRows4500} label="Finance Term" />

          <h2 id="payment-table-6000" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">£6,000 Treatment — Monthly Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-2 text-sm text-gray-500 italic">
            Illustrative figures based on 0% representative APR. Actual terms confirmed after pre-qualification.
          </p>
          <PaymentTable rows={paymentRows6000} label="Finance Term" />

          <h2 id="payment-table-8000" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">£8,000 Treatment — Monthly Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-2 text-sm text-gray-500 italic">
            Illustrative figures based on 0% representative APR. Actual terms confirmed after pre-qualification.
          </p>
          <PaymentTable rows={paymentRows8000} label="Finance Term" />

          <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Eligibility &amp; Pre-Qualification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To apply for dental finance you need to be: a UK resident, aged 18 or over, and able to pass a credit and affordability assessment. The pre-qualification step is a soft credit search — it does not appear on your credit file and does not affect your credit score. A formal application (hard search) is only submitted once you choose to proceed after seeing your indicative decision.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For full details of available finance options, eligibility criteria and how to apply, see{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">Dental Finance Options UK</Link>.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Teeth Monthly Payments: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "FCA: Consumer credit regulations", href: "https://www.fca.org.uk/consumers/credit" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Monthly Payment", desc: "Per-treatment monthly figures: veneers, implants, All-on-4.", href: "/monthly-payment" },
            { title: "Dental Finance Options UK", desc: "How 0% finance works, eligibility and how to apply.", href: "/finance-options-uk" },
            { title: "Turkey Teeth Cost in Pounds", desc: "What your GBP budget can get you in Turkey.", href: "/guides/turkey-teeth-cost-in-pounds" },
            { title: "Price Calculator", desc: "Build your own treatment estimate and see monthly figures.", href: "/price-calculator" },
          ]}
        />
      </div>

      <CTASection
        title="See Your Monthly Payment"
        subtitle="Get a free personalised treatment plan with an exact monthly payment figure — based on your specific treatment and a 0% APR pre-qualification."
        buttonText="Check My Monthly Payment"
        buttonHref="/monthly-payment"
        whatsapp={true}
      />
    </>
  );
}
