import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FinanceCalculator from "@/components/FinanceCalculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/teeth-on-finance-bad-credit`;
const TITLE = "Teeth on Finance With Bad Credit UK: Your Options";
const H1 = "Teeth on Finance With Bad Credit UK: Options, Eligibility and Monthly Payments";
const DESCRIPTION =
  "Can you get teeth on finance with bad credit in the UK? Eligibility, credit checks, monthly payment examples and what to do if you are declined.";
const DATE_PUBLISHED = "2026-09-11";
const DATE_MODIFIED = "2026-09-11";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/teeth-on-finance-bad-credit" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "can-you", label: "Can You Get Finance With Bad Credit?" },
  { id: "how-it-works", label: "How Dental Finance Works" },
  { id: "what-counts", label: "What Providers May Consider" },
  { id: "credit-check", label: "Does It Need a Credit Check?" },
  { id: "representative-apr", label: "What 0% APR Representative Means" },
  { id: "calculator", label: "Monthly Payment Calculator" },
  { id: "deposit", label: "Can a Larger Deposit Help?" },
  { id: "declined", label: "If You Are Declined" },
  { id: "implants", label: "Implants and Bad Credit" },
  { id: "veneers", label: "Veneers and Bad Credit" },
  { id: "reduce-cost", label: "Reducing What You Need to Borrow" },
  { id: "faqs", label: "FAQs" },
];

const considerations = [
  { factor: "Affordability", detail: "Whether the monthly payment looks sustainable alongside your income and outgoings. This is usually the single biggest factor, and it is assessed separately from your credit score." },
  { factor: "Income and employment", detail: "How much you earn and how stable that income appears to be." },
  { factor: "Existing commitments", detail: "Other credit, loans and regular financial obligations already on your file." },
  { factor: "Credit history", detail: "Payment history, and whether there are missed payments, defaults, CCJs or an IVA or bankruptcy on record. Recency and severity usually matter more than the mere existence of an old marker." },
  { factor: "Amount requested", detail: "A smaller amount is a smaller risk. Borrowing £2,000 and borrowing £12,000 are not assessed the same way." },
  { factor: "Deposit", detail: "Paying part of the cost upfront reduces the amount borrowed, which changes both the risk and the monthly figure." },
  { factor: "Repayment term", detail: "A longer term lowers the monthly payment but usually increases the total repayable once interest applies." },
  { factor: "The provider's own criteria", detail: "Every lender sets its own rules and its own appetite, and those change over time. Two providers can reach different decisions on identical circumstances." },
];

const declinedSteps = [
  { step: "Check your credit report for errors", detail: "You can obtain your statutory report from the credit reference agencies. Incorrect addresses, accounts that are not yours or a default that was actually settled can all be disputed and corrected." },
  { step: "Avoid firing off more applications", detail: "Each full application usually leaves a hard search. Several in a short window can make the next decision harder, so it is worth pausing rather than trying provider after provider." },
  { step: "Consider a larger deposit", detail: "Reducing the amount borrowed changes the calculation. It does not guarantee a different answer, but it is one of the few levers you directly control." },
  { step: "Look at a different term", detail: "A longer term lowers the monthly payment, which can affect the affordability picture. Weigh that against paying more in total where interest applies." },
  { step: "Ask about phasing the treatment", detail: "Some treatment plans can be staged, spreading the cost across a longer period rather than financing it all at once. Speak to the dental provider about what is clinically sensible to split." },
  { step: "Reconsider the treatment budget", detail: "A less expensive material or a smaller scope may achieve an acceptable result for considerably less, which reduces or removes the need to borrow." },
  { step: "Get free, impartial money guidance", detail: "MoneyHelper is a free government-backed service covering refused credit, credit reports and debt options. If borrowing is becoming difficult generally, speak to them rather than to a sales channel." },
];

