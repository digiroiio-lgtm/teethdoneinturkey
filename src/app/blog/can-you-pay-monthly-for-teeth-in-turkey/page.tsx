import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import GuideTOC from "@/components/GuideTOC";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

// Rebuilt 2026-09-17. This is the site's best-positioned page and its largest
// striking-distance opportunity: 131 Search Console impressions over
// 2026-09-10..09-16 at average position 11.1, up from 22 impressions the week
// before, with ~70 of those impressions sitting at positions 8-11.4 — one place
// outside the top half of page one:
//
//   turkey teeth packages pay monthly   22 impr  @ 11.36
//   pay monthly turkey teeth            16 impr  @ 11.06
//   turkey teeth pay monthly            11 impr  @ 10.18
//   can you pay monthly for turkey teeth 5 impr  @  8.40  (1 of the site's 5 clicks)
//   turkey teeth monthly payments        3 impr  @ 10.67
//   can you get your teeth done in turkey on finance 3 impr @ 10.33
//
// GA4 for the same fortnight shows all 19 AI-assistant sessions to the site
// landing on finance pages, so this cluster is simultaneously the strongest
// Google cluster and the only one answer engines cite.
//
// What the ranking competitors (Kandoo, Medrefund, LoSmiles, UK Smiles,
// Dentatur) all cover and this page did not: the funding routes compared,
// what can be borrowed and over how long, eligibility criteria, soft vs hard
// search, what happens when an application is declined, who you actually repay,
// and what finance does not cover. That gap — not the page's position — is what
// was fixed here.
//
// Two YMYL defects were also removed. The page claimed "we work with specialist
// lenders who consider all profiles", an unsupported lender-relationship claim
// that reads as a near-guarantee of approval for bad credit; and its "Pre-Qualify
// Now" call to action pointed at /book-consultation, a treatment consultation
// form, not a finance application. The single-implant row said £650, which
// matches no published price on this site (£420-£600, minimum finance £500).
const TITLE = "Can You Pay Monthly for Turkey Teeth? UK Guide";
const DESCRIPTION =
  "Yes — UK patients can pay monthly for Turkey teeth. The funding routes compared, what you can borrow, eligibility, bad credit, and what finance won't cover.";

const tocItems = [
  { id: "short-answer", label: "The short answer" },
  { id: "three-routes", label: "Three ways to fund it" },
  { id: "how-it-works", label: "How paying monthly works" },
  { id: "borrow", label: "What you can borrow" },
  { id: "examples", label: "Monthly payment examples" },
  { id: "eligibility", label: "Eligibility" },
  { id: "bad-credit", label: "Bad credit and declines" },
  { id: "not-covered", label: "What finance doesn't cover" },
  { id: "vs-uk", label: "Financed Turkey vs financed UK" },
  { id: "faqs", label: "FAQs" },
];

