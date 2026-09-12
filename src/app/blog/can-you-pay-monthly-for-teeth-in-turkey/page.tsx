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

const DATE_MODIFIED = "2026-09-12";

// Positioned on the query family this URL actually ranks for (GSC 09-05..09-11):
// "pay monthly turkey teeth" 11.3, "pay monthly teeth turkey" 11.1, "turkey teeth
// pay monthly" 10.4, "can you pay monthly for turkey teeth" 6.8, "can you get your
// teeth done in turkey on finance" 10.4, "turkey teeth packages pay monthly" 10.0.
// The title previously led on "Monthly Payment", a phrase that appears in none of
// them; every recorded query uses "pay monthly" + "turkey teeth". Absolute title so
// the layout's " | Teeth Done in Turkey" suffix cannot push it past ~60 chars.
const TITLE = "Pay Monthly for Turkey Teeth: UK Finance 2026";
const DESCRIPTION =
  "Yes — UK patients can pay monthly for teeth done in Turkey. Package and treatment figures from £78/month, 0% APR rep., plus deposits and eligibility.";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "how-it-works", label: "How paying monthly works" },
  { id: "package-monthly", label: "Turkey teeth packages, paid monthly" },
  { id: "monthly-examples", label: "What each treatment costs per month" },
  { id: "example-scenario", label: "Example treatment scenario" },
  { id: "eligibility", label: "Eligibility and what affects approval" },
  { id: "uk-comparison", label: "Financed in the UK vs financed in Turkey" },
];

// Every figure below is the one already published on this site's canonical price
// pages (/prices/turkey-teeth-cost, /prices/veneers-turkey-cost, /monthly-payment).
// Monthly figures are the full price divided by the term at 0% APR representative,
// rounded to the nearest pound — the same method /monthly-payment uses, so the two
// pages agree row for row. The previous version of this table carried a "£650
// single implant" and a "£5,000 smile makeover" that matched no published price on
// the site (implants are £250 Osstem to £930 Straumann; the makeover is from
// £3,500); both rows were removed rather than reconciled to an invented number.
const monthlyRows = [
  { t: "10 E-max porcelain veneers", note: "Priced per tooth, travel extra", cost: "£1,900", m12: "£158", m24: "£79", m36: "£53" },
  { t: "20 E-max porcelain veneers", note: "Priced per tooth, travel extra", cost: "£3,800", m12: "£317", m24: "£158", m36: "£106" },
  { t: "20 zirconia crowns — Hollywood Smile package", note: "Hotel + VIP transfers included", cost: "£2,800", m12: "£233", m24: "£117", m36: "£78" },
  { t: "24 zirconia crowns — Hollywood Smile package", note: "Hotel + VIP transfers included", cost: "£3,100", m12: "£258", m24: "£129", m36: "£86" },
  { t: "All-on-4, one arch", note: "All-inclusive package", cost: "£4,500", m12: "£375", m24: "£188", m36: "£125" },
  { t: "All-on-6, one arch", note: "All-inclusive package", cost: "£5,600", m12: "£467", m24: "£233", m36: "£156" },
  { t: "All-on-4, both arches", note: "All-inclusive package", cost: "£9,000", m12: "£750", m24: "£375", m36: "£250" },
];

// £2,800 package, £500 deposit, £2,300 balance, 0% APR representative.
const scenarioRows = [
  { term: "6 months", m: "£383", total: "£2,800" },
  { term: "12 months", m: "£192", total: "£2,800" },
  { term: "18 months", m: "£128", total: "£2,800" },
  { term: "24 months", m: "£96", total: "£2,800" },
  { term: "36 months", m: "£64", total: "£2,800" },
];

