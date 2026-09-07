import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/veneers-turkey-cost`;
const TITLE = "Veneers Turkey Cost 2026: Price Per Tooth & Full Set";
const DESCRIPTION =
  "Veneers Turkey cost 2026: E-max from £190/tooth, zirconium/zirconia from £130, composite from £80. Full-set prices, UK comparison and total trip cost.";
const DATE_MODIFIED = "2026-09-07";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/veneers-turkey-cost" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const included = [
  "Consultation and digital smile design preview",
  "X-rays and clinical assessment",
  "Tooth preparation",
  "Temporary veneers while the permanent set is made",
  "Fitting, bonding and final adjustments",
  "Aftercare instructions and clinic contact once you are home",
];

const notIncluded = [
  { item: "Return flights from the UK", cost: "Typically £100–£250" },
  { item: "Hotel, if not on a package", cost: "Package prices include hotel; standalone veneer treatment does not" },
  { item: "Any treatment needed first", cost: "Fillings, root canal work or gum treatment are priced separately" },
  { item: "Optional extras", cost: "Whitening of remaining natural teeth, priced on request" },
];

// Full-set pricing is arithmetic from the per-tooth figures in the table above
// (E-max £190, zirconia £130), not a separate price list — keep them in sync.
const EMAX_PER_TOOTH = 190;
const ZIRCONIA_PER_TOOTH = 130;
const UK_EMAX_LOW = 800;
const UK_EMAX_HIGH = 1000;

const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

const setSizes = [4, 6, 8, 10, 16, 20];

const byQuantity = setSizes.map(count => ({
  count,
  emax: gbp(count * EMAX_PER_TOOTH),
  zirconia: gbp(count * ZIRCONIA_PER_TOOTH),
  uk: `${gbp(count * UK_EMAX_LOW)}–${gbp(count * UK_EMAX_HIGH)}`,
}));

const faqs = [
  {
    question: "How much are veneers in Turkey?",
    answer: "Porcelain (E-max) veneers start from £190 per tooth, zirconium (zirconia) crowns from £130 per tooth, and composite veneers from £80 per tooth. What you actually pay depends far more on how many teeth you treat than on anything else: 8 E-max veneers work out at about £1,520, 16 at about £3,040 and a full set of 20 at about £3,800.",
  },
  {
    question: "How much is a full set of veneers in Turkey?",
    answer: "A full set is normally 20 teeth — the ones visible when you smile — and comes to roughly £3,800 in E-max at £190 per tooth. A 24-tooth set costs more. If you are quoted zirconia rather than E-max, the all-inclusive Hollywood Smile package is £2,800 for 20 crowns and £3,100 for 24, including hotel and transfers. The equivalent 20-tooth set at UK private prices is typically £16,000 to £20,000.",
  },
  {
    question: "How much do composite veneers cost in Turkey?",
    answer: "Composite veneers cost from £80 to £120 per tooth in Turkey, against roughly £300 to £500 per tooth privately in the UK. Composite is applied directly to the tooth in a single visit and removes little or no enamel, which makes it the least invasive and least expensive option — but it stains more readily and typically lasts around 4 to 7 years, against 10 to 15 years for E-max.",
  },
  {
    question: "What is the difference between zirconium and zirconia veneers?",
    answer: "They are the same material. Zirconium is the chemical element; zirconia is the ceramic (zirconium dioxide) that dental units are milled from, and UK patients search for both spellings. The distinction that actually matters is not the spelling but the treatment: zirconia units are crowns, which are prepared on every surface of the tooth, not veneers, which are thin shells bonded to the front only.",
  },
  {
    question: "How much do veneers cost in Turkey?",
    answer: "On this site, porcelain (E-max) veneers start from £190 per tooth, zirconia crowns from £130 per tooth, and composite veneers from £80 per tooth. A full set of 20 E-max veneers works out at roughly £3,800. All-inclusive Hollywood Smile crown packages, which include hotel and transfers, start at £2,800 for 20 crowns.",
  },
  {
    question: "How much do veneers cost in the UK by comparison?",
    answer: "UK private prices for a single porcelain veneer are typically £800 to £1,000 per tooth, and £1,000 to £1,500 for a zirconia crown. A full set of 20 veneers therefore commonly runs to £16,000 or more privately in the UK, against roughly £3,800 in Turkey for the same E-max material.",
  },
  {
    question: "Why are veneers so much cheaper in Turkey?",
    answer: "The saving comes from clinic overheads, staff costs and general cost of living being lower in Turkey, not from cheaper materials. Partner clinics use the same Ivoclar E-max ceramic and the same CAD/CAM and digital smile design technology found in UK practices.",
  },
  {
    question: "Is the quoted veneer price all inclusive?",
    answer: "Per-tooth veneer pricing covers the clinical treatment itself: consultation, imaging, preparation, temporaries, fitting and adjustments. Flights are never included. Hotel and transfers are included in the all-inclusive package prices but not in standalone per-tooth treatment. Always ask for an itemised quote confirming exactly what is and is not covered.",
  },
  {
    question: "Am I being quoted veneers or crowns?",
    answer: "This matters more than the price. Zirconia is a crown material, so a quote for zirconia units is crown work even if it is described as veneers. Crowns remove considerably more tooth structure than veneers. Ask any clinic to confirm in writing, per tooth, which treatment is planned before agreeing to anything.",
  },
  {
    question: "Can I pay for veneers in Turkey monthly?",
    answer: "Yes. Monthly payment plans are available from £82/month with 0% APR representative over 12, 24 or 36 months, subject to an affordability and credit assessment. A soft-search pre-qualification lets you check eligibility without affecting your credit score.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-GB",
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE_URL}/prices/teeth-done-in-turkey-cost` },
        { "@type": "ListItem", position: 3, name: "Veneers Turkey Cost", item: PAGE_URL },
      ],
    },
    // Priced offers for the three veneer materials. The global OfferCatalog in
    // layout.tsx covers E-max and zirconia at business level; this adds the
    // composite tier and ties all three to the page a price query lands on.
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: "Veneer and Crown Prices in Turkey",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#business` },
      itemListElement: [
        {
          "@type": "Offer",
          name: "Porcelain / E-max Veneers",
          priceCurrency: "GBP",
          price: "190",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "GBP",
            minPrice: "190",
            maxPrice: "220",
            unitText: "per tooth",
          },
          itemOffered: { "@type": "MedicalProcedure", name: "Porcelain Veneers" },
          url: PAGE_URL,
        },
        {
          "@type": "Offer",
          name: "Zirconium / Zirconia Crowns",
          priceCurrency: "GBP",
          price: "130",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "GBP",
            price: "130",
            unitText: "per tooth",
          },
          itemOffered: { "@type": "MedicalProcedure", name: "Zirconia Crowns" },
          url: PAGE_URL,
        },
        {
          "@type": "Offer",
          name: "Composite Veneers",
          priceCurrency: "GBP",
          price: "80",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "GBP",
            minPrice: "80",
            maxPrice: "120",
            unitText: "per tooth",
          },
          itemOffered: { "@type": "MedicalProcedure", name: "Composite Veneers" },
          url: PAGE_URL,
        },
      ],
    },
  ],
};

