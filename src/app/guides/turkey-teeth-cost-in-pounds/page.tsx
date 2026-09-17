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
const PAGE_URL = `${SITE_URL}/guides/turkey-teeth-cost-in-pounds`;
const TITLE = "Turkey Teeth Cost in Pounds: GBP Budget Guide 2026";
const H1 = "Turkey Teeth Cost in Pounds: What Can You Get for Your Budget?";
const DESCRIPTION =
  "GBP budget guide for UK patients: what Turkey dental treatment you can realistically get for £2,500, £3,500, £5,000 and £7,500 in 2026.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-cost-in-pounds" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "budget-2500", label: "£2,500 Budget" },
  { id: "budget-3500", label: "£3,500 Budget" },
  { id: "budget-5000", label: "£5,000 Budget" },
  { id: "budget-7500", label: "£7,500 Budget" },
  { id: "budget-table", label: "Budget Band Table" },
  { id: "exchange-rate", label: "Exchange Rate Note" },
  { id: "monthly-option", label: "Monthly Payment Option" },
  { id: "faqs", label: "FAQs" },
];

const budgetRows = [
  {
    budget: "£2,500",
    whatYouGet: "6–8 porcelain veneers or crowns (front teeth makeover)",
    notes: "Includes treatment + flights + hotel. Covers a partial smile makeover.",
  },
  {
    budget: "£3,500",
    whatYouGet: "10–14 crowns/veneers or single implant + veneers",
    notes: "Covers a fuller smile makeover or one implant with adjacent veneers.",
  },
  {
    budget: "£5,000",
    whatYouGet: "20 veneers/crowns (full set) or All-on-4 one arch (treatment only)",
    notes: "Full smile makeover or first-visit All-on-4 treatment for one arch.",
  },
  {
    budget: "£7,500",
    whatYouGet: "Full set veneers + 2 implants, or All-on-4 both arches (treatment only)",
    notes: "Comprehensive smile restoration. Two visits required for implant options.",
  },
];

