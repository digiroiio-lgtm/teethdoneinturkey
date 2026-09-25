import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AtAGlance from "@/components/geo/AtAGlance";
import ComparisonTable from "@/components/geo/ComparisonTable";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";
import { VENEER_INTENT_OWNERS, VENEER_TRIP_BUDGET, veneerFollowUps } from "@/lib/veneer-cluster";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/veneers-turkey-cost`;
const TITLE = "Veneers Turkey Cost 2026: Price Per Tooth in Pounds for UK Patients";
const emax = getPrice("emax-veneer");
const zirconia = getPrice("zirconia-crown");
const composite = getPrice("composite-veneer");
const hollywood20 = getPrice("hollywood-20");
const hollywood24 = getPrice("hollywood-24");
const DESCRIPTION = `Veneers in Turkey 2026: E-max from ${gbp(emax.turkeyFromGBP)}/tooth, composite from ${gbp(composite.turkeyFromGBP)}, zirconia crowns ${gbp(zirconia.turkeyFromGBP)}. UK comparison, full-set totals, what's included.`;
const DATE_PUBLISHED = "2026-05-29";
const DATE_MODIFIED = "2026-09-25";

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
  { item: "Return flights from the UK", cost: "Typically £80–£200" },
  { item: "Hotel, if not on a package", cost: "Package prices include hotel; standalone veneer treatment does not" },
  { item: "Any treatment needed first", cost: "Fillings, root canal work or gum treatment are priced separately" },
  { item: "Optional extras", cost: "Whitening of remaining natural teeth, priced on request" },
];

// Totals are the per-tooth rates from src/lib/prices.ts multiplied out, not
// separately negotiated package prices — the all-inclusive Hollywood Smile
// packages are called out beneath the table so the two are not conflated.
const countRows = [
  { n: 8, label: "8 veneers" },
  { n: 10, label: "10 veneers" },
  { n: 16, label: "16 veneers" },
  { n: 20, label: "20 veneers (full smile line)" },
  { n: 24, label: "24 veneers (upper + lower)" },
].map(({ n, label }) => ({
  units: label,
  emax: `From ${gbp(emax.turkeyFromGBP * n)}`,
  zirconia: `From ${gbp(zirconia.turkeyFromGBP * n)}`,
  uk: `${gbp(emax.ukRangeGBP.min * n)}+`,
}));

