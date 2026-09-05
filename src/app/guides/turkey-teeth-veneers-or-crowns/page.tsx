import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/turkey-teeth-veneers-or-crowns`;
const TITLE = "Turkey Teeth: Veneers or Crowns? How Much Tooth Is Removed";
const H1 = "Turkey Teeth: Are They Veneers or Crowns, and How Much Tooth Gets Removed?";
const DESCRIPTION =
  "Most 'Turkey teeth' makeovers are crowns, not veneers, and the two remove very different amounts of tooth. A straight answer on preparation, what is reversible, and what to ask before you agree.";
const DATE_PUBLISHED = "2026-09-04";
const DATE_MODIFIED = "2026-09-04";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-veneers-or-crowns" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-turkey-teeth-means", label: "What 'Turkey Teeth' Means" },
  { id: "veneer-vs-crown", label: "Veneer vs Crown: The Real Difference" },
  { id: "how-much-is-removed", label: "How Much Tooth Is Actually Removed" },
  { id: "why-crowns", label: "Why So Many Makeovers Use Crowns" },
  { id: "irreversible", label: "What Cannot Be Undone" },
  { id: "when-crown-is-right", label: "When a Crown Is the Right Choice" },
  { id: "what-am-i-quoted", label: "How to Tell What You Are Being Quoted" },
  { id: "questions", label: "Questions to Ask Before You Agree" },
  { id: "cost", label: "What Each Option Costs" },
  { id: "faqs", label: "FAQs" },
];

const prepLadder = [
  {
    option: "No-prep / minimal-prep veneer",
    removed: "Little to none, roughly 0.3mm at most",
    layer: "Stays within enamel",
    reversible: "Closest to reversible",
    suits: "Small shape or spacing changes on healthy, well-aligned teeth",
  },
  {
    option: "Conventional porcelain (E-max) veneer",
    removed: "Around 0.3mm to 0.7mm from the front surface",
    layer: "Usually stays within enamel",
    reversible: "Not reversible, but conservative",
    suits: "Colour, chips, minor alignment on structurally sound front teeth",
  },
  {
    option: "Crown (zirconia or porcelain)",
    removed: "Reduction on every surface of the tooth",
    layer: "Goes through enamel into dentine",
    reversible: "Permanent. The tooth stays a crowned tooth for life",
    suits: "Heavily filled, root-treated, broken or badly worn teeth",
  },
];

const veneerVsCrown = [
  { feature: "What it is", veneer: "A thin shell bonded to the front of the tooth", crown: "A cap that covers the whole tooth" },
  { feature: "Tooth surfaces prepared", veneer: "Mainly the front, sometimes the biting edge", crown: "All surfaces, all the way round" },
  { feature: "Typical enamel removed", veneer: "About 0.3mm to 0.7mm", crown: "Substantially more, into dentine" },
  { feature: "Nerve risk", veneer: "Lower", crown: "Higher, because preparation is deeper" },
  { feature: "Can it be undone", veneer: "No, but the tooth keeps most of its structure", crown: "No. The tooth will always need a crown" },
  { feature: "Best for", veneer: "Cosmetic change on healthy teeth", crown: "Damaged, worn or heavily restored teeth" },
];

const askClinic = [
  "Am I being quoted veneers, crowns, or a mix of both? Ask for it in writing.",
  "How many millimetres will be removed from each tooth?",
  "Will the preparation stay in enamel or go into dentine?",
  "Which teeth genuinely need a crown, and which could be treated more conservatively?",
  "What is the material and brand, and what is the written guarantee?",
  "Can I see the treatment plan and X-rays before any drilling takes place?",
  "What is the plan if a tooth becomes painful after I fly home?",
];

const faqs = [
  {
    question: "Are Turkey teeth veneers or crowns?",
    answer: "In practice, most full-mouth 'Turkey teeth' makeovers are crowns rather than veneers, even when they are marketed using the word veneers. A veneer is a thin shell bonded to the front of a tooth. A crown caps the entire tooth and requires reduction on every surface. The two are different treatments with very different amounts of tooth removal, so always ask a clinic to confirm in writing which one you are being quoted for.",
  },
  {
    question: "How much tooth is shaved down for Turkey teeth?",
    answer: "It depends entirely on which treatment you have. A conventional porcelain veneer typically removes around 0.3mm to 0.7mm from the front of the tooth, usually staying within enamel. A crown requires reduction on every surface of the tooth and goes into dentine. As the NHS describes it, fitting a crown means the tooth is drilled down so that it resembles a small peg. That is the step people mean when they talk about teeth being 'shaved down'.",
  },
  {
    question: "Can tooth shaving be reversed?",
    answer: "No. Enamel does not grow back, so any tooth structure removed for a veneer or a crown is gone permanently. A conservatively prepared veneer leaves most of the tooth intact, whereas a crowned tooth will need a crown for the rest of its life and will need replacing every time the crown wears out. This is the single most important thing to understand before agreeing to a full-mouth makeover.",
  },
  {
    question: "Is it bad to have crowns instead of veneers?",
    answer: "Not automatically. A crown is the correct treatment for a tooth that is heavily filled, root treated, badly worn or broken, and in those cases a veneer would not be strong enough. The concern raised about some dental tourism cases is different: it is when healthy teeth that could have been treated conservatively are crowned instead, usually because crowning is faster and produces a more uniform result in a single trip.",
  },
  {
    question: "Why do clinics crown healthy teeth for a smile makeover?",
    answer: "Crowning gives complete control over colour, shape and alignment, hides a dark underlying tooth more predictably, and can be completed in one short trip. Veneers are more technique sensitive and need the underlying tooth to be sound and reasonably well aligned. The trade off is that crowning removes far more tooth structure, which is why a clinician should only recommend it where there is a clinical reason.",
  },
  {
    question: "Do Turkey teeth hurt?",
    answer: "Preparation is carried out under local anaesthetic, so the appointment itself should not be painful. Sensitivity for a few days afterwards is common, particularly after deeper crown preparation. Lasting pain, throbbing or sensitivity that gets worse rather than better is not normal and should be assessed by a dentist, since deeper preparation carries a higher risk of nerve irritation.",
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
      about: [
        { "@type": "MedicalProcedure", name: "Dental Veneer" },
        { "@type": "MedicalProcedure", name: "Dental Crown" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Turkey Teeth: Veneers or Crowns", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkeyTeethVeneersOrCrownsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Veneers or Crowns" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            The honest answer to the question behind almost every &ldquo;Turkey teeth&rdquo; story, and the checklist that tells you which treatment you are actually being quoted.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Most full-mouth &ldquo;Turkey teeth&rdquo; makeovers are <strong>crowns</strong>, not veneers, even when they are advertised using the word veneers. The difference matters because a veneer removes roughly 0.3mm to 0.7mm from the front of the tooth and usually stays within enamel, while a crown is prepared on every surface and goes into dentine. Neither can be reversed, but a crowned tooth needs a crown for life. Ask any clinic to state in writing which treatment each tooth is getting before you agree to anything.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Veneer and crown are different treatments. Marketing language often blurs them, clinical reality does not.",
              "A veneer typically removes 0.3mm to 0.7mm from the front surface. A crown is reduced on all surfaces and goes into dentine.",
              "Enamel does not grow back. Every millimetre removed is permanent, for either treatment.",
              "A crown is the correct choice for a heavily filled, root treated, worn or broken tooth. The concern is crowning healthy teeth that did not need it.",
              "Get the treatment plan in writing, per tooth, before any drilling. That single step prevents most of the outcomes people regret.",
            ]}
          />

          <h2 id="what-turkey-teeth-means" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What &ldquo;Turkey Teeth&rdquo; Actually Means</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            &ldquo;Turkey teeth&rdquo; is not a clinical term. It is UK shorthand, popularised on social media, for a full set of uniform, very white restorations fitted during a short trip abroad. It describes an <em>appearance</em> and a <em>route to treatment</em> rather than a specific procedure, which is exactly why so much confusion exists about what is being fitted. The same phrase gets used for conservative veneer work and for full-mouth crown work, which are clinically very different things.
          </p>

          <h2 id="veneer-vs-crown" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Veneer vs Crown: The Real Difference</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">&nbsp;</th>
                  <th className="px-4 py-3 text-left font-semibold">Veneer</th>
                  <th className="px-4 py-3 text-left font-semibold">Crown</th>
                </tr>
              </thead>
              <tbody>
                {veneerVsCrown.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.feature}</td>
                    <td className="px-4 py-3 text-gray-700">{r.veneer}</td>
                    <td className="px-4 py-3 text-gray-700">{r.crown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="how-much-is-removed" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Much Tooth Is Actually Removed</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is easier to think of preparation as a ladder rather than a yes or no question. The further down the ladder you go, the more permanent the change:
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Option</th>
                  <th className="px-4 py-3 text-left font-semibold">Tooth removed</th>
                  <th className="px-4 py-3 text-left font-semibold">Layer reached</th>
                  <th className="px-4 py-3 text-left font-semibold">Best suited to</th>
                </tr>
              </thead>
              <tbody>
                {prepLadder.map((r, i) => (
                  <tr key={r.option} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{r.option}</td>
                    <td className="px-4 py-3 text-gray-700">{r.removed}</td>
                    <td className="px-4 py-3 text-gray-700">{r.layer}</td>
                    <td className="px-4 py-3 text-gray-700">{r.suits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The NHS describes crown preparation plainly: to fit a crown, the tooth is drilled down so that it is like a small peg for the crown to sit on. That is the stage people are describing when they talk about teeth being &ldquo;shaved down to pegs&rdquo;. It is a normal, standard part of fitting a crown anywhere in the world, including in the UK. The question is never whether crown preparation looks dramatic, because it always does. The question is whether that particular tooth needed a crown at all.
          </p>

          <h2 id="why-crowns" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why So Many Makeovers Use Crowns</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are practical reasons, and being honest about them helps you make a better decision. Crowns give complete control over shape, colour and alignment, so they can correct crowding and mask a dark underlying tooth more predictably than a veneer. They are also less technique sensitive, and they suit a compressed treatment window because the whole arch can be prepared and fitted within one short trip. Veneers, by contrast, need the underlying teeth to be structurally sound and reasonably well aligned to give a good result.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            None of that makes crowning wrong. It becomes a problem when healthy, well aligned teeth are crowned purely because it is quicker and gives a more uniform finish, when a more conservative option would have achieved a good result with far less tooth loss.
          </p>

          <h2 id="irreversible" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Cannot Be Undone</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enamel does not regenerate. Whatever is removed, for a veneer or a crown, is gone permanently. A conservatively prepared veneer leaves the great majority of the tooth intact. A crowned tooth is a crowned tooth for life: when the crown eventually wears out it is replaced, not removed, and each replacement cycle carries its own small risk. Deeper preparation also sits closer to the nerve, which is why irreversible nerve inflammation and the need for root canal treatment is a recognised risk of heavy crown preparation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the single reason to slow down and get the plan in writing. Read our{" "}
            <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">guide to the risks of Turkey teeth</Link>{" "}
            for the wider list of complications and how to reduce them.
          </p>

          <h2 id="when-crown-is-right" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">When a Crown Is the Right Choice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A crown is genuinely the better restoration when a tooth is heavily filled with little sound structure left, has had root canal treatment, is cracked or broken, or is badly worn down. In those situations a veneer would not have enough sound tooth to bond to and would be likely to fail. If a dentist recommends crowns for teeth in that condition, that is standard restorative practice rather than over treatment.
          </p>

          <h2 id="what-am-i-quoted" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How to Tell What You Are Actually Being Quoted</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quotes are often written in a way that does not distinguish the two treatments. Three quick checks usually reveal what is really planned:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 mb-4">
            <li><strong>Look at the material wording.</strong> Zirconia is a crown material. If a quote says &ldquo;zirconia veneers&rdquo; or &ldquo;20 zirconia crowns&rdquo;, that is crown work, whatever the heading says.</li>
            <li><strong>Count the units against the teeth being changed.</strong> Full arch numbers such as 20 or 24 units usually indicate a full crown makeover rather than selective veneer work.</li>
            <li><strong>Ask for the preparation depth per tooth.</strong> A clinic planning conservative veneers can tell you it will stay within enamel. A crown plan cannot.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For reference, the packages on this site are labelled by what they actually are: our{" "}
            <Link href="/prices/hollywood-smile-turkey-package" className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile packages</Link>{" "}
            are described as zirconia <em>crown</em> packages, while{" "}
            <Link href="/treatments/veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">E-max veneer treatment</Link>{" "}
            is priced and described separately.
          </p>

          <h2 id="questions" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Questions to Ask Before You Agree</h2>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-6">
            <ul className="space-y-2.5">
              {askClinic.map((q) => (
                <li key={q} className="flex gap-2.5 text-gray-800 text-sm leading-relaxed">
                  <span className="text-[#1e40af] font-bold flex-shrink-0">✓</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Each Option Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            On this site, a porcelain (E-max) veneer starts from £190 per tooth and a zirconia crown starts from £130 per tooth. Crowns being the cheaper unit is worth knowing, because it means a full crown makeover is not necessarily the more expensive plan, and cost alone should never decide which treatment your teeth actually need. See the{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">full veneers cost guide</Link>{" "}
            or the{" "}
            <Link href="/guides/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">complete Turkey teeth price guide</Link>{" "}
            for the full breakdown, and{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">monthly payment options</Link>{" "}
            if you are spreading the cost.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Veneers or Crowns: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatments (crowns, veneers and how teeth are prepared)", href: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/" },
            { label: "NHS: What are dentures, bridges, veneers and dental implants made of?", href: "https://www.nhs.uk/common-health-questions/dental-health/what-are-dentures-bridges-veneers-and-dental-implants-made-of/" },
            { label: "General Dental Council: Check a dental professional's registration", href: "https://olr.gdc-uk.org/SearchRegister" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            { title: "Teeth in Turkey: Complete UK Patient Guide", desc: "The full process, safety, clinic evaluation and travel guide.", href: "/guides/teeth-in-turkey" },
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Verified per tooth and package pricing, with UK comparisons.", href: "/guides/turkey-teeth-cost" },
            { title: "How Long Do Turkey Teeth Last?", desc: "Lifespan of E-max veneers, zirconia crowns and composite.", href: "/blog/how-long-do-dental-veneers-last" },
            { title: "Risks of Turkey Teeth", desc: "What can go wrong, why, and how to reduce each risk.", href: "/blog/risks-of-turkey-teeth" },
          ]}
        />
      </div>

      <CTASection
        title="Not Sure Whether You Need Veneers or Crowns?"
        subtitle="Send us your photos and we will come back with a written, per tooth treatment plan that states exactly what is proposed and why."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
