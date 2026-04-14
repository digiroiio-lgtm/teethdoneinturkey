import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { blogPostingSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "The Complete Guide to Dental Veneers in Turkey (2024) | Teeth Done in Turkey",
  description: "Everything UK patients need to know about getting dental veneers in Turkey: types, costs, procedure, recovery, how to choose a clinic, and what to expect.",
  openGraph: {
    title: "The Complete Guide to Getting Dental Veneers in Turkey (2024)",
    description: "The definitive guide to dental veneers in Turkey for UK patients.",
    url: "https://www.teethdoneinturkey.co.uk/blog/dental-veneers-turkey-guide",
    siteName: "Teeth Done in Turkey",
    type: "article",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/blog/dental-veneers-turkey-guide" },
};

export default function BlogPost2() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: "The Complete Guide to Getting Dental Veneers in Turkey (2024)", description: "Everything UK patients need to know about getting dental veneers in Turkey.", url: "https://www.teethdoneinturkey.co.uk/blog/dental-veneers-turkey-guide", datePublished: "2024-12-01" })) }} />

      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span>Veneers Guide</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Treatment Guide</span>
            <span className="text-green-200 text-sm">December 2024 · 12 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">The Complete Guide to Getting Dental Veneers in Turkey (2024)</h1>
          <p className="text-xl text-green-100">Everything you need to know before booking your veneers in Turkey — from choosing the right type to what happens on the day.</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-[#1a6b3c]/5 border-l-4 border-[#1a6b3c] rounded-r-xl p-5">
            <p className="text-gray-700 font-medium m-0">Turkey is the world capital of dental veneers. Over 500,000 international patients travel to Turkey for dental treatment each year, and veneers are consistently the most popular treatment. In this guide, we cover everything you need to know to make an informed decision.</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Why Turkey for Dental Veneers?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Turkey offers porcelain veneers from around £195 per tooth, compared to £800–£1,200 in the UK. On a full Hollywood Smile of 10 teeth, that is a saving of £6,000–£10,000. Even accounting for flights and accommodation (included in most packages), UK patients save between 60–75% on their veneer treatment.</p>
            <p className="text-gray-700 leading-relaxed mb-4">But the attraction is not just price. Turkey&apos;s top cosmetic dentists are genuinely world-class. Istanbul in particular has attracted enormous investment in dental technology, training, and clinic infrastructure. Clinics use digital smile design software, CEREC same-day crown technology, 3D scanning, and the same premium porcelain materials as the world&apos;s best dental practices.</p>
            <p className="text-gray-700 leading-relaxed">The combination of outstanding results at a fraction of the price, combined with the opportunity to visit one of the world&apos;s most exciting cities, is why dental veneers in Turkey have become so popular with UK patients.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Types of Veneers Available in Turkey</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { type: "Porcelain Veneers", detail: "The gold standard. Custom-made in a dental lab, highly stain-resistant, natural-looking, lasts 10–15+ years. Most popular for permanent results.", price: "£195–£250/tooth" },
                { type: "Composite Veneers", detail: "Applied directly in one appointment. More affordable, easily repaired, but less durable (5–7 years) and more prone to staining.", price: "£120–£180/tooth" },
                { type: "Emax Veneers", detail: "Premium pressed ceramic. Exceptional translucency and aesthetics. Preferred by many top cosmetic dentists for front teeth cases.", price: "£220–£280/tooth" },
                { type: "Zirconia Veneers", detail: "Extremely strong, great for patients with grinding. Less translucent than Emax but highly durable and long-lasting.", price: "£195–£260/tooth" },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{item.type}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.detail}</p>
                  <p className="font-bold text-[#1a6b3c] text-sm">{item.price} in Turkey</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Complete Veneer Procedure in Turkey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A typical veneer treatment in Turkey can be completed in a single trip of 5–7 days. Here is what to expect day by day:</p>
            <div className="space-y-4">
              {[
                { day: "Day 1", title: "Arrival & Initial Consultation", desc: "Your patient coordinator meets you at the airport. Hotel check-in. Afternoon consultation with your dentist: photos, digital scans, shade selection, and digital smile design review. You will see a simulation of your final result before anything is touched." },
                { day: "Day 2", title: "Tooth Preparation", desc: "Under local anaesthetic, a thin layer of enamel (0.3–0.7mm) is gently removed from each tooth. Digital impressions are taken. Temporary veneers are fitted. These are functional and presentable, so you can eat and smile normally." },
                { day: "Days 3–5", title: "Laboratory Fabrication", desc: "Your permanent veneers are handcrafted in the dental laboratory by skilled ceramists. This takes 2–4 business days. You are free to enjoy Istanbul, recover, and relax. Many patients take sightseeing tours during this phase." },
                { day: "Day 5–6", title: "Try-In and Final Fitting", desc: "The permanent veneers arrive. Your dentist places them without adhesive first so you can check the shape and shade in different lighting. Once you and your dentist are satisfied, they are permanently bonded with dental cement. Final polishing. Your new smile is complete." },
                { day: "Day 6–7", title: "Review and Departure", desc: "A brief final check for any adjustments. Your aftercare pack includes specific instructions for the first 24 hours, long-term care advice, and contact details for any questions. Fly home with your stunning new smile." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-10 bg-[#1a6b3c] text-white rounded-lg flex items-center justify-center text-xs font-bold">{item.day}</div>
                  <div><p className="font-bold text-[#1a1a1a]">{item.title}</p><p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">How to Choose the Right Clinic</h2>
            <p className="text-gray-700 leading-relaxed mb-4">With hundreds of dental clinics in Istanbul alone, choosing the right one is critical. Here is our recommended checklist:</p>
            <div className="space-y-2">
              {[
                "Look for JCI accreditation or Turkish Ministry of Health registration",
                "Read Google Reviews, Trustpilot, and dental tourism forums (Dental Departures, WhatClinic)",
                "Check that the dentist specialises in cosmetic dentistry",
                "Ask which porcelain brand they use (Emax, Vita, Ivoclar are premium brands)",
                "Confirm whether they have an in-house lab or outsource (in-house is faster)",
                "Ask to see before-and-after photos of real patient cases",
                "Ensure there is a dedicated English-speaking patient coordinator",
                "Confirm what the guarantee covers and for how long",
                "Check that the package includes accommodation and transfers",
                "Ask about aftercare: what happens if something goes wrong after you return?",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-[#1a6b3c] flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Veneers Cost in Turkey: Full Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                <thead><tr className="bg-[#1a6b3c] text-white"><th className="px-4 py-3 text-left">Type</th><th className="px-4 py-3 text-center">Turkey</th><th className="px-4 py-3 text-center">UK</th><th className="px-4 py-3 text-center">Saving</th></tr></thead>
                <tbody>
                  {[
                    { t: "Composite (per tooth)", turkey: "£120–£180", uk: "£400–£600", saving: "~70%" },
                    { t: "Porcelain (per tooth)", turkey: "£195–£250", uk: "£800–£1,200", saving: "~75%" },
                    { t: "Emax (per tooth)", turkey: "£220–£280", uk: "£900–£1,400", saving: "~76%" },
                    { t: "Hollywood Smile (10 teeth)", turkey: "£2,500–£3,000", uk: "£8,000–£12,000", saving: "~70%" },
                  ].map((row, i) => (
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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Recovery and Aftercare</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Recovery from veneer treatment is generally straightforward. During the tooth preparation phase, you may experience some sensitivity and mild discomfort, which is managed with over-the-counter pain relief. The temporary veneers are functional and you can eat normally, though avoiding very sticky or hard foods is advisable.</p>
            <p className="text-gray-700 leading-relaxed mb-4">After your permanent veneers are fitted, there is a short adjustment period as you get used to the new feel. Most patients report no issues, though some mild sensitivity can persist for 1–2 weeks.</p>
            <p className="text-gray-700 leading-relaxed">Long-term care is straightforward: brush twice daily, floss regularly, use non-abrasive toothpaste, avoid biting very hard objects (ice, hard sweets), and wear a night guard if you grind your teeth. With proper care, porcelain veneers easily last 10–15 years.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Will my veneers look natural?", a: "Yes — modern porcelain veneers are designed to mimic the translucency and texture of natural enamel. Your dentist will use shade guides and digital design to select a colour and shape that suits your face and looks completely natural. The goal is for no one to know you have had work done, unless you tell them." },
                { q: "Are veneers permanent?", a: "Technically yes — the tooth preparation involves removing a thin layer of enamel that cannot be replaced. Once you have veneers, you will always need veneers on those teeth. The veneers themselves are not permanent and will need replacing after 10–15 years, but the process is completely routine." },
                { q: "Can I get veneers on just some teeth?", a: "Absolutely. Many patients get veneers on 4–6 upper front teeth rather than a full Hollywood Smile. Your dentist will ensure the veneers blend naturally with your adjacent natural teeth." },
                { q: "What if I am unhappy with the result?", a: "Reputable clinics offer a review period where adjustments can be made. If there is a genuine quality issue, most clinics offer a guarantee that covers replacement. This is why choosing an accredited clinic with a clear guarantee policy is essential." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="font-bold text-[#1a1a1a] mb-2">Q: {item.q}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dental Veneers Treatment", href: "/treatments/dental-veneers" },
                { label: "Hollywood Smile", href: "/treatments/hollywood-smile" },
                { label: "Dental Crowns", href: "/treatments/dental-crowns" },
                { label: "Veneers Cost Guide", href: "/prices/dental-veneers-cost" },
                { label: "Monthly Payment Plans", href: "/monthly-payment" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors">
                  <p className="font-medium text-[#1a1a1a]">{item.label} &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
