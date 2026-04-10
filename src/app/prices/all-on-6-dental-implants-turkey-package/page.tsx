import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/prices/all-on-6-dental-implants-turkey-package" },
  title: "All-on-6 Dental Implants Turkey Package – £5,600 All-Inclusive",
  description: "All-on-6 dental implants Turkey package from £5,600. Includes Osstem implants, hotel, VIP transfers, temporary and final teeth. Full UK vs Turkey price breakdown.",
};

export default function AllOn6PackagePage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Most Popular</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All-on-6 Dental Implants Turkey Package</h1>
          <p className="text-xl text-blue-200">Complete full-arch restoration with hotel, transfers &amp; everything included</p>
          <div className="mt-6 text-4xl font-extrabold text-yellow-400">£5,600</div>
          <p className="text-blue-300 text-sm mt-1">All-inclusive package price per arch</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package card */}
            <div className="bg-blue-50 rounded-2xl border-2 border-[#1e40af] p-7 shadow-sm">
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">All-on-6 Implants Package</h2>
              <p className="text-gray-500 text-sm mb-4">Complete full-arch restoration using high-quality implants</p>
              <div className="text-3xl font-extrabold text-[#1e40af] mb-5">£5,600</div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Package includes:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {[
                  "Osstem implants (internationally certified)",
                  "First visit: 3 nights hotel stay",
                  "Second visit: 5 nights hotel stay",
                  "VIP airport & clinic transfers",
                  "Temporary teeth during healing",
                  "Final fixed prosthesis",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-green-500 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-5">
                <p className="text-sm font-semibold text-yellow-800 mb-1">Optional upgrade</p>
                <p className="text-sm text-yellow-700">Titanium bar reinforcement (recommended for durability)</p>
                <p className="text-lg font-extrabold text-yellow-800 mt-1">+£1,500</p>
              </div>
              <Link href="/book-consultation" className="block text-center bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Get My Free Quote
              </Link>
            </div>

            {/* Why All-on-6 */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose All-on-6?</h2>
                <p className="text-gray-600 text-sm leading-relaxed">All-on-6 uses six implants per arch to support a full set of fixed teeth. The additional implants (vs All-on-4) provide greater stability, better load distribution, and are recommended for patients with good bone volume.</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  { icon: "🦷", title: "6 implants per arch", desc: "More support and stability than All-on-4." },
                  { icon: "🏨", title: "Hotel included", desc: "3 nights on your first visit, 5 nights on your second." },
                  { icon: "🚐", title: "VIP transfers", desc: "Airport, hotel, and clinic transfers throughout your stay." },
                  { icon: "😁", title: "Temporary teeth", desc: "You fly home with a full smile on day one." },
                  { icon: "✅", title: "Final fixed prosthesis", desc: "Permanent teeth fitted on your second visit." },
                ].map(item => (
                  <li key={item.title} className="flex gap-3 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title} — </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* UK vs Turkey comparison */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All-on-6 Turkey vs UK Price Comparison</h2>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">What&apos;s included</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Package</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "All-on-6 (implants + prosthesis)", uk: "£15,000–£22,000", turkey: "£5,600", saving: "~70%" },
                    { item: "Hotel accommodation (8 nights)", uk: "£800–£1,200", turkey: "Included", saving: "100%" },
                    { item: "Airport & clinic transfers", uk: "£200–£400", turkey: "Included", saving: "100%" },
                    { item: "Temporary prosthesis", uk: "£500–£1,000", turkey: "Included", saving: "100%" },
                  ].map((r, i) => (
                    <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.item}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.saving}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Treatment journey */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your All-on-6 Treatment Journey</h2>
            <ol className="space-y-4">
              {[
                { step: "1", title: "Free consultation & quote", desc: "Send us your photos or dental records. We prepare a personalised treatment plan and all-inclusive quote within 24 hours." },
                { step: "2", title: "First visit – 3 nights", desc: "Arrive in Turkey. CBCT scan, consultation, implant placement surgery. Temporary teeth fitted — you fly home with a full smile." },
                { step: "3", title: "Healing period – 3–6 months", desc: "Osstem implants fuse with your jawbone (osseointegration). You carry on normally with your temporary teeth." },
                { step: "4", title: "Second visit – 5 nights", desc: "Final fixed prosthesis is fitted, adjusted, and polished to perfection. You return home with your permanent new smile." },
              ].map(item => (
                <li key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-extrabold text-sm">{item.step}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What implant brand is used in the All-on-6 package?", a: "The standard package uses Osstem implants — one of the world's largest implant manufacturers, widely used across Europe and clinically proven over decades. An upgrade to Medentika (Straumann Group) or Straumann implants is available." },
                { q: "Is the titanium bar upgrade worth it?", a: "For most patients, we recommend the titanium bar reinforcement (+£1,500). It significantly improves the durability and rigidity of your final prosthesis, especially for patients with a strong bite or those who grind their teeth." },
                { q: "Can I get All-on-6 on finance?", a: "Yes. We offer monthly payment plans to spread the cost over 12, 24, or 36 months. Contact us to see your options." },
                { q: "What if something goes wrong after I return home?", a: "Our UK team provides ongoing aftercare support, and your Turkish clinic is available via WhatsApp and video call. All work is covered by a written guarantee." },
                { q: "Is the hotel in Antalya or Istanbul?", a: "Our partner clinics are based in Antalya. Hotel and transfer arrangements are co-ordinated for you as part of the package." },
              ].map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/treatments/all-on-6-turkey" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">All-on-6 Treatment Guide</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Hollywood Smile Packages</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Smile?"
        subtitle="Book a free consultation and get your all-inclusive All-on-6 quote within 24 hours."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
