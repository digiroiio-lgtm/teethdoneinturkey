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
const PAGE_URL = `${SITE_URL}/guides/turkey-teeth-antalya`;
const TITLE = "Turkey Teeth in Antalya: Complete UK Patient Guide 2026";
const H1 = "Turkey Teeth in Antalya: Complete UK Patient Guide 2026";
const DESCRIPTION =
  "What it is actually like to go to Antalya from the UK for dental treatment — treatment options, clinic choice, the patient journey, travel, safety and UK aftercare.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/turkey-teeth-antalya" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "why-antalya", label: "Why UK Patients Choose Antalya" },
  { id: "treatment-options", label: "Treatment Options" },
  { id: "patient-journey", label: "The Patient Journey" },
  { id: "how-many-days", label: "How Many Days Do You Need?" },
  { id: "choosing-a-clinic", label: "Choosing a Clinic" },
  { id: "safety", label: "Is It Safe?" },
  { id: "travel-logistics", label: "Travel & Logistics" },
  { id: "hotels", label: "Hotels Near Clinics" },
  { id: "packages", label: "Packages Explained" },
  { id: "recovery", label: "Recovery in Antalya" },
  { id: "uk-aftercare", label: "UK Aftercare" },
  { id: "payment", label: "Paying for Treatment" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "What is it like getting dental treatment in Antalya?",
    answer: "Most UK patients describe it as more straightforward than they expected. Clinics work with international patients daily — English-speaking treatment coordinators, airport pickups, hotel arrangements and step-by-step appointment scheduling are standard. The treatment itself is the same clinical process as in a UK private practice; the experience around it is more organised for overseas patients than many expect.",
  },
  {
    question: "How long do I need to stay in Antalya for veneers or crowns?",
    answer: "For veneers and crowns, most patients need 5–7 days. This typically covers: consultation and X-rays on day one; tooth preparation and temporary restorations on days two to three; lab work; final fitting and adjustments on days four to six. Some clinics with in-house labs can complete the full process in 5 days.",
  },
  {
    question: "Do I need to make two trips for implants?",
    answer: "Yes. Dental implants require osseointegration — the implant post must fuse to the jawbone over 3–6 months before the final crown is fitted. Most implant patients make a first visit for placement (5–7 days) and a second visit for crown fitting (3–5 days). All-on-4 and All-on-6 patients receive temporary fixed teeth on the first visit so they are never without teeth between trips.",
  },
  {
    question: "Is it safe to get dental treatment in Antalya?",
    answer: "At accredited Antalya clinics using verified implant and veneer brands, the clinical standards are equivalent to UK private treatment. The risks that do occur — excessive tooth preparation, poor lab work, inadequate aftercare — are associated with poorly chosen providers rather than with Antalya as a destination. Choosing an accredited clinic with verifiable patient reviews, confirmed implant and crown brands, and a named UK aftercare contact removes the majority of these risks.",
  },
  {
    question: "What aftercare is available once I return to the UK?",
    answer: "UK patients working through this site have a named UK-based treatment coordinator who handles post-treatment queries, liaises with the Antalya clinic on their behalf, and can refer to a UK dental partner for emergency checks if needed. Ask any provider you consider to confirm exactly what UK aftercare they offer before you book.",
  },
  {
    question: "Why choose Antalya for dental implants?",
    answer: "Antalya has a growing number of clinics with specialist implantologists who work with international patients daily. The main reasons UK patients choose Antalya for implants specifically are: the cost saving (Osstem implants from £250 vs £2,000+ in the UK; Straumann from £930 vs £3,000+), the availability of in-house CBCT scanners and digital workflows at established clinics, and the resort environment that makes a 5–7 day first visit more comfortable. The clinical process — consultation, CT scan, implant placement, temporary restoration — is the same as in the UK. What changes is the cost and the experience around it. Confirm that your chosen clinic has an accredited implantologist on staff, not just a general dentist performing implant procedures.",
  },
  {
    question: "Can I finance treatment in Antalya?",
    answer: "Yes. 0% representative APR finance is available for treatment booked through this site. Monthly payments start from approximately £70/month on a 36-month plan for a £2,500 treatment. The finance covers the treatment cost; flights and accommodation are typically paid separately. A soft-search pre-qualification lets you check eligibility without affecting your credit score.",
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
        { "@type": "ListItem", position: 3, name: "Turkey Teeth in Antalya", item: PAGE_URL },
      ],
    },
  ],
};

