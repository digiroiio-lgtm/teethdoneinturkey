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
const PAGE_URL = `${SITE_URL}/guides/full-set-of-teeth-turkey-cost`;
const TITLE = "Full Set of Teeth in Turkey: Cost & Options 2026";
const H1 = "Full Set of Teeth in Turkey Cost: What Does 'Full Set' Mean and What Does It Cost?";
const DESCRIPTION =
  "What a full set of Turkey teeth means, and what each option costs: crowns, veneers, All-on-4, All-on-6 and full mouth implants explained and compared.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/full-set-of-teeth-turkey-cost" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "what-is-full-set", label: "What Does 'Full Set' Mean?" },
  { id: "full-set-crowns", label: "Full Set Crowns" },
  { id: "full-set-veneers", label: "Full Set Veneers" },
  { id: "all-on-4", label: "All-on-4 per Arch" },
  { id: "all-on-6", label: "All-on-6 per Arch" },
  { id: "full-mouth-implants", label: "Full Mouth Implants" },
  { id: "comparison-table", label: "Option Comparison Table" },
  { id: "which-option", label: "Which Option Is Right for Me?" },
  { id: "faqs", label: "FAQs" },
];

const comparisonRows = [
  { option: "Full Set Crowns (20 teeth)", who: "Existing teeth present, want full coverage", turkeyPrice: "£3,800–£5,000", visitCount: "1 visit", permanence: "Permanent", notes: "Tooth prep required" },
  { option: "Full Set Veneers (20 teeth)", who: "Existing teeth present, mainly cosmetic", turkeyPrice: "£3,800–£5,000", visitCount: "1 visit", permanence: "Permanent", notes: "Less prep than crowns" },
  { option: "All-on-4 (per arch)", who: "Missing most/all teeth in one arch", turkeyPrice: "£4,500–£5,500", visitCount: "2 visits", permanence: "Permanent", notes: "4 implants per arch" },
  { option: "All-on-6 (per arch)", who: "Missing most/all teeth, more bone available", turkeyPrice: "From £5,600", visitCount: "2 visits", permanence: "Permanent", notes: "6 implants per arch" },
  { option: "Full Mouth Implants (both arches)", who: "Complete tooth loss, wants fixed teeth", turkeyPrice: "£9,000–£11,000", visitCount: "2 visits", permanence: "Permanent", notes: "All-on-4 or All-on-6 both arches" },
];

const faqs = [
  {
    question: "How much does a full set of Turkey teeth cost?",
    answer: "It depends entirely on what 'full set' means in your case. Full set crowns or veneers (20 teeth) cost £3,800–£5,000 in Turkey. All-on-4 per arch costs £4,500–£5,500; both arches (full mouth) £9,000–£11,000. All-on-6 per arch starts from £5,600. The price difference between options is significant — the right choice depends on whether you have natural teeth remaining and your clinical situation.",
  },
  {
    question: "Is a full set of Turkey teeth crowns or veneers?",
    answer: "It can be either — or neither. When UK patients say 'Turkey teeth' they usually mean crowns or porcelain veneers fitted over prepared natural teeth. But if most teeth are missing, the options are implant-supported restorations: All-on-4, All-on-6, or individual implants. A dentist needs to see your X-rays to tell you which is appropriate.",
  },
  {
    question: "How many teeth is a 'full set'?",
    answer: "Adults have 28 permanent teeth (32 including wisdom teeth). A 'full set' of veneers or crowns typically means 20–24 teeth — the ones visible when smiling. Quotes for a 'full set' should specify exactly how many teeth are included; always confirm this number before accepting a price.",
  },
  {
    question: "Can I get a full set of teeth done in Turkey in one trip?",
    answer: "For crowns and veneers, yes — most patients complete their treatment in 5–7 days on a single visit. For implant-based options (All-on-4, All-on-6), two trips are required: first visit for implant placement, second visit 3–6 months later for permanent crown fitting. You receive temporary teeth on the first visit.",
  },
  {
    question: "What is the difference between All-on-4 and All-on-6?",
    answer: "Both are implant-supported fixed bridges replacing all teeth in one arch. All-on-4 uses 4 implant posts per arch; All-on-6 uses 6. All-on-6 is generally preferred where there is sufficient bone, as more implant posts distribute biting load more evenly and can support a larger number of final teeth. Your dentist will assess bone volume from a CT scan to advise which is suitable.",
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
        { "@type": "ListItem", position: 3, name: "Full Set of Teeth Turkey Cost", item: PAGE_URL },
      ],
    },
  ],
};

export default function FullSetOfTeethTurkeyCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Full Set of Teeth Turkey Cost" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            &ldquo;Full set&rdquo; means different things to different patients. This guide explains every option — crowns, veneers, All-on-4, All-on-6 and full mouth implants — with 2026 prices and what makes each appropriate.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "'Full set of Turkey teeth' can mean crowns, veneers, All-on-4, All-on-6 or full mouth implants — the right option depends on whether you have natural teeth remaining.",
              "Full set crowns or veneers (20 teeth): £3,800–£5,000 in Turkey — completed in one visit.",
              "All-on-4 per arch: £4,500–£5,500 — two visits required, permanent implant-supported teeth.",
              "All-on-6 per arch: from £5,600 — more implants per arch for greater long-term stability.",
              "Full mouth (both arches) All-on-4/6: £9,000–£11,000 total.",
              "Always confirm how many teeth are included in any 'full set' quote — the number varies.",
            ]}
          />

          <h2 id="what-is-full-set" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Does &ldquo;Full Set&rdquo; Mean?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The phrase &ldquo;full set of Turkey teeth&rdquo; is used loosely and means different things depending on who is saying it and what dental situation they are starting from. Before any clinic can quote you accurately, they need to know which of the following applies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>You have most or all of your natural teeth</strong> — a full set of crowns or veneers is placed over your prepared existing teeth.</li>
            <li><strong>You are missing most or all teeth in one arch</strong> — implant-supported options (All-on-4 or All-on-6) replace the entire arch on 4–6 implants.</li>
            <li><strong>You are missing most or all teeth in both arches</strong> — full mouth implants covering both upper and lower arches.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            The options are not interchangeable. A full set of veneers requires natural tooth structure to bond to; All-on-4 implants require no remaining teeth in that arch (any that remain are typically extracted first). This is why an X-ray or CT scan is always required before a final treatment plan is confirmed.
          </p>

          <h2 id="full-set-crowns" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Set Crowns (20 Teeth)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A porcelain crown fits over a prepared natural tooth, covering it completely. A full set of crowns typically means 20 teeth — the upper and lower arches covering the visible smile area. Zirconia (zirconium) crowns are the most common choice in Turkey for their strength and natural appearance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price (20 crowns):</strong> £3,800–£5,000 depending on material grade and clinic.<br />
            <strong>Visits required:</strong> Usually completed in one visit of 5–7 days.<br />
            <strong>Note:</strong> Crown preparation removes a layer of enamel from each tooth. This is irreversible — once prepared, those teeth always need a crown.
          </p>

          <h2 id="full-set-veneers" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Set Veneers (20 Teeth)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A porcelain veneer is a thin shell bonded to the front surface of a tooth. A full set typically covers the front 20 teeth. E-max porcelain is the most common veneer material in Turkey, offering a natural translucency.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price (20 veneers):</strong> £3,800–£5,000 depending on material and clinic.<br />
            <strong>Visits required:</strong> Usually completed in one visit of 4–6 days.<br />
            <strong>Crowns vs veneers:</strong> For a guide to which treatment you are actually being quoted, see{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth: Veneers or Crowns?</Link>
          </p>

          <h2 id="all-on-4" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-on-4 per Arch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-on-4 is a full arch replacement using four dental implant posts to support a fixed bridge of 10–14 teeth. It is the most widely used implant solution for patients who have lost most or all teeth in one arch. You receive temporary fixed teeth on the first visit; permanent teeth are fitted on the second visit 3–6 months later.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price (per arch):</strong> £4,500–£5,500.<br />
            <strong>Visits required:</strong> Two visits — one for implant placement, one for final crowns.<br />
            <strong>Full mouth (both arches):</strong> £9,000–£11,000.
          </p>

          <h2 id="all-on-6" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-on-6 per Arch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-on-6 uses six implant posts per arch instead of four, distributing biting load across more anchor points. It is typically recommended where bone volume allows, as the additional implants can support a larger bridge and offer greater long-term stability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Turkey price (per arch):</strong> from £5,600.<br />
            <strong>Visits required:</strong> Two visits.<br />
            <strong>Full mouth (both arches):</strong> from £11,200.
          </p>

          <h2 id="full-mouth-implants" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Mouth Implants</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Full mouth implants means implant-supported teeth in both the upper and lower arches, typically using All-on-4 or All-on-6 on each arch. This is the option for patients with complete or near-complete tooth loss who want fixed, permanent teeth rather than removable dentures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a detailed guide to implant types, surgical process, healing timelines and what to expect, see the{" "}
            <Link href="/guides/full-mouth-dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Full Mouth Dental Implants Turkey Cost guide</Link>.
          </p>

          <h2 id="comparison-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Option Comparison Table</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Option</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey Price</th>
                  <th className="px-4 py-3 text-right font-semibold">Visits</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.option} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.option}</td>
                    <td className="px-4 py-3 text-gray-700">{r.who}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkeyPrice}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.visitCount}</td>
                    <td className="px-4 py-3 text-gray-600">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="which-option" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Which Option Is Right for Me?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The answer depends on your clinical situation — specifically, whether you have natural teeth remaining, the condition of those teeth, and your bone volume. A dental X-ray and usually a CBCT scan are needed before any clinic can give a definitive recommendation. As a general guide:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>If you have healthy natural teeth and want to change your smile: <strong>veneers or crowns</strong>.</li>
            <li>If you have several failing or missing teeth but some remaining: a <strong>combination of implants and crowns/veneers</strong>.</li>
            <li>If you have lost most or all teeth in one arch: <strong>All-on-4 or All-on-6</strong>.</li>
            <li>If you have lost most or all teeth in both arches: <strong>full mouth All-on-4 or All-on-6</strong>.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Request a{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">free personalised treatment plan</Link>{" "}
            — send your X-rays or a description of your situation and a treatment coordinator will advise on the most appropriate option with a full cost breakdown.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Full Set of Teeth in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental implants", href: "https://www.nhs.uk/conditions/dental-implants/" },
            { label: "NHS: Dental veneers", href: "https://www.nhs.uk/conditions/veneers/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Per-treatment pricing: veneers, crowns, implants and full mouth.", href: "/prices/turkey-teeth-cost" },
            { title: "Full Mouth Dental Implants Turkey Cost", desc: "All-on-4, All-on-6 and full arch prices in detail.", href: "/guides/full-mouth-dental-implants-turkey-cost" },
            { title: "Turkey Teeth: Veneers or Crowns?", desc: "The difference between the two and what you're actually being quoted.", href: "/guides/turkey-teeth-veneers-or-crowns" },
            { title: "How Much Are Turkey Teeth Per Month?", desc: "Monthly payment examples for full set treatment costs.", href: "/guides/turkey-teeth-monthly-payments" },
          ]}
        />
      </div>

      <CTASection
        title="Find Out Which Option Suits You"
        subtitle="Send us your X-rays or describe your situation and we'll send a personalised treatment plan with the right option and exact cost."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
