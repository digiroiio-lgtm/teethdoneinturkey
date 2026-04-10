import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/antalya-vs-istanbul-dental-clinics" },
  title: "Antalya vs Istanbul: Dental Treatment",
  description: "Comparing Antalya and Istanbul for dental treatment as a UK patient. Costs, clinic quality, travel, and which city suits different types of patients.",
};

export default function AntalyaVsIstanbulPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Travel</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Antalya vs Istanbul for Dental Treatment: Which Is Better for UK Patients?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Turkey&apos;s two primary dental tourism destinations are Istanbul and Antalya. Both offer excellent dental treatment, but they cater to slightly different patient profiles and offer different experiences. Here&apos;s how to decide which is right for you.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Istanbul: The Specialist Hub</h2>
          <p>Istanbul is Turkey&apos;s largest city and the centre of its premium dental tourism industry. The city hosts the highest concentration of JCI-accredited, internationally-recognised dental clinics in the country, with many dentists who have trained internationally and treat very high volumes of UK and European patients.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">✓ Istanbul advantages</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Highest concentration of specialist clinics</li>
                <li>→ Most JCI-accredited options</li>
                <li>→ Widest choice of specialist dentists</li>
                <li>→ Best for complex cases</li>
                <li>→ World-class city tourism</li>
                <li>→ Direct flights from most UK airports</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h3 className="font-bold text-amber-700 mb-2">Consider</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Larger, busier city</li>
                <li>→ More research needed to choose well</li>
                <li>→ Accommodation slightly higher cost</li>
                <li>→ No beach/resort option</li>
              </ul>
            </div>
          </div>
          <p><strong>Best for:</strong> Complex cases (implants, All-on-4/6, full mouth), patients wanting the widest choice of top-tier specialists, patients who enjoy city travel.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Antalya: The Resort Option</h2>
          <p>Antalya on Turkey&apos;s Mediterranean coast combines excellent dental treatment with a holiday experience. It&apos;s a popular package option — have your dental work done in the morning and recover by the pool or at the beach in the afternoon. The city has seen significant growth in its dental tourism sector and has excellent clinic options.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">✓ Antalya advantages</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Beautiful Mediterranean resort setting</li>
                <li>→ More affordable accommodation overall</li>
                <li>→ Combines treatment with holiday</li>
                <li>→ Direct flights from UK airports</li>
                <li>→ More relaxed, resort atmosphere</li>
                <li>→ Often included hotel partnerships</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h3 className="font-bold text-amber-700 mb-2">Consider</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Fewer clinic choices than Istanbul</li>
                <li>→ Less ideal in winter months (October–March)</li>
                <li>→ Smaller pool of complex case specialists</li>
              </ul>
            </div>
          </div>
          <p><strong>Best for:</strong> Patients wanting to combine treatment with a beach/resort holiday, veneers or straightforward implant cases, visiting in spring or summer.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost Comparison: Istanbul vs Antalya</h2>
          <p>Treatment prices are very similar between Istanbul and Antalya at comparable clinic quality levels. The main cost differences are in accommodation and daily expenses:</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Cost Factor</th>
                  <th className="px-4 py-3 text-center">Istanbul</th>
                  <th className="px-4 py-3 text-center">Antalya</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Veneer treatment (E-max)", ist: "From £190/tooth", ant: "From £190/tooth" },
                  { f: "Implant treatment", ist: "From £450", ant: "From £450" },
                  { f: "Mid-range hotel (per night)", ist: "£60–£100", ant: "£40–£70" },
                  { f: "Flights from London", ist: "£60–£120", ant: "£70–£130" },
                  { f: "Daily food/transport", ist: "£30–£60", ant: "£25–£50" },
                ].map((r, i) => (
                  <tr key={r.f} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.f}</td>
                    <td className="px-4 py-3 text-center">{r.ist}</td>
                    <td className="px-4 py-3 text-center">{r.ant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Other Turkish Dental Destinations</h2>
          <p>While Istanbul and Antalya dominate, other Turkish cities also have notable dental tourism provision:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li><strong>Izmir:</strong> Turkey&apos;s third city — excellent clinics, slightly cheaper, good for a city-and-coastal experience</li>
            <li><strong>Alanya:</strong> Smaller coastal resort with growing dental tourism sector</li>
            <li><strong>Bodrum:</strong> Upscale resort with good clinic options for visitors seeking a luxury experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Recommendation</h2>
          <p>For complex treatments (All-on-4, All-on-6, full mouth implants, significant smile makeovers): <strong>Istanbul</strong> — the highest concentration of specialist expertise.</p>
          <p>For veneers or single implants combined with a holiday: either city works well, with <strong>Antalya</strong> offering the more relaxed, resort experience — particularly appealing April through October.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We&apos;ll match you with the right clinic in the right city</p>
            <p className="text-gray-600 text-sm mb-4">Tell us your treatment and travel preferences — we&apos;ll recommend the ideal clinic from our vetted network in Istanbul and Antalya.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Book Free Consultation</Link>
              <Link href="/travel-to-turkey/dental-holiday-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Dental Holiday Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
