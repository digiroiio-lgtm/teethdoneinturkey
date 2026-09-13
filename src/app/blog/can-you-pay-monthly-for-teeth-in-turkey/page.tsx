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

// Optimised 2026-09-13 as the site's best-positioned commercial asset.
//
// Over 2026-09-06..09-12 this URL earned 109 impressions at average position
// 10.4 — the most stable top-10-adjacent page on the property (daily positions
// 9.0, 12.3, 9.5, 10.3, 10.9, 9.7) and the strongest page in the site's number
// one priority cluster. It had 0 clicks.
//
// The whole recorded query family uses two phrases the page did not carry:
// "pay monthly" and "turkey teeth" (in that word order).
//   pay monthly turkey teeth                          13 @ 11.1
//   turkey teeth packages pay monthly                 10 @ 10.8 (split with /prices/turkey-teeth-cost)
//   turkey teeth pay monthly                           9 @ 10.4
//   pay monthly teeth turkey                           7 @ 11.1
//   can you pay monthly for turkey teeth               5 @  7.4
//   can you get your teeth done in turkey on finance   5 @ 10.4
//   turkey teeth monthly payments                      3 @ 10.7
//   turkey teeth cost pay monthly                      3 @  9.5
//   turkey teeth finance bad credit                    2 @ 10.5
//   can you get turkey teeth on a payment plan         1 @ 11.0
//   veneers turkey pay monthly                         1 @ 11.0
// The old title was "Monthly Payment for Teeth in Turkey" — neither phrase, and
// the wrong entity order. Retitled and given sections built on the recorded
// wording. The URL is deliberately unchanged: it is the ranking asset, and the
// 2026-09-08 cost-merge regression is the standing reminder not to move demand
// onto a URL Google has not already picked.
//
// Cannibalisation boundaries held on this run:
//  - "turkey teeth packages pay monthly" was split between this page (10.3) and
//    /prices/turkey-teeth-cost (11.0). Assigned here, because the query head is
//    "pay monthly" and this page owns that family. The package *prices* stay on
//    /prices/turkey-teeth-cost, which this page links to rather than restating.
//  - Bad credit is deliberately shallow here (two sentences + a link).
//    /finance-options-uk owns it at position 7.6; a third contender would split
//    the account's best query further.
//  - No H2 uses the exact string "Turkey teeth monthly payments" — that is
//    /monthly-payment's H1, and the two must not converge.
//  - The payment-plan-vs-dental-loan comparison stays on /finance-options-uk.
//    This page covers only the Turkey-specific mechanics of the arrangement.
export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: { absolute: "Pay Monthly for Turkey Teeth: UK Finance Plans 2026" },
  description:
    "Yes — UK patients can pay monthly for Turkey teeth over 12–36 months. 20 veneers from £106/mo, All-on-4 from £125/mo. 0% APR rep, subject to status.",
};

const toc = [
  { id: "short-answer", label: "Can you pay monthly?" },
  { id: "how-it-works", label: "How it works, step by step" },
  { id: "examples", label: "What each treatment costs per month" },
  { id: "packages", label: "Paying monthly for a package" },
  { id: "scenario", label: "Example treatment scenario" },
  { id: "mechanics", label: "What you are actually signing" },
  { id: "eligibility", label: "Eligibility and bad credit" },
  { id: "uk-comparison", label: "Monthly cost vs the UK" },
  { id: "faqs", label: "FAQs" },
];

