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
const PAGE_URL = `${SITE_URL}/guides/dental-implants-turkey`;
const TITLE = "Dental Implants Turkey: Complete UK Patient Guide 2026";
const H1 = "Dental Implants in Turkey: Complete Guide for UK Patients";
const DESCRIPTION =
  "How dental implants in Turkey work for UK patients: brands, the procedure, healing timelines, All-on-4/All-on-6, costs, risks, and how to choose a clinic. Medically reviewed.";
const DATE_PUBLISHED = "2026-09-03";
const DATE_MODIFIED = "2026-09-03";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/dental-implants-turkey" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "what-are-implants", label: "What Are Dental Implants?" },
  { id: "who-is-suitable", label: "Who May Be Suitable" },
  { id: "consultation", label: "Consultation & Diagnostics" },
  { id: "procedure", label: "The Implant Procedure" },
  { id: "brands", label: "Implant Brands Used in Turkey" },
  { id: "bone-graft-sinus-lift", label: "Bone Grafting & Sinus Lifts" },
  { id: "single-vs-multiple", label: "Single vs Multiple Implants" },
  { id: "full-mouth", label: "Full-Mouth Implants: All-on-4 / All-on-6" },
  { id: "healing", label: "Healing & Osseointegration" },
  { id: "timeline-trips", label: "Timeline & Number of Trips" },
  { id: "costs", label: "Cost of Implants in Turkey" },
  { id: "uk-vs-turkey", label: "Turkey vs UK Considerations" },
  { id: "risks", label: "Potential Risks" },
  { id: "longevity", label: "Implant Longevity & Aftercare" },
  { id: "questions-to-ask", label: "Questions to Ask a Clinic" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much do dental implants cost in Turkey?",
    answer: "On Teeth Done in Turkey's price pages, a single Osstem implant with crown starts from £250, versus £2,000–£3,000 for an equivalent implant and crown in the UK. Premium implant brands (such as Straumann) and multi-implant treatments such as All-on-4 (from £4,500 per arch) or All-on-6 (from £5,600 per arch) cost more — see the Turkey Teeth Cost Guide for a full breakdown.",
  },
  {
    question: "Are dental implants in Turkey safe?",
    answer: "Implant treatment carries the same clinical risks anywhere in the world. Choosing a JCI-accredited or Turkish Ministry of Health-certified clinic that uses recognised implant brands (such as Straumann, Nobel Biocare, or Osstem) and follows standard surgical and infection-control protocols is the main safeguard, whether the treatment takes place in Turkey or the UK.",
  },
  {
    question: "How many trips to Turkey do dental implants require?",
    answer: "Most implant treatment plans require two trips: an initial visit for implant placement and a temporary restoration (typically 3–5 days), followed by a second visit around 3–6 months later, once osseointegration is complete, for the permanent crown or bridge (typically 3–4 days). Some straightforward single-implant cases can occasionally be shortened; your treatment plan will confirm this.",
  },
  {
    question: "How long do dental implants in Turkey last?",
    answer: "Implant longevity depends mainly on the implant brand, the patient's bone health and oral hygiene, and follow-up care — not on the country where the surgery took place. Recognised implant brands used in Turkey (Straumann, Nobel Biocare, Osstem, Medentika) are the same brands placed in UK clinics and are backed by the same manufacturer warranties.",
  },
  {
    question: "What is the difference between All-on-4 and All-on-6?",
    answer: "All-on-4 replaces a full arch of teeth on 4 implants, while All-on-6 uses 6 implants for the same arch. All-on-6 generally offers greater load distribution and stability, which can suit patients with higher bite forces or reduced bone density, but it is not automatically the better option for every patient — your consultation and diagnostics (including a CT scan) will determine which is appropriate.",
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
      about: { "@type": "MedicalProcedure", name: "Dental Implant" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Dental Implants in Turkey", item: PAGE_URL },
      ],
    },
  ],
};

