import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/turkey-teeth-clinic" },
  title: "Turkey Teeth Clinic – How to Choose the Right One",
  description: "How to choose the best turkey teeth clinic for UK patients. What accreditations to look for, questions to ask, and red flags to avoid. Expert guide 2026.",
};

const checklistItems = [
  { icon: "🏥", title: "JCI Accreditation", desc: "Joint Commission International is the gold standard for international hospital and clinic accreditation. JCI-accredited clinics in Turkey meet the same safety standards as leading UK hospitals." },
  { icon: "🦷", title: "In-House Laboratory", desc: "The best clinics have their own on-site lab, allowing faster turnaround, better quality control, and same-day adjustments. Clinics using external labs can't offer this level of precision." },
  { icon: "📐", title: "Digital Smile Design (DSD)", desc: "DSD software allows dentists to show you a digital preview of your new smile before any preparation begins. It's a sign of a modern, patient-centred clinic." },
  { icon: "🔬", title: "CBCT Scanner On-Site", desc: "A Cone Beam CT scanner provides 3D imaging for implant planning and diagnosis. Clinics without one will send you to external imaging centres, adding time and cost." },
  { icon: "🌍", title: "Premium Implant Brands", desc: "Reputable clinics use internationally recognised implant brands: Straumann, Nobel Biocare, Astra Tech, or Osstem. Ask which brand they use before booking." },
  { icon: "📋", title: "Written Guarantee", desc: "All work should come with a written guarantee — ideally 5–10 years. Avoid any clinic that won't provide one." },
  { icon: "🗣️", title: "English-Speaking Coordinator", desc: "Your patient coordinator should be fluent in English and available throughout your trip via WhatsApp. Communication gaps are a leading cause of misunderstandings." },
  { icon: "✈️", title: "Aftercare Support for UK Patients", desc: "The clinic should have a defined process for UK patients who need follow-up. Will they co-ordinate with your UK dentist? Can they address issues remotely or on a return visit?" },
];

const redFlags = [
  "Prices significantly lower than the Turkish average (often a sign of cost-cutting on materials or lab work)",
  "No JCI accreditation or verifiable international certification",
  "Unable to provide before/after photos of actual patients",
  "No written guarantee offered",
  "Pressure to book immediately — reputable clinics don't use high-pressure sales tactics",
  "No English-speaking coordinator",
  "External laboratory (means less quality control and slower turnaround)",
  "No CBCT scanner on-site (essential for implant work)",
];

const questions = [
  "Which implant brand do you use, and can you show me the manufacturer certificate?",
  "Do you have an in-house laboratory?",
  "Do you use Digital Smile Design software?",
  "What guarantee do you provide on crowns, veneers, and implants?",
  "How do you handle complications or adjustments for patients who have returned to the UK?",
  "Can I speak to previous UK patients as references?",
  "What is included in the quoted price?",
  "Who is my dedicated patient coordinator and how do I contact them?",
];

const cities = [
  {
    city: "Istanbul",
    pros: ["Largest number of premium clinics", "Widest choice of specialists", "Major international hub — easy flights from UK"],
    cons: ["Larger city — more logistics", "Some tourist-trap clinics targeting package tourists"],
    best: "Complex cases, implants, full smile makeovers",
  },
  {
    city: "Antalya",
    pros: ["Popular dental tourism destination", "More relaxed pace, resort-style environment", "Good flight connections from UK"],
    cons: ["Fewer top-tier clinics than Istanbul", "More seasonal variation in availability"],
    best: "Veneers, crowns, combined dental + holiday trips",
  },
  {
    city: "Izmir",
    pros: ["Growing dental tourism hub", "Lower prices than Istanbul", "Good international airport"],
    cons: ["Fewer English-speaking staff", "Less established for UK patients"],
    best: "Budget-conscious patients, straightforward cases",
  },
];

