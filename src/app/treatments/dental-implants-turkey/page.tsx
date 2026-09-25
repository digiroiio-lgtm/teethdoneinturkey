import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { IMPLANT_INTENT_OWNERS, implantFollowUps } from "@/lib/implant-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, savingRange, ukRange } from "@/lib/prices";

export const revalidate = 86400;

const osstem = getPrice("implant-osstem");
const straumann = getPrice("implant-straumann");
const DESCRIPTION = `Dental implants in Turkey from ${gbp(osstem.turkeyFromGBP)} (Osstem) to ${gbp(straumann.turkeyFromGBP)} (Straumann) with crown, arranged by a UK coordination service. How it works, who it suits, and how to get an itemised quote.`;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/dental-implants-turkey" },
  title: "Dental Implants Turkey – From £250",
  description: DESCRIPTION,
};

const faqs = [
  { question: "Are dental implants in Turkey safe?", answer: "Implant surgery carries the same clinical risks wherever it is done — infection, failure to integrate with the bone, and nerve or sinus complications. Partner clinics use recognised implant systems (Osstem, Medentika, Straumann) and plan surgery from a CBCT scan. Before booking, ask for the clinic's Turkish Ministry of Health licence, any accreditation it holds, and the treating dentist's qualifications in writing." },
  { question: "How many trips do I need to Turkey for implants?", answer: "Usually two trips. The first (3–5 days) is for implant placement. After 3–6 months of osseointegration, you return for the crown fitting (3–4 days). Some cases with good bone density can be done as a single trip." },
  { question: "What brands of implants are used?", answer: "Published prices cover three systems: Osstem (from £250 with crown), Medentika (from £430) and Straumann (from £930). Other brands are available at some clinics on request. Your quote should name the brand and implant model in writing." },
  { question: "How long do dental implants last?", answer: "With good oral hygiene and regular check-ups, an implant is intended as a long-term replacement, and the crown on top may need replacing after many years of wear. No clinic can promise a fixed lifespan. Partner clinics give written guarantees whose length and cover vary by clinic and brand — confirm the terms before booking." },
  { question: "Can I pay monthly for dental implants in Turkey?", answer: "Yes, subject to eligibility. Finance is available over 12, 24 or 36 months; a single £250 implant works out at about £7 a month over 36 months at 0%. Pre-qualification uses a soft search, which does not affect your credit score." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/treatments/dental-implants-turkey`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Dental Implants Turkey", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dental Implants Turkey – From £250",
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-09-25",
  inLanguage: "en-GB",
  author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "MedicalProcedure", name: "Dental Implant" },
};

export default function DentalImplantsTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Dental Implants" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Implants Turkey – From £250</h1>
          <p className="text-xl text-blue-200 mb-2">Implant treatment at partner clinics in Turkey, arranged from the UK</p>
          <div className="mb-6">
            <PageFreshness published="1 January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/dental-implants-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <QuickAnswer question="How do I get dental implants in Turkey through Teeth Done in Turkey?">
            <p>
              Teeth Done in Turkey is a UK patient-coordination service, not a clinic. You send photos or X-rays, we
              return an itemised plan from a partner clinic naming the implant brand, and the clinic carries out the
              treatment over usually two trips: implant placement first, then the permanent crown 3–6 months later.
              A single implant with crown starts from {gbp(osstem.turkeyFromGBP)} (Osstem) or {gbp(straumann.turkeyFromGBP)}{" "}
              (Straumann); the final price is confirmed after a CBCT scan.
            </p>
          </QuickAnswer>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Implant Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl">
                <p className="text-sm text-gray-500 mb-1">UK private (Osstem-level implant + crown)</p>
                <p className="text-2xl font-extrabold text-gray-700">{ukRange(osstem)}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Turkey (implant + crown)</p>
                <p className="text-2xl font-extrabold text-green-600">From {gbp(osstem.turkeyFromGBP)}</p>
                <p className="text-xs text-green-600 font-semibold">{savingRange(osstem)} lower, before travel</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Straumann: from {gbp(straumann.turkeyFromGBP)} in Turkey vs {ukRange(straumann)} in the UK. Full breakdown on the{" "}
              <Link href={IMPLANT_INTENT_OWNERS.cost} className="text-[#1e40af] hover:underline">implant cost page</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Dental Implants?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root. Once healed (osseointegrated), a crown is attached to create a natural-looking, fully functional replacement tooth. Unlike dentures, implants are permanent and don&apos;t require removal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The same implant systems can be used in Turkey and the UK; the price difference comes mainly from lower clinic overheads and staff costs in Turkey. What changes for the patient is logistics: two trips instead of local appointments, and aftercare that is a flight away.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Implant Process</h2>
            <ol className="space-y-4">
              {[
                { title: "Consultation & CBCT Scan", desc: "A 3D cone beam CT scan assesses your bone density and plans the exact implant placement." },
                { title: "Implant Placement", desc: "The titanium implant is placed under local anaesthetic. The procedure takes 30–60 minutes per implant." },
                { title: "Osseointegration", desc: "Over 3–6 months, your bone fuses with the titanium. You return home with a temporary crown." },
                { title: "Crown Fitting", desc: "On your second trip, the permanent zirconia or porcelain crown is fitted to the implant post." },
                { title: "Aftercare", desc: "Implants are maintained like natural teeth — regular brushing and flossing, plus annual check-ups." },
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
        </div>
      </section>

      {/* Finance + internal linking */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Finance */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">Finance your implants over 12, 24 or 36 months, subject to eligibility. Figures below are for a single {gbp(osstem.turkeyFromGBP)} implant at 0%.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Single implant / 12mo", price: `£${Math.ceil(osstem.turkeyFromGBP / 12)}/mo` },
                { label: "Single implant / 24mo", price: `£${Math.ceil(osstem.turkeyFromGBP / 24)}/mo` },
                { label: "Single implant / 36mo", price: `£${Math.ceil(osstem.turkeyFromGBP / 36)}/mo` },
              ].map(p => (
                <div key={p.label} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          <NotForYou
            title="Who implant treatment in Turkey may not suit"
            items={[
              "People who cannot make two trips 3–6 months apart, or could not return quickly if a problem appeared.",
              "Patients whose medical history needs close local monitoring, such as uncontrolled diabetes or bone-affecting medication.",
              "Anyone replacing a single tooth whose UK quote, after two trips' travel, is close to the Turkey total.",
            ]}
          />

          <FollowUpQuestions items={implantFollowUps(IMPLANT_INTENT_OWNERS.service)} />

          {/* Internal linking */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "📘 Dental Implants Guide", href: "/guides/dental-implants-turkey", desc: "The complete guide: brands, procedure, timelines and risks." },
                { title: "All-on-4 Dental Implants", href: "/treatments/all-on-4-turkey", desc: "Full arch on 4 implants — from £4,500, same-day temporary teeth." },
                { title: "All-on-6 Package Prices", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "All-inclusive 6-implant arch package with hotel and transfers." },
                { title: "Implant Cost Guide", href: "/prices/dental-implants-turkey-cost", desc: "UK vs Turkey price breakdown for all implant systems." },
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

      <FAQSection faqs={faqs} title="Dental Implants Turkey FAQ" />
      <CTASection title="Get Your Implant Quote Today" subtitle="Free consultation with our implant specialists. Personal quote within 24 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
