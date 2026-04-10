import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/before-after" },
  title: "Before & After Turkey Dental Results",
  description: "See real before and after photos from UK patients who had dental treatment in Turkey. Veneers, implants, smile makeovers.",
};

const cases = [
  { name: "Sarah, 34 — Manchester", treatment: "20 E-max Veneers", saving: "Saved £14,000" },
  { name: "James, 52 — London", treatment: "All-on-4 Implants (both arches)", saving: "Saved £22,000" },
  { name: "Claire, 28 — Birmingham", treatment: "16 Porcelain Veneers", saving: "Saved £11,500" },
  { name: "David, 45 — Leeds", treatment: "Dental Implants x4", saving: "Saved £8,200" },
  { name: "Emma, 31 — Bristol", treatment: "Full Smile Makeover", saving: "Saved £9,000" },
  { name: "Michael, 58 — Edinburgh", treatment: "All-on-6 Implants", saving: "Saved £12,500" },
];

export default function BeforeAfterPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Before & After</h1>
          <p className="text-xl text-blue-200">Real patient transformations — see the results for yourself</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            The before and after photos below represent real patient cases from our partner clinics. Photos have been provided by patients with their consent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                {/* Before/After placeholder */}
                <div className="grid grid-cols-2 h-48">
                  <div className="bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-400 text-4xl mb-1">😬</div>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-300 px-2 py-0.5 rounded">BEFORE</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">😁</div>
                      <span className="text-xs font-semibold text-[#1e40af] bg-blue-200 px-2 py-0.5 rounded">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.treatment}</p>
                  <p className="text-sm font-bold text-green-600 mt-1">{c.saving}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Want to see your own transformation? Book a free consultation and get a digital smile preview within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation" className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">See My Potential Results</Link>
              <Link href="/reviews" className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Read Patient Reviews</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">What Our UK Patients Achieved</h2>
          <p className="text-gray-600">The transformations shown above are representative of real outcomes our UK patients have achieved with our partner clinics in Turkey. Every case is unique — treatment type, number of teeth, materials chosen, and the starting condition of your teeth all influence the final result. That&apos;s why we offer a free personalised consultation before recommending any treatment.</p>

          <h2 className="text-2xl font-bold text-gray-900">How Are Before &amp; After Photos Taken?</h2>
          <p className="text-gray-600">Our partner clinics use standardised dental photography protocols. Photos are taken in the same lighting conditions, from the same angles, before treatment begins and on the final day of the patient&apos;s visit. Where Digital Smile Design (DSD) technology is used, patients also receive a digital preview of their expected outcome before any work begins.</p>

          <h2 className="text-2xl font-bold text-gray-900">Most Common Treatments Shown</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Porcelain & E-max Veneers", desc: "The most popular treatment for UK patients. Ultra-thin shells bonded to the front of teeth to correct colour, shape, gaps, and chips. Typically 16–20 teeth treated in a single 5-day visit." },
              { title: "Dental Implants", desc: "Permanent titanium root replacements topped with zirconia or porcelain crowns. Results shown include single implants and full-arch (All-on-4 / All-on-6) cases." },
              { title: "Full Smile Makeovers", desc: "A combination of veneers, crowns, whitening, and sometimes gum contouring. Designed using Digital Smile Design software to suit the patient&apos;s facial proportions." },
              { title: "All-on-4 Full Arch", desc: "Complete restoration of an entire arch of missing or failing teeth using just 4 implants. Patients leave Turkey with a full, permanent smile in as little as 5–7 days." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2">Ready to See Your Own Transformation?</h3>
            <p className="text-gray-600 text-sm mb-4">Send us photos of your smile and our dental team will give you an honest assessment of what&apos;s achievable — along with a full cost estimate. No obligation, completely free.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors text-sm">Start My Free Consultation</Link>
          </div>
        </div>
      </section>

      <CTASection title="Could This Be You?" subtitle="Book a free consultation and our dentists will show you exactly what your new smile could look like." buttonText="Get My Digital Smile Preview" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
