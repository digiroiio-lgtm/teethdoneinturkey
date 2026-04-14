import type { Metadata } from "next";
import Link from "next/link";
import TreatmentCard from "@/components/TreatmentCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { organizationSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Get Your Dream Smile in Turkey — Save Up to 70% | Teeth Done in Turkey",
  description:
    "World-class dental treatment in Turkey at a fraction of UK prices. Veneers from £195, implants from £450. JCI-accredited clinics. Free consultation available.",
  openGraph: {
    title: "Get Your Dream Smile in Turkey — Save Up to 70%",
    description:
      "World-class dental treatment in Turkey at a fraction of UK prices. Veneers from £195, implants from £450.",
    url: "https://www.teethdoneinturkey.co.uk",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk" },
};

const treatments = [
  {
    title: "Dental Veneers",
    description:
      "Transform your smile with ultra-thin porcelain or composite veneers. Cover chips, stains, and gaps for a flawless, natural-looking finish.",
    price: "£195/tooth",
    href: "/treatments/dental-veneers",
    emoji: "✨",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement using titanium implants. Look, feel, and function like real teeth with a solution that lasts a lifetime.",
    price: "£450/implant",
    href: "/treatments/dental-implants",
    emoji: "🦷",
  },
  {
    title: "Hollywood Smile",
    description:
      "Complete smile makeover combining veneers, whitening, and shaping. Achieve the perfect celebrity smile you've always dreamed of.",
    price: "£2,500",
    href: "/treatments/hollywood-smile",
    emoji: "⭐",
  },
  {
    title: "Dental Crowns",
    description:
      "Restore damaged or decayed teeth with durable porcelain or zirconia crowns. Natural-looking and built to last for years.",
    price: "£195/crown",
    href: "/treatments/dental-crowns",
    emoji: "👑",
  },
  {
    title: "All-on-4 Implants",
    description:
      "Full arch restoration with just four implants. A life-changing solution for patients missing most or all of their teeth.",
    price: "£3,500/arch",
    href: "/treatments/all-on-4-implants",
    emoji: "🌟",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional laser teeth whitening for a brighter, whiter smile. Remove years of staining in a single appointment.",
    price: "£150",
    href: "/treatments/teeth-whitening",
    emoji: "💎",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Manchester, UK",
    rating: 5,
    quote:
      "I saved over £4,000 on my veneers. The clinic was absolutely amazing — so professional and modern. I can't stop smiling! I was nervous at first but the team made me feel completely at ease.",
    treatment: "Porcelain Veneers",
  },
  {
    name: "James T.",
    location: "London, UK",
    rating: 5,
    quote:
      "Had my All-on-4 implants done and the results are incredible. The whole trip was brilliantly organised — flights, hotel, transfers all sorted. Saved around £12,000 compared to UK quotes.",
    treatment: "All-on-4 Implants",
  },
  {
    name: "Claire B.",
    location: "Birmingham, UK",
    rating: 5,
    quote:
      "Went for a Hollywood Smile and the results exceeded my expectations. The dentists were highly skilled and spoke perfect English. I'd recommend Teeth Done in Turkey to anyone without hesitation.",
    treatment: "Hollywood Smile",
  },
];

