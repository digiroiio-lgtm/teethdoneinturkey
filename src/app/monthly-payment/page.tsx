import type { Metadata } from "next";
import Link from "next/link";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/monthly-payment" },
  title: "Dental Treatment Turkey Monthly Payment – From £82/Month",
  description: "Spread the cost of veneers and implants in Turkey from £82/month. 0% finance available over 12, 24 or 36 months for UK patients. Pre-qualify in 60 seconds.",
};

const ukVsTurkeyComparison = [
  { treatment: "Porcelain Veneers (per tooth)", uk: "£800–£1,000", turkey: "£190–£250", monthly: "From £6/mo" },
  { treatment: "Full Smile Makeover (20 veneers)", uk: "£16,000–£20,000", turkey: "£3,800–£5,000", monthly: "From £106/mo" },
  { treatment: "Single Dental Implant", uk: "£2,000–£3,000", turkey: "£420–£600", monthly: "From £14/mo" },
  { treatment: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "£4,000–£5,500", monthly: "From £120/mo" },
  { treatment: "All-on-6 (per arch)", uk: "£15,000–£22,000", turkey: "£5,000–£7,000", monthly: "From £150/mo" },
  { treatment: "Hollywood Smile (20 zirconia crowns, inc. hotel)", uk: "£18,000–£22,000", turkey: "£2,800", monthly: "From £78/mo" },
];

