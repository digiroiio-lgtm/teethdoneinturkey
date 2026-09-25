import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AtAGlance from "@/components/geo/AtAGlance";
import QuickAnswer from "@/components/geo/QuickAnswer";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import {
  CATEGORY_LABELS,
  PRICES,
  PRICES_LAST_VERIFIED,
  PRICES_LAST_VERIFIED_LABEL,
  PRICE_INDEX_NAME,
  gbp,
  getPrice,
  savingBounds,
  type PriceCategory,
} from "@/lib/prices";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/turkey-dental-price-index`;
const DESCRIPTION =
  "Turkey Dental Price Index 2026: indicative Turkey prices for implants, All-on-4/6, crowns, veneers and packages against typical UK private prices, with methodology and downloadable CSV/JSON data.";
const DATE_PUBLISHED = "2026-09-25";

export const metadata: Metadata = {
  alternates: { canonical: "/turkey-dental-price-index" },
  title: { absolute: `${PRICE_INDEX_NAME}: Turkey vs UK Prices` },
  description: DESCRIPTION,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dataset",
      "@id": `${PAGE_URL}#dataset`,
      name: PRICE_INDEX_NAME,
      description:
        "Indicative partner-clinic list prices in GBP for dental treatment in Turkey, compared with typical UK private-practice price ranges. Prices are not quotes.",
      url: PAGE_URL,
      inLanguage: "en-GB",
      creator: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_PUBLISHED,
      temporalCoverage: PRICES_LAST_VERIFIED,
      spatialCoverage: [
        { "@type": "Country", name: "Turkey" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      measurementTechnique: `${SITE_URL}/methodology`,
      variableMeasured: ["Turkey price (GBP)", "UK private price range (GBP)", "Percentage difference"],
      isAccessibleForFree: true,
      distribution: [
        { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${PAGE_URL}/data.json` },
        { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `${PAGE_URL}/data.csv` },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: PRICE_INDEX_NAME, item: PAGE_URL },
      ],
    },
  ],
};

const categoryOrder: PriceCategory[] = ["implants", "full-arch", "crowns-veneers", "packages", "general"];

const futureFields = [
  { field: "Treatment requested", desc: "Implants, full-arch, crowns, veneers or combined plans" },
  { field: "Implant / crown count", desc: "Number of units in the plan" },
  { field: "Quoted price range", desc: "The itemised price given after photos or scans were reviewed" },
  { field: "Treatment duration", desc: "Number of trips and days in Turkey" },
  { field: "Patient origin", desc: "UK region the enquiry came from" },
];

export default function PriceIndexPage() {
  const osstem = getPrice("implant-osstem");
  const allOn4 = getPrice("all-on-4");
  const veneer = getPrice("emax-veneer");
  const crown = getPrice("zirconia-crown");
  const bounds = savingBounds();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Price Index" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{PRICE_INDEX_NAME}</h1>
          <p className="text-xl text-blue-200 mb-2">Turkey vs UK dental prices by treatment, from one checked dataset</p>
          <PageFreshness published="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
          <QuickAnswer question="What does dental treatment cost in Turkey compared with the UK?">
            <p>
              In the {PRICE_INDEX_NAME}, a single dental implant with crown starts from {gbp(osstem.turkeyFromGBP)} in
              Turkey, an All-on-4 full arch from {gbp(allOn4.turkeyFromGBP)} per arch including hotel and transfers,
              a porcelain veneer from {gbp(veneer.turkeyFromGBP)} and a zirconia crown at {gbp(crown.turkeyFromGBP)} per tooth.
              Across the index, Turkey prices are {bounds.min}–{bounds.max}% lower than typical UK private prices for the same treatment. Figures are indicative
              partner-clinic list prices, last checked in {PRICES_LAST_VERIFIED_LABEL}, and exclude flights.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Treatments covered", value: String(PRICES.length) },
              { label: "Currency", value: "GBP (£)" },
              { label: "Turkey prices last checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "Flights included", value: "No" },
              { label: "Price type", value: "Indicative list price" },
              { label: "Download", value: "CSV, JSON" },
            ]}
          />

          {categoryOrder.map((cat) => {
            const records = PRICES.filter((p) => p.category === cat);
            if (records.length === 0) return null;
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`} className="mt-10">
                <h2 id={`cat-${cat}`} className="text-2xl font-bold text-gray-900 mb-2 scroll-mt-24">{CATEGORY_LABELS[cat]}</h2>
                <PriceRows records={records} caption={`${CATEGORY_LABELS[cat]}: Turkey vs UK private prices`} />
              </section>
            );
          })}
          <p className="text-xs text-gray-500 mt-3">
            &ldquo;Difference&rdquo; compares the Turkey price with each end of the UK range and excludes travel. See{" "}
            <Link href="/methodology#calculation" className="text-[#1e40af] hover:underline">how it is calculated</Link>{" "}
            and the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] hover:underline">Turkey Treatment Total Cost framework</Link>{" "}
            for what else to budget for.
          </p>

          <h2 id="download" className="text-2xl font-bold text-gray-900 mt-12 mb-3 scroll-mt-24">Download the data</h2>
          <p className="mb-4">
            The same figures shown above, one row per treatment, with the verification month on every row:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li><a href="/turkey-dental-price-index/data.csv" className="text-[#1e40af] font-semibold hover:underline">CSV — turkey-dental-price-index-2026.csv</a></li>
            <li><a href="/turkey-dental-price-index/data.json" className="text-[#1e40af] font-semibold hover:underline">JSON — data.json</a></li>
          </ul>

          <h2 id="how-to-cite" className="text-2xl font-bold text-gray-900 mt-12 mb-3 scroll-mt-24">How to cite this index</h2>
          <p className="mb-4 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm">
            Teeth Done in Turkey (2026). <em>{PRICE_INDEX_NAME}</em>. Prices last verified {PRICES_LAST_VERIFIED_LABEL}.{" "}
            {PAGE_URL}
          </p>

          <h2 id="enquiry-dataset" className="text-2xl font-bold text-gray-900 mt-12 mb-3 scroll-mt-24">Coming next: enquiry dataset</h2>
          <p className="mb-4">
            This index currently publishes list prices only. A second dataset built from anonymised patient enquiries
            and itemised quotes is planned. No figures from it are published yet. When they are, this section will state
            the sample size, collection period and exclusions, and will report these fields:
          </p>
          <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 mb-4">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th scope="col" className="px-4 py-2 text-left font-semibold">Field</th>
                  <th scope="col" className="px-4 py-2 text-left font-semibold">What it records</th>
                </tr>
              </thead>
              <tbody>
                {futureFields.map((f) => (
                  <tr key={f.field} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-2 text-left font-medium text-gray-900">{f.field}</th>
                    <td className="px-4 py-2 text-gray-600">{f.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-3 scroll-mt-24">Detailed price guides</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] hover:underline">Dental implants in Turkey: cost</Link></li>
            <li><Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] hover:underline">Turkey teeth cost: all treatments</Link></li>
            <li><Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] hover:underline">Veneers in Turkey: cost</Link></li>
            <li><Link href="/price-calculator" className="text-[#1e40af] hover:underline">Price calculator</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