const faqs = [
  {
    question: "How much does Turkey dental treatment cost in pounds?",
    answer: "Turkey dental treatment is priced in Turkish lira at clinics but quoted to UK patients in GBP or EUR. Porcelain veneers cost approximately £190–£250 per tooth; a full set of 20 costs £3,800–£5,000. A single implant with crown costs £420–£600. All-on-4 per arch costs £4,500–£5,500. These are treatment-only prices; add £200–£400 for flights, hotel and transfers per trip.",
  },
  {
    question: "Is Turkey dental treatment priced in pounds or Turkish lira?",
    answer: "Clinics in Turkey set their prices in Turkish lira, but reputable clinics that work with UK patients quote in GBP or EUR and fix the price at the time of your consultation or treatment plan, protecting you from exchange rate movement between quote and treatment date. Always confirm whether your quoted price is in GBP and whether it is fixed at the agreed rate.",
  },
  {
    question: "Does the exchange rate affect how much I pay in pounds?",
    answer: "It can if your clinic quotes in Turkish lira or EUR without fixing a GBP equivalent. Clinics working regularly with UK patients typically quote in GBP and fix the rate. If your quote is in lira, a shift in the GBP/TRY exchange rate between quote and payment date will change your effective cost. Confirm the currency and whether the rate is locked before booking.",
  },
  {
    question: "What can I get done in Turkey for £5,000?",
    answer: "For £5,000 including flights and accommodation, most UK patients can get a full set of 20 porcelain veneers or zirconia crowns, or a combination of veneers and one or two implants. For £5,000 treatment-only budget (excluding flights and hotel), All-on-4 per arch is also achievable at the lower end of the price range.",
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
        { "@type": "ListItem", position: 3, name: "Turkey Teeth Cost in Pounds", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkeyTeethCostInPoundsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Turkey Teeth Cost in Pounds" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A GBP budgeting guide for UK patients — what dental treatment you can realistically get in Turkey for £2,500, £3,500, £5,000 and £7,500 in 2026.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Porcelain veneers cost approximately <strong>£190–£250 per tooth</strong> in Turkey; a full set of 20 costs <strong>£3,800–£5,000</strong>. A single implant with crown costs <strong>£420–£600</strong>. All-on-4 per arch costs <strong>£4,500–£5,500</strong>. Add £200–£400 per trip for flights, hotel and transfers. All prices in this guide are in GBP. For the full treatment-by-treatment price list, see the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Cost: Complete 2026 Price Guide</Link>.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "All Turkey dental prices on this site are quoted in GBP with no hidden currency conversion.",
              "For £2,500 total including travel: 6–8 front teeth crowns or veneers.",
              "For £3,500 total including travel: 10–14 teeth or a first implant with veneers.",
              "For £5,000 total including travel: a full set of 20 veneers/crowns.",
              "For £7,500 total: full set veneers plus implants, or All-on-4 on both arches (treatment only).",
              "Monthly finance from around £70/month on a 36-month plan for a £2,500 total.",
            ]}
          />

          <h2 id="budget-2500" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Can I Get for £2,500?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At a £2,500 total budget (including flights and accommodation), most UK patients can get <strong>6–8 porcelain veneers or zirconia crowns</strong> covering the front teeth — typically the upper front six plus two premolars, or a similar configuration. This is a targeted smile makeover rather than a full set.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Treatment cost for 8 veneers: approximately £1,520–£2,000. Add £200–£350 for flights, hotel and transfers, and the total sits within the £2,500 budget with some room for extras.
          </p>

          <h2 id="budget-3500" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Can I Get for £3,500?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At £3,500, you can comfortably cover <strong>10–14 porcelain veneers or crowns</strong> including flights and accommodation, or a single implant plus veneers on adjacent teeth. This budget covers a fuller smile makeover — upper and lower front teeth — or a combination treatment including one replacement tooth.
          </p>

          <h2 id="budget-5000" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Can I Get for £5,000?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At £5,000 total, most UK patients can get a <strong>full set of 20 porcelain veneers or zirconia crowns</strong> — the standard full smile makeover — including flights and accommodation. Treatment cost for 20 veneers is £3,800–£5,000; with a mid-range package this fits within the £5,000 total.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alternatively, if your need is implants rather than veneers, £5,000 covers All-on-4 treatment for one arch at the lower end of the price range (treatment only — flights and hotel are additional for implant patients making two trips).
          </p>

          <h2 id="budget-7500" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Can I Get for £7,500?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At £7,500, you can combine treatments — for example a <strong>full set of veneers plus one or two implants</strong>, or All-on-4 on both arches at the treatment-cost level (with two trips required for implants). This budget opens up comprehensive smile restoration.
          </p>

          <h2 id="budget-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Budget Band Summary</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Total Budget</th>
                  <th className="px-4 py-3 text-left font-semibold">What You Can Realistically Get</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((r, i) => (
                  <tr key={r.budget} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-[#1e40af]">{r.budget}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.whatYouGet}</td>
                    <td className="px-4 py-3 text-gray-600">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="exchange-rate" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Exchange Rate Note</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Turkey dental clinics set their prices in Turkish lira, but reputable clinics that regularly treat UK patients quote in GBP and fix the price at the time of your treatment plan. All prices on this site are in GBP and include the clinic&apos;s fixed-rate equivalent. There is no hidden currency conversion. If you receive a quote in lira or EUR from another provider, confirm the GBP equivalent and whether it is fixed — exchange rate movement between quote and payment date can increase your effective cost.
          </p>

          <h2 id="monthly-option" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Monthly Payment Option</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your ideal treatment sits above your available cash budget, 0% representative APR finance is available for treatment booked through this site. A £2,500 total financed over 36 months costs from approximately £70/month; a £5,000 total from approximately £139/month. See{" "}
            <Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] font-semibold hover:underline">How Much Are Turkey Teeth Per Month?</Link>{" "}
            for a full payment table, or use the{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">Monthly Payment calculator</Link>.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Teeth Cost in Pounds: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Full treatment-by-treatment price list in GBP.", href: "/prices/turkey-teeth-cost" },
            { title: "How Much Are Turkey Teeth Per Month?", desc: "Monthly payment examples for treatment totals from £2,500.", href: "/guides/turkey-teeth-monthly-payments" },
            { title: "Price Calculator", desc: "Build your own cost estimate across multiple treatments.", href: "/price-calculator" },
            { title: "Turkey Teeth Packages", desc: "What is and isn't included in a Turkey dental package.", href: "/guides/turkey-teeth-packages" },
          ]}
        />
      </div>

      <CTASection
        title="Find Out Exactly What Your Budget Covers"
        subtitle="Get a free personalised treatment plan with an itemised GBP cost and monthly payment option — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
