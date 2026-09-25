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
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";
import { VENEER_INTENT_OWNERS, VENEER_TRIP_BUDGET, veneerFollowUps } from "@/lib/veneer-cluster";

export const revalidate = 86400;

const PATH = VENEER_INTENT_OWNERS.ukComparison;
const TITLE = "Veneers Turkey vs UK Cost Comparison";

const emax = getPrice("emax-veneer");
const composite = getPrice("composite-veneer");
const zirconia = getPrice("zirconia-crown");

const DESCRIPTION = `Veneers UK vs Turkey: an E-max veneer is ${ukRange(emax)} per tooth privately in the UK and from ${gbp(emax.turkeyFromGBP)} in Turkey. Worked totals for 1, 8 and 20 veneers including travel, and when a UK veneer makes more sense.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: TITLE,
  description: DESCRIPTION,
};

// One trip regardless of how many veneers, so travel is added once per row.
const workedExamples = [1, 8, 20].map((n) => ({
  label: `${n} E-max veneer${n > 1 ? "s" : ""}`,
  uk: `${gbp((emax.ukRangeGBP.min) * n)}–${gbp((emax.ukRangeGBP.max ?? 0) * n)}`,
  turkeyFee: gbp(emax.turkeyFromGBP * n),
  turkeyAllIn: `${gbp(emax.turkeyFromGBP * n + VENEER_TRIP_BUDGET.min)}–${gbp(emax.turkeyFromGBP * n + VENEER_TRIP_BUDGET.max)}`,
}));

export default function VeneersCostBlogPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-veneers-turkey-cost-uk-vs-turkey"
        path={PATH}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2024-12-01"
        dateModified="2026-09-25"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: TITLE, path: PATH },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Pricing</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Veneers Turkey Cost: UK vs Turkey Price Comparison 2026</h1>
          <PageFreshness published="1 December 2024" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="Are veneers cheaper in Turkey than in the UK?">
            <p>
              Yes. An E-max porcelain veneer costs {ukRange(emax)} per tooth at a UK private practice and from{" "}
              {gbp(emax.turkeyFromGBP)} at partner clinics in Turkey. Veneers need only one trip of 5–7 days, so for a
              full set of 20 the travel cost — roughly {gbp(VENEER_TRIP_BUDGET.min)}–{gbp(VENEER_TRIP_BUDGET.max)} — is
              small next to a fee difference of at least {gbp(emax.ukRangeGBP.min * 20 - emax.turkeyFromGBP * 20 - VENEER_TRIP_BUDGET.max)} after travel. For one or two veneers the trip can take most of the saving. The
              trade-off is aftercare: a chipped or loose veneer means a return trip or paying a UK dentist.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "UK E-max veneer", value: ukRange(emax) },
              { label: "Turkey E-max veneer", value: `From ${gbp(emax.turkeyFromGBP)}` },
              { label: "Trips needed", value: "1 (5–7 days)" },
              { label: "Travel in the price", value: "No" },
              { label: "Biggest saving", value: "Full sets (8–20 teeth)" },
            ]}
          />

          <h2 id="price-table" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">UK vs Turkey veneer prices per tooth</h2>
          <PriceRows records={[emax, composite, zirconia]} caption="Veneer and crown prices per tooth: UK private vs Turkey" />
          <p className="text-xs text-gray-500 mb-6">
            Turkey: partner-clinic list prices. UK: typical private ranges. Checked {PRICES_LAST_VERIFIED_LABEL} —{" "}
            <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link>. Zirconia units are
            almost always crowns rather than veneers; see{" "}
            <Link href={VENEER_INTENT_OWNERS.veneersOrCrowns} className="text-[#1e40af] hover:underline">veneers or crowns</Link>.
          </p>

          <h2 id="worked-examples" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Worked examples: 1, 8 and 20 veneers including travel</h2>
          <p className="mb-3">
            The Turkey all-in column adds an illustrative {gbp(VENEER_TRIP_BUDGET.min)}–{gbp(VENEER_TRIP_BUDGET.max)}{" "}
            trip budget (flights, 6 nights&apos; hotel, transfers, food and insurance) to the E-max fee. Your own travel
            costs will differ.
          </p>
          <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 mb-4">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th scope="col" className="px-4 py-2 text-left font-semibold">Treatment</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">UK private</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey fee</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey all-in</th>
                </tr>
              </thead>
              <tbody>
                {workedExamples.map((r) => (
                  <tr key={r.label} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-2 text-left font-medium text-gray-900">{r.label}</th>
                    <td className="px-4 py-2 text-right">{r.uk}</td>
                    <td className="px-4 py-2 text-right">{r.turkeyFee}</td>
                    <td className="px-4 py-2 text-right text-[#1e40af] font-semibold">{r.turkeyAllIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            This is the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>{" "}
            minus one part: the Follow-up Risk Allowance, money kept aside in case a veneer chips or comes loose after you
            are home. For a single veneer, the Turkey all-in cost overlaps the UK price, so there is little or no saving once
            travel and that allowance are counted.
          </p>

          <h2 id="same-materials" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Are the materials the same?</h2>
          <p className="mb-4">
            They can be. IPS e.max, the lithium disilicate ceramic made by Ivoclar, is used by UK practices and by
            partner clinics in Turkey, and the Turkey E-max price above is for that material. What varies between
            clinics in either country is the dentist&apos;s preparation, the lab&apos;s work and the bonding. Ask any
            clinic to name the ceramic brand, the lab and the dentist in writing. Choosing between materials is covered in
            the{" "}
            <Link href="/guides/best-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">best veneers in Turkey guide</Link>.
          </p>

          <h2 id="included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What the Turkey veneer price includes</h2>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Consultation and digital smile design preview</li>
            <li>X-rays and clinical assessment</li>
            <li>Tooth preparation</li>
            <li>Temporary veneers while the permanent set is made</li>
            <li>Fitting, bonding and final adjustments</li>
            <li>Aftercare instructions and clinic contact once you are home</li>
          </ul>
          <p className="mb-4">
            Flights are never included, and hotel only in package prices. Guarantee terms are set by the treating clinic
            and vary — get the length and what it covers in writing before you pay a deposit.
          </p>

          <ComparisonTable
            id="trade-offs"
            title="UK vs Turkey veneers: trade-offs beyond the fee"
            options={["UK private", "Turkey"]}
            rows={[
              { factor: "Fee per E-max veneer", values: [ukRange(emax), `From ${gbp(emax.turkeyFromGBP)}`] },
              { factor: "Trips", values: ["None — local appointments", "One trip of 5–7 days"] },
              { factor: "Time to decide on shape and shade", values: ["Weeks between appointments", "A few days with temporaries"] },
              { factor: "Chipped or loose veneer later", values: ["Same practice, nearby", "Return trip, or pay a UK dentist"] },
              { factor: "Regulator", values: ["General Dental Council", "Turkish Ministry of Health"] },
            ]}
          />

          <NotForYou
            title="When a UK veneer may be the better choice"
            items={[
              "You want one or two veneers, and the Turkey fee plus a trip is close to the UK quote.",
              "Your teeth or gums need other treatment first, which is easier to plan with a local dentist.",
              "You want time at home to live with temporaries before committing to the final shape and shade.",
            ]}
          />

          <DecisionTree
            title="How to decide between UK and Turkey veneers"
            steps={[
              { condition: "you want a full set of 8–20 veneers", action: "Turkey usually costs far less even with travel; compare dentist, lab and guarantee terms." },
              { condition: "you want one or two veneers", action: "compare the Turkey fee plus a trip budget against a UK quote before deciding." },
              { condition: "a quote lists zirconia units", action: "confirm whether they are veneers or crowns before comparing prices." },
              { condition: "you have gum disease, decay or grind your teeth", action: "see a UK dentist first; these change what treatment is suitable." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `Turkey E-max from ${gbp(emax.turkeyFromGBP)}`, basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK E-max ${ukRange(emax)}`, basis: "Typical UK private ranges", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Worked examples", basis: "Calculated: per-tooth price × teeth + illustrative trip budget", href: "/methodology#total-cost", checked: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />

          <FollowUpQuestions items={veneerFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Get a like-for-like veneer quote</p>
            <p className="text-gray-600 text-sm mb-4">Send your photos, and your UK quote if you have one. We&apos;ll return an itemised plan naming the material, number of teeth and whether each is a veneer or a crown.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
              <Link href="/treatments/veneers-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Veneers Turkey</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
