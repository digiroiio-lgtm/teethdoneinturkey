import type { Metadata } from "next";
import Link from "next/link";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import { REVIEWER_PERSON } from "@/lib/reviewer";

export const revalidate = 86400;

// Differentiated 2026-09-11. This URL earned 0 Search Console impressions over
// 2026-09-04..09-10 while /finance-options-uk earned 92 — the two carried
// near-identical titles ("Turkey Teeth Finance: Pay Monthly from £82" vs
// "Dental Finance UK: Pay Monthly for Turkey Treatment") for one intent, and
// Google suppressed this one.
//
// It is not a page to merge away, though: GA4 (2026-08-29..09-10) shows it is
// the single most-cited landing page in AI search — 6 of the site's 12
// chatgpt.com / ai-assistant sessions land here, more than any other URL and
// more than Google organic sent to the whole site. So the two pages are being
// split by job instead: /finance-options-uk answers the generic UK
// dental-finance question (loans, plans, bad credit), and this page is the
// per-treatment monthly-cost figures, which is what AI assistants are citing it
// for. /blog/can-you-pay-monthly-for-teeth-in-turkey (position 10.5) keeps the
// "can you pay monthly" question intent.
//
// ── Rebuilt 2026-09-27: factual correction + the missing finance architecture ──
//
// Search Console was unavailable this run (the Supermetrics trial behind the GSC
// connection expired 2026-09-17), so no new query evidence was used and NOTHING
// about this page's lane, URL, canonical or intent was changed. The work is the
// one category of change that needs no fresh query data: the page's own numbers
// were wrong, and it is the site's most AI-cited URL, so what it says is what
// answer engines quote about this brand's finance.
//
// What was wrong:
//  * "From £82/month" was the site's headline finance figure in 27 live places
//    no price on this site supports it. It traced to one row of
//    MonthlyPaymentTable that priced "10 veneers" at £2,800 — £2,800 is the
//    Hollywood Smile 20-ZIRCONIA-CROWN package price, and 10 veneers are £1,900
//    (E-max) on /prices/veneers-turkey-cost. Even on £2,800 the maths was wrong:
//    £2,800 / 36 = £78, not £82. Root cause fixed in the component.
//  * The veneers term cards read £267 / £140 / £95 for 12 / 24 / 36 months on a
//    £3,800 treatment. None of the three reconciles to £3,800 (they imply
//    £3,204, £3,360 and £3,420) and all three contradicted the £106 this same
//    page published for £3,800 two sections earlier.
//  * Single implants were priced "£420–£600 all-inclusive" against £250 (Osstem)
//    and £930 (Straumann) on /prices/dental-implants-turkey-cost, and All-on-6
//    both arches at £11,000/£306 against the £5,600 per-arch price that gives
//    £11,200/£312. Both realigned to the canonical cost pages.
//  * "65–82% cheaper" was wrong at both ends of its own comparison table, which
//    actually spans ~62% (All-on-4) to ~87% (Hollywood Smile).
//  * No deposit, APR or total-repayable figure appeared anywhere on a page whose
//    entire subject is monthly payments — so none of the monthly figures could
//    be checked by a reader. Added as labelled example scenarios.
//
// YMYL wording was tightened throughout: a false-scarcity line ("Limited
// finance approvals available each month — apply early to secure your slot") is
// gone, "providers who consider all profiles" / "most situations considered"
// now say what adverse credit actually means, the "risk reversal guarantee" is
// described as what it is (a no-obligation plan, not a guarantee), the clinic
// warranty is separated from a clinical guarantee of outcome, and the
// "GDC-Registered Partners" card — whose own subtitle said the dentists are
// registered with international equivalents, not the GDC — no longer claims UK
// regulatory registration.
//
// Cannibalisation: the bad-credit content was deliberately CUT back to a
// pointer, not expanded. /finance-options-uk owns generic UK finance and bad
// credit (15 impr @ 7.6 on "teeth on finance bad credit") and
// /blog/can-you-pay-monthly-for-teeth-in-turkey owns the "can you pay monthly"
// question (70 impr @ 10.5). This page stays strictly on per-treatment monthly
// figures, which is the lane the 09-11 split gave it.
export const metadata: Metadata = {
  alternates: { canonical: "/monthly-payment" },
  title: { absolute: "Turkey Teeth Monthly Payments: Cost Per Treatment" },
  description:
    "What Turkey teeth cost per month: 10 veneers from £53, a 20-crown Hollywood Smile from £78, a 20-veneer makeover from £106, All-on-4 from £125. 0% APR rep.",
};

