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
const PAGE_URL = `${SITE_URL}/guides/cant-afford-root-canal-uk`;
const TITLE = "Can't Afford a Root Canal? Your UK Options Explained";
const H1 = "Can't Afford a Root Canal in the UK? What to Do";
const DESCRIPTION =
  "Root canal costs £500–£1,500 at a UK private dentist. NHS Band 2 charges, extraction vs root canal, payment plans and Turkey cost comparison.";
const DATE_PUBLISHED = "2026-09-17";
const DATE_MODIFIED = "2026-09-18";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/cant-afford-root-canal-uk" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is-root-canal", label: "What Root Canal Treatment Involves" },
  { id: "nhs-root-canal", label: "NHS Root Canal: What You Pay" },
  { id: "private-cost", label: "UK Private Root Canal Costs" },
  { id: "root-canal-vs-extraction", label: "Root Canal vs Extraction" },
  { id: "delay-risks", label: "Risks of Delaying Treatment" },
  { id: "crown-needed", label: "You Will Probably Need a Crown Too" },
  { id: "uk-vs-turkey", label: "UK vs Turkey Cost Comparison" },
  { id: "payment-plans", label: "Payment Plans and Finance" },
  { id: "after-extraction", label: "If the Tooth Needs Extracting" },
  { id: "faqs", label: "FAQs" },
];

const costRows = [
  { treatment: "Root canal (front tooth)", nhs: "£76.60 (Band 2)", private: "£500–£700", turkey: "£200–£250", monthly: "From £6/mo" },
  { treatment: "Root canal (molar)", nhs: "£76.60 (Band 2)", private: "£900–£1,500", turkey: "£250–£300", monthly: "From £7/mo" },
  { treatment: "Crown (porcelain)", nhs: "£306.80 (Band 3)", private: "£800–£1,000", turkey: "£130–£280", monthly: "From £4/mo" },
  { treatment: "Root canal + crown (total)", nhs: "£306.80 (Band 3)", private: "£1,300–£2,500", turkey: "£330–£580", monthly: "From £10/mo" },
  { treatment: "Single implant (if extraction)", nhs: "Not available (routine)", private: "£2,000–£3,000", turkey: "£250–£600", monthly: "From £7/mo" },
];

const faqs = [
  {
    question: "Does the NHS do root canals, or do they just pull teeth?",
    answer:
      "The NHS does cover root canal treatment under Band 2 (£76.60, England, from April 2026), which includes root canal work alongside fillings and extractions. However, NHS dentists are not always willing or funded to perform root canal on complex molar cases. Confirm at your assessment what the NHS practice is able to offer — in some cases, NHS extraction is what is available even though root canal would be clinically preferable.",
  },
  {
    question: "Is it better to have the tooth pulled than pay for a root canal?",
    answer:
      "Extraction is cheaper in the short term. But losing a tooth creates a gap, and leaving a gap affects the surrounding teeth over time — adjacent teeth drift, the opposing tooth over-erupts, and bone in the empty socket begins to resorb. If the gap matters functionally or cosmetically, you will eventually face the cost of a bridge, denture or implant. Root canal saves the tooth. The right answer depends on the tooth's position, structural integrity, and what you plan to do about the gap.",
  },
  {
    question: "What happens if you leave a tooth that needs root canal untreated?",
    answer:
      "The infection will progress. A tooth with a dying or dead nerve is a source of bacteria. Without treatment, it typically develops into an abscess — a pus-filled swelling that is painful, damages surrounding bone and, in serious cases, can spread into the neck or jaw. At that point root canal may no longer be possible and extraction becomes necessary regardless.",
  },
  {
    question: "Can I get root canal treatment on a payment plan?",
    answer:
      "Yes. For root canal plus crown in Turkey — the full treatment combination — finance from around £10/month over 36 months at 0% representative APR is available through this site, subject to eligibility and a soft-search credit check. A soft search does not affect your credit score.",
  },
  {
    question: "How long does a root canal take in Turkey?",
    answer:
      "For most teeth, root canal in Turkey is completed in one appointment of 1.5 to 2 hours. The crown is typically fitted at the same visit or the following day, meaning most patients complete the full root canal plus crown in 2 to 3 days.",
  },
  {
    question: "Can root canal be done abroad safely?",
    answer:
      "Root canal is a standard endodontic procedure performed identically worldwide. The key variables are the quality of the dental practice, the sterilisation standards, and whether the dentist is using up-to-date rotary equipment rather than older manual files. Partner clinics through this site are JCI-accredited and use modern endodontic systems; ask to confirm this before booking any overseas root canal.",
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
        { "@type": "ListItem", position: 3, name: "Can't Afford a Root Canal?", item: PAGE_URL },
      ],
    },
  ],
};

