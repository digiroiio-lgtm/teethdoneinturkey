import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/all-on-4-turkey" },
  title: "All-on-4 Dental Implants Turkey",
  description: "All-on-4 dental implants in Turkey from £4,500. Full arch restoration in 5-7 days. JCI-accredited clinics. Compare to £15,000+ in the UK.",
};

export default function AllOn4Page() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All-on-4 Dental Implants Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Full arch restoration with 4 implants from £4,500</p>
          <p className="text-blue-300 mb-6">Compare to £15,000+ in the UK — save over 70%</p>
          <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price (per arch)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£15,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price (per arch)</p>
                <p className="text-3xl font-extrabold text-green-600">£4,500</p>
                <p className="text-xs text-green-600 font-semibold">Save 70%+</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is All-on-4?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All-on-4 is a full arch dental implant solution that uses just four strategically placed titanium implants to support a complete set of fixed teeth. Unlike traditional dentures, All-on-4 teeth are permanently fixed — you can&apos;t take them out, and they function just like natural teeth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The four implants are angled to maximise contact with the available jawbone, meaning All-on-4 is often possible even for patients with some bone loss who might not be suitable for individual implants. In most cases, you can receive temporary fixed teeth on the same day as implant placement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is All-on-4 For?</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Patients who are missing most or all teeth in one or both arches",
                "Patients with failing teeth that need full extraction",
                "Patients who currently wear dentures and want a permanent solution",
                "Patients who have experienced bone loss making individual implants difficult",
                "Patients seeking the most cost-effective full arch implant solution",
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-[#1e40af] font-bold">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All-on-4 Timeline (5–7 Days)</h2>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation & Scans", desc: "CBCT scan, assessment, and treatment planning." },
                { day: "Day 2", title: "Implant Surgery", desc: "4 implants placed under IV sedation or local anaesthetic. Temporary teeth fitted same day." },
                { day: "Day 3–4", title: "Recovery", desc: "Rest and soft diet. Follow-up appointment to check healing." },
                { day: "Day 5–6", title: "Adjustments", desc: "Fine-tuning of temporaries and final check before you fly home." },
                { day: "6 Months", title: "Final Teeth", desc: "Return for your permanent zirconia bridge — the final result." },
              ].map((item) => (
                <div key={item.day} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="bg-[#1e40af] text-white px-3 py-1 rounded-lg text-xs font-bold flex-shrink-0 h-fit">{item.day}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Enquire About All-on-4 Today" subtitle="Free consultation with our implant specialists. Find out if All-on-4 is right for you." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
