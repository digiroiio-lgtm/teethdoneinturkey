import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import GuideTOC from "@/components/GuideTOC";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";

export const revalidate = 86400;

// Repositioned 2026-09-14 on the queries this URL actually ranks for.
//
// Over 2026-08-18..09-14 this page held 11 pay-monthly queries at positions
// 7.4-11.1 on ~54 impressions — the single largest striking-distance block on
// the property, and top of the FINANCE priority hierarchy. The recorded wording
// is "pay monthly turkey teeth" (14 impr), "turkey teeth pay monthly" (9),
// "pay monthly teeth turkey" (8), "can you pay monthly for turkey teeth" (5,
// position 7.4 — the best position on the page), "can you get your teeth done
// in turkey on finance" (5), "turkey teeth packages pay monthly" (5), "turkey
// teeth monthly payments" (3), "turkey teeth cost pay monthly" (2).
//
// The title read "Monthly Payment for Teeth in Turkey" — it carried neither
// "pay monthly" nor "Turkey teeth", the two phrases every one of those queries
// is built from. Retitled on the recorded phrasing; the H1 keeps its question
// form because the question-form query holds the best position of the set.
//
// The URL is deliberately unchanged. It is the ranking asset, and moving demand
// to a URL we prefer is what caused the 2026-09-08 regression.
const TITLE = "Pay Monthly for Turkey Teeth: UK Finance Plans 2026";
const DESCRIPTION =
  "Yes — you can pay monthly for Turkey teeth. How UK dental finance works, what each treatment and package costs per month, eligibility, and worked 0% APR examples.";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "how-it-works", label: "How Paying Monthly Works" },
  { id: "cost-per-month", label: "Cost Per Month by Treatment" },
  { id: "packages-pay-monthly", label: "Packages Pay Monthly" },
  { id: "on-finance", label: "Teeth Done in Turkey on Finance" },
  { id: "payment-plan", label: "Payment Plan vs Dental Loan" },
  { id: "example-scenario", label: "Example Treatment Scenario" },
  { id: "eligibility", label: "Eligibility" },
  { id: "uk-comparison", label: "Turkey vs UK Monthly Cost" },
];

// Every treatment price below is the figure published on /prices/turkey-teeth-cost,
// the site's canonical price page. Monthly figures are that price divided by the
// term at 0% representative APR, rounded to the nearest pound — deliberately not
// a quote, and never presented as one.
const monthlyRows = [
  { t: "Zirconia crown (per tooth)", cost: "£130", m12: "£11", m24: "£5", m36: "£4" },
  { t: "Porcelain (E-max) veneer (per tooth)", cost: "From £190", m12: "£16", m24: "£8", m36: "£5" },
  { t: "Dental implant (Osstem, + crown)", cost: "From £250", m12: "£21", m24: "£10", m36: "£7" },
  { t: "10 veneers", cost: "£1,900", m12: "£158", m24: "£79", m36: "£53" },
  { t: "20 veneers (full set)", cost: "£3,800", m12: "£317", m24: "£158", m36: "£106" },
  { t: "Full smile makeover", cost: "From £3,500", m12: "£292", m24: "£146", m36: "£97" },
  { t: "All-on-4 (one arch)", cost: "From £4,500", m12: "£375", m24: "£188", m36: "£125" },
  { t: "All-on-6 (one arch)", cost: "From £5,600", m12: "£467", m24: "£233", m36: "£156" },
  { t: "All-on-4, both arches", cost: "From £9,000", m12: "£750", m24: "£375", m36: "£250" },
];

// Package prices are all-inclusive of hotel and transfers, per the canonical
// price page. Listed separately from the per-treatment table because
// "turkey teeth packages pay monthly" is a distinct recorded query.
const packageRows = [
  { p: "Hollywood Smile — 20 zirconia crowns", cost: "£2,800", m12: "£233", m24: "£117", m36: "£78" },
  { p: "Hollywood Smile — 24 zirconia crowns", cost: "£3,100", m12: "£258", m24: "£129", m36: "£86" },
  { p: "Full set — 20 E-max veneers", cost: "£3,800", m12: "£317", m24: "£158", m36: "£106" },
  { p: "All-on-4 full arch (per arch)", cost: "From £4,500", m12: "£375", m24: "£188", m36: "£125" },
  { p: "All-on-6 full arch (per arch)", cost: "From £5,600", m12: "£467", m24: "£233", m36: "£156" },
];

