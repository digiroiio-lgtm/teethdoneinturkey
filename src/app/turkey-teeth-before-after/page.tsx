import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/turkey-teeth-before-after" },
  title: "Turkey Teeth Before & After – UK Patient Results",
  description: "See Turkey teeth before and after results from real UK patients. Veneers, dental implants, and full smile makeovers. All treatments completed in Turkey.",
};

const cases = [
  { name: "Rachel, 29 — Newcastle", treatment: "18 E-max Veneers", saving: "Saved £16,500", detail: "Rachel had always been self-conscious about stained, uneven teeth. After two days of preparation and two days of fitting at our Antalya partner clinic, she left Turkey with a full smile makeover for £3,420 — versus an estimated £19,800 at her local UK practice." },
  { name: "Tom, 47 — Glasgow", treatment: "All-on-4 (upper arch)", saving: "Saved £10,200", detail: "Tom had been wearing a denture for several years and was ready for a permanent solution. His All-on-4 treatment in Istanbul cost £4,800 — including the temporary arch he flew home with on day 4 and the permanent zirconia arch fitted on his return visit 6 months later." },
  { name: "Joanna, 33 — London", treatment: "20 Porcelain Veneers", saving: "Saved £15,000", detail: "Joanna had a significant gap and several chipped teeth. Using Digital Smile Design technology, the clinic showed her exactly what her new smile would look like before any prep work began. The final result exceeded her expectations." },
  { name: "Paul, 55 — Bristol", treatment: "6 Dental Implants", saving: "Saved £13,500", detail: "Paul needed six implants to replace teeth lost due to gum disease. Using Straumann implants at our Istanbul clinic, his total treatment cost £3,300 — compared to £16,800 quoted by two London practices." },
  { name: "Lauren, 26 — Manchester", treatment: "16 Zirconia Veneers", saving: "Saved £13,800", detail: "Lauren chose zirconia for its extra strength and chose a natural champagne-white shade rather than the ultra-bright look. Her dentist used DSD software to ensure the shape complemented her facial features." },
  { name: "Graham, 61 — Leeds", treatment: "All-on-6 (both arches)", saving: "Saved £21,000", detail: "Graham had failing teeth across both arches and needed a complete solution. His All-on-6 full-mouth reconstruction — using Nobel Biocare implants and zirconia bridges — cost £11,400 in Turkey. UK quotes had ranged from £28,000 to £32,500." },
];

export default function TurkeyTeethBeforeAfterPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Turkey Teeth Before &amp; After</h1>
          <p className="text-xl text-blue-200">Real UK patient results — honest outcomes from verified clinics</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto text-lg">
            The following case studies represent real patients who completed treatment through our partner clinics in Turkey. Every case is different — but every one of these patients achieved a result they were delighted with, at a fraction of the UK cost.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cases.map((c) => (
              <div key={c.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-2 h-44">
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
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-[#1e40af] font-semibold mb-1">{c.treatment}</p>
                  <p className="text-sm font-bold text-green-600 mb-3">{c.saving}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">What Makes a Good Turkey Teeth Result?</h2>
            <p className="text-gray-600">
              The results shown above share certain characteristics. They don&apos;t all look the same — and that&apos;s the point. A skilled aesthetic dentist designs a smile to complement the patient&apos;s face, skin tone, age, and natural tooth shape. Patients who achieve the best results are those who:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Choose an experienced aesthetic dentist, not just the cheapest option",
                "Use Digital Smile Design software to preview and agree on the final result before any work begins",
                "Select a shade that looks natural — not necessarily the whitest available",
                "Discuss shape, length, and gumline proportions with their dentist before prep work starts",
                "Follow pre and post-treatment care instructions carefully",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Avoiding the &apos;Turkey Teeth&apos; Look</h2>
            <p className="text-gray-600">
              The term &apos;turkey teeth&apos; has come to describe an overly white, bulky, or unnatural-looking set of veneers — a result associated with very low-cost clinics or patients who requested an extreme aesthetic. This outcome is entirely avoidable. Our partner dentists take time to understand the natural look each patient wants and use Digital Smile Design to ensure the final result is agreed before any tooth preparation begins.
            </p>
            <p className="text-gray-600">
              We also advise all patients on shade selection — E-max veneers are available in a wide range of natural shades, and our partner dentists will always recommend a shade that looks genuinely natural for the patient&apos;s skin tone and age.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Treatments Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Porcelain & E-max Veneers", href: "/treatments/veneers-turkey", desc: "From £190 per tooth. Ultra-thin shells to correct colour, shape, chips, and gaps in 5 days." },
                { title: "Dental Implants", href: "/treatments/dental-implants-turkey", desc: "From £250 per implant. Permanent titanium replacements using Straumann & Nobel Biocare." },
                { title: "All-on-4 Dental Implants", href: "/treatments/all-on-4-turkey", desc: "From £4,500 per arch. Full smile restoration across two clinic visits." },
                { title: "Full Smile Makeover", href: "/treatments/full-smile-makeover-turkey", desc: "From £3,500. A bespoke combination of veneers, crowns, and whitening." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors block">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Want to see your own before and after? Book a free consultation and our dentists will give you a digital preview of your new smile within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation" className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Digital Smile Preview</Link>
              <Link href="/reviews" className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Read Patient Reviews</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Could This Be You?"
        subtitle="Book a free consultation and see exactly what your new smile could look like — before committing to anything."
        buttonText="See My Potential Results"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
