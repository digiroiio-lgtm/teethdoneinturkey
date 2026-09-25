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
import QuickAnswer from "@/components/geo/QuickAnswer";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice } from "@/lib/prices";
import { VENEER_INTENT_OWNERS, VENEER_TRIP_BUDGET, veneerFollowUps } from "@/lib/veneer-cluster";

export const revalidate = 86400;

const PATH = VENEER_INTENT_OWNERS.fullSet;
const TITLE = "Full Set of Veneers in Turkey – Cost";

const emax = getPrice("emax-veneer");
const composite = getPrice("composite-veneer");
const zirconia = getPrice("zirconia-crown");
const hollywood20 = getPrice("hollywood-20");

const DESCRIPTION = `A full set of 20 E-max veneers in Turkey costs from ${gbp(emax.turkeyFromGBP * 20)} before travel, or about ${gbp(emax.turkeyFromGBP * 20 + VENEER_TRIP_BUDGET.min)}–${gbp(emax.turkeyFromGBP * 20 + VENEER_TRIP_BUDGET.max)} all-in. Costs for 8, 10, 16 and 20 teeth by material, with UK comparison.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: TITLE,
  description: DESCRIPTION,
};

const setSizes = [8, 10, 16, 20];
const rows = setSizes.map((n) => ({
  n,
  emax: gbp(emax.turkeyFromGBP * n),
  composite: gbp(composite.turkeyFromGBP * n),
  zirconia: gbp(zirconia.turkeyFromGBP * n),
  uk: `${gbp(emax.ukRangeGBP.min * n)}–${gbp((emax.ukRangeGBP.max ?? 0) * n)}`,
}));

const emax20 = emax.turkeyFromGBP * 20;

export default function FullSetVeneersCostPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-full-set-veneers-turkey-cost"
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
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full Set of Veneers in Turkey: Cost Breakdown 2026</h1>
          <PageFreshness published="January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="How much does a full set of veneers cost in Turkey?">
            <p>
              A full set of 20 E-max porcelain veneers in Turkey costs from {gbp(emax20)} for the treatment, or about{" "}
              {gbp(emax20 + VENEER_TRIP_BUDGET.min)}–{gbp(emax20 + VENEER_TRIP_BUDGET.max)} including flights, a 6-night
              hotel stay and other travel costs. The same 20 veneers at a UK private practice typically cost{" "}
              {gbp(emax.ukRangeGBP.min * 20)}–{gbp((emax.ukRangeGBP.max ?? 0) * 20)}. Smaller sets of 8–10 teeth, covering a
              normal smile, cost from {gbp(emax.turkeyFromGBP * 8)}–{gbp(emax.turkeyFromGBP * 10)} before travel.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "20 E-max veneers", value: `From ${gbp(emax20)}` },
              { label: "20 E-max, all-in", value: `${gbp(emax20 + VENEER_TRIP_BUDGET.min)}–${gbp(emax20 + VENEER_TRIP_BUDGET.max)}` },
              { label: "20 zirconia crowns (package)", value: `${gbp(hollywood20.turkeyFromGBP)} incl. hotel` },
              { label: "Trips", value: "1 (5–7 days)" },
              { label: "Teeth in a typical smile", value: "8–10 upper" },
            ]}
          />

          <h2 id="what-is-full-set" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What counts as a &ldquo;full set&rdquo;?</h2>
          <p className="mb-4">
            A &ldquo;full set&rdquo; of veneers has no fixed number. Eight to ten veneers cover the upper teeth visible in
            a normal smile. Sixteen to twenty cover every tooth visible in a wide smile, usually across both arches.
            Because veneers are priced per tooth, the number of teeth is the main thing that sets the total — and because
            preparing a tooth for porcelain is irreversible, it is worth deciding the number with your dentist before
            travelling rather than adding teeth on the day.
          </p>

          <h2 id="by-size" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Cost by number of teeth and material</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-3">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Full-set veneer cost in Turkey by number of teeth and material, with UK E-max comparison</caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th scope="col" className="px-4 py-3 text-left">Teeth</th>
                  <th scope="col" className="px-4 py-3 text-right">E-max veneers</th>
                  <th scope="col" className="px-4 py-3 text-right">Composite veneers</th>
                  <th scope="col" className="px-4 py-3 text-right">Zirconia crowns</th>
                  <th scope="col" className="px-4 py-3 text-right">UK E-max</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="px-4 py-3 text-left font-medium">{r.n}</th>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.emax}</td>
                    <td className="px-4 py-3 text-right">{r.composite}</td>
                    <td className="px-4 py-3 text-right">{r.zirconia}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Per-tooth prices from the{" "}
            <Link href="/turkey-dental-price-index" className="text-[#1e40af] hover:underline">Turkey Dental Price Index</Link>{" "}
            (E-max from {gbp(emax.turkeyFromGBP)}, composite from {gbp(composite.turkeyFromGBP)}, zirconia crown{" "}
            {gbp(zirconia.turkeyFromGBP)}), checked {PRICES_LAST_VERIFIED_LABEL}, multiplied by the number of teeth. Zirconia
            units are crowns, not veneers, and remove considerably more tooth; for 20 or more crowns the{" "}
            <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] hover:underline">Hollywood Smile package</Link>{" "}
            at {gbp(hollywood20.turkeyFromGBP)} including hotel is usually cheaper than buying per tooth.
          </p>

          <h2 id="travel" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Travel and accommodation</h2>
          <p className="mb-3">
            The treatment prices above do not include travel. An illustrative budget for a typical 6-night trip:
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 my-4">
            <dl className="space-y-2 text-sm">
              {VENEER_TRIP_BUDGET.items.map((row) => (
                <div key={row.item} className="flex justify-between gap-4">
                  <dt className="text-gray-700">{row.item}</dt>
                  <dd className="font-semibold text-gray-900 whitespace-nowrap">{row.cost}</dd>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-2 flex justify-between font-bold">
                <dt>Estimated total trip cost</dt>
                <dd className="text-[#1e40af]">{gbp(VENEER_TRIP_BUDGET.min)}–{gbp(VENEER_TRIP_BUDGET.max)}</dd>
              </div>
            </dl>
          </div>
          <p className="mb-4">
            Treatment plus travel covers three of the four parts of the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>.
            The fourth is a Follow-up Risk Allowance: with 20 veneers, the chance that one chips or comes loose over the
            years is real, and fixing it means a return trip or a UK dentist&apos;s fee.
          </p>

          <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">All-in cost of 20 E-max veneers</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">UK private (treatment only)</p>
              <p className="text-2xl font-extrabold text-gray-700">{gbp(emax.ukRangeGBP.min * 20)}–{gbp((emax.ukRangeGBP.max ?? 0) * 20)}</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey (incl. travel)</p>
              <p className="text-2xl font-extrabold text-green-600">{gbp(emax20 + VENEER_TRIP_BUDGET.min)}–{gbp(emax20 + VENEER_TRIP_BUDGET.max)}</p>
            </div>
          </div>

          <h2 id="included" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What the veneer price includes</h2>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Consultation, X-rays and clinical assessment</li>
            <li>Digital smile design preview</li>
            <li>Tooth preparation</li>
            <li>Temporary veneers while the permanent set is made</li>
            <li>Fitting, bonding and final adjustments</li>
          </ul>
          <p className="mb-4">
            Guarantee terms are set by the treating clinic and vary by clinic and material — get the length and what it
            covers in writing. Monthly payment plans are available from £82 a month over 12, 24 or 36 months, subject to
            eligibility; see{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">monthly payment options</Link>.
          </p>

          <NotForYou
            title="When a full set may not be the right plan"
            items={[
              "When only a few teeth bother you — treating 4–6 teeth, or whitening and bonding, may give the result you want with less irreversible preparation.",
              "When you have gum disease, decay or a bite problem that needs treating first.",
              "When you grind your teeth heavily and will not wear a night guard.",
            ]}
          />

          <DecisionTree
            title="Choosing the size and material of your set"
            steps={[
              { condition: "only the teeth in a normal smile concern you", action: "discuss 8–10 upper veneers rather than 20." },
              { condition: "you want every visible tooth changed and your teeth are healthy", action: `16–20 E-max veneers, from ${gbp(emax.turkeyFromGBP * 16)}–${gbp(emax20)} before travel.` },
              { condition: "your teeth are heavily filled, worn or damaged", action: "crowns may be the clinical choice; read the veneers-or-crowns guide and compare with the Hollywood Smile package." },
              { condition: "budget is the deciding factor", action: "composite veneers cost less but wear sooner; ask how often they would need replacing." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: "Per-tooth prices", basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Set totals", basis: "Calculated: per-tooth price × number of teeth", href: "/methodology#calculation", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `Trip budget ${gbp(VENEER_TRIP_BUDGET.min)}–${gbp(VENEER_TRIP_BUDGET.max)}`, basis: "Illustrative editorial estimate, not a quote", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={veneerFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Get your personalised quote</p>
            <p className="text-blue-200 text-sm mb-4">Send us your photos — we&apos;ll suggest how many teeth to treat and return an itemised plan within 24 hours.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get Free Quote</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/treatments/veneers-turkey", label: "Veneers Turkey", sub: "Treatment guide & pricing" },
                { href: "/prices/veneers-turkey-cost", label: "Veneers Cost Guide", sub: "Prices & comparisons" },
                { href: "/guides/best-veneers-turkey", label: "Best Veneers Turkey Guide", sub: "How to choose the right veneers" },
                { href: "/treatments/full-smile-makeover-turkey", label: "Full Smile Makeover", sub: "Veneers + more" },
                { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Cost Guide", sub: "All treatment prices" },
                { href: "/prices/hollywood-smile-turkey-package", label: "Hollywood Smile Package", sub: "20 or 24 crowns incl. hotel" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{l.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{l.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