export default function TurkeyTeethAntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Turkey Teeth in Antalya" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Not a price list — a patient guide. What it is actually like to travel from the UK to Antalya, choose a clinic, go through treatment, and get home safely.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge
            />

          <p className="text-gray-700 leading-relaxed mb-6">
            Antalya is where the majority of UK dental patients go when they choose Turkey. This guide answers the practical questions — what treatment you can have, how many days it takes, what a trip actually looks like, how to choose a clinic you can trust, and what happens when you get home. For treatment prices, see the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost guide</Link>.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Antalya has more UK-focused dental clinics than anywhere else in Turkey — patient infrastructure is mature and English-speaking.",
              "Veneers and crowns: one trip of 5–7 days. Implants: two trips (placement + crown fitting 3–6 months apart).",
              "Direct flights from most UK airports — 4 hours from London, 4.5 from Manchester.",
              "Package prices typically include hotel and transfers but not flights — always confirm.",
              "Clinical standards at accredited Antalya clinics are equivalent to UK private treatment when the right implant and crown brands are used.",
              "UK aftercare is available through a named treatment coordinator — confirm this before booking.",
            ]}
          />

          <h2 id="why-antalya" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why UK Patients Choose Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya has been the primary destination for UK dental patients in Turkey for over fifteen years, and the infrastructure reflects it. Clinics here are structured for international patients — English-speaking coordinators, established hotel partnerships, airport pickup services, and treatment scheduling designed around a 5–7 day stay. Istanbul has more clinics overall but Antalya has more clinics with direct experience of UK patient needs, communication preferences and aftercare expectations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The pricing advantage is substantial: the same E-max porcelain veneers and Straumann or Nobel Biocare implants used in UK private practices cost 65–80% less in Antalya, not because the materials are different but because Turkish clinic overheads and cost of living are significantly lower. For full treatment prices, see the{" "}
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth cost guide</Link>.
          </p>

          <h2 id="treatment-options" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Options in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya clinics offer the full range of restorative and cosmetic dental treatments that UK patients seek. The most common are:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Porcelain veneers (E-max):</strong> thin shells bonded to the front of natural teeth for a cosmetic transformation. Completed in one visit.</li>
            <li><strong>Zirconia crowns:</strong> full-coverage caps over prepared natural teeth. The most common treatment in full-smile makeovers. Completed in one visit.</li>
            <li><strong>Dental implants (single):</strong> a titanium post replacing a missing tooth root, with a crown on top. Two visits required.</li>
            <li><strong>All-on-4:</strong> four implant posts per arch supporting a fixed bridge of 10–14 teeth. Two visits required. Temporary teeth fitted on visit one.</li>
            <li><strong>All-on-6:</strong> six implant posts per arch for greater load distribution. Two visits required.</li>
            <li><strong>Smile makeovers / Hollywood Smile:</strong> a combination of veneers, crowns and whitening across the visible smile. Completed in one visit for veneer/crown-only cases.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all clinics offer every treatment. If you need full-mouth implants, confirm before booking that the clinic has an implantologist on staff — not all veneer-focused practices do.
          </p>

          <h2 id="patient-journey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">The Patient Journey: What a Typical Antalya Trip Looks Like</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a <strong>veneer or crown makeover</strong>, the typical sequence across a 5–7 day visit is:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Arrival day:</strong> airport pickup, hotel check-in, a brief welcome consultation if scheduled.</li>
            <li><strong>Day 1 (clinic):</strong> full consultation, dental X-rays or CT scan, shade selection, treatment plan confirmation, consent.</li>
            <li><strong>Day 2–3:</strong> tooth preparation under local anaesthesia; temporaries fitted. Digital or physical impressions sent to the lab.</li>
            <li><strong>Day 3–4:</strong> lab turnaround day — rest, explore Antalya.</li>
            <li><strong>Day 4–5:</strong> final restorations fitted, bite check, adjustments, polishing.</li>
            <li><strong>Day 5–6:</strong> review appointment; any minor adjustments; departure.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            For <strong>implant treatment</strong>, visit one covers consultation, CT scan, extraction of any failing teeth, implant post placement and temporary teeth. Visit two (3–6 months later) covers confirmation of integration, permanent crown or bridge fitting and review.
          </p>

          <h2 id="how-many-days" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How Many Days Do You Need in Antalya?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The minimum stay varies by treatment:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Veneers or crowns (up to 20 teeth):</strong> 5–7 days on one visit.</li>
            <li><strong>Single implant:</strong> 5–7 days on visit one; 3–5 days on visit two.</li>
            <li><strong>All-on-4 / All-on-6 (one arch):</strong> 6–8 days on visit one; 3–5 days on visit two.</li>
            <li><strong>All-on-4 / All-on-6 (both arches):</strong> 7–9 days on visit one; 4–6 days on visit two.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinics with in-house digital labs can sometimes reduce the veneer/crown stay to 5 days; clinics using external labs may need 7. Confirm turnaround time when you receive your treatment plan.
          </p>

          <h2 id="choosing-a-clinic" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Choosing a Clinic in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The quality of your treatment is more dependent on clinic and dentist choice than on whether you chose Antalya over another city. Key factors to verify before booking:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Implant brand:</strong> Straumann, Nobel Biocare and MIS are internationally recognised brands used in UK practices. Ask which brand is used and confirm it will appear in your treatment records.</li>
            <li><strong>Crown and veneer material:</strong> E-max (Ivoclar) for veneers; zirconia for crowns. Ask which manufacturer is used for your restorations.</li>
            <li><strong>Lab:</strong> in-house digital labs typically offer faster turnaround and tighter quality control than external labs. Ask whether your restorations are made on site.</li>
            <li><strong>Dentist credentials:</strong> ask for the treating dentist&apos;s qualifications and specialisation — implantologists should have specific postgraduate training, not just a general dental degree.</li>
            <li><strong>Independent reviews:</strong> verified reviews on Google, Trustpilot or UK patient forums (not the clinic&apos;s own website) are the most reliable signal.</li>
            <li><strong>UK aftercare:</strong> confirm there is a named UK-based contact for post-treatment support, not just a WhatsApp number for the clinic in Turkey.</li>
          </ul>

          <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Is It Safe to Get Dental Treatment in Antalya?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The clinical risks associated with &ldquo;Turkey teeth&rdquo; — excessive tooth preparation, poor materials, inadequate diagnosis — are not unique to Turkey or to Antalya; they are associated with poorly chosen providers. At accredited Antalya clinics using verified brands and employing qualified dentists, the treatment process follows the same clinical protocols used in UK private practices.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The NHS advises patients travelling abroad for dental treatment to check that the treating dentist is registered with the Turkish Dental Association and that the clinic has appropriate professional liability insurance. It also recommends ensuring you have appropriate travel insurance that covers dental complications before departure. For a detailed safety guide covering veneers specifically, see{" "}
            <Link href="/guides/turkish-veneers-safety" className="text-[#1e40af] font-semibold hover:underline">Are Turkish Veneers Safe?</Link>
          </p>

          <h2 id="travel-logistics" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Travel &amp; Logistics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Flights:</strong> Direct scheduled flights to Antalya Airport (AYT) operate from London Gatwick, London Stansted, Manchester, Birmingham, Bristol, Edinburgh and Glasgow. Budget carriers including easyJet, Ryanair, Jet2 and TUI all serve the route. Return flights cost £80–£180 from most UK cities outside summer peak.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Airport to clinic:</strong> the drive from Antalya Airport to the clinic area is 20–40 minutes. Most clinic packages include an airport pickup; confirm both arrival pickup and departure transfer are included, not just one direction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Best time to travel:</strong> April–June and September–October offer comfortable temperatures (20–30°C), lower flight prices than summer peak, and full clinic availability. July–August is busy and more expensive for flights.
          </p>

          <h2 id="hotels" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Hotels Near Clinics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Partner clinics work with specific hotels in the Antalya city or coastal area. Hotel costs near clinic partnerships run £40–£80 per room per night. Many packages include accommodation — confirm the number of nights, as this varies (some packages cover 5 nights, others 7). If hotel is not included, budget £40–£80/night and confirm proximity to the clinic before booking independently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Post-treatment, most patients can sightsee and relax in Antalya normally — the old town (Kaleiçi), the coastline and the Taurus mountains are all within easy reach. Antalya is a well-established tourist destination with good English-language infrastructure.
          </p>

          <h2 id="packages" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Packages: What Is and Is Not Included</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most Antalya dental packages include treatment, hotel and airport transfers. Flights are almost never included. For veneer and crown patients, CBCT scans are usually included. For implant patients, confirm whether the CBCT is included and whether the second visit is covered in the quoted price.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a detailed breakdown of package inclusions for veneers specifically, see the{" "}
            <Link href="/guides/veneers-turkey-packages" className="text-[#1e40af] font-semibold hover:underline">Veneers Turkey Packages guide</Link>. For generic package content across all treatments, see{" "}
            <Link href="/guides/turkey-teeth-packages" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Packages: What Is Included</Link>.
          </p>

          <h2 id="recovery" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Recovery in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Veneers and crowns:</strong> recovery is minimal. Mild sensitivity for 24–48 hours after preparation is normal. Most patients can eat soft food from day two onwards and resume normal activities immediately. Flying home after the final appointment is fine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Implant surgery:</strong> expect swelling and tenderness for 3–5 days after placement. Your clinic will provide post-operative care instructions and a prescription if needed. Most patients manage well with over-the-counter pain relief. Flying home 24–48 hours after a straightforward implant placement is generally acceptable — your clinic will advise based on your specific case.
          </p>

          <h2 id="uk-aftercare" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">UK Aftercare</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK aftercare is one of the most important factors to confirm before booking, and one of the least well-defined in many Turkey dental packages. For patients booking through this site, UK aftercare includes a named treatment coordinator for post-treatment queries, a direct line to the Antalya clinic for clinical questions, and referral to a UK dental partner for urgent in-person checks if needed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before booking with any provider, ask explicitly: who do I contact if something needs attention after I return? Is that person based in the UK? Can they arrange an in-person review if needed? Get the answers in writing.
          </p>

          <h2 id="payment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Paying for Treatment in Antalya</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Treatment is quoted in GBP for UK patients and can be paid by card or bank transfer. A deposit is usually required to secure your dates. For patients who prefer to spread the cost, 0% representative APR finance is available for treatment booked through this site — monthly payments start from approximately £70/month on a 36-month plan. See{" "}
            <Link href="/guides/turkey-teeth-monthly-payments" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Monthly Payments</Link>{" "}
            for illustrative payment examples, or{" "}
            <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">Dental Finance Options UK</Link>{" "}
            for eligibility details.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Teeth in Antalya: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            { label: "Turkish Dental Association (TDB)", href: "https://www.tdb.org.tr/" },
            { label: "CAA: Antalya route data", href: "https://www.caa.co.uk/data-and-analysis/uk-aviation-market/airports/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Turkey Teeth Cost Guide 2026", desc: "Full treatment price table: veneers, implants, full mouth, UK comparison.", href: "/prices/turkey-teeth-cost" },
            { title: "Veneers in Antalya Cost", desc: "E-max, zirconia and full set veneer prices in Antalya.", href: "/prices/veneers-antalya-cost" },
            { title: "Turkey Teeth Packages", desc: "What Turkey dental packages include and what to check.", href: "/guides/turkey-teeth-packages" },
            { title: "Are Turkish Veneers Safe?", desc: "Risks, tooth shaving and how to choose a safe clinic.", href: "/guides/turkish-veneers-safety" },
          ]}
        />
      </div>

      <CTASection
        title="Plan Your Antalya Dental Trip"
        subtitle="Tell us what you need and we'll send a free personalised treatment plan with Antalya clinic pricing, package inclusions and monthly payment options."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
