import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

import ClinicalReferences from "@/components/ClinicalReferences";
import TreatmentSummary from "@/components/TreatmentSummary";
import ProviderInformation from "@/components/ProviderInformation";
import { CLINICAL_SOURCES, clinicalCitations } from "@/lib/clinical-evidence";
import { CLINIC_ID } from "@/lib/entities";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/veneers-turkey" },
  title: "Veneers Turkey – From £190 Per Tooth",
  description: "Explore veneers in Turkey from £190 per tooth, including tooth preparation, suitability, risks, aftercare and the difference between veneers and dental crowns.",
};

const faqs = [
  { question: "How long do veneers last in Turkey?", answer: "Veneers can chip, wear or loosen and may need repair or replacement. Longevity varies with your teeth, bite and care. Ask for the clinic’s written guarantee and exclusions; it is separate from expected lifespan." },
  { question: "How many days do I need in Turkey for veneers?", answer: "You'll typically need 5–7 days for a veneer procedure — 2 days for preparation and temporaries, then 2–3 days later for fitting the final veneers." },
  { question: "Are Turkish veneers the same quality as UK veneers?", answer: "A material brand or country alone does not establish treatment quality. Check the dentist’s qualifications, proposed preparation, consent process and aftercare arrangements before agreeing to treatment." },
  { question: "Will my veneers look natural?", answer: "Appearance depends on your teeth, shade choice and treatment design. Discuss the proposed shape and shade with the dentist. A preview helps planning but cannot guarantee the final result." },
  { question: "Can I pay monthly for veneers in Turkey?", answer: "Yes. Finance is available over 12, 24, or 36 months. A full set of 20 veneers at £3,800 is available from around £106/month over 36 months. Pre-qualify with no credit impact." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/treatments/veneers-turkey`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Veneers Turkey", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
  headline: "Veneers Turkey – From £190 Per Tooth",
  description: "Porcelain and E-max veneers in Turkey from £190 per tooth. UK price comparison, brands, procedure and how to book.",
  url: PAGE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-10-18",
  inLanguage: "en-GB",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  citation: clinicalCitations("veneers"),
  about: { "@type": "MedicalProcedure", name: "Dental Veneer" },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: articleSchema.headline,
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${PAGE_URL}#article` },
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  mentions: { "@id": CLINIC_ID },
};

export default function VeneersTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Veneers Turkey" }]} />
          </div>
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey – From £190 Per Tooth</h1>
          <p className="text-xl text-blue-200 mb-2">Transform your smile with premium porcelain veneers at a fraction of UK prices</p>
          <p className="mb-6 text-sm text-blue-300/70">✓ Prices last verified: June 2026</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Full Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <TreatmentSummary
            question="What are dental veneers?"
            answer="Veneers cover the front of a tooth; crowns cover the whole tooth. Suitability depends on the health of your teeth and gums and the condition of your bite. Enamel preparation is irreversible, so ask a dentist about alternatives before deciding."
            sourceHref={CLINICAL_SOURCES.veneers.href}
            sourceName={CLINICAL_SOURCES.veneers.publisher}
          />
          {/* Cost comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Veneers Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">UK Price (per tooth)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£900</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Turkey Price (per tooth)</p>
                <p className="text-3xl font-extrabold text-green-600">£190</p>
                <p className="text-xs text-green-600 font-semibold">Save 79%</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">Full set of 20 veneers: <strong>£3,800 in Turkey</strong> vs £18,000 in the UK</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Dental Veneers?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dental veneers are facings placed on the front of teeth. They may improve the appearance of chips, staining or gaps. They differ from crowns, which cover the whole tooth; the choice requires a dental examination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Before treatment, discuss your oral health, bite and alternatives with a dentist. Where enamel is removed, preparation cannot be undone. The ADA guidance linked below explains why healthy teeth and gums matter before veneers are fitted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Veneers Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "E-max Veneers", desc: "A lithium disilicate ceramic option. Your dentist should explain whether it is appropriate for your teeth and bite.", price: "From £220/tooth" },
                { name: "Zirconia Veneers", desc: "Ask whether the proposed zirconia restoration is a veneer or a crown. Grinding needs assessment and may make veneers unsuitable.", price: "From £250/tooth" },
                { name: "Composite Veneers", desc: "More affordable option applied in a single visit. Good for minor corrections but less durable than porcelain.", price: "From £90/tooth" },
              ].map(v => (
                <div key={v.name} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{v.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{v.desc}</p>
                  <p className="text-[#1e40af] font-bold text-sm">{v.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Veneer Procedure – Step by Step</h2>
            <ol className="space-y-4">
              {[
                { title: "Digital Smile Design", desc: "Your dentist photographs your smile and creates a digital preview so you can see results before any work begins." },
                { title: "Tooth Preparation", desc: "The dentist explains any enamel removal needed for your proposed restoration. The amount varies; preparation is irreversible." },
                { title: "Impressions & Temporaries", desc: "Digital impressions are sent to the in-house lab. Temporary veneers protect your teeth while your final ones are crafted." },
                { title: "Final Fitting", desc: "Your permanent veneers are bonded with dental adhesive. Fit, appearance and bite are checked and adjusted with your dentist." },
                { title: "Aftercare Guidance", desc: "You receive full aftercare instructions and the clinic&apos;s contact details for any questions after you return home." },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Full Veneers Price Guide</Link>
          </div>
          <p className="text-gray-600 text-sm">
            Not sure how many veneers you need? See{" "}
            <Link href="/blog/4-8-10-rule-for-veneers" className="text-[#1e40af] font-semibold hover:underline">the 4-8-10 rule for veneers</Link>{" "}
            for how dentists plan the number of teeth.
          </p>

          {/* Finance section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">Finance your veneers over 12, 24, or 36 months with no upfront fees.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "16 Veneers", price: "£80/mo", term: "36 months" },
                { label: "20 Veneers", price: "£106/mo", term: "36 months" },
                { label: "20 Veneers", price: "£158/mo", term: "24 months" },
                { label: "20 Veneers", price: "£317/mo", term: "12 months" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-0.5">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                  <p className="text-xs text-gray-400">{p.term}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          {/* Internal linking */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "📘 Teeth in Turkey Guide", href: "/guides/teeth-in-turkey", desc: "The complete patient guide to treatments, safety and cost." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 crown all-inclusive packages with hotel and transfers." },
                { title: "Smile Makeover Turkey", href: "/treatments/full-smile-makeover-turkey", desc: "Full smile transformation including veneers, whitening and more." },
                { title: "Veneers Cost Guide", href: "/prices/veneers-turkey-cost", desc: "Complete UK vs Turkey price breakdown by veneer type." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Suitability, risks and ongoing care</h2>
            <p className="text-gray-600 leading-relaxed">Untreated decay, gum disease or grinding may affect whether veneers are appropriate. They can chip or need replacement. Discuss these risks and alternatives with your dentist, and arrange routine dental care after returning home. See the <a href={CLINICAL_SOURCES.veneers.href} className="text-[#1e40af] hover:underline">ADA guidance on veneers</a>.</p>
      </section>

      <ClinicalReferences topic="veneers" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"><ProviderInformation /></div>

      <FAQSection faqs={faqs} title="Veneers Turkey FAQ" />

      <CTASection
        title="Ready for Your New Smile?"
        subtitle="Get a free veneer consultation and personalised quote within 24 hours."
        buttonText="Get My Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
