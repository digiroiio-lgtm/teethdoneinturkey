import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/full-smile-makeover-turkey" },
  title: "Smile Makeover Turkey – Full Transformation from £3,500",
  description: "Complete smile makeover in Turkey from £3,500. Veneers, whitening, gum contouring and more in one trip. Compare to £12,000+ in the UK. JCI clinics, 10-year guarantee.",
};

const faqs = [
  { question: "What's included in a smile makeover?", answer: "A smile makeover is entirely bespoke. Most packages include porcelain veneers (typically 16–20 teeth), teeth whitening, gum contouring, and any crown work needed to complete the look. Your dentist designs the plan after a digital smile design consultation and photo assessment." },
  { question: "How long does a smile makeover take in Turkey?", answer: "A typical full smile makeover takes 6–8 days: Day 1 is your consultation and digital smile preview, Days 2–3 for tooth preparation and temporaries, Days 4–5 for the lab to craft your veneers, and Days 6–7 for fitting and final adjustments before you fly home with your new smile." },
  { question: "Can I see my new smile before treatment starts?", answer: "Yes. Digital Smile Design (DSD) software creates a high-resolution 3D preview of your proposed smile before any preparation begins. You can request adjustments until you are 100% happy." },
  { question: "How long do smile makeover results last?", answer: "E-max porcelain veneers — the most common component — typically last 10–15 years with proper care. All partner clinics include a 10-year structural guarantee. Teeth whitening results typically last 2–3 years before a top-up is needed." },
  { question: "Can I pay monthly for a smile makeover?", answer: "Yes. Finance is available over 12, 24, or 36 months. A £3,500 smile makeover is available from approximately £97/month over 36 months. Pre-qualify with no impact on your credit score." },
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

export default function SmileMakeoverPage() {
  return (
    <>
      <Script id="faq-schema-smile-makeover" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Full Smile Makeover Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Complete smile transformation from £3,500</p>
          <p className="text-blue-300 mb-6">Compare to £12,000+ in the UK — save over 70%</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Package Prices</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Price comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Smile Makeover Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£12,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price</p>
                <p className="text-3xl font-extrabold text-green-600">£3,500</p>
                <p className="text-xs text-green-600 font-semibold">Save 71%+</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in a Smile Makeover?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A full smile makeover combines multiple cosmetic and restorative treatments tailored to your specific needs. No two smile makeovers are the same — your treatment plan is designed after a detailed consultation and digital smile preview.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Porcelain Veneers", desc: "Ultra-thin shells to correct shape, colour, and alignment (typically 16–20 teeth)" },
                { title: "Teeth Whitening", desc: "Professional laser whitening for a brilliant, uniform shade" },
                { title: "Gum Contouring", desc: "Reshape uneven gumlines for a more symmetrical smile" },
                { title: "Dental Crowns", desc: "Cap damaged or discoloured back teeth to complete the look" },
                { title: "Composite Bonding", desc: "Fill gaps and repair chips for a flawless finish" },
                { title: "Digital Smile Design", desc: "Preview your new smile before any work begins" },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-[#1e40af] font-bold">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Smile Makeover Journey – 6 to 8 Days</h2>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation & Digital Smile Design", desc: "Photos, shade selection, and a 3D preview of your proposed smile." },
                { day: "Days 2–3", title: "Tooth Preparation & Temporaries", desc: "Light preparation of teeth and fitting of temporary veneers while your permanent ones are crafted in the in-house lab." },
                { day: "Days 4–5", title: "Lab Crafting", desc: "Your personalised E-max or zirconia veneers are fabricated to specification." },
                { day: "Days 6–7", title: "Final Fitting", desc: "Permanent veneers bonded and bite checked. Fine adjustments made to ensure a perfect fit." },
                { day: "Day 8", title: "Departure", desc: "Full aftercare instructions and clinic contact details for any questions after you return home." },
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

          {/* Finance */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">Finance your smile makeover over 12, 24, or 36 months with no upfront fees.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "12 months", price: "£292/mo" },
                { label: "24 months", price: "£146/mo" },
                { label: "36 months", price: "£97/mo" },
              ].map(p => (
                <div key={p.label} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          {/* Internal links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Veneers Turkey", href: "/treatments/veneers-turkey", desc: "E-max porcelain veneers from £190 per tooth." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 crown packages with hotel and transfers included." },
                { title: "Veneers Cost Guide", href: "/prices/veneers-turkey-cost", desc: "Full UK vs Turkey price comparison for all veneer types." },
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

      <FAQSection faqs={faqs} title="Smile Makeover Turkey FAQ" />

      <CTASection title="Design Your Dream Smile" subtitle="Book a free consultation and get a digital smile preview within 48 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
