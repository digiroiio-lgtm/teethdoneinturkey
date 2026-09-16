import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQSection from "@/components/FAQSection";

export const revalidate = 86400;

// Positioned on recorded Search Console demand (2026-08-20..09-15). This URL is
// the property's strongest asset: 141 impressions in the 7 days to 09-15 at
// average position 10.6, held between 9 and 14 since it entered the SERP on
// 09-07. Its single biggest query is "turkey teeth packages pay monthly"
// (23 impr @ 11.3), a packages x finance hybrid the page did not answer at all
// — the word "package" did not previously appear on it. The same query also
// lands on /prices/turkey-teeth-cost (7 @ 11.0) and /finance-options-uk
// (1 @ 20.0), so the intent is split three ways.
//
// MERGE-AVOID, not NEW PAGE: the packages query is already split across seven
// URLs. The fix is to answer the hybrid intent on the URL Google already ranks,
// not to add an eighth. The H1 and the URL are deliberately unchanged — they
// are the ranking asset and carry the page's only recorded click.
const TITLE = "Pay Monthly Turkey Teeth: Packages & Costs 2026";
const DESCRIPTION =
  "Turkey teeth packages start at £2,800. See what each package costs per month over 12, 24 or 36 months, with deposit examples, APR and total repayable.";
const DATE_PUBLISHED = "2026-01-01";
const DATE_MODIFIED = "2026-09-16";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// Package prices are the canonical figures published on /prices/turkey-teeth-cost.
// Deposit is 10% of the package price; the financed balance is the remainder.
// Monthly figures are the financed balance divided by the term — i.e. the 0% APR
// case — and are labelled as such everywhere they appear.
const packageRows = [
  { pkg: "Hollywood Smile — 20 zirconia crowns", price: "£2,800", deposit: "£280", financed: "£2,520", m12: "£210", m24: "£105", m36: "£70" },
  { pkg: "Hollywood Smile — 24 zirconia crowns", price: "£3,100", deposit: "£310", financed: "£2,790", m12: "£232.50", m24: "£116.25", m36: "£77.50" },
  { pkg: "Full set — 20 E-max veneers", price: "£3,800", deposit: "£380", financed: "£3,420", m12: "£285", m24: "£142.50", m36: "£95" },
  { pkg: "All-on-4 — one arch", price: "£4,500", deposit: "£450", financed: "£4,050", m12: "£337.50", m24: "£168.75", m36: "£112.50" },
  { pkg: "All-on-6 — one arch", price: "£5,600", deposit: "£560", financed: "£5,040", m12: "£420", m24: "£210", m36: "£140" },
  { pkg: "All-on-4 — both arches", price: "£9,000", deposit: "£900", financed: "£8,100", m12: "£675", m24: "£337.50", m36: "£225" },
];

// The same balances at 12.9% APR representative, amortised over 36 months. This
// is the non-0% case, shown because 0% is not offered to every applicant.
const aprRows = [
  { pkg: "Hollywood Smile — 20 crowns", financed: "£2,520", monthly: "£84.79", repayable: "£3,052.35", interest: "£532.35" },
  { pkg: "Full set — 20 E-max veneers", financed: "£3,420", monthly: "£115.07", repayable: "£4,142.47", interest: "£722.47" },
  { pkg: "All-on-4 — one arch", financed: "£4,050", monthly: "£136.27", repayable: "£4,905.56", interest: "£855.56" },
  { pkg: "All-on-6 — one arch", financed: "£5,040", monthly: "£169.57", repayable: "£6,104.70", interest: "£1,064.70" },
  { pkg: "All-on-4 — both arches", financed: "£8,100", monthly: "£272.53", repayable: "£9,811.12", interest: "£1,711.12" },
];

const scenarioTerms = [
  { term: "6 months", monthly: "£583.33" },
  { term: "12 months", monthly: "£291.67" },
  { term: "18 months", monthly: "£194.44" },
  { term: "24 months", monthly: "£145.83" },
  { term: "36 months", monthly: "£97.22" },
];