const faqs = [
  {
    question: "Can you pay monthly for teeth in Turkey?",
    answer:
      "Yes. UK patients typically arrange UK-based finance before they travel, then repay it in sterling by direct debit from home while the treatment itself is carried out in Turkey. Terms of 12, 24 and 36 months are the common options, and 0% APR representative plans are available to applicants who qualify. Finance is always subject to a credit check and to the lender's approval — approval is not guaranteed and not everyone will qualify.",
  },
  {
    question: "Can you get Turkey teeth on a payment plan?",
    answer:
      "Yes, but the payment plan is a UK credit agreement rather than an instalment arrangement with the Turkish clinic. You borrow the treatment cost in the UK, the clinic is paid for your treatment, and you repay the UK lender monthly. This matters for two reasons: the agreement is regulated in the UK, and your repayments continue on schedule regardless of what happens with the treatment itself.",
  },
  {
    question: "Can you pay monthly for a Turkey teeth package?",
    answer:
      "Yes. Package prices finance in exactly the same way as single treatments, and because an all-inclusive package already bundles hotel accommodation and VIP transfers into one figure, there is a single amount to spread rather than several separate bills. A 20-crown Hollywood Smile package at £2,800 works out at £78 a month over 36 months, or £117 over 24, at 0% APR representative. Flights are not included in any package price and are not usually part of the financed amount.",
  },
  {
    question: "Can you get your teeth done in Turkey on finance?",
    answer:
      "Yes, and it is the most common way UK patients fund treatment abroad. The practical sequence is: get an itemised treatment quote first, then apply for finance against that confirmed figure. Applying before you have a quote tends to mean borrowing the wrong amount, because the final price depends on how many teeth are treated and which materials are used.",
  },
  {
    question: "Can you pay monthly for veneers in Turkey?",
    answer:
      "Yes. Veneers are priced per tooth rather than as a package, so the financed amount depends on how many units you have. At the E-max porcelain prices published on this site, 10 veneers at £1,900 is £53 a month over 36 months and 20 veneers at £3,800 is £106 a month, both at 0% APR representative. Zirconia crown packages work out lower per month because they are bundled.",
  },
  {
    question: "Is 0% interest available?",
    answer:
      "0% APR representative plans are available, but a representative rate is not a rate everyone receives. At least 51% of accepted applicants must get the advertised rate for it to be quoted as representative, which means some approved applicants are offered a higher APR instead. If you are offered a rate above 0%, the total you repay will be more than the treatment price. Check the APR, the term and the total repayable on the credit agreement before you sign.",
  },
  {
    question: "Do I need a deposit?",
    answer:
      "It depends on the lender and on the amount borrowed. Some plans are available with no deposit; others require one, and a larger deposit generally reduces both the monthly figure and the amount at risk if your plans change. Clinics also commonly ask for a booking deposit to hold treatment dates, which is a separate payment from any deposit the finance agreement requires.",
  },
  {
    question: "Does applying affect my credit score?",
    answer:
      "A pre-qualification or eligibility check uses a soft search, which is visible only to you and does not affect your score. A full application uses a hard search, which is recorded on your credit file and is visible to other lenders. Checking eligibility first is worthwhile precisely because it separates the two.",
  },
  {
    question: "What if I have bad credit?",
    answer:
      "You can still apply, and a soft eligibility check costs you nothing, but a poorer credit history makes approval less likely and makes a higher APR or a larger deposit requirement more likely if you are approved. No lender can promise approval in advance. Our dental finance guide covers what lenders actually assess and what the realistic options are if you have been declined before.",
  },
  {
    question: "Can I pay the finance off early?",
    answer:
      "Most regulated UK credit agreements allow early settlement, and on a 0% plan settling early simply ends the payments sooner. On an interest-bearing agreement you may be entitled to a rebate of some future interest. The right to withdraw within 14 days of signing, and the early settlement terms, are both set out in the agreement itself.",
  },
];

