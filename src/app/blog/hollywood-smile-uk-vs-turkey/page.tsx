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
import { HOLLYWOOD_INTENT_OWNERS, HOLLYWOOD_PACKAGE_NIGHTS, hollywoodFollowUps } from "@/lib/hollywood-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";
import { PACKAGE_TRIP_EXTRAS } from "@/lib/travel";

export const revalidate = 86400;

const PATH = HOLLYWOOD_INTENT_OWNERS.ukComparison;
const TITLE = "Hollywood Smile Cost: UK vs Turkey 2026";

const h20 = getPrice("hollywood-20");
const h24 = getPrice("hollywood-24");
const crown = getPrice("zirconia-crown");

const DESCRIPTION = `Hollywood Smile UK vs Turkey: 20 zirconia crowns ${ukRange(h20)} in the UK, ${gbp(h20.turkeyFromGBP)} in Turkey incl. hotel. All-in totals and when crowns aren't right.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// Package prices already include hotel and transfers, so only flights, food
// and insurance are added for the all-in figure.
const allIn = [h20, h24].map((r) => ({
  label: r.treatment.replace("Hollywood Smile — ", ""),
  uk: ukRange(r),
  fee: gbp(r.turkeyFromGBP),
  total: `${gbp(r.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.min)}–${gbp(r.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.max)}`,
}));

const minDifference = h20.ukRangeGBP.min - h20.turkeyFromGBP - PACKAGE_TRIP_EXTRAS.max;

export default function HollywoodSmileUKvsTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-hollywood-smile-uk-vs-turkey"
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
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Crowns</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Hollywood Smile Cost: UK vs Turkey – 2026 Comparison</h1>
          <PageFreshness published="1 April 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="Is a Hollywood Smile cheaper in Turkey than in the UK?">
            <p>
              Yes. Twenty zirconia crowns typically cost {ukRange(h20)} at a UK private practice. In Turkey the
              20-crown package is {gbp(h20.turkeyFromGBP)}, including {HOLLYWOOD_PACKAGE_NIGHTS} nights&apos; hotel and
              transfers; adding flights, food and insurance brings it to about{" "}
              {gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.min)}–{gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.max)}, a
              difference of at least {gbp(minDifference)}. Price is not the main decision, though: a Hollywood Smile is
              20 or more crowns, which permanently reduces every tooth — worth doing only where the teeth need it.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "UK, 20 zirconia crowns", value: ukRange(h20) },
              { label: "Turkey, 20-crown package", value: `${gbp(h20.turkeyFromGBP)} incl. hotel` },
              { label: "Turkey all-in (20 crowns)", value: `${gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.min)}–${gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.max)}` },
              { label: "Treatment type", value: "Crowns (not veneers)" },
              { label: "Trips", value: "1 (about 5 days)" },
            ]}
          />

          <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Hollywood Smile price: UK vs Turkey</h2>
          <PriceRows records={[h20, h24, crown]} caption="Hollywood Smile and zirconia crown prices: UK private vs Turkey" />
          <p className="text-xs text-gray-500 mb-6">
            Turkey: partner-clinic package and per-crown prices. UK: typical private ranges for the same number of
            crowns ({ukRange(crown)} each), without hotel. Checked {PRICES_LAST_VERIFIED_LABEL} —{" "}
            <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link>. What each package
            includes is on the{" "}
            <Link href={HOLLYWOOD_INTENT_OWNERS.cost} className="text-[#1e40af] hover:underline">Hollywood Smile package page</Link>.
          </p>

          <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-in cost, including travel</h2>
          <p className="mb-3">
            Because the packages already include hotel and transfers, the only travel costs to add are flights, food
            and insurance — an illustrative {gbp(PACKAGE_TRIP_EXTRAS.min)}–{gbp(PACKAGE_TRIP_EXTRAS.max)}.
          </p>
          <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 mb-4">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th scope="col" className="px-4 py-2 text-left font-semibold">Package</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">UK private</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey package</th>
                  <th scope="col" className="px-4 py-2 text-right font-semibold">Turkey all-in</th>
                </tr>
              </thead>
              <tbody>
                {allIn.map((r) => (
                  <tr key={r.label} className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-2 text-left font-medium text-gray-900">{r.label}</th>
                    <td className="px-4 py-2 text-right">{r.uk}</td>
                    <td className="px-4 py-2 text-right">{r.fee}</td>
                    <td className="px-4 py-2 text-right text-[#1e40af] font-semibold">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            The fourth part of the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>{" "}
            is a Follow-up Risk Allowance. With 20 or more crowns, it is likely that at least one will need attention
            over the years — re-cementing, a chip, or gum problems at a crown edge — and each time that means a return
            trip or a UK dentist&apos;s fee.
          </p>

          <h2 id="why-cheaper" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why is it so much cheaper in Turkey?</h2>
          <p className="mb-4">
            The difference comes mainly from lower clinic overheads, staff costs and cost of living in Turkey, not from
            a different material: zirconia crowns and digital smile design are used in both countries. Clinics with an
            in-house lab also cut the time and cost of making 20 crowns. The breakdown is in{" "}
            <Link href="/blog/why-are-dental-treatments-cheaper-in-turkey" className="text-[#1e40af] font-semibold hover:underline">why dental treatment is cheaper in Turkey</Link>.
          </p>

          <ComparisonTable
            id="trade-offs"
            title="UK vs Turkey Hollywood Smile: trade-offs beyond price"
            options={["UK private", "Turkey package"]}
            rows={[
              { factor: "20 zirconia crowns", values: [ukRange(h20), `${gbp(h20.turkeyFromGBP)} incl. hotel and transfers`] },
              { factor: "Time", values: ["Several appointments over weeks", "One trip of about 5 days"] },
              { factor: "Time to judge temporaries", values: ["Weeks, at home", "A day or two"] },
              { factor: "Loose or chipped crown later", values: ["Same practice, nearby", "Return trip, or pay a UK dentist"] },
              { factor: "Regulator and complaints", values: ["General Dental Council; Dental Complaints Service", "Turkish Ministry of Health; through the clinic"] },
              { factor: "Reversible", values: ["No", "No"] },
            ]}
          />

          <h2 id="what-happens" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What happens during the 5 days</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li><strong>Day 1:</strong> consultation, X-rays, photos, digital smile design and shade selection.</li>
            <li><strong>Day 2:</strong> teeth are prepared for crowns — reduced on every surface — scanned, and temporary crowns fitted.</li>
            <li><strong>Days 3–4:</strong> the lab makes the permanent zirconia crowns.</li>
            <li><strong>Day 5:</strong> the crowns are fitted and cemented, and the bite is adjusted.</li>
          </ol>
          <p className="mb-4">
            The package price covers consultation, the crowns, temporaries, fitting, hotel and transfers. Guarantee
            terms are set by the treating clinic and vary — get the length and what it covers in writing. A natural
            result depends mostly on the shade and shape you choose; see{" "}
            <Link href="/blog/do-turkey-teeth-look-fake" className="text-[#1e40af] font-semibold hover:underline">do Turkey teeth look fake?</Link>
          </p>

          <NotForYou
            title="When a Hollywood Smile may not be the right choice"
            items={[
              "Your teeth are healthy and you mainly want them whiter or more even — veneers, whitening or bonding remove far less tooth.",
              "You have untreated gum disease or decay, which needs treating before any crowns.",
              "You could not return to Turkey, or afford a UK dentist, if a crown needed attention later.",
            ]}
          />

          <DecisionTree
            title="UK, Turkey — or not crowns at all?"
            steps={[
              { condition: "most visible teeth are damaged, worn or heavily filled and you want them all done", action: "the Turkey package usually costs a fraction of the UK price even with flights; compare guarantee terms." },
              { condition: "your teeth are healthy", action: "ask a UK dentist and the Turkey clinic whether veneers or whitening would work instead — in either country." },
              { condition: "you need only a few crowns", action: `compare a UK quote with Turkey at ${gbp(crown.turkeyFromGBP)} per crown plus the whole trip; the saving shrinks with fewer teeth.` },
              { condition: "you have not had an examination", action: "no plan is final until X-rays show the state of each tooth and the gums." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `Turkey ${gbp(h20.turkeyFromGBP)} / ${gbp(h24.turkeyFromGBP)} packages`, basis: "Partner clinic package prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK ${ukRange(h20)} for 20 crowns`, basis: `Typical UK private range of ${ukRange(crown)} per zirconia crown × 20`, href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `Extra trip costs ${gbp(PACKAGE_TRIP_EXTRAS.min)}–${gbp(PACKAGE_TRIP_EXTRAS.max)}`, basis: "Illustrative editorial estimate (flights, food, insurance), not a quote", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={hollywoodFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your Hollywood Smile quote</p>
            <p className="text-blue-200 mb-4">Send us your photos — we&apos;ll tell you which teeth need crowns, which could have veneers, and the itemised cost within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/full-smile-makeover-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Smile Makeover Guide</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/prices/hollywood-smile-turkey-package", label: "Hollywood Smile Packages", sub: "What each package includes" },
                { href: "/guides/turkey-teeth-veneers-or-crowns", label: "Veneers or Crowns?", sub: "How much tooth each removes" },
                { href: "/treatments/veneers-turkey", label: "Veneers Turkey", sub: "Treatment guide & pricing" },
                { href: "/treatments/full-smile-makeover-turkey", label: "Full Smile Makeover", sub: "Veneers + more" },
                { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Cost", sub: "All treatment prices" },
                { href: "/monthly-payment", label: "Monthly Payment Plans", sub: "0% APR over 12 or 24 months" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