const implantPriceRows = [
  { item: "Single Osstem implant + crown", turkey: "From £250", uk: "£2,000–£3,000" },
  { item: "Single premium implant + crown (e.g. Straumann)", turkey: "From ~£800", uk: "£3,000–£4,500" },
  { item: "All-on-4 (per arch, all-inclusive)", turkey: "From £4,500", uk: "£15,000+" },
  { item: "All-on-6 (per arch, all-inclusive)", turkey: "From £5,600", uk: "£15,000–£22,000" },
];

export default function DentalImplantsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Dental Implants in Turkey" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Brands, the procedure, timelines, full-mouth options, cost, and how to choose a clinic — everything a UK patient needs before booking implant treatment in Turkey.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge reviewedDate="3 September 2026" />

          <p className="text-lg text-gray-700 leading-relaxed mb-2">
            Dental implants in Turkey are one of the most common reasons UK patients travel abroad for dental care. This guide explains, step by step, what implant treatment actually involves, which brands and materials Turkish clinics typically use, realistic timelines, and how to evaluate whether a clinic is a safe, appropriate choice.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "A single implant with a crown starts from £250 in Turkey vs £2,000–£3,000 in the UK, for an equivalent implant and crown.",
              "Full-mouth options (All-on-4 from £4,500/arch, All-on-6 from £5,600/arch) replace an entire arch of teeth on 4 or 6 implants.",
              "Most implant treatment plans need two separate trips to Turkey, roughly 3–6 months apart, to allow the implant to fuse with the jawbone (osseointegration) before the permanent crown is fitted.",
              "Recognised international implant brands (Straumann, Nobel Biocare, Osstem, Medentika) are used by JCI-accredited or Ministry of Health-certified clinics in Turkey — the same brands placed in UK clinics.",
              "Ask any clinic directly about the specific implant brand, the dentist's qualifications, and what is included in the quoted price before booking.",
            ]}
          />

          <h2 id="what-are-implants" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What Are Dental Implants?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A dental implant is a titanium (or titanium-zirconium) post that is surgically placed into the jawbone to act as an artificial tooth root. Once it has fused with the bone, a crown, bridge, or full-arch prosthesis is attached on top, replacing one or more missing teeth. Dental implants in Turkey follow the same clinical principles used in UK and European dentistry — the treatment is the same procedure, performed with the same categories of materials, regardless of the country.
          </p>

          <h2 id="who-is-suitable" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Who May Be Suitable for Implants?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Suitability for implants depends on factors such as jawbone density and volume, gum health, general medical history, and lifestyle factors like smoking, which can affect healing. Patients with insufficient bone volume are not automatically excluded — bone grafting or a sinus lift can often build up the site first (see below). A proper diagnosis requires a clinical examination and imaging; suitability cannot be confirmed from photographs alone.
          </p>

          <h2 id="consultation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Consultation &amp; Diagnostics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A proper implant treatment plan starts with a consultation — typically supported by photographs, dental history, and, once you arrive at the clinic, a 3D CT scan (Cone Beam CT) to assess bone volume and plan implant positioning precisely. Reputable clinics will confirm your treatment plan and price only after reviewing this diagnostic information, not from photos alone.
          </p>
          <Link href="/free-treatment-plan" className="text-[#1e40af] font-semibold hover:underline">→ Request a free treatment plan</Link>

          <h2 id="procedure" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">The Implant Procedure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implant placement is carried out under local anaesthetic (sometimes with sedation for more extensive treatment). The implant post is placed into the jawbone through a small incision in the gum. For single or few-tooth cases, a temporary restoration may be fitted the same day or shortly after; for full-arch cases, a temporary fixed arch is typically fitted within days of surgery so patients do not leave without teeth.
          </p>

          <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Brands Used in Turkey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implant brand affects both price and long-term expectations. Across this site&apos;s pricing pages, the brands referenced include Osstem (Korean-manufactured, widely used as an accessible entry-level option), Medentika (part of the Straumann Group), and Straumann (a premium Swiss brand). Nobel Biocare is also referenced on treatment pages as a brand used by partner clinics. Always confirm in writing which specific brand is included in your quoted price — this is one of the biggest cost drivers.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey (from)</th>
                  <th className="px-4 py-3 text-right font-semibold">UK (typical)</th>
                </tr>
              </thead>
              <tbody>
                {implantPriceRows.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.item}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{r.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Figures shown are drawn from this site&apos;s published price pages as of {DATE_MODIFIED}. Exact pricing depends on brand, quantity, and individual clinical needs — see the <Link href="/guides/turkey-teeth-cost" className="text-[#1e40af] hover:underline">Turkey Teeth Cost Guide</Link> for the full comparison and how pricing is put together.
          </p>

          <h2 id="bone-graft-sinus-lift" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Bone Grafting &amp; Sinus Lifts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where bone volume in the jaw is insufficient to support an implant, a bone graft can rebuild the site, and — for implants in the upper back jaw close to the sinus cavity — a sinus lift raises the sinus floor to create room for the implant. Both are established, additional procedures rather than routine parts of every implant case, and are typically identified during diagnostics rather than assumed in advance.
          </p>

          <h2 id="single-vs-multiple" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Single vs Multiple Implants</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A single missing tooth typically needs one implant and one crown. Multiple missing teeth in a row can sometimes be restored with fewer implants than teeth, using an implant-supported bridge — reducing both cost and surgical sites compared with an individual implant per missing tooth. Your treatment plan will specify exactly how many implants are recommended and why.
          </p>

          <h2 id="full-mouth" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Full-Mouth Implants: All-on-4 / All-on-6</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For patients missing most or all of their teeth in an arch, All-on-4 and All-on-6 use 4 or 6 strategically placed implants to support a full fixed arch of replacement teeth, rather than one implant per missing tooth. All-on-4 is priced from £4,500 per arch and All-on-6 from £5,600 per arch on this site&apos;s treatment pages, both quoted all-inclusive of hotel accommodation and VIP transfers. All-on-6 generally distributes bite force across more implants, which can benefit patients with higher bite forces or lower bone density — but the right option depends on your own diagnostics.
          </p>
          <RelatedLinksGrid
            title="Related Treatment Pages"
            links={[
              { title: "All-on-4 Turkey", desc: "Full arch restoration on 4 implants, from £4,500 per arch.", href: "/treatments/all-on-4-turkey" },
              { title: "All-on-6 Turkey", desc: "Full arch restoration on 6 implants, from £5,600 all-inclusive.", href: "/treatments/all-on-6-turkey" },
            ]}
          />

          <h2 id="healing" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Healing &amp; Osseointegration</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After placement, an implant needs time to fuse with the surrounding jawbone in a process called osseointegration, generally taking around 3–6 months, though this varies by patient and by jaw (the lower jaw typically heals faster than the upper jaw). The permanent crown, bridge, or full-arch prosthesis is only fitted once osseointegration is confirmed — fitting it too early risks implant failure.
          </p>

          <h2 id="timeline-trips" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Timeline &amp; Number of Trips</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most implant patients travel to Turkey twice: once for implant placement and a temporary restoration (typically a 3–5 day trip), and again roughly 3–6 months later for the permanent restoration (typically a 3–4 day trip) once healing is complete. This two-trip structure applies to single implants, multiple implants, and full-arch cases alike, though exact day counts vary by clinic and case complexity.
          </p>

          <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Cost of Implants in Turkey</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>How much do dental implants cost in Turkey?</strong> A single implant with a crown starts from £250 in Turkey using an entry-level brand such as Osstem, rising to roughly £800+ for premium brands such as Straumann — compared with £2,000–£4,500 for an equivalent single implant and crown in the UK.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Full-mouth treatments are priced per arch rather than per implant: All-on-4 from £4,500 and All-on-6 from £5,600, both all-inclusive of hotel and transfers on this site&apos;s treatment pages. For a complete breakdown of what drives the final price — including diagnostics, bone grafting, temporary vs permanent restorations, and finance options — see the full <Link href="/guides/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Cost Guide</Link>.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Turkey vs UK Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The primary difference UK patients weigh up is cost versus convenience: Turkish clinics can offer significantly lower prices for equivalent implant brands and materials, largely reflecting lower clinic overheads and labour costs rather than lower-quality treatment — but treatment requires travel, two separate trips spaced months apart, and aftercare coordination if issues arise once you are back home. Discuss aftercare and revision policy with any clinic before booking.
          </p>

          <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Potential Risks</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As with any implant surgery performed anywhere, potential risks include infection, implant failure to integrate with the bone, nerve or sinus complications depending on implant position, and the general risks of dental surgery and travel. Choosing an accredited clinic, disclosing your full medical history, and following post-operative instructions carefully are the main ways patients reduce these risks, wherever the treatment takes place.
          </p>

          <h2 id="longevity" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Implant Longevity &amp; Aftercare</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With good oral hygiene and regular dental check-ups, implants are designed to be a long-term, often lifetime, tooth-replacement solution — this depends on the individual patient and is not something any clinic can guarantee as a fixed figure. Several treatment pages on this site reference guarantees of up to 10 years on clinical work; always ask a clinic directly what their guarantee specifically covers and how a remote or return-visit issue would be handled before you commit.
          </p>

          <h2 id="questions-to-ask" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Questions to Ask a Clinic</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>Which specific implant brand is included in this price, and is that stated in writing?</li>
            <li>Is a CT scan included in the diagnostic process before treatment is confirmed?</li>
            <li>Is the clinic JCI-accredited or certified by the Turkish Ministry of Health?</li>
            <li>What does the guarantee cover, and for how long?</li>
            <li>What happens if I have a problem after I return to the UK?</li>
            <li>Exactly what is included in the quoted price — hotel, transfers, temporary teeth, follow-up visits?</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a wider framework on evaluating a clinic beyond implants specifically, see{" "}
            <Link href="/turkey-teeth-clinic" className="text-[#1e40af] font-semibold hover:underline">Turkey Teeth Clinic — How to Choose the Right One</Link>.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Dental Implants in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS — Dental implants", href: "https://www.nhs.uk/conditions/dental-implants/" },
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "General Dental Council (GDC)", href: "https://www.gdc-uk.org/" },
            { label: "Joint Commission International (JCI)", href: "https://www.jointcommissioninternational.org/" },
            { label: "T.C. Sağlık Bakanlığı — Turkish Ministry of Health", href: "https://www.saglik.gov.tr/" },
            { label: "USHAŞ — Turkey Health Tourism Authority", href: "https://ushas.gov.tr/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            { title: "Teeth in Turkey: The Complete UK Patient Guide", desc: "The primary guide covering every treatment, cost and safety topic.", href: "/guides/teeth-in-turkey" },
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Full UK vs Turkey cost comparison and finance options.", href: "/guides/turkey-teeth-cost" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Blog Articles"
          links={[
            { title: "Dental Implants Cost: UK vs Turkey", desc: "Detailed cost comparison with brand-by-brand pricing.", href: "/blog/implants-cost-uk-vs-turkey" },
            { title: "Same-Day Dental Implants in Turkey", desc: "How same-day implants work and who is suitable.", href: "/blog/same-day-dental-implants-turkey" },
            { title: "Dental Implant Recovery Time", desc: "A full recovery timeline from surgery to final crown.", href: "/blog/dental-implant-recovery-time" },
            { title: "Signs of Dental Implant Failure", desc: "Symptoms, causes and what to do if something feels wrong.", href: "/blog/signs-of-dental-implant-failure" },
          ]}
        />
      </div>

      <CTASection
        title="Get Your Personalised Implant Treatment Plan"
        subtitle="Send your dental photos and we'll confirm which implant option suits you, with an accurate, itemised cost estimate — free, no obligation."
        buttonText="Get My Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
