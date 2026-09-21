import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { REVIEWER_PERSON } from "@/lib/reviewer";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/severe-toothache-cant-afford-dentist`;
const TITLE = "Severe Toothache Can't Afford a Dentist? Your Options";
const H1 = "Severe Toothache and Can't Afford a Dentist? What to Do";
const DESCRIPTION =
  "Severe toothache and can't afford a dentist? NHS 111 guidance, emergency dental access, temporary relief steps, causes of severe tooth pain and what it costs.";
const DATE_PUBLISHED = "2026-09-17";
const DATE_MODIFIED = "2026-09-17";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/severe-toothache-cant-afford-dentist" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "when-emergency", label: "When Is Severe Toothache an Emergency?" },
  { id: "causes", label: "Common Causes of Severe Tooth Pain" },
  { id: "nhs-111", label: "What to Do Now: NHS 111" },
  { id: "temporary-relief", label: "Temporary Pain Relief" },
  { id: "nhs-emergency", label: "NHS Emergency Dental Services" },
  { id: "finding-nhs", label: "Finding an NHS Dentist Accepting Patients" },
  { id: "private-cost", label: "Private Emergency Dentist: Costs" },
  { id: "treating-cause", label: "Treating the Underlying Cause" },
  { id: "uk-vs-turkey", label: "UK vs Turkey Cost Comparison" },
  { id: "faqs", label: "FAQs" },
];

const costRows = [
  { cause: "Pulpitis (nerve inflammation from decay or crack)", treatment: "Root canal + crown", nhs: "£306.80 (Band 3)", ukPrivate: "£1,300–£2,500", turkey: "£330–£580" },
  { cause: "Dental abscess", treatment: "Emergency drainage + root canal or extraction", nhs: "Free (NHS 111) + Band 2/3", ukPrivate: "£80–£350 emergency + treatment", turkey: "Varies" },
  { cause: "Cracked tooth", treatment: "Crown or extraction", nhs: "£306.80 (Band 3)", ukPrivate: "£800–£1,500", turkey: "£130–£280" },
  { cause: "Broken or lost filling (exposed nerve)", treatment: "Replacement filling", nhs: "£76.60 (Band 2)", ukPrivate: "£80–£200", turkey: "£60–£120" },
];

const faqs = [
  {
    question: "Will severe toothache go away on its own?",
    answer:
      "Unlikely. The pain may reduce if the nerve inside the tooth dies — but that is not a sign the problem has resolved. A dead nerve means the infection continues silently; the tooth can still develop an abscess and the infection can still spread. Temporary reduction in pain is not a sign treatment is no longer needed.",
  },
  {
    question: "Can I use clove oil for tooth pain?",
    answer:
      "Clove oil contains eugenol, a natural compound with mild anaesthetic and antibacterial properties. Applying a small amount directly to the affected tooth or gum with a cotton bud can reduce discomfort temporarily. It is not a treatment for the underlying cause — decay, pulpitis, cracked tooth or abscess — and should not replace dental assessment. Do not apply undiluted clove oil to gum tissue in quantity, as it can cause chemical irritation.",
  },
  {
    question: "Is severe toothache a dental emergency?",
    answer:
      "It depends on the accompanying symptoms. Severe tooth pain with facial swelling, fever above 38°C, difficulty swallowing, or difficulty breathing is a medical emergency — call 999 or go to A&E. Severe tooth pain without these signs is an urgent dental problem that needs attention within 24 to 48 hours; call NHS 111 for same-day guidance and referral.",
  },
  {
    question: "How much does it cost to see an emergency dentist privately in the UK?",
    answer:
      "Private emergency dental appointments typically cost £80–£250 for the initial consultation. Any treatment provided — extraction, temporary filling, prescription — is charged on top. Always ask the practice what the emergency fee covers before attending. NHS emergency appointments accessed via NHS 111 referral are charged at standard NHS Band rates (Band 1: £27.90; Band 2: £76.60 for extraction), or free for those on qualifying benefits.",
  },
  {
    question: "What causes sudden severe toothache?",
    answer:
      "The most common causes are: irreversible pulpitis (nerve inflammation from deep decay or a crack — the nerve is dying, causing intense pain that does not settle), a dental abscess (bacterial infection causing throbbing, persistent pain and sometimes swelling), a cracked or fractured tooth (sharp pain on biting that releases), or a lost filling exposing the sensitive dentine or nerve. A dentist needs to diagnose the specific cause — the treatment and urgency differ significantly by cause.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Article", "MedicalWebPage"],
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
      reviewedBy: REVIEWER_PERSON,
      lastReviewed: "2026-09-17",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Severe Toothache Can't Afford a Dentist?", item: PAGE_URL },
      ],
    },
  ],
};

export default function SevereToothacheCantAffordDentistPage() {
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
                { label: "Severe Toothache Can't Afford a Dentist?" },
              ]}
            />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            NHS 111 can refer you to emergency dental care at no upfront cost. Here is what to do right now, what is likely causing the pain, and what your options are.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <MedicalReviewBadge reviewedDate="September 2026" />

          <p className="text-xs text-gray-500 italic mb-6">
            This page provides general information only and is not a substitute for dental or medical advice. If you have facial swelling, a fever, or difficulty swallowing alongside tooth pain, seek emergency care or call 999.
          </p>

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">
            Quick Answer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Call <strong>NHS 111 (dial 111)</strong> — they provide dental advice 24/7 and can refer you to an NHS emergency dentist at no upfront cost. For temporary relief while waiting: ibuprofen (if safe for you), clove oil applied to the tooth, and a cold compress on the jaw. These reduce pain; they do not treat the cause. If you also have facial swelling, a fever, or difficulty swallowing, go to A&amp;E — do not wait for a dental appointment.
          </p>

          {/* Emergency callout — secondary (primary quick answer is above) */}
          <div className="rounded-2xl bg-amber-50 border border-amber-300 p-4 mb-8" role="alert">
            <p className="text-amber-900 font-semibold text-sm">
              <strong>If you have facial swelling, fever above 38°C, difficulty swallowing or breathing:</strong> call 999 or go to A&amp;E immediately. These can be signs of a spreading dental abscess that requires emergency medical care — do not wait for a dentist.
            </p>
          </div>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Severe toothache usually means the nerve inside the tooth is inflamed or dying — temporary pain relief helps, but dental treatment is needed to stop the problem progressing.",
              "Call NHS 111 (dial 111) for urgent dental advice; they can refer you to an NHS emergency dental service at no upfront cost, 24 hours a day.",
              "If you have facial swelling, fever or difficulty swallowing alongside toothache, go to A&E — these can be signs of an abscess spreading into soft tissue.",
              "Temporary measures (clove oil, ibuprofen, cold compress) reduce discomfort. They are not a treatment and do not prevent the problem getting worse.",
              "The most common causes — pulpitis, abscess, cracked tooth — all require professional diagnosis. Waiting makes them worse and more expensive to treat.",
            ]}
          />

          <h2 id="when-emergency" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            When Is Severe Toothache a Medical Emergency?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toothache alone — even severe toothache — is an urgent dental problem rather than a medical emergency in most cases. However, these symptoms alongside tooth pain require emergency care immediately:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Facial or jaw swelling</strong> that is expanding</li>
            <li><strong>Fever above 38°C / 100.4°F</strong></li>
            <li><strong>Difficulty swallowing</strong> or a feeling of throat tightness</li>
            <li><strong>Difficulty breathing</strong></li>
            <li><strong>Swelling spreading into the neck</strong></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            These are signs of a dental abscess that has spread beyond the tooth — a medical emergency requiring A&amp;E attendance or a 999 call. For more detail, see the{" "}
            <Link href="/guides/tooth-abscess-cant-afford-dentist" className="text-[#1e40af] font-semibold hover:underline">
              tooth abscess guide
            </Link>.
          </p>

          <h2 id="causes" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Common Causes of Severe Tooth Pain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Severe, persistent toothache is almost always caused by one of these:
          </p>
          <dl className="space-y-4 mb-6">
            <div>
              <dt className="font-semibold text-gray-900">Irreversible pulpitis</dt>
              <dd className="text-gray-700 mt-1">Inflammation of the pulp (the living tissue inside the tooth) caused by deep decay, a crack, or trauma. The nerve is dying. Pain is usually severe, spontaneous, and lingers after the trigger (hot, cold, biting) is removed. Requires root canal or extraction.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Dental abscess</dt>
              <dd className="text-gray-700 mt-1">A bacterial infection creating a pocket of pus at or around the root tip. Pain is typically severe and throbbing, often constant, and may be accompanied by swelling or a bad taste. Requires drainage and root canal or extraction.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Cracked or fractured tooth</dt>
              <dd className="text-gray-700 mt-1">A crack in the tooth structure — from biting something hard, old fillings under stress, or grinding — can expose the nerve. Pain is often a sharp stab on biting that immediately releases. May require a crown or extraction depending on the extent.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Lost or broken filling with exposed nerve</dt>
              <dd className="text-gray-700 mt-1">Exposed dentine or nerve is acutely sensitive to temperature, sweet food, and air. Can escalate to pulpitis if left. Requires a new filling at minimum.</dd>
            </div>
          </dl>

          <h2 id="nhs-111" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What to Do Right Now: NHS 111
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Call NHS 111 (dial 111)</strong> or use <strong>111.nhs.uk</strong>. The service is available 24 hours a day, 7 days a week. NHS 111 can:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li>Provide immediate telephone dental advice from a dental nurse or clinician</li>
            <li>Triage your symptoms to establish urgency</li>
            <li>Refer you to an NHS urgent dental care centre (UDCC) or emergency dental service in your area</li>
            <li>In some cases, arrange emergency prescriptions for antibiotics if an infection is suspected</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            You do not need to be registered with a dentist to access NHS 111 dental services. The referral to an emergency dental appointment is free to access; NHS band charges apply for treatment (Band 1 £27.90, Band 2 £76.60, Band 3 £306.80, from April 2026 in England), unless you are exempt.
          </p>

          <h2 id="temporary-relief" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Temporary Pain Relief (What Works, What Doesn&apos;t)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Use these to manage discomfort while waiting for dental treatment — not instead of it:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Ibuprofen + paracetamol combined</strong> — most effective over-the-counter option for dental pain. Take both if neither is contraindicated for you; they work via different pathways. Do not exceed stated doses.</li>
            <li><strong>Clove oil (eugenol)</strong> — apply a small amount to the affected tooth with a cotton bud. Provides mild topical anaesthetic relief. Not suitable for large quantities on gum tissue.</li>
            <li><strong>Cold compress on the outside of the cheek</strong> — reduces swelling and numbs the area. Apply for 15–20 minutes at a time.</li>
            <li><strong>Avoid temperature extremes and sweet foods</strong> — these trigger pain in most dental causes and inflame already-irritated nerve tissue.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm italic text-gray-500">
            If pain relief is not adequately controlling symptoms, or if symptoms are worsening, call NHS 111 and seek care sooner rather than later.
          </p>

          <h2 id="nhs-emergency" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS Emergency Dental Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHS Urgent Dental Care Centres (UDCCs) provide same-day or next-day treatment for patients in acute dental pain, including those not registered with a practice. Access is via NHS 111 referral. They can perform:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li>Examination and diagnosis</li>
            <li>Extractions of teeth causing acute pain</li>
            <li>Opening a tooth to relieve pressure from a dying pulp</li>
            <li>Temporary dressings and fillings</li>
            <li>Antibiotics for spreading infection</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emergency treatment is stabilising, not final. Root canal, permanent crown, or replacement if the tooth is extracted are arranged as follow-up.
          </p>

          <h2 id="finding-nhs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Finding an NHS Dentist Accepting New Patients
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For non-emergency NHS treatment once the acute pain is resolved, you will want to register with an NHS practice. Options:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>NHS.uk — Find a Dentist</strong> — search for practices accepting new adult patients in your postcode</li>
            <li><strong>Community Dental Services (CDS)</strong> — NHS dental services for patients who cannot access a standard practice; ask your GP or local council how to refer</li>
            <li><strong>University dental schools</strong> — treat patients at reduced cost under supervised qualified dentists</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            See the full guide:{" "}
            <Link href="/guides/no-nhs-dentist-what-to-do" className="text-[#1e40af] font-semibold hover:underline">
              Can&apos;t Find an NHS Dentist — step-by-step options
            </Link>.
          </p>

          <h2 id="private-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Private Emergency Dentist: What It Costs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you cannot access NHS care and need to see a dentist today, a private emergency appointment typically costs:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li><strong>Emergency consultation fee:</strong> £80–£250 (examination + X-ray)</li>
            <li><strong>Extraction:</strong> £150–£300 on top</li>
            <li><strong>Temporary dressing or filling:</strong> £80–£200 on top</li>
            <li><strong>Root canal (front tooth):</strong> £500–£700 + crown £800–£1,000</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Always confirm what the emergency fee covers before attending — some practices include a simple extraction in the emergency charge; others do not.
          </p>

          <h2 id="treating-cause" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Treating the Underlying Cause
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cause determines the treatment. In most cases of severe toothache:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Pulpitis / dying nerve:</strong> Root canal saves the tooth. Without it, the tooth progresses to abscess and eventual extraction.</li>
            <li><strong>Abscess:</strong> Emergency drainage, then root canal (to save the tooth) or extraction. See{" "}
              <Link href="/guides/tooth-abscess-cant-afford-dentist" className="text-[#1e40af] font-semibold hover:underline">
                tooth abscess guide
              </Link> for full guidance.
            </li>
            <li><strong>Cracked tooth:</strong> Crown if the crack has not reached the root. Extraction if the crack goes below the gum line.</li>
            <li><strong>Lost filling:</strong> New filling. If decay beneath has reached the nerve, root canal is needed first.</li>
          </ul>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            UK vs Turkey Cost Comparison
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the treatments most commonly needed after severe toothache:
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Cause</th>
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">NHS</th>
                  <th className="px-4 py-3 text-right font-semibold">UK Private</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r, i) => (
                  <tr key={r.cause} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.cause}</td>
                    <td className="px-4 py-3 text-gray-700">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.nhs}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.ukPrivate}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            NHS charges from April 2026 (England). Turkey prices are at partner clinics; flights and hotel are additional (typically £300–£600 for a 3–5 day trip). 0% representative APR finance from around £10/month over 36 months is available for treatment booked through this site, subject to eligibility.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Severe Toothache: Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            {
              label: "NHS: Toothache",
              href: "https://www.nhs.uk/conditions/toothache/",
            },
            {
              label: "NHS 111 — get medical help",
              href: "https://111.nhs.uk/",
            },
            {
              label: "NHS: Dental abscess",
              href: "https://www.nhs.uk/conditions/dental-abscess/",
            },
            {
              label: "NHSBSA: NHS dental charges from 1 April 2026",
              href: "https://www.nhsbsa.nhs.uk/",
            },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            {
              title: "Tooth Abscess Can't Afford a Dentist?",
              desc: "If you have swelling or a fever alongside tooth pain, read this first.",
              href: "/guides/tooth-abscess-cant-afford-dentist",
            },
            {
              title: "Can't Afford Dental Treatment UK?",
              desc: "All your options in decision order — NHS, finance, payment plans and abroad.",
              href: "/guides/cant-afford-dental-treatment-uk",
            },
            {
              title: "Can't Afford a Root Canal UK?",
              desc: "NHS Band 2 costs, extraction comparison and Turkey cost comparison.",
              href: "/guides/cant-afford-root-canal-uk",
            },
            {
              title: "Can't Find an NHS Dentist?",
              desc: "NHS 111, Community Dental Services and alternatives.",
              href: "/guides/no-nhs-dentist-what-to-do",
            },
            {
              title: "Dental Finance Options UK",
              desc: "0% APR plans, soft credit checks and eligibility explained.",
              href: "/finance-options-uk",
            },
          ]}
        />
      </div>

      <CTASection
        title="Get a Free Treatment Plan with Monthly Breakdown"
        subtitle="Once your pain is under control, request a free personalised quote — root canal, crown or implant — with an itemised cost and monthly payment figure."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
