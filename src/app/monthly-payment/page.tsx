import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Spread the Cost — Monthly Payment Plans for Dental Treatment in Turkey",
  description: "Pay for your dental treatment in Turkey with flexible monthly payment plans. 0% finance options available. Make your dream smile affordable with easy instalments.",
  openGraph: {
    title: "Monthly Payment Plans for Dental Treatment in Turkey",
    description: "Pay for your dental treatment in Turkey with 0% finance and monthly payment options.",
    url: "https://www.teethdoneinturkey.co.uk/monthly-payment",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/monthly-payment" },
};

const faqs = [
  { question: "What are the minimum and maximum loan amounts?", answer: "Finance is available from £500 to £25,000, covering everything from a simple whitening treatment to full mouth All-on-4 restorations. Your eligibility and credit limit will be determined during the application process." },
  { question: "Is the finance interest-free?", answer: "We offer 0% APR finance options for UK patients for terms up to 12 months. For longer terms (up to 60 months), low-interest options are available. All terms and rates will be clearly shown before you sign any agreement." },
  { question: "Does applying for finance affect my credit score?", answer: "A soft credit check (which does not affect your score) is run initially. A full credit check is only carried out if you proceed with a formal application. We work with multiple UK finance providers to maximise approval chances." },
  { question: "Can I pay a deposit and finance the rest?", answer: "Yes. A common approach is to pay a deposit (typically 20–30%) to confirm your booking, with the balance financed over monthly instalments. This keeps initial costs low while securing your treatment dates." },
  { question: "What if I am not approved for finance?", answer: "If you are not approved for our standard finance option, we can suggest alternatives including split payment (deposit + balance before travel) or we can discuss other options with you. Contact us and we will find a solution that works." },
];

export default function MonthlyPaymentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Spread the Cost<br />
            <span className="text-[#f5a623]">Monthly Payment Plans</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Your dream smile does not have to wait. Our flexible payment plans let UK patients spread the cost of dental treatment in Turkey over manageable monthly instalments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">
              Check My Options
            </Link>
            <a href="https://wa.me/447911123456" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Payment Options Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💳",
                  title: "0% Finance",
                  term: "Up to 12 months interest-free",
                  desc: "Pay zero interest when you spread your treatment cost over up to 12 monthly instalments. Subject to credit approval.",
                  badge: "Most Popular",
                },
                {
                  icon: "📅",
                  title: "Low-Rate Finance",
                  term: "Up to 60 months",
                  desc: "Spread the cost over up to 5 years with competitive low interest rates. Perfect for larger treatment costs like All-on-4.",
                  badge: null,
                },
                {
                  icon: "🤝",
                  title: "Split Payment",
                  term: "Deposit + balance",
                  desc: "Pay a 20–30% deposit to confirm your booking and the remaining balance on arrival in Turkey. No credit check required.",
                  badge: "No Credit Check",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative">
                  {item.badge && (
                    <span className="absolute -top-3 left-6 bg-[#f5a623] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-[#1a6b3c] text-sm font-semibold mb-3">{item.term}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Monthly Payment Examples</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Based on 0% APR over 12 months. Indicative only — actual terms depend on creditworthiness and chosen plan.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <thead>
                  <tr className="bg-[#1a6b3c] text-white">
                    <th className="px-6 py-4 text-left">Treatment</th>
                    <th className="px-6 py-4 text-center">Turkey Cost</th>
                    <th className="px-6 py-4 text-center">Per Month (12m, 0%)</th>
                    <th className="px-6 py-4 text-center">vs UK Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Teeth Whitening", cost: "£150", monthly: "£12.50", uk: "£400–£600" },
                    { t: "Single Veneer (porcelain)", cost: "£195", monthly: "£16.25", uk: "£800–£1,200" },
                    { t: "Hollywood Smile (10 teeth)", cost: "£2,500", monthly: "£208", uk: "£8,000–£12,000" },
                    { t: "Single Implant + Crown", cost: "£550", monthly: "£45.83", uk: "£2,000–£3,000" },
                    { t: "All-on-4 (1 arch)", cost: "£4,000", monthly: "£333", uk: "£14,000–£20,000" },
                    { t: "All-on-4 (both arches)", cost: "£8,000", monthly: "£667", uk: "£28,000–£40,000" },
                  ].map((row, i) => (
                    <tr key={row.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-[#1a1a1a]">{row.t}</td>
                      <td className="px-6 py-4 text-center text-[#1a6b3c] font-bold">{row.cost}</td>
                      <td className="px-6 py-4 text-center font-bold text-[#f5a623]">{row.monthly}/mo</td>
                      <td className="px-6 py-4 text-center text-gray-500">{row.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">How to Apply</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Get Your Quote", desc: "Contact us for a free personalised treatment quote." },
                { step: "2", title: "Choose Your Plan", desc: "Select your preferred payment plan and term." },
                { step: "3", title: "Quick Application", desc: "Complete a simple online finance application (takes minutes)." },
                { step: "4", title: "Confirm Booking", desc: "Once approved, pay your deposit and book your dates." },
              ].map((item) => (
                <div key={item.step} className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-10 h-10 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Explore Treatments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Dental Veneers — from £195", href: "/treatments/dental-veneers" },
                { label: "Dental Implants — from £450", href: "/treatments/dental-implants" },
                { label: "Hollywood Smile — from £2,500", href: "/treatments/hollywood-smile" },
                { label: "All-on-4 — from £3,500", href: "/treatments/all-on-4-implants" },
                { label: "Dental Crowns — from £195", href: "/treatments/dental-crowns" },
                { label: "All Treatment Prices", href: "/prices" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors">
                  <p className="font-medium text-[#1a1a1a] text-sm">{item.label} →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