const faqs = [
  {
    question: "How much do veneers cost in Turkey?",
    answer: "On this site, porcelain (E-max) veneers start from £190 per tooth, zirconia crowns from £130 per tooth, and composite veneers from £80 per tooth. A full set of 20 E-max veneers works out at roughly £3,800. All-inclusive Hollywood Smile crown packages, which include hotel and transfers, start at £2,800 for 20 crowns.",
  },
  {
    question: "How much do veneers cost in the UK by comparison?",
    answer: "UK private prices for a single porcelain veneer are typically £800 to £1,000 per tooth, and £1,000 to £1,500 for a zirconia crown. A full set of 20 veneers therefore commonly runs to £16,000 or more privately in the UK, against roughly £3,800 in Turkey for the same E-max material.",
  },
  {
    question: "How much is a full set of veneers in Turkey?",
    answer: "It depends what you count as a full set. Twenty units covers the full smile line and costs from £3,800 in E-max porcelain or from £2,600 in zirconia at the per-tooth rates on this page. Twenty-four units covers both arches, from £4,560 in E-max or £3,120 in zirconia. For crown work at those quantities the all-inclusive Hollywood Smile packages are usually cheaper than buying per tooth — £2,800 for 20 zirconia crowns and £3,100 for 24, both including hotel accommodation and VIP transfers. Flights are extra in every case.",
  },
  {
    question: "How much are zirconium veneers in Turkey?",
    answer: "From £130 per unit. \"Zirconium veneers\" — zirkonyum on Turkish clinic price lists — means zirconia, or zirconium dioxide, a white ceramic milled from a solid block. Note that a zirconia unit is almost always a crown rather than a veneer: it encircles the whole tooth instead of facing the front surface, which is why it is quoted below E-max at £190 and why it removes considerably more of your natural tooth. Confirm in writing which of the two you are being quoted before paying a deposit.",
  },
  {
    question: "How long does it take to get veneers in Turkey?",
    answer: "A single trip of roughly 5 to 7 days. Days one and two cover the consultation, X-rays, digital smile design and tooth preparation, with temporary veneers fitted before you leave the clinic. The permanent units are then milled and finished in the clinic's laboratory over about three to five days, and fitted and adjusted at the end of the week. Clinics with an in-house lab keep to this timetable most reliably; where the lab work is subcontracted, the trip can run longer.",
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
      about: { "@type": "MedicalProcedure", name: "Dental veneers" },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isBasedOn: `${SITE_URL}/turkey-dental-price-index`,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE_URL}/prices/turkey-teeth-cost` },
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Prices", href: "/prices/turkey-teeth-cost" }, { label: "Veneers Cost" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">How Much Do Veneers Cost in Turkey? 2026 UK Price Guide</h1>
          <p className="text-xl text-blue-200">Everything you need to know about veneer prices in Turkey</p>
          <div className="mt-3">
            <PageFreshness published="29 May 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <QuickAnswer question="How much do veneers cost in Turkey?">
              <p>
                Porcelain (E-max) veneers in Turkey cost from {gbp(emax.turkeyFromGBP)} per tooth and composite veneers
                from {gbp(composite.turkeyFromGBP)} per tooth. Zirconia units — often sold as &ldquo;zirconium
                veneers&rdquo; but almost always crowns — cost from {gbp(zirconia.turkeyFromGBP)}. A UK private E-max
                veneer is typically {ukRange(emax)}, so a full set of 20 is from {gbp(emax.turkeyFromGBP * 20)} in Turkey
                against {gbp(emax.ukRangeGBP.min * 20)} or more in the UK. Veneers need one trip of 5–7 days; flights are
                never included, and hotel is included only in package prices.
              </p>
            </QuickAnswer>

            <AtAGlance
              facts={[
                { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
                { label: "E-max veneer", value: `From ${gbp(emax.turkeyFromGBP)}/tooth` },
                { label: "Composite veneer", value: `From ${gbp(composite.turkeyFromGBP)}/tooth` },
                { label: "Zirconia crown", value: `${gbp(zirconia.turkeyFromGBP)}/tooth` },
                { label: "Trips to Turkey", value: "1 (5–7 days)" },
                { label: "Flights included", value: "No" },
                { label: "Hotel included", value: "Packages only" },
                { label: "Tooth removed (E-max)", value: "About 0.3–0.7mm" },
              ]}
            />

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer prices in Turkey vs the UK</h2>
            <PriceRows records={[emax, composite, zirconia, hollywood20, hollywood24]} caption="Veneer and crown prices: Turkey vs UK private" />
            <p className="text-xs text-gray-500">
              Indicative partner-clinic list prices, checked {PRICES_LAST_VERIFIED_LABEL}. The difference column compares
              treatment fees only and excludes travel. Full dataset:{" "}
              <Link href="/turkey-dental-price-index" className="text-[#1e40af] hover:underline">Turkey Dental Price Index 2026</Link>.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost by Number of Veneers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per-tooth pricing is what most clinics quote, so your total depends on how many teeth are treated. Eight to ten
              units covers the teeth visible in a normal smile; sixteen to twenty extends across the full smile line; twenty-four
              includes the upper and lower arches. The figures below apply the base per-tooth rates above, so treat them as the
              clinical cost before flights.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Number of Units</th>
                    <th className="px-4 py-3 text-right">E-max Veneers</th>
                    <th className="px-4 py-3 text-right">Zirconia Crowns</th>
                    <th className="px-4 py-3 text-right">UK Equivalent (E-max)</th>
                  </tr>
                </thead>
                <tbody>
                  {countRows.map((r, i) => (
                    <tr key={r.units} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.units}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.emax}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.zirconia}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              At the 20 and 24-unit level, compare these clinical-only figures against the all-inclusive Hollywood Smile packages
              ({gbp(hollywood20.turkeyFromGBP)} for 20 zirconia crowns, {gbp(hollywood24.turkeyFromGBP)} for 24), which bundle hotel accommodation and VIP transfers into the price. For
              a full set, the package route is usually the cheaper way to buy the same crown work.{" "}
              <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-semibold underline">See the package breakdown</Link>.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">&ldquo;Zirconium&rdquo; Veneers: What You Are Actually Being Quoted</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Turkish clinic price lists and UK patients alike often say <strong>zirconium veneers</strong>, and Turkish clinics
              frequently write <em>zirkonyum</em>. All three names refer to the same material: zirconia — zirconium dioxide — a
              white ceramic milled from a solid block. Zirconium on its own is a metal and is not what goes in your mouth, so the
              popular name is a slight misnomer rather than a different product.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The distinction that does affect you is not the spelling but the restoration type. A zirconia unit is normally a{" "}
              <strong>crown</strong>, which encircles the whole tooth, and not a veneer, which is a facing bonded to the front
              surface only. That is why zirconia is quoted lower per unit than E-max at {gbp(zirconia.turkeyFromGBP)} against {gbp(emax.turkeyFromGBP)}: it is a different
              procedure, and it removes considerably more of your natural tooth. Zirconia is the harder-wearing choice if you grind
              your teeth; E-max is the more translucent choice and preserves more tooth structure.
            </p>
            <p className="text-sm text-gray-500 mb-0">
              Which one you are actually being offered is the single most important thing to confirm in writing before you pay a
              deposit — our{" "}
              <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold underline">veneers or crowns guide</Link>{" "}
              sets out how much tooth each removes and what is irreversible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Veneer Prices in Turkey</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                { title: "Material", desc: "E-max is premium and most popular. Zirconia is stronger for grinders. Composite is most affordable." },
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
              Veneer treatment is normally completed in a single trip of 5 to 7 days, so the realistic total is the{" "}
              <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>:
              the treatment price, plus travel — an illustrative {gbp(VENEER_TRIP_BUDGET.min)}–{gbp(VENEER_TRIP_BUDGET.max)} for
              a 6-night trip including flights and hotel — plus a follow-up allowance in case a veneer needs attention
              after you are home. Because there is only one trip, travel is a small share of the total for a full set
              and a large share for one or two veneers. See{" "}
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

          <ComparisonTable
            id="turkey-vs-uk"
            title="Veneers in Turkey vs the UK: trade-offs beyond price"
            options={["Turkey", "UK private"]}
            rows={[
              { factor: "E-max veneer fee", values: [`From ${gbp(emax.turkeyFromGBP)} per tooth`, `${ukRange(emax)} per tooth`] },
              { factor: "Time", values: ["One trip of 5–7 days", "Several appointments over weeks, near home"] },
              { factor: "Time to review temporaries", values: ["A few days in Turkey", "Usually longer, between appointments"] },
              { factor: "A chipped or debonded veneer", values: ["Return trip, or pay a UK dentist", "Same practice, nearby"] },
              { factor: "Regulator", values: ["Turkish Ministry of Health", "General Dental Council (GDC)"] },
              { factor: "Best suited to", values: ["Healthy teeth and gums, a planned full set", "One or two veneers, or teeth needing other work first"] },
            ]}
            caption="Turkey fees from the partner-clinic price list; UK ranges are typical private prices. See methodology."
          />

          <NotForYou
            title="Who veneers in Turkey may not suit"
            items={[
              "People with untreated gum disease or decay — these need treating first, and veneers placed on an unhealthy base fail sooner.",
              "Heavy tooth grinders who will not wear a night guard, because grinding is a common cause of chipped and debonded veneers.",
              "Anyone who has not decided how many teeth they want treated: preparing a tooth for porcelain is irreversible, so the number should be settled before travelling.",
              "Patients wanting one or two veneers, where a trip's travel cost can take most of the saving.",
            ]}
          />

          <DecisionTree
            title="Is Turkey the right choice for your veneers?"
            steps={[
              { condition: "you want 8 or more veneers on healthy teeth", action: "the fee difference usually covers the trip many times over; compare material, lab and dentist, not just price." },
              { condition: "you are being quoted zirconia units", action: "ask whether they are veneers or crowns — crowns remove far more tooth. Read the veneers-or-crowns guide first." },
              { condition: "you want one or two veneers", action: "add the trip cost to the Turkey fee and compare with a UK quote; the saving may be small." },
              { condition: "you have gum problems, decay or a bite problem", action: "have a dental assessment in the UK first; those need treating before any veneer work." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `E-max from ${gbp(emax.turkeyFromGBP)}, composite from ${gbp(composite.turkeyFromGBP)}, zirconia crown ${gbp(zirconia.turkeyFromGBP)}`, basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK E-max veneer ${ukRange(emax)}`, basis: "Typical UK private ranges", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Full-set totals", basis: "Calculated: per-tooth price × number of teeth", href: "/methodology#calculation", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `Trip budget ${gbp(VENEER_TRIP_BUDGET.min)}–${gbp(VENEER_TRIP_BUDGET.max)}`, basis: "Illustrative editorial estimate, not a quote", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={veneerFollowUps(VENEER_INTENT_OWNERS.cost)} />

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Veneer Quote</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Hollywood Smile Packages</Link>
            <Link href="/prices/turkey-teeth-cost" className="inline-block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Full Turkey Teeth Price Guide</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Veneers Turkey Cost: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/guides/best-veneers-turkey", title: "Best Veneers in Turkey: UK Patient Guide", desc: "How to choose the right veneers, clinic and material." },
            { href: "/guides/teeth-in-turkey", title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety and travel — the full picture." },
            { href: "/treatments/veneers-turkey", title: "Dental Veneers Turkey", desc: "E-max porcelain veneers from £190/tooth. Full guide." },
            { href: "/guides/turkey-teeth-veneers-or-crowns", title: "Veneers or Crowns in Turkey?", desc: "Which treatment is right for you — explained clearly." },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-gray-900 mb-1">{l.title}</p>
              <p className="text-sm text-gray-600">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection title="Find Out Exactly What Your Veneers Will Cost" subtitle="Send us your photos and we'll prepare a personalised veneer quote within 24 hours — free, no obligation." buttonText="Get Free Quote" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
