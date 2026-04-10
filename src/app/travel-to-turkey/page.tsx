import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/travel-to-turkey" },
  title: "Travel to Turkey for Dental Treatment",
  description: "Everything UK patients need to know about travelling to Turkey for dental treatment. Flights, hotels, what to expect.",
};

export default function TravelPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Travel to Turkey for Dental Treatment</h1>
          <p className="text-xl text-blue-200">Your complete UK patient guide to dental tourism in Turkey</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
