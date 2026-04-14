import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { medicalProcedureSchema, faqPageSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Hollywood Smile in Turkey — Complete Smile Makeover From £2,500",
  description: "Get the Hollywood Smile in Turkey from £2,500 for 10 teeth. Combine veneers, whitening and shaping for a perfect celebrity smile. JCI-accredited clinics.",
  openGraph: {
    title: "Hollywood Smile in Turkey — From £2,500",
    description: "Complete smile makeover combining veneers, whitening and shaping from £2,500.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/hollywood-smile",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/hollywood-smile" },
};

const faqs = [
  { question: "What does a Hollywood Smile include?", answer: "A Hollywood Smile typically includes porcelain veneers on 8–16 upper and lower front teeth, professional teeth whitening, gum contouring if needed, and any necessary preparatory work. Your dentist will design a custom plan using digital smile design software." },
  { question: "How long does a Hollywood Smile take in Turkey?", answer: "The complete treatment is typically completed in one trip of 7–10 days. Day 1–2 is consultation and smile design, Day 3–4 is tooth preparation and temporary veneers, Days 5–8 is lab fabrication, and Day 8–10 is final fitting." },
  { question: "Is a Hollywood Smile painful?", answer: "Treatment is carried out under local anaesthetic so there is no pain during the procedure. Some sensitivity is normal for a few days after preparation, managed easily with over-the-counter medication." },
  { question: "How long does a Hollywood Smile last?", answer: "With proper care, porcelain veneers used in a Hollywood Smile last 10–15 years or more. Avoid biting hard objects, wear a night guard if you grind, and maintain excellent oral hygiene and regular check-ups." },
  { question: "Can I choose the shade of my new smile?", answer: "Absolutely. Using digital smile design software, you can preview different shapes, sizes, and shades before any treatment begins. Your dentist will guide you to choose a shade and shape that looks natural for your face." },
];

export default function HollywoodSmilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema({ name: "Hollywood Smile", description: "Complete smile makeover combining porcelain veneers, teeth whitening, and shaping for a perfect smile.", url: "https://www.teethdoneinturkey.co.uk/treatments/hollywood-smile" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link><span>/</span>
            <span>Hollywood Smile</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hollywood Smile in Turkey<br /><span className="text-[#f5a623]">— Complete Smile Makeover From £2,500</span></h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">The complete smile transformation combining veneers, whitening, and contouring. Get the perfect celebrity smile you have always dreamed of — at a price that makes it possible.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">Get Free Quote</Link>
            <Link href="/prices/hollywood-smile-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: "£2,500", label: "Starting Price (10 teeth)" }, { value: "7–10 days", label: "Treatment Duration" }, { value: "69%", label: "Average Saving vs UK" }, { value: "10–15 yrs", label: "Longevity" }].map((stat) => (
              <div key={stat.label}><p className="text-3xl font-extrabold text-[#1a6b3c]">{stat.value}</p><p className="text-sm text-gray-500 mt-1">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Is a Hollywood Smile?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">A Hollywood Smile is a complete smile makeover that transforms your entire smile using a combination of cosmetic dental treatments. The term comes from the perfect smiles seen on Hollywood actors and celebrities — bright, even, symmetrical, and utterly flawless.</p>
                <p className="text-gray-700 leading-relaxed mb-4">The core of a Hollywood Smile is typically porcelain veneers on the upper front teeth (usually 8–16 teeth), combined with professional teeth whitening for the remaining teeth, and gum contouring to create the perfect gumline. Digital smile design software allows you to preview your exact results before any work begins.</p>
                <p className="text-gray-700 leading-relaxed">Turkey has become the world&apos;s most popular destination for Hollywood Smiles. UK patients typically pay £8,000–£12,000 for the same treatment that costs from £2,500 in Turkey.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What&apos;s Included in a Hollywood Smile Package?</h2>
                <div className="space-y-3">
                  {[
                    { icon: "✨", title: "Porcelain Veneers", desc: "Ultra-thin custom-made porcelain veneers on 8–16 front teeth. Each veneer is individually crafted to create a natural, harmonious smile." },
                    { icon: "💎", title: "Professional Teeth Whitening", desc: "Laser or bleaching whitening treatment for the remaining teeth to ensure a uniform, bright smile throughout." },
                    { icon: "🦷", title: "Gum Contouring (if needed)", desc: "Reshaping the gumline to create perfect symmetry and proportion between your teeth and gums." },
                    { icon: "🎨", title: "Digital Smile Design", desc: "Advanced software simulates your final result before treatment begins, so you can approve the look in advance." },
                    { icon: "📸", title: "Before & After Photography", desc: "Professional photos documenting your transformation — perfect for sharing your incredible results." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <div><p className="font-semibold text-[#1a1a1a]">{item.title}</p><p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Treatment Timeline</h2>
                <div className="space-y-3">
                  {[
                    { day: "Day 1", title: "Arrival & Consultation", desc: "Airport transfer, hotel check-in, initial consultation with digital smile design and shade selection." },
                    { day: "Day 2", title: "Preparation", desc: "Teeth prepared, temporary veneers fitted, impressions sent to the lab." },
                    { day: "Days 3–7", title: "Lab Work", desc: "Custom porcelain veneers crafted by expert technicians. You can explore Istanbul or relax at the hotel." },
                    { day: "Day 7–8", title: "Fitting", desc: "Permanent veneers bonded, whitening completed, final adjustments made. Your new smile is revealed!" },
                    { day: "Day 8–10", title: "Final Check & Departure", desc: "Final review and any minor tweaks. You fly home with your perfect new smile." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-10 bg-[#1a6b3c] text-white rounded-lg flex items-center justify-center text-xs font-bold">{item.day}</div>
                      <div><p className="font-bold text-[#1a1a1a]">{item.title}</p><p className="text-sm text-gray-600">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Hollywood Smile Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead><tr className="bg-[#1a6b3c] text-white"><th className="px-4 py-3 text-left">Package</th><th className="px-4 py-3 text-center">Turkey</th><th className="px-4 py-3 text-center">UK</th><th className="px-4 py-3 text-center">Saving</th></tr></thead>
                    <tbody>
                      {[{ t: "Hollywood Smile (8 teeth)", turkey: "£2,000–£2,400", uk: "£6,400–£9,600", saving: "~70%" }, { t: "Hollywood Smile (10 teeth)", turkey: "£2,500–£3,000", uk: "£8,000–£12,000", saving: "~70%" }, { t: "Full Smile (16 teeth)", turkey: "£3,500–£4,500", uk: "£12,800–£19,200", saving: "~73%" }].map((row, i) => (
                        <tr key={row.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium">{row.t}</td>
                          <td className="px-4 py-3 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.uk}</td>
                          <td className="px-4 py-3 text-center text-[#f5a623] font-bold">{row.saving}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Link href="/prices/hollywood-smile-cost" className="text-[#1a6b3c] font-semibold hover:underline text-sm">→ Full Hollywood Smile price breakdown</Link>
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
                    { label: "Dental Veneers", href: "/treatments/dental-veneers", desc: "The core of every Hollywood Smile" },
                    { label: "Teeth Whitening", href: "/treatments/teeth-whitening", desc: "Complement your new veneers" },
                    { label: "Smile Makeover", href: "/treatments/smile-makeover", desc: "Personalised multi-treatment plan" },
                    { label: "Dental Crowns", href: "/treatments/dental-crowns", desc: "Alternative for damaged teeth" },
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
                <h3 className="text-xl font-bold mb-3">Design Your Dream Smile</h3>
                <p className="text-green-100 text-sm mb-4">Send your photos and get a free personalised Hollywood Smile design and quote.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">Get Free Quote</Link>
                <a href="https://wa.me/447911123456" target="_blank" rel="noopener noreferrer" className="block text-center border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1a6b3c] transition-colors">WhatsApp Us</a>
              </div>
              <div className="bg-[#f5a623]/10 rounded-2xl p-6 border border-[#f5a623]/20">
                <h3 className="font-bold text-[#1a1a1a] mb-2">💰 Hollywood Smile Saving</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Turkey (10 teeth):</span><span className="font-bold text-[#1a6b3c]">~£2,500</span></div>
                  <div className="flex justify-between"><span>UK (10 teeth):</span><span className="font-bold text-gray-500">~£10,000</span></div>
                  <div className="flex justify-between border-t pt-1 mt-1"><span className="font-bold">You save:</span><span className="font-extrabold text-[#f5a623]">~£7,500</span></div>
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
