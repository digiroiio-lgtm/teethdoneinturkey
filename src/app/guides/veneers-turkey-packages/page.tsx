import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQSection from "@/components/FAQSection";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import SourcesList from "@/components/SourcesList";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/veneers-turkey-packages`;
const TITLE = "Veneers Turkey Packages: What Is Included and What Does It Really Cost?";
const H1 = "Veneers Turkey Packages: What Is Included and What Does It Cost?";
const DESCRIPTION =
  "Veneer package prices in Turkey — what is included vs what you still pay, treatment-only vs package vs total trip cost tables for 8, 10, 16 and 20 teeth, and questions to ask before booking.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/veneers-turkey-packages" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "veneer-package-vs-treatment", label: "Veneer Package vs Treatment Price" },
  { id: "cost-table", label: "Treatment Only vs Package vs Total Trip" },
  { id: "whats-included", label: "What Is Included" },
  { id: "whats-excluded", label: "What Is Not Included" },
  { id: "by-tooth-count", label: "Package Costs by Tooth Count" },
  { id: "what-to-check", label: "What to Check Before Booking" },
  { id: "red-flags", label: "Red Flags" },
  { id: "faqs", label: "FAQs" },
];

const comparisonRows = [
  { item: "Veneer treatment (preparation, temporaries, permanents)", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Consultation and X-rays", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Digital smile design preview", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Temporary veneers (while lab makes permanents)", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Hotel (approx 5–7 nights)", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£360–£600" },
  { item: "Airport transfer (both directions)", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£40–£80" },
  { item: "Clinic-to-hotel transfers", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£0–£40" },
  { item: "Flights (return, UK to Turkey)", treatmentOnly: "Not included", veneerPackage: "Not included", totalTrip: "£80–£200" },
  { item: "CBCT / cone beam CT scan (if required)", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Teeth whitening of remaining natural teeth", treatmentOnly: "Ask — extra cost", veneerPackage: "Ask — extra cost", totalTrip: "Ask clinic" },
  { item: "UK aftercare support / emergency cover", treatmentOnly: "Clinic-dependent", veneerPackage: "Clinic-dependent", totalTrip: "Confirm in writing" },
];

const byCountRows = [
  { teeth: "8 E-max veneers", treatmentOnly: "From £1,520", veneerPackage: "From £1,920–£2,120", totalTrip: "£2,000–£2,320" },
  { teeth: "10 E-max veneers", treatmentOnly: "From £1,900", veneerPackage: "From £2,300–£2,500", totalTrip: "£2,380–£2,700" },
  { teeth: "16 E-max veneers", treatmentOnly: "From £3,040", veneerPackage: "From £3,440–£3,640", totalTrip: "£3,520–£3,840" },
  { teeth: "20 E-max veneers (full smile)", treatmentOnly: "From £3,800", veneerPackage: "From £4,200–£4,500", totalTrip: "£4,280–£4,700" },
];

const faqs = [
  {
    question: "What does a Turkey veneer package include?",
    answer: "Most Turkey veneer packages include: the complete veneer treatment (consultation, X-rays, smile design, preparation, temporaries, lab fabrication, fitting and adjustments), hotel accommodation for the treatment stay (typically 5–7 nights), airport pickup and return transfer, and clinic-to-hotel transfers during treatment days. Flights are never included. Always confirm the hotel name, number of nights, and whether both airport transfer directions are covered.",
  },
  {
    question: "What is the difference between a veneer package price and a treatment price?",
    answer: "The treatment price covers only the dental work — the clinical time, lab fees, materials and fitting. The package price bundles treatment with hotel and transfers. Neither is the same as your total trip cost, which also includes flights (£80–£200 return from the UK) and any incidentals. Budget for total trip cost, not just the package headline figure.",
  },
  {
    question: "Are flights included in veneer packages in Turkey?",
    answer: "No. Flights are excluded from every veneer package price in Turkey. Return flights from UK airports to Antalya (the main dental destination) cost approximately £80–£200 on budget carriers such as easyJet, Ryanair, TUI and Jet2. Budget this separately on top of your package price.",
  },
  {
    question: "How many nights hotel is included in a veneer package?",
    answer: "Most Antalya veneer packages include 5–7 nights, which aligns with the typical 5–7 day treatment timeline. Confirm the exact number when you receive your quote — some quotes specify fewer nights and expect you to pay for any additional stay. If your treatment requires 7 days but only 5 nights are included, you will need to cover 2 extra nights separately.",
  },
  {
    question: "What is included in a Hollywood Smile package in Turkey?",
    answer: "A Hollywood Smile package typically covers the same elements as a standard veneer package — treatment, hotel, transfers — but is usually based on zirconia crowns rather than porcelain veneers. This is important: the classic Hollywood Smile packages common at Turkish clinics are almost always crown-based, which involves full encirclement and significantly more tooth preparation than true veneers. If your goal is a more conservative result, ask specifically about E-max or porcelain veneer-only packages.",
  },
  {
    question: "How do I know if I am getting veneers or crowns in a Turkey package?",
    answer: "Ask the clinic or coordinator to confirm in writing which material and type of restoration is included in your quote — specifically: 'Is this a full porcelain veneer (facing only) or a full crown (encircling the whole tooth)?' Any reputable clinic will confirm this without hesitation. If you cannot get a written answer before paying a deposit, treat that as a red flag.",
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
        { "@type": "ListItem", position: 3, name: "Veneers Turkey Packages", item: PAGE_URL },
      ],
    },
  ],
};

export default function VeneersTurkeyPackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Veneers Turkey Packages" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A veneer package price is not the same as what you will actually spend. This guide breaks down exactly what Turkey veneer packages include, what they leave out, and what to verify before you book.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Veneer packages bundle treatment + hotel + transfers — flights are always extra.",
              "A 20-tooth E-max package typically costs £4,200–£4,500 including hotel; total trip adds £80–£200 for flights.",
              "Always confirm the number of hotel nights (most packages include 5–7 nights for veneers).",
              "Get the treatment type confirmed in writing — 'Hollywood Smile' packages are often crown-based, not veneer-based.",
              "Ask about UK aftercare support before committing — what happens if an issue arises after you return home.",
            ]}
          />

          <p className="text-gray-700 leading-relaxed mb-4 mt-6">
            This guide covers packages specifically for veneer treatment. For generic Turkey dental packages across all treatment types (implants, crowns, full-mouth), see the parent guide:{" "}
            <Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Packages: What Is Included and What Does It Really Cost?</Link>
          </p>

          <h2 id="veneer-package-vs-treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer Package Price vs Treatment Price</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Three numbers appear in Turkish veneer pricing, and confusing them is the most common budgeting mistake UK patients make:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Treatment price:</strong> The clinical work only — consultation, preparation, temporaries, lab, fitting. This is the per-tooth rate multiplied by your tooth count. E-max from £190/tooth; zirconia from £130.</li>
            <li><strong>Package price:</strong> Treatment bundled with hotel (5–7 nights) and airport/clinic transfers. Typically £400–£700 more than treatment-only, but represents genuine value since the clinic has negotiated hotel rates.</li>
            <li><strong>Total trip cost:</strong> What you actually spend including flights (not in any package), personal spending, and incidentals. For veneer patients this is typically £200–£400 more than the package price.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Budget based on <em>total trip cost</em>, not the package headline figure. The saving over UK treatment remains substantial regardless — a total veneer trip to Turkey typically costs 75–85% less than equivalent UK private treatment.
          </p>

          <h2 id="cost-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Only vs Package vs Total Trip Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The table below uses 20 E-max veneers as the reference scenario. Items marked &ldquo;Included&rdquo; in the package column are bundled; items marked &ldquo;Not included&rdquo; must be budgeted separately.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Item</th>
                  <th className="px-4 py-3 text-left font-semibold">Treatment Only</th>
                  <th className="px-4 py-3 text-left font-semibold">Veneer Package</th>
                  <th className="px-4 py-3 text-left font-semibold">Total Trip Cost</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.item}</td>
                    <td className={`px-4 py-3 font-semibold ${r.treatmentOnly === "Included" ? "text-green-700" : r.treatmentOnly === "Not included" ? "text-red-600" : "text-amber-700"}`}>{r.treatmentOnly}</td>
                    <td className={`px-4 py-3 font-semibold ${r.veneerPackage === "Included" ? "text-green-700" : r.veneerPackage === "Not included" ? "text-red-600" : "text-amber-700"}`}>{r.veneerPackage}</td>
                    <td className="px-4 py-3 text-gray-700">{r.totalTrip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="whats-included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Is Included in a Veneer Package</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A standard Turkey veneer package includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Full veneer treatment:</strong> Consultation, digital smile design, clinical X-rays, tooth preparation, temporary veneers while your permanent set is made, lab fabrication, final fitting, bonding and adjustments.</li>
            <li><strong>Hotel accommodation:</strong> Typically 5–7 nights in a 4 or 5-star hotel near the clinic. In Antalya this is usually in the Lara Beach or Konyaalti districts. Confirm the hotel name and star rating before booking.</li>
            <li><strong>Airport transfers:</strong> Pickup on arrival and return on departure. Confirm both directions are included — some quotes only include one-way.</li>
            <li><strong>Clinic transfers:</strong> Transport between hotel and clinic during treatment days. Usually included in all packages.</li>
          </ul>

          <h2 id="whats-excluded" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Is Not Included</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Budget for these separately regardless of which package you choose:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Flights:</strong> Never included. Return UK–Antalya flights cost £80–£200 on budget carriers. Book 4–8 weeks in advance for the best fares.</li>
            <li><strong>Travel insurance:</strong> Essential. Ensure it covers dental complications and pre-existing treatment. Some UK travel insurers exclude dental treatment — check the policy wording before buying.</li>
            <li><strong>Teeth whitening of natural teeth:</strong> If any of your natural teeth remain visible, whitening those to match your new veneers is typically charged separately (ask for a quote).</li>
            <li><strong>Additional treatment:</strong> If your dental assessment reveals issues that need addressing before veneers can be placed (fillings, gum treatment, root canal work), these are quoted and charged separately.</li>
            <li><strong>Hotel nights beyond the package:</strong> If your treatment needs more than the included nights, additional nights are charged at the hotel's own rate.</li>
          </ul>

          <h2 id="by-tooth-count" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package Costs by Tooth Count (E-max)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The table below shows treatment-only vs package vs total trip cost for the most common tooth counts using E-max porcelain veneers.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Tooth Count</th>
                  <th className="px-4 py-3 text-left font-semibold">Treatment Only</th>
                  <th className="px-4 py-3 text-left font-semibold">Veneer Package</th>
                  <th className="px-4 py-3 text-left font-semibold">Total Trip (incl. flights)</th>
                </tr>
              </thead>
              <tbody>
                {byCountRows.map((r, i) => (
                  <tr key={r.teeth} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.teeth}</td>
                    <td className="px-4 py-3 font-semibold text-[#1e40af]">{r.treatmentOnly}</td>
                    <td className="px-4 py-3 text-gray-700">{r.veneerPackage}</td>
                    <td className="px-4 py-3 text-gray-700">{r.totalTrip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Package price adds approximately £400–£700 to treatment-only (hotel + transfers). Total trip adds a further £80–£200 (flights). For Antalya-specific pricing, see{" "}
            <Link href="/prices/veneers-antalya-cost" className="text-[#1e40af] font-semibold hover:underline">Veneers Antalya Cost</Link>.
          </p>

          <h2 id="what-to-check" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What to Check Before Booking a Veneer Package</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Get written answers to all of the following before paying any deposit:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Exactly how many teeth are included and what material — e.g., &ldquo;20 E-max porcelain veneers&rdquo; or &ldquo;20 zirconia crowns&rdquo;? <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">These are not the same thing</Link>.</li>
            <li>How many hotel nights are included and the hotel&apos;s name and star rating?</li>
            <li>Are both airport transfer directions included (pickup on arrival and drop-off on departure)?</li>
            <li>Does the package include temporary veneers? (It should — this is standard.)</li>
            <li>Is a CBCT or cone beam CT scan included, or charged separately?</li>
            <li>What is the process if a veneer chips or comes off after you return home?</li>
            <li>Is there a UK-based aftercare coordinator or emergency contact?</li>
          </ol>

          <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Red Flags When Comparing Veneer Packages</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Package inclusions confirmed verbally but not in a written treatment plan or booking confirmation.</li>
            <li>Pressure to pay a deposit before seeing a written treatment plan specifying the material (E-max vs zirconia vs composite).</li>
            <li>No clear statement of whether the quote is for veneers or crowns — &ldquo;zirconia veneers&rdquo; is a common term for zirconia crowns in Turkish dental marketing.</li>
            <li>No verifiable independent reviews (not just clinic-curated testimonials on their own website).</li>
            <li>No named UK-based point of contact for post-treatment queries.</li>
            <li>Unusually low per-tooth prices without any specification of the material or lab used.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full evaluation framework — including what to look for in a veneer clinic and dentist — see{" "}
            <Link href="/guides/best-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">Best Veneers in Turkey: E-max vs Zirconia Compared</Link>.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Veneers Turkey Packages: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />
        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Packages: The Complete Guide", desc: "Generic Turkey dental packages across all treatments — implants, crowns, full mouth.", href: "/guides/turkey-teeth-packages" },
            { title: "Veneers Antalya Cost: 2026 Price Guide", desc: "Antalya-specific veneer prices — by tooth count, package vs trip cost.", href: "/prices/veneers-antalya-cost" },
            { title: "Best Veneers in Turkey: Type Comparison Guide", desc: "E-max vs zirconia vs composite — which veneer type gives the best result.", href: "/guides/best-veneers-turkey" },
            { title: "Turkish Veneers Safety Guide", desc: "Risks, red flags and what to ask before getting veneers in Turkey.", href: "/guides/turkish-veneers-safety" },
            { title: "Veneers or Crowns? What the Difference Means for You", desc: "How much tooth is removed and what cannot be undone — before you book.", href: "/guides/turkey-teeth-veneers-or-crowns" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Written Veneer Package Quote"
        subtitle="We'll send an itemised quote specifying the material, tooth count, hotel and transfer inclusions — so you know exactly what you are paying for."
        buttonText="Get My Free Package Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
