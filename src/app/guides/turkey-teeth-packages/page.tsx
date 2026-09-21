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
const TITLE = "Turkey Teeth Packages: What's Included & 2026 Prices";
const H1 = "Turkey Teeth Packages: What Is Actually Included and What Does It Cost?";
const DESCRIPTION =
  "Turkey teeth packages from £2,800 all-inclusive. What is included, what is not, 2026 package prices in pounds and monthly payment examples for UK patients.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-21";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-packages" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "package-vs-treatment", label: "Package Price vs Treatment Price" },
  { id: "package-prices", label: "How Much Do Turkey Teeth Packages Cost?" },
  { id: "pay-monthly", label: "Can You Pay Monthly for a Package?" },
  { id: "whats-included", label: "What Is Usually Included?" },
  { id: "inclusions-table", label: "Package Inclusions Table" },
  { id: "what-to-check", label: "What to Check Before Booking" },
  { id: "red-flags", label: "Red Flags to Watch For" },
  { id: "total-cost", label: "Package Price vs Real Total Cost" },
  { id: "faqs", label: "FAQs" },
];

const packagePriceRows = [
  { pkg: "Hollywood Smile — 20 zirconia crowns", price: "£2,800", inc: "Hotel + transfers included", uk: "£20,000–£30,000", monthly: "From £78/mo" },
  { pkg: "Hollywood Smile — 24 zirconia crowns", price: "£3,100", inc: "Hotel + transfers + cleaning", uk: "£24,000–£36,000", monthly: "From £86/mo" },
  { pkg: "Full Smile Makeover", price: "From £3,500", inc: "Hotel + transfers included", uk: "£12,000+", monthly: "From £97/mo" },
  { pkg: "Full set of 20 E-max porcelain veneers", price: "From £3,800", inc: "Priced per tooth from £190", uk: "£16,000–£20,000", monthly: "From £106/mo" },
  { pkg: "All-on-4 — per arch", price: "From £4,500", inc: "Hotel + transfers included", uk: "£15,000+", monthly: "From £125/mo" },
  { pkg: "All-on-6 — per arch", price: "From £5,600", inc: "Hotel + transfers + temporary teeth", uk: "£15,000–£22,000", monthly: "From £156/mo" },
];

