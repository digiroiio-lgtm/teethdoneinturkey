import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/veneers-turkey-cost`;
// `/prices` itself is a permanentRedirect stub, so the prices breadcrumb points
// at the canonical pricing hub instead of creating a link to a redirect.
const PRICES_HUB = "/prices/teeth-done-in-turkey-cost";
const TITLE = "Veneers Turkey Cost 2026: Price Per Tooth & Full Set";
const H1 = "Veneers Turkey Cost: 2026 Price Guide for UK Patients";
const DESCRIPTION =
  "Veneers in Turkey cost from £90/tooth composite, £190 E-max, £250 zirconia; 20 veneers from £3,800. Full UK comparison, what's included, and what isn't.";
const DATE_PUBLISHED = "2024-06-01";
const DATE_MODIFIED = "2026-09-04";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/veneers-turkey-cost" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "price-per-tooth", label: "Price Per Tooth by Material" },
  { id: "full-set", label: "Full Set of Veneers Cost" },
  { id: "veneers-vs-crowns", label: "Veneers vs Crowns" },
  { id: "whats-included", label: "What's Included" },
  { id: "not-included", label: "Costs That Are Not Included" },
  { id: "total-trip-cost", label: "Total Trip Cost" },
  { id: "uk-vs-turkey", label: "UK vs Turkey Comparison" },
  { id: "where", label: "Antalya vs Istanbul Pricing" },
  { id: "price-factors", label: "What Changes Your Price" },
  { id: "lifespan", label: "Lifespan & Replacement Cost" },
  { id: "finance", label: "Paying Monthly" },
  { id: "quote", label: "Getting an Accurate Quote" },
  { id: "faqs", label: "FAQs" },
];

// Per-tooth figures below are the ones published consistently across this site's
// own treatment and price pages (/treatments/veneers-turkey,
// /guides/turkey-teeth-cost, PriceTable) as of DATE_MODIFIED. Where this site
// publishes no verified UK equivalent — as with zirconia veneers — that is
// stated in the table rather than filled with an estimate.
const perToothRows = [
  {
    type: "Composite veneer / bonding",
    turkey: "From £90",
    uk: "£300–£500",
    saving: "~75%",
    note: "Applied in a single visit. Most affordable, least durable.",
  },
  {
    type: "Porcelain (E-max) veneer",
    turkey: "From £190",
    uk: "£800–£1,000",
    saving: "~78%",
    note: "The most requested option. Lithium disilicate, highly translucent.",
  },
  {
    type: "Zirconia veneer",
    turkey: "From £250",
    uk: "£800–£1,000*",
    saving: "—",
    note: "Strongest option, favoured for grinders. Less translucent than E-max.",
  },
  {
    type: "Zirconia crown",
    turkey: "£130",
    uk: "£1,000–£1,500",
    saving: "~90%",
    note: "A crown, not a veneer — covers the whole tooth. See the section below.",
  },
];

// Derived by multiplying this site's published E-max per-tooth floor (£190) by
// the number of teeth. Stated as derived on the page itself — these are not
// separately quoted package prices, except the 20-veneer figure, which matches
// the £3,800 full-set figure already published on this site.
const fullSetRows = [
  { teeth: "8 veneers (upper front)", turkey: "From £1,520", uk: "£6,400–£8,000" },
  { teeth: "10 veneers (upper arch)", turkey: "From £1,900", uk: "£8,000–£10,000" },
  { teeth: "16 veneers", turkey: "From £3,040", uk: "£12,800–£16,000" },
  { teeth: "20 veneers (full smile)", turkey: "From £3,800", uk: "£16,000–£20,000" },
];

const faqs = [
  {
    question: "How much do veneers cost in Turkey in 2026?",
    answer:
      "Veneers in Turkey start from £90 per tooth for composite, £190 per tooth for porcelain (E-max) and £250 per tooth for zirconia. A full set of 20 E-max veneers starts from £3,800. Equivalent UK private pricing is roughly £800–£1,000 per porcelain veneer, or £16,000–£20,000 for a full set, so the typical saving is around 75–79%.",
  },
  {
    question: "How much is a full set of veneers in Turkey?",
    answer:
      "A full set of 20 E-max veneers starts from £3,800, based on this site's £190 per-tooth price. Smaller sets cost proportionally less — from around £1,520 for 8 upper front veneers. The exact figure depends on how many teeth are actually treated, which is confirmed after a dentist reviews your photos or scans.",
  },
  {
    question: "Why are veneers so much cheaper in Turkey than the UK?",
    answer:
      "The saving comes from Turkey's lower clinic overheads, staff costs and general cost of living — not from cheaper materials. Partner clinics use the same Ivoclar E-max and Vita porcelain used by leading UK practices. A UK practice pays UK commercial rents, UK salaries and UK lab fees on every single unit, and that is what the price gap reflects.",
  },
  {
    question: "Are cheap veneers in Turkey actually crowns?",
    answer:
      "Sometimes, and this is the single most important thing to check before you book. A veneer is a thin shell bonded to the front of the tooth; a crown covers the whole tooth and requires far more natural tooth to be removed. Zirconia crowns are priced from £130 on this site while E-max veneers start from £190, so a quote that looks unusually cheap for 'veneers' may actually be for crowns. Always ask for the treatment plan to state the restoration type and material per tooth in writing.",
  },
  {
    question: "Does the veneer price include the hotel and flights?",
    answer:
      "Package prices on this site include hotel accommodation and VIP airport and clinic transfers. Flights are never included in any package price and must be booked separately. Per-tooth prices are for the treatment only — check which of the two you are being quoted.",
  },
  {
    question: "Can I pay monthly for veneers in Turkey?",
    answer:
      "Yes. Monthly payment plans start from £82/month, with 0% interest available to qualifying applicants over 12- and 24-month terms; longer terms may carry interest, and full APR details are provided before you commit. As an example, a £3,800 full smile makeover spread over 36 months works out at around £106/month.",
  },
  {
    question: "How long do veneers from Turkey last?",
    answer:
      "E-max and porcelain veneers typically last 10–15 years with good care, and partner clinics offer a 10-year structural guarantee on veneer work. Composite veneers have a shorter service life and are more likely to need replacing or repolishing sooner, which is worth factoring into the long-term cost rather than the headline price alone.",
  },
  {
    question: "How many days do I need in Turkey for veneers?",
    answer:
      "Veneer treatment normally takes 5–7 days in Turkey. That covers the consultation and scans, tooth preparation, a try-in of the temporary or trial smile, and final fitting once the lab work is complete.",
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
      reviewedBy: {
        "@type": "Person",
        name: "Dr. Ayşe Kaya",
        jobTitle: "BDS, MSc Aesthetic Dentistry",
      },
      about: { "@type": "MedicalProcedure", name: "Dental veneers" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE_URL}${PRICES_HUB}` },
        { "@type": "ListItem", position: 3, name: "Veneers Turkey Cost", item: PAGE_URL },
      ],
    },
  ],
};