const faqs = [
  {
    question: "Can I get teeth on finance with bad credit?",
    answer: "Possibly, but nobody can promise it. A poor credit history does not automatically mean every application is refused, because providers weigh affordability, income, existing commitments, the amount requested and the deposit alongside your credit file. What it does mean is that fewer products may be open to you, the rate offered may be higher than the advertised representative rate, and some applications may be declined. Any provider claiming guaranteed approval regardless of credit history should be treated with real caution.",
  },
  {
    question: "What credit score do I need for dental finance?",
    answer: "There is no single number. Each credit reference agency uses its own scale, so a score means different things depending on who produced it, and lenders do not simply read that score and decide. They apply their own scorecards to the underlying data alongside affordability. This is why the same person can be accepted by one provider and declined by another in the same week.",
  },
  {
    question: "Does dental finance affect my credit score?",
    answer: "A soft search, the kind used for an eligibility or pre-qualification check, is visible only to you and does not affect your score. A full application normally involves a hard search, which is visible to other lenders and can affect your score, particularly if several appear in a short period. Once an agreement is running, keeping up the payments helps your file and missing them harms it.",
  },
  {
    question: "Can I get dental implants on finance with bad credit?",
    answer: "The credit assessment does not change according to which treatment you are having, but the amount does. Implant work is usually one of the larger dental sums, so it asks more of an affordability assessment than a single crown would. A deposit, a longer term, or phasing the work across stages are the practical ways to bring the monthly figure into a range that stands a better chance.",
  },
  {
    question: "Can I get veneers on finance with bad credit?",
    answer: "The same assessment applies, but veneers have a useful property: they are priced per tooth, so the total scales with how many you treat. Eight veneers cost far less than twenty. Reducing the number, choosing a different material, or treating one arch first are all ways to lower the amount you need to borrow, which is usually more productive than hunting for a lender who will fund the full amount.",
  },
  {
    question: "Can I pay a larger deposit to improve my chances?",
    answer: "A larger deposit reduces the amount borrowed and therefore the monthly payment, which is one of the few variables you control directly. It cannot guarantee a different decision, because the provider is still assessing your wider circumstances, but it changes the numbers being assessed rather than just how they are presented.",
  },
  {
    question: "Can I get 0% dental finance with bad credit?",
    answer: "Interest free deals are usually the hardest tier to qualify for, so it is the least safe thing to assume. It also helps to know what the advertised figure means: a representative APR is the rate at or below which the provider expects to lend on at least 51% of the agreements resulting from that promotion. By definition, up to 49% of accepted applicants can be offered something different, and applicants with adverse credit are more likely to sit in that group.",
  },
  {
    question: "What happens if my dental finance application is declined?",
    answer: "Ask the provider for the main reason and whether a credit reference agency was used, then check that agency's report for errors before doing anything else. After that the useful levers are a larger deposit, a smaller amount, a different term, or phasing the treatment. Avoid making repeated applications in quick succession, since the hard searches accumulate on your file.",
  },
  {
    question: "Can I check monthly payments before applying?",
    answer: "Yes, and it is worth doing. The calculator on this page lets you model the treatment cost, deposit, term and interest rate to see the monthly payment and the total repayable before you speak to anyone. It is an illustration rather than an offer, but it tells you quickly whether a figure is realistic for your budget.",
  },
  {
    question: "Does checking dental finance affect my credit file?",
    answer: "Using a calculator like the one on this page has no effect at all, because nothing is submitted anywhere. An eligibility check carried out by a provider normally uses a soft search, which only you can see. It is the full application that usually leaves a hard search visible to other lenders, so it is worth confirming which type is being run before you proceed.",
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
        { "@type": "ListItem", position: 3, name: "Teeth on Finance With Bad Credit", item: PAGE_URL },
      ],
    },
  ],
};

