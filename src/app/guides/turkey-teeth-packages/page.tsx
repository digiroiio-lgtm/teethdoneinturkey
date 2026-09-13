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
const PAGE_URL = `${SITE_URL}/guides/turkey-teeth-packages`;
const TITLE = "Turkey Teeth Packages: What Is Included and What Does It Really Cost?";
const H1 = "Turkey Teeth Packages: What Is Actually Included and What Does It Cost?";
const DESCRIPTION =
  "Package price is not the same as total cost. This guide explains exactly what Turkey dental packages include, what they leave out, and what to check before you book.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-packages" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "package-vs-treatment", label: "Package Price vs Treatment Price" },
  { id: "whats-included", label: "What Is Usually Included?" },
  { id: "inclusions-table", label: "Package Inclusions Table" },
  { id: "what-to-check", label: "What to Check Before Booking" },
  { id: "red-flags", label: "Red Flags to Watch For" },
  { id: "total-cost", label: "Package Price vs Real Total Cost" },
  { id: "faqs", label: "FAQs" },
];

const inclusionsRows = [
  { item: "Dental treatment (crowns, veneers, implants)", included: "Yes — always" },
  { item: "Hotel accommodation", included: "Often (confirm nights included)" },
  { item: "Airport pickup transfer", included: "Often" },
  { item: "Airport return transfer", included: "Often" },
  { item: "Clinic-to-hotel transfers during treatment", included: "Usually" },
  { item: "Flights", included: "No — booked separately" },
  { item: "CBCT / cone beam CT scan", included: "Depends — often separate for implants" },
  { item: "Sedation / IV sedation", included: "Depends — usually chargeable" },
  { item: "Second visit (implant crown fitting)", included: "Often not — confirm explicitly" },
  { item: "Aftercare support (UK-based)", included: "Depends on clinic/provider" },
  { item: "Emergency dental cover (UK)", included: "Rarely included — ask" },
];