// Every Turkey price below is the figure already published on this site's cost
// pages, so this page introduces no competing price:
//   10 E-max veneers £1,900, 20 E-max veneers £3,800  → /prices/veneers-turkey-cost
//   Hollywood Smile 20 zirconia crowns £2,800         → /prices/hollywood-smile-turkey-package
//   Single implant + crown £250 Osstem / £930 Straumann,
//   All-on-4 £4,500 per arch, All-on-6 £5,600 per arch → /prices/dental-implants-turkey-cost
// Monthly figures are the total divided across the term at 0% APR
// representative with no deposit, ROUNDED UP to the nearest £1 so a quoted
// instalment is never lower than the real one.
const ukVsTurkeyComparison = [
  { treatment: "Porcelain (E-max) veneers, per tooth", uk: "£800–£1,000", turkey: "£190–£250", monthly: "Financed as part of a plan" },
  { treatment: "10 E-max veneers", uk: "£8,000–£10,000", turkey: "From £1,900", monthly: "From £53/mo" },
  { treatment: "Smile makeover (20 E-max veneers)", uk: "£16,000–£20,000", turkey: "From £3,800", monthly: "From £106/mo" },
  { treatment: "Hollywood Smile (20 zirconia crowns, inc. hotel & transfers)", uk: "£18,000–£22,000", turkey: "£2,800", monthly: "From £78/mo" },
  { treatment: "Single implant + crown", uk: "£2,000–£4,500", turkey: "£250 (Osstem) – £930 (Straumann)", monthly: "Usually paid outright" },
  { treatment: "All-on-4, one arch", uk: "£12,000–£18,000", turkey: "From £4,500", monthly: "From £125/mo" },
  { treatment: "All-on-6, one arch", uk: "£15,000–£22,000", turkey: "From £5,600", monthly: "From £156/mo" },
];

// Deposit examples: the deposit is paid upfront and only the remaining balance
// is financed, so the monthly figure is balance ÷ term (0% APR representative,
// rounded up). Total repayable = deposit + balance, i.e. the treatment total.
const depositScenarios = [
  {
    label: "10 E-max veneers",
    total: "£1,900",
    deposit: "£400",
    balance: "£1,500",
    terms: [
      { term: "6 months", monthly: "£250" },
      { term: "12 months", monthly: "£125" },
      { term: "18 months", monthly: "£84" },
      { term: "24 months", monthly: "£63" },
      { term: "36 months", monthly: "£42" },
    ],
  },
  {
    label: "Hollywood Smile — 20 zirconia crowns",
    total: "£2,800",
    deposit: "£500",
    balance: "£2,300",
    terms: [
      { term: "6 months", monthly: "£384" },
      { term: "12 months", monthly: "£192" },
      { term: "18 months", monthly: "£128" },
      { term: "24 months", monthly: "£96" },
      { term: "36 months", monthly: "£64" },
    ],
  },
  {
    label: "Smile makeover — 20 E-max veneers",
    total: "£3,800",
    deposit: "£500",
    balance: "£3,300",
    terms: [
      { term: "6 months", monthly: "£550" },
      { term: "12 months", monthly: "£275" },
      { term: "18 months", monthly: "£184" },
      { term: "24 months", monthly: "£138" },
      { term: "36 months", monthly: "£92" },
    ],
  },
  {
    label: "All-on-4 implants — one arch",
    total: "£4,500",
    deposit: "£1,000",
    balance: "£3,500",
    terms: [
      { term: "6 months", monthly: "£584" },
      { term: "12 months", monthly: "£292" },
      { term: "18 months", monthly: "£195" },
      { term: "24 months", monthly: "£146" },
      { term: "36 months", monthly: "£98" },
    ],
  },
];

