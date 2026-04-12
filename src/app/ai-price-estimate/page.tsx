import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AIPriceEstimator from "@/components/AIPriceEstimator";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/ai-price-estimate" },
  title: "AI Dental Price Estimator Turkey – Instant Cost Estimate",
  description:
    "Describe your dental needs in plain English and get an instant estimated cost for treatment in Turkey. Compare with UK prices. Free, no sign-up required.",
};

export default function AIPriceEstimatePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1e40af] via-blue-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🤖 Powered by smart price matching — no sign-up needed
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            AI Dental Price Estimator
          </h1>
          <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
            Just describe what you need in plain English — our AI matches your
            request to our price list and shows an instant estimated cost for
            treatment in Turkey vs the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span>✓ No sign-up needed</span>
            <span>✓ Instant results</span>
            <span>✓ UK vs Turkey comparison</span>
            <span>✓ Monthly payment options</span>
          </div>
        </div>
      </div>

      {/* Estimator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIPriceEstimator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                icon: "✍️",
                title: "Describe Your Needs",
                desc: "Type what you're looking for in your own words — e.g. \"I want 10 veneers and 2 implants\"",
              },
              {
                step: "2",
                icon: "🤖",
                title: "AI Matches Treatments",
                desc: "Our system reads your description and matches it to our current price list automatically",
              },
              {
                step: "3",
                icon: "💷",
                title: "Get Your Estimate",
                desc: "See an instant Turkey price, UK comparison, potential savings, and monthly payment options",
              },
            ].map(item => (
              <div key={item.step} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Treatment Prices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Veneers Turkey", href: "/treatments/veneers-turkey", desc: "E-max & zirconia veneers from £190/tooth" },
              { title: "Dental Implants", href: "/treatments/dental-implants-turkey", desc: "Osstem implants from £250 — Straumann from £800" },
              { title: "All-on-4 Implants", href: "/treatments/all-on-4-turkey", desc: "Full arch restoration from £4,500" },
              { title: "All-on-6 Package", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "Both arches + hotel from £5,600 all-inclusive" },
              { title: "Hollywood Smile", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 zirconia crowns from £2,800" },
              { title: "Monthly Payment", href: "/monthly-payment", desc: "Spread the cost from £82/month over 36 months" },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors block"
              >
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How accurate are these estimates?",
                a: "Our estimates are based on real 2026 clinic prices and are typically accurate within 10–15%. Prices vary by clinic, materials chosen, and your specific dental needs. For an exact personalised quote, book a free consultation.",
              },
              {
                q: "What's included in the Turkey price?",
                a: "All quoted prices include the dental treatment itself. All-on packages also include hotel stays. Flights and transfers are not included. We'll give you a full all-inclusive breakdown when you book a free consultation.",
              },
              {
                q: "Can I pay monthly for treatment in Turkey?",
                a: "Yes — we offer 0% finance over 12 months and low-interest plans over 24 or 36 months. Use our estimator, then check the monthly payment page for exact figures.",
              },
              {
                q: "How do I get an exact quote?",
                a: "Our AI estimator gives a great starting point. For a precise, personalised quote based on your dental photos and X-rays, book a free video consultation or WhatsApp us your smile photos.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                  {q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
                </summary>
                <p className="px-6 pb-4 text-gray-600 text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want an Exact Quote?"
        subtitle="Our AI gives you a great estimate — for a precise, personalised cost based on your dental photos, book your free consultation today."
        buttonText="Get My Free Exact Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