export default function MonthlyPaymentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Dental Treatment in Turkey with Monthly Payments</h1>
          <p className="text-xl text-blue-200 mb-2">Spread the Cost of Veneers and Implants from £82 per Month</p>
          <p className="text-blue-300 text-sm mb-8">0% interest available · No obligation · Free treatment plan included</p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {[
              { icon: "⭐", text: "Rated 4.9/5 by UK patients" },
              { icon: "🦷", text: "2,500+ patients treated" },
              { icon: "🇬🇧", text: "UK patient support team" },
              { icon: "🔒", text: "No commitment until you travel" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-full px-4 py-1.5">
                <span>{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Multi-CTA block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-5 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">
              ✅ Get Free Treatment Plan
            </Link>
            <Link href="/book-consultation" className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm">
              📋 Check Finance Eligibility
            </Link>
            <Link href="/book-consultation" className="border-2 border-white text-white px-5 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">
              📤 Upload Dental X-Ray
            </Link>
            <a href="https://wa.me/905353998999" className="bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2">
              💬 WhatsApp a Treatment Coordinator
            </a>
          </div>

          <p className="text-blue-300 text-xs mt-4">⚡ Limited finance approvals available each month — apply early to secure your slot</p>
        </div>
      </div>

      {/* ── Payment Table ── */}
      <MonthlyPaymentTable />

      {/* ── UK vs Turkey Comparison ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">UK vs Turkey Dental Cost Comparison</h2>
          <p className="text-gray-600 mb-6">
            See exactly how much you save on each treatment — and what it costs when spread over 36 months with UK-based monthly finance.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Monthly (36mo)</th>
                </tr>
              </thead>
              <tbody>
                {ukVsTurkeyComparison.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{row.monthly}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Monthly figures based on 36-month term. Representative example: £3,800 over 36 months = £106/month. Subject to credit approval.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full veneers cost guide</Link>
            <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full implants cost guide</Link>
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ All turkey teeth prices</Link>
          </div>
        </div>
      </section>

      {/* ── Content sections ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Dental Treatment in Turkey with Monthly Payments</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Turkish dental treatment is already <strong>65–82% cheaper</strong> than equivalent UK private dental prices. When you add monthly payment finance, that saving becomes even more accessible: a full smile makeover that would cost £16,000–£20,000 in the UK costs £3,800 in Turkey — and can be spread over 36 months for just £106/month.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Compare that to UK monthly finance for the same treatment: £16,000 over 36 months would require payments of approximately £470/month. The Turkey option is <strong>nearly 5× cheaper per month</strong> — for clinically identical results using the same materials.
            </p>
            <Link href="/teeth-done-in-turkey-guide" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Read our complete Turkey dental guide</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veneers Turkey Monthly Payment Plans</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Porcelain veneers in Turkey cost <strong>£190–£250 per tooth</strong> using Ivoclar E-max — the same brand used in the UK&apos;s leading cosmetic dental practices. A full set of 20 veneers (£3,800–£5,000) can be financed from:
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { term: "12 months", amount: "£267/mo", label: "Fastest payoff" },
                { term: "24 months", amount: "£140/mo", label: "Balanced" },
                { term: "36 months", amount: "£95/mo", label: "Lowest monthly" },
              ].map(item => (
                <div key={item.term} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">{item.term}</p>
                  <p className="text-xl font-extrabold text-[#1e40af]">{item.amount}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              All veneer finance includes a free Digital Smile Design consultation, temporary veneers during fabrication, and a 5–10 year written guarantee from our partner clinics.
            </p>
            <div className="mt-3">
              <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full veneers cost breakdown</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Implants Turkey Finance Options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A single dental implant in Turkey costs <strong>£420–£600 all-inclusive</strong> — including consultation, CBCT scan, implant placement, and final zirconia crown. Spread over 36 months, that&apos;s from just £14/month. For larger implant treatments:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-3 text-left">Implant Treatment</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">36-Month Finance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Single Implant", p: "£500", m: "From £14/mo" },
                    { t: "4 Implants", p: "£2,000", m: "From £56/mo" },
                    { t: "All-on-4 (single arch)", p: "£4,500", m: "From £125/mo" },
                    { t: "All-on-4 (both arches)", p: "£9,000", m: "From £250/mo" },
                    { t: "All-on-6 (both arches)", p: "£11,000", m: "From £306/mo" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.t}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.p}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{r.m}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3">
              <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full implants cost breakdown</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Finance Dental Treatment Abroad?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Financing dental treatment in Turkey combines two powerful advantages: the cost saving of treatment abroad (65–82% less than UK prices) with the payment flexibility of UK-based monthly finance. You access world-class care at a fraction of UK cost — while paying in manageable monthly instalments from home.
            </p>
            <ul className="space-y-3">
              {[
                { icon: "💷", title: "Pay in pounds, from the UK", desc: "Finance is arranged through UK providers and repaid in GBP monthly. No currency risk, no foreign transfers." },
                { icon: "🦷", title: "Same clinical standards, fraction of the cost", desc: "Turkey&apos;s top clinics use Straumann implants, Ivoclar E-max veneers, and 3Shape digital scanning — identical to UK premium practices." },
                { icon: "📋", title: "Free treatment plan before you commit", desc: "We send a full written treatment plan, X-ray review, and cost breakdown before you apply for finance or book flights." },
                { icon: "✈️", title: "Treatment booked, then fly", desc: "Finance is in place before you travel. You fly to Turkey knowing exactly what you&apos;re getting and what you&apos;re paying." },
              ].map(item => (
                <li key={item.title} className="flex gap-3 list-none bg-white rounded-xl p-4 border border-gray-200">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why UK Patients Choose Dental Finance for Turkey Treatments</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over 2,500 UK patients have used our finance options to access dental treatment in Turkey. The most common feedback is that the monthly payment makes the decision straightforward: instead of saving for years or going without, patients can book treatment this month and start paying as little as £82/month.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "2,500+", label: "UK patients treated" },
                { stat: "4.9★", label: "Average patient rating" },
                { stat: "£0", label: "Upfront commitment to explore" },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <p className="text-3xl font-extrabold text-[#1e40af] mb-1">{item.stat}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does Dental Finance Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with UK-based finance providers to let you spread the cost of your Turkish dental treatment over 12, 24, or 36 months. Your treatment is booked and paid for in Turkey, while you repay the finance in manageable monthly instalments from the UK.
            </p>
            <ol className="space-y-4">
              {[
                "Apply online in under 60 seconds — no impact on your credit score for pre-qualification",
                "Get an instant decision — know your options before you commit",
                "Receive your free treatment plan and cost estimate within 24 hours",
                "Book your treatment with confidence knowing your finance is in place",
                "Fly to Turkey and receive your treatment as planned",
                "Make easy monthly repayments from home",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 list-none">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance Eligibility Explained</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our finance options are available to UK residents aged 18+. Pre-qualification uses a <strong>soft credit search</strong> that does not affect your credit score. You can check your eligibility before making any commitment to treatment.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "UK resident, aged 18 or over",
                "No minimum income requirement for pre-qualification",
                "Bad credit or CCJ? Specialist options available — we work with providers who consider all profiles",
                "Employed, self-employed, or benefits: most situations considered",
                "0% interest available for qualifying applicants on 12- and 24-month terms",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Trust layer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Trust Us With Your Treatment</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: "🇬🇧", title: "UK Patient Support", desc: "Dedicated UK coordinator before, during and after treatment" },
                { icon: "🎓", title: "GDC-Registered Partners", desc: "Dentists registered with international equivalent bodies" },
                { icon: "🏥", title: "ISO Certified Clinics", desc: "Accredited facilities meeting international standards" },
                { icon: "👥", title: "10,000+ International Patients", desc: "Trusted by patients from 40+ countries" },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Risk reversal guarantee:</strong> Get a complete written treatment plan, cost estimate, and Digital Smile Design preview — completely free, with no obligation to book. No credit search until you choose to apply. No commitment until you travel.
              </p>
            </div>
          </div>

          <MedicalReviewBadge />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Is the finance 0% interest?", a: "We offer 0% interest plans for qualifying applicants on 12- and 24-month terms. Some plans may carry interest depending on your credit profile and term length. Full APR details are provided before you commit — no surprises." },
                { q: "Does applying affect my credit score?", a: "Pre-qualification uses a soft credit check with no impact on your credit score. Only a full application (which you choose to proceed with after seeing your options) will show on your credit file." },
                { q: "Can I apply if I have bad credit?", a: "Yes. We work with specialist finance providers who consider all credit profiles, including those with CCJs, defaults, or limited credit history. Pre-qualify today to see your available options." },
                { q: "How quickly can I get finance?", a: "Pre-qualification decisions are instant. Full approval typically takes 24–48 hours. Treatment can usually be booked within 2–4 weeks of approval." },
                { q: "What if I need to cancel after finance is approved?", a: "Finance can be cancelled during the statutory 14-day cooling-off period at no cost. If you cancel after this period, the finance agreement terms will apply — full details provided at the time of application." },
              ].map(faq => (
                <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/prices/veneers-turkey-cost", label: "Veneers Turkey Cost", sub: "E-max from £190/tooth" },
                { href: "/prices/dental-implants-turkey-cost", label: "Implants Turkey Cost", sub: "From £420 all-in" },
                { href: "/prices/turkey-teeth-cost", label: "All Turkey Teeth Prices", sub: "Complete price guide" },
                { href: "/treatments/veneers-turkey", label: "Veneers Treatment Guide", sub: "What to expect" },
                { href: "/treatments/dental-implants-turkey", label: "Implants Treatment Guide", sub: "Full implant process" },
                { href: "/teeth-done-in-turkey-guide", label: "Turkey Dental Guide", sub: "Complete patient guide" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="flex flex-col bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        title="Start Your Free Treatment Plan Today"
        subtitle="No obligation. No credit check to explore your options. Chat with a UK patient coordinator who will answer every question."
        buttonText="Get Free Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