function Disclosure({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`rounded-xl border border-amber-200 bg-amber-50 ${compact ? "p-4" : "p-5"} my-6`}>
      <p className="text-xs font-bold uppercase tracking-wide text-amber-800 mb-1.5">Important</p>
      <p className="text-sm text-amber-900 leading-relaxed">
        Teeth Done in Turkey arranges treatment at partner clinics in Turkey and works with third party finance
        providers. <strong>We are not a lender and we do not make lending decisions.</strong> Any finance is subject
        to status, eligibility, affordability and the provider&apos;s own criteria, so approval is never guaranteed.
        Nothing on this page is financial advice or an offer of credit.
      </p>
    </div>
  );
}

export default function TeethOnFinanceBadCreditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Teeth on Finance With Bad Credit" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Finance Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            What actually gets assessed, what a credit check does to your file, what you could pay each month, and what to do if the answer comes back no.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-4 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Bad credit does not automatically rule you out, but it does narrow the options and no one can promise
            approval. Providers assess <strong>affordability</strong> alongside your credit history, so income,
            existing commitments, the amount you need and the deposit you can put down all matter. The practical
            levers you control are the size of the deposit, the amount borrowed and the repayment term. If you are
            declined, check your credit report for errors before applying anywhere else.
          </p>

          <Disclosure />

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "There is no single credit score that qualifies or disqualifies you. Agencies use different scales and lenders apply their own rules to the underlying data.",
              "Affordability is assessed separately from your credit file, so income and existing commitments matter as much as past markers.",
              "An eligibility check normally uses a soft search, which only you can see. A full application usually leaves a hard search that other lenders can see.",
              "0% APR representative does not mean everyone gets 0%. It is the rate offered on at least 51% of agreements, so up to 49% of accepted applicants are offered something else.",
              "Reducing the amount borrowed, through a deposit or a smaller treatment scope, is usually more productive than searching for a lender who will fund the full amount.",
            ]}
          />

          <h2 id="can-you" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Can You Get Teeth on Finance With Bad Credit?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Often yes, sometimes no, and the honest answer is that it depends on more than your credit file alone.
            &ldquo;Bad credit&rdquo; is not a defined threshold. Each credit reference agency scores on its own scale,
            so the same person can look different depending on which report you read, and lenders do not simply take
            that number and decide. They run their own assessment against the underlying data, and they weigh it
            alongside whether the monthly payment looks affordable for you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            That has two practical consequences. First, a decline from one provider is not a verdict from the whole
            market. Second, and more usefully, the things you can actually change, the amount borrowed and the
            monthly commitment, are genuine inputs rather than cosmetic ones.
          </p>

          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Dental Finance Works</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every dental finance arrangement follows the same shape, and understanding it makes the decisions much clearer:
          </p>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 my-6">
            <ol className="space-y-2.5 text-sm text-gray-800">
              {[
                ["Treatment cost", "the total quoted for the work"],
                ["Deposit", "what you pay upfront, which you often choose"],
                ["Amount financed", "treatment cost minus deposit. This is what you actually borrow"],
                ["Term", "how many months you repay over, commonly 12 to 48"],
                ["APR", "the cost of borrowing expressed as an annual rate. 0% means no interest"],
                ["Monthly repayment", "the amount financed spread across the term, plus interest where it applies"],
                ["Total repayable", "monthly payment multiplied by the term. At 0% this equals the amount financed"],
              ].map(([label, desc], i) => (
                <li key={label} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span><strong className="text-gray-900">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The two figures worth comparing between options are the monthly payment, which tells you whether it fits
            your budget, and the total repayable, which tells you what the borrowing actually costs you.
          </p>

          <h2 id="what-counts" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Dental Finance Providers May Consider</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No provider publishes its full scorecard, and any page claiming to know the exact cut off is guessing.
            What can be said is which factors are generally weighed:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {considerations.map((c, i) => (
                  <tr key={c.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-800 align-top whitespace-nowrap">{c.factor}</td>
                    <td className="px-4 py-3 text-gray-700">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="credit-check" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Does Dental Finance Require a Credit Check?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Effectively always, for regulated credit. The distinction that matters is which kind of search is run.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Soft search</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Used for eligibility and pre-qualification checks. According to MoneyHelper it is visible only to you
                and the credit reference agency, and it does not affect your score. This is what lets you get an
                indication before committing.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Hard search</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Happens when you formally apply. It is visible to other lenders, can affect your score, and can stay
                on your report for around two years. Several in a short window can make you look reliant on credit.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The practical rule: use soft search eligibility checks to explore, and save the full application for the
            option you actually intend to take. Always confirm with the provider which type they are running before
            you submit anything.
          </p>

          <h2 id="representative-apr" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What &ldquo;0% APR Representative&rdquo; Actually Means</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the most commonly misread phrase in dental finance advertising, and it matters more to someone
            with adverse credit than to anyone else.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under the FCA Handbook, a <strong>representative APR</strong> is the rate at or below which the firm
            reasonably expects credit to be provided under <strong>at least 51%</strong> of the agreements resulting
            from that advertisement. Read that the other way round: up to <strong>49%</strong> of people who are
            accepted can be offered a different, higher rate, and applicants with a weaker credit profile are more
            likely to be among them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            So an advertised 0% representative APR, including the one quoted elsewhere on this site, is not a promise
            of 0% to you. Treat it as the headline case, and treat the rate in your own credit agreement as the only
            figure that is real. The calculator below lets you model what a non zero rate would actually do to the
            monthly payment.
          </p>

          <h2 id="calculator" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Monthly Payment Examples</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Set the treatment cost, the deposit and the interest rate to see what the monthly payment and the total
            repayable would look like across common terms.
          </p>

          <FinanceCalculator />

          <h2 id="deposit" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Can a Larger Deposit Help?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It changes the numbers being assessed, which is not the same as guaranteeing a different answer, but it
            is one of the few things fully within your control. A deposit reduces the amount borrowed, which lowers
            the monthly payment and reduces how much the provider is being asked to lend.
          </p>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 my-6">
            <p className="font-bold text-gray-900 mb-3">Worked example</p>
            <div className="space-y-1.5 text-sm text-gray-800">
              <p>Treatment cost: <strong>£8,000</strong></p>
              <p>Deposit: <strong>£3,000</strong></p>
              <p>Amount financed: <strong>£5,000</strong></p>
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-blue-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-2.5 text-left font-semibold">Term</th>
                    <th className="px-4 py-2.5 text-right font-semibold">At 0%</th>
                    <th className="px-4 py-2.5 text-right font-semibold">At 12.9% APR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["12 months", "£416.67", "£444.70"],
                    ["24 months", "£208.33", "£235.82"],
                    ["36 months", "£138.89", "£166.54"],
                    ["48 months", "£104.17", "£132.15"],
                  ].map(([term, zero, apr], i) => (
                    <tr key={term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2.5 font-medium text-gray-800">{term}</td>
                      <td className="px-4 py-2.5 text-right font-bold text-[#1e40af]">{zero}</td>
                      <td className="px-4 py-2.5 text-right text-gray-700">{apr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Illustrative only. The 12.9% column is an arbitrary example rate chosen to show the effect of interest,
              not a rate offered by anyone.
            </p>
          </div>

          <h2 id="declined" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What If Your Application Is Declined?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A decline is a single provider&apos;s answer on a single day, using its own criteria. Work through these
            in order rather than immediately applying somewhere else:
          </p>
          <div className="space-y-3 my-6">
            {declinedSteps.map((s, i) => (
              <div key={s.step} className="flex gap-3.5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{s.step}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            If repaying credit generally is becoming difficult, that is beyond what a dental website should be
            advising on. Speak to MoneyHelper or a free debt advice charity rather than taking on further borrowing.
          </p>

          <h2 id="implants" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Dental Implants on Finance With Bad Credit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implant treatment is usually the largest single sum in dentistry, and full arch work larger still. The
            credit assessment is no different, but the amount being requested is, and a bigger request naturally
            faces a sterner affordability test.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implant treatment has one structural advantage here: it is already staged clinically. Placement and the
            final restoration are normally months apart, which can make it easier to discuss paying in phases rather
            than financing the entire course at once. See{" "}
            <Link href="/treatments/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">how implant treatment works</Link>{" "}
            and the{" "}
            <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">implant cost breakdown</Link>{" "}
            to see where the money actually falls.
          </p>

          <h2 id="veneers" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneers on Finance With Bad Credit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veneers behave differently from implants for finance purposes because they are priced per tooth. The
            total is not fixed by the treatment type, it is set by how many teeth you treat and which material you
            choose, which gives you far more room to move the number.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eight veneers across the visible smile line cost dramatically less than a full set of twenty. Treating
            the upper arch first and the lower later splits the spend across two periods. A different material
            changes the per tooth figure again. For someone whose application hinges on the amount borrowed, scope is
            usually the most effective lever available. See the{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">veneers cost breakdown</Link>{" "}
            for per tooth pricing, and{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">veneers or crowns</Link>{" "}
            before deciding what you are actually being quoted for.
          </p>

          <h2 id="reduce-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Reducing What You Need to Borrow</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every section above treats the treatment price as fixed and asks how to finance it. It is worth turning
            that around, because the amount you borrow is a function of what the treatment costs in the first place.
            A lower price reduces the amount financed, the monthly payment and the affordability hurdle all at once,
            and if the price falls far enough the question of finance can disappear entirely.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A smaller scope, a different material and a phased plan all do this. So does comparing what the same
            treatment costs elsewhere, which is covered in{" "}
            <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">what to do if you cannot afford dental treatment in the UK</Link>,
            including whether the NHS covers what you need before private finance enters the picture at all.
          </p>

          <Disclosure compact />

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Bad Credit and Dental Finance: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "FCA Handbook: definition of representative APR (the 51% rule)", href: "https://www.handbook.fca.org.uk/handbook/glossary/G3354.html" },
            { label: "FCA Handbook CONC 3.5: financial promotions about credit agreements", href: "https://www.handbook.fca.org.uk/handbook/CONC/3/5.html" },
            { label: "MoneyHelper: how to improve your credit score (soft and hard searches)", href: "https://www.moneyhelper.org.uk/en/everyday-money/credit/how-to-improve-your-credit-score" },
            { label: "MoneyHelper: refused credit or refused a loan, what you can do", href: "https://www.moneyhelper.org.uk/en/everyday-money/credit/what-to-do-if-you-have-been-refused-a-loan-or-credit-card" },
            { label: "MoneyHelper: what is a bad credit score?", href: "https://www.moneyhelper.org.uk/en/blog/everyday-money/what-is-a-bad-credit-score" },
            { label: "MoneyHelper: how to check your credit report for free", href: "https://www.moneyhelper.org.uk/en/everyday-money/credit/how-to-check-your-credit-report" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Dental Finance Options UK", desc: "Payment plan, finance, loan and NHS charges compared.", href: "/finance-options-uk" },
            { title: "Pay Monthly for Treatment", desc: "Monthly figures by treatment and how the plans work.", href: "/monthly-payment" },
            { title: "Price Calculator", desc: "Estimate treatment cost before you think about borrowing.", href: "/price-calculator" },
            { title: "Can't Afford Dental Treatment?", desc: "NHS charges and lower cost routes, in decision order.", href: "/guides/cant-afford-dental-treatment-uk" },
          ]}
        />
      </div>

      <CTASection
        title="See What Your Treatment Would Actually Cost"
        subtitle="Get a free, no obligation treatment plan with an itemised cost, so you know the real figure before you consider financing any of it."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
