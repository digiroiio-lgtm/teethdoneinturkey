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
const PAGE_URL = `${SITE_URL}/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey`;
const TITLE = "How Much Does It Cost to Get Your Teeth Done in Turkey? Complete UK Cost Guide 2026";
const H1 = "How Much Does It Cost to Get Your Teeth Done in Turkey?";
const DESCRIPTION =
  "Total UK patient cost guide: treatment, flights, hotel, transfers, scans and second-visit costs — everything you actually spend from door to door.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "treatment-cost", label: "Treatment Cost" },
  { id: "flights", label: "Flights from UK Cities" },
  { id: "hotel", label: "Hotel & Accommodation" },
  { id: "transfers", label: "Airport & Clinic Transfers" },
  { id: "consultation-scans", label: "Consultation, X-rays & Scans" },
  { id: "second-visit", label: "Implant Patients: Second Visit" },
  { id: "total-cost-table", label: "Total Cash Cost Examples" },
  { id: "financed-cost", label: "Financed Cost & Monthly Payments" },
  { id: "faqs", label: "FAQs" },
];

const totalCostRows = [
  { scenario: "Veneers (8 teeth) — London departure", treatment: "£1,600", flights: "£120", hotel: "£180 (3 nights)", transfers: "£40", scans: "Included", second: "—", total: "~£1,940" },
  { scenario: "Veneers (20 teeth) — Manchester departure", treatment: "£3,800", flights: "£140", hotel: "£240 (4 nights)", transfers: "£40", scans: "Included", second: "—", total: "~£4,220" },
  { scenario: "Single implant — London departure", treatment: "£500", flights: "£120", hotel: "£120 (2 nights)", transfers: "£40", scans: "£60", second: "£280 (flights+hotel)", total: "~£1,120" },
  { scenario: "All-on-4 (both arches) — any UK city", treatment: "£9,000", flights: "£280", hotel: "£360 (6 nights)", transfers: "£80", scans: "£100", second: "£560 (flights+hotel)", total: "~£10,380" },
];

const faqs = [
  {
    question: "How much does it cost to go to Turkey and get my teeth done?",
    answer: "Total cost depends on your treatment. For a veneer makeover (8–20 teeth), most UK patients spend £1,900–£4,500 including flights, hotel and transfers. For All-on-4 implants on both arches, total spend including two trips is typically £10,000–£12,000. The treatment itself is usually 65–80% of the total; travel and accommodation add roughly 5–15%.",
  },
  {
    question: "Are flights included in Turkey dental packages?",
    answer: "Flights are almost never included in Turkey dental packages. Package prices cover treatment, and often hotel and transfers, but flights are booked separately. Budget airlines (easyJet, Ryanair, TUI) fly to Antalya from most UK airports. Return flights typically cost £80–£180 per person depending on season and departure city.",
  },
  {
    question: "Do I need to make two trips to Turkey for dental implants?",
    answer: "For dental implants, yes — standard protocol requires a first visit for extraction and implant placement, then a healing period of 3–6 months, followed by a second visit for crown fitting. Each visit involves separate flights and accommodation. All-on-4 and All-on-6 patients receive temporary teeth on the first visit so you are never without teeth.",
  },
  {
    question: "How much should I budget for hotel in Antalya?",
    answer: "Partner clinic hotels cost £40–£80 per night per room. A veneer patient staying 3–4 nights spends £120–£320 on accommodation. Implant patients making two trips will spend twice that. Some packages include hotel; confirm before booking.",
  },
  {
    question: "Are X-rays and CT scans included in the treatment price?",
    answer: "For veneer and crown treatments, consultation and standard X-rays are typically included. CBCT (cone beam CT) scans for implant planning sometimes carry an additional charge of £60–£120. Always confirm what is included in your quote before travelling.",
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
        { "@type": "ListItem", position: 3, name: "How Much Does It Cost to Get Your Teeth Done in Turkey", item: PAGE_URL },
      ],
    },
  ],
};

