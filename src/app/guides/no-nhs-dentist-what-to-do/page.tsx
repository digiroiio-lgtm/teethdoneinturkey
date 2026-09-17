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
const PAGE_URL = `${SITE_URL}/guides/no-nhs-dentist-what-to-do`;
const TITLE = "Can't Find an NHS Dentist? What to Do in 2026";
const H1 = "Can't Find an NHS Dentist? Your Step-by-Step Options";
const DESCRIPTION =
  "No NHS dentist accepting patients near you? NHS 111 dental access, emergency services, dental schools and realistic alternatives for UK patients in 2026.";
const DATE_PUBLISHED = "2026-09-17";
const DATE_MODIFIED = "2026-09-17";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/no-nhs-dentist-what-to-do" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "scale-of-problem", label: "How Bad Is the Access Problem?" },
  { id: "find-nhs-dentist", label: "How to Find an NHS Dentist" },
  { id: "nhs-111", label: "NHS 111: Urgent Dental Advice" },
  { id: "emergency-dental", label: "NHS Emergency Dental Services" },
  { id: "community-dental", label: "Community Dental Services" },
  { id: "dental-schools", label: "University Dental Schools" },
  { id: "dental-charities", label: "Dental Charities" },
  { id: "while-you-wait", label: "What to Do While You Wait" },
  { id: "private-stopgap", label: "Private Dentist as a Stopgap" },
  { id: "uk-vs-turkey", label: "Larger Treatment: UK vs Turkey" },
  { id: "faqs", label: "FAQs" },
];

const nhsVsPrivateRows = [
  { treatment: "Examination", nhs: "£27.90 (Band 1)", private: "£50–£80", turkey: "Included in package" },
  { treatment: "Tooth extraction", nhs: "£76.60 (Band 2)", private: "£150–£300", turkey: "£90–£120" },
  { treatment: "Root canal + crown", nhs: "£306.80 (Band 3)", private: "£1,300–£2,500", turkey: "£330–£580" },
  { treatment: "Single implant", nhs: "Not available (routine)", private: "£2,000–£3,000", turkey: "£250–£600" },
  { treatment: "All-on-4 (per arch)", nhs: "Not available", private: "£12,000–£18,000", turkey: "£4,500–£5,500" },
];

const faqs = [
  {
    question: "Can I see any NHS dentist as an emergency even if I'm not registered?",
    answer:
      "Yes — if you have an urgent dental problem, call NHS 111 (dial 111). They can refer you to an NHS urgent dental treatment centre that accepts unregistered patients. You pay the standard NHS band charge (£27.90, £76.60 or £306.80 from April 2026) for whatever treatment is needed — the same as if you were registered.",
  },
  {
    question: "How do I find an NHS dentist accepting new patients?",
    answer:
      "Go to nhs.uk and use the 'Find a dentist' tool. Search by postcode and filter by 'accepting new adult patients'. Because acceptance status changes frequently, it is worth checking regularly and calling practices directly — not all update the NHS tool promptly.",
  },
  {
    question: "Can dental schools do NHS treatment, or is it still private?",
    answer:
      "Dental schools charge their own reduced fees rather than standard NHS band charges, so the cost sits between NHS and private. However, fees are significantly lower than typical private practice rates. Treatment is carried out by qualified dental students under close supervision from experienced dentists.",
  },
  {
    question: "Will NHS 111 prescribe antibiotics for tooth pain?",
    answer:
      "NHS 111 can refer you to a clinician who may prescribe antibiotics where a dental infection is suspected. However, antibiotics treat the infection; they do not fix the underlying tooth problem. A dental appointment is still needed to resolve the cause.",
  },
  {
    question: "What treatments are not available on the NHS?",
    answer:
      "Dental veneers, teeth whitening, and routine tooth replacement with implants are not available on the NHS. Implants are only provided in narrow clinical circumstances (for example, following tooth loss from cancer treatment or a serious accident). Cosmetic work of any kind is outside NHS scope.",
  },
  {
    question: "Is going to Turkey worth it just for a filling?",
    answer:
      "Unlikely for a single filling alone — once you factor in flights and hotel, the saving on one filling does not cover the travel cost. The Turkey saving becomes significant for treatments that cost £1,000 or more in the UK: implants, crowns, veneers and full-mouth work are where the arithmetic changes.",
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
        { "@type": "ListItem", position: 3, name: "Can't Find an NHS Dentist?", item: PAGE_URL },
      ],
    },
  ],
};

