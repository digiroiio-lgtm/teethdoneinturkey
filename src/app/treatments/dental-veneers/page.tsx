import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { medicalProcedureSchema, faqPageSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Dental Veneers in Turkey — From £195 Per Tooth | Teeth Done in Turkey",
  description:
    "Get porcelain or composite dental veneers in Turkey from just £195 per tooth. Save up to 75% vs UK prices. JCI-accredited clinics, experienced cosmetic dentists.",
  openGraph: {
    title: "Dental Veneers in Turkey — From £195 Per Tooth",
    description: "Get porcelain or composite dental veneers in Turkey from just £195 per tooth. Save up to 75% vs UK prices.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/dental-veneers",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/dental-veneers" },
};

const faqs = [
  {
    question: "How long do veneers last?",
    answer: "Porcelain veneers typically last 10–15 years with proper care. Composite veneers last around 5–7 years. Both types are durable, but avoiding biting hard objects and maintaining good oral hygiene extends their lifespan significantly.",
  },
  {
    question: "Is the veneer procedure painful?",
    answer: "The procedure itself is performed under local anaesthetic, so you won't feel pain during treatment. Some patients experience mild sensitivity for a few days afterwards, which usually resolves quickly.",
  },
  {
    question: "How many visits to Turkey do I need for veneers?",
    answer: "Most veneer treatments can be completed in a single trip of 5–7 days. Your dentist will prepare your teeth, take impressions, and fit your permanent veneers. Some patients may need a second short visit for adjustments, but this is rare.",
  },
  {
    question: "What is the difference between porcelain and composite veneers?",
    answer: "Porcelain veneers are made in a dental lab, look more natural, are more stain-resistant, and last longer (10–15 years), but cost more. Composite veneers are applied directly to the tooth, require less preparation, are cheaper, but may not last as long (5–7 years). Your dentist will recommend the best option for you.",
  },
  {
    question: "Can I eat normally with veneers?",
    answer: "Yes, once your veneers are fitted you can eat normally. We recommend avoiding very hard foods like biting directly into apples or hard sweets, as this can chip the veneers. You can eat all normal foods without any issues.",
  },
];

export default function DentalVeneersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalProcedureSchema({
              name: "Dental Veneers",
              description: "Ultra-thin porcelain or composite shells bonded to the front of teeth to improve their appearance.",
              url: "https://www.teethdoneinturkey.co.uk/treatments/dental-veneers",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link>
            <span>/</span>
            <span className="text-white">Dental Veneers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dental Veneers in Turkey<br />
            <span className="text-[#f5a623]">— From £195 Per Tooth</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Transform your smile with stunning porcelain or composite veneers at a fraction of UK prices. Our partner clinics in Turkey deliver flawless results using the latest materials and techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">
              Get Free Quote
            </Link>
            <Link href="/prices/dental-veneers-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "£195", label: "Starting Price / Tooth" },
              { value: "5–7 days", label: "Treatment Duration" },
              { value: "75%", label: "Average Saving vs UK" },
              { value: "15 years", label: "Porcelain Longevity" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-[#1a6b3c]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Are Dental Veneers?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dental veneers are ultra-thin shells — typically between 0.3mm and 0.7mm thick — made from porcelain or composite resin that are bonded to the front surface of your teeth. They&apos;re one of the most popular cosmetic dentistry treatments in the world because they can dramatically improve the appearance of your smile in a relatively short time.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Veneers are used to correct a wide range of aesthetic concerns including discolouration and staining (including tetracycline stains that whitening can&apos;t fix), chipped or cracked teeth, gaps between teeth (diastema), misshapen or uneven teeth, and worn-down enamel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike crowns, which cover the entire tooth, veneers only cover the visible front surface. This means less tooth reduction is needed, preserving more of your natural tooth structure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Types of Veneers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">✨ Porcelain Veneers</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Most natural-looking result</li>
                      <li>✓ Highly stain-resistant</li>
                      <li>✓ Lasts 10–15+ years</li>
                      <li>✓ Lab-fabricated for precision</li>
                      <li>✓ Reflects light like natural enamel</li>
                    </ul>
                    <p className="mt-4 font-bold text-[#1a6b3c]">From £195/tooth in Turkey</p>
                    <p className="text-xs text-gray-500">vs £800–£1,200 in the UK</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">💎 Composite Veneers</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Applied directly in one visit</li>
                      <li>✓ Less tooth preparation needed</li>
                      <li>✓ More affordable option</li>
                      <li>✓ Easily repaired if chipped</li>
                      <li>✓ Lasts 5–7 years</li>
                    </ul>
                    <p className="mt-4 font-bold text-[#1a6b3c]">From £120/tooth in Turkey</p>
                    <p className="text-xs text-gray-500">vs £400–£600 in the UK</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Veneer Procedure</h2>
                <div className="space-y-4">
                  {[
                    { step: "Day 1", title: "Consultation & Assessment", desc: "Your dentist examines your teeth, takes digital scans and photos, and discusses your desired outcome. Digital smile design software shows you your expected results before any work begins." },
                    { step: "Day 2", title: "Tooth Preparation", desc: "A thin layer of enamel (usually 0.3–0.7mm) is removed from the front of each tooth to make room for the veneer. Temporary veneers are placed while your permanent ones are being made." },
                    { step: "Days 3–5", title: "Lab Fabrication", desc: "Your impressions are sent to the dental laboratory where skilled technicians craft your custom porcelain veneers. This usually takes 2–4 days." },
                    { step: "Day 5–6", title: "Fitting & Bonding", desc: "Your permanent veneers are carefully checked for fit and colour, adjusted as needed, then permanently bonded using dental cement. Final polishing completes your new smile." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 h-12 bg-[#1a6b3c] text-white rounded-lg flex items-center justify-center text-xs font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Who Is a Good Candidate for Veneers?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You could be an ideal candidate for dental veneers if you have one or more of the following concerns:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Stained or discoloured teeth that don't respond to whitening",
                    "Chipped, cracked or broken teeth",
                    "Gaps between teeth (diastema)",
                    "Slightly misaligned or crooked teeth",
                    "Worn-down enamel",
                    "Uneven or irregular tooth shape",
                    "Teeth that are too short or too small",
                    "Tetracycline-stained teeth",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#1a6b3c] mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Veneers are generally <strong>not recommended</strong> if you have active gum disease, significant tooth decay, or clench/grind your teeth severely (bruxism), though night guards can sometimes allow veneer placement even in grinders.
                </p>
              </section>

              {/* Cost comparison */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dental Veneer Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#1a6b3c] text-white">
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-center">Turkey</th>
                        <th className="px-4 py-3 text-center">UK</th>
                        <th className="px-4 py-3 text-center">USA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Composite Veneer", turkey: "£120–£180", uk: "£400–£600", usa: "$800–$1,500" },
                        { type: "Porcelain Veneer", turkey: "£195–£250", uk: "£800–£1,200", usa: "$1,500–$2,500" },
                        { type: "Hollywood Smile (10 teeth)", turkey: "£2,500–£3,000", uk: "£8,000–£12,000", usa: "$15,000–$25,000" },
                      ].map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium">{row.type}</td>
                          <td className="px-4 py-3 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.uk}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.usa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <Link href="/prices/dental-veneers-cost" className="text-[#1a6b3c] font-semibold hover:underline text-sm">
                    → Full price breakdown
                  </Link>
                  <Link href="/monthly-payment" className="text-[#1a6b3c] font-semibold hover:underline text-sm">
                    → Monthly payment options
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>

              {/* Internal links */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Related Treatments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Hollywood Smile", href: "/treatments/hollywood-smile", desc: "Complete smile makeover" },
                    { label: "Dental Crowns", href: "/treatments/dental-crowns", desc: "For damaged or decayed teeth" },
                    { label: "Teeth Whitening", href: "/treatments/teeth-whitening", desc: "Brighten your natural smile" },
                    { label: "Smile Makeover", href: "/treatments/smile-makeover", desc: "Personalised transformation" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors"
                    >
                      <p className="font-semibold text-[#1a1a1a]">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#1a6b3c] text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-3">Get a Free Quote</h3>
                <p className="text-green-100 text-sm mb-4">Send us your photos and we&apos;ll give you a personalised quote within 24 hours.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/447911123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1a6b3c] transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-3">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Starting price</span>
                    <span className="font-bold text-[#1a6b3c]">£195/tooth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Treatment time</span>
                    <span className="font-medium">5–7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Longevity</span>
                    <span className="font-medium">10–15 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pain level</span>
                    <span className="font-medium">Minimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Anaesthetic</span>
                    <span className="font-medium">Local</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5a623]/10 rounded-2xl p-6 border border-[#f5a623]/20">
                <h3 className="font-bold text-[#1a1a1a] mb-2">💰 Your Potential Saving</h3>
                <p className="text-sm text-gray-700 mb-3">On 10 porcelain veneers (Hollywood Smile):</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Turkey cost:</span>
                    <span className="font-bold text-[#1a6b3c]">~£2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UK cost:</span>
                    <span className="font-bold text-gray-500">~£10,000</span>
                  </div>
                  <div className="flex justify-between border-t border-[#f5a623]/30 pt-1 mt-1">
                    <span className="font-bold">You save:</span>
                    <span className="font-extrabold text-[#f5a623]">~£7,500</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
