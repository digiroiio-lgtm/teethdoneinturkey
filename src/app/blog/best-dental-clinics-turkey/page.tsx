import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FAQSection from "@/components/FAQSection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/blog/best-dental-clinics-turkey`;
const TITLE = "Best Dental Clinics in Turkey: How to Verify One";
const DESCRIPTION =
  "How to identify the best dental clinics in Turkey: the three registrations to check, the questions to ask, and the red flags that rule a clinic out.";
const DATE_PUBLISHED = "2024-10-01";
const DATE_MODIFIED = "2026-09-08";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/best-dental-clinics-turkey" },
  // Absolute (no "| Teeth Done in Turkey" suffix): with the suffix this runs to
  // 71 characters and truncates in the SERP.
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// Deliberately no ranked list of named clinics. We have no auditable dataset
// that would justify calling one Turkish clinic "the best", and publishing a
// fabricated league table would be the exact behaviour this page warns readers
// about. What we can do honestly — and what the long conversational queries
// hitting this URL actually ask for — is give the verification method.
const qualityMarkers = [
  { title: "Health-tourism authorisation", desc: "Since 2017 Turkish clinics treating international patients must hold a Ministry of Health (Sağlık Bakanlığı) health-tourism authorisation. This is a legal requirement, not a marketing badge. Ask for the certificate number." },
  { title: "JCI accreditation", desc: "Joint Commission International accreditation is voluntary, expensive and independently inspected. It is a strong positive signal — but it is held by relatively few dental-only clinics, so its absence alone does not rule a clinic out." },
  { title: "Named, registered dentists", desc: "The dentist who will treat you should be named in writing before you book, with a Turkish Dental Association (Türk Diş Hekimleri Birliği) registration you can check. \"A member of our team\" is not an answer." },
  { title: "Premium materials, named", desc: "Straumann, Nobel Biocare, Astra Tech or Osstem for implants; Ivoclar E-max or Vita ceramics for veneers. A clinic that will not put the brand in writing is quoting on something it has not committed to." },
  { title: "In-house laboratory", desc: "An on-site lab means the ceramist can see your face, adjustments happen in hours rather than days, and your 5-day trip does not slip. Ask whether the lab is in the building or subcontracted." },
  { title: "CBCT and digital workflow", desc: "A cone-beam CT scanner on site is essential for implant planning. 3Shape or equivalent digital impressions and Digital Smile Design indicate a clinic investing in its own outcomes." },
  { title: "Written guarantee", desc: "Five to ten years, issued in writing, stating what is covered and what you must do to keep it valid. A verbal guarantee is worth nothing once you are back in the UK." },
  { title: "English-speaking coordinator", desc: "A full-time coordinator, contactable on WhatsApp, who is still contactable after you fly home. Communication breakdown is the single most common complaint in poor outcomes." },
];

const verificationSteps = [
  {
    title: "Check the health-tourism authorisation",
    detail: "Ask the clinic directly for its Ministry of Health health-tourism authorisation number and the legal entity name it is registered under. A compliant clinic will send it without hesitation. If the reply is vague, or the registered entity turns out to be a travel agency rather than a dental clinic, stop there.",
  },
  {
    title: "Verify the dentist, not just the clinic",
    detail: "Get the treating dentist's full name and registration in writing. Then search that name independently — not through links the clinic supplies. You are checking that the person exists, is a dentist, and works where the clinic says.",
  },
  {
    title: "Read the reviews the way a sceptic would",
    detail: "Volume matters less than specificity. Useful reviews name the dentist, name the treatment, and describe a timeline. A cluster of short five-star reviews posted in the same week is a warning, not a recommendation. Look hardest at the three-star reviews — they are usually the honest ones.",
  },
  {
    title: "Ask for unretouched cases like yours",
    detail: "Request before-and-after photographs of patients with a starting point similar to yours, taken with the same lighting and camera angle. Heavily retouched, inconsistently lit galleries are the norm in this industry and tell you nothing about clinical skill.",
  },
  {
    title: "Get the quote itemised before you commit",
    detail: "A real quote lists the number of units, the material and brand, what happens if you need a root canal or extraction first, and what is excluded. A single headline figure with no breakdown is a deposit trap — the additions appear once you are in the chair.",
  },
  {
    title: "Confirm the aftercare route in writing",
    detail: "Ask what happens if a crown debonds in month four. Who do you contact, who pays for the return flight, and will the clinic liaise with a UK dentist? A clinic that has answered this question many times will answer it quickly.",
  },
];