// Terms and totals below are the treatment price divided by the term at a 0%
// APR representative rate, rounded to the nearest pound — the same basis and the
// same source prices used on /prices/turkey-teeth-cost, /finance-options-uk and
// /monthly-payment, so no page publishes a figure that contradicts another.
const monthlyExamples = [
  { t: "Hollywood Smile (20 zirconia crowns, hotel included)", cost: "£2,800", m12: "£233", m24: "£117", m36: "£78" },
  { t: "10 E-max veneers", cost: "£1,900", m12: "£158", m24: "£79", m36: "£53" },
  { t: "20 E-max veneers (full set)", cost: "£3,800", m12: "£317", m24: "£158", m36: "£106" },
  { t: "All-on-4, one arch", cost: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
  { t: "All-on-6, one arch", cost: "£5,600", m12: "£467", m24: "£233", m36: "£156" },
  { t: "Full mouth All-on-4 (both arches)", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
];

const scenarioTerms = [
  { term: "6 months", monthly: "£550" },
  { term: "12 months", monthly: "£275" },
  { term: "18 months", monthly: "£183" },
  { term: "24 months", monthly: "£138" },
  { term: "36 months", monthly: "£92" },
];

const faqs = [
  {
    question: "Can you pay monthly for Turkey teeth?",
    answer:
      "Yes. UK patients routinely spread the cost of dental treatment in Turkey over 12, 24 or 36 months using UK finance arranged in pounds before they travel. A full set of 20 E-max veneers at £3,800 works out at about £106 a month over 36 months at a 0% APR representative rate, and an All-on-4 arch at £4,500 at about £125. Finance is not automatic: it is subject to status, a credit check and the lender's approval, and the rate and term you are offered depend on that assessment.",
  },
  {
    question: "Can you get your teeth done in Turkey on finance?",
    answer:
      "Yes, but the finance and the treatment are two separate arrangements. You take out credit with a UK lender, in pounds, and you pay the Turkish clinic from those funds. The clinic is not your lender and the lender is not responsible for your clinical care, so read the treatment agreement and the credit agreement separately. Your repayments continue on the agreed schedule regardless of how treatment goes, which is why the guarantee terms matter before you commit.",
  },
  {
    question: "Can you pay monthly for a Turkey teeth package?",
    answer:
      "Yes. Package prices are financed the same way as single treatments, and because a package bundles the treatment, hotel and airport transfers into one figure, that whole figure is what you finance. A 20-crown Hollywood Smile package at £2,800 including hotel comes to about £78 a month over 36 months at 0% APR representative. Flights are never included in a package price and are not part of the financed amount, so budget for those separately.",
  },
  {
    question: "Can you get Turkey teeth on a payment plan?",
    answer:
      "A payment plan and monthly finance are the same thing in practice: a regulated credit agreement with a UK lender, repaid by direct debit from a UK account. Terms of 12, 24 and 36 months are the usual options, there is normally a £500 minimum finance amount, and a deposit reduces the amount borrowed, which can improve the decision and lower the monthly figure.",
  },
  {
    question: "Can I pay monthly for veneers in Turkey?",
    answer:
      "Yes. Veneers are the most commonly financed treatment on this site. Ten E-max veneers at £1,900 is about £53 a month over 36 months and a full set of 20 at £3,800 is about £106, both at a 0% APR representative rate with no deposit. Veneers are cosmetic, so NHS band charges never apply to them and finance or savings are the only routes to funding them.",
  },
  {
    question: "Can I get Turkey teeth on finance with bad credit?",
    answer:
      "You can still check your eligibility, and a poor credit history does not automatically rule you out. It is not a guarantee of approval, though: the decision rests with the lender and their criteria at the time you apply, and an adverse credit file can mean a higher rate, a shorter term or a larger deposit being required. Because the eligibility check is a soft search, checking does not affect your credit score.",
  },
  {
    question: "Is 0% interest available on Turkey dental finance?",
    answer:
      "0% APR is available on qualifying plans, most commonly on shorter terms. It is not offered to every applicant. If you do not qualify for a 0% plan you may be offered an interest-bearing agreement instead, which raises both the monthly payment and the total repayable. The APR, the total amount payable and the term are all set out in the credit agreement before you sign anything.",
  },
  {
    question: "Will checking finance affect my credit score?",
    answer:
      "An eligibility check uses a soft search, which is visible only to you and leaves no mark that other lenders can see. A full application is a hard search and does leave a footprint on your credit file whether or not it is approved, so it is worth checking eligibility first and only proceeding to a full application once you have a treatment plan and a price you are committed to.",
  },
  {
    question: "Can I settle the finance early?",
    answer:
      "Most agreements allow early settlement, and on a 0% plan there is normally nothing to save by doing so because there is no interest to rebate. On an interest-bearing agreement, settling early usually reduces the total you repay. Early settlement terms, including any fee, are stated in your credit agreement — check them there rather than relying on a general rule.",
  },
];

export default function PayMonthlyTurkeyTeethPage() {
  return (
    <>
      <article className="py-16 bg-white">
        <ArticleJsonLd
          id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
          path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
          headline="Pay Monthly for Turkey Teeth: UK Finance Plans 2026"
          description="Yes — UK patients can pay monthly for Turkey teeth over 12–36 months. 20 veneers from £106/mo, All-on-4 from £125/mo. 0% APR rep, subject to status."
          datePublished="2026-01-01"
          dateModified="2026-09-13"
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
            <p className="text-gray-500 text-sm">Published January 2026 · Updated 13 September 2026 · 9 min read</p>
            <MedicalReviewBadge />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 id="short-answer" className="text-2xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">Can You Pay Monthly for Turkey Teeth?</h2>
            <p>
              <strong>Yes. UK patients can pay monthly for teeth done in Turkey, using UK finance arranged in pounds
              over 12, 24 or 36 months before they travel.</strong>{" "}
              A full set of 20 E-max veneers at £3,800 comes to around £106 a month over 36 months at a 0% APR
              representative rate; an All-on-4 arch at £4,500 comes to around £125. Finance is arranged with a UK
              lender, not with the Turkish clinic, and is subject to status, a credit check and the lender&apos;s
              approval — not every applicant will qualify.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="font-bold text-gray-900">Monthly payment plans are available for treatment in Turkey</p>
              <p className="text-gray-700 text-sm mt-1">
                Terms of 12, 24 and 36 months. 0% APR representative on qualifying plans. Minimum finance amount £500.
                Subject to status, credit check and lender approval — this page is information, not a credit offer.
              </p>
            </div>

            <KeyTakeaways
              items={[
                "Finance is taken out in the UK, in pounds, and repaid by direct debit — the clinic in Turkey is not the lender.",
                "Typical terms are 12, 24 and 36 months, with a £500 minimum finance amount.",
                "20 E-max veneers (£3,800) is about £106 a month over 36 months; All-on-4 one arch (£4,500) about £125.",
                "Package prices include hotel and transfers, so the whole package figure is what you finance. Flights are not included.",
                "0% APR is representative and applies to qualifying plans only; other applicants may be offered an interest-bearing agreement.",
                "An eligibility check is a soft search and does not affect your credit score. A full application is a hard search and does.",
              ]}
            />

            <GuideTOC items={toc} />

            <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">How Paying Monthly for Turkey Teeth Works</h2>
            <ol className="space-y-4 my-4">
              {[
                { title: "Check your eligibility (soft search)", desc: "Complete a short eligibility form. This uses a soft credit check, which is visible only to you and leaves no footprint other lenders can see, so it does not affect your credit score." },
                { title: "Get a treatment plan and a price", desc: "Send your X-rays or a panoramic scan and you get an itemised treatment plan. You need a firm price before you can sensibly choose a term — the treatment total, not a headline rate, is what sets the monthly figure." },
                { title: "Choose a term, and a deposit if you want one", desc: "Pick 12, 24 or 36 months. A deposit is optional but reduces the amount borrowed, which lowers the monthly payment and can materially change a marginal lending decision." },
                { title: "Complete the full application", desc: "This is a hard credit search and leaves a footprint whether or not it is approved. The APR, the term, the monthly payment and the total amount repayable are all set out in the credit agreement before you sign." },
                { title: "Travel, then repay from home", desc: "You pay the clinic from the financed funds and have your treatment in Turkey. Repayments run by direct debit from your UK bank account on the agreed schedule, and continue regardless of how treatment goes — which is why the clinic's written guarantee matters before you commit." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-3 list-none">
                  <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 id="examples" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">What Each Treatment Costs Per Month</h2>
            <p>
              The monthly figure follows from the treatment total. These are the treatment prices published across this
              site, divided across each term at a 0% APR representative rate with no deposit.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Treatment</th>
                    <th className="px-4 py-3 text-right">Price</th>
                    <th className="px-4 py-3 text-right">12 mo.</th>
                    <th className="px-4 py-3 text-right">24 mo.</th>
                    <th className="px-4 py-3 text-right">36 mo.</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyExamples.map((r, i) => (
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
              Example figures, not a credit offer. Each is the treatment price divided by the term at a 0% APR
              representative rate with no deposit. 0% APR applies to qualifying plans only; applicants offered an
              interest-bearing agreement will pay more per month and more in total. All finance is subject to status, a
              credit check and lender approval.
            </p>
            <p className="text-sm text-gray-600">
              A single dental implant from £250 sits below the £500 minimum finance amount, so it is paid outright
              rather than financed unless it is combined with other treatment. Full per-treatment pricing is on the{" "}
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost guide</Link>.
            </p>

            <h2 id="packages" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Can You Pay Monthly for a Turkey Teeth Package?</h2>
            <p>
              Yes, and a package is generally the simpler thing to finance. A package quotes the treatment, the hotel
              and the airport and clinic transfers as a single figure, so there is one number to borrow against rather
              than several separate costs arriving at different times.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <p className="font-bold text-green-900 mb-2">Inside the package price</p>
                <ul className="text-sm text-green-900/90 space-y-1 list-disc list-inside">
                  <li>Consultation and scans</li>
                  <li>The treatment itself</li>
                  <li>Hotel accommodation for the treatment stay</li>
                  <li>Airport and clinic transfers</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="font-bold text-amber-900 mb-2">Not in the package price</p>
                <ul className="text-sm text-amber-900/90 space-y-1 list-disc list-inside">
                  <li>Flights — never included, budget separately</li>
                  <li>Extra nights beyond the treatment stay</li>
                  <li>Bone grafting or a sinus lift, if your scan shows one is needed</li>
                  <li>Travel insurance</li>
                </ul>
              </div>
            </div>
            <p>
              Because the hotel and transfers are already inside the figure you finance, a package at £2,800 genuinely
              is £78 a month over 36 months at 0% APR representative — there is no second bill for accommodation
              arriving afterwards. Flights are the exception and are the one cost you should plan for outside the
              finance agreement. The package prices themselves, and what each one covers treatment by treatment, are
              set out on the{" "}
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">2026 Turkey teeth price guide</Link>.
            </p>

            <h2 id="scenario" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Example Treatment Scenario</h2>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-4">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Example Treatment Scenario — illustrative, not a real patient and not a credit offer</p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li><strong>Treatment:</strong> 20 E-max veneers, full upper and lower set</li>
                <li><strong>Treatment price:</strong> £3,800 (hotel and transfers included, flights not included)</li>
                <li><strong>Deposit:</strong> £500</li>
                <li><strong>Balance financed:</strong> £3,300</li>
                <li><strong>Rate used:</strong> 0% APR representative</li>
                <li><strong>Total repayable on the finance:</strong> £3,300 — £3,800 including the deposit</li>
              </ul>
              <div className="overflow-x-auto rounded-xl mt-4 border border-gray-200">
                <table className="w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-white border-b border-gray-200 text-gray-600">
                      <th className="px-4 py-2 text-left font-semibold">Term</th>
                      <th className="px-4 py-2 text-right font-semibold">Monthly payment</th>
                      <th className="px-4 py-2 text-right font-semibold">Total repayable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioTerms.map((r, i) => (
                      <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2">{r.term}</td>
                        <td className="px-4 py-2 text-right font-bold text-[#1e40af]">{r.monthly}</td>
                        <td className="px-4 py-2 text-right">£3,300</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Figures are rounded to the nearest pound. The total repayable equals the amount financed because the
                illustration uses a 0% APR representative rate; on an interest-bearing agreement the total repayable
                would be higher than £3,300. Eligibility, the rate offered and the terms available are decided by the
                finance provider, not by the clinic.
              </p>
            </div>

            <h2 id="mechanics" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">What You Are Actually Signing</h2>
            <p>
              Financing treatment abroad means two agreements, not one, and it is worth being clear about which does
              what. The credit agreement is with a UK lender and governs the money: the APR, the term, the monthly
              payment, the total repayable and the 14-day cooling-off period. The treatment agreement is with the
              clinic in Turkey and governs the dentistry: what is being done, what the guarantee covers, and who pays
              for a return visit if remedial work is needed.
            </p>
            <p>
              The practical consequence is that your repayments carry on to the agreed schedule whatever happens
              clinically. Cancelling a credit agreement inside the cooling-off period is straightforward; unwinding it
              because you are unhappy with the treatment is not. Establish the guarantee terms in writing before you
              sign either document. For how payment plans compare with dental loans, 0% credit cards and NHS band
              charges more generally, see{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">dental finance in the UK</Link>.
            </p>

            <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Eligibility, and What Happens With Bad Credit</h2>
            <p>
              Lenders generally look for UK residency, an age of 18 or over, a UK bank account and regular income, and
              they assess affordability alongside your credit file. A poor credit history does not rule you out
              automatically, but approval is never guaranteed for anyone — it rests on the lender&apos;s criteria at the
              time you apply — and adverse credit commonly means a higher rate, a shorter term, or a deposit being
              required. Putting down a deposit reduces the amount borrowed and can change a marginal decision.
            </p>
            <p>
              The full picture on adverse credit, including what to do after a declined application, is on the{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">UK dental finance page</Link>{" "}
              rather than repeated here. If paying for treatment at all is the problem, the{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">can&apos;t afford dental treatment guide</Link>{" "}
              covers NHS routes first.
            </p>

            <h2 id="uk-comparison" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Monthly Cost in Turkey vs the UK</h2>
            <p>Financing does not close the gap between UK and Turkish pricing — it spreads it. A full set of 20 veneers over 36 months:</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
                <p className="text-xs text-gray-500 mb-1">UK, financed over 36 months</p>
                <p className="text-2xl font-extrabold text-red-500">£500/mo</p>
                <p className="text-xs text-gray-400">£18,000 over 36 months</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Turkey, financed over 36 months</p>
                <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
                <p className="text-xs text-gray-400">£3,800 over 36 months</p>
              </div>
            </div>
            <p>
              Both figures use the same 0% APR representative basis, so the monthly saving tracks the headline saving.
              Set against that, treatment abroad puts you back in the UK during the months when problems are most
              likely to appear, and the{" "}
              <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">risks of getting your teeth done in Turkey</Link>{" "}
              are worth reading before the cost comparison decides it for you.
            </p>

            <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
              <p className="font-bold text-xl mb-2">Check your finance eligibility</p>
              <p className="text-blue-200 mb-4">
                An eligibility check is a soft search and does not affect your credit score. Approval is subject to a
                full application, a credit check and the lender&apos;s criteria.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Check Eligibility</Link>
                <Link href="/free-treatment-plan" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Free Treatment Plan</Link>
                <Link href="/price-calculator" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Price Calculator</Link>
              </div>
            </div>

            <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Paying Monthly for Turkey Teeth: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SourcesList
          sources={[
            { label: "FCA — Consumer credit and the rules lenders follow", href: "https://www.fca.org.uk/consumers/credit-borrowing" },
            { label: "MoneyHelper — Credit checks and your credit report", href: "https://www.moneyhelper.org.uk/en/everyday-money/credit-and-purchases" },
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "NHS — Dental treatment band charges", href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/" },
          ]}
        />

        <RelatedLinksGrid
          title="Next Steps"
          links={[
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Every treatment and package price on one page, with UK comparisons.", href: "/prices/turkey-teeth-cost" },
            { title: "Dental Finance UK", desc: "Payment plans, dental loans, 0% cards and what bad credit means.", href: "/finance-options-uk" },
            { title: "Monthly Payment Plans", desc: "The per-treatment monthly figures on one page, from £6/month.", href: "/monthly-payment" },
            { title: "Veneers Turkey Cost", desc: "Per-tooth and full-set veneer prices by material.", href: "/prices/veneers-turkey-cost" },
            { title: "Full Mouth Dental Implants Turkey Cost", desc: "All-on-4 and All-on-6 pricing across both arches.", href: "/blog/full-mouth-implants-uk-vs-turkey" },
            { title: "Dental Tourism Finance Explained", desc: "Every funding route for treatment abroad, compared side by side.", href: "/blog/dental-tourism-finance-explained" },
          ]}
        />
      </div>
    </>
  );
}