const homepageFaqs = [
  {
    question: "Is it safe to get dental treatment in Turkey?",
    answer:
      "Yes — Turkey has world-class dental clinics with JCI accreditation and highly trained dentists, many of whom are trained in Europe or the US. Look for clinics with international accreditation and thousands of verified patient reviews.",
  },
  {
    question: "How much can I really save on dental treatment in Turkey?",
    answer:
      "UK patients typically save 60–70% compared to UK prices. For example, a single porcelain veneer costs around £800–£1,200 in the UK but only from £195 in Turkey. The savings on larger treatments like All-on-4 implants can exceed £15,000.",
  },
  {
    question: "What's included in the all-inclusive packages?",
    answer:
      "Our all-inclusive packages typically include all dental procedures, airport transfers, hotel accommodation, a dedicated patient coordinator, and aftercare support. You just need to book your flights.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#f5a623]/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="text-[#f5a623] font-semibold mr-2">⭐⭐⭐⭐⭐</span>
            Trusted by 10,000+ UK patients
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Get Your Dream Smile in Turkey<br />
            <span className="text-[#f5a623]">— Save Up to 70%</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            World-class dental treatment at a fraction of UK prices. Veneers, implants, Hollywood smiles and more — all in top-rated Turkish clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors shadow-xl"
            >
              Get My Free Quote
            </Link>
            <Link
              href="/prices"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors"
            >
              See Treatment Prices
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "✓ 10,000+ Patients",
              "✓ JCI-Accredited Clinics",
              "✓ Lifetime Guarantee",
              "✓ All-Inclusive Packages",
            ].map((item) => (
              <div key={item} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Turkey */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Why Choose Turkey for Dental Treatment?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Turkey has become Europe&apos;s leading destination for dental tourism — and for good reason.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Save Up to 70%",
                desc: "The same high-quality treatment that costs £800–£1,200 per tooth in the UK is available from just £195 in Turkey. The savings on full smile makeovers can easily reach £10,000–£20,000.",
              },
              {
                icon: "👨‍⚕️",
                title: "Expert Surgeons",
                desc: "Turkish dental surgeons are world-class, many trained in Germany, the UK, and USA. Clinics are equipped with the latest technology including 3D scanners, same-day CAD/CAM crowns, and digital smile design.",
              },
              {
                icon: "✈️",
                title: "All-Inclusive Packages",
                desc: "Your package typically includes all dental work, luxury hotel accommodation, airport transfers, a dedicated English-speaking coordinator, and full aftercare support. Just book your flights!",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Popular Treatments</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From single tooth restoration to full mouth makeovers, we cover every dental treatment you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <TreatmentCard key={t.href} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 bg-[#1a6b3c] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#155c32] transition-colors"
            >
              View All Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Your journey to a perfect smile in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "📸", title: "Send Photos", desc: "Send us photos of your teeth via WhatsApp or the contact form. No X-rays needed at this stage." },
              { step: "2", icon: "💬", title: "Free Quote", desc: "Our dental experts review your photos and send a detailed, personalised quote within 24 hours — completely free." },
              { step: "3", icon: "✈️", title: "Book & Travel", desc: "Choose your dates, book your flights, and we handle everything else — hotel, transfers, and appointments." },
              { step: "4", icon: "😁", title: "New Smile", desc: "Arrive, receive your treatment at our partner clinic, and fly home with a brand new smile and thousands in savings." },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                </div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">Real stories from real UK patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Real Patient Results</h2>
            <p className="text-gray-600 text-lg">See the transformations our patients have achieved</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { treatment: "Porcelain Veneers", patient: "Sarah, Manchester", savings: "Saved £4,200" },
              { treatment: "All-on-4 Implants", patient: "James, London", savings: "Saved £12,000" },
              { treatment: "Hollywood Smile", patient: "Claire, Birmingham", savings: "Saved £6,800" },
            ].map((result) => (
              <div key={result.patient} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 h-48">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Before</span>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">After</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-[#1a1a1a]">{result.treatment}</p>
                  <p className="text-sm text-gray-500">{result.patient}</p>
                  <p className="text-[#1a6b3c] font-semibold text-sm mt-1">✓ {result.savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Blog Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">From Our Blog</h2>
            <p className="text-gray-600 text-lg">Expert guides to help you make an informed decision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Is It Safe to Get Your Teeth Done in Turkey?",
                excerpt: "Everything you need to know about safety, accreditations, and what to look for when choosing a Turkish dental clinic.",
                href: "/blog/is-it-safe-to-get-teeth-done-in-turkey",
                tag: "Safety & Trust",
              },
              {
                title: "The Complete Guide to Dental Veneers in Turkey (2024)",
                excerpt: "Types, costs, procedure, recovery — everything UK patients need to know before booking veneers in Turkey.",
                href: "/blog/dental-veneers-turkey-guide",
                tag: "Treatment Guide",
              },
              {
                title: "How Much Do Dental Implants Cost in Turkey? (2024 Price Guide)",
                excerpt: "A comprehensive breakdown of implant costs in Turkey vs the UK, what's included, and how to get the best deal.",
                href: "/blog/how-much-do-dental-implants-cost-turkey",
                tag: "Pricing",
              },
            ].map((post) => (
              <article key={post.href} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-[#1a6b3c]/10 to-[#1a6b3c]/5 h-40 flex items-center justify-center">
                  <span className="text-5xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#1a6b3c] uppercase tracking-wider">{post.tag}</span>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={post.href}
                    className="text-[#1a6b3c] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-[#1a6b3c] font-semibold hover:underline">
              View All Blog Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Common Questions</h2>
          </div>
          <FAQAccordion faqs={homepageFaqs} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#1a6b3c] font-semibold hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
