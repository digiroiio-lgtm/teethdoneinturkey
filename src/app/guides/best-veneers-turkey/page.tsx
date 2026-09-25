import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AtAGlance from "@/components/geo/AtAGlance";
import DecisionTree from "@/components/geo/DecisionTree";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice } from "@/lib/prices";
import { VENEER_INTENT_OWNERS, veneerFollowUps } from "@/lib/veneer-cluster";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/best-veneers-turkey`;
const TITLE = "Best Veneers in Turkey: Types, Clinics, Costs & How to Choose 2026";
const H1 = "Best Veneers in Turkey: Types, Clinics, Costs & How to Choose";
const DESCRIPTION =
  "E-max vs zirconia vs composite veneers in Turkey — which looks most natural, requires least tooth prep, and lasts longest — plus how to choose a good veneer clinic.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-25";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/best-veneers-turkey" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "veneer-types", label: "Veneer Types Compared" },
  { id: "most-natural", label: "Which Look Most Natural?" },
  { id: "emax-vs-zirconia", label: "E-max vs Zirconia Veneers" },
  { id: "least-tooth-shaving", label: "Which Require Least Tooth Shaving?" },
  { id: "how-much-cost", label: "How Much Do the Best Veneers Cost?" },
  { id: "how-to-choose-dentist", label: "How to Choose the Best Dentist in Turkey" },
  { id: "good-clinic", label: "What Makes a Good Veneer Clinic?" },
  { id: "how-long-last", label: "How Long Do Turkish Veneers Last?" },
  { id: "are-they-safe", label: "Are Veneers in Turkey Safe?" },
  { id: "red-flags", label: "Red Flags to Avoid" },
  { id: "faqs", label: "FAQs" },
];

const emax = getPrice("emax-veneer");
const zirconia = getPrice("zirconia-crown");
const composite = getPrice("composite-veneer");

const comparisonRows = [
  {
    type: "E-max Porcelain",
    appearance: "★★★★★ Most natural, high translucency",
    prep: "Minimal (0.3–0.5mm)",
    durability: "15+ years with good care",
    cost: `From ${gbp(emax.turkeyFromGBP)}/tooth`,
    bestFor: "Cosmetic makeovers on healthy teeth",
  },
  {
    type: "Zirconia",
    appearance: "★★★★ Very white, slightly less translucent",
    prep: "1.5–2.0mm on all surfaces (as a crown)",
    durability: "15–20+ years",
    cost: `${gbp(zirconia.turkeyFromGBP)}/tooth (as a crown)`,
    bestFor: "Crowns, back teeth, bruxism",
  },
  {
    type: "Composite (direct)",
    appearance: "★★★ Good but less lifelike",
    prep: "Minimal or none",
    durability: "5–8 years",
    cost: `From ${gbp(composite.turkeyFromGBP)}/tooth`,
    bestFor: "Budget option, younger patients",
  },
  {
    type: "Composite (lab-made)",
    appearance: "★★★★ Better than direct composite",
    prep: "Minimal",
    durability: "8–12 years",
    cost: "£120–£160/tooth",
    bestFor: "Step up from direct composite",
  },
];

const faqs = [
  {
    question: "What are the best veneers available in Turkey?",
    answer: "E-max (lithium disilicate porcelain by Ivoclar) is widely regarded as the gold standard for cosmetic veneers. It combines high translucency (closely mimicking natural enamel), long lifespan (15+ years), and minimal tooth preparation requirements. Zirconia is better for crowns and cases where greater strength is needed, but its opacity can look less natural for front teeth. The 'best' veneer depends on your teeth, goals and clinical situation — E-max is the right choice for most cosmetic cases.",
  },
  {
    question: "Do Turkish veneers look natural?",
    answer: "E-max porcelain veneers from a skilled dentist and quality lab are indistinguishable from natural teeth in most cases. The material has a layered translucency that reflects light similarly to enamel. Poorly made veneers — over-prepared teeth, wrong shade, thick or opaque restorations — can look artificial regardless of the material. The quality of the dentist and lab matters more than the country.",
  },
  {
    question: "How much tooth is removed for veneers in Turkey?",
    answer: "E-max veneers require 0.3–0.5mm of enamel removal from the front surface of each tooth. No-prep or ultra-thin veneers remove almost nothing but are only suitable when there is space to add volume (for example, closing small gaps). Crowns, which are often incorrectly described as 'veneers', require 1.5–2mm removal from all surfaces. Always ask which preparation depth applies to your specific quote.",
  },
  {
    question: "How do I find a good veneer dentist in Turkey?",
    answer: "Look for: a specific cosmetic or restorative dentistry qualification beyond the general dental degree; an in-house or named external digital lab (CAD/CAM or pressing); a portfolio of before-and-after cases you can view independently (not just on the clinic website); verified reviews on Google, Trustpilot or UK dental tourism forums; a named UK aftercare contact. Avoid clinics that cannot confirm the veneer brand and material used or that pressure you to pay a deposit before sending a written treatment plan.",
  },
  {
    question: "How long do veneers from Turkey last?",
    answer: "E-max porcelain veneers placed correctly typically last 15–20 years before replacement is needed, assuming good oral hygiene and no heavy grinding. Composite veneers last 5–12 years depending on whether they are direct or lab-made. Longevity is influenced more by oral hygiene, bite mechanics and the quality of the original bonding than by the country of treatment.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Best Veneers in Turkey", item: PAGE_URL },
      ],
    },
  ],
};

export default function BestVeneersTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Best Veneers in Turkey" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A UK patient investigation guide — not a price list. Which veneer type looks most natural, requires the least tooth preparation, and lasts longest? And how do you find a clinic you can trust?
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageFreshness published="13 September 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} />
          <div className="mt-4">
            <MedicalReviewBadge />
          </div>

          <QuickAnswer question="What are the best veneers to get in Turkey?">
            <p>
              <strong>E-max porcelain</strong> (by Ivoclar) is the best material for cosmetic front-tooth veneers in
              Turkey for most people: it is the most translucent, looks closest to natural enamel, needs the least tooth
              preparation of any permanent veneer and commonly lasts 15 years or more. Zirconia is stronger but less
              translucent, and is usually fitted as a crown. Composite veneers cost less and remove little or no tooth,
              but wear sooner. The dentist and lab making the veneers matter more than the material.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Best for most cosmetic cases", value: "E-max porcelain" },
              { label: "Best for grinders / damaged teeth", value: "Zirconia (crown)" },
              { label: "Least tooth removed", value: "Composite or E-max" },
              { label: "E-max price in Turkey", value: `From ${gbp(emax.turkeyFromGBP)}/tooth` },
              { label: "Composite price in Turkey", value: `From ${gbp(composite.turkeyFromGBP)}/tooth` },
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
            ]}
          />

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "E-max porcelain is the gold standard for cosmetic front-tooth veneers: highest translucency, 15+ year lifespan, minimal tooth prep.",
              "Zirconia is stronger but more opaque — preferred for crowns and high-load situations, not front cosmetic veneers.",
              "Composite veneers (direct or lab-made) are reversible and less expensive, but lifespan is 5–12 years.",
              "The quality of the dentist and lab matters more than the material choice for final appearance.",
              `In Turkey, E-max veneers cost from ${gbp(emax.turkeyFromGBP)} per tooth and zirconia crowns ${gbp(zirconia.turkeyFromGBP)} — a lower zirconia price usually means a crown, not a veneer, so ask which your quote covers.`,
              "Always ask to see a portfolio of before-and-after photos from the specific dentist who will treat you, not a generic clinic portfolio.",
            ]}
          />

          <h2 id="veneer-types" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer Types Compared</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Four main materials are used for dental veneers in Turkey. Each has different clinical implications, aesthetic properties and cost:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Appearance</th>
                  <th className="px-4 py-3 text-left font-semibold">Tooth Prep</th>
                  <th className="px-4 py-3 text-left font-semibold">Lifespan</th>
                  <th className="px-4 py-3 text-right font-semibold">Cost (Turkey)</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-[#1e40af]">{r.type}</td>
                    <td className="px-4 py-3 text-gray-700">{r.appearance}</td>
                    <td className="px-4 py-3 text-gray-700">{r.prep}</td>
                    <td className="px-4 py-3 text-gray-700">{r.durability}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-800">{r.cost}</td>
                    <td className="px-4 py-3 text-gray-600">{r.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="most-natural" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Which Veneers Look Most Natural?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            E-max lithium disilicate porcelain is the most natural-looking veneer material available. It contains a layered structure that transmits and scatters light in a way similar to natural tooth enamel, producing depth and translucency that zirconia cannot match. Natural teeth are not uniformly white — they have variation, slightly translucent edges, and internal colour gradients. A well-made E-max veneer from a skilled dental technician can replicate this in a way that is undetectable at normal conversational distance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zirconia is bright white and very strong, but its higher opacity can make teeth appear artificial — particularly in strong natural light. For this reason, zirconia is the preferred material for crowns covering back teeth (where strength matters more than translucency) but is generally second choice to E-max for cosmetic front-tooth veneers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Composite veneers can be shade-matched well at placement, but composite does not have the depth or translucency of porcelain, and it stains and wears more quickly — affecting natural appearance over time.
          </p>

          <h2 id="emax-vs-zirconia" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">E-max vs Zirconia Veneers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is one of the most common questions UK patients ask — and the confusion is partly caused by Turkish clinics quoting &ldquo;zirconium veneers&rdquo; when they technically mean zirconia crowns (full-coverage caps, not veneers). The distinction matters clinically because it affects how much tooth is removed.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>E-max veneers:</strong> thin porcelain shells bonded to the front surface only. Minimum tooth reduction: 0.3–0.5mm. Natural appearance. 15+ years. Ideal for cosmetic makeovers with healthy underlying teeth.</li>
            <li><strong>Zirconia crowns (often called &ldquo;zirconium veneers&rdquo;):</strong> full-coverage caps requiring 1.5–2mm reduction on all tooth surfaces. Much stronger than E-max. Better for heavily restored, damaged or misaligned teeth. Less translucent.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            A side-by-side comparison of the two materials, with prices, is in{" "}
            <Link href={VENEER_INTENT_OWNERS.emaxVsZirconia} className="text-[#1e40af] font-semibold hover:underline">E-max vs zirconia veneers in Turkey</Link>.
            For how to tell which you are actually being quoted, see{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth: Veneers or Crowns?</Link>
          </p>

          <h2 id="least-tooth-shaving" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Which Veneers Require the Least Tooth Shaving?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In order from least to most tooth removal:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>No-prep / ultra-thin veneers</strong> (0.0–0.2mm) — only appropriate where adding volume is needed (small gaps, short teeth). Not suitable for most smile makeovers.</li>
            <li><strong>E-max porcelain veneers</strong> (0.3–0.5mm) — the minimum for a porcelain veneer. Irreversible but the least destructive of the permanent options.</li>
            <li><strong>Composite veneers (lab-made)</strong> (0.3–0.5mm) — similar prep to E-max, sometimes slightly less.</li>
            <li><strong>Zirconia crowns</strong> (1.5–2.0mm from all surfaces) — significantly more tooth removal. Irreversible.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            If minimising tooth preparation is your priority, E-max veneers are the best permanent option. For deeper discussion of preparation depth and irreversibility, see{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth: Veneers or Crowns?</Link>
          </p>

          <h2 id="how-much-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Much Do the Best Veneers in Turkey Cost?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At partner clinics, E-max porcelain veneers cost from {gbp(emax.turkeyFromGBP)} per tooth, so a full set of 20 is from {gbp(emax.turkeyFromGBP * 20)} before travel. Zirconia crowns cost {gbp(zirconia.turkeyFromGBP)} per tooth, and composite veneers from {gbp(composite.turkeyFromGBP)} (direct) — lab-made composite costs more. A quote for E-max well below {gbp(emax.turkeyFromGBP)} per tooth is worth questioning: ask for the ceramic brand and the lab in writing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full per-tooth and per-set price breakdown, see{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Veneers Turkey Cost 2026</Link>. For Antalya-specific veneer prices, see{" "}
            <Link href="/prices/veneers-antalya-cost" className="text-[#1e40af] font-semibold hover:underline">Veneers in Antalya Cost</Link>.
          </p>

          <h2 id="how-to-choose-dentist" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How to Choose the Best Dentist in Turkey for Veneers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The single most important factor in veneer quality is the dentist who prepares your teeth and the technician who makes the restorations. These are not interchangeable. A good veneer dentist in Turkey will:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Have a specific postgraduate qualification in aesthetic or restorative dentistry beyond a general BDS/DDS equivalent.</li>
            <li>Conduct a thorough pre-treatment assessment: gum health, bite analysis, X-rays, shade matching in natural light.</li>
            <li>Discuss the shade, shape and length of your veneers before preparation begins — ideally with a digital preview or wax-up.</li>
            <li>Provide temporaries that give you a preview of the final result before your natural teeth are prepared.</li>
            <li>Work with a named lab and be able to tell you who is making your veneers and on what equipment.</li>
            <li>Give you a written post-treatment care guide and a clear point of contact for aftercare.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ask for a portfolio of before-and-after photos from the specific dentist who will treat you — not a generic clinic portfolio. Ask how many veneer cases they complete per year. Both are reasonable questions that a confident, experienced dentist will answer without hesitation.
          </p>

          <h2 id="good-clinic" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Makes a Good Veneer Clinic?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A good veneer clinic in Turkey should be able to confirm, in writing and before you pay a deposit:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The veneer material and brand (E-max by Ivoclar, or equivalent).</li>
            <li>The lab producing your restorations — in-house digital (CAD/CAM or pressed) is preferable.</li>
            <li>The name and qualifications of the dentist treating you.</li>
            <li>The number of nights accommodation required and what is included in the package price.</li>
            <li>A named UK-based contact for aftercare queries after you return home.</li>
            <li>An emergency procedure if you experience a problem with a veneer within the warranty period.</li>
          </ul>

          <h2 id="how-long-last" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Long Do Turkish Veneers Last?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            E-max porcelain veneers placed correctly, bonded with the right adhesive system and maintained with good oral hygiene typically last <strong>15–20 years</strong> before replacement. Studies of lithium disilicate restorations show survival rates above 90% at 10 years when placed by an experienced dentist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Longevity is reduced by: heavy tooth grinding (bruxism) without a night guard, eating very hard foods, poor bonding technique, or inadequate oral hygiene. These risk factors apply equally to veneers placed in Turkey or the UK — the country of treatment is not the primary longevity variable.
          </p>

          <h2 id="are-they-safe" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Are Veneers in Turkey Safe?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Porcelain veneers placed by a qualified dentist using appropriate materials are safe. The clinical risks associated with veneers in Turkey — excessive tooth preparation, poorly matched shade, inadequate bonding — are associated with poor clinical practice, not with Turkey as a location. The same risks exist at poorly chosen UK dental practices.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a dedicated safety guide covering patient selection, preparation risks, lab quality and what to do if something goes wrong, see{" "}
            <Link href="/guides/turkish-veneers-safety" className="text-[#1e40af] font-semibold hover:underline">Are Turkish Veneers Safe?</Link>
          </p>

          <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Red Flags to Avoid</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>A clinic that cannot confirm the veneer brand or material in writing before you pay a deposit.</li>
            <li>A price per tooth significantly below £190 for E-max — at that level, lab quality or material grade is likely compromised.</li>
            <li>No pre-treatment bite or gum health assessment — veneers on a compromised gum or bite foundation fail faster.</li>
            <li>Pressure to proceed with more teeth than you actually wanted prepared.</li>
            <li>No temporaries provided before final restorations — you should always be able to review the shape and shade before your permanent veneers are bonded.</li>
            <li>Before-and-after photos that look stock or inconsistent with the clinic&apos;s stated patient volume.</li>
            <li>No clear aftercare plan or UK contact once you return home.</li>
          </ul>

          <DecisionTree
            title="Which veneers suit you?"
            steps={[
              { condition: "your front teeth are healthy and you want a natural-looking change of shape or colour", action: "E-max porcelain veneers." },
              { condition: "you want a small, reversible change or are on a tight budget", action: "composite veneers or bonding — expect to replace them sooner." },
              { condition: "your teeth are heavily filled, broken or worn, or you grind", action: "zirconia crowns may be needed; ask the dentist to justify each crown." },
              { condition: "you have gum disease, decay or a bite problem", action: "treat that first — no veneer type lasts well on an unhealthy base." },
            ]}
          />

          <FollowUpQuestions items={veneerFollowUps(VENEER_INTENT_OWNERS.bestType)} />

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Best Veneers in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "Ivoclar: IPS e.max clinical research summary", href: "https://www.ivoclar.com/en_us/products-and-services/teeth/ips-e-max" },
            { label: "NHS: Veneers", href: "https://www.nhs.uk/conditions/veneers/" },
            { label: "NCBI: Longevity of lithium disilicate restorations — systematic review", href: "https://pubmed.ncbi.nlm.nih.gov/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety, travel and finance — everything in one place.", href: "/guides/teeth-in-turkey" },
            { title: "Veneers Turkey Cost 2026", desc: "Per-tooth and full-set veneer prices in Turkey.", href: "/prices/veneers-turkey-cost" },
            { title: "Are Turkish Veneers Safe?", desc: "Risks, patient selection, lab quality and aftercare.", href: "/guides/turkish-veneers-safety" },
            { title: "Veneers Turkey Packages", desc: "What a veneer package includes and full trip cost.", href: "/guides/veneers-turkey-packages" },
            { title: "Turkey Teeth: Veneers or Crowns?", desc: "The clinical difference and how much tooth is removed.", href: "/guides/turkey-teeth-veneers-or-crowns" },
          ]}
        />
      </div>

      <CTASection
        title="Find Out Which Veneers Are Right for You"
        subtitle="Get a free personalised treatment plan with the recommended veneer type, material and exact cost for your specific case."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
