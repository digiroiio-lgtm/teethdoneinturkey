import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TrackedLink from "@/components/TrackedLink";
import TreatmentTotalsTable from "@/components/TreatmentTotalsTable";
import FinanceDisclosure from "@/components/FinanceDisclosure";

export const revalidate = 86400;

// Softened 2026-10-30. This site is an Introducer Appointed Representative of a
// credit broker, so it does not quote APRs, monthly instalments, approval odds
// or decision speed: those are the lender's and broker's terms, and finance
// promotions need the principal's sign-off. The page explains the options and
// what to check, shows treatment prices only, and carries the finance
// disclosure. Do not add rates, monthly figures or approval claims here
// without the principal's written approval.
export const metadata: Metadata = {
  alternates: { canonical: "/finance-options-uk" },
  title: { absolute: "Turkey Teeth Finance: Paying Monthly for UK Patients" },
  description: "How UK patients can pay monthly for dental treatment in Turkey. Payment plans, loans and credit compared, plus what to check before you agree to finance.",
};

const howItWorks = [
  { step: "1", title: "Get a written treatment plan", desc: "Start with a free personalised plan that shows the full treatment cost, so you know how much you may want to spread." },
  { step: "2", title: "Decide whether to borrow", desc: "You are under no obligation to use finance. You can pay in full, use savings, or arrange credit yourself." },
  { step: "3", title: "Ask for an introduction", desc: "If you want to explore finance, we can introduce you to Ideal4Finance, a credit broker. We do not lend or give credit advice." },
  { step: "4", title: "The broker and lender assess you", desc: "Ideal4Finance arranges applications with lenders on its panel. The lender decides whether to offer credit, and on what terms." },
  { step: "5", title: "Read the offer before you agree", desc: "Check the APR, monthly payment, term, total repayable, fees and cancellation terms in writing. Do not agree to anything you do not understand." },
];

