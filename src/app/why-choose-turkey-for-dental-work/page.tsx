import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/why-choose-turkey-for-dental-work" },
  title: "Why Choose Turkey for Dental Work?",
  description: "Discover why over 500,000 international patients choose Turkey for dental treatment every year. Quality, cost, technology, and UK support explained.",
};

export default function WhyChooseTurkeyPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Why Choose Turkey for Dental Work?</h1>
          <p className="text-xl text-blue-200">Over 500,000 international patients visit Turkey for dental treatment every year — here&apos;s why</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Turkey has become the world&apos;s leading destination for dental tourism — and for good reason. UK patients are saving between 60–80% on treatments like veneers, dental implants, and full smile makeovers, while receiving care from highly trained dentists in state-of-the-art clinics. Here is an honest, detailed look at why Turkey has earned its reputation.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dramatically Lower Costs — Without Compromising Quality</h2>
            <p className="text-gray-600 mb-4">
              The most obvious reason is cost. A single dental veneer in the UK typically costs £900–£1,200. The same veneer — using the same Ivoclar E-max material, crafted by an equally qualified dentist — costs £190–£250 in Turkey. For a patient replacing 16–20 teeth with veneers, that&apos;s a saving of £11,000–£19,000 on a single treatment.
            </p>
            <p className="text-gray-600">
              This is not because Turkish dentists cut corners. Turkey&apos;s lower cost of living means that salaries, rent, and laboratory costs are all significantly lower. The patient benefits from those lower overheads without any reduction in the quality of care.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. World-Class Dental Technology</h2>
            <p className="text-gray-600 mb-4">
              Turkish dental clinics — particularly in Istanbul and Antalya — have invested heavily in cutting-edge technology over the past decade. The best clinics operate with:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "CBCT (cone beam CT) scanners for precise 3D implant planning",
                "Digital Smile Design (DSD) software — preview your new smile before any work begins",
                "CAD/CAM milling technology for same-day crowns and restorations",
                "In-house dental laboratories for faster, more accurate results",
                "Laser dentistry for gum contouring and hygiene treatments",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Premium Implant and Veneer Brands</h2>
            <p className="text-gray-600 mb-4">
              A common misconception is that Turkey uses inferior materials. In reality, the best Turkish clinics use the exact same brands as top UK practices:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Straumann Implants", desc: "The world's most researched implant brand, made in Switzerland. Used in leading clinics across Europe and the USA." },
                { title: "Nobel Biocare Implants", desc: "A Swedish-Swiss implant system with over 50 years of clinical research. The gold standard for complex cases." },
                { title: "Ivoclar E-max Veneers", desc: "Premium lithium disilicate ceramic from Liechtenstein. The preferred material for natural-looking, ultra-durable veneers." },
                { title: "Zirconia Crowns & Veneers", desc: "Exceptionally strong and metal-free. Ideal for patients who grind their teeth or need full-arch restorations." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Highly Qualified, English-Speaking Dentists</h2>
            <p className="text-gray-600 mb-4">
              Turkey produces thousands of dental graduates each year from internationally recognised universities. Many of the country&apos;s leading aesthetic dentists have completed postgraduate training in Germany, the USA, Italy, or the UK, and hold specialist certifications in implantology, aesthetic dentistry, and oral surgery.
            </p>
            <p className="text-gray-600">
              All of our partner clinic dentists speak fluent English and work with English-speaking patient coordinators to ensure clear communication throughout your treatment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No NHS Waiting Lists</h2>
            <p className="text-gray-600">
              UK patients face NHS waiting lists of many months — or years — for complex dental treatment, if that treatment is available on the NHS at all. Cosmetic treatments like veneers are not available on the NHS. Even private UK treatments often involve multiple appointments spread over months. In Turkey, your entire veneer treatment can be completed in 5 days, and most implant procedures across two visits of 3–5 days each. We can typically book your first appointment within 2–4 weeks of enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. JCI-Accredited Clinics</h2>
            <p className="text-gray-600">
              JCI (Joint Commission International) accreditation is the global gold standard for healthcare quality and patient safety — and many of Turkey&apos;s leading dental clinics hold it. This accreditation involves rigorous independent assessment of clinical protocols, infection control, patient safety practices, and outcomes data. It is the same standard used to assess hospitals in the USA, UK, and across Europe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Easy Travel from the UK</h2>
            <p className="text-gray-600 mb-4">
              Istanbul is just 3.5 hours from London — shorter than flying to many European holiday destinations. Antalya is 4 hours. Both cities have excellent direct flight connections from London, Manchester, Birmingham, Edinburgh, and other major UK airports, with multiple daily departures. Return flights can be found from as little as £80–£150.
            </p>
            <p className="text-gray-600">
              Many patients combine their dental treatment with a short city break or beach holiday, making the trip enjoyable rather than purely medical. Turkey&apos;s world-class hotels, cuisine, and climate are an added bonus.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. UK-Based Patient Support</h2>
            <p className="text-gray-600">
              Choosing dental treatment abroad can feel daunting, which is why Teeth Done in Turkey provides a dedicated UK-based team to guide you from your first enquiry through to your return home. We handle clinic matching, appointment booking, travel advice, finance options, and post-treatment follow-up. You have a single point of contact throughout your journey.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Turkey Dental Costs vs UK</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1e40af] text-white">
                    <th className="px-4 py-2 text-left">Treatment</th>
                    <th className="px-4 py-2 text-right">UK Price</th>
                    <th className="px-4 py-2 text-right">Turkey Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Single Porcelain Veneer", uk: "£900–£1,200", turkey: "From £190" },
                    { t: "Single Dental Implant", uk: "£2,000–£3,000", turkey: "From £450" },
                    { t: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "From £4,500" },
                    { t: "Full Smile Makeover", uk: "£15,000–£25,000", turkey: "From £3,500" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-medium">{r.t}</td>
                      <td className="px-4 py-2 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-2 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-4 flex-wrap">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">Get a Free Quote</Link>
              <Link href="/prices/teeth-done-in-turkey-cost" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">Full Price Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Find Out More?"
        subtitle="Book a free consultation with our UK team. We'll answer all your questions and provide a personalised treatment plan with no obligation."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
