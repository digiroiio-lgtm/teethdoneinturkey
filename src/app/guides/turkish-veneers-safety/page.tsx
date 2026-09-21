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

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/turkish-veneers-safety`;
const TITLE = "Are Turkish Veneers Safe? Risks, Tooth Shaving & How to Choose Safely";
const H1 = "Are Turkish Veneers Safe? Risks, Tooth Preparation & How to Choose Safely";
const DESCRIPTION =
  "A clinical safety guide for UK patients: what makes veneer treatment unsafe, what risks to look for, how to choose a safe clinic, and what to do if something goes wrong.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkish-veneers-safety" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "inherently-unsafe", label: "Are Turkish Veneers Inherently Unsafe?" },
  { id: "why-problems-happen", label: "Why Problems Happen" },
  { id: "patient-selection", label: "Patient Selection & Suitability" },
  { id: "tooth-preparation", label: "Excessive Tooth Preparation" },
  { id: "irreversibility", label: "Irreversibility" },
  { id: "lab-quality", label: "Lab Quality & Materials" },
  { id: "dentist-experience", label: "Dentist Experience & Planning" },
  { id: "temporaries", label: "Temporary Restorations" },
  { id: "aftercare-uk", label: "Aftercare & UK Follow-up" },
  { id: "if-something-goes-wrong", label: "If Something Goes Wrong" },
  { id: "warranty", label: "Warranty Considerations" },
  { id: "red-flags", label: "Red Flags" },
  { id: "questions-to-ask", label: "Questions to Ask Before Treatment" },
  { id: "faqs", label: "FAQs" },
];

const questionsToAsk = [
  "What veneer material will be used — E-max, zirconia or composite?",
  "What is the preparation depth planned for my specific teeth?",
  "Will I receive temporary restorations so I can review the shape and shade before my teeth are permanently prepared?",
  "Who is making my veneers — in-house lab or external, and what equipment is used?",
  "Has a gum health and bite assessment been completed before any preparation?",
  "What is the aftercare protocol once I return to the UK?",
  "Who is my named UK contact if I have a problem after returning?",
  "What is the warranty on the veneers, and what does it cover?",
  "What happens if a veneer chips, debonds or needs adjustment within the first year?",
];

const faqs = [
  {
    question: "Are veneers in Turkey safe?",
    answer: "Veneers placed at accredited Turkish clinics by qualified dentists using established materials (E-max by Ivoclar, zirconia by reputable manufacturers) are clinically safe. The risks that cause reported problems — excessive tooth preparation, poor lab work, inadequate diagnosis, no aftercare — are associated with poor provider choice, not with Turkey as a country. Choosing a clinic carefully eliminates the majority of these risks.",
  },
  {
    question: "What is the biggest risk with Turkish veneers?",
    answer: "The most serious clinical risk is excessive and irreversible tooth preparation — grinding down healthy natural tooth structure beyond what the chosen restoration requires. Once enamel is removed, it cannot be replaced. Patients prepared more aggressively than their veneer type requires may experience permanent sensitivity, structural vulnerability and eventual need for crowns or root canal treatment. The risk is not unique to Turkey but is higher at clinics that routinely use crowns regardless of clinical need.",
  },
  {
    question: "What happens if a Turkish veneer breaks or comes off?",
    answer: "A chipped or debonded veneer needs to be assessed by a dentist — UK dentists can evaluate and recement or replace a veneer regardless of where it was originally placed. Whether the original Turkish clinic covers repair under warranty depends on the terms you agreed. If the debonding is due to a clinical error (wrong preparation, poor bonding), you may have grounds to request remediation from the original clinic. Document everything: photos, dental records and written communication.",
  },
  {
    question: "Will a UK dentist fix problems from Turkey veneers?",
    answer: "Yes — UK dentists are not obliged to refuse treatment on teeth worked on abroad. Most will assess, recement or replace a Turkish veneer. They cannot guarantee the standard of the underlying preparation, but they can treat what is clinically indicated. If extensive remediation is needed, a specialist in restorative dentistry may be appropriate.",
  },
  {
    question: "Do you need a gum health check before veneers?",
    answer: "Yes. Veneers placed on unhealthy gums can fail faster and carry a higher risk of gum recession, which can leave the edge of the veneer visible over time. Any active gum disease should be treated before veneer treatment begins. A legitimate clinic will not proceed with preparation until gum health is confirmed.",
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
        { "@type": "ListItem", position: 3, name: "Are Turkish Veneers Safe?", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkishVeneersSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Are Turkish Veneers Safe?" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A clinical safety guide — not a veneer-vs-crown comparison. What actually causes problems with Turkish veneers, how to avoid them, and what to do if something goes wrong after you return home.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge
            />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Veneers placed at accredited Turkish clinics by qualified dentists using established materials are clinically safe. The problems that appear in media reports and patient forums are caused by poor provider choice — not by Turkey as a destination. Excessive tooth preparation (irreversible), poor lab quality, inadequate diagnosis and absent aftercare are the main failure modes. Every one of these is avoidable by choosing a clinic correctly.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Turkish veneers are not inherently unsafe — poor provider choice causes most reported problems.",
              "The biggest clinical risk is excessive and irreversible tooth preparation beyond what the chosen restoration requires.",
              "Gum health and bite assessment must be completed before any preparation — a legitimate clinic will not skip this.",
              "Lab quality matters: in-house digital labs using pressed or milled E-max offer better quality control than external labs.",
              "Always receive temporary restorations before permanent preparation so you can review shape and shade.",
              "Confirm UK aftercare arrangements before booking — a named UK contact, not just a WhatsApp number for Turkey.",
            ]}
          />

          <h2 id="inherently-unsafe" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Are Turkish Veneers Inherently Unsafe?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No. The clinical procedure for placing a porcelain veneer — shade selection, tooth preparation, impression, laboratory fabrication, adhesive bonding — is the same in Turkey as in the UK. E-max (Ivoclar) and zirconia veneer materials used in Turkish clinics are the same brands used in UK practices. The Turkish Dental Association regulates dentistry in Turkey, and accredited clinics operate under equivalent sterilisation and infection control requirements to those in the UK.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The problems that appear in news reports — teeth &ldquo;shaved to pegs,&rdquo; cracked restorations, missing aftercare — are not caused by Turkey; they are caused by specific poorly chosen clinics. The same categories of problem exist at poorly run dental practices in the UK. The difference is that UK patients have greater recourse through the GDC, which does not cover overseas providers.
          </p>

          <h2 id="why-problems-happen" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why Problems Happen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most reported problems with Turkish veneers fall into one of these categories:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Wrong patient selection:</strong> veneers placed on teeth that were not suitable — unhealthy gums, untreated decay, significant bite problems — without prior diagnosis or treatment.</li>
            <li><strong>Excessive tooth preparation:</strong> preparation depth appropriate for a crown applied to a patient who was quoted veneers. The patient returns home with severely compromised tooth structure.</li>
            <li><strong>Poor lab work:</strong> restorations fabricated at low-cost external labs with inferior materials — incorrect shade, poor fit, thick margins causing gum irritation.</li>
            <li><strong>No diagnostic process:</strong> treatment proceeded without X-rays, a thorough bite assessment or gum health confirmation.</li>
            <li><strong>No temporary restorations:</strong> teeth prepared and restorations bonded without the patient reviewing temporaries first — no opportunity to correct shape or shade.</li>
            <li><strong>No aftercare:</strong> the patient returns to the UK with no named point of contact, no written care instructions and no clinical records to provide to a UK dentist if needed.</li>
          </ul>

          <h2 id="patient-selection" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Patient Selection &amp; Suitability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not everyone is a good candidate for veneers. Contraindications include: active gum disease (must be treated first), significant untreated decay, heavy tooth grinding (bruxism) without a planned night guard, insufficient enamel (enamel is required for reliable bonding), or very severe tooth misalignment (orthodontic treatment may be more appropriate).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A legitimate clinic will assess all of these before confirming a treatment plan. If a clinic is prepared to proceed with a veneer makeover without a full clinical assessment, X-rays and a gum health check, this is itself a significant red flag — regardless of price or location.
          </p>

          <h2 id="tooth-preparation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Excessive Tooth Preparation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the most serious and most discussed clinical risk associated with Turkish veneers. Tooth preparation removes a layer of enamel from each tooth to create space for the restoration. The amount removed depends on the restoration type:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>E-max veneer: 0.3–0.5mm from the front surface only.</li>
            <li>Zirconia crown: 1.5–2.0mm from all surfaces.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Problems arise when clinics prepare teeth to crown depth when veneers have been quoted, or when preparation is deeper than the restoration requires — leaving structurally weakened teeth prone to sensitivity, fracture and eventual root canal need. Enamel does not regenerate. Whatever is removed is removed permanently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is why understanding the difference between a veneer and a crown — and confirming which you are being quoted — is so important before any treatment begins. See{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth: Veneers or Crowns?</Link>{" "}
            for a full explanation.
          </p>

          <h2 id="irreversibility" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Irreversibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once tooth preparation has occurred — whether for a veneer or a crown — the treatment is permanent. The prepared tooth will always require a restoration; it cannot be left unrestored. This is why the pre-treatment decision (whether to proceed, with which restoration type, on which teeth) carries more clinical weight than the restoration itself. If something goes wrong with the veneers, the restorations can be replaced; if the underlying preparation was excessive, the compromise to the tooth structure remains regardless of what is placed on top.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is not a reason not to have veneers — it is a reason to ensure the decision is made carefully and with full clinical information before preparation begins.
          </p>

          <h2 id="lab-quality" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Lab Quality &amp; Materials</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The dental laboratory that fabricates your veneers is as important as the dentist who prepares your teeth. E-max veneers require a skilled ceramic technician and appropriate furnace equipment — pressed or layered E-max cannot be made on standard CAD/CAM milling equipment designed for zirconia.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In-house digital labs at reputable Antalya clinics use Ivoclar IPS e.max Press or similar quality materials. Low-cost external labs in cost-minimising clinics may use inferior materials, produce restorations with poor fit or shade matching, or have lower quality control.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ask your clinic: who makes your veneers, where, and with what equipment? A confident answer with a named lab and equipment is a good sign. Vagueness or inability to answer is a warning.
          </p>

          <h2 id="dentist-experience" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Dentist Experience &amp; Diagnostic Planning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veneer treatment should begin with a diagnostic wax-up or digital smile design — a preview of the planned outcome in the correct shade, shape and length — before any tooth is prepared. This allows the patient to approve the aesthetic result and the dentist to confirm the planned preparation depth is clinically appropriate. Skipping this step is a shortcut that saves money for the clinic and increases risk for the patient.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The treating dentist should have specific postgraduate training in aesthetic or restorative dentistry. General dental training (the Turkish equivalent of a BDS degree) is a minimum, not a qualification specific to cosmetic veneer work.
          </p>

          <h2 id="temporaries" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Temporary Restorations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Temporary restorations serve two purposes: protecting prepared teeth while the permanent veneers are fabricated, and giving you a preview of the final shape and shade so that adjustments can be made before anything permanent is bonded. You should always be fitted with temporaries after preparation — if a clinic proposes to send you home with bare prepared teeth while the lab works, or to skip temporaries to save time, do not proceed.
          </p>

          <h2 id="aftercare-uk" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Aftercare &amp; UK Follow-up</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The clinic that placed your veneers is legally responsible for the treatment standard in Turkey. Once you return to the UK, the practical responsibility for your dental health falls to your UK dentist and to whatever aftercare arrangement your Turkey provider has put in place.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Good aftercare from a Turkey provider includes: written care instructions; a copy of your clinical records and shade/prescription details (so any UK dentist can work with your existing restorations); and a named UK contact who can respond to post-treatment questions and, if needed, arrange an emergency in-person review. Confirm all of this before booking — do not assume it is standard.
          </p>

          <h2 id="if-something-goes-wrong" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">If Something Goes Wrong</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you experience a problem with your veneers after returning to the UK:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Document everything:</strong> photograph the problem, note the date and symptoms, and keep all written communication with the Turkish clinic.</li>
            <li><strong>See a UK dentist:</strong> for clinical assessment of what has happened. UK dentists will treat teeth regardless of where previous work was done.</li>
            <li><strong>Contact your Turkish clinic:</strong> a reputable clinic will respond to post-treatment issues, especially within the warranty period. Send a written account with photographs.</li>
            <li><strong>Claim on your travel insurance:</strong> if your policy includes dental complications (confirm this before travelling), a clinical emergency caused by the treatment may be covered.</li>
            <li><strong>Seek legal advice if necessary:</strong> for significant clinical harm caused by negligent treatment, a dental negligence solicitor can advise on options for international claims, though these are complex.</li>
          </ol>

          <h2 id="warranty" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Warranty Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many Turkish clinics offer a warranty on veneer work — typically 1–2 years for manufacturing defects. Confirm in writing what the warranty covers (debonding, cracking, shade inconsistency) and what voids it (trauma, grinding, failure to attend aftercare appointments). A warranty is only as useful as the clinic&apos;s willingness to honour it — check independent reviews for reports of warranty claims being handled well or poorly.
          </p>

          <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Red Flags to Watch For</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Treatment plan confirmed without X-rays or a clinical examination of gum health.</li>
            <li>No diagnostic wax-up, digital preview or shade discussion before preparation.</li>
            <li>No temporary restorations between preparation and final fitting.</li>
            <li>Clinic cannot name the veneer material brand or the lab making your restorations.</li>
            <li>Price significantly below the market rate for E-max in Turkey (below £190/tooth).</li>
            <li>Pressure to include more teeth than you enquired about.</li>
            <li>No written treatment plan before payment of deposit.</li>
            <li>No clear UK aftercare contact confirmed before your trip.</li>
          </ul>

          <h2 id="questions-to-ask" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Questions to Ask Before Treatment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before committing to any Turkey veneer clinic, get written answers to these questions:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-1">
            {questionsToAsk.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>

          <p className="text-gray-700 leading-relaxed mb-4">
            For guidance on choosing the best veneer type and clinic, see{" "}
            <Link href="/guides/best-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">Best Veneers in Turkey: Types, Clinics, Costs &amp; How to Choose</Link>.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkish Veneers Safety: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Veneers", href: "https://www.nhs.uk/conditions/veneers/" },
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            { label: "GDC: Guidance on dental tourism", href: "https://www.gdc-uk.org/patients/dental-tourism" },
            { label: "NCBI: Complications in porcelain laminate veneers — systematic review", href: "https://pubmed.ncbi.nlm.nih.gov/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth: Veneers or Crowns?", desc: "How much tooth each removes and what cannot be undone.", href: "/guides/turkey-teeth-veneers-or-crowns" },
            { title: "Best Veneers in Turkey", desc: "E-max vs zirconia vs composite — which is right for you?", href: "/guides/best-veneers-turkey" },
            { title: "Veneers Turkey Cost 2026", desc: "Per-tooth and full-set veneer prices in Turkey.", href: "/prices/veneers-turkey-cost" },
            { title: "Veneers Turkey Treatment", desc: "Treatment page: what the process involves, materials and timeline.", href: "/treatments/veneers-turkey" },
          ]}
        />
      </div>

      <CTASection
        title="Choose a Clinic You Can Trust"
        subtitle="Get a free personalised treatment plan from a verified clinic — materials confirmed, UK aftercare included, no pressure to proceed."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