// Illustrative composites built from the prices and treatment timelines already
// published on this site. These are NOT real patients and are not presented as
// case studies or testimonials — each is labelled an Example Treatment Scenario
// on the page, and no name, initials or review is attached to any of them.
const exampleScenarios = [
  {
    profile: "Upper and lower front teeth, patient in their 30s, Bristol",
    treatment: "10 E-max porcelain veneers (upper arch)",
    price: "£1,900",
    deposit: "£400",
    balance: "£1,500",
    monthly: "£63/month over 24 months",
    repayable: "£1,900 (0% APR representative)",
    duration: "5–7 days",
    trips: "1",
    included: "Consultation, digital smile design, temporary veneers, hotel and airport transfers",
    rationale:
      "Only the visible upper arch was treated, which is why the total is well under a 20-unit makeover. A 24-month term was chosen over 36 to clear the balance sooner while keeping the monthly figure close to a phone contract.",
  },
  {
    profile: "Worn and discoloured teeth, patient in their 40s, Manchester",
    treatment: "20 zirconia crowns (Hollywood Smile package)",
    price: "£2,800",
    deposit: "£500",
    balance: "£2,300",
    monthly: "£96/month over 24 months",
    repayable: "£2,800 (0% APR representative)",
    duration: "5–7 days",
    trips: "1",
    included: "Consultation, CBCT scan, 20 zirconia crowns, hotel and VIP airport transfers",
    rationale:
      "Crowns rather than veneers because the existing teeth were already heavily worn — a veneer needs sound enamel to bond to. The package price includes hotel and transfers, so the financed figure is close to the true all-in cost once flights are added separately.",
  },
  {
    profile: "Multiple failing teeth in the upper jaw, patient in their 60s, Glasgow",
    treatment: "All-on-4 implants, upper arch",
    price: "£4,500",
    deposit: "£1,000",
    balance: "£3,500",
    monthly: "£98/month over 36 months",
    repayable: "£4,500 (0% APR representative)",
    duration: "5–7 days, then 3–4 days on a second visit",
    trips: "2, roughly 3–6 months apart",
    included: "Consultation, CBCT scan, 4 implants, temporary bridge, final bridge on the second visit, hotel and transfers",
    rationale:
      "A full-arch bridge on four implants rather than individual implants per tooth, which is both the usual clinical plan and far cheaper. The longer 36-month term was used to keep the monthly figure under £100 on the largest of these totals.",
  },
];