export default function PayMonthlyTeethTurkeyPage() {
  return (
    <>
      <article className="py-16 bg-white">
        <ArticleJsonLd
          id="article-schema-can-you-pay-monthly-for-teeth-in-turkey"
          path="/blog/can-you-pay-monthly-for-teeth-in-turkey"
          headline="Can You Pay Monthly for Teeth in Turkey?"
          description={DESCRIPTION}
          datePublished="2026-01-01"
          dateModified={DATE_MODIFIED}
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Pay Monthly for Turkey Teeth", path: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
          ]}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Can You Pay Monthly for Teeth in Turkey?</h1>
            <p className="text-gray-500 text-sm">Published January 2026 · Updated 12 September 2026 · 9 min read</p>
            <MedicalReviewBadge />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 id="quick-answer" className="text-2xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">Quick Answer: Can You Pay Monthly for Turkey Teeth?</h2>
            <p>
              <strong>Yes.</strong> UK patients pay monthly for teeth done in Turkey by taking out UK-based finance
              before travelling, then repaying it in pounds by direct debit from home. Terms of 12, 24 and 36 months are
              the usual options, and 0% APR representative plans are available to applicants who qualify. On the package
              prices published on this site, a 20-crown Hollywood Smile package at £2,800 is <strong>£78 a month over 36
              months</strong> and All-on-4 on one arch at £4,500 is <strong>£125 a month</strong>. Finance is subject to
              a credit check and to the lender&apos;s approval; approval is not guaranteed and not everyone will qualify.
            </p>

            <KeyTakeaways
              items={[
                "The finance agreement is a UK credit agreement, not an instalment plan with the Turkish clinic — you repay a UK lender in sterling.",
                "All-inclusive packages finance as a single figure because hotel and VIP transfers are already bundled in. Flights are never included and are normally paid separately.",
                "Monthly figures shown here are the treatment price divided by the term at 0% APR representative. At any APR above 0%, the total repayable is higher.",
                "0% APR representative means at least 51% of accepted applicants get that rate — not that every approved applicant does.",
                "Get an itemised treatment quote before applying, so you borrow against a confirmed price rather than an estimate.",
                "A soft eligibility check does not affect your credit score; a full application leaves a hard search on your file.",
              ]}
            />

            <GuideTOC items={toc} />

            <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">How Paying Monthly for Turkey Dental Treatment Works</h2>
            <ol className="space-y-4 my-4">
              {[
                { title: "Get an itemised treatment quote first", desc: "Confirm how many teeth are being treated, which materials are used, and what the package includes. The financed amount should be based on this figure, not on a headline 'from' price." },
                { title: "Check eligibility with a soft search", desc: "An eligibility or pre-qualification check uses a soft credit search, which does not affect your credit score and shows you the indicative terms you are likely to be offered." },
                { title: "Apply, and read the credit agreement", desc: "A full application involves a hard credit search. Before signing, check the APR, the term, any deposit required and the total repayable — these are the four figures that determine what the treatment really costs you." },
                { title: "Book treatment once finance is confirmed", desc: "With the funds confirmed, treatment dates and travel can be booked. Clinics may ask for a separate booking deposit to hold dates." },
                { title: "Travel, then repay from the UK", desc: "Treatment is carried out in Turkey. Repayments run by direct debit from your UK bank account on the agreed schedule, and continue independently of the treatment itself." },
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
            <p className="text-sm text-gray-600">
              One point is worth being explicit about, because it is the most common misunderstanding: you are not paying
              the Turkish clinic in instalments. The clinic is paid for your treatment, and you repay a UK lender. That is
              what makes the agreement a regulated UK credit agreement — and it also means the repayments carry on to
              schedule whatever happens with the treatment.
            </p>

            <h2 id="package-monthly" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Can You Pay Monthly for a Turkey Teeth Package?</h2>
            <p>
              Yes — and a package is usually the most straightforward thing to finance, because the all-inclusive price
              already bundles hotel accommodation, VIP airport and clinic transfers and the smile-design consultation
              into a single number. There is one amount to borrow rather than a treatment bill plus separate travel
              costs to budget around.
            </p>
            <p>
              What an all-inclusive package on this site does and does not cover:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                <p className="font-bold text-green-800 text-sm mb-2">Included in the package price</p>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  <li>The treatment itself (crowns, veneers or implants)</li>
                  <li>Hotel accommodation for the treatment stay</li>
                  <li>VIP airport and clinic transfers</li>
                  <li>Smile design / digital planning consultation</li>
                  <li>Professional cleaning, on the 24-crown package</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                <p className="font-bold text-amber-900 text-sm mb-2">Not included — budget separately</p>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  <li><strong>Flights from the UK</strong>, in every case</li>
                  <li>Extra nights beyond the package stay</li>
                  <li>Bone grafting or a sinus lift, if clinically needed</li>
                  <li>Additional teeth beyond the package unit count</li>
                  <li>Optional extras such as whitening</li>
                </ul>
              </div>
            </div>
            <p>
              Because flights and clinically-driven extras sit outside the package, they usually sit outside the financed
              amount too. If you want them covered, they need to be in the quote you borrow against — which is the
              practical reason for getting an itemised quote before applying rather than after.
            </p>
            <p className="text-sm">
              For what each package contains in detail and how the prices are built up, see{" "}
              <Link href="/prices/turkey-teeth-cost#full-mouth-packages" className="text-[#1e40af] font-semibold hover:underline">full-mouth and package pricing</Link>{" "}
              and the{" "}
              <Link href="/blog/hollywood-smile-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile package breakdown</Link>.
            </p>

            <h2 id="monthly-examples" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Each Treatment Costs Per Month</h2>
            <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                    <th className="px-4 py-3 text-right font-semibold">Price</th>
                    <th className="px-4 py-3 text-right font-semibold">12 mo.</th>
                    <th className="px-4 py-3 text-right font-semibold">24 mo.</th>
                    <th className="px-4 py-3 text-right font-semibold">36 mo.</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyRows.map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3">
                        <span className="font-medium text-gray-800">{r.t}</span>
                        <span className="block text-xs text-gray-500">{r.note}</span>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-800">{r.cost}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m12}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m24}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.m36}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Monthly figures are the treatment price divided by the term at a <strong>0% APR representative</strong> rate,
              rounded to the nearest pound, with no deposit applied. They are example calculations, not credit offers or
              quotations. The rate, term and any deposit you are offered depend on the lender&apos;s assessment of your
              circumstances, and at any APR above 0% the total repayable will be higher than the price shown. Treatment
              prices are the ones published across this site&apos;s price pages as of {DATE_MODIFIED}; flights are extra
              in every row.
            </p>

            <h2 id="example-scenario" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Example Treatment Scenario</h2>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 my-4">
              <p className="text-sm font-bold uppercase tracking-wide text-[#1e40af] mb-3">Example Treatment Scenario</p>
              <ul className="space-y-1.5 text-sm text-gray-800 mb-4">
                <li><strong>Treatment:</strong> Hollywood Smile package, 20 zirconia crowns</li>
                <li><strong>Package price:</strong> £2,800 (hotel and VIP transfers included, flights not included)</li>
                <li><strong>Deposit:</strong> £500</li>
                <li><strong>Balance to finance:</strong> £2,300</li>
                <li><strong>Trips to Turkey:</strong> 1</li>
                <li><strong>Time in Turkey:</strong> 5–7 days</li>
              </ul>
              <div className="overflow-x-auto rounded-xl bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                      <th className="px-4 py-2.5 text-left">Term</th>
                      <th className="px-4 py-2.5 text-right">Monthly payment</th>
                      <th className="px-4 py-2.5 text-right">Total repayable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioRows.map((r, i) => (
                      <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2.5 font-medium">{r.term}</td>
                        <td className="px-4 py-2.5 text-right font-bold text-[#1e40af]">{r.m}</td>
                        <td className="px-4 py-2.5 text-right text-gray-600">{r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                This is an illustrative example, not a real patient and not a credit offer. Monthly figures are the £2,300
                balance divided by the term at a <strong>0% APR representative</strong> rate, rounded to the nearest pound;
                the total repayable includes the £500 deposit. Finance is <strong>subject to a credit check and to the
                lender&apos;s approval</strong> — approval is not guaranteed and not everyone will qualify.
              </p>
            </div>

            <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Eligibility and What Affects Approval</h2>
            <p>
              Dental finance is ordinary UK consumer credit, and lenders assess it the way they assess any other
              borrowing. In broad terms they look at:
            </p>
            <ul className="list-disc list-inside space-y-1.5 my-3 text-gray-700">
              <li>UK residency, and usually a minimum age of 18</li>
              <li>Regular income, and affordability of the monthly repayment against your outgoings</li>
              <li>Credit history, including defaults, CCJs and recent missed payments</li>
              <li>How much you want to borrow relative to your existing commitments</li>
            </ul>
            <p>
              None of that produces a guaranteed outcome, and any site telling you approval is certain is not describing
              regulated credit. What you can do is check eligibility with a soft search before committing to a full
              application, so a decline does not leave a hard search on your file for nothing.
            </p>
            <p className="text-sm">
              If your credit history is the sticking point, the detail sits in our{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">UK dental finance guide</Link>,
              which covers dental loans, 0% plans and what &ldquo;bad credit&rdquo; realistically means for approval.
            </p>

            <h2 id="uk-comparison" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Financed in the UK vs Financed in Turkey</h2>
            <p>Take a full set of 20 porcelain veneers, financed over 36 months in both cases:</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
                <p className="text-xs text-gray-500 mb-1">UK private (36 months)</p>
                <p className="text-2xl font-extrabold text-red-500">£444/mo</p>
                <p className="text-xs text-gray-400">Based on £16,000 over 36 months</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Turkey (36 months)</p>
                <p className="text-2xl font-extrabold text-green-600">£106/mo</p>
                <p className="text-xs text-gray-400">Based on £3,800 over 36 months</p>
              </div>
            </div>
            <p>
              Financing does not change the price difference, it changes when you pay it — so the monthly gap tracks the
              headline gap rather than narrowing it. The honest caveat is that the Turkish figure excludes flights, and
              that travelling for treatment puts distance between you and your dentist if something needs adjusting
              later. That trade-off is covered in{" "}
              <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">the risks of Turkey teeth</Link>{" "}
              and in{" "}
              <Link href="/blog/uk-dentist-vs-turkey-dentist" className="text-[#1e40af] font-semibold hover:underline">UK dentist vs Turkey dentist</Link>.
            </p>

            <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
              <p className="font-bold text-xl mb-2">Get an itemised quote before you apply</p>
              <p className="text-blue-100 mb-4">
                Borrowing against a confirmed treatment price rather than a &ldquo;from&rdquo; price is what keeps the
                monthly figure accurate. Request a free treatment plan and we will set out the units, materials and what
                the package includes.
              </p>
              <Link href="/free-treatment-plan" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Request a Free Treatment Plan</Link>
            </div>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Paying Monthly for Turkey Teeth: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SourcesList
          sources={[
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "MoneyHelper — free, impartial guidance on credit and borrowing", href: "https://www.moneyhelper.org.uk/" },
            { label: "Financial Conduct Authority — check a lender on the Financial Services Register", href: "https://register.fca.org.uk/" },
            { label: "General Dental Council — dental treatment abroad", href: "https://www.gdc-uk.org/" },
          ]}
        />

        <RelatedLinksGrid
          title="Next Steps"
          links={[
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Every treatment and package price on one page, with UK comparisons.", href: "/prices/turkey-teeth-cost" },
            { title: "Dental Finance UK", desc: "Dental loans, 0% plans and what bad credit means for approval.", href: "/finance-options-uk" },
            { title: "Monthly Payment Plans", desc: "What every treatment works out at per month, treatment by treatment.", href: "/monthly-payment" },
            { title: "Hollywood Smile Turkey Cost", desc: "What the £2,800 and £3,100 crown packages actually cover.", href: "/blog/hollywood-smile-turkey-cost" },
            { title: "All-on-4 Turkey", desc: "Full-arch restoration on 4 implants, from £4,500 per arch.", href: "/treatments/all-on-4-turkey" },
            { title: "Veneers Turkey Cost", desc: "Per-tooth veneer and crown pricing, and full-set totals.", href: "/prices/veneers-turkey-cost" },
            { title: "Dental Tourism Finance Explained", desc: "How funding treatment abroad differs from funding it at home.", href: "/blog/dental-tourism-finance-explained" },
            { title: "Free Treatment Plan", desc: "An itemised quote to borrow against, rather than a 'from' price.", href: "/free-treatment-plan" },
          ]}
        />
      </div>
    </>
  );
}
