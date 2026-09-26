import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AtAGlance from "@/components/geo/AtAGlance";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { IMPLANT_INTENT_OWNERS, implantFollowUps } from "@/lib/implant-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";

export const revalidate = 86400;

const PATH = IMPLANT_INTENT_OWNERS.singleTooth;
const TITLE = "Single Tooth Implant Turkey Cost 2026";

const osstem = getPrice("implant-osstem");
const medentika = getPrice("implant-medentika");
const straumann = getPrice("implant-straumann");
const boneGraft = getPrice("bone-graft");

// Illustrative travel budget for two short trips from the UK. This is an
// editorial estimate to show the arithmetic, not a price anyone charges; flights
// and hotels vary with season and departure airport.
const TRIP_1_TRAVEL = 250;
const TRIP_2_TRAVEL = 200;
const TRAVEL_TOTAL = TRIP_1_TRAVEL + TRIP_2_TRAVEL;

const DESCRIPTION = `One tooth implant in Turkey: ${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)} with crown, plus two trips. All-in totals, what is included, and when a UK implant is better.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: TITLE,
  description: DESCRIPTION,
};

const allIn = [osstem, straumann].map((r) => ({
  brand: r.treatment.match(/\(([^)]+)\)/)?.[1] ?? r.treatment,
  fee: r.turkeyFromGBP,
  total: r.turkeyFromGBP + TRAVEL_TOTAL,
  uk: ukRange(r),
}));

export default function SingleToothImplantPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-single-tooth-implant-turkey-cost"
        path={PATH}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-01-01"
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Single Tooth Implant Turkey Cost 2026</h1>
          <PageFreshness published="January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="How much does it cost to replace one tooth with an implant in Turkey?">
            <p>
              Replacing one missing tooth with an implant in Turkey costs from {gbp(osstem.turkeyFromGBP)} with an Osstem
              implant and from {gbp(straumann.turkeyFromGBP)} with Straumann, including the implant, abutment and crown.
              A single implant needs two trips, so the realistic all-in cost is the fee plus two sets of flights and
              hotel — around {gbp(osstem.turkeyFromGBP + TRAVEL_TOTAL)}–{gbp(straumann.turkeyFromGBP + TRAVEL_TOTAL)} on
              the illustrative travel budget below, against {ukRange(osstem)} for a single implant at a UK private practice.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "Implant + abutment + crown", value: `${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}` },
              { label: "Trips needed", value: "2" },
              { label: "Gap between trips", value: "3–6 months" },
              { label: "Travel included", value: "No" },
              { label: "Bone graft (if needed)", value: `From ${gbp(boneGraft.turkeyFromGBP)}` },
            ]}
          />

          <h2 id="by-brand" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Single implant price by brand</h2>
          <PriceRows records={[osstem, medentika, straumann, boneGraft]} caption="Single implant prices by brand: Turkey vs UK private" />
          <p className="text-xs text-gray-500 mb-6">
            From the <Link href="/turkey-dental-price-index" className="text-[#1e40af] hover:underline">Turkey Dental Price Index</Link>,
            checked {PRICES_LAST_VERIFIED_LABEL}. Other brands are available at some clinics and are priced on request.
          </p>

          <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">The all-in cost of one implant, including two trips</h2>
          <p className="mb-3">
            Travel matters more for a single implant than for any other implant treatment, because the two trips cost
            the same whether you have one implant placed or ten. The table uses an illustrative budget of{" "}
            {gbp(TRIP_1_TRAVEL)} for the first trip (flight and about four nights&apos; hotel) and {gbp(TRIP_2_TRAVEL)}{" "}
            for the second. Your own flights and hotel will differ.
          </p>
          <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 mb-4">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th scope="col" className="px-4 py-2 text-left font-semibold">Implant brand</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey fee</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">+ two trips</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey all-in</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">UK private</th>
                </tr>
              </thead>
              <tbody>
                {allIn.map((r) => (
                  <tr key={r.brand} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-2 text-left font-medium text-gray-900">{r.brand}</th>
                    <td className="px-4 py-2 text-right">{gbp(r.fee)}</td>
                    <td className="px-4 py-2 text-right">{gbp(TRAVEL_TOTAL)}</td>
                    <td className="px-4 py-2 text-right text-[#1e40af] font-bold">{gbp(r.total)}</td>
                    <td className="px-4 py-2 text-right">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            This covers the Clinical, Prosthetic and Travel parts of the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>.
            Add a Follow-up Risk Allowance — money kept aside for an extra trip or a UK dentist&apos;s visit if the
            implant or crown needs attention after you are home.
          </p>

          <h2 id="included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What the single implant price includes</h2>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            {osstem.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mb-4">
            Not included: {osstem.excludes.join(", ").toLowerCase()}. A bone graft is only needed when a CBCT scan shows
            too little jawbone to hold the implant, and it costs from {gbp(boneGraft.turkeyFromGBP)} at partner clinics.
            Guarantee terms are set by the treating clinic and vary by clinic and implant brand — get the length and
            exclusions in writing before you book.
          </p>

          <h2 id="brand-choice" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Choosing a brand for a single implant</h2>
          <p className="mb-4">
            For a single implant, the brand decides most of the price: Straumann costs{" "}
            {gbp(straumann.turkeyFromGBP - osstem.turkeyFromGBP)} more than Osstem at partner clinics. One practical
            difference is later repairs. If the crown ever needs replacing in the UK, your dentist needs compatible parts
            for the implant system, so ask for the brand and model in writing and keep it with your dental records.
            The procedure and healing stages are explained step by step in the{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">dental implants Turkey guide</Link>.
          </p>

          <NotForYou
            title="When a single implant in Turkey may not be worth it"
            items={[
              "When a UK quote for the same brand, after adding two trips, is within a few hundred pounds of the Turkey total.",
              "When you could not easily make the second trip 3–6 months later to have the permanent crown fitted.",
              "When a bridge or partial denture from your UK dentist would meet your needs — ask about all three options.",
            ]}
          />

          <DecisionTree
            title="Single implant: Turkey or UK?"
            steps={[
              { condition: "the UK quote is more than the Turkey all-in total plus a follow-up allowance", action: "Turkey saves money; compare the brand and guarantee terms next." },
              { condition: "the totals are close", action: "the convenience of local aftercare usually outweighs a small saving; treat locally." },
              { condition: "you are likely to need more implants within a year or two", action: "plan them together — the travel cost is shared and the saving per implant rises." },
              { condition: "you have not had a scan", action: "no price is final until a CBCT scan confirms bone volume; ask for one first." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `Single implant + crown ${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}`, basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `Travel budget ${gbp(TRAVEL_TOTAL)} for two trips`, basis: "Illustrative editorial estimate, not a quote", checked: "September 2026" },
              { claim: "All-in totals", basis: "Calculated: implant fee + travel budget", href: "/methodology#total-cost", checked: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />

          <FollowUpQuestions items={implantFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your single implant quote</p>
            <p className="text-blue-200 mb-4">Share your dental X-rays and we&apos;ll send an itemised plan naming the implant brand within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/dental-implants-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Dental Implants Turkey</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
