import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "All-on-6 Dental Implants Turkey – From £5,500",
  description: "All-on-6 dental implants in Turkey from £5,500. Enhanced full arch restoration with superior stability. JCI clinics. Save vs £18,000+ in the UK.",
};

export default function AllOn6Page() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All-on-6 Dental Implants Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Enhanced full arch restoration with 6 implants from £5,500</p>
          <p className="text-blue-300 mb-6">Compare to £18,000+ in the UK</p>
          <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price (per arch)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£18,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price (per arch)</p>
                <p className="text-3xl font-extrabold text-green-600">£5,500</p>
                <p className="text-xs text-green-600 font-semibold">Save 69%+</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All-on-6 vs All-on-4</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All-on-6 uses six implants instead of four, providing greater stability, better load distribution, and a more natural feel. The extra two implants reduce stress on each individual implant and can mean a longer lifespan for the prosthetic arch.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All-on-6 is typically recommended for patients with good bone density who want the most secure and durable full arch solution. It&apos;s particularly suited to the upper arch where bone quality tends to be lower.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of All-on-6</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Superior Stability", desc: "6 implants distribute bite force more evenly for a more secure, confident feel." },
                { title: "Better Aesthetics", desc: "More support points allow for a wider, more natural-looking arch." },
                { title: "Longer Lasting", desc: "Reduced stress per implant means greater longevity for the whole restoration." },
                { title: "Ideal for Upper Arch", desc: "Particularly beneficial where softer bone benefits from additional support." },
              ].map(b => (
                <div key={b.title} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">✓ {b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Find Out If All-on-6 Is Right for You" subtitle="Book a free consultation and get a personalised treatment plan." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
