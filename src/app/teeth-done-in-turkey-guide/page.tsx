import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/teeth-done-in-turkey-guide" },
  title: "Turkey Dental Guide for UK Patients",
  description: "The complete guide to getting teeth done in Turkey for UK patients. Costs, safety, clinics, veneers, implants, travel tips and monthly payment options. Save up to 70%.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teeth Done in Turkey – Complete Guide for UK Patients",
  description: "Everything UK patients need to know about dental treatment in Turkey: costs, safety, clinics, procedures, and how to book.",
  author: { "@type": "Organization", name: "Teeth Done in Turkey" },
  publisher: { "@type": "Organization", name: "Teeth Done in Turkey", url: "https://teethdoneinturkey.co.uk" },
  mainEntityOfPage: "https://teethdoneinturkey.co.uk/teeth-done-in-turkey-guide",
};

const faqs = [
  { question: "Is it worth getting teeth done in Turkey?", answer: "For most UK patients, yes. You save 70–80% on dental costs while receiving the same brand materials and highly skilled dentists. The savings on a full smile makeover alone can exceed £15,000." },
  { question: "How much can I save getting teeth done in Turkey?", answer: "The average UK patient saves between £3,000 and £15,000 depending on the treatment. Veneers cost from £190/tooth in Turkey vs £900+ in the UK. Implants from £250 vs £2,500 in the UK." },
  { question: "How do I choose a safe clinic in Turkey?", answer: "Look for JCI accreditation or Turkish Ministry of Health certification, verified reviews on Google or Trustpilot, confirmed brand-name materials (Straumann, Nobel Biocare, Ivoclar E-max), and a written guarantee." },
  { question: "Do I need multiple trips to Turkey for dental treatment?", answer: "For veneers: typically one trip of 5–7 days. For implants: two trips (implant placement, then crown fitting 3–6 months later). All-on-4/6: one trip of 5–7 days for the initial phase." },
  { question: "Can I get a free consultation before committing?", answer: "Yes. We offer a free, no-obligation consultation. Share your photos and dental goals and we'll provide a personalised treatment plan and cost estimate within 24 hours." },
];