export default function VeneersCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prices", href: "/prices/teeth-done-in-turkey-cost" }, { label: "Veneers Cost" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey Cost – 2026 Price Guide</h1>
          <p className="text-xl text-blue-200">Everything you need to know about veneer prices in Turkey</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Do Veneers Cost in Turkey?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
              Porcelain (E-max) veneers in Turkey cost from <strong>£190 per tooth</strong>, zirconium (zirconia) crowns from <strong>£130 per tooth</strong>, and composite veneers from <strong>£80 per tooth</strong>. The equivalent UK private price is roughly £800 to £1,000 for a porcelain veneer, so a full set of 20 works out at about <strong>£3,800</strong> in Turkey against £16,000 to £20,000 in the UK. Flights are extra; package prices include hotel and transfers.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Veneer Type</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Zirconium / Zirconia Crown", uk: "£1,000–£1,500", turkey: "£130", saving: "~90%" },
                    { type: "E-max Porcelain Veneer", uk: "£800–£1,000", turkey: "£190–£220", saving: "78%" },
                    { type: "Composite (direct)", uk: "£300–£500", turkey: "£80–£120", saving: "75%" },
                    { type: "Hollywood Smile 20 Crowns (package)", uk: "£20,000–£30,000", turkey: "£2,800", saving: "~87%" },
                    { type: "Hollywood Smile 24 Crowns (package)", uk: "£24,000–£36,000", turkey: "£3,100", saving: "~87%" },
                  ].map((r, i) => (
                    <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.type}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                      <td className="px-4 py-3 text-right"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.saving}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Set Veneers Turkey Price: Cost by Number of Teeth</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Per-tooth pricing is only half the answer, because almost nobody treats one tooth. Most UK patients treat the teeth visible when they smile — commonly 8, 10, 16 or 20. The figures below are the per-tooth prices above multiplied out, so you can find your own number rather than estimating from a headline &ldquo;from&rdquo; price.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <caption className="sr-only">Veneer cost in Turkey by number of teeth, compared with UK private prices</caption>
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Number of Teeth</th>
                    <th className="px-4 py-3 text-right">E-max (Turkey)</th>
                    <th className="px-4 py-3 text-right">Zirconium (Turkey)</th>
                    <th className="px-4 py-3 text-right">E-max (UK private)</th>
                  </tr>
                </thead>
                <tbody>
                  {byQuantity.map((r, i) => (
                    <tr key={r.count} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">
                        {r.count} teeth{r.count === 20 ? " (full set)" : ""}
                      </td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.emax}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.zirconia}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              E-max at £190 per tooth and zirconium at £130 per tooth; UK column at £800–£1,000 per porcelain veneer. Turkey figures are treatment only and exclude flights. If you want zirconium crowns for a full set, compare these totals against the all-inclusive{" "}
              <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile package</Link>{" "}
              at £2,800 for 20 crowns or £3,100 for 24 — those prices include hotel and transfers, so for a full set the package is usually the cheaper route.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Composite Veneers Turkey Price</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Composite veneers cost <strong>£80 to £120 per tooth</strong> in Turkey, against roughly £300 to £500 per tooth privately in the UK. Composite is a tooth-coloured resin shaped directly onto the tooth by the dentist in a single visit — there is no laboratory stage, which is why it is both the cheapest option and the quickest.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The trade-off is durability and stain resistance. Composite typically lasts around 4 to 7 years before it needs repolishing or replacing, where E-max commonly lasts 10 to 15 years, and it picks up staining from coffee, tea and tobacco far more readily than porcelain does. Its advantage is that it removes little or no enamel, so it is the one option on this page that is broadly reversible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Composite makes most sense for a small number of front teeth, for chips and minor shape corrections, or where you want to see the effect before committing to irreversible preparation. For a full-set smile makeover, most patients choose E-max or zirconium. See{" "}
              <Link href="/blog/composite-vs-porcelain-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">composite vs porcelain veneers compared</Link>{" "}
              for the full breakdown.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zirconium Veneer Prices — and What &ldquo;Zirconium&rdquo; Actually Means</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zirconium units cost <strong>from £130 per tooth</strong> in Turkey, against £1,000 to £1,500 for the UK private equivalent. &ldquo;Zirconium&rdquo; and &ldquo;zirconia&rdquo; are used interchangeably in dental marketing and mean the same thing here: zirconium is the chemical element, zirconia is the ceramic (zirconium dioxide) that the units are milled from. You will see both spellings in Turkish clinic quotes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The distinction that matters clinically is not the spelling. It is that <strong>zirconium units are crowns, not veneers</strong>. A crown is prepared on every surface of the tooth; a veneer is a thin shell bonded to the front only. Zirconium is the cheaper number on a quote, but it is the more destructive treatment — which is the single most common misunderstanding behind the &ldquo;turkey teeth&rdquo; results people regret.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Zirconium is the right choice where a tooth genuinely needs full coverage — heavily filled, root-treated, badly worn or broken teeth, and for patients who grind. It is the wrong choice for healthy teeth that only need a cosmetic change. Compare the materials in{" "}
              <Link href="/blog/e-max-vs-zirconia-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">E-max vs zirconia veneers</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Veneer Prices in Turkey</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                { title: "Material", desc: "E-max is premium and most popular. Zirconium (zirconia) is stronger for grinders. Composite is most affordable." },
                { title: "Number of veneers", desc: "Clinics often offer package discounts for 12+ veneers." },
                { title: "Veneers or crowns", desc: "Zirconia units are crowns, not veneers. They are cheaper per unit but remove far more tooth structure." },
                { title: "Dentist experience", desc: "Specialist aesthetic dentists with international training command slightly higher fees." },
              ].map(f => (
                <li key={f.title} className="flex gap-3">
                  <span className="text-[#1e40af] font-bold mt-0.5">→</span>
                  <div><strong className="text-gray-900">{f.title}:</strong> {f.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Veneer Price Includes</h2>
            <ul className="space-y-2 text-gray-700 mb-6">
              {included.map(item => (
                <li key={item} className="flex gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-gray-900 mb-3">What It Does Not Include</h3>
            <div className="overflow-x-auto rounded-2xl shadow-sm ring-1 ring-gray-100">
              <table className="w-full bg-white text-sm">
                <tbody>
                  {notIncluded.map((r, i) => (
                    <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.item}</td>
                      <td className="px-4 py-3 text-gray-600">{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Are You Being Quoted Veneers or Crowns?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the most important question on any veneer quote, and it changes the clinical outcome far more than the price does. A veneer is a thin shell bonded to the front of the tooth, removing roughly 0.3mm to 0.7mm. A crown covers the whole tooth and is prepared on every surface. Zirconia is a crown material, so a quote for zirconia units is crown work regardless of the wording used.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Read{" "}
              <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">veneers or crowns, and how much tooth is removed</Link>{" "}
              before you accept any full-mouth quote.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Trip Cost and Paying Monthly</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Veneer treatment is normally completed in a single trip of 5 to 7 days, so the realistic total is the treatment price plus return flights and, where hotel is not bundled, accommodation. Even adding £500 to £700 for a week, a full E-max set remains a fraction of the UK private equivalent. See{" "}
              <Link href="/travel-to-turkey/how-long-stay-turkey-dental" className="text-[#1e40af] font-semibold hover:underline">how long you need to stay</Link>{" "}
              for the day by day breakdown.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Spreading the cost is available from £82/month with 0% APR representative over 12, 24 or 36 months, subject to eligibility. See{" "}
              <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">monthly payment options</Link>{" "}
              or estimate your own combination with the{" "}
              <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Veneer Quote</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Hollywood Smile Packages</Link>
            <Link href="/guides/turkey-teeth-cost" className="inline-block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Full Turkey Teeth Price Guide</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Veneers Turkey Cost: FAQs" />

      <CTASection title="Find Out Exactly What Your Veneers Will Cost" subtitle="Send us your photos and we'll prepare a personalised veneer quote within 24 hours — free, no obligation." buttonText="Get Free Quote" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
