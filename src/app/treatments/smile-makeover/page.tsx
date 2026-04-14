import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Smile Makeover in Turkey — Personalised Transformation",
  description: "A personalised smile makeover in Turkey combining multiple treatments for your perfect result. Veneers, implants, crowns, whitening and more — all in one trip.",
  openGraph: {
    title: "Smile Makeover in Turkey — Personalised Transformation",
    description: "Combine multiple treatments for your perfect smile transformation in Turkey.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/smile-makeover",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/smile-makeover" },
};

const faqs = [
  { question: "What is a smile makeover?", answer: "A smile makeover is a personalised combination of dental treatments designed to address all of your smile concerns in one comprehensive plan. Unlike a Hollywood Smile (which focuses on veneers), a smile makeover may include implants, crowns, whitening, gum treatment, and more, tailored exactly to your needs." },
  { question: "How much does a smile makeover cost in Turkey?", answer: "Because a smile makeover is personalised, the cost depends on which treatments are included. A simple makeover might cost from £500–£1,000, while a comprehensive full mouth restoration could range from £5,000–£15,000. All packages represent savings of 60–75% vs UK equivalent costs." },
  { question: "Can I have everything done in one trip?", answer: "Many smile makeover treatments can be completed in a single trip of 7–14 days. Some procedures like implants require a second visit after the healing period. Your treatment coordinator will work out the most efficient schedule for your specific plan." },
  { question: "What treatments can be included in a smile makeover?", answer: "Any combination of: dental veneers, crowns, implants, teeth whitening, composite bonding, gum contouring, Invisalign or clear aligners, dentures, bridges, and more. The plan is entirely based on your goals and dental needs." },
];

export default function SmileMakeoverPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link><span>/</span>
            <span>Smile Makeover</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Smile Makeover in Turkey<br />
            <span className="text-[#f5a623]">— Personalised Transformation</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Your smile is unique — so is our approach. A personalised smile makeover combines the exact treatments you need to achieve the results you want, at a price that makes transformation possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">Design My Smile</Link>
            <a href="https://wa.me/447911123456" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">WhatsApp for Quote</a>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Is a Smile Makeover?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A smile makeover is a comprehensive, fully personalised treatment plan that combines two or more cosmetic and restorative dental procedures to transform your smile. Unlike a standard Hollywood Smile (which typically means veneers on front teeth), a smile makeover is designed around your specific concerns, dental history, and aesthetic goals.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your plan might include dental implants for missing teeth, crowns to restore damaged teeth, veneers for cosmetic improvement, whitening for overall brightness, and gum contouring for perfect symmetry. Everything is coordinated and carried out by a team of specialists.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Turkey&apos;s all-inclusive dental packages make smile makeovers remarkably accessible. What might cost £15,000–£30,000 in the UK can often be achieved for £4,000–£10,000 in Turkey, including accommodation and transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Planning Process</h2>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Send Photos & X-rays", desc: "Share photos of your teeth and any available X-rays. Tell us your concerns and what you'd like to achieve." },
                    { step: "2", title: "Expert Assessment", desc: "Our dental team assesses your photos and creates a preliminary treatment plan with costs for each component." },
                    { step: "3", title: "Digital Smile Design", desc: "On arrival, your dentist uses digital smile design software to show you exactly how your finished smile will look before any work begins." },
                    { step: "4", title: "Phased Treatment", desc: "Treatment is carried out in the most logical order — typically health before cosmetics, extraction and implant placement before crowns, etc." },
                    { step: "5", title: "Review & Aftercare", desc: "Once complete, you receive a full aftercare plan and can return for any follow-up adjustments, or receive ongoing support remotely." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="w-8 h-8 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-[#1a1a1a]">{item.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Common Smile Makeover Combinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Full Cosmetic Makeover", items: ["8–10 porcelain veneers", "Laser teeth whitening", "Gum contouring"], price: "From £2,500" },
                    { title: "Restoration + Cosmetics", items: ["2–4 implants for missing teeth", "Crowns on damaged teeth", "Veneers on front teeth"], price: "From £3,500" },
                    { title: "Full Mouth Restoration", items: ["All-on-4 implants", "Opposing arch veneers/crowns", "Whitening"], price: "From £5,500" },
                    { title: "Minor Makeover", items: ["Composite bonding", "Laser whitening", "Gum reshaping"], price: "From £500" },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                      <ul className="space-y-1 text-sm text-gray-700 mb-3">{item.items.map(i => <li key={i}>✓ {i}</li>)}</ul>
                      <p className="font-bold text-[#1a6b3c] text-sm">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Explore Treatments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Dental Veneers", href: "/treatments/dental-veneers", desc: "The core cosmetic treatment" },
                    { label: "Dental Implants", href: "/treatments/dental-implants", desc: "Replace missing teeth permanently" },
                    { label: "Hollywood Smile", href: "/treatments/hollywood-smile", desc: "Complete veneer-based makeover" },
                    { label: "All-on-4 Implants", href: "/treatments/all-on-4-implants", desc: "Full arch restoration" },
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
                <h3 className="text-xl font-bold mb-3">Free Smile Design</h3>
                <p className="text-green-100 text-sm mb-4">Send us your photos and we will design your personalised smile makeover plan — completely free.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">Get Free Plan</Link>
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
