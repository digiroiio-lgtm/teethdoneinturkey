import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments" },
  title: "Dental Treatments Turkey – UK Prices",
  description: "Explore all dental treatments available in Turkey — veneers, dental implants, All-on-4, smile makeovers and more. Save up to 70% vs UK prices.",
};

const treatments = [
  { href: "/treatments/veneers-turkey", title: "Veneers Turkey", desc: "Porcelain and E-max veneers from £190/tooth. Transform your smile in just 5 days.", price: "From £190/tooth", icon: "✨" },
  { href: "/treatments/dental-implants-turkey", title: "Dental Implants Turkey", desc: "Permanent titanium implants using Straumann and Nobel Biocare. From £450 per implant.", price: "From £450", icon: "🦷" },
  { href: "/treatments/all-on-4-turkey", title: "All-on-4 Implants Turkey", desc: "Full arch restoration with 4 implants. Complete smile transformation in 5–7 days.", price: "From £4,500", icon: "💪" },
  { href: "/treatments/all-on-6-turkey", title: "All-on-6 Implants Turkey", desc: "Enhanced full arch with 6 implants for superior stability and longevity.", price: "From £5,500", icon: "🏆" },
  { href: "/treatments/full-smile-makeover-turkey", title: "Full Smile Makeover Turkey", desc: "Combine veneers, whitening, and reshaping for a complete transformation.", price: "From £3,500", icon: "🌟" },
];

export default function TreatmentsPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Treatments in Turkey</h1>
          <p className="text-xl text-blue-200">World-class dental care at up to 70% less than UK prices</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {treatments.map(t => (
              <Link key={t.href} href={t.href} className="group flex flex-col sm:flex-row items-start gap-6 bg-gray-50 hover:bg-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-[#1e40af] transition-all">
                <div className="text-5xl">{t.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1e40af] mb-1">{t.title}</h2>
                  <p className="text-gray-600 mb-2">{t.desc}</p>
                  <span className="text-[#1e40af] font-bold">{t.price}</span>
                </div>
                <div className="flex-shrink-0 self-center">
                  <span className="bg-[#1e40af] text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-blue-700 transition-colors">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Treatment You Need?"
        subtitle="Book a free consultation and our dental team will review your photos and recommend the best treatment plan."
        buttonText="Get Free Advice"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
