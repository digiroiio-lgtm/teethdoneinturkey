import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/antalya-teeth-prices`;
const TITLE = "Antalya Teeth Prices: Complete 2026 Dental Cost Guide for UK Patients";
const H1 = "Antalya Teeth Prices: 2026 Dental Cost Guide for UK Patients";
const DESCRIPTION =
  "Dental treatment prices in Antalya for UK patients in 2026: veneers, crowns, implants and full mouth costs, with travel information and what to expect.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/antalya-teeth-prices" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "why-antalya", label: "Why Antalya?" },
  { id: "veneer-prices", label: "Veneer & Crown Prices" },
  { id: "implant-prices", label: "Implant Prices" },
  { id: "full-mouth-prices", label: "Full Mouth Prices" },
  { id: "price-table", label: "Antalya Treatment Price Table" },
  { id: "travel-info", label: "Getting to Antalya from the UK" },
  { id: "total-cost", label: "Total Cost Including Travel" },
  { id: "faqs", label: "FAQs" },
];

const priceRows = [
  { treatment: "Porcelain Veneer (E-max)", antalya: "£190–£250", uk: "£800–£1,000" },
  { treatment: "Zirconia Crown", antalya: "£190–£250", uk: "£700–£1,200" },
  { treatment: "Full Set Veneers (20 teeth)", antalya: "£3,800–£5,000", uk: "£16,000–£20,000" },
  { treatment: "Single Dental Implant + Crown", antalya: "£420–£600", uk: "£2,000–£3,000" },
  { treatment: "All-on-4 per Arch", antalya: "£4,500–£5,500", uk: "£12,000–£18,000" },
  { treatment: "All-on-6 per Arch", antalya: "From £5,600", uk: "£15,000–£22,000" },
  { treatment: "Full Mouth All-on-4 (both arches)", antalya: "£9,000–£11,000", uk: "£24,000–£36,000" },
  { treatment: "Hollywood Smile Package", antalya: "£4,500–£6,000", uk: "£20,000–£30,000" },
];

const faqs = [
  {
    question: "How much does dental treatment cost in Antalya?",
    answer: "In Antalya, porcelain veneers cost £190–£250 per tooth; a full set of 20 veneers costs £3,800–£5,000. A single implant with crown costs £420–£600. All-on-4 per arch costs £4,500–£5,500. These prices are 65–80% lower than comparable UK private dental treatment, even after adding flights and accommodation.",
  },
  {
    question: "Why is Antalya the main hub for dental treatment for UK patients?",
    answer: "Antalya is Turkey's most popular destination for UK dental patients because of its large number of accredited clinics, direct flights from most UK airports, established patient infrastructure (hotels, transfers, English-speaking staff), and competitive pricing. The Antalya region has developed a mature dental tourism sector over two decades and has strong independent review records.",
  },
  {
    question: "How do I get to Antalya from the UK for dental treatment?",
    answer: "Direct flights to Antalya Airport (AYT) operate from London Gatwick, London Stansted, Manchester, Birmingham, Bristol, Edinburgh and other UK airports. Budget carriers including easyJet, Ryanair, Jet2 and TUI all serve the route. Flight time is approximately 4 hours from London. Return flights typically cost £80–£180 from most UK cities.",
  },
  {
    question: "Are Antalya dental prices in pounds or Turkish lira?",
    answer: "Clinics in Antalya set their prices in Turkish lira but reputable clinics quote UK patients in GBP and fix the price at the time of treatment planning. All prices on this page are in GBP. If you receive a quote in lira from another provider, confirm the GBP equivalent and whether it is fixed before booking.",
  },
  {
    question: "Is it safe to get dental treatment in Antalya?",
    answer: "Treatment at accredited Antalya clinics using verified implant and crown brands (Straumann, Nobel Biocare, Ivoclar E-max) follows the same clinical standards as UK private treatment. The key safety factors are clinic accreditation, implant brand verification, a clear aftercare plan for when you return to the UK, and choosing a provider with verifiable patient reviews.",
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
        { "@type": "ListItem", position: 3, name: "Antalya Teeth Prices", item: PAGE_URL },
      ],
    },
  ],
};

export default function AntalyaTeethPricesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Antalya Teeth Prices" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Treatment prices at Antalya dental clinics — veneers, crowns, implants and full mouth options — with UK price comparisons, travel information and total trip cost for UK patients.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge
            reviewerName="Dr. Ayşe Kaya"
            reviewerTitle="BDS, MSc Implantology"
            reviewedDate="September 2026"
          />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Porcelain veneers in Antalya cost <strong>£190–£250 per tooth</strong>; a full set of 20 costs <strong>£3,800–£5,000</strong>. A single implant with crown costs <strong>£420–£600</strong>. All-on-4 per arch costs <strong>£4,500–£5,500</strong>. Add £200–£400 per trip for flights and accommodation. All prices are in GBP.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Antalya is the main hub for UK dental patients — the largest concentration of accredited clinics with UK patient experience.",
              "Porcelain veneers: £190–£250 per tooth in Antalya vs £800–£1,000 in the UK.",
              "All-on-4 per arch: £4,500–£5,500 in Antalya vs £12,000–£18,000 in the UK.",
              "Direct flights to Antalya (AYT) from most UK airports — 4 hours from London.",
              "Return flights cost £80–£180 from UK cities on budget carriers.",
              "All prices on this page are in GBP — no hidden currency conversion.",
            ]}
          />

          <h2 id="why-antalya" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why Antalya?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya is Turkey&apos;s dental tourism hub — not by accident but because of infrastructure that developed over two decades of serving international patients. The concentration of accredited dental clinics is higher here than anywhere else in Turkey, English-speaking staff are standard, and the patient logistics (hotels near clinics, airport transfers, UK patient coordinators) are well established.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The partner clinics on this site are based in the Antalya region. Patients fly into Antalya Airport (AYT), which has direct scheduled services from most UK airports year-round — making it practical for a 5–7 day treatment visit without long travel times.
          </p>

          <h2 id="veneer-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer &amp; Crown Prices in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most common treatments sought by UK patients in Antalya are porcelain veneers and zirconia crowns for smile makeovers. E-max porcelain is the standard veneer material; zirconia is the standard crown material. Both are the same brands and materials used in UK private practices.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>E-max porcelain veneer:</strong> £190–£250 per tooth</li>
            <li><strong>Zirconia crown:</strong> £190–£250 per tooth</li>
            <li><strong>Full set of 20 veneers or crowns:</strong> £3,800–£5,000</li>
            <li><strong>Hollywood Smile package (20–24 teeth):</strong> £4,500–£6,000</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most veneer and crown patients complete their treatment in a single visit of 5–7 days.
          </p>

          <h2 id="implant-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Prices in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dental implant treatment in Antalya uses the same implant brands as UK practices. Straumann, Nobel Biocare and MIS are all available. Two visits are required for implant treatment — one for placement, one for final crown fitting.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>Single implant + zirconia crown:</strong> £420–£600</li>
            <li><strong>All-on-4 per arch:</strong> £4,500–£5,500</li>
            <li><strong>All-on-6 per arch:</strong> from £5,600</li>
          </ul>

          <h2 id="full-mouth-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full Mouth Prices in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Full mouth treatment — covering both upper and lower arches — ranges from a complete veneer set to full mouth implants depending on your dental situation:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>Full set veneers (20 teeth):</strong> £3,800–£5,000</li>
            <li><strong>Full mouth All-on-4 (both arches):</strong> £9,000–£11,000</li>
            <li><strong>Full mouth All-on-6 (both arches):</strong> from £11,200</li>
          </ul>

          <h2 id="price-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Antalya Treatment Prices vs UK: 2026</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">Antalya Price</th>
                  <th className="px-4 py-3 text-right font-semibold">UK Price</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.antalya}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="travel-info" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Getting to Antalya from the UK</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya Airport (AYT) has direct scheduled flights from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>London Gatwick (LGW) — easyJet, TUI</li>
            <li>London Stansted (STN) — Ryanair</li>
            <li>Manchester (MAN) — Jet2, easyJet, TUI</li>
            <li>Birmingham (BHX) — Jet2, TUI</li>
            <li>Bristol (BRS) — easyJet, TUI</li>
            <li>Edinburgh (EDI) — easyJet, Jet2</li>
            <li>Glasgow (GLA) — Jet2</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Return flights cost <strong>£80–£180 per person</strong> from most UK cities, rising to £180–£260 in July and August. Flight time is 4 hours from London, 4.5 hours from Manchester and Scotland. The airport to clinic area takes approximately 20–40 minutes by transfer.
          </p>

          <h2 id="total-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Total Cost Including Travel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full veneer makeover (20 teeth), total spend for a UK patient including treatment, flights, hotel and transfers is typically <strong>£4,200–£5,600</strong>. Compare this to £16,000–£20,000 for the same treatment at a UK private practice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a detailed breakdown of all cost components, see{" "}
            <Link href="/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" className="text-[#1e40af] font-semibold hover:underline">How Much Does It Cost to Get Your Teeth Done in Turkey?</Link>
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Antalya Dental Prices: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "CAA: Antalya (AYT) route data", href: "https://www.caa.co.uk/data-and-analysis/uk-aviation-market/airports/" },
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Full treatment price list for all dental work in Turkey.", href: "/prices/turkey-teeth-cost" },
            { title: "How Much Does It Cost to Get Your Teeth Done in Turkey?", desc: "Total trip cost guide including flights, hotel and transfers.", href: "/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" },
            { title: "Turkey Teeth Packages", desc: "What is and isn't included in a Turkey dental package.", href: "/guides/turkey-teeth-packages" },
            { title: "Full Mouth Dental Implants Turkey Cost", desc: "All-on-4, All-on-6 and full arch implant prices.", href: "/guides/full-mouth-dental-implants-turkey-cost" },
          ]}
        />
      </div>

      <CTASection
        title="Get Your Antalya Treatment Quote"
        subtitle="Tell us what you need and we'll send a personalised treatment plan with Antalya clinic pricing and a monthly payment option."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
