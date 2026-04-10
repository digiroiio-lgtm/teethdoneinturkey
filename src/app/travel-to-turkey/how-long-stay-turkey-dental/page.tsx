import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How Long for Dental Work in Turkey",
  description: "Find out exactly how many days you need in Turkey for veneers, implants, All-on-4, and other dental treatments. Day-by-day treatment timelines.",
};

export default function HowLongStayPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">How Long Do You Need to Stay in Turkey for Dental Treatment?</h1>
          <p className="text-xl text-blue-200">Day-by-day timelines for every major dental procedure</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-gray-600 leading-relaxed text-lg">
            One of the most common questions from patients planning dental treatment in Turkey is: how much time do I need to take off work? The answer depends on your treatment, but most procedures can be completed in 5–7 days.
          </p>

          {[
            {
              treatment: "Porcelain Veneers (E-max/Zirconia)",
              days: "5–7 days",
              schedule: [
                { day: "Day 1", desc: "Arrival, consultation, X-rays and photos, treatment plan confirmed" },
                { day: "Day 2", desc: "Tooth preparation, digital impressions, temporary veneers fitted" },
                { day: "Days 3–4", desc: "Rest. Explore Istanbul/Antalya. Lab crafts your permanent veneers." },
                { day: "Day 5–6", desc: "Permanent veneers fitted and bonded. Final adjustments." },
                { day: "Day 7", desc: "Review appointment and fly home" },
              ],
            },
            {
              treatment: "Single Dental Implant",
              days: "Two trips required",
              schedule: [
                { day: "Trip 1, Day 1", desc: "Consultation, CBCT scan, treatment planning" },
                { day: "Trip 1, Day 2", desc: "Implant placement surgery. Temporary crown fitted." },
                { day: "Trip 1, Days 3–5", desc: "Recovery. Fly home after follow-up check." },
                { day: "3–6 months later", desc: "Osseointegration period at home" },
                { day: "Trip 2, Days 1–3", desc: "Crown fitting and final adjustments. Fly home." },
              ],
            },
            {
              treatment: "All-on-4 / All-on-6",
              days: "5–7 days (Trip 1) + return trip 6 months later",
              schedule: [
                { day: "Day 1", desc: "Consultation, CBCT scan, extraction planning if needed" },
                { day: "Day 2", desc: "Extractions (if required) and implant placement under sedation. Temporary teeth same day." },
                { day: "Days 3–4", desc: "Recovery. Soft diet. Follow-up check." },
                { day: "Day 5–6", desc: "Temporary adjustment, photography, final checks before flying home." },
                { day: "6 months later", desc: "Return for permanent zirconia bridge fitting (3–4 days)" },
              ],
            },
          ].map(item => (
            <div key={item.treatment} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-[#1e40af] text-white px-5 py-3 flex justify-between items-center">
                <h2 className="font-bold">{item.treatment}</h2>
                <span className="text-blue-200 text-sm">{item.days}</span>
              </div>
              <div className="divide-y divide-gray-100">
                {item.schedule.map(s => (
                  <div key={s.day} className="flex gap-4 px-5 py-3">
                    <span className="text-[#1e40af] font-semibold text-sm w-32 flex-shrink-0">{s.day}</span>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Plan Your Treatment Trip" subtitle="Book a free consultation and get your personalised treatment timeline." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