const faqs = [
  {
    question: "What does a Turkey dental package include?",
    answer: "Most Turkey dental packages include the treatment itself, hotel accommodation for the treatment stay, and airport and clinic transfers. Flights are almost never included. CBCT scans for implant planning are sometimes charged separately. The second visit for implant patients (crown fitting after the healing period) may or may not be included — always confirm in writing before booking.",
  },
  {
    question: "Are flights included in Turkey dental packages?",
    answer: "No. Flights are almost universally excluded from Turkey dental package prices. You book flights separately. Return flights from UK cities to Antalya typically cost £80–£180 on budget carriers such as easyJet, Ryanair, Jet2 and TUI.",
  },
  {
    question: "Why is the package price lower than adding up the items myself?",
    answer: "Clinics bundle hotel and transfers into packages partly because they have negotiated rates with local hotels and transfer companies. It is genuinely better value than booking components separately. However, the bundling can make it harder to see what each element costs, which is why it is important to get an itemised breakdown before accepting a quote.",
  },
  {
    question: "What should I always ask about before booking a Turkey dental package?",
    answer: "Ask specifically: how many hotel nights are included; whether airport transfers (both ways) are included; whether a CBCT scan is included or charged separately; whether the second visit (for implant patients) is included in the original price; and what aftercare support is available once you return to the UK. Get all of this confirmed in writing.",
  },
  {
    question: "What are the red flags with Turkey dental packages?",
    answer: "Red flags include: vague or verbal-only confirmations of inclusions; pressure to sign or pay a deposit before you receive a written treatment plan; package prices that don't specify the implant brand or crown material; no clear process for UK-based aftercare; and clinics that cannot provide verifiable before-and-after patient photos or independent reviews.",
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
        { "@type": "ListItem", position: 3, name: "Turkey Teeth Packages", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkeyTeethPackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Turkey Teeth Packages" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A &ldquo;package price&rdquo; is not the same as what you will actually spend. This guide breaks down what Turkey dental packages typically include, what they leave out, and what questions to ask before you commit.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Package price almost never includes flights — book these separately.",
              "Hotel and airport transfers are often included, but confirm the number of nights and both directions of the airport transfer.",
              "CBCT scans for implant patients are sometimes charged separately (£60–£120) even when not flagged in the package price.",
              "The second visit for implant patients (crown fitting after healing) may or may not be included — always confirm in writing.",
              "Get a written itemised quote before paying any deposit.",
            ]}
          />

          <h2 id="package-vs-treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package Price vs Treatment Price</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most important distinction to understand before comparing Turkey dental quotes is this: the <strong>treatment price</strong> is what the clinic charges for the dental work itself — the crowns, veneers, implants and restorations. The <strong>package price</strong> bundles treatment with some travel and accommodation elements. Neither is the same as your <strong>total trip cost</strong>, which also includes flights (almost never in a package), any uncovered extras, and — for implant patients — the cost of a second trip.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full breakdown of everything you actually spend from door to door, see{" "}
            <Link href="/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" className="text-[#1e40af] font-semibold hover:underline">How Much Does It Cost to Get Your Teeth Done in Turkey?</Link>
          </p>

          <h2 id="whats-included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Is Usually Included in a Turkey Dental Package?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most reputable Turkey dental packages include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Dental treatment</strong> — the agreed number of crowns, veneers or implants, with specified materials.</li>
            <li><strong>Hotel accommodation</strong> — typically 3–7 nights depending on treatment type. Confirm the number of nights — it varies.</li>
            <li><strong>Airport transfers</strong> — pickup on arrival and drop-off for departure. Confirm both directions.</li>
            <li><strong>Clinic transfers</strong> — transport between hotel and clinic during treatment days.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            What packages almost never include: flights, sedation, additional scans, second-visit costs for implant patients, or aftercare coverage in the UK.
          </p>

          <h2 id="inclusions-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package Inclusions: What to Expect</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Package Item</th>
                  <th className="px-4 py-3 text-left font-semibold">Usually Included?</th>
                </tr>
              </thead>
              <tbody>
                {inclusionsRows.map((r, i) => (
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

          <h2 id="what-to-check" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What to Check Before Booking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before paying any deposit, ask your clinic or treatment coordinator to confirm the following in writing:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Exactly how many teeth are included in the quoted price and which material (e.g., zirconia, E-max).</li>
            <li>How many hotel nights are included and the name of the hotel.</li>
            <li>Whether airport pickup and return are both included.</li>
            <li>Whether a CBCT scan is included or charged separately.</li>
            <li>For implant patients: whether the second visit (crown fitting) is included in the original quote.</li>
            <li>What aftercare support is available once you return to the UK.</li>
            <li>The implant brand (e.g., Straumann, Nobel Biocare, MIS) if implants are part of your treatment.</li>
          </ol>

          <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Red Flags to Watch For</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most Turkey dental providers are reputable, but knowing what to look for helps you avoid the minority that are not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Package inclusions confirmed verbally but not in any written quote or treatment plan.</li>
            <li>Pressure to pay a deposit before you receive a written treatment plan with specified materials.</li>
            <li>No clear information on the implant brand or crown/veneer material used.</li>
            <li>No verifiable patient reviews or before-and-after photos independent of the clinic&apos;s own website.</li>
            <li>No named UK-based point of contact for aftercare queries once you return home.</li>
          </ul>

          <h2 id="total-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package Price vs Real Total Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A package quoted at £4,500 for a full veneer makeover will typically cost a UK patient £4,800–£5,200 in total once flights and any incidentals are added. For implant patients whose second visit is not included, add another £250–£500 to the total.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The gap between package price and total cost is not a trick — it is simply how package pricing works. As long as you account for it in your budgeting, the total cost of Turkey dental treatment remains significantly lower than comparable UK private treatment.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Dental Packages: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "How Much Does It Cost to Get Your Teeth Done in Turkey?", desc: "Total trip cost guide: treatment, flights, hotel and transfers.", href: "/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" },
            { title: "Veneers Turkey Packages: What Is Included?", desc: "Veneer-specific package breakdown — treatment-only vs package vs total trip, by tooth count.", href: "/guides/veneers-turkey-packages" },
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Treatment-only prices: veneers, crowns, implants and full mouth.", href: "/prices/turkey-teeth-cost" },
            { title: "Antalya Teeth Prices", desc: "Location-specific cost guide for UK patients travelling to Antalya.", href: "/guides/antalya-teeth-prices" },
            { title: "Free Treatment Plan", desc: "Get a written, itemised quote with all inclusions confirmed.", href: "/free-treatment-plan" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Written Package Quote"
        subtitle="We'll send a personalised treatment plan with all inclusions itemised — treatment, hotel, transfers and your monthly payment option."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
