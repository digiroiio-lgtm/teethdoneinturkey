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
const TITLE = "Turkey Teeth Packages 2026: Prices & What Is Included";
const H1 = "Turkey Teeth Packages: 2026 Prices and What Is Actually Included";
const DESCRIPTION =
  "Turkey teeth package prices for UK patients in 2026 — from £2,800 for 20 zirconia crowns to £5,600 All-on-6, with what each package includes and excludes.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-20";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-packages" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "package-prices", label: "Turkey Teeth Package Prices 2026" },
  { id: "package-vs-treatment", label: "Package Price vs Treatment Price" },
  { id: "each-package", label: "What Is in Each Package?" },
  { id: "whats-included", label: "What Is Usually Included?" },
  { id: "inclusions-table", label: "Package Inclusions Table" },
  { id: "pay-monthly", label: "Paying for a Package Monthly" },
  { id: "what-to-check", label: "What to Check Before Booking" },
  { id: "red-flags", label: "Red Flags to Watch For" },
  { id: "total-cost", label: "Package Price vs Real Total Cost" },
  { id: "faqs", label: "FAQs" },
];

// Package prices are the figures published across this site's own treatment and
// price pages. Treatment-only equivalents are the same site's per-tooth rates
// multiplied by the tooth count, which is why a bundled package can undercut
// the sum of its parts (see the FAQ on bundling).
const packageRows = [
  {
    name: "Hollywood Smile — 20 zirconia crowns",
    covers: "20 zirconia crowns, hotel, VIP transfers, smile design consultation",
    packagePrice: "From £2,800",
    treatmentOnly: "≈ £2,600 (20 × £130)",
    stay: "5 nights, 1 trip",
    href: "/prices/hollywood-smile-turkey-package",
  },
  {
    name: "Hollywood Smile — 24 zirconia crowns",
    covers: "24 zirconia crowns, hotel, VIP transfers, digital smile design, professional cleaning",
    packagePrice: "From £3,100",
    treatmentOnly: "≈ £3,120 (24 × £130)",
    stay: "5 nights, 1 trip",
    href: "/prices/hollywood-smile-turkey-package",
  },
  {
    name: "Veneer package — 10 E-max veneers",
    covers: "10 E-max veneers, hotel, airport and clinic transfers",
    packagePrice: "£2,300–£2,500",
    treatmentOnly: "From £1,900 (10 × £190)",
    stay: "5–7 nights, 1 trip",
    href: "/guides/veneers-turkey-packages",
  },
  {
    name: "Veneer package — 20 E-max veneers",
    covers: "20 E-max veneers (full smile), hotel, airport and clinic transfers",
    packagePrice: "£4,200–£4,500",
    treatmentOnly: "From £3,800 (20 × £190)",
    stay: "5–7 nights, 1 trip",
    href: "/guides/veneers-turkey-packages",
  },
  {
    name: "Full smile makeover",
    covers: "Veneers (typically 16–20 teeth), whitening and gum contouring, hotel, transfers",
    packagePrice: "From £3,500",
    treatmentOnly: "Varies by tooth count and material",
    stay: "5–7 nights, 1 trip",
    href: "/treatments/full-smile-makeover-turkey",
  },
  {
    name: "All-on-4 — per arch",
    covers: "4 implants, fixed full-arch bridge, hotel, transfers",
    packagePrice: "From £4,500",
    treatmentOnly: "Quoted as a package, not per implant",
    stay: "Two trips (implants, then final teeth)",
    href: "/treatments/all-on-4-turkey",
  },
  {
    name: "All-on-6 — per arch",
    covers: "6 implants, temporary and final teeth, hotel for both visits, VIP transfers",
    packagePrice: "From £5,600",
    treatmentOnly: "Quoted as a package, not per implant",
    stay: "Two trips (3 nights, then 5 nights)",
    href: "/prices/all-on-6-dental-implants-turkey-package",
  },
];