const scenarioTerms = [
  { term: "6 months", monthly: "£383.33", repayable: "£2,300" },
  { term: "12 months", monthly: "£191.67", repayable: "£2,300" },
  { term: "18 months", monthly: "£127.78", repayable: "£2,300" },
  { term: "24 months", monthly: "£95.83", repayable: "£2,300" },
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
    question: "How much do Turkey teeth packages cost?",
    answer: "On this site, all-inclusive Turkey teeth packages start at £2,800 for a 20-crown zirconia Hollywood Smile and £3,100 for 24 crowns, both including hotel and airport transfers. Full-arch implant packages start at £4,500 per arch for All-on-4 and £5,600 per arch for All-on-6. A full set of 20 E-max porcelain veneers is priced per tooth from £190, so roughly £3,800. Flights are not included in any of these figures.",
  },
  {
    question: "Can you pay monthly for a Turkey teeth package?",
    answer: "Yes — packages can be split into a deposit plus monthly payments, with 0% APR representative available on qualifying plans over 12, 24 or 36 months. As an illustration, a £2,800 package with a £500 deposit leaves £2,300 to finance, which is £191.67 a month over 12 months or £95.83 a month over 24 months at 0% APR representative. These are example calculations, not a credit offer: all finance is subject to a credit check and to the provider’s approval, and not everyone will qualify.",
  },
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
              "All-inclusive Turkey teeth packages on this site start from £2,800 (20 zirconia crowns, hotel and transfers included); full-arch implant packages start from £4,500 per arch.",
              "Packages can be paid monthly — from around £78/month over 36 months on a £2,800 package — subject to a credit check and lender approval.",
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

          <h2 id="package-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Much Do Turkey Teeth Packages Cost?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-inclusive Turkey teeth packages on this site start at <strong>£2,800</strong> for a 20-crown zirconia Hollywood Smile with hotel and airport transfers included, and <strong>£3,100</strong> for the 24-crown version. Full-arch implant packages are priced per arch: <strong>All-on-4 from £4,500</strong> and <strong>All-on-6 from £5,600</strong>, both all-inclusive. A full set of 20 E-max porcelain veneers is priced per tooth from £190 rather than as a bundle, so roughly £3,800. <strong>Flights are not included in any of these figures.</strong>
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Package</th>
                  <th className="px-4 py-3 text-left font-semibold">Turkey Price</th>
                  <th className="px-4 py-3 text-left font-semibold">Package Includes</th>
                  <th className="px-4 py-3 text-left font-semibold">UK Private</th>
                  <th className="px-4 py-3 text-left font-semibold">Monthly (36 mo)</th>
                </tr>
              </thead>
              <tbody>
                {packagePriceRows.map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.pkg}</td>
                    <td className="px-4 py-3 font-bold text-[#1e40af] whitespace-nowrap">{r.price}</td>
                    <td className="px-4 py-3 text-gray-600">{r.inc}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{r.uk}</td>
                    <td className="px-4 py-3 font-semibold text-green-700 whitespace-nowrap">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Turkey prices are this site&apos;s published 2026 package prices. Monthly figures are the package total divided across 36 months at 0% APR representative, shown for comparison only — they are not a quotation and are subject to eligibility and lender approval. For the full treatment-by-treatment price list, see{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost: the complete 2026 price guide</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Two package price pages give the full inclusion list for the most-requested options:{" "}
            <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-semibold hover:underline">the Hollywood Smile zirconia crown package</Link>{" "}
            and{" "}
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="text-[#1e40af] font-semibold hover:underline">the All-on-6 full-arch implant package</Link>.
          </p>

          <h2 id="pay-monthly" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Can You Pay Monthly for a Turkey Teeth Package?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yes. A package is normally split into a deposit paid at booking and a balance spread over monthly instalments, with 0% APR representative available on qualifying plans over 12, 24 or 36 months. What you pay each month is decided by two things only: the package total and the term you choose. At 0% APR a longer term divides the same total across more months rather than adding interest to it.
          </p>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 my-6">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-800 mb-3">Example Treatment Scenario — illustrative, not a quotation</p>
            <ul className="text-gray-800 text-sm space-y-1 mb-4">
              <li><strong>Package:</strong> Hollywood Smile, 20 zirconia crowns, hotel and transfers included</li>
              <li><strong>Package price:</strong> £2,800</li>
              <li><strong>Deposit at booking:</strong> £500</li>
              <li><strong>Balance to finance:</strong> £2,300</li>
            </ul>
            <div className="overflow-x-auto rounded-xl ring-1 ring-amber-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-100 text-amber-900">
                    <th className="px-4 py-2 text-left font-semibold">Term</th>
                    <th className="px-4 py-2 text-left font-semibold">Example monthly payment</th>
                    <th className="px-4 py-2 text-left font-semibold">Total repayable</th>
                  </tr>
                </thead>
                <tbody>
                  {scenarioTerms.map((t, i) => (
                    <tr key={t.term} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/50"}>
                      <td className="px-4 py-2 font-medium text-gray-800">{t.term}</td>
                      <td className="px-4 py-2 font-bold text-[#1e40af]">{t.monthly}</td>
                      <td className="px-4 py-2 text-gray-700">{t.repayable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Figures are an example calculation on a £2,300 balance at <strong>0% APR representative</strong>, where total repayable equals the amount financed. This is <strong>not a credit offer and not a quotation</strong>. Finance is arranged through a third-party provider, is subject to a credit check and to that provider&apos;s own lending criteria and approval, and <strong>not everyone will qualify</strong>. Your own deposit, term, APR and total repayable are confirmed by the provider before you commit to anything.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            For the monthly figure attached to each individual treatment rather than to a package, see{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">what Turkey teeth cost per month</Link>. For how dental payment plans, dental loans and bad-credit applications actually work in the UK, see{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">UK dental finance options</Link>.
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
            { title: "Hollywood Smile Turkey Package", desc: "20 or 24 zirconia crowns from £2,800 — full inclusion list and what is chargeable.", href: "/prices/hollywood-smile-turkey-package" },
            { title: "All-on-6 Turkey Package", desc: "Full-arch implant package from £5,600 — implants, temporary and final teeth, hotel, transfers.", href: "/prices/all-on-6-dental-implants-turkey-package" },
            { title: "Turkey Teeth Monthly Payments", desc: "What each treatment and package costs per month, and over which terms.", href: "/monthly-payment" },
            { title: "UK Dental Finance Options", desc: "Payment plans, dental loans and what happens if you have bad credit.", href: "/finance-options-uk" },
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