export default function TeethDoneInTurkeyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-[#1e40af] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Complete UK Patient Guide</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Teeth Done in Turkey – Complete Guide for UK Patients
          </h1>
          <p className="text-xl text-blue-200 mb-6 max-w-3xl">
            Everything you need to know before booking dental treatment in Turkey — costs, safety, clinics, treatments, travel, and finance options.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Book Free Consultation
            </Link>
            <Link href="/prices/teeth-done-in-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              See Price Guide
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-y border-blue-200 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-blue-800 font-medium">
          <span>✓ JCI-Accredited Clinics</span>
          <span>✓ Save Up to 70%</span>
          <span>✓ English-Speaking Dentists</span>
          <span>✓ 10-Year Guarantee</span>
          <span>✓ Monthly Payment Available</span>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <nav className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Contents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                ["#why-turkey", "Why Choose Turkey?"],
                ["#cost-comparison", "Cost Comparison: UK vs Turkey"],
                ["#treatments", "Treatments Available"],
                ["#safety", "Is It Safe?"],
                ["#how-to-choose", "How to Choose a Clinic"],
                ["#travel", "Planning Your Trip"],
                ["#finance", "Payment & Finance Options"],
                ["#process", "Step-by-Step Process"],
              ].map(([href, label]) => (
                <a key={href as string} href={href as string} className="text-[#1e40af] hover:underline flex items-center gap-1">
                  <span>→</span> {label}
                </a>
              ))}
            </div>
          </nav>

          <section id="why-turkey">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Do UK Patients Choose Turkey for Dental Treatment?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Turkey has become the world&apos;s number one dental tourism destination for UK patients — and for good reason. Over 500,000 international patients travel to Turkey for dental work each year, drawn by a combination of world-class quality and dramatically lower prices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The savings are substantial: dental treatment in Turkey costs 60–80% less than in the UK, while the quality of care — the brands of materials used, the technology in the clinics, and the expertise of the dentists — is genuinely equivalent to the best private practices in London or Manchester.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💰", title: "Save Up to 70–90%", desc: "Veneers from £190/tooth. Implants from £250. Full smile makeovers from £2,800." },
                { icon: "🏥", title: "World-Class Clinics", desc: "JCI-accredited clinics with digital dentistry, same-day labs, and state-of-the-art equipment." },
                { icon: "🦷", title: "Same Brand Materials", desc: "Ivoclar E-max veneers, Straumann implants, Nobel Biocare — same as top UK practices." },
                { icon: "🌍", title: "Expert Dentists", desc: "Many Turkish dentists trained in Europe or the USA with specialist aesthetic certifications." },
                { icon: "🗓️", title: "No Waiting Lists", desc: "Appointments within days. Compare to months or years on UK NHS waiting lists." },
                { icon: "💳", title: "Monthly Payment", desc: "Spread costs from £82/month over 12, 24, or 36 months. 0% options available." },
              ].map(item => (
                <div key={item.title} className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="cost-comparison">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Treatment Cost: UK vs Turkey</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The cost difference between UK and Turkish dental treatment is dramatic — and fully explained by Turkey&apos;s lower operating costs, not any difference in material or skill quality.
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-md mb-6">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Treatment</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Single Veneer (E-max)", uk: "£900", turkey: "£190", save: "79%" },
                    { t: "Full Set 20 Veneers", uk: "£18,000", turkey: "£3,800", save: "79%" },
                    { t: "Single Dental Implant", uk: "£2,500", turkey: "£250", save: "90%" },
                    { t: "All-on-4 Implants (arch)", uk: "£15,000", turkey: "£4,500", save: "70%" },
                    { t: "All-on-6 Implants (arch)", uk: "£18,000", turkey: "£5,600", save: "69%" },
                    { t: "Full Smile Makeover", uk: "£12,000+", turkey: "£3,500", save: "71%" },
                    { t: "Hollywood Smile (20 zirconia crowns)", uk: "£20,000+", turkey: "£2,800", save: "86%" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.t}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                      <td className="px-4 py-3 text-right"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.save}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/prices/teeth-done-in-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">→ View full price guide</Link>
          </section>

          <section id="treatments">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Treatments Available in Turkey</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Turkish dental clinics offer the full range of restorative and cosmetic dental procedures. The most popular among UK patients are:
            </p>
            <div className="space-y-4">
              {[
                { title: "Dental Veneers", desc: "Ultra-thin porcelain or E-max shells bonded to the front of teeth to correct colour, shape, chips, or gaps. The most popular treatment for UK patients seeking a dramatic smile transformation.", price: "From £190/tooth", href: "/treatments/veneers-turkey" },
                { title: "Dental Implants", desc: "Permanent titanium tooth roots topped with a porcelain crown. The gold standard for missing teeth. Turkish clinics use premium Straumann, Nobel Biocare, and Astra Tech implant systems.", price: "From £250/implant", href: "/treatments/dental-implants-turkey" },
                { title: "All-on-4 Dental Implants", desc: "Full arch tooth replacement supported by just 4 strategically placed implants. Walk in with failing teeth; leave with a full smile. Typically completed within 5–7 days.", price: "From £4,500/arch", href: "/treatments/all-on-4-turkey" },
                { title: "All-on-6 Dental Implants", desc: "A more stable version of All-on-4, using 6 implants for enhanced support and longer-lasting results. Ideal for patients who want maximum reliability.", price: "From £5,600/arch", href: "/treatments/all-on-6-turkey" },
                { title: "Full Smile Makeover", desc: "A combination of veneers, crowns, whitening, and other treatments custom-designed for your face and smile goals using Digital Smile Design technology.", price: "From £3,500", href: "/treatments/full-smile-makeover-turkey" },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-200 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                    <p className="text-[#1e40af] font-bold text-sm">{item.price}</p>
                  </div>
                  <Link href={item.href} className="text-[#1e40af] font-bold flex-shrink-0 hover:underline text-sm">Learn more →</Link>
                </div>
              ))}
            </div>
          </section>

          <section id="safety">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is It Safe to Get Teeth Done in Turkey?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The short answer is: <strong>yes — provided you choose the right clinic</strong>. Turkey&apos;s leading dental clinics hold JCI (Joint Commission International) accreditation, the same global healthcare standard used by NHS-approved facilities. The Turkish Ministry of Health also strictly regulates dental practices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Many Turkish dentists have trained in Germany, the UK, Italy, or the USA, and hold international specialist certifications. The risk is not in Turkey itself — it is in choosing a clinic based solely on the lowest price without checking credentials.
            </p>
            <div className="bg-green-50 rounded-2xl p-5 border border-green-200 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">How We Keep You Safe</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "We only partner with JCI-accredited or Ministry of Health-certified clinics",
                  "Every clinic has been personally visited and vetted by our team",
                  "All clinics use premium brand-name materials (Straumann, Ivoclar, Nobel Biocare)",
                  "Written treatment plan and guarantee provided before any work begins",
                  "UK-based aftercare support for your entire recovery",
                  "10-year structural guarantees on all veneers and implant work",
                ].map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/blog/is-it-safe-to-get-teeth-done-in-turkey" className="text-[#1e40af] font-semibold hover:underline">→ Read our full safety guide</Link>
          </section>

          <section id="how-to-choose">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Dental Clinic in Turkey</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With hundreds of dental clinics competing for international patients, knowing what to look for is essential.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Accreditation", desc: "JCI accreditation or Turkish Ministry of Health certification is the baseline standard for international patients." },
                { title: "Verified Reviews", desc: "Check Google, Trustpilot, and dental tourism forums. Look for reviews specifically from UK patients." },
                { title: "Material Brands", desc: "Ask what implant or veneer brand they use. Straumann, Nobel Biocare, and Ivoclar E-max are the gold standards." },
                { title: "Digital Technology", desc: "3Shape digital impressions, CBCT scanners, and in-house labs are signs of a modern, quality clinic." },
                { title: "Dentist Credentials", desc: "Check the lead dentist's qualifications. International training or specialist certifications are a positive sign." },
                { title: "Written Guarantee", desc: "Any reputable clinic will provide a written guarantee (5–10 years) on their work. Never proceed without one." },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">✓ {item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="travel">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning Your Dental Trip to Turkey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Istanbul and Antalya are the two main dental tourism hubs. Both cities have excellent international airports with daily direct flights from UK cities. Istanbul offers the widest range of specialist clinics; Antalya combines treatment with a beautiful coastal resort experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">✈️ Getting There</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>→ Flights from £60–£120 return from UK</li>
                  <li>→ Direct flights from London, Manchester, Birmingham</li>
                  <li>→ 3–4 hours flight time to Istanbul</li>
                  <li>→ 4–4.5 hours to Antalya</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">🏨 Accommodation</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>→ Central hotels from £40–£80/night</li>
                  <li>→ Many clinics offer hotel partnerships</li>
                  <li>→ Airport transfers typically included</li>
                  <li>→ 5–7 days is the typical stay for veneers</li>
                </ul>
              </div>
            </div>
            <Link href="/travel-to-turkey/dental-holiday-turkey" className="text-[#1e40af] font-semibold hover:underline">→ Full dental holiday Turkey guide</Link>
          </section>

          <section id="finance">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Finance & Monthly Payment Options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Even at Turkish prices, a full smile makeover or implant treatment is a significant investment. That&apos;s why we offer UK-based monthly payment plans, allowing you to spread costs over 12, 24, or 36 months.
            </p>
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 mb-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { term: "12 months", monthly: "£282/mo", example: "Veneers £3,800" },
                  { term: "24 months", monthly: "£158/mo", example: "Implants package" },
                  { term: "36 months", monthly: "£82/mo", example: "Smile makeover" },
                ].map(item => (
                  <div key={item.term} className="bg-white rounded-xl p-3">
                    <p className="text-xs text-gray-500">{item.term}</p>
                    <p className="text-xl font-extrabold text-[#1e40af]">{item.monthly}</p>
                    <p className="text-xs text-gray-400">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">→ Explore monthly payment options</Link>
          </section>

          <section id="process">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step: Getting Teeth Done in Turkey</h2>
            <ol className="space-y-5">
              {[
                { title: "Free Initial Consultation", desc: "Submit your photos and dental goals. We prepare a personalised treatment plan and cost estimate within 24 hours — free, no obligation." },
                { title: "Finance Pre-Approval (Optional)", desc: "Pre-qualify for monthly payment in 60 seconds. Soft credit check, no impact on your score." },
                { title: "Book Your Treatment Dates", desc: "We book clinic appointments, assist with flights, and arrange accommodation and airport transfers." },
                { title: "Arrival & Clinical Consultation", desc: "Your first day includes a full examination, X-rays, and CBCT scan (for implants). Treatment plan confirmed." },
                { title: "Treatment", desc: "Veneers: 2 days preparation, 2–3 days fitting. Implants: placement then healing period. All-on-4/6: typically 5–7 days." },
                { title: "Final Check & Aftercare Briefing", desc: "A final appointment confirms everything is perfect. You receive written aftercare instructions." },
                { title: "Return Home with UK Support", desc: "Your UK patient co-ordinator is available for any questions. Any adjustment needed is covered under your guarantee." },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { href: "/treatments/veneers-turkey", label: "Veneers Turkey", desc: "E-max from £190/tooth" },
                { href: "/treatments/dental-implants-turkey", label: "Dental Implants Turkey", desc: "From £250 per implant" },
                { href: "/treatments/all-on-4-turkey", label: "All-on-4 Implants", desc: "Full arch from £4,500" },
                { href: "/treatments/all-on-6-turkey", label: "All-on-6 Implants", desc: "Full arch from £5,600" },
                { href: "/treatments/full-smile-makeover-turkey", label: "Smile Makeover", desc: "Complete transformation" },
                { href: "/monthly-payment", label: "Monthly Payment", desc: "From £82/month" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#1e40af] hover:shadow-sm transition-all group">
                  <p className="font-bold text-gray-900 group-hover:text-[#1e40af] text-sm">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>

      <FAQSection faqs={faqs} title="Frequently Asked Questions – Teeth Done in Turkey" />

      <CTASection
        title="Start Your Smile Journey Today"
        subtitle="Get a free, personalised treatment plan within 24 hours. No obligation. Join thousands of UK patients who've saved up to 70% on premium dental care in Turkey."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
