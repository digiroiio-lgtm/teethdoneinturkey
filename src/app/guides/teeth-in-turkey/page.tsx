import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/teeth-in-turkey`;
const TITLE = "Teeth in Turkey: Complete UK Patient Guide 2026";
const H1 = "Teeth in Turkey: The Complete UK Patient Guide";
const DESCRIPTION =
  "The complete, medically reviewed guide to teeth in Turkey for UK patients — treatments, process, costs, safety, clinic evaluation, recovery and travel, in one place.";
const DATE_PUBLISHED = "2026-09-03";
const DATE_MODIFIED = "2026-09-03";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/teeth-in-turkey" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-it-means", label: "What “Teeth in Turkey” Means" },
  { id: "why-uk-patients-travel", label: "Why UK Patients Travel to Turkey" },
  { id: "treatments", label: "Treatments Available" },
  { id: "process", label: "Typical Treatment Process" },
  { id: "consultation-planning", label: "Consultation & Treatment Planning" },
  { id: "how-long-to-stay", label: "How Long Patients Normally Stay" },
  { id: "recovery", label: "Recovery" },
  { id: "costs", label: "Costs" },
  { id: "uk-vs-turkey", label: "Turkey vs UK Considerations" },
  { id: "safety", label: "Safety" },
  { id: "risks", label: "Risks & Complications" },
  { id: "evaluating-a-clinic", label: "How to Evaluate a Clinic" },
  { id: "dentist-qualifications", label: "Dentist Qualifications" },
  { id: "health-tourism-authorisation", label: "Health Tourism Authorisation" },
  { id: "materials-brands", label: "Materials & Implant Brands" },
  { id: "laboratory", label: "Laboratory Considerations" },
  { id: "guarantees-aftercare", label: "Guarantees & Aftercare" },
  { id: "travelling-from-uk", label: "Travelling from the UK" },
  { id: "antalya", label: "Antalya as a Dental Destination" },
  { id: "faqs", label: "FAQs" },
  { id: "next-steps", label: "Next Steps" },
];

const treatmentOverviewRows = [
  { treatment: "Porcelain (E-max) veneers", use: "Cosmetic reshaping of healthy or lightly prepared teeth", from: "From £190/tooth", guide: "/treatments/veneers-turkey" },
  { treatment: "Zirconia crowns", use: "Full-coverage restoration, used in Hollywood Smile packages", from: "From £130/tooth", guide: "/prices/hollywood-smile-turkey-package" },
  { treatment: "Dental implants", use: "Permanent replacement for a missing tooth root", from: "From £250", guide: "/guides/dental-implants-turkey" },
  { treatment: "All-on-4 / All-on-6", use: "Full-arch restoration for patients missing most/all teeth in an arch", from: "From £4,500/arch", guide: "/guides/dental-implants-turkey" },
  { treatment: "Full smile makeover", use: "Combined veneers, whitening and contouring in one plan", from: "From £3,500", guide: "/treatments/full-smile-makeover-turkey" },
];

const stayLengthRows = [
  { treatment: "Veneers / crowns", trips: "1 trip", stay: "5–7 days" },
  { treatment: "Single or multiple implants", trips: "2 trips, ~3–6 months apart", stay: "3–5 days, then 3–4 days" },
  { treatment: "All-on-4 / All-on-6", trips: "2 trips, ~3–6 months apart", stay: "5–7 days, then 3–4 days" },
  { treatment: "Full smile makeover", trips: "1 trip (varies by scope)", stay: "5–7 days" },
];

const faqs = [
  {
    question: "What are Turkey Teeth?",
    answer: "“Turkey teeth” is an informal term for dental treatment carried out in Turkey, most often veneers, zirconia crowns, dental implants, or full-mouth restorations. It has become a broad, sometimes tongue-in-cheek shorthand for any dental tourism work done in Turkey, particularly by UK patients.",
  },
  {
    question: "Is it safe to get teeth done in Turkey?",
    answer: "Safety depends primarily on the individual clinic, not the country. JCI-accredited or Turkish Ministry of Health-certified clinics using recognised material brands and following standard clinical protocols carry broadly comparable risk profiles to equivalent private treatment in the UK. Always verify a clinic's accreditation directly before booking.",
  },
  {
    question: "How much do teeth cost in Turkey?",
    answer: "Individual treatments start from £130 (zirconia crown) and £190 (veneer); implants start from £250. All-inclusive packages start from £2,800. See the full Turkey Teeth Cost Guide for a complete price comparison against UK private dentistry.",
  },
  {
    question: "How long do I need to stay in Turkey for dental treatment?",
    answer: "Veneers and crowns typically need one trip of 5–7 days. Implants and full-arch treatments (All-on-4/All-on-6) typically need two trips a few months apart: an initial visit of 3–7 days, then a shorter follow-up visit of 3–4 days once healing is complete.",
  },
  {
    question: "What happens if something goes wrong after I get home?",
    answer: "Reputable clinics offer a stated guarantee period on their clinical work and provide a way to raise issues remotely or arrange a return visit. Confirm exactly what a clinic's guarantee and aftercare process covers, in writing, before you book.",
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
      reviewedBy: {
        "@type": "Person",
        name: "Dr. Ayşe Kaya",
        jobTitle: "BDS, MSc Aesthetic Dentistry",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Teeth in Turkey", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function TeethInTurkeyPillarGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Teeth in Turkey" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Primary Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Treatments, process, costs, safety, clinic evaluation, recovery and travel — the complete starting point for UK patients researching dental treatment in Turkey.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge reviewedDate="3 September 2026" />

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">Quick Answer: What Are Turkey Teeth?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            &ldquo;Turkey teeth&rdquo; refers to dental treatment carried out in Turkey — most commonly veneers, zirconia crowns, dental implants, or full-mouth restorations — usually sought by UK and other international patients for significantly lower prices than at home. Reputable clinics use internationally recognised materials and implant brands, and treatment is typically combined with a short stay, with all-inclusive packages often covering hotel accommodation and airport transfers.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Dental treatment in Turkey typically costs 65–90% less than equivalent UK private dentistry, according to this site's own published price comparisons.",
              "The most common treatments are veneers, zirconia crowns, dental implants, and full-arch restoration (All-on-4/All-on-6).",
              "Veneers/crowns typically need one trip; implants and full-arch treatment typically need two trips a few months apart.",
              "Clinic accreditation (JCI or Turkish Ministry of Health certification) and the specific material/implant brand used are the two biggest factors in both safety and price.",
              "Always confirm pricing, brand, and what's included with a personalised, itemised quote before booking — headline prices are starting points, not fixed final costs.",
            ]}
          />

          <h2 id="what-it-means" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What &ldquo;Teeth in Turkey&rdquo; Means</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            &ldquo;Teeth in Turkey&rdquo; and the related shorthand &ldquo;Turkey teeth&rdquo; describe the broader practice of UK and other international patients travelling to Turkey for dental treatment — a form of medical/dental tourism. The term covers a range of treatments, from a single crown to a full-mouth implant restoration, rather than one specific procedure. It has entered everyday UK usage partly because of the volume of patients now travelling, and partly, informally, in reference to the distinctive appearance some patients have after certain veneer/crown treatments.
          </p>

          <h2 id="why-uk-patients-travel" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why UK Patients Travel to Turkey for Dentistry</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The primary driver is cost: private dental treatment in the UK — particularly implants, veneers and full-mouth work — is expensive, and NHS dentistry has limited availability for cosmetic and complex restorative work along with long waiting times in many areas. Turkish clinics can offer the same categories of treatment, using internationally recognised materials and brands, at substantially lower prices, largely reflecting lower clinic overheads and labour costs rather than lower clinical standards.
          </p>

          <h2 id="treatments" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatments Available</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The core treatment categories UK patients typically research are veneers, zirconia crowns, dental implants, and full-arch implant restoration (All-on-4/All-on-6) — often combined into a &ldquo;smile makeover&rdquo; package. Each has a different indication, process, and price point.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Use</th>
                  <th className="px-4 py-3 text-right font-semibold">From</th>
                </tr>
              </thead>
              <tbody>
                {treatmentOverviewRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">
                      <Link href={r.guide} className="hover:text-[#1e40af] hover:underline">{r.treatment}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{r.use}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold whitespace-nowrap">{r.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Dental implants</strong> replace a missing tooth root with a titanium post, topped with a crown, bridge, or full-arch prosthesis — see the dedicated{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Implants in Turkey Guide</Link>{" "}
            for the full process. <strong>Veneers</strong> are thin shells bonded to the front of the natural tooth to reshape or reshade it, while <strong>zirconia crowns</strong> cover the entire visible tooth and are the material typically used in &ldquo;Hollywood Smile&rdquo; packages. <strong>All-on-4/All-on-6</strong> restores a full arch of missing or failing teeth using 4 or 6 implants rather than one implant per tooth.
          </p>

          <h2 id="process" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Typical Treatment Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most patients follow the same broad sequence: an initial enquiry with photos of your teeth, a proposed treatment plan and price estimate, travel to Turkey, an in-person consultation and diagnostics (including a CT scan for implant cases), the treatment itself, and — for implant and full-arch cases — a second trip months later for the permanent restoration.
          </p>

          <h2 id="consultation-planning" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Consultation &amp; Treatment Planning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A trustworthy clinic will not confirm a final price or start treatment based on photographs alone. Photos and history support an initial, indicative treatment plan; the confirmed plan and price follow a clinical examination and, where relevant, diagnostic imaging once you arrive. If you want an initial estimate before travelling, request a{" "}
            <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">free treatment plan</Link>{" "}
            or use the{" "}
            <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>.
          </p>
        </div>
      </article>

      <CTASection
        title="Get a Free, No-Obligation Treatment Plan"
        subtitle="Send a few photos of your teeth and we'll come back with an initial plan and price estimate — free, no pressure."
        buttonText="Request My Treatment Plan"
        buttonHref="/free-treatment-plan"
      />

      <article className="pt-4 pb-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-long-to-stay" className="text-2xl font-bold text-gray-900 mt-6 mb-3 scroll-mt-24">How Long Patients Normally Stay</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-left font-semibold">Trips Needed</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Stay</th>
                </tr>
              </thead>
              <tbody>
                {stayLengthRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-gray-600">{r.trips}</td>
                    <td className="px-4 py-3 text-gray-600">{r.stay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full day-by-day breakdown, see{" "}
            <Link href="/travel-to-turkey/how-long-stay-turkey-dental" className="text-[#1e40af] font-semibold hover:underline">How Long for Dental Work in Turkey</Link>.
          </p>

          <h2 id="recovery" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Recovery</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Recovery varies by treatment: veneers and crowns generally involve only mild, short-lived sensitivity. Implant surgery involves a more significant initial recovery over the following days, and then a longer background healing period (osseointegration, typically around 3–6 months) before the implant is considered fully integrated and ready for its permanent restoration. Following your clinic's specific aftercare instructions is the main factor patients can control in how smoothly recovery goes.
          </p>

          <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>How much do teeth cost in Turkey?</strong> Individual treatments start from £130 (zirconia crown), £190 (veneer), and £250 (dental implant). All-inclusive packages — combining treatment, hotel and transfers — start from £2,800.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every treatment on this site is consistently 65–90% cheaper than the equivalent UK private-dentistry price. For the full, itemised breakdown and how package pricing is put together, see the{" "}
            <Link href="/guides/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Cost Guide</Link>.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Turkey vs UK Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond price, the practical trade-off is travel and continuity of care: treatment in the UK means no flights and same-week follow-up with a familiar dentist, while treatment in Turkey means one or two trips abroad and coordinating any post-treatment concerns remotely or on a return visit. Materials and clinical standards at accredited clinics in Turkey are not inherently different from the UK — the meaningful differences are cost, travel logistics, and how a clinic handles aftercare once you're home.
          </p>

          <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Safety</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Safety in dental tourism is determined by the specific clinic and dentist, not by the country as a whole. JCI-accredited or Turkish Ministry of Health-certified clinics that use recognised material brands and follow standard sterilisation and surgical protocols carry a broadly comparable risk profile to equivalent private UK treatment. As with any medical travel decision, verifying a clinic's specific accreditation and the dentist's specific qualifications — rather than relying on marketing claims alone — is the most important safety step.
          </p>

          <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Risks &amp; Complications</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Potential risks mirror those of dental treatment generally — infection, implant integration failure, sensitivity, or an aesthetic outcome that does not match expectations — with the added practical complication that follow-up care requires either remote coordination or a return trip. Choosing an accredited clinic, being transparent about your full medical history, and clarifying the guarantee and aftercare process in advance are the main ways to reduce risk.
          </p>

          <h2 id="evaluating-a-clinic" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">How to Evaluate a Dental Clinic</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before booking, verify: the clinic's accreditation (JCI and/or Turkish Ministry of Health certification), the dentist's individual qualifications, which specific material or implant brand is included in your quote, whether diagnostics (e.g. a CT scan for implants) are included before your final price is confirmed, and what the guarantee and aftercare process covers. See the dedicated{" "}
            <Link href="/turkey-teeth-clinic" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Clinic — How to Choose the Right One</Link>{" "}
            guide for a full checklist.
          </p>

          <h2 id="dentist-qualifications" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Dentist Qualifications</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dentists practising in Turkey hold Turkish Dental Association qualifications broadly equivalent to UK General Dental Council (GDC) registration, and many hold additional international training or postgraduate qualifications. A dentist practising in Turkey is not automatically GDC-registered in the UK — GDC registration applies to dentists practising within the UK. Ask any clinic directly for their dentists' specific qualifications and registration details rather than relying on general claims.
          </p>

          <h2 id="health-tourism-authorisation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Health Tourism Authorisation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Turkey's health tourism sector is overseen at government level by the Turkish Ministry of Health and USHAŞ (Turkey&apos;s state health-tourism company, established to coordinate and authorise international patient care). Health tourism-authorised facilities are expected to meet defined standards for treating international patients. This is a separate authorisation from hospital/clinic accreditation bodies such as JCI. Ask a clinic directly which of these authorisations and accreditations it holds, and verify independently where possible rather than relying on marketing claims alone.
          </p>

          <h2 id="materials-brands" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Materials &amp; Implant Brands</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The material or brand used is one of the biggest factors in both quality expectations and price. Implant brands referenced across this site's treatment and price pages include Osstem (entry-level), Medentika (Straumann Group), Straumann (premium), and Nobel Biocare. Veneer material commonly referenced is Ivoclar E-max porcelain. These are internationally recognised brands also used in UK private practice — the brand, not the country, is what determines material quality and expected longevity. See the{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Implants Guide</Link>{" "}
            for brand-specific detail.
          </p>

          <h2 id="laboratory" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Laboratory Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinics with their own in-house dental laboratory can generally offer faster turnaround, tighter quality control, and same-day adjustments to crowns or veneers, compared with clinics that outsource fabrication to an external lab. This is a meaningful, practical question to ask a clinic directly, alongside accreditation and dentist qualifications.
          </p>

          <h2 id="guarantees-aftercare" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Guarantees &amp; Aftercare</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Several treatment pages on this site reference guarantees of up to 10 years on clinical work, alongside UK-based aftercare coordination for issues that arise once you're home. Guarantee terms vary by clinic and by treatment — always get the specific guarantee period and what it covers in writing before you book, rather than assuming a general figure applies to your exact treatment.
          </p>

          <h2 id="travelling-from-uk" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Travelling from the UK</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most UK patients fly directly to Antalya or Istanbul; flights are booked separately from any treatment package. All-inclusive packages on this site typically bundle hotel accommodation and VIP airport/clinic transfers into the treatment price. See{" "}
            <Link href="/travel-to-turkey" className="text-[#1e40af] font-semibold hover:underline">Travel to Turkey</Link>{" "}
            and{" "}
            <Link href="/travel-to-turkey/dental-holiday-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Holiday Turkey</Link>{" "}
            for practical planning detail.
          </p>

          <h2 id="antalya" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Antalya as a Dental Destination</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antalya is one of Turkey's established dental tourism hubs, combining a large concentration of private dental clinics with direct UK flight connections and a well-developed tourism infrastructure (hotels, transfers, English-speaking support) that suits patients combining treatment with recovery time in a resort setting. Istanbul is the other major destination UK patients consider, generally offering a larger city environment with a wider choice of clinics; see{" "}
            <Link href="/blog/antalya-vs-istanbul-dental-clinics" className="text-[#1e40af] font-semibold hover:underline">Antalya vs Istanbul: Dental Treatment</Link>{" "}
            for a direct comparison of the two.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Teeth in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="next-steps" className="text-2xl font-bold text-gray-900 mt-4 mb-3 scroll-mt-24">Next Steps</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you're ready to move forward: get an initial estimate with the{" "}
          <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>, request a{" "}
          <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">free personalised treatment plan</Link>, or read the two supporting guides in this library — the{" "}
          <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Implants Guide</Link>{" "}
          and the{" "}
          <Link href="/guides/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Cost Guide</Link>{" "}
          — for the next level of detail on the two questions patients ask most.
        </p>

        <SourcesList
          sources={[
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "NHS — Dental implants", href: "https://www.nhs.uk/conditions/dental-implants/" },
            { label: "General Dental Council (GDC)", href: "https://www.gdc-uk.org/" },
            { label: "Joint Commission International (JCI)", href: "https://www.jointcommissioninternational.org/" },
            { label: "T.C. Sağlık Bakanlığı — Turkish Ministry of Health", href: "https://www.saglik.gov.tr/" },
            { label: "USHAŞ — Turkey Health Tourism Authority", href: "https://ushas.gov.tr/" },
            { label: "FDI World Dental Federation", href: "https://www.fdiworlddental.org/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            { title: "Dental Implants in Turkey: Complete Guide", desc: "Brands, procedure, timelines, and implant-specific costs.", href: "/guides/dental-implants-turkey" },
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Full UK vs Turkey cost comparison and finance options.", href: "/guides/turkey-teeth-cost" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Treatments"
          links={[
            { title: "Veneers Turkey", desc: "Porcelain/E-max veneers from £190/tooth.", href: "/treatments/veneers-turkey" },
            { title: "Dental Implants Turkey", desc: "Implants from £250, JCI-accredited clinics.", href: "/treatments/dental-implants-turkey" },
            { title: "All-on-4 Turkey", desc: "Full arch restoration on 4 implants from £4,500.", href: "/treatments/all-on-4-turkey" },
            { title: "Full Smile Makeover", desc: "Combined veneers, whitening and contouring from £3,500.", href: "/treatments/full-smile-makeover-turkey" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Blog Articles"
          links={[
            { title: "Is It Safe to Get Teeth Done in Turkey?", desc: "Accreditation, risk factors and how to choose safely.", href: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
            { title: "Turkey Teeth Explained", desc: "What the term actually means, in more detail.", href: "/blog/turkey-teeth-explained" },
            { title: "Risks of Turkey Teeth", desc: "An honest look at what can go wrong and how to protect yourself.", href: "/blog/risks-of-turkey-teeth" },
            { title: "Best Dental Clinics in Turkey", desc: "How to find and verify a quality clinic.", href: "/blog/best-dental-clinics-turkey" },
          ]}
        />
      </div>

      <CTASection
        title="Ready to Start Your Turkey Teeth Journey?"
        subtitle="Get a free, personalised treatment plan with an accurate cost estimate — no obligation, and we'll keep the details you've already told us."
        buttonText="Get My Personalised Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