const steps = [
  {
    title: "Pre-qualify online (about 60 seconds)",
    desc: "A pre-qualification form runs a soft credit search, which does not affect your credit score. It shows which lenders are likely to consider you and on what terms. It is an indication, not an approval.",
  },
  {
    title: "Get your treatment plan and price",
    desc: "You need a figure to finance. A treatment plan based on your photos or x-rays sets the treatment cost, so you know whether you are borrowing £2,800 or £9,000 before you apply.",
  },
  {
    title: "Choose a deposit and term",
    desc: "Most plans run over 12, 24 or 36 months. A larger deposit reduces the amount financed and the monthly figure. Deposit requirements vary by lender and by the amount borrowed.",
  },
  {
    title: "Complete the full application",
    desc: "The lender runs a full credit check, which leaves a footprint on your credit file, and makes the approval decision. Approval is never guaranteed and is not made by the clinic or by us.",
  },
  {
    title: "Book treatment, repay from the UK",
    desc: "With finance in place you book your treatment dates. The finance agreement is UK-based and separate from the clinic: repayments are taken by direct debit from your UK bank account on your agreed date.",
  },
];

const faqs = [
  {
    question: "Can you pay monthly for Turkey teeth?",
    answer:
      "Yes. UK patients normally fund treatment in Turkey with a UK finance agreement — a dental payment plan or a personal/medical loan — taken out before travelling, then repaid by monthly direct debit from a UK bank account. The clinic itself is paid in Turkey; the monthly payments are to the UK lender, not the clinic. All plans are subject to a credit check and lender approval.",
  },
  {
    question: "Can you get your teeth done in Turkey on finance?",
    answer:
      "Yes, but the finance is arranged in the UK rather than by the Turkish clinic. Turkish dental clinics are not UK-regulated credit providers, so they cannot offer UK consumer credit. What UK patients use instead is a dental payment plan from an FCA-authorised provider or a personal loan from a UK bank, taken out in advance and used to pay the clinic.",
  },
  {
    question: "How much are Turkey teeth per month?",
    answer:
      "It depends on the treatment and the term. At 0% representative APR with no deposit, a 20-crown Hollywood Smile package at £2,800 works out at about £233 a month over 12 months, £117 over 24 months or £78 over 36 months. A full set of 20 E-max veneers at £3,800 is about £317, £158 or £106 on the same terms. An All-on-4 arch from £4,500 is about £375, £188 or £125. These are illustrative calculations, not quotes.",
  },
  {
    question: "Can you get Turkey teeth on a payment plan?",
    answer:
      "Yes. A dental payment plan is the most common route: a fixed-term credit agreement, often at 0% representative APR over shorter terms, arranged through an FCA-authorised provider before you travel. The alternatives are a personal or medical loan from a bank, or a 0% purchase credit card. Each has different eligibility rules, and none of them approves everyone.",
  },
  {
    question: "Is 0% interest actually available?",
    answer:
      "0% representative APR plans exist, but 'representative' has a specific meaning: at least 51% of accepted applicants must get the advertised rate, so some accepted applicants are offered a higher one. The rate you are offered depends on your credit profile, the amount and the term. Longer terms are less likely to be available at 0%. Always check the total amount repayable on your credit agreement before signing.",
  },
  {
    question: "Does applying affect my credit score?",
    answer:
      "Pre-qualification uses a soft search, which only you can see and which does not affect your score. A full application uses a hard search, which is recorded on your credit file and is visible to other lenders for up to two years. Multiple full applications in a short period can make you look higher-risk, so pre-qualify first.",
  },
  {
    question: "Can I get Turkey teeth on finance with bad credit?",
    answer:
      "It is harder and it is not guaranteed. Some lenders specialise in applicants with impaired credit, but they typically charge a higher APR, may require a larger deposit, and may lend less. A default, CCJ or recent missed payments reduce the chance of approval. Nobody can promise approval before a lender has assessed your application — treat any guarantee of acceptance as a warning sign.",
  },
  {
    question: "Can I pay the deposit now and the balance monthly?",
    answer:
      "That is how most plans are structured. You pay a deposit, the lender finances the balance, and the monthly figure is calculated on the financed amount rather than the full treatment price. A larger deposit lowers the monthly payment and can improve the chance of approval, because you are asking to borrow less.",
  },
  {
    question: "Can I repay early?",
    answer:
      "Regulated credit agreements in the UK give you a statutory right to settle early, and on a 0% agreement there is no interest to save or lose by doing so. Some interest-bearing agreements allow the lender to charge up to 58 days' interest on early settlement. Your specific terms are set out in the credit agreement before you sign.",
  },
];

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <>
      <article className="py-16 bg-white">
        <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
        path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-01-01"
        dateModified="2026-09-14"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Pay Monthly for Turkey Teeth", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Turkey Teeth?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Updated 14 September 2026 · 9 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-900 text-lg mb-2">Short answer</p>
            <p className="text-green-900">
              Yes — you can pay monthly for teeth done in Turkey, but the finance is arranged in the{" "}
              <strong>UK</strong>, not by the Turkish clinic. You take out a UK dental payment plan or loan before you
              travel, the clinic is paid in Turkey, and you repay the UK lender by monthly direct debit. At 0%
              representative APR a £2,800 20-crown package is about <strong>£78 a month over 36 months</strong>; a
              £3,800 full set of veneers is about <strong>£106</strong>. All plans are subject to a credit check and
              lender approval, and not everyone will qualify.
            </p>
          </div>

          <KeyTakeaways
            items={[
              "Turkish clinics cannot offer UK consumer credit — the payment plan is a separate UK agreement taken out before you travel.",
              "Monthly cost depends on treatment price, deposit and term: £2,800 over 36 months is roughly £78/month at 0% representative APR.",
              "Pre-qualification uses a soft credit search and does not affect your score; the full application uses a hard search and does.",
              "0% is a representative rate, not a promise — at least 51% of accepted applicants get it, the rest are offered a higher APR.",
              "Bad credit does not rule you out, but it means a higher APR, a larger deposit or refusal. No provider can guarantee approval.",
            ]}
          />

          <GuideTOC items={toc} />

          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            How Paying Monthly for Turkey Dental Treatment Works
          </h2>
          <p>
            The part that confuses most UK patients is <em>who</em> they are paying monthly. It is not the clinic. A
            Turkish dental clinic is not an FCA-authorised credit provider and cannot lend to UK consumers, so
            &ldquo;Turkey teeth on finance&rdquo; in practice means a UK credit agreement arranged before you fly, used
            to pay the clinic in full. The five stages are:
          </p>
          <ol className="space-y-4 my-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-3 list-none">
                <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="cost-per-month" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Turkey Teeth Pay Monthly: What Each Treatment Costs Per Month
          </h2>
          <p>
            Every price below is the treatment price published on our{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">
              Turkey teeth cost guide
            </Link>
            . The monthly columns divide that price across the term at 0% representative APR with no deposit, rounded to
            the nearest pound. They are worked examples so you can see the shape of the numbers — not quotes, and not an
            offer of credit.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Treatment price</th>
                  <th className="px-4 py-3 text-right">12 mo.</th>
                  <th className="px-4 py-3 text-right">24 mo.</th>
                  <th className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {monthlyRows.map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m12}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m24}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Illustrative calculations at 0% representative APR, no deposit, rounded to the nearest pound — the final
            instalment adjusts to clear the balance exactly. Not a quotation and not an offer of credit. Finance is
            subject to status, credit check and lender approval; the rate and term you are offered may differ.
          </p>
          <p>
            Very small amounts are worth a sanity check rather than a credit agreement: financing a single £130 crown
            over three years to save £4 a month is rarely sensible, and most lenders set a minimum advance well above
            that. Monthly payment plans earn their place on the four-figure treatments.
          </p>

          <h2 id="packages-pay-monthly" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Turkey Teeth Packages Pay Monthly
          </h2>
          <p>
            Most UK patients do not buy teeth one at a time — they buy a package, and packages are what the monthly
            figures below are built on. A Turkey dental package bundles the treatment with hotel nights and airport
            transfers at one all-inclusive price, so the number you finance is closer to the number you actually spend.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-right">All-in price</th>
                  <th className="px-4 py-3 text-right">12 mo.</th>
                  <th className="px-4 py-3 text-right">24 mo.</th>
                  <th className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={r.p} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.p}</td>
                    <td className="px-4 py-3 text-right">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m12}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m24}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
              <p className="font-bold text-green-900 text-sm mb-2">Normally in the package price</p>
              <ul className="text-sm text-green-900 space-y-1 list-disc list-inside">
                <li>Consultation, x-rays and treatment plan</li>
                <li>The treatment itself and the materials</li>
                <li>Hotel nights for the treatment stay</li>
                <li>Airport and clinic transfers</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="font-bold text-amber-900 text-sm mb-2">Normally not in the package price</p>
              <ul className="text-sm text-amber-900 space-y-1 list-disc list-inside">
                <li>Flights from the UK</li>
                <li>Extractions, bone grafts and sinus lifts</li>
                <li>Extra nights if treatment runs long</li>
                <li>The second trip for implant crowns</li>
              </ul>
            </div>
          </div>
          <p>
            That second column is the one that ruins budgets. If you are financing a package, finance the realistic
            total rather than the headline price — see{" "}
            <Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] font-semibold hover:underline">
              what Turkey teeth packages include
            </Link>{" "}
            for the full checklist before you commit to a figure.
          </p>

          <h2 id="on-finance" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Can You Get Your Teeth Done in Turkey on Finance?
          </h2>
          <p>
            Yes — and the distinction that matters is that the credit is UK credit. A Turkish clinic quoting you a
            monthly figure is describing a UK finance agreement arranged on your behalf, not lending you the money
            itself. Three practical consequences follow:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>
              <strong>You apply before you travel.</strong> The clinic expects payment at or around treatment, so the
              agreement needs to be in place first. Leaving it until you land is how people end up on a credit card at
              20%+ APR.
            </li>
            <li>
              <strong>Your consumer protection is UK protection.</strong> A regulated credit agreement gives you the
              statutory cooling-off period and early-settlement rights. It does not, however, give you a remedy against
              the Turkish clinic for clinical outcomes — that is a separate question, and one reason to read our guide
              to the{" "}
              <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">
                risks of Turkey teeth
              </Link>{" "}
              before you book.
            </li>
            <li>
              <strong>You are borrowing the full amount, not the saving.</strong> Turkey being 70% cheaper does not make
              the loan smaller in isolation — it makes it a four-figure loan instead of a five-figure one.
            </li>
          </ul>

          <h2 id="payment-plan" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Can You Get Turkey Teeth on a Payment Plan?
          </h2>
          <p>
            &ldquo;Payment plan&rdquo;, &ldquo;dental finance&rdquo; and &ldquo;loan&rdquo; get used interchangeably,
            but they are different products with different eligibility rules:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Option</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Watch for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Dental payment plan</td>
                  <td className="px-4 py-3">Fixed-term credit from an FCA-authorised provider, often 0% representative APR over shorter terms.</td>
                  <td className="px-4 py-3">Deposit requirements; 0% may not extend to the longest terms.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Personal or medical loan</td>
                  <td className="px-4 py-3">Borrow from a bank, pay the clinic yourself. Usually the largest amounts and longest terms.</td>
                  <td className="px-4 py-3">Interest-bearing; the advertised APR is representative, not guaranteed.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">0% purchase credit card</td>
                  <td className="px-4 py-3">Interest-free for a promotional window, then the standard rate applies.</td>
                  <td className="px-4 py-3">Credit limits are often below treatment cost; the rate after the window is high.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Deposit plus staged payment</td>
                  <td className="px-4 py-3">Pay a deposit to book, the balance at treatment. Not credit, so no credit check.</td>
                  <td className="px-4 py-3">You still need the balance in full — this defers the cost, it does not spread it.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Which of these you can realistically get is a credit question rather than a dental one. Our{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">
              UK dental finance guide
            </Link>{" "}
            covers eligibility, APR and what to do if you have been declined, including options for applicants with
            impaired credit.
          </p>

          <h2 id="example-scenario" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Example Treatment Scenario
          </h2>
          <p className="text-sm text-gray-500">
            Illustrative only. This is a worked calculation, not a real patient and not a quotation.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-4">
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Treatment</dt>
                <dd className="font-semibold text-gray-900">20 zirconia crowns</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Package price</dt>
                <dd className="font-semibold text-gray-900">£2,800</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Deposit</dt>
                <dd className="font-semibold text-gray-900">£500</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Amount financed</dt>
                <dd className="font-semibold text-gray-900">£2,300</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Term</dt>
                <dd className="font-semibold text-gray-900">24 months</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Rate</dt>
                <dd className="font-semibold text-gray-900">0% APR representative</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Monthly payment</dt>
                <dd className="font-bold text-[#1e40af]">£95.83</dd>
              </div>
              <div className="flex justify-between border-b border-blue-200/60 py-1">
                <dt className="text-gray-600">Total amount repayable</dt>
                <dd className="font-semibold text-gray-900">£2,300</dd>
              </div>
              <div className="flex justify-between py-1 sm:col-span-2">
                <dt className="text-gray-600">Total paid including deposit</dt>
                <dd className="font-semibold text-gray-900">£2,800</dd>
              </div>
            </dl>
            <p className="text-xs text-gray-600 mt-3">
              Flights are not included in the package price and are not financed in this example. At 0% APR the total
              repayable equals the amount borrowed; on an interest-bearing agreement it would be higher. Eligibility,
              deposit, term and rate are set by the lender after a credit assessment. This is not a credit offer, and
              not everyone will qualify.
            </p>
          </div>

          <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Eligibility: Who Can Get Turkey Teeth on Finance?
          </h2>
          <p>
            Lenders set their own criteria and none of them publishes a pass mark, but UK dental finance applications
            are generally assessed on the same handful of things:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li><strong>Age and residency</strong> — typically 18 or over and a UK resident, with several years of UK address history.</li>
            <li><strong>Income and affordability</strong> — the lender must check the repayment is affordable alongside your existing commitments, not just that you want it.</li>
            <li><strong>Credit history</strong> — recent missed payments, defaults, CCJs or an active IVA or bankruptcy materially reduce the chance of approval.</li>
            <li><strong>Amount and term</strong> — a smaller advance with a larger deposit is easier to get approved than the maximum over the longest term.</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4">
            <p className="text-sm text-amber-900">
              <strong>No one can guarantee approval.</strong> Any provider promising guaranteed acceptance, or claiming
              everyone qualifies regardless of credit history, is not describing a regulated UK credit product. Check
              that a provider is authorised on the{" "}
              <a href="https://www.fca.org.uk/consumers/credit" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] font-semibold hover:underline">
                FCA&rsquo;s consumer credit pages
              </a>{" "}
              before you hand over any details.
            </p>
          </div>

          <h2 id="uk-comparison" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            Even With Finance, Turkey Is Cheaper Per Month Than the UK
          </h2>
          <p>
            Financing does not change which country is cheaper — it changes how visible the difference is. A full set of
            20 veneers costs £3,800 in Turkey against roughly £18,000 at UK private prices. Spread over the same 36
            months at 0%:
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
              <p className="text-xs text-gray-500 mb-1">UK (financed, 36 months)</p>
              <p className="text-2xl font-extrabold text-red-500">£500/mo</p>
              <p className="text-xs text-gray-400">Based on £18,000 over 36 months</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Turkey (financed, 36 months)</p>
              <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
              <p className="text-xs text-gray-400">Based on £3,800 over 36 months</p>
            </div>
          </div>
          <p>
            The honest caveat: the UK figure assumes private treatment. NHS band charges are far lower, and if you are
            eligible for NHS treatment that is nearly always the cheaper route — cosmetic veneers and crowns, however,
            are not generally available on the NHS. The realistic comparison for most people considering Turkey is
            against UK private prices, which is what the figures above use. Add UK flights of roughly £150&ndash;£400
            per person to the Turkey side before you decide.
          </p>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your treatment price first</p>
            <p className="text-blue-200 mb-4">
              You cannot work out a monthly payment until you know what you are financing. A free treatment plan gives
              you the figure, with no obligation and no credit check.
            </p>
            <Link href="/free-treatment-plan" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Get My Free Treatment Plan
            </Link>
          </div>
        </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Paying Monthly for Turkey Teeth: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SourcesList
          sources={[
            { label: "FCA — Credit and borrowing", href: "https://www.fca.org.uk/consumers/credit" },
            { label: "NHS — How much will I pay for NHS dental treatment?", href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/how-much-will-i-pay-for-nhs-dental-treatment/" },
            { label: "NHS — Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Explore Further"
          links={[
            { title: "UK Dental Finance Options", desc: "Eligibility, APR, and what to do if you have been declined.", href: "/finance-options-uk" },
            { title: "Turkey Teeth Monthly Payments", desc: "Cost per month broken down treatment by treatment.", href: "/monthly-payment" },
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Every treatment price on one page, with UK comparisons.", href: "/prices/turkey-teeth-cost" },
            { title: "Turkey Teeth Packages", desc: "What is and is not included in an all-inclusive package.", href: "/guides/turkey-teeth-packages" },
            { title: "Pay Monthly for Veneers", desc: "Veneer-specific finance figures and terms.", href: "/blog/can-you-pay-monthly-for-veneers-turkey" },
            { title: "Can't Afford Dental Treatment in the UK?", desc: "NHS charges, private costs and finance, in decision order.", href: "/guides/cant-afford-dental-treatment-uk" },
          ]}
        />
      </div>
    </>
  );
}
