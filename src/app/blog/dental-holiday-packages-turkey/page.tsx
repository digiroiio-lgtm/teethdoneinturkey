import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Holiday Packages Turkey",
  description: "Everything about dental holiday packages in Turkey for UK patients. What's included, how packages work, costs, and how to book your treatment and stay.",
};

export default function DentalHolidayPackagesPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Travel</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Holiday Packages Turkey: UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>A dental holiday package combines your dental treatment in Turkey with accommodation and transfers — simplifying the planning process and often reducing total costs. Here&apos;s everything UK patients need to know about dental holiday packages in Turkey.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is a Dental Holiday Package?</h2>
          <p>A dental holiday package typically includes:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>Your dental treatment (veneers, implants, smile makeover, etc.)</li>
            <li>Partner hotel accommodation for the duration of your treatment</li>
            <li>Airport-to-hotel and hotel-to-clinic transfers</li>
            <li>A dedicated patient co-ordinator for the duration of your stay</li>
            <li>Sometimes a welcome dinner, city guide, or other extras</li>
          </ul>
          <p>Flights are usually booked separately — this gives you maximum flexibility on airlines and departure airports.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does a Dental Package Cost?</h2>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-4">
            <h3 className="font-bold text-gray-900 mb-3">Example: 20 Veneers + 6 Nights Antalya Package</h3>
            <div className="space-y-2 text-sm">
              {[
                { item: "20 E-max veneers", cost: "£3,800" },
                { item: "6 nights 4-star hotel (included)", cost: "£0 (included)" },
                { item: "Airport transfers (included)", cost: "£0 (included)" },
                { item: "Return flights from London", cost: "£80–£150" },
                { item: "Total all-in", cost: "£3,880–£3,950" },
              ].map((row, i) => (
                <div key={row.item} className={`flex justify-between ${i === 4 ? "border-t border-blue-300 pt-2 font-bold text-[#1e40af]" : ""}`}>
                  <span>{row.item}</span>
                  <span>{row.cost}</span>
                </div>
              ))}
            </div>
          </div>
          <p>Compare to the same treatment in the UK (£18,000+ for veneers alone) — the saving is approximately £14,000.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Istanbul Dental Packages</h2>
          <p>Istanbul packages focus on the city-break experience combined with treatment at world-class clinics. Options include:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>4- or 5-star hotel accommodation in Beyoglu, Sultanahmet, or Sisli — Istanbul&apos;s dental clinic hubs</li>
            <li>Transfers between airport, hotel, and clinic</li>
            <li>Dedicated international patient manager throughout your stay</li>
            <li>Evening/free time to explore Istanbul&apos;s remarkable cultural attractions</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Antalya Dental Packages</h2>
          <p>Antalya packages combine treatment with a genuine beach holiday, ideal for patients travelling in spring or summer:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>Resort hotel accommodation — often 4 or 5-star with pool</li>
            <li>Treatment appointments typically in the mornings, afternoons free</li>
            <li>Excellent weather April–October</li>
            <li>Often combined with a longer holiday stay before or after treatment</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Book a Dental Holiday Package</h2>
          <ol className="space-y-3 my-4 list-decimal list-inside">
            <li><strong>Book a free consultation</strong> — we confirm your treatment plan and recommend the ideal clinic and city for your needs</li>
            <li><strong>Treatment dates confirmed</strong> — we book your clinic appointments around your preferred travel dates</li>
            <li><strong>Package arranged</strong> — hotel and transfers are organised through our clinic partnerships</li>
            <li><strong>You book flights independently</strong> — we recommend times that work with your clinic schedule</li>
            <li><strong>Pre-trip support</strong> — we provide a full trip briefing: clinic address, what to expect each day, what to bring</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Planning Your Dental Holiday</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Book flights flexibly — your treatment timetable may require adjustment based on how your procedure progresses</li>
            <li>Allow an extra day at the end as a buffer in case the final fitting needs a small adjustment</li>
            <li>Inform your travel insurance company about the dental treatment — specialist dental tourism cover is advisable</li>
            <li>Bring comfortable clothing — some patients experience mild swelling or discomfort after some procedures</li>
            <li>Plan light activities for treatment days; more active excursions for your free days</li>
          </ul>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Plan your dental holiday with us</p>
            <p className="text-blue-200 mb-4">Free consultation + package recommendations. We handle the clinic booking, hotel, and transfers — you just book the flights.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Start Planning Free</Link>
              <Link href="/travel-to-turkey/dental-holiday-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Dental Holiday Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
