import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/finance-options-uk" },
  title: "Dental Finance Options UK – Pay Monthly for Turkey Treatment",
  description: "Finance options for UK patients getting dental treatment in Turkey. Monthly payment plans from £82/month. 0% interest available over 12, 24 and 36 months.",
};

const options = [
  {
    name: "36-Month Plan",
    badge: "Most Popular",
    rate: "0% APR representative",
    monthly: "From £82/mo",
    desc: "Spread the full cost over 3 years with nothing extra to pay. Our most popular option for larger treatments.",
    best: "Full smile makeovers, All-on-4, All-on-6",
  },
  {
    name: "24-Month Plan",
    badge: null,
    rate: "0% APR representative",
    monthly: "From £122/mo",
    desc: "A balance between manageable monthly payments and a shorter repayment term.",
    best: "Veneers (8–16 teeth), single arch implants",
  },
  {
    name: "12-Month Plan",
    badge: "Lowest Total Cost",
    rate: "0% APR representative",
    monthly: "From £233/mo",
    desc: "Pay off your treatment in 12 months. The fastest path to completion with no interest.",
    best: "Smaller treatments, single implants, whitening packages",
  },
];

const howItWorks = [
  { step: "1", title: "Pre-Qualify in 60 Seconds", desc: "Check your eligibility with no impact on your credit score. You'll get an instant decision." },
  { step: "2", title: "Receive Your Treatment Plan", desc: "We'll prepare a free personalised plan with your total cost and monthly breakdown." },
  { step: "3", title: "Sign Your Agreement Online", desc: "Everything is handled digitally. No paperwork, no branch visits." },
  { step: "4", title: "Travel & Get Treated", desc: "Your clinic appointment, hotel, and transfers are arranged once your finance is confirmed." },
  { step: "5", title: "Pay Monthly from Home", desc: "Monthly payments are taken automatically. You focus on enjoying your new smile." },
];

const faqs = [
  {
    q: "What is the minimum and maximum amount I can finance?",
    a: "Finance is available from £500 to £30,000. This covers everything from a small veneers treatment to a full-mouth All-on-6 reconstruction.",
  },
  {
    q: "Does applying affect my credit score?",
    a: "No. The initial eligibility check is a soft search only, so it does not appear on your credit file. A full credit check is only performed if you choose to proceed with a finance agreement.",
  },
  {
    q: "Can I pay for flights and hotels on the finance plan?",
    a: "The finance plan covers the dental treatment costs. Flights are separate and not included. Hotel accommodation is included in most of our all-inclusive treatment packages.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Missing a payment may incur a late fee and could affect your credit rating. We recommend setting up a direct debit to avoid any issues. Our finance team can discuss options if you experience financial difficulty.",
  },
  {
    q: "Is finance available for all treatments?",
    a: "Finance is available for veneers, implants, All-on-4, All-on-6, Hollywood Smile packages, and most other treatments. A few minor treatments fall below the minimum finance threshold.",
  },
  {
    q: "Can I pay part upfront and finance the rest?",
    a: "Yes. You can put any amount as a deposit and finance the remainder. This reduces your monthly payments and may mean you qualify for a shorter term.",
  },
];

export default function FinanceOptionsUKPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Finance Options for UK Patients</h1>
          <p className="text-xl text-blue-200">Pay monthly for your dental treatment in Turkey. 0% APR plans from £82/month over 12, 24, or 36 months.</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              You don&apos;t need to have the full cost of your treatment ready upfront. Our monthly payment plans let you spread the cost of dental work in Turkey over 12, 24, or 36 months — with 0% APR available, so you pay no more than the treatment cost itself.
            </p>
            <p className="mt-3">
              <Link href="/blog/dental-monthly-payments-uk" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Read: Dental Monthly Payments UK complete guide (2026)</Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Finance Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {options.map(opt => (
                <div key={opt.name} className={`rounded-2xl border-2 p-6 ${opt.badge === 'Most Popular' ? 'border-[#1e40af] bg-blue-50' : 'border-gray-200 bg-white'} shadow-sm`}>
                  {opt.badge && (
                    <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-0.5 rounded-full mb-3 uppercase tracking-wide">{opt.badge}</div>
                  )}
                  <h3 className="font-extrabold text-gray-900 text-lg mb-1">{opt.name}</h3>
                  <p className="text-2xl font-extrabold text-[#1e40af] mb-1">{opt.monthly}</p>
                  <p className="text-xs text-gray-500 mb-3">{opt.rate}</p>
                  <p className="text-sm text-gray-600 mb-3">{opt.desc}</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold mb-0.5">Best for</p>
                    <p className="text-sm text-gray-700">{opt.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Payment Examples</h2>
            <MonthlyPaymentTable />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
            <div className="relative">
              <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-blue-200" />
              <div className="space-y-6">
                {howItWorks.map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0 z-10">{s.step}</div>
                    <div className="pt-2">
                      <h3 className="font-bold text-gray-900 mb-0.5">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Minimum finance", value: "£500" },
              { label: "Maximum finance", value: "£30,000" },
              { label: "APR (representative)", value: "0%" },
              { label: "Soft search pre-check", value: "✓" },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-2xl font-extrabold text-[#1e40af] mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Finance Your Dental Treatment?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💷", title: "No large upfront payment", desc: "Spread the cost so you don't need thousands saved before you can start treatment." },
                { icon: "📅", title: "Fixed monthly payments", desc: "Know exactly what you'll pay each month. No surprises, no variable rates." },
                { icon: "🔒", title: "0% APR available", desc: "On qualifying plans, you pay back exactly what you borrowed — nothing more." },
                { icon: "⚡", title: "Fast pre-qualification", desc: "Check eligibility in under 60 seconds with no impact on your credit score." },
              ].map(item => (
                <div key={item.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Check My Eligibility</Link>
            <Link href="/monthly-payment" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">View Monthly Payment Table</Link>
            <Link href="/price-calculator" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Calculate My Treatment Cost</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Check Your Finance Options?"
        subtitle="Pre-qualify in 60 seconds with no credit impact. Our team will walk you through the best plan for your treatment."
        buttonText="Check My Eligibility"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
