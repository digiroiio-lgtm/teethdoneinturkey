import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/prices/hollywood-smile-turkey-package" },
  title: "Hollywood Smile Turkey Package – Zirconia Crowns from £2,800",
  description: "Hollywood Smile Turkey packages with zirconia crowns. 24 crowns £3,100 or 20 crowns £2,800 — all-inclusive with hotel and VIP transfers. Digital smile design included.",
};

const packages = [
  {
    name: "24 Zirconia Crowns",
    subtitle: "Perfect for a full smile transformation",
    price: "£3,100",
    highlight: true,
    badge: "Best Value",
    includes: [
      "24 zirconia crowns",
      "5 nights hotel accommodation",
      "VIP airport transfers",
      "Digital smile design",
      "Professional teeth cleaning",
    ],
  },
  {
    name: "20 Zirconia Crowns",
    subtitle: "Ideal for upper smile enhancement",
    price: "£2,800",
    highlight: false,
    badge: null,
    includes: [
      "20 zirconia crowns",
      "5 nights hotel accommodation",
      "VIP airport transfers",
      "Smile design consultation",
    ],
  },
];

export default function HollywoodSmilePackagePage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hollywood Smile Turkey Packages</h1>
          <p className="text-xl text-blue-200">Zirconia crown packages with hotel, transfers &amp; digital smile design included</p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <p className="text-blue-200 text-xs">24 Zirconia Crowns</p>
              <p className="text-3xl font-extrabold text-yellow-400">£3,100</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <p className="text-blue-200 text-xs">20 Zirconia Crowns</p>
              <p className="text-3xl font-extrabold text-yellow-400">£2,800</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Package cards */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hollywood Smile Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map(pkg => (
                <div key={pkg.name} className={`rounded-2xl border-2 p-7 shadow-sm ${pkg.highlight ? "border-[#1e40af] bg-blue-50" : "border-gray-200 bg-white"}`}>
                  {pkg.badge && (
                    <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">{pkg.badge}</div>
                  )}
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pkg.subtitle}</p>
                  <div className="text-3xl font-extrabold text-[#1e40af] mb-5">{pkg.price}</div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Package includes:</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-green-500 mt-0.5 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book-consultation" className={`block text-center px-6 py-3 rounded-xl font-bold transition-colors ${pkg.highlight ? "bg-[#1e40af] text-white hover:bg-blue-700" : "border-2 border-[#1e40af] text-[#1e40af] hover:bg-blue-50"}`}>
                    Get My Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* What is Hollywood Smile */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Hollywood Smile?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A Hollywood Smile is a full cosmetic dental makeover using zirconia crowns or porcelain veneers to create a perfectly uniform, brilliantly white smile. Rather than masking the surface (as veneers do), zirconia crowns cap the entire tooth — making them ideal for teeth that are damaged, discoloured, or heavily restored.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our packages use digital smile design technology to preview your new smile before a single tooth is touched, and include all accommodation and transfers so you can focus entirely on your transformation.
            </p>
          </div>

          {/* Zirconia vs E-max */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Zirconia Crowns?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "💎", title: "Exceptional strength", desc: "Zirconia is one of the strongest dental materials available — chip and fracture resistant." },
                { icon: "✨", title: "Natural-looking", desc: "Modern zirconia is highly translucent, mimicking the natural gradient of real teeth." },
                { icon: "🛡️", title: "Long-lasting", desc: "With proper care, zirconia crowns can last 15–20+ years." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UK vs Turkey */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hollywood Smile Turkey vs UK Price Comparison</h2>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Package</th>
                    <th className="px-4 py-3 text-right">UK Estimate</th>
                    <th className="px-4 py-3 text-right">Turkey Package</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "24 Zirconia Crowns + hotel + transfers", uk: "£24,000–£36,000", turkey: "£3,100", saving: "~88%" },
                    { item: "20 Zirconia Crowns + hotel + transfers", uk: "£20,000–£30,000", turkey: "£2,800", saving: "~87%" },
                    { item: "Per crown (individual)", uk: "£1,000–£1,500", turkey: "£130", saving: "~90%" },
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
            <p className="text-xs text-gray-500 mt-3">UK prices are indicative. Turkey package prices include accommodation and transfers as listed above.</p>
          </div>

          {/* Treatment journey */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Hollywood Smile Journey</h2>
            <ol className="space-y-4">
              {[
                { step: "1", title: "Digital smile preview", desc: "Before you travel, our dentist designs your new smile digitally. You see exactly how your finished result will look — and approve it." },
                { step: "2", title: "Arrive in Turkey – Day 1", desc: "VIP transfer from airport to your hotel. Full consultation and clinical assessment at the clinic." },
                { step: "3", title: "Preparation & temporaries – Days 2–3", desc: "Teeth are prepared, impressions taken, and temporary crowns fitted so you always leave looking great." },
                { step: "4", title: "Final fitting – Days 4–5", desc: "Your permanent zirconia crowns are bonded, adjusted, and polished. You fly home with your Hollywood Smile." },
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
                { q: "What is the difference between 24 and 20 crown packages?", a: "The 24-crown package covers all visible upper and lower teeth, giving a complete transformation of your entire smile. The 20-crown package focuses on the upper arch and front lower teeth — perfect if your lower teeth are less of a concern." },
                { q: "Are the crowns porcelain or full zirconia?", a: "Both packages use full-contour zirconia crowns, which are stronger and more lifelike than older porcelain-fused-to-metal crowns. No dark metal lines at the gumline." },
                { q: "Does the price include flights?", a: "Flights are not included — you book these yourself. We arrange your hotel and all transfers. Return flights from the UK to Antalya typically cost £100–£250." },
                { q: "Can I add teeth whitening to the package?", a: "Professional cleaning is included in the 24-crown package. For whitening of any remaining natural teeth, this can be added for £250." },
                { q: "Is there a guarantee?", a: "Yes. All crown work is covered by a written guarantee from your treating dentist. Contact our UK team if you have any concerns after your return." },
              ].map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">All-on-6 Package</Link>
            <Link href="/treatments/veneers-turkey" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Veneers vs Crowns Guide</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Design Your Hollywood Smile Today"
        subtitle="Book a free consultation and get your personalised smile preview within 48 hours — free, no obligation."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