const faqs = [
  {
    question: "Can you pay monthly for Turkey teeth?",
    answer:
      "Yes. UK patients normally pay for treatment in Turkey using UK-based finance — a personal loan or a dedicated dental finance agreement taken out in the UK — rather than a payment plan run by the Turkish clinic. The clinic is paid for the treatment, and you repay the UK lender monthly by direct debit from your UK bank account. Finance is subject to a credit check and lender approval, and not every applicant is approved.",
  },
  {
    question: "Can you get Turkey teeth packages on a pay monthly basis?",
    answer:
      "Yes, and the package price is what you finance. A 20-crown Hollywood Smile package at £2,800 all-inclusive of hotel and transfers, with a 10% deposit of £280, leaves £2,520 to finance — £70 a month over 36 months, £105 over 24 months or £210 over 12 months at 0% APR. Flights are not included in the package price, so budget for those separately. These are example calculations, not a credit offer.",
  },
  {
    question: "How much are Turkey teeth per month?",
    answer:
      "It depends entirely on the package and the term. At 0% APR with a 10% deposit, the cheapest full package on this site (a 20-crown Hollywood Smile at £2,800) works out at £70 a month over 36 months. A full-mouth All-on-4 at £9,000 works out at £225 a month over 36 months. Shorter terms cost more per month but the same in total; if you are not offered 0%, interest is added on top.",
  },
  {
    question: "Is 0% interest actually available?",
    answer:
      "0% APR dental finance exists in the UK, but it is not offered to every applicant. Whether you are eligible depends on the lender's credit assessment, the amount borrowed and the term you choose — shorter terms are more commonly offered at 0% than longer ones. If you are not offered 0%, you will be quoted an interest-bearing agreement instead, where the total repayable is higher than the treatment price. Always check the APR and total repayable on the credit agreement before signing.",
  },
  {
    question: "Can I get teeth on finance with bad credit?",
    answer:
      "You can apply, but adverse credit makes approval less likely and the terms less favourable. In practice an applicant with a poor credit file is more likely to be declined, offered a higher APR, or asked for a larger deposit. Nobody can guarantee approval, and any site that does so should be treated with caution. A larger deposit reduces the amount you need to borrow, which can help — as can checking your eligibility with a soft search first, which does not affect your credit score.",
  },
  {
    question: "Does checking finance options affect my credit score?",
    answer:
      "A pre-qualification soft search does not affect your credit score and is not visible to other lenders. A full application is a hard search and does leave a footprint on your credit file that other lenders can see. Several hard searches in a short period can make further borrowing harder, so it is worth checking eligibility with a soft search before applying formally.",
  },
  {
    question: "Do I pay the Turkish clinic monthly, or a UK lender?",
    answer:
      "A UK lender. The finance agreement is a UK credit agreement between you and the lender, governed by UK consumer credit rules; the clinic in Turkey is paid for your treatment separately. This matters if something goes wrong — your rights under the credit agreement are against the UK lender, not the clinic, and are not the same as a clinical guarantee on the dental work itself.",
  },
  {
    question: "Can I pay the finance off early?",
    answer:
      "Most UK credit agreements allow early settlement, and under the Consumer Credit Act you are entitled to settle early and receive a rebate on future interest. Some agreements apply an early settlement charge of up to roughly one to two months' interest. On a 0% agreement there is no interest to save, so early settlement simply clears the balance. The exact terms are set out in your credit agreement before you sign.",
  },
];

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
        path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
        headline={TITLE}
        description={DESCRIPTION}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Pay Monthly Turkey Teeth", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Teeth in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Updated 16 September 2026 · 9 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 text-lg mb-1">Short answer</p>
            <p className="text-green-900">
              Yes. UK patients normally spread the cost using UK-based finance rather than a plan run by the Turkish clinic.
              A £2,800 Hollywood Smile package with a 10% deposit leaves £2,520 to finance — <strong>£70 a month over 36 months at 0% APR</strong>.
              A £9,000 full-mouth All-on-4 works out at <strong>£225 a month</strong> on the same basis. Finance is subject to a
              credit check and lender approval, and not everyone is approved.
            </p>
          </div>

          <KeyTakeaways
            items={[
              "You finance the package price, not a separate \"finance price\" — packages on this site start at £2,800 all-inclusive of hotel and transfers.",
              "A 10% deposit is typical, which reduces the amount you borrow and can improve the terms you are offered.",
              "At 0% APR the total repayable equals the treatment price. If you are not offered 0%, interest is added on top — at 12.9% APR representative, a £4,050 balance over 36 months costs £855.56 more in total.",
              "0% APR is not available to every applicant, and no lender or clinic can guarantee approval.",
              "Flights are not included in package prices. Hotel and airport transfers usually are — confirm how many nights before booking.",
            ]}
          />

          <p>
            The upfront cost is the most common barrier to treatment, even at Turkish prices. Monthly payment plans solve
            that by letting you repay a UK lender over 12, 24 or 36 months while the treatment itself is completed in
            Turkey. This page shows what each package actually costs per month, what the deposit does, and what changes
            if you are not offered a 0% agreement.
          </p>

          <h2 id="packages-pay-monthly" className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkey Teeth Packages Pay Monthly: Cost Per Month by Package</h2>
          <p>
            These are the package prices published on this site&apos;s{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">Turkey teeth price guide</Link>,
            shown with a 10% deposit and the balance spread over 12, 24 or 36 months. The monthly figures are the
            0% APR case, so the total repayable is the same as the package price.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Turkey teeth package prices with 10% deposit and monthly repayments over 12, 24 and 36 months at 0% APR</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-3 py-3 text-left">Package</th>
                  <th scope="col" className="px-3 py-3 text-right">Price</th>
                  <th scope="col" className="px-3 py-3 text-right">Deposit</th>
                  <th scope="col" className="px-3 py-3 text-right">Financed</th>
                  <th scope="col" className="px-3 py-3 text-right">12 mo.</th>
                  <th scope="col" className="px-3 py-3 text-right">24 mo.</th>
                  <th scope="col" className="px-3 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-3 py-3 font-medium text-left text-gray-800">{r.pkg}</th>
                    <td className="px-3 py-3 text-right">{r.price}</td>
                    <td className="px-3 py-3 text-right">{r.deposit}</td>
                    <td className="px-3 py-3 text-right">{r.financed}</td>
                    <td className="px-3 py-3 text-right text-[#1e40af] font-bold">{r.m12}</td>
                    <td className="px-3 py-3 text-right text-[#1e40af] font-bold">{r.m24}</td>
                    <td className="px-3 py-3 text-right text-[#1e40af] font-bold">{r.m36}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            <strong>Example calculations, not a credit offer.</strong> Deposit shown at 10%; lenders may require more or
            less. Monthly figures assume 0% APR over the stated term and are rounded to the nearest penny. Finance is
            subject to status, a credit check and lender approval. Package prices include hotel and airport transfers;
            flights are not included.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Is Actually in the Package You Are Financing?</h3>
          <p>
            Package price and total cost are not the same number. The packages above include the dental treatment, hotel
            accommodation and airport transfers, and normally the consultation and any X-rays taken on arrival. They do
            not include flights, and they may not include extras that only become necessary once a dentist has examined
            you — bone grafting and sinus lifts on implant cases are the usual examples. Before you agree a finance
            amount, get the inclusions in writing, because anything excluded is money you will need on top of the sum you
            borrowed. Our{" "}
            <Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] hover:underline">guide to what Turkey teeth packages include</Link>{" "}
            covers this in full.
          </p>

          <h2 id="not-offered-zero" className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Happens If You Are Not Offered 0%?</h2>
          <p>
            0% APR agreements exist, but they are not offered to everyone, and longer terms are less likely to be
            offered at 0% than shorter ones. If your application is approved on an interest-bearing agreement instead,
            the total repayable is higher than the treatment price. The table below shows the same financed balances
            over 36 months at <strong>12.9% APR representative</strong> — an illustrative rate, not a quote.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Same financed balances over 36 months at 12.9% APR representative, showing monthly payment, total repayable and total interest</caption>
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th scope="col" className="px-3 py-3 text-left">Package</th>
                  <th scope="col" className="px-3 py-3 text-right">Financed</th>
                  <th scope="col" className="px-3 py-3 text-right">Monthly (36 mo.)</th>
                  <th scope="col" className="px-3 py-3 text-right">Total repayable</th>
                  <th scope="col" className="px-3 py-3 text-right">Interest</th>
                </tr>
              </thead>
              <tbody>
                {aprRows.map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-3 py-3 font-medium text-left text-gray-800">{r.pkg}</th>
                    <td className="px-3 py-3 text-right">{r.financed}</td>
                    <td className="px-3 py-3 text-right font-bold">{r.monthly}</td>
                    <td className="px-3 py-3 text-right">{r.repayable}</td>
                    <td className="px-3 py-3 text-right text-red-600">{r.interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Illustrative only. Calculated as a standard amortising loan at 12.9% APR representative over 36 months. Your
            own APR depends on the lender&apos;s assessment of your application and may be higher or lower. Compare the
            APR and the total repayable — not just the monthly figure — across any offers you receive.
          </p>

          <h2 id="example-scenario" className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Treatment Scenario</h2>
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 my-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1e40af] mb-3">Example Treatment Scenario — illustrative, not a real patient</p>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Treatment</dt><dd className="font-semibold text-gray-900">All-on-4, one arch</dd></div>
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Treatment price</dt><dd className="font-semibold text-gray-900">£4,500</dd></div>
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Deposit paid upfront</dt><dd className="font-semibold text-gray-900">£1,000</dd></div>
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Balance financed</dt><dd className="font-semibold text-gray-900">£3,500</dd></div>
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Trips required</dt><dd className="font-semibold text-gray-900">2</dd></div>
              <div className="flex justify-between border-b border-blue-100 py-1"><dt className="text-gray-600">Included</dt><dd className="font-semibold text-gray-900">Hotel, transfers, consultation</dd></div>
            </dl>
            <table className="w-full text-sm mt-5 bg-white rounded-xl overflow-hidden">
              <caption className="sr-only">Example monthly payments on a £3,500 financed balance at 0% APR</caption>
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th scope="col" className="px-3 py-2 text-left">Term</th>
                  <th scope="col" className="px-3 py-2 text-right">Monthly at 0% APR</th>
                  <th scope="col" className="px-3 py-2 text-right">Total repayable</th>
                </tr>
              </thead>
              <tbody>
                {scenarioTerms.map((t, i) => (
                  <tr key={t.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-3 py-2 font-medium text-left text-gray-800">{t.term}</th>
                    <td className="px-3 py-2 text-right font-bold text-[#1e40af]">{t.monthly}</td>
                    <td className="px-3 py-2 text-right">£3,500</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-3">
              At 12.9% APR representative the same £3,500 balance would cost £117.76 a month over 36 months, with
              £4,239.37 total repayable — £739.37 more than the treatment price. This scenario is illustrative and does
              not describe a real patient. Eligibility, APR, deposit and term are all set by the lender following a
              credit assessment.
            </p>
          </div>

          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Monthly Payment for Turkey Dental Treatment Works</h2>
          <ol className="space-y-4 my-4">
            {[
              { title: "Get a treatment plan and a firm price", desc: "You cannot sensibly choose a finance amount until you know what the treatment is. A written plan with the inclusions listed tells you the figure you actually need to borrow." },
              { title: "Check your eligibility with a soft search", desc: "A pre-qualification soft search shows what you are likely to be offered without affecting your credit score or leaving a footprint other lenders can see." },
              { title: "Compare APR and total repayable, not just the monthly figure", desc: "A longer term always looks cheaper per month. On an interest-bearing agreement it is more expensive overall. Compare the APR and the total repayable across any offers." },
              { title: "Apply, and wait for the lender's decision", desc: "A full application is a hard credit search. Approval is the lender's decision, based on your credit file and affordability — it is not guaranteed, and the clinic has no influence over it." },
              { title: "Pay the deposit and book your treatment dates", desc: "With finance agreed, the deposit is paid and treatment dates are booked. Clinic booking, travel advice and pre-trip support are handled from the UK." },
              { title: "Repay the UK lender monthly from home", desc: "Repayments start on the date set in your credit agreement, by direct debit from your UK bank account. The agreement is with the UK lender, not the Turkish clinic." },
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

          <h2 id="single-treatments" className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Payment Examples for Individual Treatments</h2>
          <p>
            Not everyone needs a full package. These are the per-treatment prices published on this site, shown on the
            same 0% APR basis without a deposit, so the monthly figure is simply the price divided by the term.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Individual treatment prices with monthly repayments over 12, 24 and 36 months at 0% APR</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-4 py-3 text-left">Treatment</th>
                  <th scope="col" className="px-4 py-3 text-right">Cost</th>
                  <th scope="col" className="px-4 py-3 text-right">12 mo.</th>
                  <th scope="col" className="px-4 py-3 text-right">24 mo.</th>
                  <th scope="col" className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "10 E-max veneers", cost: "£1,900", m12: "£158.33", m24: "£79.17", m36: "£52.78" },
                  { t: "20 E-max veneers", cost: "£3,800", m12: "£316.67", m24: "£158.33", m36: "£105.56" },
                  { t: "Single implant (Osstem, + crown)", cost: "From £250", m12: "£20.83", m24: "£10.42", m36: "£6.94" },
                  { t: "Single implant (Straumann, + crown)", cost: "From £800", m12: "£66.67", m24: "£33.33", m36: "£22.22" },
                  { t: "All-on-4 (one arch)", cost: "£4,500", m12: "£375", m24: "£187.50", m36: "£125" },
                  { t: "Full-mouth All-on-4", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
                  { t: "Full smile makeover", cost: "From £3,500", m12: "£291.67", m24: "£145.83", m36: "£97.22" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-4 py-3 font-medium text-left text-gray-800">{r.t}</th>
                    <td className="px-4 py-3 text-right">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m12}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m24}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Example calculations at 0% APR with no deposit, not a credit offer. Most lenders set a minimum advance, so
            the smallest amounts here are unlikely to be financed on their own. Prices are those published on{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">this site&apos;s price guide</Link>{" "}
            and are before flights.
          </p>

          <h2 id="uk-comparison" className="text-2xl font-bold text-gray-900 mt-8 mb-4">Even Financed, Turkey Is Substantially Cheaper Than the UK</h2>
          <p>
            Financing does not close the gap — it spreads it. A full set of 20 E-max veneers costs around £3,800 in
            Turkey against roughly £18,000 at UK private prices. Compared like for like, both spread over 36 months at
            0% APR with no deposit:
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
              <p className="text-xs text-gray-500 mb-1">UK — 20 veneers</p>
              <p className="text-2xl font-extrabold text-red-500">£500/mo</p>
              <p className="text-xs text-gray-400">£18,000 over 36 months</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Turkey — 20 veneers</p>
              <p className="text-2xl font-extrabold text-green-600">£105.56/mo</p>
              <p className="text-xs text-gray-400">£3,800 over 36 months</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Both figures are on the same 0% APR, no-deposit basis so they are directly comparable. In practice a UK
            lender is unlikely to offer 0% on an £18,000 advance over 36 months, which would make the real UK monthly
            cost higher than shown. The Turkey figure excludes flights.
          </p>

          <h2 id="before-you-sign" className="text-2xl font-bold text-gray-900 mt-8 mb-4">Before You Sign Anything</h2>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li><strong>Treatment first, finance second.</strong> A remote quote is an estimate. The treatment you actually need is decided by a dentist who has examined you and seen your X-rays, and the plan can change on arrival.</li>
            <li><strong>Check the APR and the total repayable</strong> on the credit agreement, not just the monthly payment. A long term on an interest-bearing agreement can add several hundred pounds.</li>
            <li><strong>Budget for what the package excludes</strong> — flights always, and potentially bone grafting, sinus lifts or extra hotel nights on implant cases.</li>
            <li><strong>Understand what the guarantee covers.</strong> A clinic warranty on crowns or implants is not the same as a clinical guarantee of the outcome, and it is separate from your rights under the UK credit agreement.</li>
            <li><strong>Factor in aftercare.</strong> If something needs adjusting after you return, you are several hours&apos; flight from the dentist who did the work. Ask in advance who handles follow-up and what it costs.</li>
          </ul>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">See what your treatment would cost per month</p>
            <p className="text-blue-100 mb-4">Get a written treatment plan and a firm price first, then check your finance eligibility with a soft search — no impact on your credit score.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get Your Free Treatment Plan</Link>
          </div>

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related reading</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">→ What Turkey teeth cost in 2026: full price list</Link></li>
              <li><Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] hover:underline">→ What Turkey teeth packages include (and what they leave out)</Link></li>
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ UK dental finance options, including bad credit</Link></li>
              <li><Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] hover:underline">→ How much are Turkey teeth per month?</Link></li>
              <li><Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] hover:underline">→ How dental tourism finance actually works</Link></li>
              <li><Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] hover:underline">→ Financing dental implants in Turkey</Link></li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide &amp; pricing</span>
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
              <span className="text-xs text-gray-500 mt-0.5">Terms, APR &amp; examples</span>
            </Link>
            <Link href="/prices/teeth-done-in-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All Treatment Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">Full price guide</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <FAQSection faqs={faqs} title="Paying Monthly for Turkey Teeth: FAQs" />
    </article>
  );
}