const faqs = [
  {
    q: "How do I know if a Turkish dental clinic is legitimate?",
    a: "Look for JCI accreditation, verifiable patient reviews on Google and independent platforms, a clear written guarantee policy, and a transparent process for handling complications. Legitimate clinics will always provide detailed treatment plans before you commit.",
  },
  {
    q: "Is it safe to get teeth done at a Turkish clinic?",
    a: "Yes — provided you choose a reputable, accredited clinic. Turkey has hundreds of internationally accredited dental clinics serving millions of medical tourists annually. The key is doing your research and not choosing based on price alone.",
  },
  {
    q: "Can I visit a clinic before committing to treatment?",
    a: "Many UK patients have a free remote consultation first — sending X-rays, photos, and discussing their case via video call. This allows you to assess the clinic's communication and professionalism before travelling.",
  },
  {
    q: "What happens if I'm unhappy with the results?",
    a: "Reputable clinics will rectify any issues within the guarantee period. Our partner clinics also provide ongoing UK liaison support, so any concerns can be escalated through us directly.",
  },
  {
    q: "Are there clinics that specialise in UK patients?",
    a: "Yes. Many Istanbul and Antalya clinics have dedicated UK patient coordinators, UK-facing websites, and experience managing the specific needs of British patients — including aftercare coordination with UK dentists.",
  },
];

export default function TurkeyTeethClinicPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Turkey Teeth Clinic – How to Choose the Right One</h1>
          <p className="text-xl text-blue-200">The complete guide for UK patients selecting a dental clinic in Turkey</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Choosing the right clinic is the single most important decision when getting dental work in Turkey. With hundreds of clinics competing for UK patients, the quality gap between the best and worst is significant. This guide tells you exactly what to look for — and what to avoid.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8 Things Every Good Turkey Teeth Clinic Should Have</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {checklistItems.map(item => (
                <div key={item.title} className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Istanbul vs Antalya vs Izmir — Which City?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {cities.map(c => (
                <div key={c.city} className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                  <h3 className="font-extrabold text-[#1e40af] text-lg mb-3">{c.city}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Pros</p>
                    <ul className="space-y-1">
                      {c.pros.map(p => <li key={p} className="text-sm text-gray-700 flex gap-1.5"><span className="text-green-500 mt-0.5">✓</span>{p}</li>)}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Cons</p>
                    <ul className="space-y-1">
                      {c.cons.map(p => <li key={p} className="text-sm text-gray-700 flex gap-1.5"><span className="text-yellow-500 mt-0.5">–</span>{p}</li>)}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Best for</p>
                    <p className="text-sm text-gray-700">{c.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Avoid</h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <ul className="space-y-3">
                {redFlags.map((flag, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span className="text-sm">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions to Ask Before Booking</h2>
            <ol className="space-y-3">
              {questions.map((q, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-[#1e40af] font-bold min-w-[1.5rem]">{i + 1}.</span>
                  <span className="text-sm">{q}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Partner Clinics Are Selected</h2>
            <p className="text-gray-600 mb-4">
              We work exclusively with a small number of carefully vetted clinics in Istanbul and Antalya. Every clinic in our network has been assessed in person and must meet strict criteria:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🏆", title: "JCI Accredited", desc: "Or equivalent international accreditation, verified directly with the certifying body." },
                { icon: "🔍", title: "In-Person Assessment", desc: "Our team has visited every partner clinic. We've seen the labs, met the dentists, and reviewed case files." },
                { icon: "📊", title: "Patient Outcome Tracking", desc: "We monitor outcomes and patient feedback. Clinics that don't maintain our standards are removed." },
                { icon: "🇬🇧", title: "UK Patient Experience", desc: "Every partner clinic has a dedicated English-speaking UK patient coordinator and clear aftercare protocols." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex gap-3">
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
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Matched with a Vetted Clinic</Link>
            <Link href="/reviews" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Read Patient Reviews</Link>
            <Link href="/prices/turkey-teeth-cost" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">View Price Guide</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let Us Match You with the Right Clinic"
        subtitle="Tell us about your treatment and we'll recommend the best-matched clinic from our vetted network — free, no obligation."
        buttonText="Get My Free Clinic Match"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
