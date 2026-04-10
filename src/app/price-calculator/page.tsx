import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PriceCalculator from "./PriceCalculator";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/price-calculator" },
  title: "Dental Turkey Price Calculator – Estimate Your Cost",
  description: "Calculate how much your dental treatment in Turkey will cost. Veneers, implants, All-on-4, All-on-6 and more. Compare with UK prices and see how much you save.",
};

export default function PriceCalculatorPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Turkey Price Calculator</h1>
          <p className="text-xl text-blue-200">
            Estimate the cost of your treatment in Turkey and see how much you could save vs UK prices.
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceCalculator />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Treatment Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Veneers Turkey", href: "/treatments/veneers-turkey", desc: "E-max and zirconia veneers from £190/tooth" },
              { title: "Dental Implants Turkey", href: "/treatments/dental-implants-turkey", desc: "Single implants from £380 with Osstem or Straumann" },
              { title: "All-on-6 Package", href: "/prices/all-on-6-dental-implants-turkey-package", desc: "Full arch on 6 implants from £5,600 all-inclusive" },
              { title: "Hollywood Smile", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 zirconia crowns from £2,800" },
              { title: "Monthly Payment", href: "/monthly-payment", desc: "Spread the cost from £82/month over 36 months" },
              { title: "Free Treatment Plan", href: "/free-treatment-plan", desc: "Get a personalised plan and exact quote in 24h" },
            ].map(item => (
              <Link key={item.href} href={item.href} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors block">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want an Exact Quote?"
        subtitle="Our calculator gives estimates — for a precise, personalised cost based on your own dental photos and X-rays, request a free treatment plan."
        buttonText="Get My Free Exact Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
