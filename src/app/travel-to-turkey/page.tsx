import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/travel-to-turkey" },
  title: "Travel to Turkey for Dental Treatment",
  description: "Everything UK patients need to know about travelling to Turkey for dental treatment. Flights, hotels, what to expect.",
};

export default function TravelPage() {
  return (
    <>
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Travel to Turkey for Dental Treatment</h1>
          <p className="text-xl text-blue-200">Your complete UK patient guide to dental tourism in Turkey</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
            <p>
              Most UK patients travel to Istanbul or Antalya for dental work, with direct flights from several UK airports. A typical veneer or implant-placement trip takes around 5–7 days, so the planning questions are usually practical: how long to be away, where to stay, and what happens if something needs adjusting after you fly home.
            </p>
            <p>
              The two guides below cover those questions. Start with the dental holiday guide if you are comparing destinations, flights and hotels. Use the length-of-stay guide if your main constraint is time off work, as it sets out a day-by-day schedule for each treatment.
            </p>
            <p>
              Travel and accommodation are usually separate from the treatment price unless a package says otherwise, so check exactly what a quote includes. If you want a personalised estimate, the{" "}
              <Link href="/price-calculator" className="text-[#1e40af] underline">price calculator</Link> shows treatment costs against UK prices, and a{" "}
              <Link href="/free-treatment-plan" className="text-[#1e40af] underline">free treatment plan</Link> confirms the number of days your case needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/travel-to-turkey/dental-holiday-turkey" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-[#1e40af] rounded-2xl p-6 transition-all">
              <div className="text-4xl mb-3">✈️</div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1e40af] mb-2">Dental Holiday Turkey</h2>
              <p className="text-gray-600 text-sm">Complete guide for UK patients planning a dental holiday. Flights, hotels, clinics, tips.</p>
            </Link>
            <Link href="/travel-to-turkey/how-long-stay-turkey-dental" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-[#1e40af] rounded-2xl p-6 transition-all">
              <div className="text-4xl mb-3">📅</div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1e40af] mb-2">How Long to Stay</h2>
              <p className="text-gray-600 text-sm">Exactly how many days you need in Turkey for veneers, implants, and other treatments.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