// 0% APR representative. At 0% APR the monthly figure is simply the financed
// balance divided by the term, and the total repayable equals the balance.
const financedBalance = 3500;
const paymentTerms = [6, 12, 18, 24, 36];

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
    question: "How much is a Turkey teeth package?",
    answer: "Turkey dental packages on this site start from £2,800 for 20 zirconia crowns and £3,100 for 24 crowns, both including hotel and airport transfers. E-max veneer packages run from £2,300–£2,500 for 10 teeth to £4,200–£4,500 for a full 20-tooth smile. Full-arch implant packages are £4,500 per arch for All-on-4 and £5,600 per arch for All-on-6. Flights are not included in any of these figures — budget £80–£200 for a return flight from the UK.",
  },
  {
    question: "What does a Turkey dental package include?",
    answer: "Most Turkey dental packages include the treatment itself, hotel accommodation for the treatment stay, and airport and clinic transfers. Flights are almost never included. CBCT scans for implant planning are sometimes charged separately. The second visit for implant patients (crown fitting after the healing period) may or may not be included — always confirm in writing before booking.",
  },
  {
    question: "Are flights included in Turkey dental packages?",
    answer: "No. Flights are almost universally excluded from Turkey dental package prices. You book flights separately. Return flights from UK cities to Antalya typically cost £80–£200 on budget carriers such as easyJet, Ryanair, Jet2 and TUI.",
  },
  {
    question: "Can you pay monthly for a Turkey teeth package?",
    answer: "Yes — package treatment can be spread over monthly instalments, typically after a deposit. On a £4,500 package with a £1,000 deposit, the remaining £3,500 works out at approximately £97 a month over 36 months or £146 a month over 24 months at 0% APR representative. These are example calculations, not a credit offer: finance is subject to status, a credit check and lender approval, and not everyone will qualify.",
  },
  {
    question: "Why is the package price lower than adding up the items myself?",
    answer: "Clinics bundle hotel and transfers into packages partly because they have negotiated rates with local hotels and transfer companies. It is genuinely better value than booking components separately, and on some packages the bundled price is below the per-tooth rate multiplied by the tooth count. The bundling can make it harder to see what each element costs, which is why it is important to get an itemised breakdown before accepting a quote.",
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
    // No FAQPage node here on purpose: <FAQSection> already emits a
    // server-rendered FAQPage for the same questions, and two FAQPage nodes on
    // one URL is a duplicate, not extra coverage.
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
            What every Turkey dental package costs, what is bundled into that price, and what you still pay for on top.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mb-2 scroll-mt-24">Quick Answer: How Much Are Turkey Teeth Packages?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Turkey teeth packages start from <strong>£2,800</strong> for 20 zirconia crowns and <strong>£3,100</strong> for 24 crowns, both including hotel and airport transfers. E-max veneer packages run from <strong>£2,300–£2,500</strong> for 10 teeth up to <strong>£4,200–£4,500</strong> for a full 20-tooth smile. Full-arch implant packages are <strong>£4,500 per arch</strong> for All-on-4 and <strong>£5,600 per arch</strong> for All-on-6. Flights are not included in any package price — add £80–£200 for a return flight from the UK.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Package prices start at £2,800 (20 zirconia crowns) and £2,300 (10 E-max veneers), both including hotel and transfers.",
              "Full-arch implant packages are £4,500 per arch (All-on-4) and £5,600 per arch (All-on-6), and normally need two trips.",
              "Package price almost never includes flights — budget £80–£200 return and book these separately.",
              "CBCT scans for implant patients are sometimes charged separately (£60–£120) even when not flagged in the package price.",
              "The second visit for implant patients (crown fitting after healing) may or may not be included — always confirm in writing.",
              "Packages can be paid monthly after a deposit — subject to status, credit check and lender approval.",
            ]}
          />

          <h2 id="package-prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Turkey Teeth Package Prices 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These are the package prices published across this site, set against the treatment-only equivalent so you can see exactly what the bundle is adding. Every figure is a package price per the inclusions listed — not a per-tooth rate.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Package</th>
                  <th className="px-4 py-3 text-left font-semibold">What the price covers</th>
                  <th className="px-4 py-3 text-right font-semibold">Package price</th>
                  <th className="px-4 py-3 text-right font-semibold">Treatment only</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical stay</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={r.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">
                      <Link href={r.href} className="text-[#1e40af] font-semibold hover:underline">{r.name}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{r.covers}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold whitespace-nowrap">{r.packagePrice}</td>
                    <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">{r.treatmentOnly}</td>
                    <td className="px-4 py-3 text-gray-700">{r.stay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Prices as published on this site at {DATE_MODIFIED} and quoted in GBP for UK patients. Your own quote depends on a clinical assessment — the number of teeth actually treatable, the material chosen and whether any preparatory work (extractions, bone grafting, sinus lift) is needed. For per-treatment and per-tooth pricing rather than package pricing, see{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">the Turkey teeth cost guide</Link>.
          </p>

          <h2 id="package-vs-treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Package Price vs Treatment Price</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most important distinction to understand before comparing Turkey dental quotes is this: the <strong>treatment price</strong> is what the clinic charges for the dental work itself — the crowns, veneers, implants and restorations. The <strong>package price</strong> bundles treatment with some travel and accommodation elements. Neither is the same as your <strong>total trip cost</strong>, which also includes flights (almost never in a package), any uncovered extras, and — for implant patients — the cost of a second trip.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full breakdown of everything you actually spend from door to door, see the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost guide</Link>.
          </p>

          <h2 id="each-package" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Is in Each Package?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Packages differ by treatment type, not just by price. These are the four package families UK patients are usually choosing between:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Crown (Hollywood Smile) packages</strong> — 20 or 24 full-contour zirconia crowns with hotel, VIP transfers and smile design. One trip, around 5 nights. Full detail and inclusions on the{" "}
              <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile Turkey package page</Link>.
            </li>
            <li>
              <strong>Veneer packages</strong> — 8, 10, 16 or 20 E-max veneers with hotel and transfers. Less tooth preparation than crowns, and priced per tooth before bundling. See{" "}
              <Link href="/guides/veneers-turkey-packages" className="text-[#1e40af] font-semibold hover:underline">what veneer packages include</Link>.
            </li>
            <li>
              <strong>Full-arch implant packages</strong> — All-on-4 from £4,500 per arch and All-on-6 from £5,600 per arch, covering implants, the fixed bridge, hotel and transfers across two visits. See the{" "}
              <Link href="/prices/all-on-6-dental-implants-turkey-package" className="text-[#1e40af] font-semibold hover:underline">All-on-6 package breakdown</Link>{" "}
              or the{" "}
              <Link href="/guides/full-mouth-dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">full mouth implant cost guide</Link>.
            </li>
            <li>
              <strong>Smile makeover packages</strong> — a bespoke combination of veneers, crowns, whitening and gum contouring from £3,500, planned after a digital smile design assessment.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Which one is right for you is a clinical question, not a pricing one: crowns require more tooth preparation than veneers, and implants are only relevant where teeth are missing or unrestorable. Whichever package you are quoted, the inclusions below are what determine whether the headline price is the real price.
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

          <h2 id="pay-monthly" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Paying for a Turkey Teeth Package Monthly</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Package treatment does not have to be paid in one sum. The usual structure is a deposit to secure your treatment dates, with the balance spread over monthly instalments. The worked example below uses a £4,500 package — a 20-tooth E-max veneer package or a single All-on-4 arch — to show how the arithmetic works.
          </p>
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 mb-6">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1e40af] mb-3">Example Treatment Scenario</p>
            <dl className="grid grid-cols-2 gap-y-2 text-sm text-gray-800">
              <dt className="font-semibold">Package price</dt><dd className="text-right">£4,500</dd>
              <dt className="font-semibold">Deposit</dt><dd className="text-right">£1,000</dd>
              <dt className="font-semibold">Balance financed</dt><dd className="text-right">£3,500</dd>
              <dt className="font-semibold">Flights (not included)</dt><dd className="text-right">£80–£200</dd>
            </dl>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Term</th>
                  <th className="px-4 py-3 text-right font-semibold">Example monthly payment</th>
                  <th className="px-4 py-3 text-right font-semibold">Total repayable</th>
                </tr>
              </thead>
              <tbody>
                {paymentTerms.map((months, i) => (
                  <tr key={months} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{months} months</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">
                      £{Math.round(financedBalance / months).toLocaleString("en-GB")}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">£{financedBalance.toLocaleString("en-GB")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            These are <strong>example calculations at 0% APR representative</strong>, not a credit offer and not a quotation. At 0% APR the total repayable equals the amount financed, so the monthly figure is simply the balance divided by the term. What you are actually offered depends on the finance provider: finance is <strong>subject to status, a credit check and lender approval</strong>, the deposit required can differ, and <strong>not everyone will qualify</strong>. A different APR would change both the monthly payment and the total repayable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For eligibility, deposit requirements and what happens if you have a poor credit history, see{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth finance and payment plans</Link>, or{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">monthly payment figures by treatment</Link>.
          </p>

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
            { title: "Hollywood Smile Turkey Package", desc: "20 or 24 zirconia crowns with hotel, VIP transfers and smile design.", href: "/prices/hollywood-smile-turkey-package" },
            { title: "All-on-6 Turkey Package", desc: "£5,600 per arch: implants, temporary and final teeth, hotel and transfers.", href: "/prices/all-on-6-dental-implants-turkey-package" },
            { title: "Veneers Turkey Packages: What Is Included?", desc: "Veneer-specific package breakdown — treatment-only vs package vs total trip, by tooth count.", href: "/guides/veneers-turkey-packages" },
            { title: "Turkey Teeth Cost: Complete 2026 Price Guide", desc: "Treatment-only prices: veneers, crowns, implants and full mouth.", href: "/prices/turkey-teeth-cost" },
            { title: "Turkey Teeth Finance & Payment Plans", desc: "Deposits, monthly payments, eligibility and bad-credit options for UK patients.", href: "/finance-options-uk" },
            { title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety, travel and finance — everything in one guide.", href: "/guides/teeth-in-turkey" },
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
