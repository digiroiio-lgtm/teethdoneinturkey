import type { Metadata } from "next";
import Link from "next/link";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import AtAGlance from "@/components/geo/AtAGlance";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { FINANCE_TERMS_NOTE, MIN_FINANCE_GBP, monthlyAtZero, monthlyLabel } from "@/lib/finance";
import { FINANCE_INTENT_OWNERS, financeFollowUps } from "@/lib/finance-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";

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
// 2026-09-26: 0% APR applies to 12- and 24-month plans only, so every monthly
// figure is now a 0% 24- or 12-month amount from src/lib/finance.ts. The
// earlier 36-month "at 0%" figures, and unverified patient-count and rating
// badges, were removed.

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PATH = FINANCE_INTENT_OWNERS.monthlyCost;
const PAGE_URL = `${SITE_URL}${PATH}`;
const H1 = "Turkey Teeth Monthly Payments: What Each Treatment Costs Per Month";

const emax = getPrice("emax-veneer");
const osstem = getPrice("implant-osstem");
const allOn4 = getPrice("all-on-4");
const allOn6 = getPrice("all-on-6");
const h20 = getPrice("hollywood-20");
const emax20 = emax.turkeyFromGBP * 20;

const DESCRIPTION = `Turkey teeth per month at 0% over 24 months: 20 veneers £${monthlyAtZero(emax20)}, All-on-4 £${monthlyAtZero(allOn4.turkeyFromGBP)}, 20 crowns £${monthlyAtZero(h20.turkeyFromGBP)}. 36-month plans carry interest.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: "Turkey Teeth Monthly Payments: Cost Per Treatment" },
  description: DESCRIPTION,
};

const rows = [
  { treatment: "Porcelain (E-max) veneer, per tooth", uk: ukRange(emax), total: emax.turkeyFromGBP },
  { treatment: "20 E-max veneers (full smile)", uk: `${gbp(emax.ukRangeGBP.min * 20)}–${gbp((emax.ukRangeGBP.max ?? 0) * 20)}`, total: emax20 },
  { treatment: "Single implant + crown (Osstem)", uk: ukRange(osstem), total: osstem.turkeyFromGBP },
  { treatment: "All-on-4, one arch (incl. hotel)", uk: ukRange(allOn4), total: allOn4.turkeyFromGBP },
  { treatment: "All-on-6, one arch (incl. hotel)", uk: ukRange(allOn6), total: allOn6.turkeyFromGBP },
  { treatment: "Hollywood Smile, 20 zirconia crowns (incl. hotel)", uk: ukRange(h20), total: h20.turkeyFromGBP },
];

const implantRows = [
  { t: "Single implant + crown (Osstem)", total: osstem.turkeyFromGBP },
  { t: "4 implants + crowns (Osstem)", total: osstem.turkeyFromGBP * 4 },
  { t: "All-on-4, one arch", total: allOn4.turkeyFromGBP },
  { t: "All-on-4, both arches (2 × per-arch price)", total: allOn4.turkeyFromGBP * 2 },
  { t: "All-on-6, both arches (2 × per-arch price)", total: allOn6.turkeyFromGBP * 2 },
];

const financeFaqs = [
  { q: "Can I get Turkey teeth on finance from the UK?", a: "Yes. UK patients can spread the cost of treatment in Turkey over 12, 24 or 36 months, arranged in the UK and repaid in pounds. 0% APR representative applies to 12- and 24-month plans, subject to status; 36-month plans carry interest. A soft-search pre-qualification lets you check eligibility without affecting your credit score." },
  { q: "Is the finance 0% interest?", a: "0% APR representative is available for qualifying applicants on 12- and 24-month terms. 36-month plans carry interest, and the rate depends on your credit profile. Full APR details are provided before you commit." },
  { q: "Does applying affect my credit score?", a: "Pre-qualification uses a soft credit check with no impact on your credit score. Only a full application, which you choose to make after seeing your options, shows on your credit file." },
  { q: "Can I apply if I have bad credit?", a: "You can still pre-qualify. Approval is never guaranteed: it depends on your circumstances and the lender's criteria at the time you apply. The pre-qualification check is a soft search, so checking won't affect your credit score." },
  { q: "How quickly can I get finance?", a: "Pre-qualification decisions are instant. Full approval typically takes 24–48 hours, and treatment can usually be booked within 2–4 weeks of approval." },
  { q: "What if I need to cancel after finance is approved?", a: "Finance can be cancelled during the statutory 14-day cooling-off period at no cost. After that, the finance agreement terms apply — full details are provided at application." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: H1,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isBasedOn: `${SITE_URL}/turkey-dental-price-index`,
      inLanguage: "en-GB",
      datePublished: "2026-05-29",
      dateModified: "2026-09-26",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Finance", item: `${SITE_URL}/finance-options-uk` },
        { "@type": "ListItem", position: 3, name: "Monthly Payments", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: financeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function MonthlyPaymentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ── Hero ── */}
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{H1}</h1>
          <p className="text-xl text-blue-200 mb-2">
            At 0% over 24 months: 20 veneers {monthlyLabel(emax20)}, All-on-4 {monthlyLabel(allOn4.turkeyFromGBP)}, a 20-crown Hollywood Smile {monthlyLabel(h20.turkeyFromGBP)}
          </p>
          <div className="mb-8">
            <PageFreshness published="29 May 2026" reviewed="26 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {[
              { icon: "💷", text: "0% APR over 12 or 24 months" },
              { icon: "🔍", text: "Soft-search pre-qualification" },
              { icon: "🇬🇧", text: "UK patient support team" },
              { icon: "📋", text: "Free written treatment plan first" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-full px-4 py-1.5">
                <span aria-hidden="true">{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>

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
        </div>
      </div>

      <section className="pt-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickAnswer question="How much do Turkey teeth cost per month?">
            <p>
              Spread over 24 months at 0% APR, a full set of 20 E-max veneers (from {gbp(emax20)}) costs about{" "}
              {monthlyLabel(emax20)}, one All-on-4 arch ({gbp(allOn4.turkeyFromGBP)}) about {monthlyLabel(allOn4.turkeyFromGBP)},
              and a 20-crown Hollywood Smile package ({gbp(h20.turkeyFromGBP)}) about {monthlyLabel(h20.turkeyFromGBP)}. Over 12
              months the payments double. The smallest amount that can be financed is £{MIN_FINANCE_GBP}, so a single
              veneer or implant is usually financed together with other treatment. 0% APR representative applies to 12- and 24-month plans; 36-month plans lower the monthly
              amount but carry interest. Flights are not included.
            </p>
          </QuickAnswer>
          <AtAGlance
            facts={[
              { label: "0% APR terms", value: "12 or 24 months" },
              { label: "36-month plans", value: "Available, with interest" },
              { label: "Eligibility check", value: "Soft search, no credit impact" },
              { label: "Repaid in", value: "Pounds, to a UK lender" },
              { label: "Finance amount", value: `From £${MIN_FINANCE_GBP}` },
              { label: "Prices checked", value: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />
        </div>
      </section>

      {/* ── Payment Table ── */}
      <MonthlyPaymentTable />

      {/* ── UK vs Turkey Comparison ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">UK vs Turkey: price and monthly cost</h2>
          <p className="text-gray-600 mb-6">
            Turkey treatment prices from the price index, with the monthly amount at 0% over 24 months.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Treatment prices UK vs Turkey with monthly cost at 0% over 24 months</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-4 py-3 text-left">Treatment</th>
                  <th scope="col" className="px-4 py-3 text-right">UK private</th>
                  <th scope="col" className="px-4 py-3 text-right">Turkey from</th>
                  <th scope="col" className="px-4 py-3 text-right">24 months at 0%</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{row.treatment}</th>
                    <td className="px-4 py-3 text-right text-gray-600">{row.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{gbp(row.total)}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{monthlyLabel(row.total)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {FINANCE_TERMS_NOTE} Representative example: {gbp(emax20)} over 24 months at 0% APR = {monthlyLabel(emax20)}, total repayable {gbp(emax20)}.
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
              Two things decide what you actually pay: the treatment total and the term you choose. On a 12- or 24-month plan at 0% APR representative, the term only divides the same total across more or fewer months. A 36-month plan lowers each payment further but adds interest, so you repay more than the treatment cost. For the difference between a payment plan, dental finance, a personal loan and NHS charges, see{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">how dental finance works in the UK, including dental loans and bad credit</Link>, and if you are weighing up affordability more broadly, read{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">what to do if you cannot afford dental treatment in the UK</Link>.
              {" "}Want to see this plan set against a personal loan, a 0% credit card or simply saving up? Our guide to{" "}
              <Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] font-semibold hover:underline">funding dental treatment abroad</Link>{" "}
              lays out every option side by side.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly cost in Turkey vs the UK for the same treatment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Twenty E-max veneers cost from {gbp(emax20)} in Turkey, or {monthlyLabel(emax20)} over 24 months at 0%. The same
              20 veneers privately in the UK cost {gbp(emax.ukRangeGBP.min * 20)}–{gbp((emax.ukRangeGBP.max ?? 0) * 20)}; spread
              over the same 24 months, that is at least £{Math.ceil((emax.ukRangeGBP.min * 20) / 24).toLocaleString("en-GB")} a
              month before any interest. The Turkey figure does not include flights, which add a few hundred pounds that most
              patients pay upfront.
            </p>
            <Link href="/teeth-done-in-turkey-guide" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Read our complete Turkey dental guide</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veneers Turkey Monthly Payment Plans</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Porcelain veneers in Turkey cost <strong>from {gbp(emax.turkeyFromGBP)} per tooth</strong> using Ivoclar E-max. A full set of 20 veneers (from {gbp(emax20)}) can be financed at:
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { term: "12 months", amount: monthlyLabel(emax20, 12), label: "0% APR" },
                { term: "24 months", amount: monthlyLabel(emax20, 24), label: "0% APR" },
                { term: "36 months", amount: "Rate at application", label: "Interest applies" },
              ].map((item) => (
                <div key={item.term} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">{item.term}</p>
                  <p className="text-xl font-extrabold text-[#1e40af]">{item.amount}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The veneer price includes a digital smile design consultation and temporary veneers while the permanent set is made. Guarantee terms are set by the treating clinic and vary — get them in writing.
            </p>
            <div className="mt-3">
              <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full veneers cost breakdown</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Implants Turkey Finance Options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A single dental implant with crown in Turkey costs <strong>from {gbp(osstem.turkeyFromGBP)} (Osstem) to {gbp(getPrice("implant-straumann").turkeyFromGBP)} (Straumann)</strong>, including consultation, CBCT scan, implant placement and the final crown. One implant on its own is below the £{MIN_FINANCE_GBP} finance minimum; the table shows larger implant treatments:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th scope="col" className="px-4 py-3 text-left">Implant treatment</th>
                    <th scope="col" className="px-4 py-3 text-right">Turkey from</th>
                    <th scope="col" className="px-4 py-3 text-right">24 months at 0%</th>
                    <th scope="col" className="px-4 py-3 text-right">12 months at 0%</th>
                  </tr>
                </thead>
                <tbody>
                  {implantRows.map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{r.t}</th>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{gbp(r.total)}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{monthlyLabel(r.total, 24)}</span>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">{monthlyLabel(r.total, 12)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full implants cost breakdown</Link>
              <Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Dedicated implants finance guide</Link>
            </div>
          </div>

          <NotForYou
            title="When finance may not be the right choice"
            items={[
              "If the monthly payment would stretch your budget or depends on income you are not sure of — missed payments damage your credit file and can end a 0% deal.",
              "If a 36-month term is the only way the payment is affordable: it carries interest, so compare the total repayable with a UK treatment option.",
              "If the treatment plan is not yet confirmed — borrow against a written, itemised plan, not an estimate.",
              "If you already carry high-interest debt that the same money would clear first.",
            ]}
          />

          <DecisionTree
            title="12, 24 or 36 months?"
            steps={[
              { condition: "you can afford the 12-month payment comfortably", action: "choose 12 months at 0% — the debt is cleared soonest at no extra cost." },
              { condition: "12 months is too high but 24 months fits", action: "24 months at 0% costs the same in total, just spread further." },
              { condition: "only the 36-month payment fits", action: "ask for the APR and total repayable before agreeing, and compare it with a smaller treatment plan." },
              { condition: "you are unsure you will be approved", action: "pre-qualify first — the soft search does not affect your credit score." },
            ]}
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does Dental Finance Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with UK-based finance providers so you can spread the cost of treatment in Turkey over 12, 24 or 36 months. Your treatment is booked and paid for in Turkey, while you repay the finance in monthly instalments from the UK.
            </p>
            <ol className="space-y-4">
              {[
                "Pre-qualify online — a soft search, with no impact on your credit score",
                "See your options and the rate for each term before you commit",
                "Receive your free treatment plan and cost estimate within 24 hours",
                "Book your treatment once your finance is in place",
                "Fly to Turkey and receive your treatment as planned",
                "Repay monthly from home",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 list-none">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              For the eligibility checklist in full and a step-by-step walkthrough, see our{" "}
              <Link href="/blog/dental-treatment-turkey-payment-plans" className="text-[#1e40af] font-semibold hover:underline">step-by-step payment plans guide</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance Eligibility Explained</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Finance is available to UK residents aged 18+. Pre-qualification uses a <strong>soft credit search</strong> that does not affect your credit score, so you can check your eligibility before making any commitment to treatment.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "UK resident, aged 18 or over",
                "Employed, self-employed or receiving benefits: most situations considered",
                "Bad credit or a CCJ does not stop you pre-qualifying; approval depends on the lender",
                "0% APR representative for qualifying applicants on 12- and 24-month terms",
                "36-month terms available with interest",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5" aria-hidden="true">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who you are dealing with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: "🇬🇧", title: "UK patient support", desc: "A UK coordinator before, during and after treatment." },
                { icon: "🏥", title: "Licensed in Turkey", desc: "Partner dentists are licensed by the Turkish Ministry of Health; they are not GDC-registered. Ask for qualifications in writing." },
                { icon: "📋", title: "Plan before finance", desc: "A written treatment plan and cost estimate before you apply for finance or book flights." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Before you commit:</strong> the written treatment plan, cost estimate and digital smile design preview are free, with no obligation to book. There is no credit search until you choose to apply.
              </p>
            </div>
          </div>

          <EvidenceBlock
            items={[
              { claim: "Treatment prices", basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Monthly amounts", basis: "Calculated: price ÷ 12 or 24, at 0% APR, rounded up", href: "/methodology#calculation", checked: "September 2026" },
              { claim: "0% on 12 and 24 months; 36 months with interest", basis: "Current lender terms offered through this service", checked: "September 2026" },
            ]}
          />

          <MedicalReviewBadge />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance FAQs</h2>
            <div className="space-y-4">
              {financeFaqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <FollowUpQuestions items={financeFollowUps(PATH)} />

          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/prices/veneers-turkey-cost", label: "Veneers Turkey Cost", sub: `E-max from ${gbp(emax.turkeyFromGBP)}/tooth` },
                { href: "/prices/dental-implants-turkey-cost", label: "Implants Turkey Cost", sub: `From ${gbp(osstem.turkeyFromGBP)} with crown` },
                { href: "/prices/turkey-teeth-cost", label: "All Turkey Teeth Prices", sub: "Complete price guide" },
                { href: "/treatments/veneers-turkey", label: "Veneers Treatment Guide", sub: "What to expect" },
                { href: "/treatments/dental-implants-turkey", label: "Implants Treatment Guide", sub: "Full implant process" },
                { href: "/guides/teeth-in-turkey", label: "Complete UK Patient Guide", sub: "Treatments, costs, safety & travel" },
                { href: "/finance-options-uk", label: "Dental Finance Options", sub: "Payment plan vs loan vs NHS" },
                { href: "/guides/cant-afford-dental-treatment-uk", label: "Can't Afford Treatment?", sub: "NHS, finance and lower-cost options" },
                { href: "/guides/turkey-teeth-veneers-or-crowns", label: "Veneers or Crowns?", sub: "How much tooth is actually removed" },
              ].map((item) => (
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
        subtitle="No obligation. No credit check to explore your options. Chat with a UK patient coordinator who will answer every question."
        buttonText="Get Free Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