const questionsToAsk = [
  { q: "Which implant or ceramic brand will you use, and will you put it on the treatment plan?", good: "A specific brand name and a written plan. Vagueness here almost always means the brand will be substituted." },
  { q: "Are these veneers or crowns?", good: "An honest clinic will tell you plainly. Most \"turkey teeth\" packages are zirconia crowns, which remove substantially more tooth structure than a veneer and cannot be undone." },
  { q: "How much of my natural tooth will be removed?", good: "A dentist who has seen your X-rays should be able to answer per tooth. \"Just a thin layer\" applied to every tooth in the mouth is a scripted answer, not a clinical one." },
  { q: "Who is the treating dentist and what is their registration?", good: "A name and a number. Clinics that rotate patients between whoever is free will avoid this question." },
  { q: "What is the guarantee, in writing, and what voids it?", good: "A document, not a sentence in a WhatsApp message. Ask specifically whether it survives you seeing a UK dentist." },
  { q: "What happens if I need extra treatment once I arrive?", good: "A price list for the common additions — extractions, root canals, bone grafts — agreed before you fly." },
];

const redFlags = [
  "Prices far below the Turkish market rate with no explanation — the saving is coming from somewhere, usually the lab work or the material",
  "Refusal or inability to name the implant or veneer brand in writing",
  "No itemised treatment plan before a deposit is requested",
  "Pressure tactics: \"this price is only valid today\", or a deposit demanded during the first call",
  "The dentist is never named, or changes between your quote and your arrival",
  "Every treatment plan is a full set of 20 crowns regardless of what the patient came in for",
  "Reviews that are numerous but generic, short, and clustered in time",
  "No answer, or an evasive answer, on what happens if something fails after you return to the UK",
];

const cities = [
  {
    city: "Istanbul",
    forWhom: "Complex implant work, full-arch cases, revision work",
    detail: "The deepest concentration of specialist clinics in Turkey, the widest choice of maxillofacial and prosthodontic specialists, and direct flights from most UK airports. Prices sit slightly above Antalya. If your case involves All-on-4, All-on-6, bone grafting or fixing previous work, this is where the specialists are.",
  },
  {
    city: "Antalya",
    forWhom: "Veneers, crowns, straightforward smile makeovers",
    detail: "Resort-oriented, with clinics geared around the treatment-plus-recovery trip. Package prices are typically a little lower and hotels are usually included and walkable from the clinic. Fewer specialists in complex surgical cases, so it suits cosmetic work more than reconstruction.",
  },
  {
    city: "Izmir",
    forWhom: "Patients wanting a quieter alternative",
    detail: "A smaller but established dental-tourism market with a similar price profile to Antalya. Fewer UK flight routes, so factor in a connection. Worth considering if the clinic you have verified happens to be there, but rarely worth choosing the city first.",
  },
];