export default function CantAffordRootCanalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: "Can't Afford a Root Canal?" },
              ]}
            />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Root canal on the NHS costs £76.60. Private treatment costs £500–£1,500. Here is how the costs actually work, when extraction is a realistic alternative, and how to spread the cost if you need to.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">
            Quick Answer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Root canal on the NHS costs <strong>£76.60 (Band 2, England)</strong>. Private root canal costs <strong>£500–£1,500</strong> depending on the tooth, plus £800–£1,000 for the crown usually needed after. In Turkey, the full root canal plus crown typically costs <strong>£330–£580</strong>. If you cannot access NHS and cannot afford private, payment plans from around £10/month and overseas treatment are the two realistic alternatives.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "NHS covers root canal under Band 2 (£76.60, England, April 2026) — but not all NHS practices perform it on complex molar cases; confirm at assessment.",
              "UK private root canal costs £500–£700 (front teeth) to £900–£1,500 (molars), plus £800–£1,000 for the crown required after.",
              "Delaying treatment on an infected tooth risks abscess, bone loss and the tooth becoming unrestorable — meaning extraction anyway, at greater cost.",
              "Root canal + crown in Turkey typically costs £330–£580, often less than the travel cost of one treatment abroad (flights + hotel ≈ £300–£600).",
              "0% representative APR finance from around £10/month over 36 months is available for root canal plus crown treatment booked through this site, subject to eligibility.",
            ]}
          />

          <h2 id="what-is-root-canal" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What Root Canal Treatment Involves
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Root canal (technically endodontic treatment) removes the infected or inflamed pulp tissue from inside the tooth, cleans and shapes the root canals, seals them to prevent reinfection, and typically places a crown on top to protect the weakened tooth structure. It is performed under local anaesthetic and should not be painful during treatment, though the tooth may be sensitive afterwards for a few days.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Front teeth have one root and are simpler to treat. Molars have two or three roots and can require more appointment time. This is why a molar root canal costs more than one on an incisor.
          </p>

          <h2 id="nhs-root-canal" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS Root Canal: What You Actually Pay
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Root canal treatment is covered by the NHS under Band 2 (£76.60, England, from April 2026). Band 2 includes fillings, root canal work, and extractions — you pay one fixed Band 2 charge for the entire course of treatment, regardless of how many visits it takes or how many teeth are involved within the same course.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If a crown is required after the root canal — which is usually the case on molars and premolars — that pushes the treatment into Band 3 (£306.80), since crowns are a Band 3 item. You still pay one charge for the whole course of treatment including both the root canal and the crown.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The practical limitation is access: many NHS practices do not routinely perform root canal on complex molar cases under NHS contracts, and some refer patients to specialist endodontists (often private) instead. Check at your NHS assessment exactly what can be provided.
          </p>

          <h2 id="private-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            UK Private Root Canal Costs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK private root canal fees vary by the complexity of the tooth and the practice. Typical ranges:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li>Front tooth (single root): £500–£700</li>
            <li>Premolar (one or two roots): £600–£900</li>
            <li>Molar (two or three roots): £900–£1,500</li>
            <li>Specialist endodontist: £800–£2,000+</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            A specialist endodontist — a dentist who has done additional postgraduate training in root canal specifically — typically charges more but is appropriate for complex, curved or retreatment cases.
          </p>

          <h2 id="root-canal-vs-extraction" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Root Canal vs Extraction: The Honest Comparison
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Extraction costs less upfront: NHS Band 2 (£76.60) or private £150–£300. But extraction leaves a gap, and a gap has its own consequences and costs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Adjacent teeth naturally drift towards the empty space over months and years. The opposing tooth — the one above or below the gap — begins to over-erupt (move downward or upward into the space), which can change your bite. The bone in the empty socket begins to resorb without the stimulation of a tooth root.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If the gap is in a visible position or affects chewing, replacing it becomes a practical necessity. Options are a bridge (permanent, requires crown preparation of adjacent teeth), a partial denture (removable), or an implant. An implant — the closest equivalent to a natural tooth root — typically costs £250–£600 in Turkey or £2,000–£3,000 privately in the UK.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            So &ldquo;just pull it&rdquo; is rarely as simple as it sounds if you want to preserve function and appearance long term.
          </p>

          <h2 id="delay-risks" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Risks of Delaying Root Canal Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A tooth that needs root canal has either an infected pulp or a dying nerve. Left untreated, the infection continues to progress. The likely outcomes of delay are:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li><strong>Dental abscess</strong> — a painful, pus-filled swelling around the root tip. Antibiotics buy time but do not cure an abscess; the tooth still needs treatment.</li>
            <li><strong>Bone loss</strong> — infection at the root destroys the surrounding bone, making later implant placement more complicated and expensive.</li>
            <li><strong>Spreading infection</strong> — in serious cases, dental infection spreads into soft tissue in the neck and jaw (Ludwig&apos;s angina). This is uncommon but can be life-threatening and requires hospital treatment.</li>
            <li><strong>Tooth becomes unrestorable</strong> — if the crown portion is too broken down and the root is too compromised, root canal is no longer viable and extraction becomes the only option.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are in acute pain, have swelling, or suspect an abscess, call NHS 111 (dial 111) and read the{" "}
            <Link href="/guides/tooth-abscess-cant-afford-dentist" className="text-[#1e40af] font-semibold hover:underline">
              tooth abscess guide
            </Link>{" "}
            first — that situation needs different immediate action.
          </p>

          <h2 id="crown-needed" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            You Will Probably Need a Crown Too
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Root canal removes the nerve and blood supply from inside the tooth, leaving the remaining structure more brittle. On back teeth (premolars and molars) that take biting force, a crown is strongly recommended after root canal to prevent the tooth from fracturing. On front teeth, the tooth may be restored with a filling, but a crown offers better long-term protection.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When budgeting, factor in the crown cost. Root canal without a crown — particularly on a molar — risks the tooth cracking and requiring extraction anyway.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            UK vs Turkey Cost Comparison
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the full root canal plus crown combination, the Turkey saving is large enough to cover the cost of flights and hotel in most cases:
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">NHS (England)</th>
                  <th className="px-4 py-3 text-right font-semibold">UK Private</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey</th>
                  <th className="px-4 py-3 text-right font-semibold">Monthly (36mo)</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.nhs}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.private}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Monthly figures are indicative at 0% representative APR over 36 months, subject to eligibility. NHS charges from April 2026 (England). Turkey prices are for treatment at partner clinics; flights and hotel are additional (typically £300–£600 for a 3–5 day trip).
          </p>

          <h2 id="payment-plans" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Payment Plans and Finance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For root canal plus crown treatment booked through this site, 0% representative APR finance is available from around £10/month over 36 months. A soft-search pre-qualification check lets you see your eligibility without it appearing on your credit file. See{" "}
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">
              Monthly Payment
            </Link>{" "}
            for per-treatment figures, or{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">
              Dental Finance Options UK
            </Link>{" "}
            for eligibility, bad credit and how the pre-qualification works.
          </p>

          <h2 id="after-extraction" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            If the Tooth Needs Extracting: Your Options
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If root canal is not viable — the tooth is too damaged, the infection is too advanced, or the cost is genuinely unmanageable — and extraction is the outcome, you will eventually want to address the gap. Three options:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Dental implant</strong> — a titanium post inserted into the jaw bone, topped with a crown. The most durable solution; preserves bone. Costs £250–£600 in Turkey, £2,000–£3,000 in the UK privately. Read the{" "}
              <Link href="/treatments/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">
                dental implants guide
              </Link>{" "}
              for details.
            </li>
            <li>
              <strong>Bridge</strong> — a false tooth held in place by crowns on the adjacent teeth. Requires grinding down neighbouring teeth. Costs less than an implant but is irreversible.
            </li>
            <li>
              <strong>Partial denture</strong> — a removable plate. The least expensive option; no preparation of other teeth.
            </li>
          </ul>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Root Canal: Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            {
              label: "NHS: What is included in each NHS dental band charge?",
              href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/what-is-included-in-each-nhs-dental-band-charge/",
            },
            {
              label: "NHSBSA: NHS dental charges from 1 April 2026",
              href: "https://www.nhsbsa.nhs.uk/sites/default/files/2026-03/NHS%20England%20dental%20charges%20poster%20-%20April%202026.pdf",
            },
            {
              label: "British Dental Association: Root canal treatment",
              href: "https://www.bda.org/",
            },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            {
              title: "Can't Afford Dental Treatment UK?",
              desc: "All your options in decision order — NHS, finance, payment plans and abroad.",
              href: "/guides/cant-afford-dental-treatment-uk",
            },
            {
              title: "Tooth Abscess Can't Afford a Dentist",
              desc: "If your root canal problem has become an abscess, read this first.",
              href: "/guides/tooth-abscess-cant-afford-dentist",
            },
            {
              title: "Can't Find an NHS Dentist?",
              desc: "NHS 111, emergency services and alternatives when you can't get registered.",
              href: "/guides/no-nhs-dentist-what-to-do",
            },
            {
              title: "Dental Implants Turkey",
              desc: "Straumann and Nobel implants from £250 — the full UK patient guide.",
              href: "/treatments/dental-implants-turkey",
            },
            {
              title: "Dental Implants Turkey Cost",
              desc: "Implant pricing from £250 per tooth — all brands and options compared.",
              href: "/prices/dental-implants-turkey-cost",
            },
          ]}
        />
      </div>

      <CTASection
        title="Get a Free Treatment Plan with Monthly Breakdown"
        subtitle="Request a free personalised quote with an itemised cost and monthly payment figure — within 24 hours, no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
