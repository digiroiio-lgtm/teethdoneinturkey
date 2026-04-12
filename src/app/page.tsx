import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TreatmentCard from "@/components/TreatmentCard";
import PriceTable from "@/components/PriceTable";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AIPriceEstimator from "@/components/AIPriceEstimator";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Teeth Done in Turkey | Dental Veneers & Implants",
  description:
    "Save up to 70% on dental treatments in Turkey. Veneers from £190/tooth, dental implants from £250. UK patient support, JCI-accredited clinics, monthly payment options.",
};

const treatments = [
  {
    title: "Crowns & Full Veneers",
    description: "Transform your smile with zirconia crowns & full veneers crafted by expert Turkish dentists using world-class materials.",
    price: "From £130/tooth",
    ukPrice: "£900–£1,200/tooth",
    href: "/prices/hollywood-smile-turkey-package",
    icon: "👑",
  },
  {
    title: "Veneers Turkey",
    description: "Transform your smile with porcelain or E-max veneers crafted by expert Turkish dentists using world-class materials.",
    price: "From £190/tooth",
    ukPrice: "£900/tooth",
    href: "/treatments/veneers-turkey",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement with titanium implants. Same Straumann and Nobel Biocare brands as UK — at a fraction of the cost.",
    price: "From £250",
    ukPrice: "£2,500",
    href: "/treatments/dental-implants-turkey",
    icon: "🦷",
  },
  {
    title: "All-on-4 Implants",
    description: "Full arch restoration with just 4 implants. Walk in with failing teeth, walk out with a full smile in days.",
    price: "From £4,500",
    ukPrice: "£15,000+",
    href: "/treatments/all-on-4-turkey",
    icon: "💪",
  },
  {
    title: "All-on-6 Implants",
    description: "Enhanced full arch restoration with 6 implants for superior stability and load distribution.",
    price: "From £5,600",
    ukPrice: "£18,000+",
    href: "/treatments/all-on-6-turkey",
    icon: "🏆",
  },
  {
    title: "Full Smile Makeover",
    description: "Combine veneers, whitening, and other treatments for a complete transformation. The ultimate smile package.",
    price: "From £3,500",
    ukPrice: "£12,000+",
    href: "/treatments/full-smile-makeover-turkey",
    icon: "🌟",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Manchester",
    treatment: "20 Porcelain Veneers",
    rating: 5,
    review: "I spent months researching dental work in Turkey and I'm so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I'm absolutely over the moon with the results. Would recommend 100%.",
    date: "November 2024",
  },
  {
    name: "James O'Brien",
    location: "London",
    treatment: "All-on-4 Implants",
    rating: 5,
    review: "I'd been embarrassed by my teeth for years and the NHS waiting list was 3 years. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life. Cost me £4,500 vs £15,000 quoted in London.",
    date: "October 2024",
  },
  {
    name: "Claire Thompson",
    location: "Birmingham",
    treatment: "Dental Implants x3",
    rating: 5,
    review: "Three implants for £750 versus £7,500 in Birmingham — the maths was obvious. I was nervous about going abroad for dental work but the whole experience was incredible. The clinic used premium implants and I've had zero issues. My UK dentist was impressed with the quality.",
    date: "September 2024",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      {/* Treatment Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our Dental Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class dental care in Turkey at a fraction of UK prices. All treatments carried out by fully qualified, English-speaking dentists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <TreatmentCard key={t.href} {...t} />
            ))}
          </div>
        </div>
      </section>

      <PriceTable />

      {/* AI Price Estimator */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-100 text-[#1e40af] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🤖 New — AI Price Estimator
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Tell Us What You Need — Get an Instant Estimate
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Just describe your dental goals in plain English. Our AI instantly matches your needs to our price list and shows what you&apos;d pay in Turkey vs the UK.
            </p>
          </div>
          <AIPriceEstimator />
        </div>
      </section>

      <MonthlyPaymentTable />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Our UK Patients Say</h2>
            <p className="text-gray-600">Real reviews from real patients — no filters, no fake reviews.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection
        title="Ready to Transform Your Smile?"
        subtitle="Join thousands of UK patients who've saved up to 70% on premium dental treatments in Turkey. Free consultation — no obligation."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