const faqs = [
  {
    q: "Can you pay monthly for teeth in Turkey?",
    a: "Some UK patients do, using a payment plan, a personal loan or another form of credit arranged in the UK. Whether you are offered credit, and on what terms, is decided by the lender and depends on your circumstances. This site introduces you to a credit broker if you ask; it does not lend.",
  },
  {
    q: "Can I get dental finance in the UK with a poor credit history?",
    a: "You can ask, but no one can promise approval. The lender decides based on your circumstances and its criteria when you apply. A deposit or a smaller treatment total means less is being borrowed, which can matter to a lender. Ask the broker whether a check will leave a mark on your credit file before you apply.",
  },
  {
    q: "How much would my monthly payment be?",
    a: "It depends on the amount borrowed, the term and the interest rate in the offer you receive, so we do not publish monthly figures. Your written offer shows the monthly payment, the APR and the total repayable. Compare the total repayable, not just the monthly amount.",
  },
  {
    q: "Does applying for finance affect my credit file?",
    a: "It depends on the check the broker or lender runs. Some eligibility checks are soft searches and some applications involve a full search that is recorded on your file. Ask which one applies before you proceed, and avoid several full applications in a short period.",
  },
  {
    q: "Can I pay for flights and hotels with finance?",
    a: "Finance, if offered, is arranged for the treatment cost shown in your plan. Flights and accommodation are separate unless your treatment package says otherwise, so check what your package includes.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Missing a payment can lead to charges and can be recorded on your credit file. The credit agreement sets out what applies. If you expect difficulty paying, contact your lender early and consider free money guidance.",
  },
  {
    q: "Can I pay part upfront and borrow the rest?",
    a: "Many people pay a deposit and borrow the remainder, which reduces the amount borrowed. Whether that is available, and any minimum or maximum amount, depends on the lender.",
  },
  {
    q: "Is this a dental loan or a dental payment plan?",
    a: "The two terms are used loosely. A payment plan usually spreads the cost of one treatment in fixed instalments. A dental loan usually means a personal loan used for the same purpose. Either way, the interest, fees and terms are in the credit agreement, so read it before you sign.",
  },
  {
    q: "Do I have to use the broker you introduce?",
    a: "No. You can arrange finance independently, through your bank or another broker. Comparing offers before you commit is sensible.",
  },
  {
    q: "Can you get Turkey teeth on finance?",
    a: "Some patients do, using credit arranged in the UK, such as a payment plan or a personal loan. Whether you are offered credit, and on what terms, depends on the lender and your circumstances and is never guaranteed. Compare the total repayable, not just the monthly amount, before you agree.",
  },
  {
    q: "Can I get a quote before applying for finance?",
    a: "Yes. You can request a free written treatment plan with the treatment cost before you decide anything, including whether to explore finance at all. Borrowing is optional, and a written plan helps you check that any amount borrowed matches the treatment.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FinanceOptionsUKPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Can You Pay Monthly for Turkey Teeth? Finance &amp; Payment Plans</h1>
          <p className="text-xl text-blue-200">Some UK patients spread the cost of dental treatment in Turkey with a payment plan or other credit. Here is how it works and what to check first.</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              You do not have to have the full cost of treatment ready upfront, but borrowing is a serious decision and it is not right for everyone. This page explains the options UK patients commonly use, how an introduction to a credit broker works, and the checks worth making before you agree to anything.
            </p>
          </div>

          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Short answer: how does dental finance work in the UK?</h2>
            <p className="text-gray-700 leading-relaxed">
              UK patients normally pay for dental work in one of a few ways: a <strong>dental payment plan</strong> that spreads one treatment over fixed instalments; a <strong>personal loan</strong> used for the same purpose; or <strong>NHS band charges</strong>, which only apply to treatment the NHS actually provides and exclude cosmetic work such as veneers. If credit is involved, the lender decides whether to lend and on what terms, and the terms differ between lenders. Approval is never guaranteed.
            </p>
          </div>

          <FinanceDisclosure />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
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

          <div>
            <h2 id="how-to-apply" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Who Can Apply, and What Lenders Usually Look At</h2>
            <p className="text-gray-700 mb-3">Each lender sets its own criteria. Commonly they look at whether you:</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
              <li>Are 18 or over and live in the UK</li>
              <li>Have a UK bank account</li>
              <li>Have a regular income (employed, self-employed or pension)</li>
              <li>Meet the lender&apos;s credit criteria, which is the lender&apos;s decision and cannot be guaranteed (see{" "}
                <a href="#bad-credit" className="text-[#1e40af] font-semibold hover:underline">finance with a difficult credit history</a>)</li>
            </ul>
            <p className="text-sm text-gray-500">This is a general guide, not a statement of any one lender&apos;s rules. The broker or lender will tell you what applies to you.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Plan, Loan, Credit Card or NHS Charge: What&apos;s the Difference?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms get used interchangeably online, but they are not the same thing. Here is what each one means, so you can compare like for like.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { term: "Dental payment plan", desc: "Spreading the cost of one specific treatment over fixed monthly instalments for a set term. Interest, fees and eligibility depend on the lender." },
                { term: "Dental finance", desc: "The broader term for borrowing arranged to pay for dental treatment. It can take the form of a payment plan or a loan." },
                { term: "Personal loan", desc: "A loan that is not dental specific and can be used to cover dental costs. It usually carries interest, so compare the total repayable." },
                { term: "Credit card", desc: "Some people use a credit card, sometimes one with an introductory offer. Check what happens to the balance once any offer period ends." },
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
              {" "}If you&apos;d rather see every funding route set out side by side, our{" "}
              <Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] font-semibold hover:underline">dental tourism finance explained guide</Link>{" "}
              compares them in full.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You May Be Borrowing For</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              How much a monthly payment would be depends on the amount borrowed, the term and the rate in your offer, so we show treatment prices rather than monthly figures. A deposit reduces the amount borrowed.
            </p>
            <TreatmentTotalsTable />
            <p className="text-sm text-gray-500 mt-2">
              Prices are indicative and follow the treatment prices published on this site; confirm your own total on a written treatment plan. A{" "}
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">full cost breakdown by treatment</Link>{" "}
              and a{" "}
              <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>{" "}
              are available. If implants are your main cost, our{" "}
              <Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] font-semibold hover:underline">guide to financing dental implants in Turkey</Link>{" "}
              goes deeper.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Implant treatment is often staged, with a second trip months after placement. Ask your clinic what each payment covers so any agreement matches the whole treatment plan.
            </p>
          </div>

          <div>
            <h2 id="what-to-check" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">What to Check Before You Agree to Any Finance</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "The amount borrowed matches the price in your written treatment plan, including any extras such as bone grafts or additional teeth",
                "The APR, monthly payment, term and total repayable are all stated in pounds in the written offer",
                "You know about any fees, early-repayment charges and what happens if you miss a payment",
                "You know how and when you can cancel, and what happens to the agreement if treatment is changed or not completed",
                "You have kept copies of the agreement, the treatment plan and the clinic's written terms",
                "You can afford the repayments from your regular income without relying on borrowing more",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-3">If you are unsure whether borrowing is right for you, free and impartial money guidance is available in the UK before you commit.</p>
          </div>

          <div>
            <h2 id="interest-term-illustration" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">How Interest and Term Change What You Repay (Illustration)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The interest rate and the length of the agreement both change what you repay. The tables below use a made-up £3,000 borrowed and made-up rates, only to show the pattern. They are not our treatment prices, a quote or an offer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-x-auto">
                <p className="text-sm font-semibold text-gray-900 mb-2">£3,000 over 24 months, different rates</p>
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Example APR</th>
                      <th className="text-right font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Monthly</th>
                      <th className="text-right font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Total repaid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { a: "0%", m: "£125.00", t: "£3,000" },
                      { a: "10%", m: "£137.84", t: "£3,308" },
                      { a: "20%", m: "£150.31", t: "£3,607" },
                    ].map(r => (
                      <tr key={r.a} className="odd:bg-white even:bg-gray-50/60">
                        <td className="px-4 py-3 border-b border-gray-100 text-gray-900 font-semibold">{r.a}</td>
                        <td className="px-4 py-3 border-b border-gray-100 text-right text-gray-700">{r.m}</td>
                        <td className="px-4 py-3 border-b border-gray-100 text-right text-gray-700">{r.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto">
                <p className="text-sm font-semibold text-gray-900 mb-2">£3,000 at an example 10% APR, different terms</p>
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Term</th>
                      <th className="text-right font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Monthly</th>
                      <th className="text-right font-bold text-gray-900 px-4 py-3 border-b border-gray-200">Total repaid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { a: "12 months", m: "£263.15", t: "£3,158" },
                      { a: "24 months", m: "£137.84", t: "£3,308" },
                      { a: "36 months", m: "£96.20", t: "£3,463" },
                    ].map(r => (
                      <tr key={r.a} className="odd:bg-white even:bg-gray-50/60">
                        <td className="px-4 py-3 border-b border-gray-100 text-gray-900 font-semibold">{r.a}</td>
                        <td className="px-4 py-3 border-b border-gray-100 text-right text-gray-700">{r.m}</td>
                        <td className="px-4 py-3 border-b border-gray-100 text-right text-gray-700">{r.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Hypothetical rates for illustration only.</strong> Not an offer, not a quote, and not the rates of Ideal4Finance or any lender. Amounts assume equal monthly payments and no fees. The pattern to take away: a longer term lowers the monthly payment but raises the total you repay, so compare the total repayable in any written offer.
            </p>
          </div>

          <div>
            <h2 id="bad-credit" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Turkey Teeth Finance with Bad Credit: What Is Realistic</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advertising around bad-credit dental finance often promises more than anyone can deliver. Here is the honest position:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">1.</span>
                <span><strong>No one can promise approval</strong>, not this site and not any broker. Approval is the lender&apos;s decision, based on your circumstances and its criteria on the day you apply.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">2.</span>
                <span><strong>Ask what kind of check is used.</strong> Some checks are recorded on your credit file and some are not. Ask before you apply so you know what to expect.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">3.</span>
                <span><strong>Borrowing less can change the picture.</strong> A deposit reduces the amount borrowed. Financing part of a treatment is a different proposition to financing all of it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">4.</span>
                <span><strong>Several full applications can count against you.</strong> Lenders can see them, so avoid making many applications in a short period.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1e40af] font-bold shrink-0">5.</span>
                <span><strong>Think about whether you should borrow at all.</strong> If repayments would strain your budget, waiting, saving, or a smaller treatment may be the better choice.</span>
              </li>
            </ul>
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
            <TrackedLink href="/book-consultation" ctaLabel="Ask About Finance Options" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Ask About Finance Options</TrackedLink>
            <Link href="/monthly-payment" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Paying Monthly: What to Know</Link>
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
            { href: "/monthly-payment", title: "Paying Monthly: What to Know", desc: "Treatment prices side by side with UK prices, and what affects a monthly payment." },
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
        title="Want to Talk Through Your Options?"
        subtitle="Start with a free written treatment plan. If you want to explore finance, we can introduce you to a credit broker. Borrowing is optional and approval is not guaranteed."
        buttonText="Ask About Finance Options"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
