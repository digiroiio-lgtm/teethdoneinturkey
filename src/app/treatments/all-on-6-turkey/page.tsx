import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/all-on-6-turkey" },
  title: "All-on-6 Dental Implants Turkey – From £5,600 All-Inclusive",
  description: "All-on-6 dental implants in Turkey from £5,600 all-inclusive (hotel + transfers). Superior stability vs All-on-4. JCI clinics. Save vs £18,000+ in the UK.",
};

const faqs = [
  { question: "Why choose All-on-6 over All-on-4?", answer: "All-on-6 uses six implants instead of four, distributing bite force more evenly. This provides greater stability, better aesthetics (wider arch support), and can extend the longevity of the prosthetic. It is especially recommended for the upper arch, where bone density is typically lower." },
  { question: "How long does All-on-6 take in Turkey?", answer: "Your first trip is 6–8 days: Day 1 for scans, Day 2 for surgery with same-day temporaries, Days 3–6 for recovery and adjustments. After 3–6 months of osseointegration, you return for your permanent zirconia arch (3–4 days)." },
  { question: "What is included in the All-on-6 package price?", answer: "Our all-inclusive All-on-6 package (from £5,600 per arch) includes the 6 Osstem implants, temporary fixed arch, hotel accommodation, VIP airport transfers, and all clinical appointments. The permanent zirconia arch on your second visit is an additional fee." },
  { question: "Is All-on-6 possible with bone loss?", answer: "In many cases, yes — but if significant bone loss is present, a bone graft or sinus lift may be needed before implant placement. Our CBCT scan will confirm whether any preparatory work is required." },
  { question: "Can I pay monthly for All-on-6?", answer: "Yes. Finance plans are available over 12, 24, or 36 months. An All-on-6 arch at £5,600 is available from around £156/month over 36 months. Pre-qualify with no credit impact." },
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

export default function AllOn6Page() {
  return (
    <>
      <Script id="faq-schema-all-on-6" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All-on-6 Dental Implants Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Enhanced full arch restoration with 6 implants from £5,600 all-inclusive</p>
          <p className="text-blue-300 mb-6">Compare to £18,000+ in the UK — save over 69%</p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">All-on-6 Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price (per arch)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£18,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price (per arch)</p>
                <p className="text-3xl font-extrabold text-green-600">£5,600</p>
                <p className="text-xs text-green-600 font-semibold">Save 69%+</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All-on-6 vs All-on-4</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All-on-6 uses six implants instead of four, providing greater stability, better load distribution, and a more natural feel. The extra two implants reduce stress on each individual implant and can extend the lifespan of the prosthetic arch.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All-on-6 is typically recommended for patients with good bone density who want the most secure and durable full arch solution. It&apos;s particularly suited to the upper arch where bone quality tends to be lower.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of All-on-6</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Superior Stability", desc: "6 implants distribute bite force more evenly for a more secure, confident feel." },
                { title: "Better Aesthetics", desc: "More support points allow for a wider, more natural-looking arch." },
                { title: "Longer Lasting", desc: "Reduced stress per implant means greater longevity for the whole restoration." },
                { title: "Ideal for Upper Arch", desc: "Particularly beneficial where softer bone benefits from additional support." },
              ].map(b => (
                <div key={b.title} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">✓ {b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Timeline – 6 to 8 Days</h2>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation & CBCT Scan", desc: "3D scan, full assessment, and personalised treatment plan." },
                { day: "Day 2", title: "Implant Surgery", desc: "6 implants placed under IV sedation. Temporary fixed teeth fitted same day." },
                { day: "Days 3–6", title: "Recovery & Adjustments", desc: "Soft diet, daily follow-up. Temporary arch refined for comfort." },
                { day: "Days 7–8", title: "Final Check & Departure", desc: "Bite check and clearance to fly home with your temporary teeth." },
                { day: "~6 Months", title: "Permanent Arch", desc: "Return for your final high-strength zirconia bridge." },
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
            <p className="text-gray-600 mb-4">Finance your All-on-6 over 12, 24, or 36 months with no upfront fees.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "12 months", price: "£467/mo" },
                { label: "24 months", price: "£233/mo" },
                { label: "36 months", price: "£156/mo" },
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
                { title: "All-on-4 Implants", href: "/treatments/all-on-4-turkey", desc: "Four-implant full arch solution — ideal for patients with bone loss." },
                { title: "All-on-6 Package Prices", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "All-inclusive package with hotel, transfers & same-day teeth." },
                { title: "Full Implant Cost Guide", href: "/prices/dental-implants-turkey-cost", desc: "UK vs Turkey price breakdown for all implant procedures." },
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

      <FAQSection faqs={faqs} title="All-on-6 Turkey FAQ" />

      <CTASection title="Find Out If All-on-6 Is Right for You" subtitle="Book a free consultation and get a personalised treatment plan within 24 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
