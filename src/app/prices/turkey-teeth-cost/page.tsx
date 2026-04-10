import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/prices/turkey-teeth-cost" },
  title: "Turkey Teeth Cost – Full UK Price Guide 2026",
  description: "How much do turkey teeth cost? Complete 2026 price guide for veneers, implants, and smile makeovers in Turkey for UK patients. Packages from £2,800. Save up to 90%.",
};

const prices = [
  { treatment: "Zirconia Crown (per tooth)", uk: "£1,000–£1,500", turkey: "£130", saving: "~90%" },
  { treatment: "Porcelain Veneer E-max (per tooth)", uk: "£800–£1,000", turkey: "£190–£250", saving: "75–79%" },
  { treatment: "Hollywood Smile – 20 Zirconia Crowns (package)", uk: "£20,000–£30,000", turkey: "£2,800", saving: "~86%" },
  { treatment: "Hollywood Smile – 24 Zirconia Crowns (package)", uk: "£24,000–£36,000", turkey: "£3,100", saving: "~87%" },
  { treatment: "All-on-6 Package (per arch)", uk: "£15,000–£22,000", turkey: "£5,600", saving: "~70%" },
  { treatment: "Osstem Implant", uk: "£2,000–£3,000", turkey: "£250", saving: "~88%" },
  { treatment: "Straumann Implant", uk: "£3,000–£4,500", turkey: "£800", saving: "~80%" },
  { treatment: "Root Canal Treatment", uk: "£600–£900", turkey: "£200", saving: "~75%" },
  { treatment: "Teeth Whitening (with cleaning)", uk: "£400–£700", turkey: "£250", saving: "~50%" },
  { treatment: "Dental Cleaning", uk: "£100–£200", turkey: "£60", saving: "~60%" },
  { treatment: "Bone Graft", uk: "£400–£800", turkey: "£200", saving: "~65%" },
  { treatment: "Dental Filling", uk: "£150–£300", turkey: "£70", saving: "~65%" },
];

const faqs = [
  {
    q: "What does 'turkey teeth' actually cost?",
    a: "The term 'turkey teeth' typically refers to a full set of crowns or veneers. In Turkey, a Hollywood Smile package with 20 zirconia crowns costs £2,800 all-inclusive (hotel + transfers) — versus £20,000–£30,000 at a UK private practice.",
  },
  {
    q: "Is turkey teeth cost worth it?",
    a: "For the vast majority of UK patients, yes. The savings range from £10,000 to £35,000 depending on the treatment. The materials, brands, and clinical standards at accredited Turkish clinics are equivalent to those used in the UK.",
  },
  {
    q: "What's included in turkey teeth prices?",
    a: "Package prices include the full dental procedure, hotel accommodation, and VIP transfers. Individual treatment prices cover the procedure itself. Flights are separate in all cases.",
  },
  {
    q: "Can I pay monthly for turkey teeth?",
    a: "Yes. Our monthly payment plans allow you to spread the cost over 12, 24, or 36 months, with rates from £82/month depending on your treatment.",
  },
  {
    q: "How long does turkey teeth treatment take?",
    a: "Crowns and veneers are typically completed in a 5-day trip. Implants require two trips — around 3 days for placement, then 5 days for the final prosthesis after 3–6 months of healing.",
  },
];

