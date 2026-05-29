import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/free-treatment-plan" },
  title: "Get Your Free Dental Treatment Plan – Turkey",
  description: "Get a free personalised dental treatment plan for Turkey. Includes treatment options, cost breakdown, timeline, and clinic recommendation. No obligation.",
};

const steps = [
  {
    step: "1",
    title: "Send Us Your Photos & X-rays",
    desc: "Take a simple set of photos of your teeth (front, side, and smile). If you have recent dental X-rays, include those too. No need for a formal dental appointment.",
  },
  {
    step: "2",
    title: "Our Dentist Reviews Your Case",
    desc: "A qualified dentist from our partner clinic reviews your photos and X-rays within 24 hours and creates a tailored treatment recommendation.",
  },
  {
    step: "3",
    title: "Receive Your Full Treatment Plan",
    desc: "You'll receive a detailed plan covering: recommended treatment, materials, number of teeth, estimated cost breakdown, trip length, and payment options.",
  },
  {
    step: "4",
    title: "Book When You're Ready",
    desc: "There's no pressure and no obligation. When you're ready, we'll arrange your appointment, clinic transfer, and hotel in one go.",
  },
];

const includes = [
  "Recommended treatment type (veneers, implants, crowns, or combination)",
  "Material options (E-max, zirconia, composite) with pros and cons",
  "Number of teeth to be treated",
  "All-inclusive cost breakdown (clinic fees, hotel, transfers)",
  "Monthly payment options if applicable",
  "Estimated trip length and suggested travel dates",
  "Clinic profile and dentist biography",
  "Patient reviews relevant to your treatment type",
];

const treatments = [
  { name: "Veneers", from: "£190/tooth", icon: "✨", href: "/treatments/veneers-turkey" },
  { name: "Dental Implants", from: "£380/implant", icon: "🦷", href: "/treatments/dental-implants-turkey" },
  { name: "All-on-4", from: "£4,500/arch", icon: "🏆", href: "/treatments/all-on-4-turkey" },
  { name: "All-on-6", from: "£5,600 (full package)", icon: "⭐", href: "/treatments/all-on-6-turkey" },
  { name: "Full Smile Makeover", from: "£2,800", icon: "😁", href: "/treatments/full-smile-makeover-turkey" },
  { name: "Crowns & General", from: "£130/crown", icon: "🔬", href: "/prices/teeth-done-in-turkey-cost" },
];

const faqs = [
  {
    q: "Is the treatment plan really free?",
    a: "Yes, completely. There's no charge and no obligation. We provide free treatment plans because it's the best way to show you what's possible and help you make an informed decision.",
  },
  {
    q: "How quickly will I receive my plan?",
    a: "Most treatment plans are sent within 24 hours of receiving your photos. In some cases, particularly complex cases, it may take up to 48 hours.",
  },
  {
    q: "Do I need to send dental X-rays?",
    a: "X-rays are helpful but not always required for an initial plan. For implant cases we do need a CBCT scan — our team will let you know if this applies to you. Many patients get their initial quote from photos alone.",
  },
  {
    q: "What photos should I send?",
    a: "A front-on smile photo, a close-up of your upper and lower teeth, and a side profile are usually sufficient. Our team will guide you on exactly what to send.",
  },
  {
    q: "Will I be pressured to book?",
    a: "No. Our patient coordinators are here to answer questions and provide information. There are no sales targets and no pressure to commit. Many patients take weeks or months from their first plan to booking — that's completely fine.",
  },
];

export default function FreeTreatmentPlanPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-[#1e40af] text-sm font-extrabold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            100% Free · No Obligation
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get Your Free Dental Treatment Plan</h1>
          <p className="text-xl text-blue-200 mb-8">Send us your photos and receive a personalised treatment plan, cost breakdown, and clinic recommendation within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start My Free Plan →
            </Link>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(s => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-extrabold text-xl mx-auto mb-4">{s.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in Your Free Plan</h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatments We Cover</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {treatments.map(t => (
                <Link key={t.name} href={t.href} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors block text-center">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{t.name}</h3>
                  <p className="text-xs text-[#1e40af] font-semibold">From {t.from}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-yellow-400 mb-1">24h</p>
                <p className="text-sm text-gray-300">Response time</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-yellow-400 mb-1">Free</p>
                <p className="text-sm text-gray-300">No charge, ever</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-yellow-400 mb-1">0</p>
                <p className="text-sm text-gray-300">Obligation to book</p>
              </div>
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

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Ready to find out exactly what your treatment will cost?</p>
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors inline-block">
              Get My Free Treatment Plan
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Your Free Plan Is One Step Away"
        subtitle="Send us your photos via WhatsApp or our consultation form and we'll come back with a full personalised plan within 24 hours."
        buttonText="Request Free Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