export default function VeneersCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prices", href: PRICES_HUB }, { label: "Veneers Turkey Cost" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Price Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Price per tooth by material, full-set costs, what a package does and does not cover, and how Turkey compares with UK private dentistry.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge reviewedDate="4 September 2026" />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer: How Much Do Veneers Cost in Turkey?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Veneers in Turkey cost from £90 per tooth for composite, from £190 per tooth for porcelain (E-max), and from £250 per tooth for zirconia. A full set of 20 E-max veneers starts from £3,800, compared with roughly £16,000–£20,000 at a UK private practice — a saving of around 75–79%. The final figure depends on the material, how many teeth are treated, and whether you book a per-tooth price or an all-inclusive package.
          </p>

          <KeyTakeaways
            items={[
              "Per tooth in Turkey: composite from £90, E-max porcelain from £190, zirconia from £250.",
              "A full set of 20 E-max veneers starts from £3,800; the UK equivalent is roughly £16,000–£20,000.",
              "Package prices include hotel and VIP transfers. Flights are never included.",
              "A quote below the veneer price range may be for crowns, which remove much more natural tooth — always get the restoration type confirmed in writing.",
              "Treatment takes 5–7 days, and E-max veneers carry a 10-year structural guarantee at partner clinics.",
              "Plans start from £82/month, with 0% interest available to qualifying applicants on 12- and 24-month terms.",
            ]}
          />

          <GuideTOC items={toc} />

          <h2 id="price-per-tooth" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer Price Per Tooth in Turkey by Material</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Material is the biggest single driver of what you pay per tooth. These are the per-tooth prices published across this site, set against typical UK private-practice pricing for the same restoration.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md ring-1 ring-gray-100 mb-3">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Veneer cost per tooth in Turkey compared with UK private dental prices, by material</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-4 py-3 text-left font-semibold">Type</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Turkey</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">UK</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Saving</th>
                </tr>
              </thead>
              <tbody>
                {perToothRows.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">{r.type}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{r.note}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold whitespace-nowrap">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-gray-500 whitespace-nowrap">{r.uk}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      {r.saving === "—" ? (
                        <span className="text-gray-400 text-xs">—</span>
                      ) : (
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.saving}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-8">
            *The UK figure shown against zirconia veneers is the UK porcelain-veneer band. This site does not publish a verified UK price specifically for zirconia veneers, so no saving percentage is claimed for that row.
          </p>

          <h2 id="full-set" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Much Is a Full Set of Veneers in Turkey?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            &quot;A full set&quot; means different things to different patients. Most UK patients who want a visible change treat the 8–10 teeth that show when they smile; a full &quot;Hollywood smile&quot; usually means 20 teeth across both arches. The figures below are calculated from the £190 E-max per-tooth price, so treat them as starting points rather than fixed quotes.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md ring-1 ring-gray-100 mb-4">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Cost of a full set of E-max veneers in Turkey compared with the UK, by number of teeth</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-4 py-3 text-left font-semibold">Number of Veneers</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Turkey (E-max)</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">UK Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {fullSetRows.map((r, i) => (
                  <tr key={r.teeth} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{r.teeth}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold whitespace-nowrap">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-gray-500 whitespace-nowrap">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you would rather have a fixed all-inclusive figure than a per-tooth price, the{" "}
            <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-medium hover:underline">Hollywood Smile packages</Link>{" "}
            are priced at £2,800 for 20 zirconia crowns and £3,100 for 24, both including hotel and transfers. Note that those packages are crowns rather than veneers — the difference is explained next, and it matters more than the price.
          </p>

          <h2 id="veneers-vs-crowns" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneers vs Crowns: What You Are Actually Being Quoted For</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the most important cost question on the page, and the one most price comparisons skip. A veneer is a thin shell bonded to the front surface of the tooth, so only a small amount of enamel is reduced. A crown covers the entire tooth, which means substantially more natural tooth structure has to be removed first — and once removed, it cannot be put back.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The two are priced differently. Zirconia crowns start at £130 per tooth on this site, while E-max veneers start at £190. That means an unusually cheap quote advertised as &quot;veneers&quot; may in fact be for crowns. Neither treatment is wrong — crowns are the right answer for teeth that are heavily filled, root-treated or badly broken down — but you should know which one you are consenting to before you fly.
          </p>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Before you pay a deposit, ask for a written treatment plan that states:</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
              <li>the restoration type for each tooth — veneer or crown, not just &quot;veneers&quot;</li>
              <li>the material and brand (for example Ivoclar E-max, Vita porcelain, zirconia)</li>
              <li>how many teeth will be prepared, and how much reduction is planned</li>
              <li>whether any root canal treatment is being proposed, and why</li>
              <li>the guarantee period and what it does and does not cover</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Read more on this in our guide to the{" "}
            <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-medium hover:underline">risks of Turkey teeth</Link>{" "}
            and{" "}
            <Link href="/teeth-done-in-turkey-problems" className="text-[#1e40af] font-medium hover:underline">what can go wrong and how to avoid it</Link>.
          </p>

          <h2 id="whats-included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What a Veneer Package Price Includes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All-inclusive package prices quoted through this site cover the treatment itself plus the logistics of the trip:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 mb-8">
            <li>consultation, examination and digital scans or X-rays at the clinic</li>
            <li>the veneers themselves, in the agreed material and quantity</li>
            <li>tooth preparation, temporaries and final fitting</li>
            <li>hotel accommodation for the treatment stay</li>
            <li>VIP airport and clinic transfers</li>
            <li>an English-speaking patient co-ordinator throughout</li>
            <li>a written guarantee — up to 10 years structural on E-max and porcelain veneer work</li>
          </ul>

          <h2 id="not-included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Costs That Are Not Included</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Budgeting only for the headline veneer price is the most common way UK patients end up surprised. Plan for these separately:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 mb-8">
            <li><strong className="text-gray-900">Flights</strong> — never included in any package price on this site.</li>
            <li><strong className="text-gray-900">Preparatory treatment</strong> — fillings, root canals, extractions, gum treatment or bone grafting, if your assessment shows they are needed before veneers can be placed.</li>
            <li><strong className="text-gray-900">Travel insurance</strong> — standard policies often exclude planned treatment abroad, so check the wording or arrange specific cover.</li>
            <li><strong className="text-gray-900">Extra nights</strong> — beyond the nights the package covers, if you extend the trip.</li>
            <li><strong className="text-gray-900">Meals and spending money</strong> for the stay.</li>
            <li><strong className="text-gray-900">A second trip</strong>, if your plan is staged or if an adjustment is needed later.</li>
            <li><strong className="text-gray-900">A night guard</strong>, if you grind your teeth — worth the outlay to protect the work.</li>
            <li><strong className="text-gray-900">UK dental check-ups</strong> and ongoing hygiene appointments after you return home.</li>
          </ul>

          <h2 id="total-trip-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What a Realistic Total Trip Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            For a UK patient having 20 E-max veneers, the treatment starts from £3,800 with hotel and transfers included in a package. Flights are the main additional line item, and vary considerably with the season, the departure airport and how far ahead you book, so get a live quote for your own dates rather than working from an average. Add whatever preparatory treatment your assessment identifies. The honest way to compare Turkey with the UK is total-trip cost against total UK quote — not treatment price against treatment price — and even on that basis the gap remains substantial.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneers UK vs Turkey: Why the Gap Is So Large</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A porcelain veneer that costs £800–£1,000 in a UK private practice starts from £190 in Turkey. The materials are not the difference — partner clinics use the same Ivoclar E-max and Vita porcelain as leading UK practices, and the same lab-fabricated process.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            What differs is the cost base underneath every unit: commercial rent, clinical and support salaries, lab fees and general cost of living are all far lower in Turkey. A UK practice has to recover UK costs on every veneer it places. That is the whole of the gap. Our{" "}
            <Link href="/blog/why-are-dental-treatments-cheaper-in-turkey" className="text-[#1e40af] font-medium hover:underline">full explanation of why Turkish dental treatment costs less</Link>{" "}
            goes into this in more detail, and the{" "}
            <Link href="/blog/veneers-turkey-cost-uk-vs-turkey" className="text-[#1e40af] font-medium hover:underline">UK vs Turkey veneer comparison</Link>{" "}
            sets the two side by side.
          </p>

          <h2 id="where" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Does Veneer Cost Differ Between Antalya and Istanbul?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Slightly. Antalya clinics tend to price marginally lower than Istanbul and suit veneer and crown work well, with the added draw of a coastal setting for the recovery days between appointments. Istanbul has a deeper pool of highly specialised clinics and more direct flights from more UK airports, which matters more for complex implant work than for veneers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            For straightforward veneer treatment, either city works, and the clinic matters far more than the city. Our{" "}
            <Link href="/blog/antalya-vs-istanbul-dental-clinics" className="text-[#1e40af] font-medium hover:underline">Antalya vs Istanbul comparison</Link>{" "}
            covers travel, cost and treatment suitability in full.
          </p>

          <h2 id="price-factors" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Changes Your Price</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            {[
              { title: "Material", desc: "E-max is the most requested. Zirconia costs more but is stronger for patients who grind. Composite is the cheapest and the least durable." },
              { title: "Number of teeth", desc: "The single biggest variable. Eight upper front veneers is a very different total from twenty across both arches, and clinics often discount larger sets." },
              { title: "Preparatory work", desc: "Fillings, root canals, extractions or gum treatment needed before veneers can be placed are quoted on top." },
              { title: "Clinic and dentist", desc: "Established clinics with in-house labs, CBCT imaging and digital smile design, and specialist aesthetic dentists, sit at the higher end of the range." },
              { title: "Package vs per-tooth", desc: "An all-inclusive package folds hotel and transfers into one figure; a per-tooth price covers the treatment only. Compare like with like." },
            ].map(f => (
              <li key={f.title} className="flex gap-3">
                <span className="text-[#1e40af] font-bold mt-0.5" aria-hidden="true">→</span>
                <div><strong className="text-gray-900">{f.title}:</strong> {f.desc}</div>
              </li>
            ))}
          </ul>

          <h2 id="lifespan" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Lifespan and the Cost of Replacement</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Price per tooth is only half the picture — cost per year of service is the more useful number. E-max and porcelain veneers typically last 10–15 years with good care and carry a 10-year structural guarantee at partner clinics. Composite veneers cost far less up front but have a shorter service life and stain more readily, so a composite set may need renewing more than once over the period a porcelain set lasts. Veneers are also a long-term commitment rather than a one-off purchase: once a tooth is prepared, it will always need a restoration on it, so budget for eventual replacement. See{" "}
            <Link href="/blog/how-long-do-dental-veneers-last" className="text-[#1e40af] font-medium hover:underline">how long veneers last</Link>{" "}
            and the{" "}
            <Link href="/blog/composite-vs-porcelain-veneers-turkey" className="text-[#1e40af] font-medium hover:underline">composite vs porcelain comparison</Link>.
          </p>

          <h2 id="finance" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Paying Monthly for Veneers</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            You do not have to pay the full amount up front. Monthly plans start from £82/month, and 0% interest is available to qualifying applicants on 12- and 24-month terms; longer terms may carry interest depending on your credit profile, and full APR details are provided before you commit to anything. As a worked example, a £3,800 full smile makeover spread across 36 months works out at around £106/month. Approval is never guaranteed and depends on your circumstances. See{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-medium hover:underline">monthly payment plans</Link>{" "}
            and{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-medium hover:underline">UK finance options</Link>{" "}
            for how the plans work.
          </p>

          <h2 id="quote" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How to Get an Accurate Veneer Quote</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every figure on this page is a starting point. Nobody can price your treatment accurately without seeing your teeth, because the number of teeth involved and any preparatory work needed are what move the total. To get a real figure:
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-1.5 text-gray-700 mb-6">
            <li>Send clear photos of your smile — relaxed, smiling wide, and upper and lower arches.</li>
            <li>Include any recent X-rays or a CBCT scan if your UK dentist has taken them.</li>
            <li>Say what you want to change, and how many teeth show when you smile.</li>
            <li>Ask for the plan to specify restoration type, material and tooth count in writing.</li>
            <li>Confirm what the price includes, and what it does not.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can also run rough numbers yourself with the{" "}
            <Link href="/price-calculator" className="text-[#1e40af] font-medium hover:underline">price calculator</Link>{" "}
            before requesting a{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-medium hover:underline">free treatment plan</Link>.
          </p>

          <RelatedLinksGrid
            title="Related Pages"
            links={[
              { title: "Veneers Turkey — Treatment Guide", desc: "Materials, process, suitability and guarantees.", href: "/treatments/veneers-turkey" },
              { title: "Turkey Teeth Cost Guide", desc: "Full price guide across every treatment.", href: "/guides/turkey-teeth-cost" },
              { title: "E-max vs Zirconia Veneers", desc: "Which material suits you, and what each costs.", href: "/blog/e-max-vs-zirconia-veneers-turkey" },
              { title: "Full Set of Veneers Cost", desc: "Pricing for 8, 10, 16 and 20-veneer sets.", href: "/blog/full-set-veneers-turkey-cost" },
              { title: "Best Dental Clinics in Turkey", desc: "How to vet a clinic before you book.", href: "/blog/best-dental-clinics-turkey" },
              { title: "Are Veneers in Turkey Worth It?", desc: "An honest look at the trade-offs.", href: "/blog/are-veneers-in-turkey-worth-it" },
            ]}
          />

          <p id="faqs" className="text-xs text-gray-500 scroll-mt-24">Last updated: 4 September 2026. Prices are indicative starting figures in GBP and are confirmed only in a personalised treatment plan.</p>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Veneers Turkey Cost: FAQs" />

      <CTASection
        title="Find Out Exactly What Your Veneers Will Cost"
        subtitle="Send us your photos and we'll prepare a personalised veneer quote within 24 hours — free, no obligation."
        buttonText="Get Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