export default function TurkeyTeethCostPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Turkey Teeth Cost – 2026 Price Guide</h1>
          <p className="text-xl text-blue-200">How much do veneers, implants and smile makeovers really cost in Turkey?</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;Turkey teeth&rdquo; has become shorthand for getting dental work done in Turkey — typically crowns, veneers, implants, or a full smile makeover. UK patients are saving <strong>70–90%</strong> on the same treatments, performed by highly qualified dentists using the same premium materials. This guide gives you a clear, honest breakdown of what everything costs.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Popular Treatment Packages</h2>
            <p className="text-gray-500 text-sm mb-6">All-inclusive with hotel, transfers &amp; everything arranged.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
              {[
                { name: "All-on-6 Package", price: "£5,600", desc: "Osstem implants, 8 nights hotel, VIP transfers, temps & final arch.", href: "/prices/all-on-6-dental-implants-turkey-package", badge: "Most Popular" },
                { name: "Hollywood Smile 24 Crowns", price: "£3,100", desc: "24 zirconia crowns, 5 nights hotel, VIP transfers, digital smile design.", href: "/prices/hollywood-smile-turkey-package", badge: "Best Value" },
                { name: "Hollywood Smile 20 Crowns", price: "£2,800", desc: "20 zirconia crowns, 5 nights hotel, VIP transfers, smile design.", href: "/prices/hollywood-smile-turkey-package", badge: null },
              ].map(pkg => (
                <div key={pkg.name} className="rounded-2xl border-2 border-[#1e40af] bg-blue-50 p-5 shadow-sm">
                  {pkg.badge && <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">{pkg.badge}</div>}
                  <h3 className="font-extrabold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-2xl font-extrabold text-[#1e40af] mb-2">{pkg.price}</p>
                  <p className="text-xs text-gray-600 mb-4">{pkg.desc}</p>
                  <Link href={pkg.href} className="block text-center bg-[#1e40af] text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">View Package →</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Price table */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Turkey Teeth Price Guide: UK vs Turkey</h2>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Treatment</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row, i) => (
                    <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {row.saving}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">Package prices include hotel and transfers. Individual treatment prices cover the procedure only. Flights are always separate.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are &ldquo;Turkey Teeth&rdquo;?</h2>
            <p className="text-gray-600 mb-4">
              The phrase &ldquo;turkey teeth&rdquo; originated as a somewhat tongue-in-cheek description of UK patients returning from Turkey with dramatically white, uniform veneers or crowns. It has since evolved into a broad term for any dental treatment in Turkey.
            </p>
            <p className="text-gray-600 mb-4">
              Today, the treatments UK patients most commonly seek in Turkey are:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              {[
                "Zirconia crowns — strong, natural-looking full-tooth restorations",
                "Porcelain veneers — E-max shells bonded to the front of teeth",
                "Dental implants — permanent titanium tooth replacements",
                "All-on-4 / All-on-6 — full arch restoration on 4 or 6 implants",
                "Hollywood Smile — full set of crowns with Digital Smile Design",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Are Turkey Teeth Cheaper?</h2>
            <p className="text-gray-600 mb-4">
              The cost difference is not due to inferior materials or less qualified dentists — it reflects Turkey&apos;s significantly lower costs of living, labour, and business operation. Turkish dentists use the same implant brands (Straumann, Osstem), the same ceramic materials, and the same digital equipment as leading UK practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "💰", title: "Lower Overheads", desc: "Clinic rent, staff salaries, and utilities cost significantly less in Turkey than in the UK." },
                { icon: "🏥", title: "Same Materials", desc: "Straumann implants, zirconia crowns — identical brands to UK premium practices." },
                { icon: "🎓", title: "Qualified Dentists", desc: "Many Turkish dentists have postgraduate training from Germany, Italy, or the USA." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Cost Guides by Treatment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "All-on-6 Package", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "£5,600 all-inclusive. Full package breakdown." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 zirconia crowns from £2,800." },
                { title: "All Treatments Cost Guide", href: "/prices/teeth-done-in-turkey-cost", desc: "Full comparison table across all procedures." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-5 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">View guide →</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pay Monthly for Turkey Teeth</h2>
            <p className="text-gray-600 mb-4">
              You don&apos;t need to pay everything upfront. Our monthly payment plans allow you to spread the cost of your treatment over 12, 24, or 36 months, with no upfront fees.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {[
                { treatment: "20 Crowns", perMonth: "£78/mo", term: "36 months" },
                { treatment: "24 Crowns", perMonth: "£86/mo", term: "36 months" },
                { treatment: "All-on-6", perMonth: "£156/mo", term: "36 months" },
                { treatment: "Single Implant", perMonth: "£14/mo", term: "36 months" },
              ].map(item => (
                <div key={item.treatment} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{item.treatment}</p>
                  <p className="text-xl font-extrabold text-[#1e40af]">{item.perMonth}</p>
                  <p className="text-xs text-gray-400">{item.term}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all monthly payment options</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
            <Link href="/treatments/veneers-turkey" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Veneers Turkey Guide</Link>
            <Link href="/treatments/dental-implants-turkey" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Implants Turkey Guide</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Personal Turkey Teeth Quote"
        subtitle="Send us your photos and we'll prepare a full treatment plan and all-inclusive cost estimate within 24 hours — free, no obligation."
        buttonText="Request Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}

const prices = [
  { treatment: "Porcelain Veneer (E-max, per tooth)", uk: "£800–£1,000", turkey: "£190–£250", saving: "75–79%" },
  { treatment: "Zirconia Veneer (per tooth)", uk: "£900–£1,200", turkey: "£220–£280", saving: "74–77%" },
  { treatment: "Full Set Veneers (20 E-max)", uk: "£16,000–£20,000", turkey: "£3,800–£5,000", saving: "75–79%" },
  { treatment: "Hollywood Smile (20 veneers + DSD)", uk: "£18,000–£22,000", turkey: "£4,000–£5,200", saving: "74–78%" },
  { treatment: "Single Dental Implant (implant + crown)", uk: "£2,000–£3,000", turkey: "£420–£600", saving: "78–82%" },
  { treatment: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "£4,000–£5,500", saving: "67–72%" },
  { treatment: "All-on-6 (per arch)", uk: "£15,000–£22,000", turkey: "£5,000–£7,000", saving: "66–71%" },
  { treatment: "Full Mouth Reconstruction (2 arches)", uk: "£25,000–£44,000", turkey: "£9,000–£14,000", saving: "64–72%" },
  { treatment: "Zirconia Crown (per tooth)", uk: "£1,000–£1,500", turkey: "£220–£280", saving: "77–81%" },
  { treatment: "Composite Bonding (per tooth)", uk: "£300–£500", turkey: "£70–£120", saving: "73–78%" },
  { treatment: "Teeth Whitening (laser)", uk: "£400–£700", turkey: "£100–£150", saving: "75–79%" },
  { treatment: "Gum Contouring", uk: "£500–£800", turkey: "£100–£200", saving: "75–80%" },
];

const faqs = [
  {
    q: "What does 'turkey teeth' actually cost?",
    a: "The term 'turkey teeth' typically refers to a full set of veneers. In Turkey, 20 E-max porcelain veneers cost £3,800–£5,000 all-inclusive — versus £16,000–£20,000 at a UK private practice.",
  },
  {
    q: "Is turkey teeth cost worth it?",
    a: "For the vast majority of UK patients, yes. The savings range from £10,000 to £35,000 depending on the treatment. The materials, brands, and clinical standards at accredited Turkish clinics are equivalent to those used in the UK.",
  },
  {
    q: "What's included in turkey teeth prices?",
    a: "Reputable clinics include the full procedure, anaesthetic, temporary restorations, and the permanent result. Flights and accommodation are separate. Most clinics also include a written guarantee of 5–10 years.",
  },
  {
    q: "Can I pay monthly for turkey teeth?",
    a: "Yes. Our monthly payment plans allow you to spread the cost over 12, 24, or 36 months, with rates from £82/month depending on your treatment.",
  },
  {
    q: "How long does turkey teeth treatment take?",
    a: "Veneers are typically completed in a 5-day trip. Implants require two trips — 4–5 days for placement, then 3 days for the crown after 3–6 months of healing.",
  },
];

export default function TurkeyTeethCostPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Turkey Teeth Cost – 2026 Price Guide</h1>
          <p className="text-xl text-blue-200">How much do veneers, implants and smile makeovers really cost in Turkey?</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;Turkey teeth&rdquo; has become shorthand for getting dental work done in Turkey — typically veneers, implants, or a full smile makeover. UK patients are saving <strong>65–82%</strong> on the same treatments, performed by highly qualified dentists using the same premium materials. This guide gives you a clear, honest breakdown of what everything costs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Turkey Teeth Price Guide: UK vs Turkey</h2>
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Treatment</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row, i) => (
                    <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {row.saving}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">Prices are indicative. Your personal quote is based on a clinical assessment of your photos and dental records.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are &ldquo;Turkey Teeth&rdquo;?</h2>
            <p className="text-gray-600 mb-4">
              The phrase &ldquo;turkey teeth&rdquo; originated as a somewhat tongue-in-cheek description of UK patients returning from Turkey with dramatically white, uniform veneers — particularly in the early days of dental tourism. It has since evolved into a broad term for any dental treatment in Turkey.
            </p>
            <p className="text-gray-600 mb-4">
              Today, the treatments UK patients most commonly seek in Turkey are:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              {[
                "Porcelain veneers — E-max or zirconia shells bonded to the front of teeth",
                "Dental implants — permanent titanium tooth replacements",
                "All-on-4 / All-on-6 — full arch restoration on 4 or 6 implants",
                "Hollywood Smile — full set of veneers with Digital Smile Design",
                "Full mouth reconstruction — a combination of crowns, implants, and veneers",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Are Turkey Teeth Cheaper?</h2>
            <p className="text-gray-600 mb-4">
              The cost difference is not due to inferior materials or less qualified dentists — it reflects Turkey&apos;s significantly lower costs of living, labour, and business operation. Turkish dentists use the same implant brands (Straumann, Nobel Biocare), the same veneer ceramics (Ivoclar E-max), and the same digital equipment (CBCT scanners, CAD/CAM milling) as leading UK practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "💰", title: "Lower Overheads", desc: "Clinic rent, staff salaries, and utilities cost significantly less in Turkey than in the UK." },
                { icon: "🏥", title: "Same Materials", desc: "Straumann implants, Ivoclar E-max veneers — identical to UK premium practices." },
                { icon: "🎓", title: "Qualified Dentists", desc: "Many Turkish dentists have postgraduate training from Germany, Italy, or the USA." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Cost Guides by Treatment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Veneers Turkey Cost", href: "/prices/veneers-turkey-cost", desc: "E-max from £190/tooth. Full set breakdowns." },
                { title: "Dental Implants Turkey Cost", href: "/prices/dental-implants-turkey-cost", desc: "Single implants from £450. All-on-4 from £4,500." },
                { title: "All Treatments Cost Guide", href: "/prices/teeth-done-in-turkey-cost", desc: "Full comparison table across all procedures." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-5 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">View guide →</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pay Monthly for Turkey Teeth</h2>
            <p className="text-gray-600 mb-4">
              You don&apos;t need to pay everything upfront. Our monthly payment plans allow you to spread the cost of your treatment over 12, 24, or 36 months, with no upfront fees.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {[
                { treatment: "16 Veneers", perMonth: "£80/mo", term: "36 months" },
                { treatment: "20 Veneers", perMonth: "£106/mo", term: "36 months" },
                { treatment: "Single Implant", perMonth: "£14/mo", term: "36 months" },
                { treatment: "All-on-4", perMonth: "£125/mo", term: "36 months" },
              ].map(item => (
                <div key={item.treatment} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{item.treatment}</p>
                  <p className="text-xl font-extrabold text-[#1e40af]">{item.perMonth}</p>
                  <p className="text-xs text-gray-400">{item.term}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all monthly payment options</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
            <Link href="/treatments/veneers-turkey" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Veneers Turkey Guide</Link>
            <Link href="/treatments/dental-implants-turkey" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Implants Turkey Guide</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Personal Turkey Teeth Quote"
        subtitle="Send us your photos and we'll prepare a full treatment plan and all-inclusive cost estimate within 24 hours — free, no obligation."
        buttonText="Request Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