const financeFaqs = [
  {
    q: "How much is a Turkey teeth monthly payment?",
    a: "It depends entirely on the treatment total and the term. Using the prices published on this site and a 36-month term at 0% APR representative: 10 E-max veneers (£1,900) work out at £53 a month, a 20-crown Hollywood Smile package (£2,800) at £78, a 20-veneer smile makeover (£3,800) at £106, All-on-4 for one arch (£4,500) at £125 and All-on-6 for one arch (£5,600) at £156. Paying a deposit up front lowers these figures, because only the remaining balance is financed.",
  },
  {
    q: "Is the 0% APR figure what I will actually pay?",
    a: "Not necessarily. 0% APR is the representative example used for every monthly figure on this page, which is why the total repayable matches the treatment total. Your actual APR, term, deposit and total repayable are set by the finance provider based on your application, not by us. Some applicants are offered an interest-bearing plan instead, in which case the total repayable is higher than the treatment price. You will see the APR and the total repayable in writing before you sign anything.",
  },
  {
    q: "Do I need a deposit?",
    a: "Not always, but a deposit lowers the monthly figure because only the balance is financed. For example, a £3,800 smile makeover with a £500 deposit leaves £3,300 to finance, which is £92 a month over 36 months instead of £106. Whether a deposit is required, and how much, is decided by the finance provider.",
  },
  {
    q: "What is the total repayable?",
    a: "At 0% APR representative with no interest added, the total repayable is the same as the treatment price — £2,800 financed over 36 months repays £2,800. If you are offered an interest-bearing plan, the total repayable will be more than the treatment price, and a longer term will usually mean paying more overall. Always compare the total repayable, not just the monthly figure.",
  },
  {
    q: "Can I finance a single implant or one veneer?",
    a: "Usually not on its own. A single Osstem implant with a crown is £250 and one E-max veneer is £190, both of which fall below the minimum amount finance providers will lend, so single-unit treatment is normally paid outright. Finance is generally used for multi-unit plans — a set of veneers or crowns, or full-arch implant work.",
  },
  {
    q: "Do the monthly figures include flights?",
    a: "No. The treatment totals used on this page include the clinical work, and the Hollywood Smile and All-on-4 packages also include hotel and airport transfers, but flights are always booked and paid separately. Any bone graft or sinus lift your CBCT scan shows you need is also quoted separately.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "Pre-qualification uses a soft search, which is recorded on your file for you to see but is not visible to other lenders and does not affect your score. A full application leaves a hard footprint that other lenders can see, in the same way as applying for a credit card or loan.",
  },
  {
    q: "What if I need to cancel after finance is approved?",
    a: "A regulated credit agreement carries a statutory 14-day right to withdraw. After that period the terms of your agreement apply, and you would still owe the balance to the provider even if you decide not to travel. The specific terms are set out in the agreement you are sent before you sign.",
  },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

// Hand-rolled rather than using <ArticleJsonLd>, which emits BlogPosting. This
// is a commercial finance page, not an article, and marking it up as a
// BlogPosting misdescribes it. WebPage + BreadcrumbList + FAQPage is the honest
// set. The page previously had NO structured data at all despite carrying eight
// FAQs — on the site's most AI-cited URL. Plain <script>, not next/script, so
// the JSON-LD is in the server HTML that crawlers and answer engines read.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/monthly-payment#webpage`,
      url: `${SITE_URL}/monthly-payment`,
      name: "Turkey Teeth Monthly Payments: Cost Per Treatment",
      description:
        "What dental treatment in Turkey costs per month, treatment by treatment, with deposit, term and total-repayable examples at 0% APR representative.",
      inLanguage: "en-GB",
      dateModified: "2026-09-27",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      reviewedBy: REVIEWER_PERSON,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/monthly-payment#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Dental Finance UK", item: `${SITE_URL}/finance-options-uk` },
        { "@type": "ListItem", position: 3, name: "Monthly Payments", item: `${SITE_URL}/monthly-payment` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/monthly-payment#faq`,
      mainEntity: financeFaqs.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function MonthlyPaymentPage() {
  return (
    <>
      <script
        id="monthly-payment-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Turkey Teeth Monthly Payments: What Each Treatment Costs Per Month</h1>
          <p className="text-xl text-blue-200 mb-2">10 veneers from £53, a 20-crown Hollywood Smile from £78, a 20-veneer makeover from £106, All-on-4 from £125 a month</p>
          <p className="text-blue-300 text-sm mb-8">0% APR representative over 36 months · Subject to status and lender approval · Free treatment plan before you apply</p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {[
              { icon: "💷", text: "Paid in pounds, from the UK" },
              { icon: "🦷", text: "Prices match our published cost pages" },
              { icon: "🇬🇧", text: "UK patient support team" },
              { icon: "🔒", text: "No commitment until you travel" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-full px-4 py-1.5">
                <span>{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Multi-CTA block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-5 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">
              ✅ Get Free Treatment Plan
            </Link>
            <Link href="/book-consultation" className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm">
              📋 Check Finance Eligibility
            </Link>
            <Link href="/book-consultation" className="border-2 border-white text-white px-5 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">
              📤 Upload Dental X-Ray
            </Link>
            <a href="https://wa.me/905353998999" className="bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2">
              💬 WhatsApp a Treatment Coordinator
            </a>
          </div>

          <p className="text-blue-300 text-xs mt-4">Every monthly figure on this page is a worked example, not a credit offer. Finance is subject to a credit check and lender approval.</p>
        </div>
      </div>

      {/* ── Payment Table ── */}
      <MonthlyPaymentTable />

      {/* ── UK vs Turkey Comparison ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">UK vs Turkey Dental Cost Comparison</h2>
          <p className="text-gray-600 mb-6">
            What each treatment costs privately in the UK, what it costs in Turkey, and what the Turkey price works out at over 36 months.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK private price</th>
                  <th className="px-4 py-3 text-right">Turkey price</th>
                  <th className="px-4 py-3 text-right">Over 36 months</th>
                </tr>
              </thead>
              <tbody>
                {ukVsTurkeyComparison.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{row.monthly}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Across these treatments the Turkey price is roughly <strong>62% to 87% lower</strong> than the UK private
            equivalent, depending on the treatment — All-on-4 is at the lower end of that range and the Hollywood Smile
            package at the top. Monthly figures are the Turkey total divided across 36 payments at 0% APR
            representative, rounded up, with no deposit. Subject to status and lender approval.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full veneers cost guide</Link>
            <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full implants cost guide</Link>
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ All turkey teeth prices</Link>
          </div>
        </div>
      </section>

      {/* ── Content sections ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What &ldquo;Turkey Teeth on Finance&rdquo; Actually Means</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              &ldquo;Turkey teeth finance&rdquo;, &ldquo;turkey teeth on finance&rdquo; and &ldquo;Turkey dental payment plan&rdquo; all describe the same thing: borrowing arranged in the UK, in pounds, so you do not have to pay the full treatment cost upfront. You are assessed and repay in the UK; the clinic is paid for your treatment in Turkey. It is not a loan taken out in Turkey, and it is not paid in lira.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Two things decide what you actually pay: the treatment total and the term you choose. At 0% APR representative, a longer term simply divides the same total across more months rather than adding interest — but if you are offered an interest-bearing plan instead, a longer term means paying more overall, so compare the total repayable and not just the monthly figure. For the difference between a payment plan, dental finance, a personal loan and NHS charges, see{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">how dental finance works in the UK, including dental loans and bad credit</Link>, and if you are weighing up affordability more broadly, read{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">what to do if you cannot afford dental treatment in the UK</Link>.
              {" "}Want to see this plan set against a personal loan, a 0% credit card or simply saving up? Our guide to{" "}
              <Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] font-semibold hover:underline">funding dental treatment abroad</Link>{" "}
              lays out every option side by side.
            </p>
          </div>

          {/* ── Deposit / balance / total repayable scenarios (Step 7 architecture) ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Payment Scenarios: Deposit, Balance and Total Repayable</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A monthly figure on its own does not tell you much. What decides it is the treatment total, how much you
              put down as a deposit, and how many months you spread the balance over. These are worked examples using
              the prices published on this site — each one shows the deposit, the balance actually financed, the monthly
              payment across five terms, and the total repayable.
            </p>

            <div className="space-y-6">
              {depositScenarios.map(sc => (
                <div key={sc.label} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{sc.label}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Example calculation</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 text-sm">
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-500">Treatment cost</p>
                      <p className="font-bold text-gray-900">{sc.total}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-500">Deposit</p>
                      <p className="font-bold text-gray-900">{sc.deposit}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-500">Balance financed</p>
                      <p className="font-bold text-gray-900">{sc.balance}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-500">Total repayable</p>
                      <p className="font-bold text-[#1e40af]">{sc.total}</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700">
                          {sc.terms.map(t => (
                            <th key={t.term} className="px-3 py-2 font-semibold text-center whitespace-nowrap">{t.term}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {sc.terms.map(t => (
                            <td key={t.term} className="px-3 py-3 text-center font-bold text-[#1e40af] whitespace-nowrap">{t.monthly}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>How to read these.</strong> Each is an example calculation at <strong>0% APR
                representative</strong>, not a credit offer and not a quote. The monthly figure is the financed balance
                divided by the term, rounded up to the nearest pound, which is why the total repayable equals the
                treatment cost. Your own deposit, term, APR and total repayable are set by the finance provider when it
                assesses your application. All finance is subject to status, a credit check and lender approval, and
                not everyone will qualify. Flights are not included in any total on this page.
              </p>
            </div>
          </div>

          {/* ── Example Treatment Scenarios (Step 8 patient-case architecture) ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Example Treatment Scenarios</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              What a whole decision looks like end to end — treatment, price, deposit, monthly payment, how long it
              takes and how many trips. <strong>These are illustrative scenarios, not real patients</strong>: each one
              is built from the prices and treatment timelines published elsewhere on this site to show how the numbers
              fit together. No names, initials or reviews are attached to them.
            </p>

            <div className="space-y-5">
              {exampleScenarios.map(sc => (
                <div key={sc.treatment} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                    Example Treatment Scenario
                  </span>
                  <h3 className="font-bold text-gray-900 mb-1">{sc.treatment}</h3>
                  <p className="text-sm text-gray-500 mb-4">{sc.profile}</p>

                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
                    {[
                      { k: "Treatment price", v: sc.price },
                      { k: "Deposit", v: sc.deposit },
                      { k: "Balance financed", v: sc.balance },
                      { k: "Example monthly payment", v: sc.monthly },
                      { k: "Total repayable", v: sc.repayable },
                      { k: "Time in Turkey", v: sc.duration },
                      { k: "Trips required", v: sc.trips },
                    ].map(item => (
                      <div key={item.k} className="bg-gray-50 rounded-lg px-3 py-2">
                        <dt className="text-xs text-gray-500">{item.k}</dt>
                        <dd className="font-semibold text-gray-900">{item.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="text-sm text-gray-600 mb-2">
                    <strong className="text-gray-800">Included:</strong> {sc.included}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Why this plan:</strong> {sc.rationale}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Your own plan depends on a clinical assessment. What is right for you is decided from an examination and
              a CBCT scan, not from a price list — the scenarios above show how cost, deposit and term interact, not
              what you personally need.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Dental Treatment in Turkey with Monthly Payments</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Across the treatments compared above, Turkish dental prices run roughly <strong>62–87% below</strong> UK
              private equivalents, depending on the treatment. Spreading the cost does not change the total at 0% APR
              representative — it changes when you pay it. A 20-veneer smile makeover that costs £16,000–£20,000
              privately in the UK is £3,800 in Turkey, which is £106 a month over 36 months.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Financing the UK price instead does not close that gap: £16,000 spread across the same 36 months at 0%
              would be about <strong>£445 a month</strong> — roughly four times the £106, because the underlying
              treatment price is roughly four times higher. The brands used are the same in both cases (Ivoclar E-max
              ceramics, Straumann and Osstem implants); what differs is the clinic&apos;s cost base, not the material.
            </p>
            <Link href="/teeth-done-in-turkey-guide" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Read our complete Turkey dental guide</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veneers Turkey Monthly Payment Plans</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Porcelain veneers in Turkey cost <strong>£190–£250 per tooth</strong> using Ivoclar E-max — the same
              brand used in UK cosmetic dental practices. Ten veneers work out at £1,900 and a full smile line of 20 at
              £3,800. Spread over 36 months at 0% APR representative with no deposit, that is:
            </p>
            <div className="overflow-x-auto rounded-xl mb-4">
              <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-3 text-left">Veneers</th>
                    <th className="px-4 py-3 text-right">Total</th>
                    <th className="px-4 py-3 text-right">12 months</th>
                    <th className="px-4 py-3 text-right">24 months</th>
                    <th className="px-4 py-3 text-right">36 months</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { n: "10 E-max veneers", total: "£1,900", m12: "£159", m24: "£80", m36: "£53" },
                    { n: "16 E-max veneers", total: "£3,040", m12: "£254", m24: "£127", m36: "£85" },
                    { n: "20 E-max veneers (full smile line)", total: "£3,800", m12: "£317", m24: "£159", m36: "£106" },
                  ].map((r, i) => (
                    <tr key={r.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.n}</td>
                      <td className="px-4 py-3 text-right font-bold text-[#1e40af]">{r.total}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{r.m12}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{r.m24}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{r.m36}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Veneer treatment includes a digital smile design consultation and temporary veneers while the permanent
              set is fabricated. The partner clinics provide a <strong>5–10 year warranty on the veneers
              themselves</strong> — a warranty against the restoration failing or debonding in normal use, which is
              not the same as a guarantee of a clinical outcome, and does not cover damage from grinding, trauma or
              poor oral hygiene. Ask for the warranty terms in writing before you travel.
            </p>
            <div className="mt-3">
              <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full veneers cost breakdown</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Implants Turkey Finance Options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A single implant with its crown costs <strong>£250 with an Osstem implant</strong> or{" "}
              <strong>£930 with a Straumann</strong>, including consultation, CBCT scan, placement and the final
              zirconia crown. Single-unit work is normally paid outright, because it falls below the minimum amount
              finance providers will lend. Finance is used for the larger implant plans:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-3 text-left">Implant treatment</th>
                    <th className="px-4 py-3 text-right">Turkey price</th>
                    <th className="px-4 py-3 text-right">Over 36 months</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Single implant + crown (Osstem)", p: "£250", m: "Usually paid outright" },
                    { t: "Single implant + crown (Straumann)", p: "£930", m: "From £26/mo" },
                    { t: "All-on-4 — one arch", p: "From £4,500", m: "From £125/mo" },
                    { t: "All-on-4 — both arches", p: "From £9,000", m: "From £250/mo" },
                    { t: "All-on-6 — one arch", p: "From £5,600", m: "From £156/mo" },
                    { t: "All-on-6 — both arches", p: "From £11,200", m: "From £312/mo" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.t}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.p}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{r.m}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Both-arch figures are two times the per-arch price. A bone graft or sinus lift, if your CBCT scan shows
              you need one, is quoted separately and is not included above.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full implants cost breakdown</Link>
              <Link href="/blog/full-mouth-implants-uk-vs-turkey" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full mouth implant costs in detail</Link>
              <Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Dedicated implants finance guide</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Finance Dental Treatment Abroad?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Financing treatment in Turkey combines the lower treatment price with the option of paying for it over
              time from the UK. The practical effect is that a plan costing £3,800 rather than £16,000 can be repaid at
              around £106 a month instead of £445.
            </p>
            <ul className="space-y-3">
              {[
                { icon: "💷", title: "Pay in pounds, from the UK", desc: "Finance is arranged through UK providers and repaid in GBP monthly. No currency risk, no foreign transfers." },
                { icon: "🦷", title: "The same implant and ceramic brands", desc: "The partner clinics use Straumann and Osstem implants, Ivoclar E-max ceramics and 3Shape digital scanning — the same brands stocked by UK private practices." },
                { icon: "📋", title: "Free treatment plan before you commit", desc: "We send a written treatment plan, X-ray review and cost breakdown before you apply for finance or book flights." },
                { icon: "✈️", title: "Treatment booked, then fly", desc: "Finance is in place before you travel, so you know the total and the monthly figure before you go." },
              ].map(item => (
                <li key={item.title} className="flex gap-3 list-none bg-white rounded-xl p-4 border border-gray-200">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does Dental Finance Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with UK-based finance providers so you can spread the cost of treatment over 12, 24 or 36 months.
              The clinic is paid for your treatment in Turkey; you repay the provider monthly from the UK.
            </p>
            <ol className="space-y-4">
              {[
                "Check your eligibility online — pre-qualification is a soft search and does not affect your credit score",
                "See the options you are likely to be offered, before committing to anything",
                "Receive your free written treatment plan and cost estimate",
                "Complete a full application with the provider, which sets your APR, term and total repayable",
                "Once finance is confirmed, book your treatment and travel",
                "Repay monthly from home",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 list-none">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              For the eligibility checklist in full and a treatment-by-treatment cost table covering veneers,
              implants and full-arch work, see our{" "}
              <Link href="/blog/dental-treatment-turkey-payment-plans" className="text-[#1e40af] font-semibold hover:underline">step-by-step payment plans guide</Link>.
              {" "}For whether monthly payment is possible at all and what UK patients usually ask first, see{" "}
              <Link href="/blog/can-you-pay-monthly-for-teeth-in-turkey" className="text-[#1e40af] font-semibold hover:underline">can you pay monthly for teeth in Turkey?</Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance Eligibility Explained</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Finance is arranged through UK providers and is available to UK residents aged 18 or over.
              Pre-qualification uses a <strong>soft credit search</strong>, which does not affect your credit score.
              Approval is the provider&apos;s decision, not ours, and not every applicant will be accepted.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "UK resident, aged 18 or over",
                "Pre-qualification has no minimum income requirement; affordability is assessed at full application",
                "Adverse credit or a CCJ does not automatically rule you out — some providers will consider it, but it may mean a higher APR, a larger deposit, or a declined application",
                "Employment status is assessed individually: being self-employed or receiving benefits neither disqualifies you nor guarantees acceptance",
                "0% APR is the representative example used on this page; the APR you are offered depends on the provider's assessment of your application",
                "Single-unit treatment under a few hundred pounds generally falls below the minimum providers will lend",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-[#1e40af] mt-0.5">•</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Bad credit, dental loans and how finance compares with NHS band charges are covered in full on{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">our UK dental finance page</Link>.
            </p>
          </div>

          {/* Trust layer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who You Are Dealing With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: "🇬🇧", title: "UK Patient Support", desc: "A UK coordinator before, during and after treatment" },
                { icon: "🎓", title: "Registered Dental Partners", desc: "Dentists registered with the Turkish Dental Association and Ministry of Health — the Turkish equivalents of UK GDC registration, not GDC registration itself" },
                { icon: "🏥", title: "Accredited Clinics", desc: "Facilities accredited by the Turkish Ministry of Health" },
                { icon: "🔎", title: "Medically Reviewed", desc: "Clinical content reviewed by a practising dentist" },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>What you get before you commit:</strong> a written treatment plan, a cost breakdown and a
                Digital Smile Design preview, free and with no obligation to book. Pre-qualification is a soft search;
                no hard credit search happens until you choose to submit a full application. Nothing is binding until
                you sign a finance agreement, and that agreement carries a statutory 14-day right to withdraw.
              </p>
            </div>
          </div>

          <MedicalReviewBadge />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance FAQs</h2>
            <div className="space-y-4">
              {financeFaqs.map(faq => (
                <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Internal links */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/prices/veneers-turkey-cost", label: "Veneers Turkey Cost", sub: "E-max from £190/tooth" },
                { href: "/prices/dental-implants-turkey-cost", label: "Implants Turkey Cost", sub: "From £250 with a crown" },
                { href: "/prices/turkey-teeth-cost", label: "All Turkey Teeth Prices", sub: "Complete price guide" },
                { href: "/guides/turkey-teeth-packages", label: "Turkey Teeth Packages", sub: "What a package includes" },
                { href: "/treatments/all-on-4-turkey", label: "All-on-4 Turkey", sub: "Full arch from £4,500" },
                { href: "/guides/teeth-in-turkey", label: "Complete UK Patient Guide", sub: "Treatments, costs, safety & travel" },
                { href: "/finance-options-uk", label: "Dental Finance Options", sub: "Payment plan vs loan vs NHS" },
                { href: "/blog/can-you-pay-monthly-for-teeth-in-turkey", label: "Can You Pay Monthly?", sub: "How monthly payment works" },
                { href: "/guides/cant-afford-dental-treatment-uk", label: "Can't Afford Treatment?", sub: "NHS, finance and lower-cost options" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="flex flex-col bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        title="Start Your Free Treatment Plan Today"
        subtitle="No obligation, and no hard credit search to see your options. Speak to a UK patient coordinator who will answer every question."
        buttonText="Get Free Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
