import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

const PATH = "/blog/can-you-pay-monthly-for-teeth-in-turkey";
const TITLE = "Can You Pay Monthly for Turkey Teeth? Plans & Costs";
const DESCRIPTION =
  "Yes, you can pay monthly for Turkey teeth. Payment plan terms, 0% APR examples for veneer and implant packages, eligibility, and what finance excludes.";

// This page is the account's strongest ranking asset: ~83 impressions across 11
// pay-monthly queries at positions 7.5-11.2, and the only query-level click
// Google has ever attributed. It owns the "can you pay monthly / pay monthly
// turkey teeth / turkey teeth packages pay monthly" question intent.
// /monthly-payment keeps per-treatment monthly figures; /finance-options-uk
// keeps the generic UK dental-finance question. Do not let those three merge.
export const metadata: Metadata = {
  alternates: { canonical: PATH },
  // Absolute: the layout's "| Teeth Done in Turkey" suffix would push this to
  // 73 characters and truncate the differentiating half in the SERP.
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// Package totals below are the prices published on /prices/turkey-teeth-cost.
// Monthly figures are that total divided by the term at 0% representative APR,
// rounded up to the nearest £1 — so no row implies a cheaper deal than the
// site's own price list, and nothing is added that a lender has not agreed.
const packageRows = [
  { t: "20 zirconia crowns — Hollywood Smile package", cost: "£2,800", m12: "£234", m24: "£117", m36: "£78" },
  { t: "24 zirconia crowns — Hollywood Smile package", cost: "£3,100", m12: "£259", m24: "£130", m36: "£87" },
  { t: "20 E-max porcelain veneers", cost: "£3,800", m12: "£317", m24: "£159", m36: "£106" },
  { t: "All-on-4 — one arch", cost: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
  { t: "All-on-6 — one arch", cost: "£5,600", m12: "£467", m24: "£234", m36: "£156" },
  { t: "All-on-4 — both arches (full mouth)", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
];

const steps = [
  {
    title: "Pre-qualify with a soft search",
    desc: "A pre-qualification check uses a soft credit search. It does not appear on your credit file and does not affect your credit score. It returns an indicative decision, not a credit offer.",
  },
  {
    title: "Get your treatment total first",
    desc: "Finance is arranged around a confirmed treatment plan, so the clinic needs to price your case before a figure is meaningful. A 20-crown package and a full-mouth All-on-4 are thousands of pounds apart.",
  },
  {
    title: "Choose a deposit and a term",
    desc: "A deposit reduces the amount financed and therefore the monthly payment. Terms of 12, 24 and 36 months are typical. Longer terms lower the monthly figure without changing the total repayable at 0% APR.",
  },
  {
    title: "Complete a formal application",
    desc: "Only at this stage is a hard credit search recorded. The lender assesses affordability as well as credit history, and can decline or offer different terms from your indicative decision.",
  },
  {
    title: "Repay from the UK while treatment happens in Turkey",
    desc: "The credit agreement is with a UK, FCA-regulated lender and is separate from the clinic. Repayments are collected by direct debit from your UK bank account on an agreed date.",
  },
];

const faqs = [
  {
    q: "Can you pay monthly for Turkey teeth?",
    a: "Yes. UK patients commonly fund Turkey dental treatment with a UK credit agreement and repay it monthly, typically over 12, 24 or 36 months. The finance is arranged in the UK with an FCA-regulated lender and is separate from the Turkish clinic, which is paid in full for the treatment. Approval is never automatic — it depends on a credit and affordability assessment.",
  },
  {
    q: "Can you pay monthly for a Turkey teeth package?",
    a: "Yes, and packages are usually the easiest thing to finance because the price is fixed in advance. A 20-crown Hollywood Smile package at £2,800 including hotel and transfers works out at about £78 a month over 36 months at 0% representative APR, or £117 over 24 months. Flights are not included in package prices and are normally paid separately.",
  },
  {
    q: "What payment plan terms are available for Turkey teeth?",
    a: "12, 24 and 36 months are the terms quoted on this site. At 0% representative APR the total repayable is the same on every term — only the monthly amount changes. A longer term lowers the monthly payment; a shorter term clears the balance sooner. If you are not offered 0%, a longer term will increase the total you repay.",
  },
  {
    q: "Can you get your teeth done in Turkey on finance with bad credit?",
    a: "You can apply, but adverse credit makes a decline more likely and, where an offer is made, it may be at a higher APR or require a larger deposit. No lender on this site offers guaranteed acceptance and nobody can promise you will qualify. A soft-search pre-qualification is the safe way to find out where you stand without leaving a footprint on your credit file.",
  },
  {
    q: "Is 0% interest really available?",
    a: "0% is quoted as a representative APR, which means at least 51% of successful applicants receive that rate. It does not mean every applicant receives it. Your actual APR, term and total repayable are set out in the credit agreement before you sign anything.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "Pre-qualification uses a soft search and does not affect your credit score. A formal application records a hard search on your credit file, which other lenders can see.",
  },
  {
    q: "Do monthly payment plans cover flights and hotel?",
    a: "Finance is arranged around the treatment cost. Hotel and airport transfers are already inside the package prices quoted on this site, but flights are not included in any package and are paid separately. Extra hotel nights, bone grafts and sinus lifts are also outside package prices and are quoted case by case.",
  },
  {
    q: "Can I pay monthly for veneers in Turkey specifically?",
    a: "Yes. A full set of 20 E-max porcelain veneers at £3,800 is approximately £106 a month over 36 months or £159 over 24 months at 0% representative APR. Veneers are priced per tooth from £190, so a partial set costs proportionally less and the monthly figure falls with it.",
  },
  {
    q: "Can I pay the finance off early?",
    a: "Most regulated credit agreements allow early settlement, and under the Consumer Credit Act you have a statutory right to settle early. Whether a partial rebate or fee applies depends on the agreement, so check the early settlement terms before you sign.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function ScenarioCard({
  heading,
  treatment,
  total,
  deposit,
  financed,
  rows,
}: {
  heading: string;
  treatment: string;
  total: string;
  deposit: string;
  financed: string;
  rows: { term: string; monthly: string }[];
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 my-6">
      <p className="text-xs font-bold uppercase tracking-wide text-[#1e40af] mb-2">Example Treatment Scenario</p>
      <h3 className="font-bold text-gray-900 mb-3">{heading}</h3>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm mb-4">
        <dt className="text-gray-500">Treatment</dt>
        <dd className="text-gray-900 font-medium text-right">{treatment}</dd>
        <dt className="text-gray-500">Treatment price</dt>
        <dd className="text-gray-900 font-medium text-right">{total}</dd>
        <dt className="text-gray-500">Deposit</dt>
        <dd className="text-gray-900 font-medium text-right">{deposit}</dd>
        <dt className="text-gray-500">Balance financed</dt>
        <dd className="text-gray-900 font-medium text-right">{financed}</dd>
        <dt className="text-gray-500">Total repayable on the credit</dt>
        <dd className="text-gray-900 font-medium text-right">{financed}</dd>
      </dl>
      <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-3 py-2 text-left font-semibold">Term</th>
            <th className="px-3 py-2 text-right font-semibold">Monthly payment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-3 py-2">{r.term}</td>
              <td className="px-3 py-2 text-right font-bold text-[#1e40af]">{r.monthly}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-3">
        Illustrative calculation at 0% representative APR, rounded up to the nearest £1 — the final payment adjusts. This
        is an example, not a credit offer, and is subject to status, a credit and affordability assessment and lender
        approval. Not everyone will qualify.
      </p>
    </div>
  );
}

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
        path={PATH}
        headline="Can You Pay Monthly for Turkey Teeth?"
        description={DESCRIPTION}
        datePublished="2026-01-01"
        dateModified="2026-09-15"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Can You Pay Monthly for Turkey Teeth?", path: PATH },
        ]}
      />
      <script
        id="faq-schema-can-you-pay-monthly-for-teeth-in-turkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Turkey Teeth?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Updated September 2026 · 8 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <p className="font-bold text-green-800 text-lg">✓ Yes — Turkey dental treatment can be paid for monthly</p>
            <p className="text-green-700 text-sm mt-1">
              You take out UK finance with an FCA-regulated lender and repay it over 12, 24 or 36 months while the
              treatment is carried out in Turkey. 0% is quoted as a representative APR. Approval is subject to a credit
              and affordability assessment — not everyone will qualify.
            </p>
          </div>

          <p>
            The barrier for most UK patients is not the Turkish price — it is finding several thousand pounds up front.
            A monthly payment plan solves the timing problem: a UK lender pays the treatment cost now and you repay it
            from home. What follows is how that works in practice, what each package on this site works out at per
            month, and the parts of the arrangement that are easy to misread.
          </p>

          <KeyTakeaways
            items={[
              "The credit agreement is with a UK, FCA-regulated lender. It is separate from the Turkish clinic, which is paid in full.",
              "0% is a representative APR: at least 51% of successful applicants get it, not all of them.",
              "A 20-crown Hollywood Smile package at £2,800 is approximately £78/month over 36 months or £117 over 24.",
              "A deposit lowers the amount financed and therefore the monthly payment. It does not change the treatment price.",
              "Flights are not in any package price and are not normally part of the financed amount.",
              "Pre-qualification is a soft search. A formal application is a hard search and can still be declined.",
            ]}
          />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Monthly Payment for Turkey Dental Treatment Works</h2>
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkey Teeth Cost Pay Monthly: What Each Package Works Out At</h2>
          <p>
            The figures below take the package prices published on this site&rsquo;s{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth price list</Link>{" "}
            and divide them across each term at 0% representative APR, with no deposit. At 0% the total repayable equals
            the treatment price on every row, so the only thing the term changes is the monthly amount.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3 text-right">12 mo.</th>
                  <th className="px-4 py-3 text-right">24 mo.</th>
                  <th className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right font-semibold">{r.cost}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m12}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m24}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Illustrative calculations at 0% representative APR, rounded up to the nearest £1. Not a credit offer.
            Your APR, term and total repayable depend on a credit and affordability assessment and are confirmed in the
            credit agreement before you sign. Crown and All-on-4/All-on-6 package prices include hotel and airport
            transfers; flights are excluded.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can You Pay Monthly for a Turkey Teeth Package?</h2>
          <p>
            Yes, and a fixed-price package is the most straightforward case to finance. Because the clinic quotes one
            number covering the treatment, the hotel and the airport transfers, the lender is assessing a known amount
            rather than an open-ended treatment plan. The 20-crown Hollywood Smile package at £2,800 is the most common
            starting point for UK patients: about £78 a month over 36 months, £117 over 24, or £234 over 12.
          </p>
          <p>
            Two things to check before you assume a package price is your total cost. Flights are not included in any
            package on this site. And anything clinically additional — a bone graft, a sinus lift, extra nights if
            healing takes longer — sits outside the package and is quoted separately, so it will not be inside the
            amount you financed. A{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">written treatment plan</Link>{" "}
            that itemises inclusions and exclusions is what turns a package price into a real budget.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkey Teeth Payment Plans: What Terms Are Available?</h2>
          <p>
            Payment plans on this site are quoted over 12, 24 and 36 months. At 0% representative APR, the total
            repayable is identical across all three — £3,800 of veneers costs £3,800 whether you clear it in a year or
            three. The trade-off is only cash flow: 36 months gives the lowest monthly figure, 12 months clears the
            agreement fastest and frees your credit file sooner.
          </p>
          <p>
            That equivalence stops holding the moment you are offered something other than 0%. On an interest-bearing
            agreement a longer term means more interest and a higher total repayable, so compare the total cost of
            credit — not just the monthly payment — on whatever the lender actually offers you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can You Get Your Teeth Done in Turkey on Finance?</h2>
          <p>
            You can, and it is worth being precise about what is being financed. You are not borrowing from the Turkish
            clinic and there is no cross-border credit arrangement. You take out a normal UK consumer credit agreement,
            the treatment is paid for, and you repay a UK lender in sterling by direct debit. That matters if anything
            goes wrong: your rights as a borrower sit under UK consumer credit law regardless of where the dentistry
            happened. Your rights as a patient, however, sit under Turkish law and the clinic&rsquo;s own guarantee —
            the two are separate, which is why the{" "}
            <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">risks of getting teeth done in Turkey</Link>{" "}
            are worth reading before you commit to either.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Treatment Scenarios With a Deposit</h2>
          <p>
            Most patients put down a deposit rather than financing the whole amount. The deposit reduces what you borrow
            and therefore the monthly payment; it does not change the treatment price.
          </p>

          <ScenarioCard
            heading="Hollywood Smile package, 20 zirconia crowns"
            treatment="20 zirconia crowns, hotel and transfers included"
            total="£2,800"
            deposit="£500"
            financed="£2,300"
            rows={[
              { term: "12 months", monthly: "£192/mo" },
              { term: "24 months", monthly: "£96/mo" },
              { term: "36 months", monthly: "£64/mo" },
            ]}
          />

          <ScenarioCard
            heading="Full-mouth All-on-4, both arches"
            treatment="All-on-4 implants, upper and lower arch"
            total="£9,000"
            deposit="£1,000"
            financed="£8,000"
            rows={[
              { term: "12 months", monthly: "£667/mo" },
              { term: "24 months", monthly: "£334/mo" },
              { term: "36 months", monthly: "£223/mo" },
            ]}
          />

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can You Pay Monthly for Veneers in Turkey?</h2>
          <p>
            Yes. Veneers are priced per tooth — from £190 for E-max porcelain — so the monthly figure scales with how
            many you have. A full set of 20 at £3,800 is approximately £106 a month over 36 months or £159 over 24. Ten
            veneers at £1,900 halves that. If you are still deciding between veneers and crowns, the choice changes the
            price before finance enters the picture: see{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">veneers or crowns in Turkey</Link>{" "}
            and the{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">veneers Turkey cost breakdown</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Is Eligible — and What If You Have Bad Credit?</h2>
          <p>
            To apply you generally need to be a UK resident, aged 18 or over, and able to pass a credit and
            affordability assessment. Affordability is assessed alongside credit history, so income and existing
            commitments matter as much as your score.
          </p>
          <p>
            Adverse credit does not automatically rule you out, but it does make a decline more likely, and where an
            offer is made it may carry a higher APR or require a larger deposit. There is no guaranteed acceptance on
            this site and nobody can tell you in advance that you will qualify. A soft-search pre-qualification is the
            way to find out without leaving a footprint on your credit file — and if the answer is no, a larger deposit,
            a smaller treatment plan or a period of rebuilding credit are the realistic next steps rather than a
            different lender promising certainty. Our{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">UK dental finance options guide</Link>{" "}
            covers eligibility and the bad-credit case in more detail.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What a Monthly Payment Plan Does Not Cover</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li><strong>Flights.</strong> Excluded from every package price on this site and normally paid separately.</li>
            <li><strong>Clinically additional work.</strong> Bone grafts, sinus lifts and extractions beyond the plan are quoted case by case.</li>
            <li><strong>Extra nights.</strong> Package hotel stays are fixed; a longer stay is at your own cost.</li>
            <li><strong>UK aftercare.</strong> Follow-up with a UK dentist, if you need it, is not part of the Turkish package or the credit agreement.</li>
            <li><strong>Any clinical guarantee.</strong> A finance agreement is a credit contract. It carries no promise about the treatment outcome.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Even With Finance, Turkey Costs Less Per Month Than the UK</h2>
          <p>Consider a full set of 20 porcelain veneers financed over 36 months:</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
              <p className="text-xs text-gray-500 mb-1">UK (financed 36 months)</p>
              <p className="text-2xl font-extrabold text-red-500">£500/mo</p>
              <p className="text-xs text-gray-400">Based on £18,000 over 36 months</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Turkey (financed 36 months)</p>
              <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
              <p className="text-xs text-gray-400">Based on £3,800 over 36 months</p>
            </div>
          </div>
          <p>
            The monthly gap is as wide as the headline gap. It is also the reason finance is worth treating carefully
            rather than as a formality: the smaller commitment is still a credit agreement, and the{" "}
            <Link href="/blog/why-are-dental-treatments-cheaper-in-turkey" className="text-[#1e40af] font-semibold hover:underline">reasons Turkish dentistry costs less</Link>{" "}
            are about overheads, not about the treatment being a lower-stakes decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQs: Paying Monthly for Turkey Teeth</h2>
          <div className="space-y-3 my-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <SourcesList
            sources={[
              { label: "FCA — Consumer credit: what to know before you borrow", href: "https://www.fca.org.uk/consumers/credit" },
              { label: "MoneyHelper — Credit and borrowing", href: "https://www.moneyhelper.org.uk/en/everyday-money/credit-and-purchases" },
              { label: "NHS — Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            ]}
          />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">See what your treatment would cost per month</p>
            <p className="text-blue-200 mb-4">
              Get a written treatment plan with an itemised price first, then a soft-search pre-qualification — no
              impact on your credit score, and no obligation.
            </p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get My Treatment Plan — Free</Link>
          </div>

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">→ Turkey Teeth Cost: Complete 2026 Price Guide</Link></li>
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ UK dental finance options and eligibility</Link></li>
              <li><Link href="/monthly-payment" className="text-[#1e40af] hover:underline">→ Monthly cost of each treatment, side by side</Link></li>
              <li><Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] hover:underline">→ Turn a treatment total into a monthly figure</Link></li>
              <li><Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] hover:underline">→ Dental tourism finance explained</Link></li>
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
              <span className="text-xs text-gray-500 mt-0.5">Cost per treatment</span>
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
