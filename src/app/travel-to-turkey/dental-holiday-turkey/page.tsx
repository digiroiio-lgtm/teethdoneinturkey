import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Dental Holiday Turkey – UK Guide",
  description: "Everything you need to plan a dental holiday in Turkey. Flights from the UK, hotels near clinics, what to pack, tips from patients who've done it.",
};

export default function DentalHolidayPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Holiday Turkey – Complete Guide for UK Patients</h1>
          <p className="text-xl text-blue-200">Everything you need to know about planning your Turkish dental holiday</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Istanbul for Dental Treatment?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Istanbul is Turkey&apos;s largest city and home to hundreds of world-class dental clinics catering to international patients. It&apos;s just 3–4 hours from most UK airports, has excellent hotels near the clinic districts, and is a genuinely exciting city to visit while you&apos;re recovering.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Antalya is the alternative — a beautiful Mediterranean resort city with a more relaxed atmosphere, slightly cheaper hotels, and a strong cluster of dental clinics catering to European tourists. It&apos;s particularly popular for patients who want to combine treatment with a beach holiday.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flights from the UK to Turkey</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { city: "London (Heathrow/Gatwick/Stansted)", dest: "Istanbul", time: "3h 45m", price: "From £80 return" },
                { city: "Manchester", dest: "Istanbul", time: "4h 15m", price: "From £90 return" },
                { city: "Birmingham", dest: "Istanbul", time: "4h 00m", price: "From £95 return" },
                { city: "London", dest: "Antalya", time: "3h 45m", price: "From £70 return (seasonal)" },
              ].map(f => (
                <div key={f.city} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900">{f.city} → {f.dest}</p>
                  <p className="text-sm text-gray-600">Flight time: {f.time}</p>
                  <p className="text-sm text-[#1e40af] font-semibold">{f.price}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">* Flight prices vary by season and booking lead time. Turkish Airlines, EasyJet, Ryanair, and Pegasus all operate UK–Turkey routes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotels & Accommodation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our partner clinics can recommend hotels within easy reach — many are in Şişli or Nişantaşı (Istanbul) or Lara (Antalya), all with easy transport to the clinics. Budget options start from around £40/night; boutique hotels from £80/night.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Most patients are pleasantly surprised by how affordable Istanbul is. A week including flights and a 4-star hotel can come in well under £600 — meaning even after travel costs, you&apos;re saving thousands compared to UK dental fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Pack</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Passport (no visa required for UK citizens for up to 90 days)",
                "Travel insurance that covers dental treatment complications",
                "Any existing dental records or X-rays",
                "Comfortable clothes — loose around the collar for after procedures",
                "Soft foods for post-procedure meals (yoghurt, soup, smoothies)",
                "UK adaptor (Turkey uses Type F plugs, same as Europe)",
                "Pain relief medication approved by your clinic",
              ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-[#1e40af]">✓</span>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Tips</h2>
            <div className="space-y-3">
              {[
                "Book your flights only after your treatment dates are confirmed.",
                "Allow a recovery day or two before flying home — especially for implant surgery.",
                "Most clinics provide airport transfers — confirm this when you book.",
                "Save the clinic&apos;s WhatsApp number and contact our UK team for any questions.",
                "Take photos throughout your trip — you&apos;ll want to document the journey!",
              ].map((tip, i) => (
                <div key={i} className="flex gap-3 p-3 bg-blue-50 rounded-xl">
                  <span className="text-[#1e40af] font-bold">💡</span>
                  <p className="text-gray-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Start Planning Your Dental Holiday" subtitle="Book a free consultation and we&apos;ll help you plan every aspect of your dental trip to Turkey." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
