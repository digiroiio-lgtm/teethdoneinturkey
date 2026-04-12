import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/all-on-4-turkey" },
  title: "All-on-4 Dental Implants Turkey – From £4,500 per Arch",
  description: "All-on-4 dental implants in Turkey from £4,500 per arch. Full arch restoration in 5–7 days. JCI-accredited clinics, same-day teeth, 10-year guarantee. Save 70%+ vs UK.",
};

const faqs = [
  { question: "Am I suitable for All-on-4?", answer: "Most patients who are missing all or most teeth in an arch are suitable. All-on-4 works even with moderate bone loss because the implants are angled to maximise bone contact. A CBCT scan at your consultation will confirm suitability." },
  { question: "How many days do I need in Turkey for All-on-4?", answer: "Your first trip takes 5–7 days: Day 1 for scans and consultation, Day 2 for surgery with same-day temporary teeth, Days 3–5 for recovery and adjustments. You return after 3–6 months for your permanent zirconia arch (3–4 days)." },
  { question: "Is All-on-4 surgery painful?", answer: "The procedure is carried out under local anaesthetic or IV sedation. Most patients report minimal discomfort during surgery. Post-operative soreness is managed with standard prescription pain relief and typically subsides within 3–5 days." },
  { question: "What's the difference between All-on-4 and All-on-6?", answer: "All-on-4 uses four implants to support a full arch. All-on-6 uses six implants, giving better load distribution and superior stability — particularly recommended for the upper arch. We can advise which is best after reviewing your CBCT scan." },
  { question: "Can I pay monthly for All-on-4?", answer: "Yes. Our finance plans allow you to spread the cost over 12, 24, or 36 months. A single All-on-4 arch from £4,500 is available from approximately £125/month over 36 months. Pre-qualify online with no impact on your credit score." },
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

export default function AllOn4Page() {
  return (
    <>
      <Script id="faq-schema-all-on-4" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All-on-4 Dental Implants Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Full arch restoration with 4 implants from £4,500</p>
          <p className="text-blue-300 mb-6">Compare to £15,000+ in the UK — save over 70%</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Package Prices</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Price comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">All-on-4 Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price (per arch)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£15,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price (per arch)</p>
                <p className="text-3xl font-extrabold text-green-600">£4,500</p>
                <p className="text-xs text-green-600 font-semibold">Save 70%+</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is All-on-4?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All-on-4 is a full arch dental implant solution that uses just four strategically placed titanium implants to support a complete set of fixed teeth. Unlike traditional dentures, All-on-4 teeth are permanently fixed — you can&apos;t take them out, and they function just like natural teeth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The four implants are angled to maximise contact with the available jawbone, meaning All-on-4 is often possible even for patients with some bone loss. In most cases, you receive temporary fixed teeth on the same day as implant placement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is All-on-4 For?</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Patients missing most or all teeth in one or both arches",
                "Patients with failing teeth that need full extraction",
                "Current denture wearers who want a permanent solution",
                "Patients with moderate bone loss (All-on-4 often avoids bone grafting)",
                "Patients seeking the most cost-effective full arch implant solution",
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-[#1e40af] font-bold">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Timeline – 5 to 7 Days</h2>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation & CBCT Scan", desc: "3D scan, full assessment, and personalised treatment plan." },
                { day: "Day 2", title: "Implant Surgery", desc: "4 implants placed under IV sedation or local anaesthetic. Temporary fixed teeth fitted same day." },
                { day: "Days 3–4", title: "Recovery", desc: "Soft diet and rest. Follow-up check to monitor healing." },
                { day: "Days 5–6", title: "Final Adjustments", desc: "Fine-tuning your temporaries and clearance to fly home." },
                { day: "~6 Months", title: "Permanent Arch", desc: "Second trip for your final high-strength zirconia bridge — the permanent result." },
              ].map((item) => (
                <div key={item.day} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="bg-[#1e40af] text-white px-3 py-1 rounded-lg text-xs font-bold flex-shrink-0 h-fit">{item.day}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finance section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">You don&apos;t need to pay upfront. Spread the cost of your All-on-4 over 12, 24, or 36 months.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "12 months", price: "£375/mo" },
                { label: "24 months", price: "£188/mo" },
                { label: "36 months", price: "£125/mo" },
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
                { title: "All-on-6 Implants", href: "/treatments/all-on-6-turkey", desc: "Six implants for superior stability and load distribution." },
                { title: "Implant Package Prices", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "All-inclusive packages with hotel, transfers & temps." },
                { title: "Full Implant Cost Guide", href: "/prices/dental-implants-turkey-cost", desc: "Detailed UK vs Turkey price comparison for all implant types." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/reviews" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Read Patient Reviews</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="All-on-4 Turkey FAQ" />

      <CTASection title="Enquire About All-on-4 Today" subtitle="Free consultation with our implant specialists. Personal treatment plan within 24 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