export default function HowMuchDoesItCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Total Cost to Get Teeth Done in Turkey" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Treatment price is only part of the cost. This guide covers everything a UK patient spends from leaving home to returning — flights, hotel, transfers, scans and second-visit costs for implant patients.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            For a veneer makeover, total spend including flights, hotel and transfers is typically <strong>£1,900–£4,500</strong>. For All-on-4 dental implants on both arches with two visits, total spend is typically <strong>£10,000–£12,500</strong>. The treatment itself is usually 75–85% of the total cost; the remainder is travel and accommodation. Flights are almost never included in package prices.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Treatment cost is usually 75–85% of what you actually spend. Flights, hotel and transfers add 10–20%.",
              "Flights from UK cities to Antalya cost £80–£180 return per person on budget carriers.",
              "Hotel costs £40–£80 per night near partner clinics; most veneer patients stay 3–5 nights.",
              "Implant patients need two visits — the second trip adds roughly £280–£560 to total spend.",
              "CBCT (CT) scans may carry an additional charge of £60–£120 on top of quoted treatment prices.",
              "Financed treatment spreads the total into monthly payments from around £53/month on a 36-month plan.",
            ]}
          />

          <h2 id="treatment-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The treatment price is what the clinic charges for the dental work itself — crowns, veneers, implant fixtures, abutments, final restorations. This is the figure quoted in packages and on price lists. For a detailed breakdown by treatment type, see the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Cost: Complete 2026 Price Guide</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a reference: porcelain veneers typically cost £190–£250 per tooth in Turkey; a single dental implant with crown £420–£600; All-on-4 per arch from £4,500; All-on-6 per arch from £5,600. These are treatment-only figures — everything below covers what you add to reach a full trip cost.
          </p>

          <h2 id="flights" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Flights from UK Cities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya Airport (AYT) has direct flights from most UK airports year-round. Budget airlines including easyJet, Ryanair, TUI and Jet2 all operate this route. Return flight costs:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>London Gatwick / Stansted:</strong> £80–£140 return (off-peak), £140–£220 (summer peak)</li>
            <li><strong>Manchester:</strong> £100–£160 return (off-peak), £160–£240 (summer peak)</li>
            <li><strong>Edinburgh / Glasgow:</strong> £120–£180 return, often with one stop</li>
            <li><strong>Birmingham / Bristol:</strong> £90–£150 return</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Travelling outside July–August typically saves £40–£80 per person. Flight time is approximately 4 hours from London, 4.5 hours from Manchester.
          </p>

          <h2 id="hotel" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Hotel &amp; Accommodation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Partner clinics are based in the Antalya region. Hotel costs near clinics run £40–£80 per room per night. Most veneer and crown patients stay 3–5 nights; implant patients typically need 5–7 nights on the first visit to allow post-surgical healing and review. Some packages include accommodation — confirm this before booking.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A typical accommodation budget per visit: <strong>£120–£400</strong> (3–5 nights at £40–£80/night).
          </p>

          <h2 id="transfers" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Airport &amp; Clinic Transfers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many packages include airport pickup and return transfer. When not included, a private airport transfer to the clinic area costs £15–£30 each way. Clinic transfers during treatment (between hotel and clinic) are often provided by the clinic at no charge. Budget £30–£60 total per visit if transfers are not included in your package.
          </p>

          <h2 id="consultation-scans" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Consultation, X-rays &amp; Scans</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Initial consultation and standard dental X-rays are included in treatment quotes for veneer and crown cases. For implant planning, a CBCT (cone beam CT) scan is required and sometimes carries an additional charge. Confirm with your clinic whether the CBCT fee is included — it typically costs £60–£120 when charged separately.
          </p>

          <h2 id="second-visit" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Patients: Second Visit Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dental implants require osseointegration — the implant post fuses to the jawbone over 3–6 months. This makes two separate trips to Turkey necessary. The second visit (for crown fitting) involves:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Return flights: £80–£180</li>
            <li>Hotel (2–3 nights): £80–£240</li>
            <li>Transfers: £30–£60</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Add £200–£480 to your total budget for the second visit. All-on-4 and All-on-6 patients receive temporary teeth on the first visit and return for their final permanent teeth on the second.
          </p>

          <h2 id="total-cost-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Total Cash Cost Examples</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The table below shows realistic total spend for common treatment scenarios, based on mid-range flights and accommodation costs. Figures are approximate — actual costs vary by season, departure city and package inclusions.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                  <th className="px-4 py-3 text-right font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">Flights</th>
                  <th className="px-4 py-3 text-right font-semibold">Hotel</th>
                  <th className="px-4 py-3 text-right font-semibold">Transfers</th>
                  <th className="px-4 py-3 text-right font-semibold">2nd Visit</th>
                  <th className="px-4 py-3 text-right font-semibold font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {totalCostRows.map((r, i) => (
                  <tr key={r.scenario} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.scenario}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.flights}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.hotel}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.transfers}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.second}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="financed-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Financed Cost &amp; Monthly Payment Examples</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rather than paying the full cash cost upfront, 0% representative APR finance is available for treatment booked through this site. Monthly payments start from around £53/month on a 36-month plan for a £1,900 total. For a £4,200 total trip cost, monthly payments on a 36-month plan would be approximately £117/month.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For treatment-by-treatment monthly figures, see{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">How Much Are Turkey Teeth Per Month?</Link>{" "}
            or use the{" "}
            <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">Price Calculator</Link>{" "}
            to build your own estimate.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Total Cost of Getting Teeth Done in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            { label: "CAA: UK airport route data", href: "https://www.caa.co.uk/data-and-analysis/uk-aviation-market/airports/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Treatment-only prices: veneers, crowns, implants and full mouth.", href: "/prices/turkey-teeth-cost" },
            { title: "Turkey Teeth Packages", desc: "What is and isn't included in a Turkey dental package.", href: "/guides/turkey-teeth-packages" },
            { title: "How Much Are Turkey Teeth Per Month?", desc: "Monthly payment examples for common treatment totals.", href: "/monthly-payment" },
            { title: "Price Calculator", desc: "Build a personalised estimate across multiple treatments.", href: "/price-calculator" },
          ]}
        />
      </div>

      <CTASection
        title="Get Your Full Cost Estimate"
        subtitle="Tell us what you need and we'll send a free personalised treatment plan with an itemised cost and monthly payment breakdown."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