export default function NoNHSDentistPage() {
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
                { label: "Can't Find an NHS Dentist?" },
              ]}
            />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            NHS dental access has shrunk significantly. Here is what to do if you cannot get onto an NHS list — from calling NHS 111 today to lower-cost alternatives for bigger cases.
          </p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mt-6 mb-2 scroll-mt-24">
            Quick Answer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            If you cannot find an NHS dentist, call <strong>NHS 111</strong> (dial 111) — they provide free urgent dental advice 24 hours a day and can refer you to an NHS emergency dental service at no upfront cost. For non-emergency treatment, search <strong>NHS.uk</strong> for practices accepting new patients, try your local{" "}
            <strong>Community Dental Service</strong>, or contact a{" "}
            <strong>university dental school</strong> for reduced-cost supervised care.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "NHS 111 (dial 111) can refer you to an NHS emergency dental service free of charge, even if you are not registered anywhere.",
              "NHS Community Dental Services (CDS) cover patients who cannot access mainstream NHS dentistry — referral is via your GP or NHS 111.",
              "University dental schools charge reduced fees and are supervised by qualified dentists — a genuine lower-cost option for non-urgent work.",
              "NHS band charges are fixed at £27.90, £76.60 or £306.80 (England, from April 2026) — the same whether you are registered or seen as an emergency.",
              "Veneers, whitening and routine implants are not NHS treatments. For those, private UK treatment or treatment abroad are the realistic options.",
            ]}
          />

          <h2 id="scale-of-problem" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            How Bad Is the NHS Dental Access Problem?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHS dental access in England contracted sharply during the pandemic and has not recovered. NHS England data shows patient activity remained significantly below pre-pandemic levels into 2025, with a substantial backlog of unmet treatment need. The British Dental Association has reported that millions of UK adults cannot access NHS dental care within a reasonable time of needing it — and that the situation varies heavily by region, with parts of rural England, the Midlands and the North particularly poorly served.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The result for individuals is that &ldquo;I cannot get an NHS dentist&rdquo; has become a routine starting point for millions of people needing dental care — not a fringe scenario. The options below cover what is genuinely available, not what should theoretically exist.
          </p>

          <h2 id="find-nhs-dentist" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            How to Find an NHS Dentist Accepting New Patients
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The NHS.uk &ldquo;Find a dentist&rdquo; tool lets you search by postcode and filter for practices accepting new adult patients. Because acceptance status changes frequently, check it regularly — a practice that was full last month may have capacity this month. It is also worth calling practices directly, since not all update the NHS system promptly when they have new patient slots.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some practices distinguish between adding you to their full list and seeing you for a single urgent or one-off appointment. It is worth asking specifically: even if a practice cannot register you, they may be willing to see you once for an acute problem.
          </p>

          <h2 id="nhs-111" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS 111: The Right First Call for Urgent Problems
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any urgent dental problem — toothache that is stopping you sleeping, a suspected infection, a lost filling, a broken tooth causing pain — NHS 111 (dial 111) is the right first step. NHS 111 is free to call from any phone, available 24 hours a day, 7 days a week.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A call handler will take your symptoms and connect you with a dental clinical advisor or refer you directly to an NHS urgent dental treatment centre in your area. They can also, where clinically appropriate, arrange for antibiotics to be prescribed remotely — useful if you have an active dental infection and cannot get to a dentist immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Importantly, NHS 111 can access you in the system as an unregistered patient. You do not need to be registered with a practice to use this route. If your condition is serious — facial swelling, fever, difficulty swallowing or breathing — NHS 111 will direct you to A&amp;E instead.
          </p>

          <h2 id="emergency-dental" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS Emergency Dental Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHS urgent dental treatment centres operate in most areas and accept unregistered patients. Access is via NHS 111 referral — you call 111, they assess your situation, and they book you into an urgent appointment at a centre near you. You pay the standard NHS band charge for whatever treatment is provided: £27.90 (Band 1), £76.60 (Band 2, includes extractions and fillings) or £306.80 (Band 3, includes crowns and other restorations), from April 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Urgent dental centres prioritise pain relief and infection control. They will not typically carry out cosmetic or elective treatment.
          </p>

          <h2 id="community-dental" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            NHS Community Dental Services (CDS)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHS Community Dental Services provide dental care to people who cannot access mainstream NHS practices. This includes people with complex medical needs, severe dental anxiety (dental phobia), physical or cognitive disabilities, and some homeless or vulnerable patients. Referral is usually through your GP, your local community mental health team or NHS 111.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            CDS is not a general substitute for a standard NHS practice for routine care, but if your difficulty accessing dental treatment is connected to a health condition or vulnerability, it may be the appropriate route to investigate. Your local council or NHS Integrated Care Board website will list CDS contacts for your area.
          </p>

          <h2 id="dental-schools" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            University Dental Schools: Reduced-Cost Supervised Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK dental teaching hospitals treat patients at fees significantly lower than private practice. Treatment is carried out by dental students in the later years of their clinical training, under direct supervision from qualified and experienced dentists. The supervision model means every step of the work is checked — results are generally of a high standard.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Appointments take longer than in a private practice (students work methodically and must present each stage to their supervisor), and waiting times for a first appointment vary by school. Not all schools offer every treatment, and cosmetic work is less available. To find your nearest dental school, search for &ldquo;UK dental school patient treatment&rdquo; or contact your local dental teaching hospital directly. Major ones include King&apos;s College London, Guy&apos;s Hospital, Leeds, Bristol, Birmingham and Manchester.
          </p>

          <h2 id="dental-charities" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Dental Charities and Community Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dentaid is a UK dental charity that runs free treatment clinics in areas of greatest need, staffed by volunteer dentists. Their clinics are aimed at people in genuine financial hardship who have no other route to care. Check dentaid.org for current clinic locations and eligibility.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some local councils and NHS Integrated Care Boards also run community dental health initiatives. Local Healthwatch organisations can often point you to what is available in your area.
          </p>

          <h2 id="while-you-wait" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What to Do While You Wait
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are on a waiting list or searching for NHS access and your dental problem is not immediately urgent:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Keep up oral hygiene to prevent problems worsening.</li>
            <li>Over-the-counter dental cement (sold in pharmacies under brands including Dentemp and Recapit) can temporarily protect a broken tooth or lost filling — it is not a permanent repair.</li>
            <li>For pain, ibuprofen (if safe for you) is more effective than paracetamol alone for dental pain and is appropriate for most adults.</li>
            <li>If you develop facial swelling, a fever, or difficulty swallowing or breathing at any point, call NHS 111 immediately or go to A&amp;E — these are signs of a spreading infection and are a medical emergency.</li>
          </ul>

          <h2 id="private-stopgap" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Private Dentist as a Stopgap
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your problem cannot wait for NHS access and you have some ability to pay, a private appointment may be your most realistic immediate option. For treatments that the NHS covers, typical UK private fees are:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Examination: £50–£80</li>
            <li>Filling: £80–£200 per tooth</li>
            <li>Extraction: £150–£300</li>
            <li>Root canal: £500–£1,500 depending on the tooth</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some private practices offer interest-free monthly payment plans, which can help spread the cost of a single appointment. For NHS-eligible treatments, private fees cover the same clinical work at a higher cost — not a different quality of material.
          </p>

          <h2 id="uk-vs-turkey" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Larger Treatment: UK vs Turkey Costs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For treatments that the NHS does not cover — implants, veneers, and most cosmetic work — and for cases that are too expensive in private UK practice, treatment abroad is worth comparing seriously. Partner clinics in Turkey use the same implant and veneer brands as UK practices (Straumann, Nobel Biocare, Ivoclar E-max) at significantly lower cost, even once flights and hotel are included:
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
                {nhsVsPrivateRows.map((r, i) => (
                  <tr key={r.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.treatment}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{r.nhs}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.private}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            For treatment abroad to make financial sense, the saving on the treatment needs to exceed the travel cost (typically £200–£400 in flights and £100–£200 in hotel for a 5-day trip). For anything over £1,000 in UK private fees — root canal plus crown, a single implant, or any cosmetic case — the arithmetic usually supports the comparison. For a single filling, it does not.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Read the{" "}
            <Link href="/guides/teeth-in-turkey" className="text-[#1e40af] font-semibold hover:underline">
              Complete Teeth in Turkey Guide
            </Link>{" "}
            for how to evaluate a clinic and what the patient journey looks like before making any decisions.
          </p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="NHS Access: Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            {
              label: "NHS: Find a dentist",
              href: "https://www.nhs.uk/service-search/find-a-dentist",
            },
            {
              label: "NHS: Dental costs and charges",
              href: "https://www.nhs.uk/nhs-services/dentists/dental-costs/how-much-will-i-pay-for-nhs-dental-treatment/",
            },
            {
              label: "NHSBSA: NHS dental charges from 1 April 2026",
              href: "https://www.nhsbsa.nhs.uk/sites/default/files/2026-03/NHS%20England%20dental%20charges%20poster%20-%20April%202026.pdf",
            },
            {
              label: "NHS 111: urgent dental help",
              href: "https://111.nhs.uk/",
            },
          ]}
        />

        <RelatedLinksGrid
          title="Related Guides"
          links={[
            {
              title: "Can't Afford Dental Treatment UK?",
              desc: "NHS charges, private costs, payment plans and treatment abroad — in decision order.",
              href: "/guides/cant-afford-dental-treatment-uk",
            },
            {
              title: "Can't Afford a Root Canal?",
              desc: "NHS root canal vs private vs Turkey: costs, extraction comparison and payment plans.",
              href: "/guides/cant-afford-root-canal-uk",
            },
            {
              title: "Severe Toothache and Can't Afford a Dentist",
              desc: "What to do right now if you have severe tooth pain and cannot get an appointment.",
              href: "/guides/severe-toothache-cant-afford-dentist",
            },
            {
              title: "Dental Finance Options UK",
              desc: "How 0% dental finance works, eligibility, and what to do with a bad credit history.",
              href: "/finance-options-uk",
            },
            {
              title: "Turkey Teeth Cost",
              desc: "Full UK-vs-Turkey price guide across all treatments, from veneers to full-arch implants.",
              href: "/prices/turkey-teeth-cost",
            },
          ]}
        />
      </div>

      <CTASection
        title="Get a Free, Personalised Treatment Plan"
        subtitle="Tell us what you need. We'll send a free itemised cost and monthly payment breakdown within 24 hours — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
