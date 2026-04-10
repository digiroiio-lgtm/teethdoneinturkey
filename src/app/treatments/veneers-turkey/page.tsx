import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/veneers-turkey" },
  title: "Veneers Turkey – From £190 Per Tooth",
  description: "Get porcelain or E-max veneers in Turkey from £190 per tooth. Compare to £900+ in the UK. JCI-accredited clinics, English-speaking dentists, 10-year guarantee.",
};

const faqs = [
  { question: "How long do veneers last in Turkey?", answer: "E-max and porcelain veneers typically last 10–15 years with proper care. Our partner clinics offer a 10-year structural guarantee on all veneer work." },
  { question: "How many days do I need in Turkey for veneers?", answer: "You'll typically need 5–7 days for a veneer procedure — 2 days for preparation and temporaries, then 2–3 days later for fitting the final veneers." },
  { question: "Are Turkish veneers the same quality as UK veneers?", answer: "Yes. Our partner clinics use the same Ivoclar E-max and Vita porcelain materials as top UK practices. The difference is the cost of labour and clinic overheads, not the materials or skill." },
  { question: "Will my veneers look natural?", answer: "Absolutely. Digital Smile Design technology allows you to preview your new smile before any work begins. Our dentists are specialists in aesthetic dentistry." },
];

export default function VeneersTurkeyPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey – From £190 Per Tooth</h1>
          <p className="text-xl text-blue-200 mb-6">Transform your smile with premium porcelain veneers at a fraction of UK prices</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Full Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
              Dental veneers are ultra-thin porcelain or composite shells bonded to the front surface of your teeth. They correct discolouration, chips, gaps, and misalignment to create a perfectly uniform, bright smile. The results are instantly transformative and long-lasting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In Turkey, veneers are performed by specialist aesthetic dentists using the same global brand materials — primarily Ivoclar E-max and Vita porcelain — as the very best UK clinics. The dramatic price difference is simply due to Turkey&apos;s lower cost base, not any compromise in quality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Veneers Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "E-max Veneers", desc: "The gold standard. Ultra-thin, incredibly strong lithium disilicate ceramic. Natural-looking and highly translucent.", price: "From £220/tooth" },
                { name: "Zirconia Veneers", desc: "Maximum durability. Ideal for patients who grind their teeth. Slightly less translucent but extremely strong.", price: "From £250/tooth" },
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
                { title: "Tooth Preparation", desc: "A thin layer of enamel (0.3–0.5mm) is removed from the tooth surface to make room for the veneer." },
                { title: "Impressions & Temporaries", desc: "Digital impressions are sent to the in-house lab. Temporary veneers protect your teeth while your final ones are crafted." },
                { title: "Final Fitting", desc: "Your permanent veneers are bonded with dental adhesive. Fine adjustments are made until your bite and appearance are perfect." },
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
        </div>
      </section>

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
