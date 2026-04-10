import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Dental Holiday Turkey Guide for UK Patients 2024",
  description: "Everything you need to plan a dental holiday in Turkey — flights, accommodation, what to expect, tips from patients, and how to get the most from your trip.",
};

export default function DentalHolidayGuideBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Travel</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">The Complete Dental Holiday Turkey Guide for UK Patients</h1>
          <p className="text-gray-500 text-sm">Published September 2024 · 7 min read</p>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>A dental holiday in Turkey has become one of the most popular choices for UK patients seeking high-quality cosmetic and restorative dental work without the eye-watering UK price tag. Here&apos;s everything you need to know to plan your trip.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Turkey?</h2>
          <p>Turkey has invested significantly in healthcare infrastructure and medical tourism over the past 20 years. Today, Istanbul and Antalya are home to some of the world&apos;s most advanced dental clinics, attracting patients from the UK, Germany, the Netherlands, and beyond. The combination of genuine expertise, premium materials, modern facilities, and dramatically lower prices has made Turkey the number one dental tourism destination globally.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your Trip</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Book a free consultation first.</strong> Send photos of your teeth and a description of what you want to achieve. A reputable provider will prepare a treatment plan and cost estimate before you book anything.</li>
            <li><strong>Confirm your treatment dates.</strong> Only book flights once your clinic appointment is confirmed. Clinics are busy and popular time slots fill up.</li>
            <li><strong>Book flights.</strong> Turkish Airlines, EasyJet, Ryanair, and Pegasus all fly from multiple UK airports to Istanbul and Antalya. Book direct flights for convenience.</li>
            <li><strong>Arrange accommodation.</strong> Your clinic can recommend nearby hotels. Expect to pay £40–£100/night for a good hotel near the clinic district.</li>
            <li><strong>Get travel insurance.</strong> Choose a policy that covers dental treatment complications and emergency dental care abroad.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Making the Most of Your Time</h2>
          <p>Between appointments, Istanbul is a genuinely extraordinary city. The Grand Bazaar, Hagia Sophia, the Bosphorus, and world-class Turkish cuisine make Istanbul a destination worth visiting in its own right. Most patients find the recovery days between appointments are a perfect opportunity to explore.</p>
          <p>Antalya offers a more relaxed Mediterranean experience — beautiful beaches, a charming old town, and excellent restaurants. It&apos;s particularly popular in summer when patients can combine treatment with a genuine holiday.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">After You Return Home</h2>
          <p>Your clinic will provide full aftercare instructions and remains available via WhatsApp and email for any questions. We recommend informing your UK dentist about the work done and asking them to include it in your records. Annual check-ups with a local dentist are important for maintaining any dental work.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Ready to plan your dental holiday?</p>
            <p className="text-gray-600 text-sm mb-4">Book a free consultation and our team will handle every aspect of planning your trip.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Start Planning</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