// Every treatment total below is a price published elsewhere on this site.
// Monthly figures are the total divided by the term at 0% APR representative,
// rounded up to the nearest pound — the same convention used on
// /monthly-payment and /finance-options-uk, so no new or conflicting price is
// introduced here.
const paymentExamples = [
  { t: "10 E-max veneers", cost: "£1,900", m12: "£159", m24: "£80", m36: "£53" },
  { t: "20 E-max veneers (full set)", cost: "£3,800", m12: "£317", m24: "£159", m36: "£106" },
  { t: "Hollywood Smile (20 zirconia crowns)", cost: "£2,800", m12: "£234", m24: "£117", m36: "£78" },
  { t: "All-on-4, one arch", cost: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
  { t: "All-on-6, one arch", cost: "£5,600", m12: "£467", m24: "£234", m36: "£156" },
  { t: "All-on-4, both arches", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
];

const fundingRoutes = [
  {
    route: "Pay the clinic directly",
    what: "Bank transfer or card, usually a deposit to hold your treatment dates and the balance at the clinic.",
    suits: "You already have the money and don't want a credit agreement.",
    watch: "No credit check and no interest, but no monthly cushion either. Card payments abroad can carry foreign-transaction fees.",
  },
  {
    route: "A UK dental payment plan",
    what: "Fixed monthly instalments arranged for this specific treatment, from £500 to £30,000 over 12, 24 or 36 months, with 0% APR representative on qualifying plans through an FCA-regulated provider.",
    suits: "Most UK patients. The eligibility check is a soft search, so comparing costs nothing.",
    watch: "Approval is the lender's decision, never guaranteed. You repay the lender, not the clinic.",
  },
  {
    route: "A personal loan or 0% purchase card",
    what: "General-purpose borrowing from your own bank or card issuer, used to pay the clinic.",
    suits: "Patients with an existing 0% card offer, or who want one facility covering treatment and travel.",
    watch: "A personal loan usually carries interest. A 0% card only helps if you clear the balance inside the promotional window and the clinic takes card payments.",
  },
];

const faqs = [
  {
    q: "Can you pay monthly for Turkey teeth?",
    a: "Yes. UK patients routinely spread the cost of dental treatment in Turkey over 12, 24 or 36 months using a UK payment plan arranged through an FCA-regulated provider, with 0% APR representative on qualifying plans. The finance is a UK credit agreement in pounds — the treatment happens in Turkey, but you apply from the UK, repay from a UK bank account by direct debit, and your agreement is with the lender rather than the clinic.",
  },
  {
    q: "Can you get Turkey teeth on finance?",
    a: "Yes, and it is the same product as a monthly payment plan — 'finance', 'payment plan' and 'pay monthly' are used interchangeably for it. What differs is the route: a dental payment plan is arranged for one specific treatment, while a personal loan or 0% purchase credit card is general-purpose borrowing you arrange yourself and then use to pay the clinic.",
  },
  {
    q: "Can you pay monthly for a Turkey teeth package?",
    a: "Yes, and the figure to check is what the package actually contains. Finance is arranged against the treatment total, so a package quoted as all-inclusive with hotel and transfers can normally be financed as one amount, while flights you book yourself sit outside it. Ask for the treatment total in writing before applying, because anything added after your assessment — a bone graft, a sinus lift, extractions — is not part of the agreed figure.",
  },
  {
    q: "What are Turkey teeth monthly payments, realistically?",
    a: "They are the treatment total divided across the term. At 0% APR representative, a full set of 20 E-max veneers at £3,800 is around £106 a month over 36 months, an All-on-4 arch at £4,500 is £125, and both arches at £9,000 is £250. A longer term does not add interest on a 0% plan — it simply divides the same total across more months.",
  },
  {
    q: "Can I get Turkey teeth finance with bad credit?",
    a: "You can apply, and the initial eligibility check is a soft search that does not affect your credit score. No provider can honestly guarantee approval with a poor credit history, because the decision belongs to the lender and depends on your circumstances and their criteria on the day. Two things genuinely improve the odds: putting down a deposit so less is being borrowed, and financing a lower treatment total in the first place.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "The eligibility check is a soft search, which is visible only to you and leaves no mark lenders can see. A hard credit check is recorded on your file, and that only happens if you choose to proceed with a full application. Several full applications in quick succession do read badly to lenders, so use soft-search pre-checks to compare before committing to one.",
  },
  {
    q: "Can I pay a deposit and finance the rest?",
    a: "Yes. You can put down any amount as a deposit and finance the remainder, which lowers both the monthly payment and the amount being assessed. Financing £2,000 of a £4,500 arch is a materially different proposition to financing all of it, and it is the single most effective thing you can do if you are worried about approval.",
  },
  {
    q: "Do I repay the clinic or the lender?",
    a: "The lender. On a UK payment plan the credit agreement is between you and the lender, and the clinic is paid separately — which is why treatment problems and repayment obligations are handled through different channels. How the money reaches the clinic also changes what protection you have: Section 75 of the Consumer Credit Act generally depends on a credit card paying the supplier directly, and borrowing that lands in your own account before being transferred on usually breaks that link.",
  },
  {
    q: "Can I pay it off early?",
    a: "Most regulated agreements allow early settlement, and on a 0% plan there is no interest to save — you simply finish sooner. Your right to settle early and any charge that applies is set out in the pre-contract information you receive before signing, so check that document rather than relying on a general answer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  // `absolute` because the " | Teeth Done in Turkey" template would push this to
  // 69 characters and truncate it in the SERP.
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
          { name: "Can You Pay Monthly for Turkey Teeth?", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
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
          <p className="text-gray-500 text-sm">Published January 2026 · Last updated 17 September 2026 · 9 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 id="short-answer" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">The short answer</h2>
          <p>
            <strong>Yes.</strong> UK patients can pay monthly for Turkey teeth, and the finance is a UK credit agreement
            rather than anything arranged in Turkey. You apply from the UK in pounds, the plan runs over 12, 24 or 36
            months with 0% APR representative on qualifying plans through an FCA-regulated provider, and you repay by
            direct debit from a UK bank account. The treatment total is what gets financed — a full set of 20 E-max
            veneers at £3,800 works out from £106 a month over 36 months, and an All-on-4 arch at £4,500 from £125.
          </p>
          <p>
            The eligibility check is a soft search, so finding out where you stand costs nothing and leaves no mark on
            your credit file. What nobody can tell you in advance is whether you will be approved: that is the lender&apos;s
            decision, based on your circumstances and their criteria on the day you apply.
          </p>

          <KeyTakeaways
            items={[
              "Paying monthly for Turkey teeth means a UK credit agreement, in pounds, repaid to a UK lender — not a payment plan with the Turkish clinic.",
              "Plans run from £500 to £30,000 over 12, 24 or 36 months, with 0% APR representative on qualifying plans.",
              "At 0% a longer term adds no interest — it divides the same total across more months.",
              "The eligibility check is a soft search. Only a full application leaves a hard footprint on your credit file.",
              "No provider can guarantee approval, whatever your credit history. A deposit reduces the amount borrowed and materially improves the odds.",
              "Finance covers the treatment total. Flights, extra nights and treatment added after your assessment sit outside it.",
            ]}
          />

          <GuideTOC items={tocItems} />

          <h2 id="three-routes" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            Three ways UK patients actually fund treatment in Turkey
          </h2>
          <p>
            &quot;Pay monthly&quot; covers three genuinely different arrangements, and which one you use changes your costs,
            your protections and who you owe money to.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Route</th>
                  <th className="px-4 py-3 text-left">What it is</th>
                  <th className="px-4 py-3 text-left">Who it suits</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                </tr>
              </thead>
              <tbody>
                {fundingRoutes.map((r, i) => (
                  <tr key={r.route} className={i % 2 === 0 ? "bg-white align-top" : "bg-gray-50 align-top"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{r.route}</td>
                    <td className="px-4 py-3 text-gray-600">{r.what}</td>
                    <td className="px-4 py-3 text-gray-600">{r.suits}</td>
                    <td className="px-4 py-3 text-gray-600">{r.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 my-6">
            <p className="font-semibold text-gray-900 mb-2">Section 75: why how you pay matters, not just what it costs</p>
            <p className="text-sm text-gray-700">
              Section 75 of the Consumer Credit Act 1974 can make a UK credit card provider jointly liable with the
              supplier for purchases between £100 and £30,000, including many made abroad. The protection generally
              depends on the card paying the supplier directly — borrowing that lands in your own account and is then
              transferred on usually breaks that link, and a debit card is not covered at all (though your bank may offer
              chargeback instead). For treatment taking place in another country this is worth understanding before you
              choose a route. Check your own card&apos;s terms and the MoneyHelper guidance linked at the foot of this page.
              This is general information, not legal or financial advice.
            </p>
          </div>

          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            How paying monthly for Turkey teeth works, step by step
          </h2>
          <ol className="space-y-4 my-4">
            {[
              {
                title: "Get the treatment total in writing",
                desc: "Finance is arranged against a figure, so you need one first. A treatment plan based on your photos or X-rays gives you the number to apply for, and tells you what is and is not included.",
              },
              {
                title: "Check eligibility with a soft search",
                desc: "The initial check is a soft search. It is visible only to you, leaves nothing on your file that lenders can see, and tells you what terms are likely to be available before you commit to anything.",
              },
              {
                title: "Choose your term, and a deposit if you want one",
                desc: "12, 24 or 36 months. On a 0% APR representative plan a longer term does not cost more overall — it lowers the monthly figure. Putting down a deposit reduces the amount being borrowed and can change a marginal decision.",
              },
              {
                title: "Complete the full application",
                desc: "This stage involves a hard credit check and an affordability assessment. If you are approved you receive pre-contract information setting out the APR, the total repayable, the payment dates and your early-settlement rights. Read it before signing.",
              },
              {
                title: "Book treatment and travel",
                desc: "With funding in place you can confirm dates. Your clinic is paid for the treatment; your agreement is with the lender.",
              },
              {
                title: "Repay by direct debit from home",
                desc: "Payments start on the date set out in your agreement and run from your UK bank account. Missing them has the same consequences as any other UK credit agreement, so budget for the payment, not just the treatment.",
              },
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

          <h2 id="borrow" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            What you can borrow, and over how long
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 my-4">
            {[
              { label: "Amount", value: "£500 – £30,000" },
              { label: "Terms", value: "12, 24 or 36 months" },
              { label: "Rate", value: "0% APR representative" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{item.label}</p>
                <p className="text-lg font-extrabold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
          <p>
            &quot;0% APR representative&quot; is a regulated term with a specific meaning: at least 51% of accepted applicants
            must be offered that rate, so some applicants are offered an interest-bearing plan instead. The APR you are
            actually offered is shown before you commit, and on a genuine 0% plan you repay exactly the treatment price
            and nothing more.
          </p>
          <p>
            The £500 floor matters more often than people expect. A single implant from £250, or a zirconia crown from
            £130, falls below it — so small standalone treatments either need combining with other work into one plan,
            or paying outright. Finance becomes relevant at the full-set and full-arch end, which is where the totals
            people are actually trying to spread sit anyway.
          </p>

          <h2 id="examples" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Monthly payment examples</h2>
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
                {paymentExamples.map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
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
            Illustrative only. Each total is a price published elsewhere on this site, divided by the term at 0% APR
            representative and rounded up to the nearest pound. This is not a credit offer and not a quotation. Actual
            terms depend on a credit and affordability assessment, and not everyone will qualify. For figures organised
            by budget rather than by treatment, see the{" "}
            <Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] hover:underline">
              payment examples by treatment total
            </Link>
            ; for what each treatment costs per month on its own, see{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] hover:underline">
              monthly payments by treatment
            </Link>
            .
          </p>

          <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            Who can apply: eligibility in practice
          </h2>
          <p>Criteria vary between lenders, but UK dental finance applications are generally assessed on:</p>
          <ul className="list-disc list-outside ml-5 space-y-2 my-3">
            <li><strong>Age and residency</strong> — 18 or over and resident in the UK, usually with a few years of UK address history.</li>
            <li><strong>A UK bank account</strong> that can accept direct debits, since that is how repayments are collected.</li>
            <li><strong>Verifiable income</strong> — being self-employed does not disqualify you, but expect to evidence what you earn rather than simply state it.</li>
            <li><strong>Affordability, not just credit score</strong> — lenders assess whether the payment fits your outgoings. A good score with little headroom can be declined where a modest score with room to spare is accepted.</li>
            <li><strong>The amount requested</strong> — the smaller the sum relative to your income, the easier the decision.</li>
          </ul>

          <h2 id="bad-credit" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            Bad credit, and what to do if you are declined
          </h2>
          <p>
            Be sceptical of anyone advertising guaranteed acceptance. Approval is the lender&apos;s decision and depends on
            your circumstances and their criteria at the time, so a guarantee made before a check has been run is not
            describing how lending works. What does genuinely change the outcome:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 my-3">
            <li><strong>Put down a deposit.</strong> Financing £2,000 of a £4,500 arch is a different proposition to financing all of it.</li>
            <li><strong>Finance a smaller treatment total.</strong> Staging work — veneers now, implants later — lowers the amount assessed.</li>
            <li><strong>Don&apos;t scattergun applications.</strong> Each hard search is recorded, and several in quick succession read badly. Compare with soft-search checks first.</li>
            <li><strong>Check your credit file before applying</strong> and correct anything wrong on it. Errors are common and fixable.</li>
            <li><strong>If you are declined, ask why.</strong> The reason often points at something specific and fixable rather than a permanent no.</li>
          </ul>
          <p>
            Free, impartial help is available from MoneyHelper, the government-backed service linked below. If repayments
            on existing debt are already difficult, taking on more borrowing for cosmetic treatment is rarely the right
            answer, and a free debt adviser is a better first call than any clinic.
          </p>

          <h2 id="not-covered" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            What the finance does not cover
          </h2>
          <p>
            Finance is arranged against the treatment total, which is not the same as the total cost of the trip. Budget
            separately for:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 my-3">
            <li><strong>Flights</strong>, unless a package explicitly includes them.</li>
            <li><strong>Extra nights</strong> if treatment runs longer than planned — a real possibility with implants and extractions.</li>
            <li><strong>Treatment added after your assessment</strong>: bone grafts, sinus lifts and extractions are commonly identified once a clinician has seen you in person.</li>
            <li><strong>Travel insurance</strong>, and any follow-up or repair work back in the UK.</li>
          </ul>
          <p>
            For the full picture including travel, see{" "}
            <Link href="/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" className="text-[#1e40af] hover:underline">
              what it really costs to get your teeth done in Turkey
            </Link>
            .
          </p>

          <h2 id="vs-uk" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            Financed in Turkey vs financed in the UK
          </h2>
          <p>
            Spreading the cost does not change which country is cheaper — it changes the size of the monthly commitment.
            A full set of 20 veneers is the clearest comparison:
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
              <p className="text-xs text-gray-500 mb-1">UK private, over 36 months</p>
              <p className="text-2xl font-extrabold text-red-500">£445–£556/mo</p>
              <p className="text-xs text-gray-400">Based on £16,000–£20,000</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Turkey, over 36 months</p>
              <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
              <p className="text-xs text-gray-400">Based on £3,800</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Both columns are calculated at 0% for a like-for-like comparison. In practice UK cosmetic finance at that
            size is often interest-bearing, which would widen the gap rather than narrow it. Veneers are cosmetic, so NHS
            band charges never apply to them.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Frequently asked questions</h2>
          <div className="space-y-5 my-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-5 last:border-0">
                <h3 className="font-semibold text-gray-900 mb-1">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your treatment total first</p>
            <p className="text-blue-200 mb-4">
              Finance is arranged against a figure, so the useful first step is a treatment plan — not an application.
              Send your photos and we will come back with what the work involves and what it costs, free and with no
              obligation.
            </p>
            <Link href="/free-treatment-plan" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Get My Free Treatment Plan
            </Link>
          </div>

          <SourcesList
            sources={[
              { label: "FCA — Consumer credit and borrowing", href: "https://www.fca.org.uk/consumers/credit" },
              { label: "MoneyHelper — Section 75 and credit card protection", href: "https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/section-75-of-the-consumer-credit-act" },
              { label: "MoneyHelper — Free debt advice", href: "https://www.moneyhelper.org.uk/en/money-troubles/dealing-with-debt" },
              { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
              { label: "NHS — Dental costs and band charges", href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/" },
            ]}
          />

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Related:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ UK dental finance: loans, plans and bad credit</Link></li>
              <li><Link href="/monthly-payment" className="text-[#1e40af] hover:underline">→ Turkey teeth monthly payments by treatment</Link></li>
              <li><Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] hover:underline">→ Payment examples by treatment total</Link></li>
              <li><Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">→ Turkey teeth cost: complete 2026 price guide</Link></li>
              <li><Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] hover:underline">→ What a Turkey teeth package actually includes</Link></li>
              <li><Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] hover:underline">→ Dental tourism finance explained</Link></li>
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
            <Link href="/price-calculator" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Price Calculator</span>
              <span className="text-xs text-gray-500 mt-0.5">Build your own estimate</span>
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
