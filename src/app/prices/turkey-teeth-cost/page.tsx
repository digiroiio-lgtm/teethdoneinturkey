import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/turkey-teeth-cost`;
const TITLE = "How Much Do Turkey Teeth Cost? 2026 UK Price Guide";
const H1 = "How Much Do Turkey Teeth Cost? 2026 Price Guide for UK Patients";
const DESCRIPTION =
  "Turkey teeth cost from £130 per tooth. 2026 prices in pounds for veneers, crowns, implants and full-mouth packages, with UK comparison and finance.";
const DATE_PUBLISHED = "2026-09-03";
// Content last revised 2026-09-08. The 2026-09-11 change moved this page from
// /guides/turkey-teeth-cost to this URL without altering the substance, so the
// modified date is deliberately not bumped.
const DATE_MODIFIED = "2026-09-08";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/turkey-teeth-cost" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-determines-price", label: "What Determines Price" },
  { id: "implant-costs", label: "Implant Costs" },
  { id: "crown-veneer-costs", label: "Crown & Veneer Costs" },
  { id: "full-mouth-packages", label: "Full-Mouth & Package Pricing" },
  { id: "additional-procedures", label: "Additional Procedures" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "travel-accommodation", label: "Travel & Accommodation" },
  { id: "uk-vs-turkey", label: "UK vs Turkey Comparison" },
  { id: "why-cheaper", label: "Why Cheaper in Turkey?" },
  { id: "hidden-costs", label: "Potential Hidden Costs" },
  { id: "finance", label: "Finance & Monthly Payment" },
  { id: "accurate-quote", label: "Getting an Accurate Quote" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much do teeth cost in Turkey?",
    answer: "Individual treatments on this site start from £130 for a zirconia crown, £190 for a porcelain (E-max) veneer, and £250 for a dental implant. Full packages start from £2,800 for a 20-crown Hollywood Smile and £5,600 for an All-on-6 full-arch implant package, both all-inclusive of hotel and transfers. Your own price depends on which treatment, how many teeth, and which materials you choose.",
  },
  {
    question: "What does a full set of “turkey teeth” cost?",
    answer: "“Turkey teeth” in everyday use means a full set of crowns or veneers across the visible teeth rather than a single treatment. The most common version is a 20-unit zirconia crown package at £2,800 all-inclusive of hotel and transfers, or £3,100 for 24 units. A full set of 20 E-max porcelain veneers is priced per tooth instead, from £190, so roughly £3,800 before travel. The equivalent UK private cost is £20,000–£30,000 for the crown package.",
  },
  {
    question: "How long does treatment in Turkey take?",
    answer: "Crowns and veneers are normally completed in a single trip of about 5 to 7 days: two days of preparation and digital design, three to five days while the permanent units are made in the clinic's laboratory, then fitting. Dental implants need two trips — around 3 days for placement, then a 3 to 6 month healing period at home, then a second trip of about 5 days for the permanent crown or bridge. Same-day (immediate-loading) implants shorten the first trip but still require the second visit for the final restoration.",
  },
  {
    question: "Is dental treatment in Turkey really cheaper than the UK?",
    answer: "Yes, based on the price comparisons published across this site — most individual treatments and packages show a 65–90% saving versus equivalent UK private dental prices. This reflects lower clinic overheads, staff costs and cost of living in Turkey, not lower-quality materials or less qualified dentists.",
  },
  {
    question: "Do Turkey teeth packages include hotel and flights?",
    answer: "Package prices on this site (Hollywood Smile, All-on-6, etc.) include hotel accommodation and VIP airport/clinic transfers. Flights are not included in any package price and should be booked separately.",
  },
  {
    question: "Can I pay monthly for teeth in Turkey?",
    answer: "Some patients do, using credit arranged in the UK. Whether you are offered credit, and on what terms, is the lender's decision and is not guaranteed. The monthly payment depends on the offer you receive, so we do not publish monthly figures.",
  },
  {
    question: "Why do implant and add-on procedure prices vary between pages on this site?",
    answer: "Some individual treatment and add-on prices (for example, specific implant brand tiers and teeth-whitening pricing) are shown slightly differently across different price pages on this site, generally reflecting different clinic packages, bundling (e.g. whitening with or without a cleaning), or the specific brand referenced. Treat any single figure as indicative and always confirm exact, itemised pricing with a personalised quote before booking.",
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
        { "@type": "ListItem", position: 2, name: "Turkey Teeth Cost", item: PAGE_URL },
      ],
    },
  ],
};

// Figures shown here are the ones corroborated consistently across ≥2 of this
// site's own price pages (homepage, PriceTable, /treatments/*, /prices/*) as of
// DATE_MODIFIED. Where pages disagree, that is called out in the "hidden costs"
// / conflicting-figures note below rather than silently picking a number.
const costRows = [
  { treatment: "Zirconia Crown (per tooth)", turkey: "£130", uk: "£1,000–£1,500", saving: "~90%" },
  { treatment: "Porcelain (E-max) Veneer (per tooth)", turkey: "From £190", uk: "£800–£1,000", saving: "~78%" },
  { treatment: "Composite Veneer/Bonding (per tooth)", turkey: "From £90", uk: "£300–£500", saving: "~75%" },
  { treatment: "Dental Implant (Osstem, + crown)", turkey: "From £250", uk: "£2,000–£3,000", saving: "~88%" },
  { treatment: "Dental Implant (Straumann, + crown)", turkey: "Up to ~£600", uk: "£2,000–£3,000", saving: "~70–80%" },
  { treatment: "All-on-4 (per arch, all-inclusive)", turkey: "From £4,500", uk: "£15,000+", saving: "70%+" },
  { treatment: "All-on-6 (per arch, all-inclusive)", turkey: "From £5,600", uk: "£15,000–£22,000", saving: "~70%" },
  { treatment: "Hollywood Smile — 20 crowns (package)", turkey: "£2,800", uk: "£20,000–£30,000", saving: "~87%" },
  { treatment: "Hollywood Smile — 24 crowns (package)", turkey: "£3,100", uk: "£24,000–£36,000", saving: "~87%" },
  { treatment: "Full Smile Makeover", turkey: "From £3,500", uk: "£12,000+", saving: "70%+" },
  { treatment: "Root Canal Treatment", turkey: "£200", uk: "£600–£900", saving: "~75%" },
  { treatment: "Dental Filling", turkey: "£70", uk: "£150–£300", saving: "~65%" },
  { treatment: "Bone Graft", turkey: "£200", uk: "£400–£800", saving: "~65%" },
  { treatment: "Dental Cleaning", turkey: "£60", uk: "£100–£200", saving: "~60%" },
  { treatment: "Teeth Whitening (with cleaning)", turkey: "From £250", uk: "£400–£700", saving: "~50%" },
];

export default function TurkeyTeethCostPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Turkey Teeth Cost" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Price Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            What determines price, a full UK-vs-Turkey comparison, package pricing, and how to get an accurate personalised quote.
          </p>
          <p className="mt-3 text-sm text-blue-300/70">✓ Prices last verified: June 2026</p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge reviewedDate="3 September 2026" />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer: How Much Do Teeth Cost in Turkey?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Individual treatments in Turkey typically start from £130 for a zirconia crown, £190 for a porcelain veneer, and £250 for a dental implant. All-inclusive packages (hotel and transfers included) start from around £2,800. UK private-dentistry prices for the same treatments are typically 65–90% higher. Exact cost depends on the treatment, materials, and number of teeth involved. For two worked examples that add flights, see{" "}
            <a href="#total-cost" className="text-[#1e40af] font-semibold hover:underline">what a UK patient actually pays in total</a>.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Individual treatments start from £130 (zirconia crown) and £190 (E-max veneer); implants start from £250.",
              "All-inclusive packages (hotel + transfers) start from £2,800 for a 20-crown Hollywood Smile.",
              "Full-arch implant options: All-on-4 from £4,500/arch, All-on-6 from £5,600/arch — both all-inclusive.",
              "If you choose to borrow, the lender sets the terms; approval is not guaranteed and we do not publish monthly figures.",
              "Flights, and some optional add-ons, are not included in package prices — confirm exactly what's covered before booking.",
            ]}
          />

          <h2 id="what-determines-price" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Determines Treatment Price?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Four factors mainly determine what you will pay: the treatment itself (a single filling costs far less than a full-arch implant package), the material or brand chosen (an entry-level Osstem implant costs less than a premium Straumann implant; composite veneers cost less than E-max porcelain), the number of teeth involved, and whether you book an individual treatment or an all-inclusive package that bundles hotel and transfers into one price.
          </p>

          <h2 id="implant-costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A single dental implant with crown is £250–£600 depending on the brand, from £250 for an entry-level brand (Osstem) up to about £600 for premium brands. Full-arch implant treatment is priced per arch: All-on-4 from £4,500 and All-on-6 from £5,600, both all-inclusive of hotel and transfers. See the full{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Implants in Turkey Guide</Link>{" "}
            for a brand-by-brand breakdown and the clinical process.
          </p>

          <h2 id="crown-veneer-costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Crown &amp; Veneer Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zirconia crowns (used in Hollywood Smile packages) start from £130 per tooth. Porcelain (E-max) veneers — a different product, bonded to the front of the tooth rather than covering it fully — start from £190 per tooth. Composite veneers/bonding are the most affordable option, from £90 per tooth, applied in a single visit but generally less durable than porcelain or zirconia.
          </p>

          <h2 id="full-mouth-packages" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full-Mouth &amp; Package Pricing</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey</th>
                  <th className="px-4 py-3 text-right font-semibold">UK</th>
                  <th className="px-4 py-3 text-right font-semibold">Saving</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.uk}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">Save {r.saving}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Figures shown are the ones consistently used across this site&apos;s own price pages as of {DATE_MODIFIED}. See{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">the full price guide</Link>{" "}
            for package-specific detail and payment breakdowns.
          </p>

          <h2 id="additional-procedures" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Additional Procedures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the headline treatments, this site&apos;s price pages also reference root canal treatment (from £200), dental fillings (from £70), bone grafting (from £200), and routine dental cleaning (from £60) as individually priced add-ons. Teeth-whitening pricing is shown differently depending on the page and whether cleaning is bundled in — confirm this specific figure directly with a clinic before assuming a price.
          </p>

          <h2 id="diagnostics" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Diagnostics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implant cases typically require a CT scan on arrival to plan treatment accurately; this is generally treated as part of the diagnostic process rather than billed as a separate optional extra, but always confirm this is included when you receive your quote.
          </p>

          <h2 id="travel-accommodation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Travel &amp; Accommodation Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-inclusive packages on this site bundle hotel accommodation and VIP airport/clinic transfers into the quoted price. Flights from the UK are always booked and paid for separately. See{" "}
            <Link href="/travel-to-turkey" className="text-[#1e40af] font-semibold hover:underline">Travel to Turkey</Link>{" "}
            for what to expect and how long to plan for your trip.
          </p>

          <h2 id="total-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What a UK Patient Actually Pays in Total</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The package price is not the whole bill, because flights are booked separately. Two worked examples, both using packages that already include hotel and airport transfers, with a UK–Antalya return flight added at the low and high ends of the fares quoted below (about £50 off-peak, about £410 at the August peak):
          </p>
          <div className="overflow-x-auto rounded-xl mb-3">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-3 text-left">Example</th>
                  <th className="px-4 py-3 text-right">Package (hotel + transfers)</th>
                  <th className="px-4 py-3 text-right">Return flight (winter to August)</th>
                  <th className="px-4 py-3 text-right">Total from the UK</th>
                  <th className="px-4 py-3 text-right">UK private price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { e: "Hollywood Smile, 20 zirconia crowns", p: "£2,800", f: "about £50–£410", t: "about £2,850–£3,210", u: "£20,000–£30,000" },
                  { e: "All-on-4, one arch", p: "£4,500", f: "about £50–£410", t: "about £4,550–£4,910", u: "£15,000+" },
                ].map((r, i) => (
                  <tr key={r.e} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.e}</td>
                    <td className="px-4 py-3 text-right">{r.p}</td>
                    <td className="px-4 py-3 text-right">{r.f}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.t}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{r.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Indicative figures, not a quote. Package and UK prices are the ones published on this site on 30 October 2026. The flight range is a rough guide taken from the fare sites named below, not a fare we can offer, and it excludes hold luggage and travel to your departure airport. Anything outside your written treatment plan, such as extra treatment or additional hotel nights, is paid separately.
          </p>

          <h3 id="flight-costs-by-month" className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">When You Fly Changes the Total: UK to Antalya by Month</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fares follow the UK school calendar more than the dental calendar. Because treatment dates are usually flexible, choosing a quieter month is the simplest way to lower the total. Fare sites give different averages depending on departure airport, airline and how early you book, and they do not agree on which single month is cheapest, so treat the levels below as a guide and check live fares for your dates.
          </p>
          <div className="overflow-x-auto rounded-xl mb-3">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-3 text-left">Month</th>
                  <th className="px-4 py-3 text-left">Typical fare level</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "January–February", l: "Among the lowest", w: "Off-season and no UK school holidays. Kayak shows about £99 as the average London return in January, and the cheapest returns found are around £40–£60." },
                  { m: "March", l: "Low to moderate", w: "Quiet before Easter. Check whether your dates fall in the Easter school holidays, which move each year." },
                  { m: "April", l: "Higher around Easter", w: "Easter school holidays push fares up. Dates outside them are usually cheaper." },
                  { m: "May", l: "Moderate", w: "Early summer season starts. The late-May half-term week is dearer." },
                  { m: "June", l: "Rising", w: "Demand builds before schools break up. Early June is usually cheaper than late June." },
                  { m: "July–August", l: "Highest", w: "UK summer school holidays. Kayak shows about £313 for a direct flight in August and Cheapflights about £411 for London to Antalya." },
                  { m: "September", l: "Falls", w: "Schools are back, so family demand drops and fares ease from August levels." },
                  { m: "October", l: "Moderate, with a half-term spike", w: "Outside the late-October half-term week fares are usually lower." },
                  { m: "November", l: "Low", w: "Off-season and no major UK holidays." },
                  { m: "December", l: "Low early, higher at Christmas", w: "Cheapflights shows about £57 as the average London to Antalya return in December, but the Christmas and New Year weeks cost more." },
                ].map((r, i) => (
                  <tr key={r.m} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{r.m}</td>
                    <td className="px-4 py-3 text-[#1e40af] font-semibold">{r.l}</td>
                    <td className="px-4 py-3 text-gray-600">{r.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Fare figures are search-based snapshots shown on 30 October 2026: Skyscanner lists a best London to Antalya return of about £55 and an average around £109; Kayak lists London averages of about £99 in January and about £313 for direct flights in August; Cheapflights lists about £57 for December and about £411 for August. These tools use different methods, so their numbers differ. Fares change daily, differ by airport (London, Manchester, Birmingham and others), and low-cost airlines charge extra for hold luggage. Always compare a return fare including baggage for your own dates before booking. Package prices on this page include hotel and airport transfers in Turkey; flights are always separate.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">UK vs Turkey Comparison</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Across every treatment compared on this site, Turkey pricing is consistently 65–90% lower than equivalent UK private dental prices. The gap reflects lower clinic overheads, staff costs and general cost of living in Turkey — not lower-quality materials, since the same international implant and veneer brands used in UK practices (Straumann, Nobel Biocare, Ivoclar E-max) are used by partner clinics in Turkey.
          </p>

          <h2 id="why-cheaper" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why Is Dental Treatment Cheaper in Turkey?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Three structural factors drive the price difference: lower clinic overheads and property costs, significantly lower staff costs due to Turkey&apos;s cost of living, and a GBP/TRY exchange rate that has shifted substantially in favour of UK patients over the past decade. These savings are structural, not a sign of lower quality — accredited Turkish clinics use the same implant brands (Straumann, Nobel Biocare) and porcelain systems (Ivoclar E-max) as UK practices. For a deeper analysis, see{" "}
            <Link href="/blog/why-are-dental-treatments-cheaper-in-turkey" className="text-[#1e40af] font-semibold hover:underline">Why Are Dental Treatments Cheaper in Turkey?</Link>
          </p>

          <h2 id="hidden-costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Potential Hidden Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most common way a final bill differs from an initial headline price is scope: the advertised &ldquo;from&rdquo; price usually reflects the base treatment or entry-level material, while premium brands, additional teeth, bone grafting, sinus lifts, or optional whitening are priced on top. Flights are never included in a package price. Always request an itemised quote confirming exactly which brand, how many teeth, and which extras are and are not included.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>A note on this guide&apos;s figures:</strong> a small number of specific line items — certain implant-brand tiers (e.g. Medentika, Straumann) and whitening pricing — are shown slightly differently across different price pages on this site, most likely reflecting different clinic packages or bundling. Rather than pick one figure and present it as definitive, this guide uses only the figures that are consistent across multiple pages, and recommends confirming any brand- or add-on-specific price directly via a personalised quote.
          </p>

          <h2 id="finance" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Finance &amp; Monthly Payment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some patients spread the cost of treatment with credit arranged in the UK. Borrowing is optional, and the monthly payment depends on the amount borrowed, the term, the interest rate and any fees in the lender&apos;s offer, so this guide shows treatment prices rather than monthly figures. See{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">paying monthly: what to know</Link>{" "}
            or{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">how UK dental finance works, including dental loans and difficult credit histories</Link>{" "}
            for what to check before you borrow. We are an Introducer Appointed Representative of Ideal Sales Solutions Ltd, trading as Ideal4Finance, a credit broker; we do not lend or give credit advice.
          </p>

          <h2 id="accurate-quote" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Getting an Accurate, Personalised Quotation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every price on this page is indicative. An accurate quote requires your dental photographs and history to be reviewed, and — for implant cases — diagnostic imaging once you arrive. Use the{" "}
            <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">Price Calculator</Link>{" "}
            for a first estimate, then request a{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">free personalised treatment plan</Link>{" "}
            for an itemised, confirmed price.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Teeth Cost: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "USHAŞ — Turkey Health Tourism Authority", href: "https://ushas.gov.tr/" },
            { label: "T.C. Sağlık Bakanlığı — Turkish Ministry of Health", href: "https://www.saglik.gov.tr/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            { title: "Teeth in Turkey: The Complete UK Patient Guide", desc: "The primary guide covering treatment, process, safety and cost.", href: "/guides/teeth-in-turkey" },
            { title: "Dental Implants in Turkey: Complete Guide", desc: "Brands, procedure, timelines, and implant-specific costs.", href: "/guides/dental-implants-turkey" },
            { title: "Turkey Teeth Finance", desc: "Paying monthly for Turkey teeth: payment plans, loans and what to check.", href: "/finance-options-uk" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Blog Articles"
          links={[
            { title: "Can You Pay Monthly for Teeth in Turkey?", desc: "What UK patients should know about paying monthly for treatment in Turkey.", href: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
            { title: "Full Mouth Implants: UK vs Turkey", desc: "Full-mouth implant cost comparison in detail.", href: "/blog/full-mouth-implants-uk-vs-turkey" },
            { title: "Why Is Dental Care Cheaper in Turkey?", desc: "The real reasons behind the price difference.", href: "/blog/why-are-dental-treatments-cheaper-in-turkey" },
            { title: "Hollywood Smile Turkey Cost", desc: "Zirconia crown package pricing in detail.", href: "/blog/hollywood-smile-turkey-cost" },
            { title: "Turkey Teeth Packages: What Is Included?", desc: "Package price vs treatment price, and what packages leave out.", href: "/guides/turkey-teeth-packages" },
          ]}
        />
      </div>

      <CTASection
        title="Get an Accurate, Personalised Price"
        subtitle="Send your dental photos and we'll confirm your exact treatment plan and itemised cost within 24 hours — free, no obligation."
        buttonText="Get My Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
