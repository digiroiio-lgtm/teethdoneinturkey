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
import { PRICES, getPrice, gbp, savingBounds, savingRange, turkeyPrice, ukRange } from "@/lib/prices";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/turkey-teeth-cost`;
const TITLE = "How Much Do Turkey Teeth Cost? 2026 UK Price Guide";
const H1 = "How Much Do Turkey Teeth Cost? Complete 2026 Price Guide for UK Patients";
const DESCRIPTION =
  "Turkey teeth cost from £130 per tooth. Full 2026 prices in pounds for veneers, crowns, implants and full-mouth packages — with UK cost comparison and finance options.";
const DATE_PUBLISHED = "2026-09-03";
// 2026-09-25: figures now come from src/lib/prices.ts, which resolved the
// Straumann conflict (£800 here vs £930 on the implant price page) in favour of
// £930 and removed the "prices vary between pages" caveat.
const DATE_MODIFIED = "2026-09-25";

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
    answer: "Yes. Monthly payment plans are available from £82/month with 0% interest over 12, 24 or 36 months, according to this site's monthly payment page. Exact monthly figures depend on the treatment total and the term you choose.",
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

// Every row except whitening comes from src/lib/prices.ts. Whitening is still
// priced differently depending on whether a clean is bundled, so it stays a
// separate, caveated row until a single figure is confirmed.
const costRows = [
  ...PRICES.map((r) => ({
    treatment: `${r.treatment} (${r.unit})`,
    turkey: turkeyPrice(r),
    uk: ukRange(r),
    saving: savingRange(r),
  })),
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
            Individual treatments in Turkey typically start from £130 for a zirconia crown, £190 for a porcelain veneer, and £250 for a dental implant. All-inclusive packages (hotel and transfers included) start from around £2,800. Turkey prices for most of these treatments are 65–90% lower than UK private-dentistry prices. Exact cost depends on the treatment, materials, and number of teeth involved.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Individual treatments start from £130 (zirconia crown) and £190 (E-max veneer); implants start from £250.",
              "All-inclusive packages (hotel + transfers) start from £2,800 for a 20-crown Hollywood Smile.",
              "Full-arch implant options: All-on-4 from £4,500/arch, All-on-6 from £5,600/arch — both all-inclusive.",
              "0% finance is available from £82/month over 12, 24 or 36 months.",
              "Flights, and some optional add-ons, are not included in package prices — confirm exactly what's covered before booking.",
            ]}
          />

          <h2 id="what-determines-price" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Determines Treatment Price?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Four factors mainly determine what you will pay: the treatment itself (a single filling costs far less than a full-arch implant package), the material or brand chosen (an entry-level Osstem implant costs less than a premium Straumann implant; composite veneers cost less than E-max porcelain), the number of teeth involved, and whether you book an individual treatment or an all-inclusive package that bundles hotel and transfers into one price.
          </p>

          <h2 id="implant-costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A single dental implant with crown starts from {gbp(getPrice("implant-osstem").turkeyFromGBP)} using an entry-level brand (Osstem), {gbp(getPrice("implant-medentika").turkeyFromGBP)} with Medentika and {gbp(getPrice("implant-straumann").turkeyFromGBP)} with Straumann. Full-arch implant treatment is priced per arch: All-on-4 from £4,500 and All-on-6 from £5,600, both all-inclusive of hotel and transfers. See the full{" "}
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
                      <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">{r.saving} lower</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Partner-clinic list prices from the{" "}
            <Link href="/turkey-dental-price-index" className="text-[#1e40af] hover:underline">Turkey Dental Price Index</Link>,
            checked June 2026. The difference compares treatment fees only and excludes travel — see the{" "}
            <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link>.
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

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">UK vs Turkey Comparison</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Across the treatments in the price index, Turkey fees are {savingBounds().min}–{savingBounds().max}% lower than typical UK private prices, and 65–90% lower for most implant, crown and veneer treatments. The gap reflects lower clinic overheads, staff costs and general cost of living in Turkey — not lower-quality materials, since the same international implant and veneer brands used in UK practices (Straumann, Nobel Biocare, Ivoclar E-max) are used by partner clinics in Turkey.
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
            <strong>A note on this guide&apos;s figures:</strong> every price on this site now comes from one central dataset, so the same treatment shows the same price on every page. The one exception is teeth whitening, which is priced differently depending on whether a clean is included — confirm that figure directly in your quote.
          </p>

          <h2 id="finance" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Finance &amp; Monthly Payment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where finance is factually available on this site, monthly payment plans start from £82/month with 0% interest over 12, 24 or 36 months. Monthly figures scale with the total treatment cost and the term selected — see{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">what each treatment costs per month</Link>{" "}
            or{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">how UK dental finance works, including dental loans and bad credit</Link>{" "}
            for eligibility and how to pre-qualify.
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
            { title: "Turkey Teeth Finance", desc: "Pay monthly for Turkey teeth. 0% APR payment plans and bad credit options explained.", href: "/finance-options-uk" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Blog Articles"
          links={[
            { title: "Can You Pay Monthly for Teeth in Turkey?", desc: "Monthly payment plans and 0% interest options explained.", href: "/blog/can-you-pay-monthly-for-teeth-in-turkey" },
            { title: "Full Mouth Implants: UK vs Turkey", desc: "Full-mouth implant cost comparison in detail.", href: "/blog/full-mouth-implants-uk-vs-turkey" },
            { title: "Why Is Dental Care Cheaper in Turkey?", desc: "The real reasons behind the price difference.", href: "/blog/why-are-dental-treatments-cheaper-in-turkey" },
            { title: "Hollywood Smile Turkey Cost", desc: "Zirconia crown package pricing in detail.", href: "/blog/hollywood-smile-turkey-cost" },
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
