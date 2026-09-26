import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";

export const revalidate = 86400;

// Repivoted to Turkey-framed 2026-09-18. The GSC Turkey-finance cluster
// (turkey teeth pay monthly, turkey teeth finance, pay monthly turkey teeth,
// veneers turkey payment plan, turkey teeth payment plan, turkey teeth on
// finance, can you pay monthly for turkey teeth, can you get teeth done in
// turkey on finance) totals 119+ impressions against near-zero CTR. The
// 2026-09-11 generic-UK repositioning improved generic UK dental-finance
// rankings but sacrificed the higher-volume Turkey-specific cluster entirely.
// The page body already covers Turkey treatment finance — the title mismatch
// was the only reason Turkey queries produced 0 clicks. Regulatory body
// wording preserved throughout.
const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/finance-options-uk`;
const TITLE = "Turkey Teeth Finance: Pay Monthly & Payment Plans for UK Patients";
// The previous description led with "from £6/month", which is a single £200
// veneer divided over 36 months — a figure this page's own minimum-finance
// rule (£500) says cannot be financed on its own. Replaced with £82, the
// lowest 36-month figure the page and the homepage both actually quote.
const DESCRIPTION =
  "Pay monthly for Turkey teeth from £82/month at 0% APR representative. Finance £500–£30,000 for veneers, implants and full-mouth treatment. Soft-search check.";
const DATE_PUBLISHED = "2026-08-28";
const DATE_MODIFIED = "2026-09-26";

export const metadata: Metadata = {
  alternates: { canonical: "/finance-options-uk" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const options = [
  {
    name: "36-Month Plan",
    badge: "Most Popular",
    rate: "0% APR representative",
    monthly: "From £82/mo",
    desc: "Spread the full cost over 3 years with nothing extra to pay. Our most popular option for larger treatments.",
    best: "Full smile makeovers, All-on-4, All-on-6",
  },
  {
    name: "24-Month Plan",
    badge: null,
    rate: "0% APR representative",
    monthly: "From £122/mo",
    desc: "A balance between manageable monthly payments and a shorter repayment term.",
    best: "Veneers (8–16 teeth), single arch implants",
  },
  {
    name: "12-Month Plan",
    badge: "Lowest Total Cost",
    rate: "0% APR representative",
    monthly: "From £233/mo",
    desc: "Pay off your treatment in 12 months. The fastest path to completion with no interest.",
    best: "Smaller treatments, single implants, whitening packages",
  },
];

const howItWorks = [
  { step: "1", title: "Pre-Qualify in 60 Seconds", desc: "Check your eligibility with no impact on your credit score. You'll get an instant decision." },
  { step: "2", title: "Receive Your Treatment Plan", desc: "We'll prepare a free personalised plan with your total cost and monthly breakdown." },
  { step: "3", title: "Sign Your Agreement Online", desc: "Everything is handled digitally. No paperwork, no branch visits." },
  { step: "4", title: "Travel & Get Treated", desc: "Your clinic appointment, hotel, and transfers are arranged once your finance is confirmed." },
  { step: "5", title: "Pay Monthly from Home", desc: "Monthly payments are taken automatically. You focus on enjoying your new smile." },
];

// Monthly figures are the treatment total divided across 36 payments at 0% APR
// representative, using the prices published elsewhere on this site, so no new
// or conflicting price is introduced here. £2,800 / 36 = £78, £3,500 / 36 = £98,
// £3,800 / 36 = £106, £4,500 / 36 = £125, £5,600 / 36 = £156, £11,200 / 36 = £312.
const treatmentFinance = [
  {
    treatment: "Single dental implant (+ crown)",
    total: "From £250",
    monthly: "Below the £500 finance minimum on its own",
  },
  {
    treatment: "Hollywood Smile — 20 zirconia crowns (package)",
    total: "£2,800",
    monthly: "From £78/mo",
  },
  {
    treatment: "Full smile makeover",
    total: "From £3,500",
    monthly: "From £98/mo",
  },
  {
    treatment: "Full set of 20 E-max porcelain veneers",
    total: "From £3,800",
    monthly: "From £106/mo",
  },
  {
    treatment: "All-on-4 implants — one arch (all-inclusive)",
    total: "From £4,500",
    monthly: "From £125/mo",
  },
  {
    treatment: "All-on-6 implants — one arch (all-inclusive)",
    total: "From £5,600",
    monthly: "From £156/mo",
  },
  {
    treatment: "All-on-6 implants — both arches",
    total: "From £11,200 (2 × per-arch price)",
    monthly: "From £312/mo",
  },
];

const faqs = [
  {
    q: "Can I get dental finance in the UK with bad credit?",
    a: "You can apply, and the pre-qualification check is a soft search that will not affect your credit score. No provider can honestly guarantee approval with a poor credit history, because the decision belongs to the lender and depends on your circumstances and their criteria at the time. Two things genuinely improve the odds: putting down a deposit so less is being borrowed, and financing a lower treatment total in the first place.",
  },
  {
    q: "What counts as bad credit for dental finance?",
    a: "There is no single threshold, because each lender sets its own criteria. In practice the things that weigh against an application are missed payments in the last 12 months, unsatisfied defaults, an active County Court Judgment, an ongoing IVA or debt management plan, and several hard credit searches in quick succession. A thin credit file — little borrowing history rather than bad history — is a separate problem and often easier to work around. What matters to the decision is the combination of your file, your income and how much you are asking to borrow, not a score on its own.",
  },
  {
    q: "Can I get Turkey teeth on finance with a CCJ or a default?",
    a: "It is possible and it is not automatic. A satisfied default from several years ago carries less weight than an unsatisfied one from last year, and an active CCJ is the single hardest marker to get past. No honest answer can be more specific than that, because the decision is the lender's and depends on your full circumstances on the day. The soft-search pre-check tells you where you stand without leaving a footprint, and reducing the amount borrowed with a deposit is the lever that most often changes a borderline outcome.",
  },
  {
    q: "What should I do if my dental finance application is declined?",
    a: "Do not immediately apply elsewhere — each full application leaves a hard search on your file and several in a row read badly. Instead: ask the lender for the reason, which you are entitled to; check your file with Experian, Equifax or TransUnion for errors and correct them; reduce the amount you need to borrow with a larger deposit or a smaller treatment plan; consider phasing treatment so a smaller sum is financed first; and only then pre-check with another provider using a soft search. Financing £2,500 of a £4,500 arch is a different proposition to financing all of it.",
  },
  {
    q: "How much is dental implant finance per month in the UK?",
    a: "It depends on the treatment total rather than on a single rate. On a 36-month 0% APR representative plan, an All-on-4 arch at £4,500 works out from £125 a month and an All-on-6 arch at £5,600 from £156 a month. A single implant from £250 falls below the £500 minimum finance amount, so it would need to be combined with other treatment or paid outright.",
  },
  {
    q: "Can you finance veneers in the UK?",
    a: "Yes. A full set of 20 E-max porcelain veneers from £3,800 comes to around £106 a month over 36 months at 0% APR representative. Veneers are cosmetic, so NHS band charges never cover them and finance or savings are the only routes. UK private veneers at £800–£1,000 per tooth would mean financing roughly £16,000–£20,000 for the same 20 teeth.",
  },
  {
    q: "Is 0% dental finance real, or is there a catch?",
    a: "It is real on qualifying plans, and the catch is eligibility rather than hidden cost: 0% APR representative means at least 51% of accepted applicants get that rate, so some applicants are offered an interest-bearing plan instead. The APR you are actually offered is shown before you commit. On a genuine 0% plan you repay exactly the treatment price and nothing more.",
  },
  {
    q: "What is the minimum and maximum amount I can finance?",
    a: "Finance is available from £500 to £30,000. This covers everything from a small veneers treatment to a full-mouth All-on-6 reconstruction.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "No. The initial eligibility check is a soft search only, so it does not appear on your credit file. A full credit check is only performed if you choose to proceed with a finance agreement.",
  },
  {
    q: "Can I pay for flights and hotels on the finance plan?",
    a: "The finance plan covers the dental treatment costs. Flights are separate and not included. Hotel accommodation is included in most of our all-inclusive treatment packages.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Missing a payment may incur a late fee and could affect your credit rating. We recommend setting up a direct debit to avoid any issues. Our finance team can discuss options if you experience financial difficulty.",
  },
  {
    q: "Is finance available for all treatments?",
    a: "Finance is available for veneers, implants, All-on-4, All-on-6, Hollywood Smile packages, and most other treatments. A few minor treatments fall below the minimum finance threshold.",
  },
  {
    q: "Can I pay part upfront and finance the rest?",
    a: "Yes. You can put any amount as a deposit and finance the remainder. This reduces your monthly payments and may mean you qualify for a shorter term.",
  },
  {
    q: "Is this a dental loan or a dental payment plan?",
    a: "It's a payment plan: finance arranged specifically for your dental treatment, with 0% APR representative available and fixed monthly instalments. A dental loan usually means a general personal loan used for the same purpose, which can carry interest where this plan would not.",
  },
];

// This page had no structured data at all despite carrying 14 FAQs and being the
// FINANCE cluster's money page. The FAQs render as plain server markup here (not
// through FAQSection, which is a client component), so the FAQPage graph below
// matches text that is genuinely present in the server HTML.
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
        { "@type": "ListItem", position: 2, name: "Turkey Teeth Finance", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function FinanceOptionsUKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Turkey Teeth Finance" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Can You Pay Monthly for Turkey Teeth? Finance &amp; Payment Plans Explained</h1>
          <p className="text-xl text-blue-200">Yes — spread the cost of dental treatment in Turkey over 12, 24 or 36 months. 0% APR representative plans from £82/month, bad credit considered.</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              You don&apos;t need to have the full cost of your treatment ready upfront. Our monthly payment plans let you spread the cost of dental work in Turkey over 12, 24, or 36 months — with 0% APR available, so you pay no more than the treatment cost itself.
            </p>
          </div>

          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Short answer: how does dental finance work in the UK?</h2>
            <p className="text-gray-700 leading-relaxed">
              UK patients normally pay for dental work in one of three ways: a <strong>dental payment plan</strong> arranged for one specific treatment in fixed instalments, often at 0% for 12–36 months; a <strong>dental loan</strong>, which is a general personal loan used for the same purpose and usually carries interest; or <strong>NHS band charges</strong>, which only apply to treatment the NHS actually provides and exclude cosmetic work such as veneers. On this site, treatment in Turkey is financed as a payment plan from £500 to £30,000 over 12, 24 or 36 months, with 0% APR representative on qualifying plans and an eligibility check that is a soft search only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Finance Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {options.map(opt => (
                <div key={opt.name} className={`rounded-2xl border-2 p-6 ${opt.badge === 'Most Popular' ? 'border-[#1e40af] bg-blue-50' : 'border-gray-200 bg-white'} shadow-sm`}>
                  {opt.badge && (
                    <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-0.5 rounded-full mb-3 uppercase tracking-wide">{opt.badge}</div>
                  )}
                  <h3 className="font-extrabold text-gray-900 text-lg mb-1">{opt.name}</h3>
                  <p className="text-2xl font-extrabold text-[#1e40af] mb-1">{opt.monthly}</p>
                  <p className="text-xs text-gray-500 mb-3">{opt.rate}</p>
                  <p className="text-sm text-gray-600 mb-3">{opt.desc}</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold mb-0.5">Best for</p>
                    <p className="text-sm text-gray-700">{opt.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Payment Examples</h2>
            <MonthlyPaymentTable />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
            <p className="text-sm text-gray-500 mb-6">
              This is the process in outline. For the full step-by-step application walkthrough and eligibility
              checklist across every treatment type, see our{" "}
              <Link href="/blog/dental-treatment-turkey-payment-plans" className="text-[#1e40af] font-semibold hover:underline">Turkey dental treatment payment plans guide</Link>.
            </p>
            <div className="relative">
              <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-blue-200" />
              <div className="space-y-6">
                {howItWorks.map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0 z-10">{s.step}</div>
                    <div className="pt-2">
                      <h3 className="font-bold text-gray-900 mb-0.5">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Minimum finance", value: "£500" },
              { label: "Maximum finance", value: "£30,000" },
              { label: "APR (representative)", value: "0%" },
              { label: "Soft search pre-check", value: "✓" },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-2xl font-extrabold text-[#1e40af] mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Finance Your Dental Treatment?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💷", title: "No large upfront payment", desc: "Spread the cost so you don't need thousands saved before you can start treatment." },
                { icon: "📅", title: "Fixed monthly payments", desc: "Know exactly what you'll pay each month. No surprises, no variable rates." },
                { icon: "🔒", title: "0% APR available", desc: "On qualifying plans, you pay back exactly what you borrowed — nothing more." },
                { icon: "⚡", title: "Fast pre-qualification", desc: "Check eligibility in under 60 seconds with no impact on your credit score." },
              ].map(item => (
                <div key={item.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Plan, Finance, Loan or NHS Charge: What&apos;s the Difference?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms get used interchangeably online, but they are not the same thing. Here is what each one actually means, so you can be sure you&apos;re comparing like for like.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { term: "Dental payment plan", desc: "Spreading the cost of one specific treatment over fixed monthly instalments, often at 0% interest for a set term. This is what the plans on this page are." },
                { term: "Dental finance", desc: "The broader term for borrowing arranged specifically to pay for dental treatment, which usually works the same way as a payment plan." },
                { term: "Dental loan", desc: "A personal loan used to cover dental costs. It may not be dental specific, and unlike a 0% dental finance plan it can carry interest." },
                { term: "Dental insurance", desc: "A monthly premium that contributes toward the cost of future treatment, typically with annual limits and exclusions. This is different from financing treatment you need now." },
                { term: "NHS dental charges", desc: "Fixed charges (£27.90, £76.60 or £306.80 in England from 1 April 2026) for treatment the NHS actually provides. Cosmetic work such as veneers isn't covered." },
                { term: "Clinic membership plan", desc: "A fixed monthly fee to a dental practice covering routine check-ups and hygiene visits, not a way of financing a one-off treatment like implants or veneers." },
              ].map(item => (
                <div key={item.term} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{item.term}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              For the full picture, including whether the NHS can help before you consider financing private treatment, see the{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">Can&apos;t Afford Dental Treatment in the UK guide</Link>.
              {" "}If you&apos;d rather see every funding route set out side by side — payment plans, personal loans, 0% credit cards and saving up — our{" "}
              <Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] font-semibold hover:underline">dental tourism finance explained guide</Link>{" "}
              compares them in full.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance by Treatment: Implants, Veneers, Crowns and Full Arches</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              What you pay each month depends on the treatment total, not on a single headline figure. The monthly
              column below is the treatment price on this site divided across{" "}
              <strong>36 monthly payments at 0% APR representative</strong> — the longest term available, which gives
              the lowest monthly figure. A shorter 12- or 24-month term raises the monthly amount and lowers nothing
              else, because there is no interest to save on a 0% plan.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Treatment</th>
                    <th className="text-left font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Treatment total</th>
                    <th className="text-left font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Over 36 months</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentFinance.map(row => (
                    <tr key={row.treatment} className="odd:bg-white even:bg-gray-50/60">
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-900 font-semibold">{row.treatment}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.total}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Figures are indicative and follow the treatment prices published on this site; confirm your own total
              and monthly amount on a personalised quote before applying. A{" "}
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">full cost breakdown by treatment</Link>{" "}
              and a{" "}
              <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>{" "}
              are available if you want to work from your own treatment plan. If implants are your main cost, our{" "}
              <Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] font-semibold hover:underline">guide to financing dental implants in Turkey</Link>{" "}
              goes deeper on plan types and a UK-vs-Turkey monthly comparison.
            </p>
            <div className="mt-5 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1">Can you finance dentures?</h3>
              <p className="text-sm text-gray-600">
                Conventional removable dentures are not part of the treatment range priced on this site, so there is no
                denture plan to quote. What is covered is the fixed alternative people usually compare dentures
                against: implant-supported full arches (All-on-4 and All-on-6), financed from £125 and £156 a month
                respectively on a 36-month plan. If you are weighing removable dentures against a fixed arch, the{" "}
                <Link href="/blog/full-mouth-implants-uk-vs-turkey" className="text-[#1e40af] font-semibold hover:underline">full-mouth implants comparison</Link>{" "}
                sets out the difference.
              </p>
            </div>
          </div>

          <div>
            <h2 id="bad-credit" className="text-2xl font-bold text-gray-900 mb-4">Dental Finance with Bad Credit: What Is Actually True</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              &ldquo;Bad credit dental finance&rdquo; is widely advertised, and most of what is promised cannot be
              guaranteed by anyone. Here is the honest position:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">1.</span>
                <span><strong>No provider can promise approval</strong> — not this site and not any broker. Approval is the lender&apos;s decision, based on your circumstances and their criteria on the day you apply. Anyone guaranteeing acceptance before running a check is not describing how lending works.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">2.</span>
                <span><strong>Checking costs you nothing.</strong> Pre-qualification here is a soft search. It does not appear on your credit file and does not affect your score, so a poor credit history is not a reason to avoid finding out where you stand.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">3.</span>
                <span><strong>A declined application is not the end of it.</strong> Putting down a deposit reduces the amount being borrowed, which materially changes the decision. Financing £2,000 of a £4,500 arch is a different proposition to financing all of it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">4.</span>
                <span><strong>Multiple full applications do harm your file.</strong> Each hard search is recorded and several in quick succession reads badly to lenders. Use soft-search pre-checks to compare before committing to one full application.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">5.</span>
                <span><strong>A lower total is the most reliable lever.</strong> Treatment in Turkey costs 65–90% less than the UK private equivalent, so the sum you need to finance is smaller to begin with — which is often what turns a borderline application around.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">What counts as bad credit?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is no single score that makes an application &ldquo;bad credit&rdquo;. Lenders read your credit
              file alongside your income and the amount you are asking to borrow, and each lender sets its own
              criteria. The table below lists the markers that carry the most weight and what each one generally
              means for a dental finance application. It describes how lenders weigh these factors; it is not a
              prediction of your own decision.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Credit marker</th>
                    <th className="px-4 py-3 text-left font-semibold">What it generally means for a dental finance application</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Thin or no credit file", "Not a negative history — simply little for a lender to assess. A deposit and evidence of regular income usually carry more weight here than the file itself."],
                    ["Missed payments in the last 12 months", "Recent and clearly visible. These weigh more heavily than older markers, and more heavily again on larger sums."],
                    ["Satisfied default, two or more years old", "Stays on your file for six years, but its weight falls away over time. Often workable, particularly on a smaller financed amount."],
                    ["Unsatisfied default", "Harder. The outstanding balance is usually the lender’s concern rather than the default itself."],
                    ["Active County Court Judgment (CCJ)", "The hardest single marker to get past. Many mainstream lenders decline automatically while a CCJ is active."],
                    ["IVA or debt management plan in progress", "Usually a decline with mainstream lenders, and taking on further credit during a formal arrangement may breach its terms. Speak to your insolvency practitioner or plan provider before applying."],
                    ["Discharged bankruptcy", "Options narrow but do not close. Time elapsed since discharge generally matters more than the bankruptcy itself."],
                    ["Several hard searches in quick succession", "Counts against you. Multiple recent full applications suggest difficulty obtaining credit, which is why soft-search pre-checks exist."],
                  ].map(([marker, meaning]) => (
                    <tr key={marker} className="border-t border-gray-200 align-top">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap sm:whitespace-normal">{marker}</td>
                      <td className="px-4 py-3 text-gray-700">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">How a deposit changes the decision</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A deposit is the one lever entirely within your control. It reduces the sum being borrowed, which is
              one of the main inputs to the lender&apos;s decision, and it lowers the monthly payment at the same
              time. The figures below use the All-on-4 single-arch price published elsewhere on this site and show
              nothing more than the treatment total less the deposit, divided across 36 payments.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-amber-800 mb-3">Example Treatment Scenario — illustrative, not a credit offer</p>
              <p className="text-sm text-gray-700 mb-4">
                Treatment: All-on-4 implants, one arch, all-inclusive — <strong>£4,500</strong>. Term: 36 months at
                0% APR representative.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm bg-white border border-amber-200 rounded-lg overflow-hidden">
                  <thead className="bg-amber-100/70 text-gray-800">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold">Deposit</th>
                      <th className="px-4 py-2.5 text-left font-semibold">Amount financed</th>
                      <th className="px-4 py-2.5 text-left font-semibold">Monthly over 36 months</th>
                      <th className="px-4 py-2.5 text-left font-semibold">Total repayable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["£0", "£4,500", "£125", "£4,500"],
                      ["£500", "£4,000", "£111", "£4,000"],
                      ["£1,000", "£3,500", "£97", "£3,500"],
                      ["£2,000", "£2,500", "£69", "£2,500"],
                    ].map(row => (
                      <tr key={row[0]} className="border-t border-amber-100">
                        <td className="px-4 py-2.5 font-medium text-gray-900">{row[0]}</td>
                        <td className="px-4 py-2.5 text-gray-700">{row[1]}</td>
                        <td className="px-4 py-2.5 text-gray-700">{row[2]}/mo</td>
                        <td className="px-4 py-2.5 text-gray-700">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                An illustration only, not a quotation and not a credit offer. Monthly figures are the financed amount
                divided by 36 and are rounded. Finance is subject to status, affordability and lender approval, is
                available from £500 to £30,000, and not all applicants will be accepted or offered the
                representative 0% rate. 0% APR representative means at least 51% of accepted applicants receive that
                rate; the APR you are offered is shown before you commit. Your own treatment total depends on a
                clinical assessment.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">If you are declined: what actually changes the outcome</h3>
            <ol className="space-y-3 text-gray-700 list-decimal pl-5">
              <li><strong>Ask for the reason.</strong> Lenders will tell you the main factor behind a decline. Without it you are guessing at which of the markers above applied to you.</li>
              <li><strong>Check your file for errors.</strong> Experian, Equifax and TransUnion each hold a separate file and they do not always agree. Incorrect defaults and addresses are common and can be disputed.</li>
              <li><strong>Do not reapply immediately.</strong> Each full application records a hard search. Several in quick succession is itself a reason to decline. Wait, and use soft-search pre-checks to compare.</li>
              <li><strong>Reduce the amount borrowed.</strong> A larger deposit, or a treatment plan with fewer units, changes the proposition rather than just the monthly figure.</li>
              <li><strong>Phase the treatment.</strong> Financing one arch now and the second later means two smaller decisions instead of one large one. Whether that is clinically sensible is a question for your treatment plan, not your credit file.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-5">
              If the monthly figure is what you are weighing rather than eligibility, the{" "}
              <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">monthly payment table for every treatment</Link>{" "}
              sets out what each plan costs per month, and the{" "}
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost guide</Link>{" "}
              shows the treatment totals those figures are derived from.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Check My Eligibility</Link>
            <Link href="/monthly-payment" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">View Monthly Payment Table</Link>
            <Link href="/price-calculator" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Calculate My Treatment Cost</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/guides/teeth-in-turkey", title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety, travel and finance — everything in one place." },
            { href: "/prices/turkey-teeth-cost", title: "Turkey Teeth Cost Guide 2026", desc: "Full price breakdown: veneers, implants, crowns and packages." },
            { href: "/monthly-payment", title: "Monthly Payment Calculator", desc: "See exactly what your treatment costs per month." },
            { href: "/free-treatment-plan", title: "Get a Free Treatment Plan", desc: "Personalised cost estimate within 24 hours." },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-gray-900 mb-1">{l.title}</p>
              <p className="text-sm text-gray-600">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <CTASection
        title="Ready to Check Your Finance Options?"
        subtitle="Pre-qualify in 60 seconds with no credit impact. Our team will walk you through the best plan for your treatment."
        buttonText="Check My Eligibility"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
