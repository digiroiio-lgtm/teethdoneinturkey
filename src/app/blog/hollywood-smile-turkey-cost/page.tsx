import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import AtAGlance from "@/components/geo/AtAGlance";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FactEvidenceDecision from "@/components/geo/FactEvidenceDecision";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { HOLLYWOOD_INTENT_OWNERS, HOLLYWOOD_PACKAGE_NIGHTS, hollywoodFollowUps } from "@/lib/hollywood-cluster";
import { monthlyAtZero } from "@/lib/finance";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";

export const revalidate = 86400;

const PATH = HOLLYWOOD_INTENT_OWNERS.whatIsIt;
const TITLE = "Hollywood Smile Turkey Cost 2026";

const h20 = getPrice("hollywood-20");
const h24 = getPrice("hollywood-24");
const crown = getPrice("zirconia-crown");
const makeover = getPrice("smile-makeover");

const DESCRIPTION = `A Hollywood Smile in Turkey is 20 or 24 zirconia crowns, from ${gbp(h20.turkeyFromGBP)} incl. hotel. What's involved, how much tooth is removed, and who it suits.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: TITLE,
  description: DESCRIPTION,
};

export default function HollywoodSmilePage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-hollywood-smile-turkey-cost"
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
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Treatments</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Hollywood Smile Turkey Cost 2026 – UK Patient Guide</h1>
          <PageFreshness published="January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <QuickAnswer question="What is a Hollywood Smile, and what does it cost in Turkey?">
            <p>
              A Hollywood Smile is a full set of matching crowns or veneers that gives the teeth visible in a smile a
              uniform shape and colour. At partner clinics in Turkey it is a set of zirconia crowns: {gbp(h20.turkeyFromGBP)}{" "}
              for 20 or {gbp(h24.turkeyFromGBP)} for 24, including {HOLLYWOOD_PACKAGE_NIGHTS} nights&apos; hotel and
              transfers, against {ukRange(h20)} for 20 crowns privately in the UK. Because each tooth is reduced on every
              surface for a crown, the treatment is permanent and best suited to teeth that are damaged, worn or heavily
              filled.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "20 crowns (package)", value: gbp(h20.turkeyFromGBP) },
              { label: "24 crowns (package)", value: gbp(h24.turkeyFromGBP) },
              { label: "Single zirconia crown", value: gbp(crown.turkeyFromGBP) },
              { label: "Material", value: "Zirconia" },
              { label: "Tooth removed", value: "All surfaces (crown)" },
              { label: "Time in Turkey", value: "About 5 days" },
              { label: "Reversible", value: "No" },
            ]}
          />

          <h2 id="what-is-it" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What a Hollywood Smile involves</h2>
          <p className="mb-3">A Hollywood Smile package at partner clinics combines:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Zirconia crowns on the teeth that show when you smile — 20 (typically 10 upper and 10 lower) or 24</li>
            <li>A smile design preview before treatment (digital smile design in the 24-crown package)</li>
            <li>Shade selection matched to your skin tone and preference</li>
            <li>Hotel accommodation and VIP airport transfers</li>
          </ul>
          <p className="mb-4">
            &ldquo;Hollywood Smile&rdquo; describes the result, not a single procedure. Some clinics achieve it with
            veneers, which cover only the front of each tooth. The packages on this site use crowns, which cover the
            whole tooth — so it matters which you are being quoted. Package prices and what each includes are on the{" "}
            <Link href={HOLLYWOOD_INTENT_OWNERS.cost} className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile package page</Link>,
            and the UK comparison is in{" "}
            <Link href={HOLLYWOOD_INTENT_OWNERS.ukComparison} className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile cost: UK vs Turkey</Link>.
          </p>

          <FactEvidenceDecision
            title="How much tooth does a Hollywood Smile remove?"
            fact="Preparing a tooth for a zirconia crown reduces it on every surface; it is not a light polish of the enamel."
            evidence="Crowns typically remove about 1.5–2mm from all surfaces, against about 0.3–0.7mm from the front only for a porcelain veneer, as set out in the veneers-or-crowns guide."
            interpretation="Twenty crowns on healthy teeth means permanently reducing twenty healthy teeth; those teeth will need crowns for life."
            decision="Ask the dentist, tooth by tooth, why a crown rather than a veneer or no treatment — and get the answer in writing."
          />

          <h2 id="process" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">The Hollywood Smile process in Turkey</h2>
          <ol className="space-y-3 my-4">
            {[
              { title: "Smile design consultation", desc: "Your dentist photographs your smile and designs the proposed shape and shade, so you can see the planned result before any treatment." },
              { title: "Shade selection", desc: "You choose the shade, from natural off-white to very bright white. A shade that matches your skin tone and age looks more natural." },
              { title: "Preparation", desc: "Each tooth is reduced on all surfaces to make room for a crown, scanned, and fitted with a temporary crown. This step cannot be reversed." },
              { title: "Laboratory work", desc: "The permanent zirconia crowns are milled and finished, usually in the clinic's own lab over 3–5 days." },
              { title: "Final fitting", desc: "The crowns are cemented and each is checked for shade, fit and bite before you fly home." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-3 list-none">
                <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="natural" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Does a Hollywood Smile look natural?</h2>
          <p className="mb-4">
            It can. What most people recognise as &ldquo;Turkey teeth&rdquo; is a specific choice: very white, very
            uniform, slightly oversized crowns. A result chosen in a natural shade, with some variation in shape and
            translucency at the edges, is much harder to spot. The temporaries fitted after preparation are the time to
            ask for changes to shape, length or shade, because they are much harder to change once the permanent crowns
            are cemented. More in{" "}
            <Link href="/blog/do-turkey-teeth-look-fake" className="text-[#1e40af] font-semibold hover:underline">do Turkey teeth look fake?</Link>
          </p>

          <h2 id="pay-monthly" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Paying monthly</h2>
          <p className="mb-2">
            A {gbp(h20.turkeyFromGBP)} Hollywood Smile package financed over 24 months at 0% APR representative works out
            at about {`£${monthlyAtZero(h20.turkeyFromGBP)}`} a month, subject to status. 36-month plans lower the payment
            but carry interest.
          </p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Explore monthly payment options</Link>

          <NotForYou
            title="Who a Hollywood Smile may not suit"
            items={[
              `People with healthy teeth who want them whiter or more even — veneers, whitening or bonding, or a veneer-based smile makeover from ${gbp(makeover.turkeyFromGBP)}, remove far less tooth.`,
              "Anyone with untreated gum disease or decay, which needs treating first.",
              "Heavy grinders who will not wear a night guard.",
              "Anyone who could not return to the clinic, or pay a UK dentist, if a crown needed attention later.",
            ]}
          />

          <DecisionTree
            title="Hollywood Smile, veneers or something smaller?"
            steps={[
              { condition: "most visible teeth are broken, worn, heavily filled or deeply stained", action: "crowns are often the right treatment; compare the package with the per-crown price." },
              { condition: "your teeth are healthy and you mainly dislike their colour", action: "try professional whitening first — it removes no tooth." },
              { condition: "your teeth are healthy but uneven in shape", action: "veneers or bonding usually give the change with far less tooth removed." },
              { condition: "you are not sure", action: "get X-rays and an examination; the state of each tooth, not the package, should decide the treatment." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `${gbp(h20.turkeyFromGBP)} / ${gbp(h24.turkeyFromGBP)} packages; ${gbp(crown.turkeyFromGBP)} per crown`, basis: "Partner clinic prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK ${ukRange(h20)} for 20 crowns`, basis: "Typical UK private ranges", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Crown vs veneer tooth reduction", basis: "Veneers or crowns guide", href: "/guides/turkey-teeth-veneers-or-crowns", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={hollywoodFollowUps(PATH)} />

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your Hollywood Smile quote</p>
            <p className="text-blue-200 mb-4">Share your photos — we&apos;ll tell you which teeth need crowns, which could have veneers, and the itemised cost within 24 hours.</p>
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
                { href: "/blog/hollywood-smile-uk-vs-turkey", label: "Hollywood Smile: UK vs Turkey", sub: "Side-by-side price comparison" },
                { href: "/guides/turkey-teeth-veneers-or-crowns", label: "Veneers or Crowns?", sub: "How much tooth each removes" },
                { href: "/treatments/full-smile-makeover-turkey", label: "Full Smile Makeover", sub: "Veneers + more" },
                { href: "/treatments/veneers-turkey", label: "Veneers Turkey", sub: "Treatment guide & pricing" },
                { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Cost Guide", sub: "All treatment prices & comparisons" },
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