const faqs = [
  {
    question: "Which is the best dental clinic in Turkey?",
    answer: "There is no single best clinic, and any site that gives you a ranked list is almost certainly ranking by commission rather than by outcome. Turkey has thousands of dental clinics and no independent body publishes comparable outcome data for them. What you can do is verify a specific clinic: confirm its Ministry of Health health-tourism authorisation, get the treating dentist named and registered in writing, confirm the implant or ceramic brand on the treatment plan, and get the guarantee and aftercare route documented before you pay a deposit. A clinic that clears all four is a safe choice; the phrase \"the best\" is marketing.",
  },
  {
    question: "Are dental clinics in Istanbul better than in Antalya?",
    answer: "For complex work, generally yes — Istanbul has the deepest concentration of implant and prosthodontic specialists in Turkey, plus the most direct UK flight routes. For veneers, crowns and standard smile makeovers the clinical difference is negligible and Antalya often prices slightly lower with hotel included. Choose the clinic on its credentials first and the city second, not the other way round.",
  },
  {
    question: "How do I check a Turkish dental clinic is legitimate?",
    answer: "Ask for three things in writing: the clinic's Ministry of Health health-tourism authorisation number and registered legal entity, the treating dentist's full name and Turkish Dental Association registration, and an itemised treatment plan naming the implant or ceramic brand. Then verify the dentist's name through your own search rather than links the clinic sends you. A legitimate clinic supplies all three within a day; hesitation on any of them is the answer.",
  },
  {
    question: "Who should I choose for full-arch restoration such as All-on-4 or All-on-6?",
    answer: "Full-arch work is surgery, not cosmetic dentistry, so the selection criteria change. Prioritise a clinic with an on-site CBCT scanner, a named implantologist rather than a general dentist, a stated implant brand (Straumann, Nobel Biocare, Astra Tech or Osstem), and a written two-stage plan covering both the placement trip and the return trip for the permanent bridge. Istanbul has the largest pool of clinics meeting that bar. Be sceptical of any full-arch quote that does not separate the temporary prosthesis from the permanent one.",
  },
  {
    question: "Can I have a consultation in the UK before travelling to Turkey?",
    answer: "Yes. Most established Turkish clinics working with UK patients run a remote consultation first — you send photographs and any recent X-rays or a panoramic scan, and receive a provisional treatment plan and quote before committing to anything. Some also work with UK-based coordinators who handle the pre-treatment assessment and aftercare liaison. Treat the remote plan as provisional: it is confirmed or revised after a clinical examination and CBCT scan on your first day in Turkey, and a clinic that refuses to revise it after seeing you in person is one to avoid.",
  },
  {
    question: "Does JCI accreditation mean a clinic is safe?",
    answer: "JCI accreditation is a genuine, independently inspected quality signal and a clinic that holds it has invested seriously in its protocols. But it is voluntary and expensive, so relatively few dental-only clinics hold it — most JCI-accredited organisations in Turkey are hospitals. Its absence does not make a clinic unsafe. Ministry of Health health-tourism authorisation is the requirement that actually applies to every clinic legally treating international patients, so check that first.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function BestClinicsBlogPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-best-dental-clinics-turkey"
        path="/blog/best-dental-clinics-turkey"
        headline={TITLE}
        description={DESCRIPTION}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Best Dental Clinics in Turkey", path: "/blog/best-dental-clinics-turkey" },
        ]}
      />
      <script
        id="faq-schema-best-dental-clinics-turkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Clinics</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Best Dental Clinics in Turkey: How to Verify One</h1>
          <p className="text-gray-500 text-sm">Published October 2024 · Updated September 2026 · 9 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5">
            <p className="mb-0">
              <strong>The short answer:</strong> no independent body publishes comparable outcome data for Turkish dental clinics, so
              nobody — including us — can honestly hand you a ranked list of the best ones. What separates a safe clinic from a
              risky one is verifiable in about twenty minutes: a Ministry of Health health-tourism authorisation, a named and
              registered treating dentist, a named implant or ceramic brand on an itemised plan, and a written guarantee with a
              stated aftercare route. This guide is the method for checking all four.
            </p>
          </div>

          <p>
            Turkey has thousands of dental clinics competing for international patients and the quality genuinely varies — from
            practices operating at or above the standard of a good UK specialist, to operations that exist mainly as a sales funnel.
            The difficulty for a UK patient is that both look identical from a website. Every clinic photographs well, every clinic
            claims premium materials, and the ranked &ldquo;top 10 clinics in Turkey&rdquo; lists that dominate search results are
            almost always paid placements.
          </p>
          <p>
            So this page does not rank clinics. It gives you what a ranking cannot: the specific things to check, the questions that
            separate a clinical answer from a sales script, and the signals that should end a conversation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Verify a clinic in six steps</h2>
          <ol className="space-y-4">
            {verificationSteps.map((step, i) => (
              <li key={step.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">
                  <span className="text-[#1e40af]">{i + 1}.</span> {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-0">{step.detail}</p>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What marks out a top Turkish dental clinic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualityMarkers.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">✓ {item.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Six questions to ask before you pay a deposit</h2>
          <p>
            The answers matter less than how readily they come. A clinic that treats a lot of UK patients has answered all six
            hundreds of times and will answer them in a single message.
          </p>
          <div className="space-y-3">
            {questionsToAsk.map((item) => (
              <div key={item.q} className="border-l-4 border-[#1e40af] bg-blue-50/40 rounded-r-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">&ldquo;{item.q}&rdquo;</p>
                <p className="text-sm text-gray-600 mb-0"><strong>What a good answer looks like:</strong> {item.good}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing a city: Istanbul, Antalya or Izmir</h2>
          <p>
            City choice matters less than clinic choice, but it is not irrelevant — the specialist pool differs, and so does what a
            package typically includes.
          </p>
          <div className="space-y-4">
            {cities.map((c) => (
              <div key={c.city} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{c.city}</h3>
                <p className="text-xs font-semibold text-[#1e40af] uppercase tracking-wide mb-2">Best for: {c.forWhom}</p>
                <p className="text-sm text-gray-600 mb-0">{c.detail}</p>
              </div>
            ))}
          </div>
          <p>
            A fuller comparison, including flight times and what a treatment week actually looks like in each,
            is in our <Link href="/blog/antalya-vs-istanbul-dental-clinics" className="text-[#1e40af] font-semibold underline">Antalya vs Istanbul guide</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">If you need full-arch work</h2>
          <p>
            All-on-4 and All-on-6 are surgical procedures, and the selection criteria tighten accordingly. Look for a named
            implantologist rather than a general dentist, an on-site CBCT scanner, a stated implant system, and a treatment plan
            that separates the temporary prosthesis fitted on your first trip from the permanent bridge fitted months later. Quotes
            that blur those two stages together tend to grow once you have travelled. Our{" "}
            <Link href="/guides/dental-implants-turkey" className="text-[#1e40af] font-semibold underline">dental implants guide</Link>{" "}
            covers the brands, timelines and healing periods in detail.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Red flags that should end the conversation</h2>
          <ul className="list-disc list-inside space-y-2">
            {redFlags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
          <p>
            Most poor outcomes reported by UK patients trace back to one of these being visible before booking and overlooked
            because the price was good. Our guide to the{" "}
            <Link href="/teeth-done-in-turkey-problems" className="text-[#1e40af] font-semibold underline">problems UK patients report</Link>{" "}
            sets out what actually goes wrong and how often.
          </p>

          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We&apos;ve done the vetting for you.</p>
            <p className="text-gray-600 text-sm mb-4">Our partner clinics have been personally visited by our team, hold Ministry of Health health-tourism authorisation, name the treating dentist and the material brand on every plan, and issue a written guarantee. Tell us what you need and we&apos;ll match you.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Matched with a Clinic</Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <FAQSection faqs={faqs} title="Best Dental Clinics in Turkey: FAQs" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/turkey-teeth-clinic" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Clinic Checklist</span>
              <span className="text-xs text-gray-500 mt-0.5">Accreditation & safety checklist</span>
            </Link>
            <Link href="/guides/teeth-in-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Teeth in Turkey Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">The complete patient guide</span>
            </Link>
            <Link href="/prices/turkey-teeth-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Cost</span>
              <span className="text-xs text-gray-500 mt-0.5">2026 price guide</span>
            </Link>
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/blog/turkey-teeth-reviews" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Reviews</span>
              <span className="text-xs text-gray-500 mt-0.5">Real UK patient experiences</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
