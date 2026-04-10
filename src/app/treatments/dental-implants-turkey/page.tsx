import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/dental-implants-turkey" },
  title: "Dental Implants Turkey – From £450",
  description: "Get permanent dental implants in Turkey from £450. Same Straumann and Nobel Biocare brands as UK at 82% less. JCI clinics, 10-year guarantee.",
};

const faqs = [
  { question: "Are dental implants in Turkey safe?", answer: "Yes. Our partner clinics use premium implant systems (Straumann, Nobel Biocare) and follow the same surgical protocols as UK clinics. All clinics are JCI-accredited or Ministry of Health certified." },
  { question: "How many trips do I need to Turkey for implants?", answer: "Usually two trips. The first (3–5 days) is for implant placement. After 3–6 months of osseointegration, you return for the crown fitting (3–4 days). Some cases with good bone density can be done as a single trip." },
  { question: "What brands of implants are used?", answer: "Our partner clinics use Straumann, Nobel Biocare, Astra Tech, and other premium implant brands — the same systems used in top UK practices." },
  { question: "How long do dental implants last?", answer: "With proper care, implants can last a lifetime. The crown on top may need replacing after 15–20 years. Our clinics offer a 10-year guarantee on implant work." },
  { question: "Can I pay monthly for dental implants in Turkey?", answer: "Yes. Finance is available over 12, 24, or 36 months. A single implant at £450 is available from approximately £13/month over 36 months. Pre-qualify with no impact on your credit score." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
};

export default function DentalImplantsTurkeyPage() {
  return (
    <>
      <Script id="faq-schema-implants" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Implants Turkey – From £450</h1>
          <p className="text-xl text-blue-200 mb-6">Permanent tooth replacement using premium Straumann & Nobel Biocare implants</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/dental-implants-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Implant Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">UK Price (per implant)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£2,500</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Turkey Price (per implant)</p>
                <p className="text-3xl font-extrabold text-green-600">£450</p>
                <p className="text-xs text-green-600 font-semibold">Save 82%</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Dental Implants?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root. Once healed (osseointegrated), a crown is attached to create a natural-looking, fully functional replacement tooth. Unlike dentures, implants are permanent and don&apos;t require removal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Turkey has become one of the world&apos;s leading destinations for dental implants because Turkish specialists are among the most experienced implant surgeons globally, performing thousands of procedures annually at a fraction of UK costs.
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
            <p className="text-gray-600 mb-4">Finance your implants over 12, 24, or 36 months with no upfront fees.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Single implant / 12mo", price: "£38/mo" },
                { label: "Single implant / 24mo", price: "£19/mo" },
                { label: "Single implant / 36mo", price: "£13/mo" },
              ].map(p => (
                <div key={p.label} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
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
