import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQSection from "@/components/FAQSection";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import CTASection from "@/components/CTASection";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/veneers-antalya-cost`;
const TITLE = "Veneers Antalya Cost 2026: E-max, Zirconia & Package Prices for UK Patients";
const H1 = "Veneers Antalya Cost 2026: What UK Patients Actually Pay";
const DESCRIPTION =
  "Veneer prices in Antalya 2026 — E-max from £190/tooth, zirconia from £130, composite from £80. Package vs treatment-only vs total trip cost tables for 8, 10, 16 and 20 teeth.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/veneers-antalya-cost" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "antalya-veneer-prices", label: "Antalya Veneer Prices by Type" },
  { id: "by-tooth-count", label: "Prices by Tooth Count (8–20 Teeth)" },
  { id: "package-vs-treatment", label: "Package vs Treatment-Only vs Total Trip Cost" },
  { id: "whats-included", label: "What Is Included and What Is Not" },
  { id: "treatment-duration", label: "Treatment Duration in Antalya" },
  { id: "hotel-transfers", label: "Hotel and Transfer Options" },
  { id: "budgeting-antalya", label: "Total Antalya Trip Budget" },
  { id: "faqs", label: "FAQs" },
];

const veneerTypeRows = [
  { type: "E-max Porcelain Veneers", pricePerTooth: "From £190", ukEquiv: "£800–£1,000", notes: "Most natural result; front-facing only; recommended for smile makeovers" },
  { type: "Zirconia Crowns", pricePerTooth: "From £130", ukEquiv: "£1,000–£1,500", notes: "Full coverage crown, not a true veneer; more prep; more durable" },
  { type: "Composite Veneers (Lab)", pricePerTooth: "From £100", ukEquiv: "£400–£600", notes: "Lab-made composite; less durable than porcelain; no drilling in some cases" },
  { type: "Composite Veneers (Direct)", pricePerTooth: "From £80", ukEquiv: "£250–£450", notes: "Chair-side; reversible in many cases; lowest cost option" },
];

const byCountRows = [
  { teeth: "8 teeth", emax: "From £1,520", zirconia: "From £1,040", composite: "From £640", ukEmax: "£6,400+" },
  { teeth: "10 teeth", emax: "From £1,900", zirconia: "From £1,300", composite: "From £800", ukEmax: "£8,000+" },
  { teeth: "16 teeth", emax: "From £3,040", zirconia: "From £2,080", composite: "From £1,280", ukEmax: "£12,800+" },
  { teeth: "20 teeth (full smile)", emax: "From £3,800", zirconia: "From £2,600", composite: "From £1,600", ukEmax: "£16,000+" },
];

const tripCostRows = [
  { item: "Treatment (20 E-max veneers)", treatmentOnly: "£3,800", veneerPackage: "Included", totalTrip: "£3,800" },
  { item: "Hotel (6 nights)", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£360–£600" },
  { item: "Airport transfers (both ways)", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£40–£80" },
  { item: "Clinic transfers", treatmentOnly: "Not included", veneerPackage: "Included", totalTrip: "£0–£40" },
  { item: "Flights (return, UK to Antalya)", treatmentOnly: "Not included", veneerPackage: "Not included", totalTrip: "£80–£200" },
  { item: "CBCT / X-rays", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Temporaries during lab phase", treatmentOnly: "Included", veneerPackage: "Included", totalTrip: "Included" },
  { item: "Total (approx)", treatmentOnly: "£3,800", veneerPackage: "£4,200–£4,500", totalTrip: "£4,280–£4,720" },
];

const inclusionRows = [
  { item: "Consultation and digital smile design", included: "Yes — always" },
  { item: "X-rays and clinical assessment", included: "Yes — always" },
  { item: "Tooth preparation", included: "Yes — always" },
  { item: "Temporary veneers (during lab phase)", included: "Yes — always" },
  { item: "Permanent veneer fitting and adjustments", included: "Yes — always" },
  { item: "Hotel (veneer package)", included: "Yes — 5–7 nights typically" },
  { item: "Airport transfers (veneer package)", included: "Yes — both directions" },
  { item: "Clinic-to-hotel transfers (veneer package)", included: "Yes — usually" },
  { item: "Flights", included: "No — book separately" },
  { item: "Teeth whitening of remaining natural teeth", included: "Ask — sometimes chargeable" },
  { item: "Emergency UK dental cover post-treatment", included: "Rarely — confirm with clinic" },
];

const faqs = [
  {
    question: "How much do veneers cost in Antalya in 2026?",
    answer: "E-max porcelain veneers in Antalya start from £190 per tooth, zirconia crowns from £130, and composite veneers from £80. A popular 20-tooth E-max smile makeover works out at around £3,800 for treatment alone, or £4,200–£4,500 on an all-inclusive veneer package including hotel and transfers. This compares to £16,000 or more for the same E-max work in the UK.",
  },
  {
    question: "What is included in an Antalya veneer package?",
    answer: "Most Antalya veneer packages include the treatment itself, 5–7 nights' hotel accommodation, airport pickup and return transfer, and clinic-to-hotel transfers during treatment days. Flights are never included — you book these separately from the UK. CBCT scans, temporary veneers, and final fitting are always included in the treatment price regardless of whether you are on a package.",
  },
  {
    question: "Why choose Antalya for veneers rather than Istanbul?",
    answer: "Antalya is the principal destination for UK patients seeking dental treatment in Turkey, with direct flights from most UK airports, a high concentration of specialist dental clinics, and a well-established patient pathway. Istanbul clinics are also excellent, but Antalya typically offers shorter transfer times from the airport to the clinic and a purpose-built dental tourism infrastructure with English-speaking coordinators.",
  },
  {
    question: "How long do I need to stay in Antalya for veneers?",
    answer: "A veneer treatment trip in Antalya typically requires 5–7 days. Day one or two covers consultation, digital smile design and tooth preparation, with temporary veneers fitted on the same day. Days three to five are for the lab to fabricate your permanent veneers. The final appointment on day five or six covers fitting, bonding and any adjustments. Most patients travel home on day six or seven.",
  },
  {
    question: "Are flights included in Antalya veneer package prices?",
    answer: "No. Flights are excluded from every Antalya dental package price. Return flights from UK regional airports (Manchester, Birmingham, Bristol, Edinburgh) to Antalya typically cost £80–£180 on easyJet, Ryanair, TUI or Jet2. From London, expect similar fares. Budget for roughly £100–£200 per person on top of the package price.",
  },
  {
    question: "What is the total cost of getting veneers in Antalya from the UK?",
    answer: "For 20 E-max veneers on an all-inclusive package: roughly £4,280–£4,720 in total including flights. Breaking it down — £3,800 treatment + £400–£600 hotel + £40–£80 airport transfers + £80–£200 flights + £0–£40 incidentals. This compares to £16,000+ in the UK for the same E-max material. See the cost breakdown table above for a full itemisation.",
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
        { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE_URL}/prices/teeth-done-in-turkey-cost` },
        { "@type": "ListItem", position: 3, name: "Veneers Antalya Cost", item: PAGE_URL },
      ],
    },
  ],
};

