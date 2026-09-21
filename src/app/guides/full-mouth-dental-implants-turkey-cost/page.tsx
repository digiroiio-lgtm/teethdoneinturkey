import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { REVIEWER_PERSON } from "@/lib/reviewer";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/full-mouth-dental-implants-turkey-cost`;
const TITLE = "Full Mouth Dental Implants Turkey Cost: All-on-4, All-on-6 & Full Arch Prices 2026";
const H1 = "Full Mouth Dental Implants Turkey Cost: All-on-4, All-on-6 & Full Arch Prices";
const DESCRIPTION =
  "Full mouth and full arch implant costs in Turkey 2026: All-on-4, All-on-6, titanium bar options, two-visit process and total package costs for UK patients.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/full-mouth-dental-implants-turkey-cost" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "all-on-4", label: "All-on-4: Cost & Process" },
  { id: "all-on-6", label: "All-on-6: Cost & Process" },
  { id: "full-mouth", label: "Full Mouth (Both Arches)" },
  { id: "titanium-bar", label: "Titanium Bar vs Zirconia Bridge" },
  { id: "two-visits", label: "Two Visits: What to Expect" },
  { id: "price-table", label: "Full Arch Price Comparison" },
  { id: "total-package-cost", label: "Total Package Cost" },
  { id: "faqs", label: "FAQs" },
];

const priceRows = [
  { option: "All-on-4 — one arch", implants: "4", bridge: "Zirconia / acrylic", turkeyPrice: "£4,500–£5,500", ukPrice: "£12,000–£18,000" },
  { option: "All-on-6 — one arch", implants: "6", bridge: "Zirconia / acrylic", turkeyPrice: "From £5,600", ukPrice: "£15,000–£22,000" },
  { option: "All-on-4 — both arches", implants: "8 total", bridge: "Zirconia / acrylic", turkeyPrice: "£9,000–£11,000", ukPrice: "£24,000–£36,000" },
  { option: "All-on-6 — both arches", implants: "12 total", bridge: "Zirconia / acrylic", turkeyPrice: "From £11,200", ukPrice: "£30,000–£44,000" },
  { option: "Full mouth individual implants (8 per arch)", implants: "16 total", bridge: "Individual crowns", turkeyPrice: "£6,720–£9,600", ukPrice: "£32,000–£48,000" },
];

const faqs = [
  {
    question: "How much does All-on-4 cost in Turkey?",
    answer: "All-on-4 per arch in Turkey costs £4,500–£5,500. For both arches (full mouth), the total treatment cost is £9,000–£11,000. Add £400–£700 for two trips (flights, hotel, transfers) to get total spend. This compares to £12,000–£18,000 per arch for All-on-4 in the UK.",
  },
  {
    question: "What is the difference between All-on-4 and All-on-6 for full mouth implants?",
    answer: "All-on-4 uses four implant posts per arch to support a fixed bridge; All-on-6 uses six. All-on-6 is typically recommended where bone volume allows, as additional anchor points distribute biting force more evenly and can support a larger final bridge. The choice is determined by a CT scan assessment of your bone volume and quality.",
  },
  {
    question: "Do I need two trips to Turkey for full mouth implants?",
    answer: "Yes. Full arch implant treatment requires two visits: the first for implant placement (and any extractions), during which temporary teeth are fitted; the second visit 3–6 months later for fitting the permanent bridge once osseointegration is confirmed. You are never without teeth between visits.",
  },
  {
    question: "What is a titanium bar implant bridge?",
    answer: "A titanium bar (or titanium framework) is an alternative to a zirconia bridge for the All-on-4 or All-on-6 arch reconstruction. The titanium bar provides the structural foundation with acrylic or composite teeth attached. It is generally slightly less expensive than a full zirconia bridge. A full zirconia bridge is stronger, more natural-looking, and preferred for most patients where the budget allows.",
  },
  {
    question: "Is full mouth implant treatment in Turkey safe?",
    answer: "When performed at an accredited clinic by a qualified implantologist using verified implant brands (Straumann, Nobel Biocare, MIS), full mouth implant treatment in Turkey follows the same clinical protocols as in the UK. The key safety factors are clinic accreditation, implant brand verification, and having a clear aftercare plan for once you return to the UK.",
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
      reviewedBy: REVIEWER_PERSON,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Full Mouth Dental Implants Turkey Cost", item: PAGE_URL },
      ],
    },
  ],
};

export default function FullMouthDentalImplantsTurkeyCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Full Mouth Dental Implants Turkey Cost" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Full arch and full mouth implant costs in Turkey for 2026 — All-on-4, All-on-6, titanium bar options, the two-visit process, and total package cost for UK patients.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge
            reviewedDate="September 2026"
          />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            All-on-4 per arch in Turkey costs <strong>£4,500–£5,500</strong>; both arches (full mouth) costs <strong>£9,000–£11,000</strong>. All-on-6 per arch costs <strong>from £5,600</strong>; both arches from <strong>£11,200</strong>. All options require two visits. Add £400–£700 for two trips (flights, hotel, transfers) for total spend. For single implant pricing, see the{" "}
            <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Dental Implants Turkey Cost page</Link>.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "All-on-4 per arch: £4,500–£5,500 in Turkey vs £12,000–£18,000 in the UK.",
              "All-on-6 per arch: from £5,600 in Turkey vs £15,000–£22,000 in the UK.",
              "Full mouth (both arches) All-on-4: £9,000–£11,000 treatment cost.",
              "Two visits to Turkey are required — implants placed on visit one, permanent bridge fitted on visit two.",
              "Temporary fixed teeth are provided on the first visit — you are never without teeth between visits.",
              "Implant brands used include Straumann, Nobel Biocare and MIS — the same brands used in UK practices.",
            ]}
          />

          <h2 id="all-on-4" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-on-4: Cost &amp; Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-on-4 places four dental implant posts in each arch at specific angles to maximise use of available bone. A fixed bridge of 10–14 teeth is secured to these four posts. It is the most widely performed full arch implant solution worldwide and is suitable for the majority of patients who have lost most or all teeth in one arch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price per arch:</strong> £4,500–£5,500.<br />
            <strong>UK equivalent:</strong> £12,000–£18,000 per arch.<br />
            <strong>Saving:</strong> typically 65–75% vs UK private pricing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            On visit one, any remaining failing teeth are extracted, the implant posts are placed, and a temporary fixed bridge is fitted. On visit two (3–6 months later), the permanent zirconia or acrylic bridge is fitted once CT scan confirms osseointegration.
          </p>

          <h2 id="all-on-6" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-on-6: Cost &amp; Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-on-6 uses six implant posts per arch. The additional posts distribute biting load more evenly, allow a slightly wider bridge, and are often preferred where the patient has good bone volume and wants maximum long-term stability. The process is the same as All-on-4 — two visits, temporary teeth on visit one, permanent bridge on visit two.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price per arch:</strong> from £5,600.<br />
            <strong>UK equivalent:</strong> £15,000–£22,000 per arch.
          </p>

          <h2 id="full-mouth" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Mouth (Both Arches)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Full mouth implants means replacing all teeth in both the upper and lower arches. This is typically done as All-on-4 or All-on-6 on each arch in the same surgical session. Both arches are treated simultaneously to reduce the number of trips required.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Full mouth All-on-4 (both arches):</strong> £9,000–£11,000.<br />
            <strong>Full mouth All-on-6 (both arches):</strong> from £11,200.<br />
            <strong>UK equivalent:</strong> £24,000–£44,000 depending on configuration.
          </p>

          <h2 id="titanium-bar" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Titanium Bar vs Zirconia Bridge</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The permanent restoration fitted on the second visit can be either a <strong>full zirconia bridge</strong> or a <strong>titanium bar with acrylic/composite teeth</strong>. Zirconia is stronger, more stain-resistant, and offers a more natural appearance — it is the preferred option for most patients where the budget allows. A titanium bar with acrylic teeth is less expensive but requires the acrylic to be replaced or repaired over time. Confirm which type is included in your quote before booking.
          </p>

          <h2 id="two-visits" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Two Visits: What to Expect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Visit 1 (5–7 days):</strong> Consultation and CT scan; extraction of any remaining failing teeth; implant post placement under local anaesthesia; fitting of temporary fixed bridge. You fly home with fixed temporary teeth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Healing period (3–6 months):</strong> Osseointegration — implant posts fuse to jawbone. Regular check-in with your UK-based liaison during this period.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Visit 2 (3–5 days):</strong> CT scan to confirm integration; fitting and adjusting permanent zirconia bridge; final review before departure.
          </p>

          <h2 id="price-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Arch Price Comparison: Turkey vs UK</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Option</th>
                  <th className="px-4 py-3 text-right font-semibold">Implants</th>
                  <th className="px-4 py-3 text-left font-semibold">Bridge Type</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey</th>
                  <th className="px-4 py-3 text-right font-semibold">UK</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r, i) => (
                  <tr key={r.option} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.option}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.implants}</td>
                    <td className="px-4 py-3 text-gray-700">{r.bridge}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkeyPrice}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.ukPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="total-package-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Total Package Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For full mouth All-on-4 (both arches), a realistic total spend for a UK patient including two trips is:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Treatment: £9,000–£11,000</li>
            <li>Flights (two return trips): £240–£360</li>
            <li>Hotel (two stays, combined 10–14 nights): £400–£700</li>
            <li>Transfers: £80–£120</li>
            <li><strong>Total: approximately £9,720–£12,180</strong></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            This compares to £24,000–£36,000 for the same treatment at a UK private implant centre. Finance is available to spread the total — see{" "}
            <Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Monthly Payments</Link>{" "}
            for payment examples.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Full Mouth Implants Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NICE: Dental implants guidance", href: "https://www.nice.org.uk/guidance/ta565" },
            { label: "NHS: Dental implants", href: "https://www.nhs.uk/conditions/dental-implants/" },
            { label: "Straumann: Implant systems overview", href: "https://www.straumann.com/gb/en/dental-professionals/products-and-solutions/dental-implants.html" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Dental Implants in Turkey: Complete Guide", desc: "Implant brands, surgical process, healing and aftercare.", href: "/guides/dental-implants-turkey" },
            { title: "Dental Implants Turkey Cost", desc: "Single implant pricing and All-on-4/6 prices.", href: "/prices/dental-implants-turkey-cost" },
            { title: "All-on-6 Turkey Package", desc: "All-on-6 per arch package details and inclusions.", href: "/prices/all-on-6-dental-implants-turkey-package" },
            { title: "Turkey Teeth Monthly Payments", desc: "Monthly payment examples for full mouth implant costs.", href: "/guides/turkey-teeth-monthly-payments" },
          ]}
        />
      </div>

      <CTASection
        title="Get Your Full Mouth Implant Quote"
        subtitle="Send us your X-rays or CT scan and we'll provide a personalised All-on-4 or All-on-6 treatment plan with exact costs and monthly payment options."
        buttonText="Get My Free Implant Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
