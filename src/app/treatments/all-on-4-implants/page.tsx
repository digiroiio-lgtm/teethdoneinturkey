import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "All-on-4 Dental Implants in Turkey — From £3,500 Per Arch",
  description:
    "Transform your smile with All-on-4 implants in Turkey from £3,500 per arch. Full mouth restoration with just 4 implants. Save up to 75% vs UK prices.",
  openGraph: {
    title: "All-on-4 Dental Implants in Turkey — From £3,500",
    description: "Full arch restoration with All-on-4 implants from £3,500. Save 75% vs UK.",
    url: "https://www.teethdoneinturkey.co.uk/treatments/all-on-4-implants",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/treatments/all-on-4-implants" },
};

const faqs = [
  {
    question: "Who is a candidate for All-on-4 implants?",
    answer:
      "All-on-4 is ideal for patients who have lost most or all of their teeth in one or both arches, or those who have severely damaged, decayed teeth that need to be extracted. It is also a great option for existing denture wearers who want a permanent solution.",
  },
  {
    question: "What is the difference between All-on-4 and All-on-6?",
    answer:
      "Both treatments provide a full arch of fixed teeth. All-on-4 uses 4 implants per arch, while All-on-6 uses 6. All-on-6 provides slightly more stability, particularly in patients with lower bone density, but All-on-4 is suitable for the vast majority of patients and is generally more affordable.",
  },
  {
    question: "How long does the All-on-4 procedure take?",
    answer:
      "The procedure itself takes around 3–4 hours per arch under sedation or general anaesthetic. You will wear temporary teeth on the day of the procedure. Permanent teeth are typically fitted 4–6 months later once the implants have fully integrated.",
  },
  {
    question: "Can I eat normally with All-on-4?",
    answer:
      "With temporary teeth, you will follow a soft food diet for the first 2–3 months. Once permanent teeth are fitted, you can eat virtually anything. Most patients say they can eat foods they have not enjoyed for years.",
  },
  {
    question: "What is the recovery like after All-on-4?",
    answer:
      "Expect swelling and discomfort for 3–7 days after surgery. Most patients feel comfortable after about a week. You will be prescribed antibiotics and pain relief. It is important to plan around 10–14 days in Turkey to allow proper healing before flying home.",
  },
];

export default function AllOn4Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-white">Treatments</Link>
            <span>/</span>
            <span>All-on-4 Implants</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            All-on-4 Dental Implants in Turkey<br />
            <span className="text-[#f5a623]">— From £3,500 Per Arch</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            The gold standard for full mouth restoration. Replace an entire arch of teeth with just four strategically placed implants — a life-changing treatment that saves up to 75% compared to UK prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors">
              Get Free Assessment
            </Link>
            <Link href="/prices/all-on-4-cost" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors">
              See Full Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "£3,500", label: "Per Arch (Starting)" },
              { value: "1 Day", label: "Surgery Time" },
              { value: "75%", label: "Saving vs UK" },
              { value: "Lifetime", label: "Implant Longevity" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-[#1a6b3c]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Are All-on-4 Dental Implants?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All-on-4 is a revolutionary dental implant technique where an entire arch of teeth (upper or lower) is supported by just four strategically placed titanium implants. The two rear implants are angled at up to 45 degrees to maximise contact with available bone, meaning even patients with significant bone loss can often avoid bone grafting.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The result is a full set of fixed, permanent teeth that look and feel completely natural. Unlike conventional dentures, All-on-4 teeth do not slip, do not need to be removed for cleaning, and allow you to eat all foods with confidence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the UK, All-on-4 typically costs £14,000–£20,000 per arch. In Turkey, the same procedure with equivalent materials and expertise costs from £3,500 — a saving that can reach £30,000+ for both arches.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Who Is All-on-4 For?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Patients missing most or all teeth in one arch",
                    "Long-term denture wearers seeking a permanent solution",
                    "Patients with multiple failing or damaged teeth",
                    "Those who have been told they need extractions",
                    "Patients with significant bone loss",
                    "Anyone wanting the most stable tooth replacement",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                      <span className="text-[#1a6b3c] mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The All-on-4 Procedure</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Day 1–2", title: "Assessment & Planning", desc: "3D CT scan for bone assessment, treatment planning, and digital design of your new smile." },
                    { phase: "Day 3", title: "Surgery Day", desc: "Any remaining failing teeth are extracted, four implants placed, and temporary teeth fitted on the same day. You leave with a new smile." },
                    { phase: "Months 1–4", title: "Healing Phase (at home)", desc: "The implants fuse with your jawbone. You follow a soft food diet and attend your regular UK dentist for check-ups." },
                    { phase: "Trip 2", title: "Permanent Teeth Fitting", desc: "Return to Turkey for your final permanent prosthesis — either hybrid porcelain or zirconia, custom-made for perfect aesthetics and function." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 bg-[#1a6b3c] text-white rounded-lg flex items-center justify-center text-xs font-bold p-2 text-center">
                        {item.phase}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Cost Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#1a6b3c] text-white">
                        <th className="px-4 py-3 text-left">Treatment</th>
                        <th className="px-4 py-3 text-center">Turkey</th>
                        <th className="px-4 py-3 text-center">UK</th>
                        <th className="px-4 py-3 text-center">Saving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: "All-on-4 (1 arch)", turkey: "£3,500–£5,000", uk: "£14,000–£20,000", saving: "~75%" },
                        { t: "All-on-4 (both arches)", turkey: "£7,000–£10,000", uk: "£28,000–£40,000", saving: "~75%" },
                        { t: "All-on-6 (1 arch)", turkey: "£4,500–£6,000", uk: "£18,000–£25,000", saving: "~75%" },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium">{row.t}</td>
                          <td className="px-4 py-3 text-center text-[#1a6b3c] font-bold">{row.turkey}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{row.uk}</td>
                          <td className="px-4 py-3 text-center text-[#f5a623] font-bold">{row.saving}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex gap-3">
                  <Link href="/prices/all-on-4-cost" className="text-[#1a6b3c] font-semibold hover:underline text-sm">→ Full All-on-4 pricing</Link>
                  <Link href="/treatments/dental-implants" className="text-[#1a6b3c] font-semibold hover:underline text-sm">→ Single implants</Link>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#1a6b3c] text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-3">Free All-on-4 Assessment</h3>
                <p className="text-green-100 text-sm mb-4">Send your X-rays or dental photos for a free assessment and quote.</p>
                <Link href="/contact" className="block text-center bg-[#f5a623] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors mb-3">
                  Get Assessment
                </Link>
                <a href="https://wa.me/447911123456" target="_blank" rel="noopener noreferrer" className="block text-center border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1a6b3c] transition-colors">
                  WhatsApp Us
                </a>
              </div>

              <div className="bg-[#f5a623]/10 rounded-2xl p-6 border border-[#f5a623]/20">
                <h3 className="font-bold text-[#1a1a1a] mb-2">💰 All-on-4 Saving</h3>
                <p className="text-xs text-gray-600 mb-3">Full mouth (both arches):</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Turkey:</span><span className="font-bold text-[#1a6b3c]">~£7,000</span></div>
                  <div className="flex justify-between"><span>UK:</span><span className="font-bold text-gray-500">~£30,000</span></div>
                  <div className="flex justify-between border-t pt-1 mt-1"><span className="font-bold">You save:</span><span className="font-extrabold text-[#f5a623]">~£23,000</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
