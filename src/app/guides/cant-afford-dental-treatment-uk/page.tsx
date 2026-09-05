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

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/cant-afford-dental-treatment-uk`;
const TITLE = "Can't Afford Dental Treatment in the UK? Your Options for 2026";
const H1 = "Can't Afford Dental Treatment in the UK? Here Are Your Options";
const DESCRIPTION =
  "Struggling to pay for a private dentist in the UK? A step by step guide to NHS charges, payment plans, dental finance, and lower cost alternatives, including treatment in Turkey.";
const DATE_PUBLISHED = "2026-09-03";
const DATE_MODIFIED = "2026-09-03";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/cant-afford-dental-treatment-uk" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "nhs-options", label: "Can the NHS Help?" },
  { id: "private-costs", label: "Why Private Treatment Costs So Much" },
  { id: "payment-plans", label: "Dental Payment Plans" },
  { id: "finance-vs-loan", label: "Finance, Loans and Other Terms" },
  { id: "alternative-options", label: "Ways to Reduce the Bill" },
  { id: "uk-vs-turkey", label: "Treatment Abroad as an Option" },
  { id: "monthly-cost", label: "What Treatment Actually Costs Per Month" },
  { id: "next-steps", label: "Working Out What You Can Afford" },
  { id: "faqs", label: "FAQs" },
];

const ukVsTurkeyRows = [
  { treatment: "Porcelain Veneers (per tooth)", uk: "£800–£1,000", turkey: "£190–£250", monthly: "From £6/mo" },
  { treatment: "Full Smile Makeover (20 veneers)", uk: "£16,000–£20,000", turkey: "£3,800–£5,000", monthly: "From £106/mo" },
  { treatment: "Single Dental Implant", uk: "£2,000–£3,000", turkey: "£420–£600", monthly: "From £14/mo" },
  { treatment: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "£4,500–£5,500", monthly: "From £125/mo" },
  { treatment: "All-on-6 (per arch)", uk: "£15,000–£22,000", turkey: "From £5,600", monthly: "From £156/mo" },
];

const faqs = [
  {
    question: "I can't afford a private dentist in the UK. What are my options?",
    answer: "Start by checking whether the treatment you need is covered by the NHS, since NHS charges are fixed and far lower than private fees. If it isn't (cosmetic work such as veneers usually isn't), the next options are a dental payment plan or finance arrangement to spread the private cost, choosing a less expensive material or a phased treatment plan, or looking at treatment abroad, which can cost 65 to 90 percent less than the same UK private treatment for the same materials and brands.",
  },
  {
    question: "Can the NHS help with the cost of dental treatment?",
    answer: "For treatment the NHS provides, yes: charges in England are fixed at three bands (£27.90, £76.60 and £306.80 from 1 April 2026, per NHS England), regardless of how many procedures are needed within that band. However, the NHS does not normally fund cosmetic treatments such as veneers or teeth whitening, and dental implants are only available on the NHS in narrow clinical circumstances (for example following an accident or cancer treatment), not for routine tooth replacement.",
  },
  {
    question: "What is the difference between a dental payment plan, dental finance and a dental loan?",
    answer: "A payment plan usually means a clinic or finance partner lets you spread one specific treatment's cost over fixed monthly instalments, often with 0% interest for a defined term. Dental finance is the broader term for that same kind of borrowing arranged specifically for dental treatment. A dental loan is a personal loan, which may or may not be dental specific, and can carry interest even where a 0% dental finance plan would not. See the full breakdown on our Dental Finance Options page.",
  },
  {
    question: "Can I get 0% finance for dental implants or veneers?",
    answer: "0% representative APR finance is available for treatment booked through this site, typically from £82/month over 12, 24 or 36 months, covering veneers, implants, All-on-4/All-on-6 and full smile makeovers. Eligibility depends on an affordability and credit assessment; a soft-search pre-qualification check lets you see an indicative decision without it appearing on your credit file.",
  },
  {
    question: "What if I have a poor credit history? Can I still get dental finance?",
    answer: "We cannot guarantee approval for any applicant, and no dental finance provider can honestly promise approval regardless of credit history. What we can tell you is that the pre-qualification step is a soft search, so checking your eligibility will not affect your credit score, and the outcome depends on your individual circumstances and the finance provider's own criteria at the time you apply.",
  },
  {
    question: "Is getting dental treatment abroad actually cheaper, or just cheaper looking?",
    answer: "Based on the price comparisons published across this site, treatment in Turkey using the same implant and veneer brands used in UK practices (Straumann, Nobel Biocare, Ivoclar E-max) typically costs 65 to 90 percent less than the equivalent UK private price, even after adding flights and accommodation. The saving reflects lower clinic overheads and cost of living in Turkey, not lower-quality materials.",
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
        { "@type": "ListItem", position: 3, name: "Can't Afford Dental Treatment in the UK", item: PAGE_URL },
      ],
    },
  ],
};

export default function CantAffordDentalTreatmentUKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Can't Afford Dental Treatment" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            NHS charges, private costs, payment plans, dental finance and treatment abroad, laid out in the order most UK patients actually need to work through them.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            If your treatment is covered by the NHS, it will cost a fixed £27.90, £76.60 or £306.80 (England, from 1 April 2026), whatever the private price would have been. If it isn&apos;t covered, such as veneers or cosmetic work, your realistic options are a payment plan or dental finance to spread a UK private quote, a lower cost material or phased plan, or treatment abroad, where the same materials and implant brands used in the UK typically cost 65 to 90 percent less. Most people end up combining two of these: a payment plan plus a lower cost provider.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "NHS charges in England are fixed at £27.90, £76.60 or £306.80 per course of treatment (from 1 April 2026), but veneers, whitening and (in almost all cases) implants are not covered.",
              "UK private dental prices for implants and veneers are frequently several times the NHS charge, which is why payment plans and finance exist for private work.",
              "0% representative APR finance from £82/month is one way to spread a UK-priced quote or a Turkey treatment plan.",
              "The same implant and veneer brands used in UK practices are typically 65 to 90 percent cheaper in Turkey, even after flights and accommodation.",
              "No dental finance option should ever promise guaranteed approval. A soft-search pre-qualification lets you check eligibility without affecting your credit score.",
            ]}
          />

          <h2 id="nhs-options" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Can the NHS Help?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The first question worth answering is whether the NHS covers what you need. NHS dental charges in England are fixed by band, not by how many procedures you need within that band: Band 1 (£27.90) covers an examination, diagnosis and preventive advice; Band 2 (£76.60) adds fillings, root canal work or extractions; Band 3 (£306.80) adds crowns, dentures and bridges. You pay one charge per completed course of treatment, however many visits it takes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The catch is scope. The NHS does not fund cosmetic treatments such as veneers or teeth whitening, and dental implants are only available on the NHS in narrow clinical circumstances, such as tooth loss from an accident or cancer treatment, not for routine replacement of a missing tooth. If your need is cosmetic or falls outside these narrow implant criteria, private treatment (in the UK or abroad) is realistically your only route.
          </p>

          <h2 id="private-costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why Private Treatment Costs So Much</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK private dental prices reflect UK clinic overheads, staff costs and cost of living, not necessarily better materials. A single porcelain veneer typically costs £800 to £1,000 in a UK private practice, a single implant £2,000 to £3,000, and a full-arch All-on-4 case £12,000 to £18,000. Multiply that across a full smile and it is easy to see why patients look for a way to spread the cost or find a lower cost provider using the same materials.
          </p>

          <h2 id="payment-plans" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Dental Payment Plans</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A dental payment plan lets you spread a specific treatment&apos;s cost over fixed monthly instalments instead of paying the full amount upfront. For treatment booked through this site, 0% representative APR finance is available from £82/month over 12, 24 or 36 months, with a soft-search pre-qualification step that will not affect your credit score. See{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">Monthly Payment</Link>{" "}
            for treatment-by-treatment monthly figures.
          </p>

          <h2 id="finance-vs-loan" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Finance, Loans and Other Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            &ldquo;Payment plan,&rdquo; &ldquo;dental finance&rdquo; and &ldquo;dental loan&rdquo; get used interchangeably online, but they are not identical. A payment plan and dental finance both usually mean borrowing arranged specifically for one dental treatment, often at 0% for a fixed term. A personal loan taken out to cover dental costs is a separate product, generally not dental specific, and can carry interest where a purpose-built 0% dental finance plan would not. A dental membership or maintenance plan (paying a clinic a fixed monthly fee for routine check-ups) is different again, and is not the same as financing a one-off treatment. For a full glossary and eligibility details, see{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">Dental Finance Options UK</Link>.
          </p>

          <h2 id="alternative-options" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Ways to Reduce the Bill Itself</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before or alongside financing, three things reduce the actual cost: choosing a less expensive material where it is clinically appropriate (composite veneers cost less than porcelain, an entry-level implant brand costs less than a premium one), phasing treatment across two visits rather than doing everything at once, and comparing UK private prices against treatment abroad using the same brands and materials.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Abroad as an Option</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once NHS eligibility, payment plans and material choice have been considered, treatment abroad is worth comparing on cost alone. Partner clinics in Turkey use the same implant and veneer brands used in UK practices (Straumann, Nobel Biocare, Ivoclar E-max), at a fraction of the UK private price, even once flights and accommodation are added:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">UK Price</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey Price</th>
                  <th className="px-4 py-3 text-right font-semibold">From (monthly)</th>
                </tr>
              </thead>
              <tbody>
                {ukVsTurkeyRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            This isn&apos;t presented as the only answer, it&apos;s one option in the comparison. Read the full{" "}
            <Link href="/guides/teeth-in-turkey" className="text-[#1e40af] font-semibold hover:underline">Teeth in Turkey guide</Link>{" "}
            for how to evaluate a clinic and what the process actually involves before deciding it&apos;s right for you.
          </p>

          <h2 id="monthly-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Treatment Actually Costs Per Month</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whichever route you take, the practical question is usually the monthly figure. On this site, financed Turkey treatment starts from £6/month for a single veneer and £14/month for a single implant, rising to £150/month for a full All-on-6 arch, all on a 36-month 0% plan. Use the{" "}
            <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">Price Calculator</Link>{" "}
            to build a monthly estimate for your own treatment combination.
          </p>

          <h2 id="next-steps" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Working Out What You Can Afford</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A sensible order to work through this: confirm whether the NHS covers your treatment, get a UK private quote if it doesn&apos;t, check your 0% finance eligibility with a soft-search pre-qualification, and compare that monthly figure against the same treatment financed abroad. Request a{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">free personalised treatment plan</Link>{" "}
            to see an itemised cost and monthly breakdown before deciding anything.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Affording Dental Treatment: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: How much will I pay for NHS dental treatment?", href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/how-much-will-i-pay-for-nhs-dental-treatment/" },
            { label: "NHS: What is included in each NHS dental band charge?", href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/what-is-included-in-each-nhs-dental-band-charge/" },
            { label: "NHSBSA: NHS dental charges from 1 April 2026", href: "https://www.nhsbsa.nhs.uk/sites/default/files/2026-03/NHS%20England%20dental%20charges%20poster%20-%20April%202026.pdf" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Dental Finance Options UK", desc: "0% representative APR finance, eligibility and how pre-qualification works.", href: "/finance-options-uk" },
            { title: "Monthly Payment", desc: "Treatment by treatment monthly cost, from £82/month.", href: "/monthly-payment" },
            { title: "Price Calculator", desc: "Build a personalised estimate across multiple treatments.", href: "/price-calculator" },
            { title: "Teeth in Turkey: Complete UK Patient Guide", desc: "The full process, safety and clinic evaluation guide.", href: "/guides/teeth-in-turkey" },
          ]}
        />
      </div>

      <CTASection
        title="See What You Could Pay Per Month"
        subtitle="Get a free, no-obligation treatment plan with an itemised cost and monthly payment breakdown within 24 hours."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
