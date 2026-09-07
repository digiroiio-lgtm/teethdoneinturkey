import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/finance-options-uk" },
  title: { absolute: "Dental Finance UK: Pay Monthly for Turkey Treatment" },
  description: "Dental finance for UK patients: monthly plans from £82, 0% APR over 12–36 months, soft-search pre-check, and honest guidance if you have bad credit.",
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
  {
    q: "Is this a dental loan or a dental payment plan?",
    a: "It's a payment plan: finance arranged specifically for your dental treatment, with 0% APR representative available and fixed monthly instalments. A dental loan usually means a general personal loan used for the same purpose, which can carry interest where this plan would not.",
  },
  {
    q: "I have bad credit. Can I still get approved?",
    a: "We can't guarantee approval, and no dental finance provider honestly can. The pre-qualification check is a soft search, so it won't affect your credit score, and the outcome depends on your individual circumstances and the finance provider's own criteria at the time you apply.",
  },
  {
    q: "Can you get teeth on finance with bad credit?",
    a: "Sometimes, but not always, and anyone promising otherwise is not being straight with you. Lenders assess affordability as well as credit history, so a poor score with stable income and low existing commitments can still be approved, while a thin or very recent adverse file is more likely to be declined. The honest way to find out is the soft-search pre-check, which gives you an indication without leaving a mark on your file.",
  },
  {
    q: "Will being declined for dental finance hurt my credit score?",
    a: "A soft-search pre-check will not, because it is not visible to other lenders and leaves no footprint. A declined full application does leave a hard-search footprint on your file, which is why it is worth running the soft check first rather than applying to several providers in succession — multiple hard searches in a short period are themselves a negative signal.",
  },
  {
    q: "What are my options if I'm declined for dental finance?",
    a: "A larger deposit reduces the amount borrowed and can change the outcome, as can a shorter term or a smaller initial phase of treatment. A joint or guarantor arrangement is an option with some providers. Otherwise, treating in stages and paying as you go avoids borrowing altogether — and because treatment in Turkey costs a fraction of the UK private equivalent, the amount you need to fund is often small enough not to require finance at all.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

export default function FinanceOptionsUKPage() {
  return (
    <>
      <script id="faq-schema-finance-options-uk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Teeth on Finance with Bad Credit</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the question we are asked most often, so here is the honest answer: <strong>bad credit does not automatically rule you out, and no provider can guarantee you approval either.</strong> Any site telling you otherwise is selling you something. What decides it is not your score alone — lenders weigh affordability alongside credit history, so stable income and low existing commitments can carry an application that a score on its own would not.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: "What lenders actually look at", desc: "Your income against your existing monthly commitments, how recent any adverse markers are, how long you've been at your address and in your job — not just the headline score." },
                { title: "Start with the soft search", desc: "The pre-check leaves no footprint on your file and isn't visible to other lenders, so you can get an indication without risking anything. Only proceed to a full application once you know where you stand." },
                { title: "Don't apply repeatedly", desc: "Several hard searches in a short window is itself a negative signal. One soft check first is worth more than three speculative applications." },
                { title: "A deposit changes the maths", desc: "Putting any amount down reduces what you need to borrow, which lowers the monthly figure and can shift a marginal application into approval." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              There is also a point worth making that the finance industry has no reason to make. Treatment in Turkey costs a fraction of the UK private equivalent — a full set of veneers is roughly £3,800 against £16,000 or more here — so the sum you would need to borrow is very often small enough that finance stops being the deciding factor at all. If credit is the obstacle, the cheaper treatment route may solve the problem more reliably than the lending route. The{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">can&apos;t afford dental treatment guide</Link>{" "}
              works through the options in decision order, and the{" "}
              <Link href="/price-calculator" className="text-[#1e40af] font-semibold hover:underline">price calculator</Link>{" "}
              will tell you what you would actually need to fund.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Finance is subject to status, affordability and credit assessment. 0% APR representative is available on qualifying plans; approval is never guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Plan, Finance, Loan or NHS Charge: What&apos;s the Difference?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms get used interchangeably online, but they are not the same thing. Here is what each one actually means, so you can be sure you&apos;re comparing like for like.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { term: "Dental payment plan", desc: "Spreading the cost of one specific treatment over fixed monthly instalments, often at 0% interest for a set term. This is what the plans on this page are." },
                { term: "Dental finance", desc: "The broader term for borrowing arranged specifically to pay for dental treatment, which usually works the same way as a payment plan." },
                { term: "Dental loan", desc: "A personal loan used to cover dental costs. It may not be dental specific, and unlike a 0% dental finance plan it can carry interest." },
                { term: "Dental insurance", desc: "A monthly premium that contributes toward the cost of future treatment, typically with annual limits and exclusions. This is different from financing treatment you need now." },
                { term: "NHS dental charges", desc: "Fixed charges (£27.90, £76.60 or £306.80 in England from 1 April 2026) for treatment the NHS actually provides. Cosmetic work such as veneers isn't covered." },
                { term: "Clinic membership plan", desc: "A fixed monthly fee to a dental practice covering routine check-ups and hygiene visits, not a way of financing a one-off treatment like implants or veneers." },
              ].map(item => (
                <div key={item.term} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{item.term}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              For the full picture, including whether the NHS can help before you consider financing private treatment, see the{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">Can&apos;t Afford Dental Treatment in the UK guide</Link>.
            </p>
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
