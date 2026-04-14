import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Teeth Whitening in Turkey — From £150 | Teeth Done in Turkey",
  description: "Professional laser teeth whitening in Turkey from just £150. Remove years of staining and get a noticeably brighter smile. Save 60%+ vs UK prices.",
  openGraph: {
    title: "Teeth Whitening in Turkey — From £150",
    description: "Professional laser teeth whitening from £150. Save 60%+ vs UK prices.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/teeth-whitening",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/teeth-whitening" },
};

const faqs = [
  { question: "How white will my teeth get?", answer: "Results vary depending on your natural tooth shade and the type of staining, but most patients achieve 4–8 shades whiter in a single session. Your dentist will set realistic expectations during your consultation based on your teeth." },
  { question: "How long does teeth whitening last?", answer: "Professional teeth whitening typically lasts 1–3 years with good maintenance. Avoiding heavy staining foods and drinks (coffee, red wine, tea), not smoking, and using whitening toothpaste extends results significantly. Take-home trays can be used for top-ups." },
  { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening is safe when performed by a qualified dentist. Temporary sensitivity is common for a day or two. The clinics we work with use industry-standard concentrations and all work is overseen by qualified dental professionals." },
  { question: "Can I combine whitening with veneers or other treatments?", answer: "Whitening is often done before veneers to establish a base shade. If you already have veneers or crowns, whitening will only affect natural teeth — the restorations will not change colour. Your dentist will advise the best approach for your specific situation." },
];

export default function TeethWhiteningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link><span>/</span>
            <span>Teeth Whitening</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Teeth Whitening in Turkey<br />
            <span className="text-[#f5a623]">— From £150</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Professional laser teeth whitening that delivers dramatic results in a single appointment. Get a noticeably brighter, whiter smile — combined with other treatments or as a standalone procedure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">Get Free Quote</Link>
            <Link href="/prices/teeth-whitening-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">See Pricing</Link>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Professional Teeth Whitening in Turkey</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Professional teeth whitening is one of the most popular and affordable cosmetic dental treatments available. Unlike over-the-counter kits that deliver modest results, in-clinic professional whitening uses higher-concentration bleaching agents activated by a special light or laser to break down deep stains within the tooth enamel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Turkey&apos;s dental clinics offer the same professional whitening systems used in UK practices — Zoom, Opalescence, and similar — at a fraction of the cost. When combined with another treatment like veneers or a holiday in Istanbul, whitening in Turkey offers exceptional value.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Whitening Options Available</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "💡 Laser Whitening", desc: "The most powerful in-clinic option. A bleaching gel is applied and activated with a laser or LED light for maximum whitening in 1–2 hours. Results: 6–8 shades whiter.", price: "From £150" },
                    { title: "✨ Zoom Whitening", desc: "The globally recognised professional system. 3 x 15-minute sessions in one appointment using the Philips Zoom light. Clinically proven to whiten up to 8 shades.", price: "From £180" },
                    { title: "🏠 Home Whitening Kit", desc: "Custom-made trays with professional-grade whitening gel for gradual whitening over 10–14 days at home. Great for maintaining in-clinic results.", price: "From £80" },
                    { title: "🌟 Combined Package", desc: "In-clinic whitening session plus a take-home kit for best long-term results. Perfect for pre-veneer whitening or ongoing maintenance.", price: "From £220" },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.desc}</p>
                      <p className="font-bold text-[#1a6b3c] text-sm">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead><tr className="bg-[#1a6b3c] text-white"><th className="px-4 py-3 text-left">Treatment</th><th className="px-4 py-3 text-center">Turkey</th><th className="px-4 py-3 text-center">UK</th><th className="px-4 py-3 text-center">USA</th></tr></thead>
                    <tbody>
                      {[{ t: "Laser Whitening", turkey: "£150–£200", uk: "£400–£600", usa: "$500–$800" }, { t: "Zoom Whitening", turkey: "£180–£250", uk: "£450–£700", usa: "$600–$1,000" }, { t: "Home Whitening Kit", turkey: "£80–£120", uk: "£200–£350", usa: "$300–$500" }].map((row, i) => (
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
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Related Treatments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Hollywood Smile", href: "/treatments/hollywood-smile", desc: "Complete smile makeover" },
                    { label: "Dental Veneers", href: "/treatments/dental-veneers", desc: "Whiter and perfectly shaped teeth" },
                    { label: "Smile Makeover", href: "/treatments/smile-makeover", desc: "Combined treatment plan" },
                    { label: "Whitening Cost Guide", href: "/prices/teeth-whitening-cost", desc: "Full pricing breakdown" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors">
                      <p className="font-semibold text-[#1a1a1a]">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#1a6b3c] text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-3">Book Whitening</h3>
                <p className="text-green-100 text-sm mb-4">Get a brighter smile from just £150. Get your free quote today.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">Get Free Quote</Link>
                <a href="https://wa.me/447911123456" target="_blank" rel="noopener noreferrer" className="block text-center border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1a6b3c] transition-colors">WhatsApp Us</a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
