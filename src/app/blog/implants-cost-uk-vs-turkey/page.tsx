import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AtAGlance from "@/components/geo/AtAGlance";
import ComparisonTable from "@/components/geo/ComparisonTable";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { IMPLANT_INTENT_OWNERS, implantFollowUps } from "@/lib/implant-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice } from "@/lib/prices";

export const revalidate = 86400;

const PATH = IMPLANT_INTENT_OWNERS.ukComparison;
const TITLE = "Dental Implants Cost: UK vs Turkey 2026";

const osstem = getPrice("implant-osstem");
const straumann = getPrice("implant-straumann");
const allOn4 = getPrice("all-on-4");
const allOn6 = getPrice("all-on-6");

const DESCRIPTION = `Dental implants UK vs Turkey: ${gbp(osstem.ukRangeGBP.min)}–${gbp(straumann.ukRangeGBP.max ?? 0)} per implant in the UK, ${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)} in Turkey. Worked totals, trade-offs and who each suits.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// Worked examples multiply the published per-implant price; they are
// calculations from the price index, not separate quotes.
const workedExamples = [1, 2, 4].map((n) => ({
  label: `${n} implant${n > 1 ? "s" : ""} with crown${n > 1 ? "s" : ""}`,
  turkey: `${gbp(osstem.turkeyFromGBP * n)}–${gbp(straumann.turkeyFromGBP * n)}`,
  uk: `${gbp(osstem.ukRangeGBP.min * n)}–${gbp((straumann.ukRangeGBP.max ?? 0) * n)}`,
  trips: "2",
}));

export default function ImplantsCostUKvsTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-implants-cost-uk-vs-turkey"
        path={PATH}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-04-01"
        dateModified="2026-09-25"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: TITLE, path: PATH },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Implants Cost: UK vs Turkey – 2026 Comparison</h1>
          <PageFreshness published="1 April 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="Are dental implants cheaper in Turkey than in the UK?">
            <p>
              Yes, on the treatment fee. A single implant with crown costs {gbp(osstem.ukRangeGBP.min)}–{gbp(straumann.ukRangeGBP.max ?? 0)} at
              a UK private practice and {gbp(osstem.turkeyFromGBP)}–{gbp(straumann.turkeyFromGBP)} at partner clinics in
              Turkey, depending on the implant brand. The gap narrows once you add flights and hotel for the two trips
              implants usually need, and it is smallest for one implant and largest for a full arch. UK treatment keeps
              aftercare close to home; Turkey treatment means returning to the clinic, or paying a UK dentist, if a
              problem appears.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "UK single implant + crown", value: `${gbp(osstem.ukRangeGBP.min)}–${gbp(straumann.ukRangeGBP.max ?? 0)}` },
              { label: "Turkey single implant + crown", value: `${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}` },
              { label: "Trips to Turkey", value: "Usually 2" },
              { label: "Travel in the Turkey price", value: "No (single implants)" },
              { label: "Largest saving", value: "Multiple implants / full arch" },
            ]}
          />

          <h2 id="price-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">UK vs Turkey implant prices by treatment</h2>
          <PriceRows records={[osstem, getPrice("implant-medentika"), straumann, getPrice("bone-graft"), allOn4, allOn6]} caption="Implant prices: UK private vs Turkey" />
          <p className="text-xs text-gray-500 mb-6">
            Turkey: partner-clinic list prices. UK: typical private ranges. Both checked {PRICES_LAST_VERIFIED_LABEL} —{" "}
            <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link>. The price for your case
            is on the{" "}
            <Link href={IMPLANT_INTENT_OWNERS.cost} className="text-[#1e40af] hover:underline">dental implant cost page</Link>{" "}
            and in your own quote.
          </p>

          <h2 id="worked-examples" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Worked examples: one, two and four implants</h2>
          <p className="mb-3">
            Each row multiplies the per-implant price from entry-level (Osstem) to premium (Straumann). Travel is not
            included in the Turkey column, and the number of trips does not rise with the number of implants.
          </p>
          <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 mb-4">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th scope="col" className="px-4 py-2 text-left font-semibold">Treatment</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">UK private</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey fee</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Trips</th>
                </tr>
              </thead>
              <tbody>
                {workedExamples.map((r) => (
                  <tr key={r.label} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-2 text-left font-medium text-gray-900">{r.label}</th>
                    <td className="px-4 py-2 text-right">{r.uk}</td>
                    <td className="px-4 py-2 text-right text-[#1e40af] font-semibold">{r.turkey}</td>
                    <td className="px-4 py-2 text-right">{r.trips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            Because the travel cost is roughly fixed and the fee difference grows with every implant, the case for
            Turkey is weakest for a single implant and strongest for multiple implants or a full arch. The complete
            budget is the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>:
            clinical cost + prosthetic cost + travel cost + a follow-up risk allowance.
          </p>

          <h2 id="uk-extras" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What a UK implant quote often adds on</h2>
          <p className="mb-3">
            UK private practices often price the stages of implant treatment separately. Typical UK charges for the
            stages around the implant itself are:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Initial consultation: £100–£200</li>
            <li>CBCT scan: £100–£300</li>
            <li>Bone graft, if needed: £500–£1,500</li>
            <li>Sinus lift, if needed: £1,000–£2,000</li>
          </ul>
          <p className="mb-4">
            At partner clinics in Turkey, the consultation and CBCT scan are included in the implant price; a bone graft
            is priced separately. Compare quotes line by line, not headline to headline.
          </p>

          <h2 id="same-brands" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Are the implant brands the same?</h2>
          <p className="mb-4">
            They can be. Straumann implants, for example, are used both in UK private practices and at partner clinics in
            Turkey, and the Turkey Straumann price is {gbp(straumann.turkeyFromGBP)} with crown. The cheapest Turkey
            prices, from {gbp(osstem.turkeyFromGBP)}, use Osstem, a South Korean system. When comparing a UK and a Turkey
            quote, check the brand is the same on both — otherwise you are comparing different products. How each
            brand is placed, and what happens on each trip, is covered in the{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">dental implants Turkey guide</Link>.
          </p>

          <ComparisonTable
            id="trade-offs"
            title="UK vs Turkey implants: trade-offs beyond the fee"
            options={["UK private", "Turkey"]}
            rows={[
              { factor: "Treatment fee", values: ["Higher", "Lower — typically 69–92% on a single implant"] },
              { factor: "Travel and time off", values: ["Minimal", "Two trips, 3–5 days then a few days"] },
              { factor: "Aftercare and repairs", values: ["Same practice, nearby", "Return to the clinic, or pay a UK dentist"] },
              { factor: "Regulator", values: ["General Dental Council", "Turkish Ministry of Health"] },
              { factor: "Complaints and redress", values: ["UK routes (practice, GDC, Dental Complaints Service)", "Through the clinic and Turkish routes"] },
              { factor: "Speed", values: ["Several appointments over months", "Compressed into two short trips"] },
            ]}
          />

          <NotForYou
            title="When a UK implant may be the better choice"
            items={[
              "You need one implant and the UK quote, after travel for two trips, is close to the Turkey total.",
              "You have a medical condition or take medication that needs your own dentist or doctor to monitor healing.",
              "You could not easily return to Turkey if the implant or crown needed attention.",
            ]}
          />

          <DecisionTree
            title="How to decide between a UK and a Turkey implant"
            steps={[
              { condition: "you need a single implant", action: "get a UK quote and a Turkey quote, add two trips of flights and hotel to the Turkey figure, and compare the totals." },
              { condition: "you need three or more implants or a full arch", action: "the Turkey fee saving usually outweighs travel; compare brands and guarantee terms, not just price." },
              { condition: "the two quotes use different implant brands", action: "ask each provider to quote the same brand, or compare like for like using the price table above." },
              { condition: "you have health conditions or doubts about bone volume", action: "have a clinical assessment and scan before deciding where to be treated." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `Turkey implant + crown ${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}`, basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK implant + crown ${gbp(osstem.ukRangeGBP.min)}–${gbp(straumann.ukRangeGBP.max ?? 0)}`, basis: "Typical UK private ranges", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Worked examples", basis: "Calculated: per-implant price × number of implants", href: "/methodology#calculation", checked: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />

          <FollowUpQuestions items={implantFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Get a like-for-like implant quote</p>
            <p className="text-gray-600 text-sm mb-4">Send your X-rays or photos, and your UK quote if you have one. We&apos;ll return an itemised Turkey plan naming the implant brand, so you can compare the two directly.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Free Implant Quote</Link>
              <Link href="/finance-options-uk" className="inline-block border border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Monthly Payment Options</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
