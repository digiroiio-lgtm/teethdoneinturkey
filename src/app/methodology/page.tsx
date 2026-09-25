import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AtAGlance from "@/components/geo/AtAGlance";
import QuickAnswer from "@/components/geo/QuickAnswer";
import PageFreshness from "@/components/geo/PageFreshness";
import { PRICES, PRICES_LAST_VERIFIED_LABEL } from "@/lib/prices";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/methodology`;
const TITLE = "Price & Data Methodology | Teeth Done in Turkey";
const H1 = "How Our Prices and Data Are Collected, Checked and Calculated";
const DESCRIPTION =
  "Where Teeth Done in Turkey's published prices come from, what they include and exclude, how UK comparisons and percentage differences are calculated, and how often figures are checked.";
const DATE_PUBLISHED = "2026-09-25";

export const metadata: Metadata = {
  alternates: { canonical: "/methodology" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: H1,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_PUBLISHED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@type": "DefinedTerm", name: "Turkey Treatment Total Cost", url: `${PAGE_URL}#total-cost` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Methodology", item: PAGE_URL },
      ],
    },
  ],
};

const totalCostParts = [
  {
    name: "Clinical Cost",
    def: "The fee for the clinical procedure itself: consultation, imaging (such as a CBCT scan), surgery or tooth preparation, anaesthetic and in-stay check-ups.",
  },
  {
    name: "Prosthetic Cost",
    def: "The fee for what is fitted: the crown, veneer, bridge or full-arch prosthesis, and the material or implant brand it uses. Brand and material choice is usually the largest single price variable.",
  },
  {
    name: "Travel Cost",
    def: "Flights, accommodation, transfers and time off work for every trip the treatment needs. Implants normally need two trips; crowns and veneers normally need one. Packages on this site include hotel and transfers but never flights.",
  },
  {
    name: "Follow-up Risk Allowance",
    def: "Money a patient sets aside in case something needs attention after returning home: an extra trip to the treating clinic, or paying a UK dentist for an interim check or repair. It is not a fee anyone charges, so this site does not publish a figure for it — but leaving it out understates the real cost of treatment abroad.",
  },
];

