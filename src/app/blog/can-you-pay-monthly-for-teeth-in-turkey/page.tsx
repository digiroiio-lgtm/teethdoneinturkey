import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const revalidate = 86400;

const TITLE = "Pay Monthly Turkey Teeth: Packages from £78/Month";
const DESCRIPTION =
  "Pay monthly for Turkey teeth packages from £78/month over 36 months. Package prices, what finance covers, deposits and eligibility for UK patients.";

// All-inclusive package totals are the figures published on this site's own
// package and price pages (Hollywood Smile £2,800/£3,100, All-on-6 £5,600,
// All-on-4 £4,500, 20 E-max veneers £3,800 at £190/tooth). Monthly columns are
// those totals divided across the term at 0% APR representative, so no new or
// conflicting price is introduced here.
const packageRows = [
  { pkg: "Hollywood Smile — 20 zirconia crowns", inclusive: "Hotel + transfers", total: "£2,800", m12: "£234", m24: "£117", m36: "£78" },
  { pkg: "Hollywood Smile — 24 zirconia crowns", inclusive: "Hotel + transfers + cleaning", total: "£3,100", m12: "£259", m24: "£130", m36: "£86" },
  { pkg: "Full smile makeover — 20 E-max veneers", inclusive: "Treatment only", total: "£3,800", m12: "£317", m24: "£159", m36: "£106" },
  { pkg: "All-on-4 — one arch", inclusive: "Treatment only", total: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
  { pkg: "All-on-6 — one arch", inclusive: "Hotel (8 nights) + transfers", total: "£5,600", m12: "£467", m24: "£234", m36: "£156" },
  { pkg: "Full mouth All-on-4 — both arches", inclusive: "Treatment only", total: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
];

// Inclusions mirror /guides/turkey-teeth-packages so the two pages cannot drift.
const financeCoverRows = [
  { item: "Dental treatment itself", covered: "Yes", note: "The quoted package total is what you finance." },
  { item: "Hotel accommodation", covered: "If in the package", note: "Included in Hollywood Smile and All-on-6 packages. Confirm the number of nights." },
  { item: "Airport and clinic transfers", covered: "If in the package", note: "Confirm both directions are included." },
  { item: "Flights", covered: "No", note: "Booked and paid separately. Return UK–Antalya is typically £80–£180 on budget carriers." },
  { item: "CBCT scan (implant patients)", covered: "Usually not", note: "Often charged separately at £60–£120." },
  { item: "Second visit (implant crown fitting)", covered: "Often not", note: "Add roughly £250–£500 if your quote excludes it." },
  { item: "Sedation, whitening, extras", covered: "No", note: "Chargeable on the day — whitening of remaining natural teeth is £250." },
];

const faqs = [
  {
    question: "Can you pay monthly for Turkey teeth packages?",
    answer:
      "Yes. UK-based finance is applied to the package total, not to individual teeth, so an all-inclusive package can be spread across 12, 24 or 36 monthly payments. A £2,800 Hollywood Smile package of 20 zirconia crowns including hotel and transfers works out at about £78 a month over 36 months at 0% APR representative. Finance is subject to a credit check and lender approval, and not everyone will qualify.",
  },
  {
    question: "Can you get Turkey teeth on finance?",
    answer:
      "Yes, but the finance is a UK credit agreement rather than something the Turkish clinic provides. You borrow in the UK, pay the clinic for your treatment, and repay the lender by direct debit from your UK bank account. Approval depends on a credit assessment by the lender.",
  },
  {
    question: "Can you get your teeth done in Turkey on finance with no deposit?",
    answer:
      "Some plans are offered without a deposit and some require one, typically between 10% and 20% of the treatment total. A deposit lowers the amount you borrow and therefore the monthly payment. Whether a deposit is required for you is decided by the lender at application, based on your credit profile and the term you choose.",
  },
  {
    question: "How much are Turkey teeth per month?",
    answer:
      "It depends on the package total and the term. At 0% APR representative over 36 months, the packages published on this site work out at roughly £78 a month for a £2,800 Hollywood Smile, £106 for a £3,800 full set of 20 E-max veneers, £125 for a £4,500 All-on-4 arch, £156 for a £5,600 All-on-6 arch and £250 for a £9,000 full mouth All-on-4. Shorter terms mean higher monthly payments.",
  },
  {
    question: "Does the monthly payment cover flights as well as the package?",
    answer:
      "No. Flights are not part of a Turkey dental package and are not included in the amount you finance. Budget a further £80–£180 for return flights from the UK to Antalya, paid separately at the time you book.",
  },
  {
    question: "Can I pay off Turkey teeth finance early?",
    answer:
      "Most UK dental finance agreements allow early settlement. The exact terms, including whether any interest is rebated, are set out in the pre-contract credit information and the credit agreement you are shown before you sign.",
  },
  {
    question: "Is 0% interest available?",
    answer:
      "0% APR plans exist in the UK dental finance market and are offered to applicants who meet the lender's criteria, usually on shorter terms. Whether you are offered 0% depends on your credit profile and the term you apply for, and it cannot be confirmed before the lender has assessed your application. If you are not offered 0%, the plan will carry interest and a total repayable higher than the amount borrowed.",
  },
  {
    question: "Does applying affect my credit score?",
    answer:
      "A pre-qualification check is normally a soft search, which is visible only to you and does not affect your score. Submitting a full application creates a hard search that is recorded on your credit file and can be seen by other lenders. Check which type of search a provider is running before you apply.",
  },
  {
    question: "I have bad credit — can I still apply?",
    answer:
      "You can apply, and some lenders in this market specialise in applicants with impaired credit, but a poorer credit history makes approval less likely and any approval more likely to carry a higher APR, a shorter term or a larger deposit. No provider can guarantee approval, and a decline is a realistic outcome. If you are declined, spreading the treatment over separate stages or saving a larger deposit first are the usual alternatives.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
        path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-01-01"
        dateModified="2026-09-17"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Pay Monthly for Turkey Teeth", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
        ]}
      />
      {/* Plain <script> so the FAQPage graph is in the server HTML that crawlers
          and AI answer engines read, matching ArticleJsonLd. */}
      <script
        id="faq-schema-can-you-pay-monthly-for-teeth-in-turkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            <p className="text-green-700 text-sm mt-1">UK-based finance on the full package total, over 12, 24 or 36 months. 0% APR representative where you meet the lender&apos;s criteria. Subject to status and approval.</p>
          </div>

          <p>One of the most common barriers to getting dental treatment — even at significantly lower Turkish prices — is finding the upfront cost. Monthly payment plans solve this by letting you pay over 12, 24, or 36 months while your treatment is completed in Turkey.</p>

          <p>This applies to whole packages, not just individual treatments. Finance is applied to the <strong>package total</strong>, so an all-inclusive Turkey teeth package that bundles crowns or veneers with hotel and transfers can be spread across monthly payments in exactly the same way — from around <strong>£78 a month</strong> over 36 months for a £2,800 Hollywood Smile package. Flights sit outside the package and outside the finance.</p>

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
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
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
          <p className="text-xs text-gray-500">* Example calculations, not a credit offer. Monthly figures are the treatment total divided across the term at <strong>0% APR representative</strong>, so the total repayable equals the treatment total. Any deposit reduces the amount borrowed. Your actual APR, term, deposit and total repayable are set by the lender following a credit assessment. Finance is subject to status and lender approval, and not everyone will qualify.</p>

          <h2 id="packages-pay-monthly" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Can You Pay Monthly for Turkey Teeth Packages?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 my-4">
            <p className="text-gray-800"><strong>Short answer:</strong> yes. A Turkey teeth package is quoted as a single total — treatment plus, in most cases, hotel and transfers — and it is that total you finance. Packages on this site start at <strong>£2,800</strong> for 20 zirconia crowns including hotel and VIP transfers, which is about <strong>£78 a month over 36 months</strong> at 0% APR representative. Flights are extra and are not financed.</p>
          </div>
          <p>Because the package is bundled, paying monthly for one is usually simpler than paying monthly per treatment: there is one figure to borrow against and one date the balance is settled with the clinic. The table below takes the package totals published elsewhere on this site and divides them across each term.</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-left">Bundled</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3 text-right">12 mo.</th>
                  <th className="px-4 py-3 text-right">24 mo.</th>
                  <th className="px-4 py-3 text-right">36 mo.</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.pkg}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.inclusive}</td>
                    <td className="px-4 py-3 text-right font-semibold">{r.total}</td>
                    <td className="px-4 py-3 text-right">{r.m12}/mo</td>
                    <td className="px-4 py-3 text-right">{r.m24}/mo</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">* Example calculations at 0% APR representative over the stated term, with no deposit applied. Not a credit offer. Subject to status, credit assessment and lender approval. &quot;Treatment only&quot; packages do not bundle hotel or transfers — see the inclusions table below before comparing totals.</p>
          <p>
            For the package inclusions themselves, rather than the payment side, see{" "}
            <Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] font-semibold hover:underline">what is actually included in a Turkey teeth package</Link>{" "}
            and the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">full Turkey teeth price list</Link>.
            If you want the monthly figures worked through by treatment total rather than by package, see{" "}
            <Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] font-semibold hover:underline">how much Turkey teeth cost per month</Link>.
          </p>

          <h2 id="what-finance-covers" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">What the Monthly Payment Covers — and What It Doesn&apos;t</h2>
          <p>This is the part that catches UK patients out. Finance covers the figure on the clinic&apos;s quote. Anything the quote excludes, you pay separately and out of pocket, so it is worth establishing the exclusions before you decide what to borrow.</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">In the financed total?</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {financeCoverRows.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.item}</td>
                    <td className={`px-4 py-3 font-semibold ${r.covered === "Yes" ? "text-green-700" : r.covered === "No" ? "text-red-600" : "text-amber-700"}`}>{r.covered}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>In practice, a £2,800 package financed over 36 months costs a UK patient about £78 a month plus a one-off £80–£180 for flights. An implant patient whose quote excludes the second visit should plan for that trip separately as well.</p>

          <h2 id="example-scenario" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Example Treatment Scenario</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Illustrative only — not a real patient and not a credit offer</p>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Treatment</dt><dd className="font-semibold text-gray-900">20 zirconia crowns (Hollywood Smile package)</dd></div>
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Package total</dt><dd className="font-semibold text-gray-900">£2,800 — includes hotel and VIP transfers</dd></div>
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Deposit</dt><dd className="font-semibold text-gray-900">£500</dd></div>
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Amount financed</dt><dd className="font-semibold text-gray-900">£2,300</dd></div>
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Paid separately</dt><dd className="font-semibold text-gray-900">Return flights, £80–£180</dd></div>
              <div className="flex justify-between sm:block"><dt className="text-gray-500">Trips / duration</dt><dd className="font-semibold text-gray-900">1 trip, 5–7 days</dd></div>
            </dl>
            <div className="overflow-x-auto rounded-xl my-4 bg-white border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-2 text-left">Term</th>
                    <th className="px-4 py-2 text-right">Monthly payment</th>
                    <th className="px-4 py-2 text-right">Total repayable</th>
                    <th className="px-4 py-2 text-right">Total cost incl. deposit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { term: "6 months", monthly: "£383", total: "£2,300", all: "£2,800" },
                    { term: "12 months", monthly: "£192", total: "£2,300", all: "£2,800" },
                    { term: "18 months", monthly: "£128", total: "£2,300", all: "£2,800" },
                    { term: "24 months", monthly: "£96", total: "£2,300", all: "£2,800" },
                    { term: "36 months", monthly: "£64", total: "£2,300", all: "£2,800" },
                  ].map((r, i) => (
                    <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-medium">{r.term}</td>
                      <td className="px-4 py-2 text-right text-[#1e40af] font-bold">{r.monthly}/mo</td>
                      <td className="px-4 py-2 text-right">{r.total}</td>
                      <td className="px-4 py-2 text-right">{r.all}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">Figures are worked at <strong>0% APR representative</strong>, which is why the total repayable matches the amount financed. Where 0% is not available on your application, an interest-bearing plan will carry a higher total repayable than the amount borrowed, and the lender must show you that figure before you sign. Eligibility, the deposit required and the APR offered are decided by the lender following a credit check. This is an illustration, not a quotation, and not everyone will qualify.</p>
          </div>

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

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs About Paying Monthly for Turkey Teeth</h2>
          <div className="space-y-3 my-4">
            {faqs.map(faq => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 text-sm mb-1">{faq.question}</p>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Pre-qualify in 60 seconds</p>
            <p className="text-blue-200 mb-4">Pre-qualification uses a soft search, so it does not affect your credit score. Subject to status and lender approval — not everyone will qualify.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Pre-Qualify Now — Free</Link>
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
