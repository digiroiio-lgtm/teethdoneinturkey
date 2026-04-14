import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Dental Crowns in Turkey — From £195 Per Crown | Teeth Done in Turkey",
  description: "Get porcelain or zirconia dental crowns in Turkey from £195. Save up to 72% vs UK prices. Protect and restore damaged teeth with durable, natural-looking crowns.",
  openGraph: { title: "Dental Crowns in Turkey — From £195", description: "Dental crowns in Turkey from £195. Save 72% vs UK.", url: "https://www.teethdoneinturkey.co.uk/treatments/dental-crowns", siteName: "Teeth Done in Turkey", type: "website" },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/dental-crowns" },
};

const faqs = [
  { question: "How long do dental crowns last?", answer: "Porcelain-fused-to-metal crowns last 10–15 years, while full porcelain and zirconia crowns can last 15–25 years with proper care. The lifespan depends on oral hygiene, bite forces, and whether you grind your teeth." },
  { question: "Is a dental crown procedure painful?", answer: "The procedure is done under local anaesthetic so you won't feel pain during treatment. Some tenderness and sensitivity is normal for a few days afterwards, which is easily managed with over-the-counter pain relief." },
  { question: "What is the difference between porcelain and zirconia crowns?", answer: "Zirconia crowns are stronger, more durable, and better for back teeth. Full porcelain crowns offer the most natural appearance and are preferred for front teeth. Your dentist will recommend the best material based on the location and function of the tooth." },
  { question: "How many visits to Turkey do I need for a crown?", answer: "A crown can typically be completed in a single trip of 5–7 days. On day 1–2 the tooth is prepared and a temporary crown fitted. On day 3–5 the permanent crown is fabricated in the lab. Day 5–7 it is permanently cemented." },
];

export default function DentalCrownsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link><span>/</span>
            <span>Dental Crowns</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Dental Crowns in Turkey<br /><span className="text-[#f5a623]">— From £195 Per Crown</span></h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">Restore and protect damaged or decayed teeth with beautiful, durable porcelain or zirconia crowns. Get the same quality as the UK at 70% less cost.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">Get Free Quote</Link>
            <Link href="/prices/dental-crowns-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">See Pricing</Link>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Are Dental Crowns?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">A dental crown is a tooth-shaped cap that completely covers a damaged, decayed, or weakened tooth. It restores the tooth to its original shape, size, and function while protecting it from further damage. Crowns are one of the most common restorative dental procedures worldwide.</p>
                <p className="text-gray-700 leading-relaxed mb-4">Modern crowns made from porcelain or zirconia are virtually indistinguishable from natural teeth. They are custom-made in a dental laboratory to match the exact shape and shade of your surrounding teeth.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Crown Types</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "⚪ Full Zirconia", pros: ["Strongest crown available", "Metal-free", "Great for back teeth", "Lasts 15–25 years", "From £195"] },
                    { title: "✨ Porcelain-Fused", pros: ["Most natural appearance", "Good for front teeth", "Tried-and-tested", "Lasts 10–15 years", "From £195"] },
                    { title: "🔩 Porcelain + Metal", pros: ["Very strong", "Cost-effective", "Long track record", "Lasts 10–15 years", "From £150"] },
                    { title: "👑 Emax Ceramic", pros: ["Premium aesthetics", "Highly translucent", "Ideal for front teeth", "Lasts 15+ years", "From £220"] },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                      <ul className="space-y-1 text-sm text-gray-700">{item.pros.map(p => <li key={p}>✓ {p}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead><tr className="bg-[#1a6b3c] text-white"><th className="px-4 py-3 text-left">Crown Type</th><th className="px-4 py-3 text-center">Turkey</th><th className="px-4 py-3 text-center">UK</th><th className="px-4 py-3 text-center">USA</th></tr></thead>
                    <tbody>
                      {[{ t: "Porcelain-fused", turkey: "£150–£195", uk: "£600–£1,000", usa: ",000–,500" }, { t: "Full Zirconia", turkey: "£195–£250", uk: "£700–£1,200", usa: ",200–,000" }, { t: "Emax Ceramic", turkey: "£220–£280", uk: "£800–£1,400", usa: ",500–,500" }].map((row, i) => (
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
                <div className="mt-3"><Link href="/prices/dental-crowns-cost" className="text-[#1a6b3c] font-semibold hover:underline text-sm">→ Full crowns pricing breakdown</Link></div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Related Treatments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[{ label: "Dental Veneers", href: "/treatments/dental-veneers", desc: "For cosmetic improvement" }, { label: "Dental Implants", href: "/treatments/dental-implants", desc: "Crown sits on implant" }, { label: "Hollywood Smile", href: "/treatments/hollywood-smile", desc: "Full smile makeover" }, { label: "Smile Makeover", href: "/treatments/smile-makeover", desc: "Combined treatment plan" }].map((item) => (
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
                <h3 className="text-xl font-bold mb-3">Free Crown Quote</h3>
                <p className="text-green-100 text-sm mb-4">Tell us which teeth need crowns and we will give you an exact price.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">Request Quote</Link>
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
