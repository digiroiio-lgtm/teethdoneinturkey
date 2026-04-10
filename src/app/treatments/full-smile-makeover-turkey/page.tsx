import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Full Smile Makeover Turkey – From £3,500",
  description: "Complete smile makeover in Turkey from £3,500. Veneers, whitening, reshaping and more. Compare to £12,000+ in the UK. JCI clinics.",
};

export default function SmileMakeoverPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Full Smile Makeover Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Complete smile transformation from £3,500</p>
          <p className="text-blue-300 mb-6">Compare to £12,000+ in the UK — save over 70%</p>
          <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£12,000+</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price</p>
                <p className="text-3xl font-extrabold text-green-600">£3,500</p>
                <p className="text-xs text-green-600 font-semibold">Save 71%</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in a Smile Makeover?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A full smile makeover combines multiple cosmetic and restorative treatments tailored to your specific needs. No two smile makeovers are the same — your treatment plan is designed after a detailed consultation and digital smile preview.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Porcelain Veneers", desc: "Ultra-thin shells to correct shape, colour, and alignment (typically 16–20 teeth)" },
                { title: "Teeth Whitening", desc: "Professional laser whitening for a brilliant, uniform shade" },
                { title: "Gum Contouring", desc: "Reshape uneven gumlines for a more symmetrical smile" },
                { title: "Dental Crowns", desc: "Cap damaged or discoloured back teeth to complete the look" },
                { title: "Composite Bonding", desc: "Fill gaps and repair chips for a flawless finish" },
                { title: "Digital Smile Design", desc: "Preview your new smile before any work begins" },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-[#1e40af] font-bold">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Smile Makeover Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">A typical full smile makeover takes 6–8 days in Turkey. This includes your arrival consultation, any preparatory work, the main veneer procedure, and final fitting before you return home with your complete new smile.</p>
            <p className="text-gray-600 leading-relaxed">All our smile makeover packages include airport transfers, hotel recommendations, English-speaking patient co-ordinator, and 10-year structural guarantee on all work.</p>
          </div>
        </div>
      </section>

      <CTASection title="Design Your Dream Smile" subtitle="Book a free consultation and get a digital smile preview within 48 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
