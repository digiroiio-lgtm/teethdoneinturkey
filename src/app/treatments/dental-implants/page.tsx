import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { medicalProcedureSchema, faqPageSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Dental Implants in Turkey — From £450 Per Implant | Teeth Done in Turkey",
  description:
    "Permanent dental implants in Turkey from £450. Save up to 77% vs UK prices. Titanium and zirconia options, JCI-accredited clinics, lifetime guarantee available.",
  openGraph: {
    title: "Dental Implants in Turkey — From £450 Per Implant",
    description: "Permanent dental implants in Turkey from £450. Save up to 77% vs UK prices.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/dental-implants",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/dental-implants" },
};

const faqs = [
  {
    question: "How long do dental implants last?",
    answer: "With proper care, dental implants can last a lifetime. The titanium post fuses with your jawbone (osseointegration) and becomes a permanent part of your mouth. The crown on top may need replacing after 10–15 years, but the implant itself rarely needs attention.",
  },
  {
    question: "Am I suitable for dental implants?",
    answer: "Most adults in good general health are suitable for implants. You need sufficient bone density to support the implant. Heavy smokers, people with uncontrolled diabetes, or those on certain medications may need additional assessment. Your dentist will evaluate your suitability during the initial consultation.",
  },
  {
    question: "Does getting a dental implant hurt?",
    answer: "The procedure is carried out under local anaesthetic, so you should feel no pain during treatment. Most patients report only mild discomfort and swelling for a few days afterwards, which is well-managed with over-the-counter pain relief.",
  },
  {
    question: "How many trips to Turkey do I need for implants?",
    answer: "A standard single implant typically requires two trips. The first trip (3–4 days) is for implant placement, and the second trip (3–4 days) is around 3–6 months later for the crown fitting, once the implant has fully integrated. Same-day implants (immediate loading) are available for suitable cases.",
  },
  {
    question: "What is the difference between titanium and zirconia implants?",
    answer: "Titanium implants are the gold standard — extremely strong, biocompatible, and have decades of clinical evidence behind them. Zirconia implants are metal-free, making them a good option for those with metal sensitivities. Both have excellent success rates above 95%.",
  },
];

export default function DentalImplantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalProcedureSchema({
              name: "Dental Implants",
              description: "Permanent tooth replacement using titanium or zirconia implants surgically placed in the jawbone.",
              url: "https://www.teethdoneinturkey.co.uk/treatments/dental-implants",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link>
            <span>/</span>
            <span className="text-white">Dental Implants</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dental Implants in Turkey<br />
            <span className="text-[#f5a623]">— From £450 Per Implant</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Permanent, natural-looking tooth replacement using premium titanium implants. Save up to 77% compared to UK prices with no compromise on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">
              Get Free Quote
            </Link>
            <Link href="/prices/dental-implants-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">
              See Full Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "£450", label: "Starting Price / Implant" },
              { value: "95%+", label: "Success Rate" },
              { value: "77%", label: "Average Saving vs UK" },
              { value: "Lifetime", label: "Implant Longevity" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-[#1a6b3c]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Are Dental Implants?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A dental implant is a small titanium screw that is surgically placed into your jawbone to act as an artificial tooth root. Once it integrates with the bone (a process called osseointegration), a crown is attached on top to create a natural-looking, permanent replacement tooth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implants are widely considered the gold standard for tooth replacement. Unlike dentures, they don&apos;t slip or require adhesives. Unlike bridges, they don&apos;t require grinding down adjacent healthy teeth. They look, feel, and function just like natural teeth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Turkey has become one of the world&apos;s leading destinations for dental implant treatment. Highly skilled implantologists, state-of-the-art facilities, and dramatically lower costs mean UK patients can save thousands of pounds without sacrificing quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Implant Types Available</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">🔩 Titanium Implants</h3>
                    <p className="text-sm text-gray-600 mb-3">The most common and well-researched type. Biocompatible, extremely strong, and has over 50 years of clinical data.</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ 95%+ success rate</li>
                      <li>✓ Proven long-term results</li>
                      <li>✓ Lightweight and durable</li>
                      <li>✓ Compatible with MRI scans</li>
                    </ul>
                    <p className="mt-4 font-bold text-[#1a6b3c]">From £450/implant</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">⚪ Zirconia Implants</h3>
                    <p className="text-sm text-gray-600 mb-3">A metal-free option made from ceramic zirconia. Ideal for patients with metal sensitivities or those wanting a completely metal-free solution.</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ 100% metal-free</li>
                      <li>✓ White colour (no grey showing)</li>
                      <li>✓ Excellent biocompatibility</li>
                      <li>✓ Growing clinical evidence</li>
                    </ul>
                    <p className="mt-4 font-bold text-[#1a6b3c]">From £600/implant</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Implant Procedure</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Trip 1 – Days 1–2", title: "Consultation & Assessment", desc: "3D CT scan to assess bone density and plan implant placement. Full dental examination and treatment planning." },
                    { phase: "Trip 1 – Day 2–3", title: "Implant Placement", desc: "The titanium implant is placed into the jawbone under local anaesthetic. A temporary crown may be fitted. Healing begins." },
                    { phase: "3–6 months later", title: "Osseointegration", desc: "The implant gradually fuses with your jawbone (osseointegration). This is the most important phase and takes 3–6 months at home." },
                    { phase: "Trip 2 – Days 1–3", title: "Crown Fitting", desc: "Once fully healed, you return to Turkey. Impressions are taken and your permanent crown is custom-made and fitted. Your new smile is complete." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-24 bg-[#1a6b3c] text-white rounded-lg flex items-center justify-center text-xs font-bold p-2 text-center">
                        {item.phase}
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
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#1a6b3c] text-white">
                        <th className="px-4 py-3 text-left">Treatment</th>
                        <th className="px-4 py-3 text-center">Turkey</th>
                        <th className="px-4 py-3 text-center">UK</th>
                        <th className="px-4 py-3 text-center">USA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: "Single Implant + Crown", turkey: "£450–£700", uk: "£2,000–£3,000", usa: "$3,000–$5,000" },
                        { t: "Multiple Implants (4)", turkey: "£1,800–£2,800", uk: "£8,000–£12,000", usa: "$12,000–$20,000" },
                        { t: "All-on-4 (per arch)", turkey: "£3,500–£5,000", uk: "£14,000–£20,000", usa: "$20,000–$35,000" },
                        { t: "All-on-6 (per arch)", turkey: "£4,500–£6,000", uk: "£18,000–£25,000", usa: "$25,000–$40,000" },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium">{row.t}</td>
                          <td className="px-4 py-3 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.uk}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.usa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <Link href="/prices/dental-implants-cost" className="text-[#1a6b3c] font-semibold hover:underline text-sm">
                    → Full implant pricing breakdown
                  </Link>
                  <Link href="/treatments/all-on-4-implants" className="text-[#1a6b3c] font-semibold hover:underline text-sm">
                    → Learn about All-on-4 implants
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Related Treatments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "All-on-4 Implants", href: "/treatments/all-on-4-implants", desc: "Full arch restoration" },
                    { label: "Dental Crowns", href: "/treatments/dental-crowns", desc: "Crown on top of implant" },
                    { label: "Smile Makeover", href: "/treatments/smile-makeover", desc: "Combined treatment plan" },
                    { label: "Hollywood Smile", href: "/treatments/hollywood-smile", desc: "Complete smile transformation" },
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

            <aside className="space-y-6">
              <div className="bg-[#1a6b3c] text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-3">Get a Free Quote</h3>
                <p className="text-green-100 text-sm mb-4">Find out exactly what your implant treatment will cost.</p>
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
                  {[
                    { label: "Starting price", value: "£450/implant" },
                    { label: "Treatment time", value: "2 trips required" },
                    { label: "Success rate", value: "95%+" },
                    { label: "Longevity", value: "Lifetime" },
                    { label: "Anaesthetic", value: "Local" },
                    { label: "Recovery", value: "3–5 days" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium text-[#1a6b3c]">{item.value}</span>
                    </div>
                  ))}
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
