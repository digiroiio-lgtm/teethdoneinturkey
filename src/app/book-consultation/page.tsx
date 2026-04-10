import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  alternates: { canonical: "/book-consultation" },
  title: "Book Free Dental Consultation Turkey",
  description: "Book a free dental consultation for treatment in Turkey. No obligation. Get a personalised treatment plan and cost estimate within 24 hours.",
};

export default function BookConsultationPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Book Your Free Dental Consultation</h1>
          <p className="text-xl text-blue-200 mb-3">Get a personalised treatment plan and cost estimate within 24 hours</p>
          <p className="text-blue-300">100% free · No obligation · UK patient support throughout</p>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Free Consultation</h2>
              <p className="text-gray-600 text-sm mb-6">Fill in the form and we&apos;ll contact you within 24 hours to arrange your free consultation by phone, video call, or WhatsApp.</p>
              <BookingForm />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
              {[
                { step: "1", title: "Submit your request", desc: "Fill in the form with your details and treatment interest." },
                { step: "2", title: "We contact you within 24hrs", desc: "Our UK team will call or WhatsApp to arrange your consultation." },
                { step: "3", title: "Share your photos", desc: "Send photos of your teeth and any existing dental records." },
                { step: "4", title: "Receive your treatment plan", desc: "We prepare a detailed treatment plan and all-inclusive cost estimate." },
                { step: "5", title: "Book your trip", desc: "When you&apos;re ready, we help you plan every aspect of your dental trip." },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="font-semibold text-gray-900 mb-2">Prefer to WhatsApp?</p>
                <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Why Book a Consultation First?</h2>
          <p className="text-gray-600">Every patient&apos;s dental situation is different. Before recommending any treatment, our team wants to understand your dental history, your goals, and your budget. A free consultation allows our partner dentists to review your case properly — so that when you do travel to Turkey, your treatment is already planned, costed, and ready to begin. This avoids surprises and ensures the best possible outcome.</p>

          <h2 className="text-2xl font-bold text-gray-900">What We Discuss in the Consultation</h2>
          <ul className="space-y-2 text-gray-600">
            {[
              "Your dental goals — cosmetic improvement, tooth replacement, or both",
              "A review of your current dental health and any existing treatment",
              "Recommended treatments and the expected results",
              "A transparent, all-inclusive cost estimate in GBP",
              "Typical treatment timeline and how many days you&apos;ll need in Turkey",
              "Finance options if you&apos;d like to spread the cost monthly",
              "Travel logistics — flights, accommodation, and airport transfers",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🏆", title: "JCI-Accredited Clinics", desc: "All partner clinics hold international healthcare accreditation equivalent to top UK standards." },
              { icon: "💳", title: "Finance Available", desc: "Spread costs from £82/month with 0% options. Soft credit check, no impact on your score." },
              { icon: "🇬🇧", title: "UK Support Throughout", desc: "A UK-based patient coordinator supports you before, during, and after your treatment." },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
