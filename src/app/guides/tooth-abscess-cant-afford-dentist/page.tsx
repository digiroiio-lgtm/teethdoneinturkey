import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/guides/tooth-abscess-cant-afford-dentist`;
const TITLE = "Tooth Abscess Can't Afford a Dentist? Act Now";
const H1 = "Tooth Abscess and Can't Afford a Dentist? Act Now — Here's How";
const DESCRIPTION =
  "A tooth abscess is a dental emergency. What to do if you have an abscess and can't afford a dentist: NHS 111 steps, emergency access, and urgent care guidance.";
const DATE_PUBLISHED = "2026-09-17";
const DATE_MODIFIED = "2026-09-17";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/tooth-abscess-cant-afford-dentist" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "emergency-warning", label: "Emergency Warning Signs" },
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is-abscess", label: "What a Tooth Abscess Is" },
  { id: "red-flags", label: "Red Flags: Call 999 or Go to A&E" },
  { id: "nhs-111", label: "Call NHS 111 First" },
  { id: "nhs-emergency", label: "NHS Emergency Dental Treatment" },
  { id: "antibiotics", label: "What Antibiotics Do (and Don't Do)" },
  { id: "temporary-measures", label: "Temporary Measures While Waiting" },
  { id: "finding-care", label: "Finding Emergency Dental Care" },
  { id: "after-emergency", label: "After the Emergency: Treating the Tooth" },
  { id: "uk-vs-turkey", label: "UK vs Turkey for Follow-Up Treatment" },
  { id: "faqs", label: "FAQs" },
];

const followUpRows = [
  { treatment: "Emergency dental appointment (NHS 111 referral)", nhsUk: "Free to access", ukPrivate: "£80–£250", turkey: "Varies" },
  { treatment: "Abscess drainage + extraction", nhsUk: "£76.60 (Band 2)", ukPrivate: "£150–£400", turkey: "£90–£180" },
  { treatment: "Root canal + crown (to save the tooth)", nhsUk: "£306.80 (Band 3)", ukPrivate: "£1,300–£2,500", turkey: "£330–£580" },
  { treatment: "Single implant (if extraction)", nhsUk: "Not available (routine)", ukPrivate: "£2,000–£3,000", turkey: "£250–£600" },
];

const faqs = [
  {
    question: "Will antibiotics get rid of my tooth abscess without going to the dentist?",
    answer:
      "Antibiotics can reduce the spread of infection temporarily, but they do not drain the abscess or treat the underlying tooth problem. Once the antibiotics finish, the infection returns. Dental treatment — root canal to save the tooth or extraction — is the only way to resolve an abscess. Antibiotics buy time; they are not a cure.",
  },
  {
    question: "Can I go to A&E with a tooth abscess?",
    answer:
      "Yes, particularly if you have facial swelling, a high fever, difficulty swallowing, or difficulty breathing. A&E can manage the infection medically — intravenous antibiotics, incision and drainage of spreading infection, and airway monitoring — but cannot do the dental work. After A&E treatment, the tooth still needs root canal or extraction.",
  },
  {
    question: "Is a tooth abscess an emergency if it doesn't hurt much?",
    answer:
      "Yes. An abscess that has stopped hurting can mean the nerve inside the tooth has died, not that the problem is resolved. The bacterial infection remains and can still spread into surrounding bone and soft tissue. A painless abscess still requires urgent dental treatment.",
  },
  {
    question: "How much does emergency dental treatment cost in the UK?",
    answer:
      "Emergency dental treatment accessed via NHS 111 referral is free to access. Private emergency appointments typically cost £80–£250 for the initial consultation; any treatment provided — extraction, drainage, antibiotics — is charged additionally. NHS Band 2 covers extraction (£76.60); NHS Band 3 covers root canal and crown (£306.80), both from April 2026 in England.",
  },
  {
    question: "What happens to the tooth after the abscess is treated?",
    answer:
      "The abscess treatment — drainage, antibiotics — is emergency management. The tooth itself then needs definitive treatment: root canal (to save the tooth by removing the infected pulp and sealing the root) or extraction. If the tooth is extracted and the gap matters functionally or cosmetically, options for replacement are an implant, bridge or partial denture. Leaving a gap long term allows adjacent teeth to drift and bone to resorb.",
  },
  {
    question: "Can I go to any NHS dentist as an emergency even if I'm not registered?",
    answer:
      "You cannot simply walk into any NHS dentist without a referral for emergency care. The recommended route is to call NHS 111 (dial 111) — they can refer you to an NHS emergency dental service in your area. Some NHS practices also have emergency slots for non-registered patients; it is worth calling local practices first. Outside office hours, NHS 111 is the primary route.",
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Tooth Abscess Can't Afford a Dentist?", item: PAGE_URL },
      ],
    },
  ],
};

export default function ToothAbscessCantAffordDentistPage() {
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
                { label: "Tooth Abscess Can't Afford a Dentist?" },
              ]}
            />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A tooth abscess is an infection that will not go away on its own. Here is exactly what to do when you cannot access or afford a dentist — starting with NHS 111.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Emergency warning box — must appear before all other content */}
          <div id="emergency-warning" className="rounded-2xl bg-red-50 border-2 border-red-400 p-5 mb-8 scroll-mt-24" role="alert" aria-live="assertive">
            <div className="flex items-start gap-3">
              <div className="text-red-500 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-extrabold text-red-700 uppercase tracking-wide mb-2">
                  Seek Emergency Care Immediately If You Have:
                </h2>
                <ul className="space-y-1 text-red-800 text-sm font-medium">
                  <li>• Facial or jaw swelling</li>
                  <li>• High fever (above 38°C / 100.4°F)</li>
                  <li>• Difficulty swallowing or opening your mouth</li>
                  <li>• Difficulty breathing</li>
                  <li>• Swelling spreading into your neck or below the jawline</li>
                </ul>
                <p className="mt-3 text-red-900 font-bold text-sm">
                  Call 999 or go to your nearest A&amp;E immediately — do not wait for a dental appointment.
                </p>
              </div>
            </div>
          </div>

          <MedicalReviewBadge reviewedDate="September 2026" />

          <p className="text-xs text-gray-500 italic mb-6">
            This page provides general information only and is not a substitute for dental or medical advice. If you are in pain or have symptoms of spreading infection, contact NHS 111 or seek emergency care.
          </p>

          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">
            Quick Answer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Call <strong>NHS 111 (dial 111)</strong> — they can refer you to an NHS emergency dental service free of charge, 24 hours a day. If you have <strong>facial swelling, a high fever, or difficulty swallowing or breathing</strong>, go to A&amp;E or call 999 immediately. A dental abscess is a bacterial infection that will not resolve without treatment and can become serious if left.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "A tooth abscess is a bacterial infection — it will not resolve on its own and requires dental treatment. If left, it can spread into surrounding bone and tissue.",
              "Call NHS 111 (dial 111) immediately if you cannot access a dentist — they can refer you to an NHS emergency dental service at no upfront cost.",
              "Go to A&E (or call 999) if you have facial swelling, fever, difficulty swallowing or breathing — these are signs the infection is spreading and can become life-threatening.",
              "Antibiotics treat the infection temporarily but not the underlying tooth problem; they buy time, not a cure.",
              "After emergency treatment, the tooth usually needs root canal or extraction — 0% APR finance from around £10/month is available for follow-up work in Turkey.",
            ]}
          />

          <h2 id="what-is-abscess" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What a Tooth Abscess Is
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A dental abscess is a collection of pus caused by a bacterial infection. It can form at the tip of the tooth root (periapical abscess, usually from deep decay or a cracked tooth), between the tooth and gum (periodontal abscess), or in the gum tissue itself. The common cause is bacteria entering the pulp — the living tissue inside the tooth — through untreated decay, a cracked tooth, or a failed previous filling.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Symptoms often include severe, persistent throbbing pain, sensitivity to pressure, swelling around the affected tooth, and sometimes a bad taste if the abscess drains spontaneously into the mouth. The pain can spread to the jaw, ear or neck.
          </p>

          <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Red Flags: When to Call 999 or Go to A&E
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most tooth abscesses are managed by a dentist. A small number become medically serious when the infection spreads beyond the tooth into surrounding tissue. Go to A&E or call 999 if you notice:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Facial or jaw swelling</strong> that is expanding or making your face look asymmetrical</li>
            <li><strong>Fever above 38°C (100.4°F)</strong></li>
            <li><strong>Difficulty swallowing</strong> or a feeling that your throat is closing</li>
            <li><strong>Difficulty breathing</strong> or shortness of breath</li>
            <li><strong>Swelling spreading into the neck</strong> or below the jawline</li>
            <li><strong>Feeling very unwell</strong> — confusion, rapid heartbeat, or cold sweats alongside dental pain</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            These are signs of a spreading infection (cellulitis or Ludwig&apos;s angina) that can compromise the airway. A&E can provide intravenous antibiotics and surgical drainage if required — a dentist cannot safely manage this.
          </p>

          <h2 id="nhs-111" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Call NHS 111 First
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NHS 111</strong> (dial 111, or use 111.nhs.uk) is available 24 hours a day, 7 days a week. A dental nurse or health adviser can assess your symptoms over the phone and, if appropriate, refer you to an NHS emergency dental service in your area. This referral gives you access to NHS emergency dental treatment at NHS Band rates — free for those on qualifying benefits, or Band 2 (£76.60) for extraction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Do not rely solely on internet advice for a suspected abscess. Call NHS 111 and describe your symptoms accurately — particularly any swelling, fever or difficulty swallowing — so they can triage you correctly.
          </p>

          <h2 id="nhs-emergency" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS Emergency Dental Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHS emergency dental services exist specifically to treat patients who are in acute pain or have a dental emergency and are not registered with an NHS practice. Access is typically via NHS 111 referral. Emergency dental treatment at an NHS walk-in centre or urgent dental care centre covers:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700 mb-4">
            <li>Examination and diagnosis (Band 1: £27.90)</li>
            <li>Extraction of the offending tooth (Band 2: £76.60)</li>
            <li>Draining a swelling</li>
            <li>Emergency prescription of antibiotics</li>
            <li>Temporary dressings or stabilisation</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emergency treatment stabilises the situation but does not complete the treatment. Root canal, permanent crown, or implant — if needed — is arranged as a follow-up appointment.
          </p>

          <h2 id="antibiotics" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What Antibiotics Do (and Don&apos;t Do)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antibiotics (typically amoxicillin or metronidazole for dental infections) reduce the bacterial load and can reduce swelling and systemic symptoms such as fever. They are appropriate when there are signs of spreading infection or when a patient cannot be seen by a dentist immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            They do not drain the abscess, remove the source of infection (the dead or infected pulp), or treat the tooth. Once the antibiotic course ends, the bacteria that remain in the tooth will reinfect. The abscess will return, often worse, because the bacteria in a biofilm inside the tooth are not fully accessible to antibiotics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Use antibiotics as a bridge to get dental treatment, not as a substitute for it.
          </p>

          <h2 id="temporary-measures" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Temporary Measures While Waiting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While waiting for dental treatment — not instead of it:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Ibuprofen</strong> (if safe for you and not contraindicated) — reduces both pain and inflammation; more effective than paracetamol alone for dental pain. Take both together if neither is contraindicated.</li>
            <li><strong>Paracetamol</strong> — pain relief; can be alternated with ibuprofen.</li>
            <li><strong>Cold compress</strong> on the jaw — reduces external swelling temporarily.</li>
            <li><strong>Warm salt water rinse</strong> — may help if the abscess is draining; do not attempt to burst or squeeze the swelling yourself.</li>
            <li><strong>Sleep with your head elevated</strong> — reduces blood pressure to the area and may reduce throbbing pain.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm italic text-gray-500">
            None of these measures treat the abscess. If your symptoms are worsening — especially swelling, fever or difficulty swallowing — seek emergency care immediately, do not rely on pain relief.
          </p>

          <h2 id="finding-care" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Finding Emergency Dental Care If You Cannot Access NHS
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If NHS 111 cannot refer you in a reasonable timeframe and you are in significant pain or have an abscess:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Private emergency appointment</strong> — many private practices offer same-day emergency slots. Expect to pay £80–£250 for the appointment; treatment is additional. Ask upfront what the emergency fee covers before attending.</li>
            <li><strong>Dental school emergency clinics</strong> — UK dental schools (e.g., Bart&apos;s, King&apos;s, Bristol) offer emergency dental care, often same-day or next-day, at reduced rates. Students are qualified and supervised.</li>
            <li><strong>NHS Community Dental Services</strong> — provide care for patients who cannot access a standard NHS practice. Contact your local council or NHS trust to find the service in your area.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a full guide to accessing an NHS dentist when you are not registered anywhere, see the{" "}
            <Link href="/guides/no-nhs-dentist-what-to-do" className="text-[#1e40af] font-semibold hover:underline">
              No NHS Dentist guide
            </Link>.
          </p>

          <h2 id="after-emergency" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            After the Emergency: Treating the Underlying Tooth
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Emergency treatment drains the abscess and treats the acute infection. The tooth still needs definitive treatment:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Root canal</strong> — removes the infected pulp, cleans and seals the root canals. Saves the tooth. Usually requires a crown afterwards on back teeth. NHS Band 3 (£306.80) covers root canal plus crown in England.
            </li>
            <li>
              <strong>Extraction</strong> — removes the tooth entirely. NHS Band 2 (£76.60). Cheaper short-term but leaves a gap that can affect neighbouring teeth over time.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a detailed comparison of root canal vs extraction including the long-term costs of leaving a gap, see the{" "}
            <Link href="/guides/cant-afford-root-canal-uk" className="text-[#1e40af] font-semibold hover:underline">
              Can&apos;t Afford a Root Canal guide
            </Link>.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            UK vs Turkey for Follow-Up Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once the acute infection is under control and the tooth is stable, follow-up work — root canal and crown, or implant after extraction — is where the cost difference between UK private and Turkey becomes most significant.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">NHS (England)</th>
                  <th className="px-4 py-3 text-right font-semibold">UK Private</th>
                  <th className="px-4 py-3 text-right font-semibold">Turkey</th>
                </tr>
              </thead>
              <tbody>
                {followUpRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.nhsUk}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.ukPrivate}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            NHS charges from April 2026 (England). NHS emergency via NHS 111 is free to access; treatment charges apply unless exempt. Turkey prices are for treatment at partner clinics; flights and hotel are additional (typically £300–£600 for a 3–5 day trip). For follow-up treatment totalling £500 or more, 0% representative APR finance is available over 12 or 24 months, subject to eligibility; 36-month plans carry interest.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Tooth Abscess: Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            {
              label: "NHS: Dental abscess",
              href: "https://www.nhs.uk/conditions/dental-abscess/",
            },
            {
              label: "NHS 111 — get medical help",
              href: "https://111.nhs.uk/",
            },
            {
              label: "NHS: NHS dental charges from 1 April 2026",
              href: "https://www.nhsbsa.nhs.uk/",
            },
            {
              label: "NHS: What to do if you have toothache",
              href: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/",
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
              title: "Can't Afford a Root Canal UK?",
              desc: "NHS Band 2, private costs, extraction comparison and Turkey savings explained.",
              href: "/guides/cant-afford-root-canal-uk",
            },
            {
              title: "Severe Toothache Can't Afford a Dentist?",
              desc: "What causes severe tooth pain, what to do now, and NHS 111 options.",
              href: "/guides/severe-toothache-cant-afford-dentist",
            },
            {
              title: "Can't Find an NHS Dentist?",
              desc: "NHS 111, emergency services and alternatives when you can't get registered.",
              href: "/guides/no-nhs-dentist-what-to-do",
            },
            {
              title: "Dental Finance Options UK",
              desc: "0% APR plans, soft credit checks and eligibility for dental finance.",
              href: "/finance-options-uk",
            },
          ]}
        />
      </div>

      <CTASection
        title="Get a Free Treatment Plan with Monthly Breakdown"
        subtitle="Once your emergency is stable, request a free personalised quote for follow-up treatment — root canal, crown or implant — with an itemised cost and monthly payment figure."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