export default function VeneersAntalyaCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prices", href: "/prices/teeth-done-in-turkey-cost" }, { label: "Veneers Antalya Cost" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Antalya Prices</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            E-max, zirconia and composite veneer prices at Antalya clinics — by tooth count, treatment-only vs package vs total trip cost, and what every price actually includes.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "E-max porcelain veneers in Antalya start from £190 per tooth — vs £800–£1,000 in the UK for the same material.",
              "An all-inclusive veneer package for 20 E-max teeth typically costs £4,200–£4,500 including hotel and transfers (flights extra).",
              "Flights from UK regional airports to Antalya typically add £80–£200 to your total budget.",
              "Antalya is the primary hub for UK dental patients with direct flights from most major UK airports.",
              "A veneer trip requires 5–7 days in Antalya — most treatment is completed in a single visit.",
            ]}
          />

          <p className="text-gray-700 leading-relaxed mb-4 mt-6">
            Antalya is where the majority of UK patients have their dental treatment done in Turkey. The city has a concentrated cluster of specialist dental clinics geared specifically for international patients, direct flights from most UK airports, and 5-star hotels within minutes of the main clinic strip. This page gives you Antalya-specific veneer prices — by material, by tooth count, and broken down into what you actually spend from door to door. For national pricing across all of Turkey, see{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Veneers Turkey Cost</Link>.
          </p>

          <h2 id="antalya-veneer-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Antalya Veneer Prices by Type</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prices at Antalya clinics are consistent with Turkey-wide rates. The table below shows the per-tooth cost for each veneer type, alongside the UK equivalent for comparison.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Veneer Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Antalya Price / Tooth</th>
                  <th className="px-4 py-3 text-left font-semibold">UK Equivalent</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {veneerTypeRows.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.type}</td>
                    <td className="px-4 py-3 font-semibold text-[#1e40af]">{r.pricePerTooth}</td>
                    <td className="px-4 py-3 text-gray-700">{r.ukEquiv}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Important:</strong> &ldquo;Zirconia veneers&rdquo; in Turkey almost always means a full zirconia crown — a unit that covers the entire tooth, not just the front surface. Crowns require significantly more tooth preparation than true veneers. Always confirm in writing which you are being quoted before paying a deposit. See{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">Veneers or Crowns: What&apos;s the Difference?</Link>
          </p>

          <h2 id="by-tooth-count" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Antalya Veneer Prices by Tooth Count</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These are treatment-only prices, applied at the per-tooth rates above. Package prices (including hotel and transfers) are typically £400–£700 higher than the treatment-only figure.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Tooth Count</th>
                  <th className="px-4 py-3 text-left font-semibold">E-max (Antalya)</th>
                  <th className="px-4 py-3 text-left font-semibold">Zirconia (Antalya)</th>
                  <th className="px-4 py-3 text-left font-semibold">Composite (Antalya)</th>
                  <th className="px-4 py-3 text-left font-semibold">E-max (UK)</th>
                </tr>
              </thead>
              <tbody>
                {byCountRows.map((r, i) => (
                  <tr key={r.teeth} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.teeth}</td>
                    <td className="px-4 py-3 font-semibold text-[#1e40af]">{r.emax}</td>
                    <td className="px-4 py-3 text-gray-700">{r.zirconia}</td>
                    <td className="px-4 py-3 text-gray-700">{r.composite}</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">{r.ukEmax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="package-vs-treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package vs Treatment-Only vs Total Trip Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The table below uses 20 E-max veneers as the example. The key difference between columns: <strong>Treatment-Only</strong> = the clinical work charged per tooth; <strong>Veneer Package</strong> = treatment + hotel + transfers bundled; <strong>Total Trip</strong> = the real amount a UK patient spends including flights and incidentals.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Cost Item (20 E-max)</th>
                  <th className="px-4 py-3 text-left font-semibold">Treatment Only</th>
                  <th className="px-4 py-3 text-left font-semibold">Veneer Package</th>
                  <th className="px-4 py-3 text-left font-semibold">Total Trip (UK Patient)</th>
                </tr>
              </thead>
              <tbody>
                {tripCostRows.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : i === tripCostRows.length - 1 ? "bg-blue-50" : "bg-gray-50"}>
                    <td className={`px-4 py-3 ${i === tripCostRows.length - 1 ? "font-bold text-gray-900" : "font-medium text-gray-800"}`}>{r.item}</td>
                    <td className={`px-4 py-3 ${i === tripCostRows.length - 1 ? "font-bold text-[#1e40af]" : "text-gray-700"}`}>{r.treatmentOnly}</td>
                    <td className={`px-4 py-3 ${i === tripCostRows.length - 1 ? "font-bold text-[#1e40af]" : "text-gray-700"}`}>{r.veneerPackage}</td>
                    <td className={`px-4 py-3 ${i === tripCostRows.length - 1 ? "font-bold text-[#1e40af]" : "text-gray-700"}`}>{r.totalTrip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            For a treatment-specific breakdown of veneer package inclusions, see{" "}
            <Link href="/guides/veneers-turkey-packages" className="text-[#1e40af] font-semibold hover:underline">Veneers Turkey Packages: What Is Included?</Link>
          </p>

          <h2 id="whats-included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Is Included and What Is Not</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Cost Item</th>
                  <th className="px-4 py-3 text-left font-semibold">Included?</th>
                </tr>
              </thead>
              <tbody>
                {inclusionRows.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.item}</td>
                    <td className={`px-4 py-3 font-semibold ${r.included.startsWith("Yes") ? "text-green-700" : r.included.startsWith("No") ? "text-red-600" : "text-amber-700"}`}>
                      {r.included}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="treatment-duration" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Duration in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A veneer treatment trip in Antalya follows a consistent timeline:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Day 1:</strong> Arrival in Antalya. Airport transfer to hotel. Rest and orientation.</li>
            <li><strong>Day 2:</strong> Consultation, digital smile design and approval, X-rays, tooth preparation and temporaries fitted.</li>
            <li><strong>Days 3–4:</strong> Lab fabricates your permanent veneers. Free time to enjoy Antalya — the old town, beaches and restaurants are all accessible.</li>
            <li><strong>Day 5:</strong> Permanent veneer fitting, bonding and any adjustments. Final checks and photos.</li>
            <li><strong>Day 6:</strong> Minor adjustments appointment if needed; most patients are cleared to travel.</li>
            <li><strong>Day 6 or 7:</strong> Return flight to UK.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinics with an in-house CAD/CAM lab may complete permanent fittings in 4–5 days. Clinics that outsource to an off-site lab typically require 6–7 days. Confirm the turnaround time with your clinic when booking.
          </p>

          <h2 id="hotel-transfers" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Hotel and Transfers in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most Antalya dental packages place patients in 4 or 5-star hotels in Lara Beach or Konyaalti — the two main coastal districts near the clinic strip. Journey time from Antalya Airport (AYT) to these hotels is 20–35 minutes. Clinic-to-hotel transfers are typically included in packages, with the drive taking 5–15 minutes depending on the clinic location.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standalone hotel costs (not on a package) run approximately £60–£100 per night for a 4-star hotel near the dental district. For 6 nights, budget £360–£600. Package hotel rooms are typically at the lower end of this range due to clinic-negotiated rates.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Direct flights to Antalya operate from most major UK airports: London Gatwick, London Stansted, Manchester, Birmingham, Bristol, Newcastle, Edinburgh and Glasgow. Budget £80–£200 return depending on departure city and booking lead time. For full destination information, see{" "}
            <Link href="/guides/turkey-teeth-antalya" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Antalya: The Complete UK Patient Guide</Link>.
          </p>

          <h2 id="budgeting-antalya" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Total Antalya Trip Budget for Veneers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The table below shows realistic total spend ranges for UK patients across the most common veneer scenarios.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                  <th className="px-4 py-3 text-left font-semibold">Treatment Only</th>
                  <th className="px-4 py-3 text-left font-semibold">Total Trip (incl. flights + hotel)</th>
                  <th className="px-4 py-3 text-left font-semibold">UK Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: "8 E-max veneers", treatment: "£1,520", total: "£1,940–£2,320", uk: "£6,400+" },
                  { scenario: "10 E-max veneers", treatment: "£1,900", total: "£2,320–£2,700", uk: "£8,000+" },
                  { scenario: "16 E-max veneers", treatment: "£3,040", total: "£3,460–£3,840", uk: "£12,800+" },
                  { scenario: "20 E-max veneers (full smile)", treatment: "£3,800", total: "£4,220–£4,600", uk: "£16,000+" },
                  { scenario: "8 zirconia crowns", treatment: "£1,040", total: "£1,460–£1,840", uk: "£8,000+" },
                  { scenario: "20 zirconia crowns", treatment: "£2,600", total: "£3,020–£3,400", uk: "£20,000+" },
                ].map((r, i) => (
                  <tr key={r.scenario} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.scenario}</td>
                    <td className="px-4 py-3 font-semibold text-[#1e40af]">{r.treatment}</td>
                    <td className="px-4 py-3 text-gray-700">{r.total}</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Total trip figures include treatment, 6 nights hotel, return airport transfers, clinic transfers and £80–£200 flights. Individual costs vary; get an itemised quote to confirm your specific treatment plan.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Veneers Antalya Cost: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />
        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Antalya: The Complete UK Patient Guide", desc: "What to expect in Antalya — clinics, hotels, travel and treatment timeline.", href: "/guides/turkey-teeth-antalya" },
            { title: "Veneers Turkey Cost: National Price Guide", desc: "UK-wide Turkey veneer prices — per tooth, by count, inclusions and exclusions.", href: "/prices/veneers-turkey-cost" },
            { title: "Best Veneers in Turkey: E-max vs Zirconia Compared", desc: "Which type of veneer gives the best result and at what cost.", href: "/guides/best-veneers-turkey" },
            { title: "Veneers Turkey Packages: What Is Included?", desc: "What veneer packages include vs what you still need to budget for.", href: "/guides/veneers-turkey-packages" },
            { title: "Turkish Veneers Safety Guide", desc: "Risks, red flags and how to protect yourself when getting veneers in Turkey.", href: "/guides/turkish-veneers-safety" },
          ]}
        />
      </div>

      <CTASection
        title="Get Your Personalised Antalya Veneer Quote"
        subtitle="Tell us how many teeth and which material — we'll send a written, itemised quote for Antalya treatment, package options and your monthly payment option."
        buttonText="Get My Free Antalya Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
