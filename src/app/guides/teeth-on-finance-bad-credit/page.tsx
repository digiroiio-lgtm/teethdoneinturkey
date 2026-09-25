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

// Created 2026-09-25. `teeth on finance bad credit` is the strongest commercial
// query on the property (position 8.45 on 2026-09-11) and had no owning URL: it
// was split between /finance-options-uk (15 impr @ 7.6) and
// /blog/dental-tourism-finance-explained (7 impr @ 8.1), where bad credit was
// one section of fourteen and one paragraph respectively. The 2026-09-18
// repivot then retitled /finance-options-uk to "Turkey Teeth Finance", moving
// the hub's title away from this generic-UK query entirely.
//
// This page owns the bad-credit / eligibility / declined intent. It deliberately
// does NOT restate the Turkey finance plan offer, which stays on
// /finance-options-uk, or the per-treatment monthly figures, which stay on
// /monthly-payment. Neither of those ranking pages was rewritten for this.
const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/teeth-on-finance-bad-credit`;
const TITLE = "Teeth on Finance with Bad Credit: UK Options 2026";
const H1 = "Teeth on Finance with Bad Credit: What Is Actually Possible";
const DESCRIPTION =
  "Can you get teeth on finance with bad credit in the UK? What lenders check, why applications are declined, what a deposit changes, and what to do next. No guaranteed approval.";
const DATE_PUBLISHED = "2026-09-25";
const DATE_MODIFIED = "2026-09-25";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/teeth-on-finance-bad-credit" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is-bad-credit", label: "What Counts as Bad Credit" },
  { id: "what-lenders-check", label: "What Lenders Actually Check" },
  { id: "soft-vs-hard", label: "Soft Search vs Hard Search" },
  { id: "amount-financed", label: "The Amount You Finance Matters Most" },
  { id: "deposit-lever", label: "What a Deposit Changes" },
  { id: "scenarios", label: "Example Payment Scenarios" },
  { id: "declined", label: "What to Do If You Are Declined" },
  { id: "not-credit", label: "Options That Are Not Credit" },
  { id: "avoid", label: "What to Avoid" },
  { id: "eligibility", label: "Typical Eligibility Criteria" },
  { id: "faqs", label: "FAQs" },
];

// Markers are the standard UK credit-file entries and their retention periods.
// Sources are listed at the foot of the page; nothing here is specific to any
// one lender's criteria, which are not published.
const creditMarkers = [
  {
    marker: "Late or missed payments",
    meaning: "A payment made after its due date on a credit agreement, mobile contract or utility.",
    onFile: "6 years",
  },
  {
    marker: "Default",
    meaning: "The lender has ended the agreement because payments were not maintained. A more serious marker than a missed payment.",
    onFile: "6 years from the default date",
  },
  {
    marker: "County Court Judgment (CCJ)",
    meaning: "A court order to repay a debt. Recorded on the public Register of Judgments, Orders and Fines.",
    onFile: "6 years — removed entirely if paid in full within one month of judgment",
  },
  {
    marker: "Individual Voluntary Arrangement (IVA)",
    meaning: "A formal, legally binding agreement to repay creditors over a set period.",
    onFile: "6 years from the start date",
  },
  {
    marker: "Bankruptcy or Debt Relief Order",
    meaning: "A formal insolvency solution. Most lenders decline while one is active.",
    onFile: "6 years from the date it was granted",
  },
  {
    marker: "Thin file / no credit history",
    meaning: "Not a negative marker at all, but lenders have little evidence to assess. Common for younger applicants and people who have never borrowed.",
    onFile: "n/a",
  },
  {
    marker: "Not on the electoral roll",
    meaning: "Makes identity and address verification harder, which can cause a decline on its own even with no adverse history.",
    onFile: "n/a — fixable in minutes",
  },
];

const searchTypes = [
  {
    type: "Soft search (eligibility or pre-qualification check)",
    visible: "Only to you, on your own credit report",
    score: "No effect",
    used: "Indicative eligibility before you commit to anything",
  },
  {
    type: "Hard search (full credit application)",
    visible: "To other lenders who search your file",
    score: "Recorded for around 12 months; several in quick succession read badly",
    used: "Only once you proceed with an actual finance application",
  },
];

// Amount-to-finance comparison. UK and Turkey figures are the same ones
// published across this site (see /prices/turkey-teeth-cost and
// /monthly-payment) — kept identical deliberately so the numbers do not drift.
const amountToFinance = [
  { treatment: "Single dental implant", uk: "£2,000–£3,000", turkey: "£420–£600" },
  { treatment: "20 zirconia crowns (Hollywood Smile package)", uk: "£18,000–£22,000", turkey: "£2,800" },
  { treatment: "20 E-max porcelain veneers", uk: "£16,000–£20,000", turkey: "From £3,800" },
  { treatment: "All-on-4, one arch", uk: "£12,000–£18,000", turkey: "£4,500–£5,500" },
  { treatment: "All-on-6, one arch", uk: "£15,000–£22,000", turkey: "From £5,600" },
];

// Deposit lever, worked on a £4,500 All-on-4 arch at 0% APR over 36 months.
// Monthly = amount financed ÷ 36, rounded to the nearest penny.
const depositLever = [
  { deposit: "£0", financed: "£4,500", monthly36: "£125.00" },
  { deposit: "£500", financed: "£4,000", monthly36: "£111.11" },
  { deposit: "£1,000", financed: "£3,500", monthly36: "£97.22" },
  { deposit: "£1,500", financed: "£3,000", monthly36: "£83.33" },
  { deposit: "£2,250 (50%)", financed: "£2,250", monthly36: "£62.50" },
];

const scenarioA = [
  { term: "12 months", monthly: "£200.00", total: "£2,400" },
  { term: "24 months", monthly: "£100.00", total: "£2,400" },
  { term: "36 months", monthly: "£66.67", total: "£2,400" },
];

const scenarioB = [
  { term: "12 months", monthly: "£300.00", total: "£3,600" },
  { term: "24 months", monthly: "£150.00", total: "£3,600" },
  { term: "36 months", monthly: "£100.00", total: "£3,600" },
];

const faqs = [
  {
    question: "Can you get teeth on finance with bad credit?",
    answer:
      "Sometimes, but nobody can promise it. Approval is the lender's decision, based on your circumstances and their criteria on the day you apply, and adverse credit makes a decline more likely. Any advertiser offering guaranteed approval before running a check is not describing how regulated lending works. Two things genuinely improve the odds without anyone guaranteeing anything: putting down a deposit so less is being borrowed, and choosing a lower treatment total so the amount financed is smaller to begin with. A soft-search eligibility check tells you where you stand without affecting your credit score.",
  },
  {
    question: "Will checking dental finance eligibility affect my credit score?",
    answer:
      "A soft-search eligibility check does not affect your credit score and is visible only to you on your own credit report. A hard search is only recorded when you submit a full finance application, and stays visible to other lenders for around 12 months. This is why it is worth using soft-search pre-qualification to see an indicative decision before committing to an application, particularly if your credit history is poor.",
  },
  {
    question: "What credit score do I need for dental finance?",
    answer:
      "There is no single number. The UK has three credit reference agencies — Experian, Equifax and TransUnion — and each scores on a different scale, so a score from one is not comparable with another. Lenders do not use those consumer-facing scores anyway: they run their own assessment using the underlying data on your file plus the information on your application, including income and existing commitments. That is why a person can be accepted by one lender and declined by another on the same day with the same file.",
  },
  {
    question: "Can I get dental implants on finance with bad credit?",
    answer:
      "Implants are usually the largest dental sum people try to finance, which makes them the hardest case with adverse credit — a UK All-on-4 arch at £12,000–£18,000 is a substantial amount to lend to someone with recent defaults. The same arch treated in Turkey is £4,500–£5,500, and a deposit reduces that further, so the sum being borrowed can be a quarter of the UK figure. A smaller loan is a smaller risk to the lender, which is the single biggest thing within your control. It is still not a guarantee of approval.",
  },
  {
    question: "What happens if I am declined for dental finance?",
    answer:
      "Ask the lender for the main reason for the decision and which credit reference agency they used — you are entitled to be told. Then check your file with all three agencies for errors, make sure you are registered on the electoral roll, and do not immediately reapply elsewhere, because several hard searches in quick succession make the next decision worse. After that the practical levers are a larger deposit, a shorter list of treatment, or a lower-cost treatment plan. If the repayments would have been a stretch even if approved, free debt advice from MoneyHelper, StepChange or Citizens Advice is the right next call rather than another application.",
  },
  {
    question: "Is 'no credit check' dental finance real?",
    answer:
      "Treat it as a warning sign. A regulated lender in the UK must assess whether credit is affordable for you before agreeing it, which in practice means checking your circumstances. Adverts promising no credit check, guaranteed acceptance or approval for everyone are either not describing a regulated credit agreement, or are not being straight about what happens when you apply. Before applying to any finance provider, you can check whether they are authorised on the FCA's Financial Services Register, which is free to search.",
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
        { "@type": "ListItem", position: 3, name: "Teeth on Finance with Bad Credit", item: PAGE_URL },
      ],
    },
  ],
};

export default function TeethOnFinanceBadCreditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: "Teeth on Finance with Bad Credit" },
              ]}
            />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Finance Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            What lenders check, why dental finance applications get declined, what a deposit actually
            changes, and what to do next — written straight, with no promises of approval.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">
            Quick Answer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            You can apply for teeth on finance with bad credit, and some people with adverse credit are
            accepted — but no provider, this site included, can guarantee it. Approval belongs to the
            lender and depends on your circumstances and their criteria on the day. The two levers that
            genuinely move a borderline decision are both about the size of the loan, not your history:
            put down a deposit, and finance a smaller treatment total. A full set of 20 crowns is
            £18,000–£22,000 privately in the UK and £2,800 as an all-inclusive package in Turkey, so the
            sum a lender is being asked to advance can differ by a factor of seven for the same work. A
            soft-search eligibility check shows you where you stand and does not affect your credit
            score.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "No UK lender can guarantee approval, and any advert promising it is not describing a regulated credit agreement.",
              "A soft-search eligibility check is visible only to you and does not affect your credit score. A hard search is recorded for around 12 months and only happens when you submit a full application.",
              "Most adverse markers — defaults, CCJs, IVAs, bankruptcy — drop off your credit file after 6 years. A CCJ paid in full within one month is removed entirely.",
              "The strongest lever you control is the amount financed. A deposit of £1,000 on a £4,500 arch takes the 36-month figure from £125.00 to £97.22 and reduces the lender's exposure by more than a fifth.",
              "There is no minimum credit score for dental finance. Experian, Equifax and TransUnion use different scales, and lenders run their own assessment on the underlying data rather than the consumer-facing score.",
              "If you are declined, ask for the reason and the credit reference agency used, fix any errors, and avoid reapplying immediately — repeated hard searches make the next decision worse.",
            ]}
          />

          <h2 id="what-is-bad-credit" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What Counts as &ldquo;Bad Credit&rdquo; in the UK
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            &ldquo;Bad credit&rdquo; is not an official status. It is shorthand for a credit file carrying
            one or more adverse markers, and the markers differ enormously in how much weight a lender
            gives them. A single late payment three years ago is not in the same category as an active
            bankruptcy. It is worth knowing exactly what is on your file before you assume the answer
            will be no — you can see all three files for free.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Marker</th>
                  <th className="px-4 py-3 text-left font-semibold">What it means</th>
                  <th className="px-4 py-3 text-left font-semibold">How long on file</th>
                </tr>
              </thead>
              <tbody>
                {creditMarkers.map((r, i) => (
                  <tr key={r.marker} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 align-top">{r.marker}</td>
                    <td className="px-4 py-3 text-gray-700 align-top">{r.meaning}</td>
                    <td className="px-4 py-3 text-gray-700 align-top whitespace-nowrap">{r.onFile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Two entries on that list are worth acting on today regardless of what you decide about
            treatment. If you are not on the electoral roll, registering takes a few minutes and removes
            a decline reason that has nothing to do with your finances. And if you have a CCJ that was
            settled within a month of judgment, it should not be on the register at all — that is worth
            checking and challenging.
          </p>

          <h2 id="what-lenders-check" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What Lenders Actually Check
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A common assumption is that a credit score is the decision. It is not. UK lenders are
            required to assess whether the borrowing is affordable for you, and the assessment uses
            several inputs at once:
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">1.</span>
              <span>
                <strong>Your credit file</strong> — payment history, current balances, how much of your
                available credit you are using, and any adverse markers from the table above.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">2.</span>
              <span>
                <strong>Affordability</strong> — income against existing commitments. Someone with a
                thin file and a stable income can be a better prospect than someone with a clean file
                and no headroom left.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">3.</span>
              <span>
                <strong>The amount and the term</strong> — the size of the loan relative to your income.
                This is the input you can change most easily, and it is covered in detail below.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">4.</span>
              <span>
                <strong>Identity and stability</strong> — electoral roll registration, address history
                (usually three years) and a UK bank account.
              </span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because every lender weights these differently and none of them publish their criteria, the
            same application can be accepted by one and declined by another on the same day. That is
            normal, and it is why no honest guide can tell you in advance what your answer will be.
          </p>

          <h2 id="soft-vs-hard" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Soft Search vs Hard Search
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This distinction matters more to you than to anyone with a clean file, because the cost of a
            failed application is higher when your file is already marked. The difference:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Who can see it</th>
                  <th className="px-4 py-3 text-left font-semibold">Effect on your score</th>
                  <th className="px-4 py-3 text-left font-semibold">When it happens</th>
                </tr>
              </thead>
              <tbody>
                {searchTypes.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 align-top">{r.type}</td>
                    <td className="px-4 py-3 text-gray-700 align-top">{r.visible}</td>
                    <td className="px-4 py-3 text-gray-700 align-top">{r.score}</td>
                    <td className="px-4 py-3 text-gray-700 align-top">{r.used}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The practical rule: use soft-search eligibility checks freely to find out where you stand,
            and make a full application only once, to the option you have most reason to think will be
            accepted.
          </p>

          <h2 id="amount-financed" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            The Amount You Finance Matters More Than You Think
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most guides about bad-credit dental finance concentrate on repairing your credit file, which
            takes years. The faster lever is the other side of the equation: how much you are asking to
            borrow. Financing £3,000 with a patchy file is a materially different proposition to
            financing £18,000 with the same file.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is where treatment abroad changes the arithmetic rather than the credit decision itself.
            Partner clinics in Turkey use the same implant and veneer brands used in UK practices
            (Straumann, Nobel Biocare, Ivoclar E-max), so the comparison below is like for like on
            materials — what differs is the sum a lender is being asked to advance:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">UK private — amount to finance</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey — amount to finance</th>
                </tr>
              </thead>
              <tbody>
                {amountToFinance.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-red-500 whitespace-nowrap">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold whitespace-nowrap">{r.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            To be clear about what this does and does not do: a smaller loan does not erase a default or
            a CCJ, and it is not a route around a lender&apos;s criteria. It changes one input — the
            amount at risk — which is the input most likely to turn a borderline decision. Full pricing
            is set out on the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">
              Turkey teeth cost guide
            </Link>
            .
          </p>

          <h2 id="deposit-lever" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What a Deposit Actually Changes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A deposit reduces the amount borrowed pound for pound, and with it both the monthly
            repayment and the lender&apos;s exposure. Worked on a £4,500 All-on-4 arch at 0% APR
            representative over 36 months:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Deposit</th>
                  <th className="px-4 py-3 text-right font-semibold">Amount financed</th>
                  <th className="px-4 py-3 text-right font-semibold">Monthly over 36 months</th>
                </tr>
              </thead>
              <tbody>
                {depositLever.map((r, i) => (
                  <tr key={r.deposit} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.deposit}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.financed}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.monthly36}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Illustrative calculation at 0% APR representative: monthly figure is the amount financed
            divided by the term. Not a credit offer, and not a quotation. Your own figures depend on the
            treatment plan you are quoted, the term, the rate you are offered and the lender&apos;s
            decision.
          </p>

          <h2 id="scenarios" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Example Payment Scenarios
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both of the following are{" "}
            <strong>illustrative example treatment scenarios</strong>, not real patients and not offers
            of credit. They exist to show how a deposit and a term interact on the treatment totals
            published on this site.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
            Example Treatment Scenario A — 20 zirconia crowns
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Treatment: 20 zirconia crowns, Hollywood Smile package, £2,800 all-inclusive of hotel and
            transfers. Deposit £400. Amount financed £2,400. Trips: one, around 5–7 days.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Term</th>
                  <th className="px-4 py-3 text-right font-semibold">Monthly payment</th>
                  <th className="px-4 py-3 text-right font-semibold">Total repayable</th>
                </tr>
              </thead>
              <tbody>
                {scenarioA.map((r, i) => (
                  <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.term}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.monthly}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
            Example Treatment Scenario B — All-on-4, one arch
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Treatment: All-on-4 full-arch implants, one arch, £4,500. Deposit £900. Amount financed
            £3,600. Trips: two, with a 3–6 month healing period at home between them.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Term</th>
                  <th className="px-4 py-3 text-right font-semibold">Monthly payment</th>
                  <th className="px-4 py-3 text-right font-semibold">Total repayable</th>
                </tr>
              </thead>
              <tbody>
                {scenarioB.map((r, i) => (
                  <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.term}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.monthly}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Both scenarios assume 0% APR representative, where the total repayable equals the amount
            financed. &ldquo;Representative APR&rdquo; means the rate at least 51% of accepted applicants
            receive — yours may differ. These are illustrations, not credit offers or quotations. Credit
            is subject to status, an affordability assessment and the lender&apos;s approval. Not
            everyone will qualify. We are not the lender: any credit agreement is between you and the
            finance provider. Per-treatment monthly figures for every treatment are on the{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">
              monthly payment page
            </Link>
            .
          </p>

          <h2 id="declined" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What to Do If You Are Declined
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A decline is a decision by one lender on one day, on one amount. It is not a permanent
            verdict, and the worst response is to immediately apply somewhere else. In order:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">1.</span>
              <span>
                <strong>Ask why, and which agency was used.</strong> You are entitled to be told the main
                reason for the decision and which credit reference agency the lender searched.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">2.</span>
              <span>
                <strong>Check all three files for errors.</strong> Experian, Equifax and TransUnion hold
                different data, and a decline is sometimes caused by an entry that is simply wrong. You
                can dispute an error free of charge, and add a Notice of Correction explaining any
                marker you cannot remove.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">3.</span>
              <span>
                <strong>Register on the electoral roll</strong> if you are not already. It is free, takes
                minutes, and removes a decline reason unrelated to your finances.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">4.</span>
              <span>
                <strong>Wait before reapplying.</strong> Each full application leaves a hard search for
                around 12 months, and a cluster of them reads as distress to the next lender.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">5.</span>
              <span>
                <strong>Change the amount, not just the lender.</strong> A larger deposit, a phased
                treatment plan, or a lower-cost plan for the same materials all reduce what you are
                asking to borrow.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">6.</span>
              <span>
                <strong>If the repayments would have been a stretch anyway, stop and get advice.</strong>{" "}
                MoneyHelper, StepChange and Citizens Advice all give free, impartial debt advice. Elective
                dental work is not worth taking on borrowing you cannot comfortably service.
              </span>
            </li>
          </ol>

          <h2 id="not-credit" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Options That Are Not Credit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Finance is not the only route, and with adverse credit it is worth knowing the alternatives
            before you apply at all:
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>
                <strong>Phase the treatment.</strong> Treating the visible upper arch first and the lower
                later splits one large sum into two smaller ones you may be able to fund from savings.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>
                <strong>Change the material, where it is clinically appropriate.</strong> Composite
                costs less than porcelain; an entry-level implant system costs less than a premium one.
                This is a conversation for your treatment plan, not a decision to make from a price list.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>
                <strong>Check NHS eligibility first.</strong> If any part of what you need is treatment
                the NHS provides, it is charged at a fixed band rate rather than a private fee. Cosmetic
                work such as veneers is not covered, and implants only in narrow clinical circumstances —
                the{" "}
                <Link
                  href="/guides/cant-afford-dental-treatment-uk"
                  className="text-[#1e40af] font-semibold hover:underline"
                >
                  can&apos;t afford dental treatment guide
                </Link>{" "}
                sets out the bands.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>
                <strong>Save against a fixed quote.</strong> With a written treatment plan and a total,
                saving becomes a defined target rather than an open-ended one.
              </span>
            </li>
          </ul>

          <h2 id="avoid" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What to Avoid
          </h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>
                <strong>&ldquo;Guaranteed approval&rdquo; and &ldquo;no credit check&rdquo; dental
                finance.</strong> A regulated UK lender has to assess affordability before agreeing
                credit. An advertiser promising acceptance before checking anything is not describing a
                regulated agreement.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>
                <strong>High-cost short-term credit for elective treatment.</strong> Payday-style
                borrowing is among the most expensive ways to fund anything, and cosmetic dentistry is
                rarely urgent enough to justify it.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>
                <strong>Paying upfront for credit repair.</strong> Everything a paid &ldquo;credit
                repair&rdquo; service can legitimately do — dispute errors, add a Notice of Correction,
                register you to vote — you can do yourself for free.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>
                <strong>Applying to several lenders at once.</strong> Hard searches accumulate. Use
                soft-search checks to compare, then make one application.
              </span>
            </li>
          </ul>

          <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Typical Eligibility Criteria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Criteria vary by lender and none of them are guarantees, but finance arranged for treatment
            booked through this site is generally available on the following basis:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>Aged 18 or over and resident in the UK, usually with three years&apos; address history.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>A UK bank account and a regular income, assessed for affordability.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>Amounts from £500 to £30,000 over 12, 24 or 36 months, at 0% APR representative on qualifying plans.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1e40af] font-bold shrink-0">•</span>
              <span>A soft-search pre-qualification first, so you see an indicative answer before any hard search is recorded.</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Adverse credit does not automatically exclude you from applying, and it does not guarantee
            you will be accepted. The full plan options, terms and what the finance covers are set out on
            the{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">
              Turkey teeth finance options page
            </Link>
            , and the wider picture — treatments, costs, travel and safety — is in the{" "}
            <Link href="/guides/teeth-in-turkey" className="text-[#1e40af] font-semibold hover:underline">
              complete UK patient guide to teeth in Turkey
            </Link>
            .
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Bad Credit Dental Finance: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            {
              label: "MoneyHelper: How to improve your credit score",
              href: "https://www.moneyhelper.org.uk/en/everyday-money/credit-and-purchases/how-to-improve-your-credit-score",
            },
            {
              label: "MoneyHelper: What is a credit reference agency?",
              href: "https://www.moneyhelper.org.uk/en/everyday-money/credit-and-purchases/how-to-check-your-credit-report",
            },
            {
              label: "GOV.UK: Register of Judgments, Orders and Fines (CCJs)",
              href: "https://www.gov.uk/register-judgments-fines-tribunals",
            },
            {
              label: "Citizens Advice: Checking and correcting your credit rating",
              href: "https://www.citizensadvice.org.uk/debt-and-money/borrowing-money/your-credit-rating/",
            },
            {
              label: "FCA: Financial Services Register (check a lender or broker)",
              href: "https://register.fca.org.uk/",
            },
            {
              label: "StepChange: Free debt advice",
              href: "https://www.stepchange.org/",
            },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            {
              title: "Turkey Teeth Finance & Payment Plans",
              desc: "Plan options, terms and what finance covers for UK patients.",
              href: "/finance-options-uk",
            },
            {
              title: "Monthly Payment Calculator",
              desc: "What each treatment costs per month at 12, 24 or 36 months.",
              href: "/monthly-payment",
            },
            {
              title: "Turkey Teeth Cost Guide 2026",
              desc: "Full price breakdown: veneers, implants, crowns and packages.",
              href: "/prices/turkey-teeth-cost",
            },
            {
              title: "Can't Afford Dental Treatment in the UK?",
              desc: "NHS band charges, payment plans and lower-cost options in decision order.",
              href: "/guides/cant-afford-dental-treatment-uk",
            },
            {
              title: "Dental Tourism Finance Explained",
              desc: "How paying for treatment abroad works from the UK.",
              href: "/blog/dental-tourism-finance-explained",
            },
            {
              title: "Complete UK Patient Guide to Teeth in Turkey",
              desc: "Treatments, costs, safety, travel and finance in one guide.",
              href: "/guides/teeth-in-turkey",
            },
          ]}
        />
      </div>

      <CTASection
        title="Check Where You Stand — Without Affecting Your Credit Score"
        subtitle="Get a free treatment plan with an itemised cost and an indicative monthly figure. The eligibility check is a soft search, so it leaves no mark on your credit file."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