export default function MethodologyPage() {
  const recordCount = PRICES.length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Methodology" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <PageFreshness published="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
          <QuickAnswer question="Where do the prices on this site come from?">
            <p>
              Turkey prices on Teeth Done in Turkey are partner-clinic list prices in pounds sterling, confirmed
              directly with clinic coordinators. UK comparison prices are typical private-practice ranges drawn from
              industry surveys and published UK practice price lists. Every figure is indicative, not a quote: your
              own price depends on a clinical assessment. Turkey prices were last checked in {PRICES_LAST_VERIFIED_LABEL}.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Turkey price source", value: "Partner clinic list prices" },
              { label: "UK price source", value: "Surveys & published practice price lists" },
              { label: "Currency", value: "GBP (£)" },
              { label: "Price type", value: "Indicative, not a quote" },
              { label: "Treatments in the index", value: String(recordCount) },
              { label: "Turkey prices last checked", value: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />

          <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">1. Data sources</h2>
          <p className="mb-4">
            <strong>Turkey prices</strong> are the list prices of the partner dental clinics this service coordinates
            with, confirmed with each clinic&apos;s patient coordinator. They are the prices a UK patient is quoted
            before a clinical assessment, for the brand or material named.
          </p>
          <p className="mb-4">
            <strong>UK prices</strong> are typical ranges for the equivalent private treatment in the UK, based on
            industry surveys and published UK private-practice price lists. Individual UK practices charge more or less
            than these ranges; they are a reference point, not a claim about any specific practice.
          </p>
          <p className="mb-4">
            <strong>NHS charges</strong> quoted on this site use the NHS England patient charge bands in force at the
            time, updated each April when new bands are announced.
          </p>

          <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">2. What a published price covers — and what it does not</h2>
          <p className="mb-4">
            A published Turkey price covers the named treatment with the named brand or material. Package prices
            (All-on-4, All-on-6 and Hollywood Smile packages) also include hotel accommodation and airport and clinic
            transfers. The following are <strong>never</strong> included in a published price:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Flights from the UK</li>
            <li>Bone grafts, sinus lifts or extractions that a scan shows you need, unless listed separately</li>
            <li>Travel insurance</li>
            <li>Care from a UK dentist after you return</li>
          </ul>
          <p className="mb-4">
            &ldquo;From&rdquo; prices are the lowest price for that treatment across partner clinics, usually with the
            entry-level brand or material. Premium brands, more teeth and additional procedures are priced on top.
          </p>

          <h2 id="calculation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">3. How comparisons are calculated</h2>
          <p className="mb-4">
            The percentage difference shown next to a price compares the Turkey starting price with each end of the UK
            range: <code className="bg-gray-100 px-1 rounded">1 − (Turkey price ÷ UK price)</code>, rounded to the
            nearest whole percent. For example, a £250 implant against a £2,000–£3,000 UK range is 88–92% lower. The
            comparison is between treatment fees only; it does not subtract travel costs, which is why this site also
            publishes the total-cost framework below.
          </p>

          <h2 id="total-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">4. The Turkey Treatment Total Cost framework</h2>
          <p className="mb-4">
            <strong>Turkey Treatment Total Cost</strong> is the full amount a UK patient should budget for dental
            treatment in Turkey. It is the sum of four parts:
          </p>
          <p className="mb-4 rounded-xl bg-blue-50/60 border border-blue-100 p-4 font-semibold text-gray-900">
            Turkey Treatment Total Cost = Clinical Cost + Prosthetic Cost + Travel Cost + Follow-up Risk Allowance
          </p>
          <dl className="space-y-3 mb-4">
            {totalCostParts.map((p) => (
              <div key={p.name}>
                <dt className="font-semibold text-gray-900">{p.name}</dt>
                <dd className="text-gray-700">{p.def}</dd>
              </div>
            ))}
          </dl>
          <p className="mb-4">
            Published treatment prices on this site cover the Clinical and Prosthetic parts. Package prices cover part
            of the Travel part (hotel and transfers). Flights and the Follow-up Risk Allowance are always the
            patient&apos;s own to estimate — which is why the headline percentage difference overstates the saving on
            the total cost, especially for single implants that need two trips.
          </p>

          <h2 id="update-frequency" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">5. How often prices are checked</h2>
          <p className="mb-4">
            Price pages are updated when partner pricing changes, and each price page shows the month its figures were
            last checked. All prices on this site are held in one central dataset so that the same treatment always
            shows the same price on every page. The full dataset is published as the{" "}
            <Link href="/turkey-dental-price-index" className="text-[#1e40af] font-semibold hover:underline">Turkey Dental Price Index</Link>.
          </p>

          <h2 id="limitations" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">6. Limitations</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Prices come from this service&apos;s partner clinics, not from a survey of every clinic in Turkey. Other clinics charge more or less.</li>
            <li>UK ranges are typical, not an average of a defined sample of practices.</li>
            <li>No price is a quote. A final price needs your dental history, photos and — for implants — a scan.</li>
            <li>This site does not yet publish figures from patient enquiries or quotes. When it does, the sample size, collection period and exclusions will be stated on the price index.</li>
          </ul>

          <h2 id="corrections" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">7. Corrections</h2>
          <p className="mb-4">
            If a price or figure on this site looks wrong or out of date, email{" "}
            <a href="mailto:hello@teethdoneinturkey.co.uk" className="text-[#1e40af] underline">hello@teethdoneinturkey.co.uk</a>.
            How clinical content is written and reviewed is covered separately in the{" "}
            <Link href="/editorial-policy" className="text-[#1e40af] font-semibold hover:underline">editorial and medical review policy</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
