import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/veneers-turkey-cost-uk-vs-turkey" },
  title: "Veneers Turkey vs UK Cost Comparison",
  description: "Detailed comparison of veneers cost in Turkey vs UK. E-max from £190/tooth in Turkey vs £900+ in UK. What's included, quality comparison, patient tips.",
};

export default function VeneersCostBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Pricing</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Veneers Turkey Cost: UK vs Turkey Price Comparison 2024</h1>
          <p className="text-gray-500 text-sm">Published December 2024 · 5 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>If you&apos;ve been quoted £900 or more per tooth for veneers in the UK, you might be wondering whether dental tourism to Turkey could save you a significant sum. The short answer is yes — often by around 79%. But let&apos;s break down exactly what you&apos;re getting for the money.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Do Veneers Cost in Turkey?</h2>
          <p>In Turkey, E-max porcelain veneers — widely considered the gold standard in cosmetic dentistry — cost between <strong>£190 and £250 per tooth</strong> at reputable clinics. A full set of 20 veneers therefore costs approximately <strong>£3,800–£5,000</strong>, all-inclusive of the procedure.</p>
          <p>Compare this to the UK, where E-max veneers typically cost <strong>£800–£1,000 per tooth</strong>, meaning a full set runs to £16,000–£20,000. That&apos;s a potential saving of over £12,000 — enough to cover flights, hotels, and several holiday experiences with money to spare.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is the Quality the Same?</h2>
          <p>This is the key question. The materials used are genuinely the same — top Turkish clinics use Ivoclar E-max (the same brand UK dentists use), Vita porcelain, and digital impression systems from 3Shape or Dentsply. Your veneers are milled in an in-house or nearby lab using the same CAD/CAM technology found in any modern UK practice.</p>
          <p>The lower cost reflects Turkey&apos;s lower cost of living and operating expenses — not any compromise on materials, technique, or dentist expertise. Many Turkish aesthetic dentists have trained internationally, speak fluent English, and see significantly more veneer cases per year than the average UK cosmetic dentist.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What&apos;s Included in the Turkey Veneer Price?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full consultation and digital smile design preview</li>
            <li>X-rays and clinical assessment</li>
            <li>Tooth preparation</li>
            <li>Temporary veneers while permanent ones are crafted</li>
            <li>Permanent veneer fitting and bonding</li>
            <li>Fine adjustments and polishing</li>
            <li>Aftercare instructions and clinic contact for follow-up questions</li>
          </ul>
          <p>Flights (from ~£80 return) and accommodation (from ~£40/night) are separate, but even adding £500–£700 for a week&apos;s trip, the total cost remains a fraction of UK prices.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips Before You Book</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Choose a JCI-accredited clinic or one with strong verified international reviews</li>
            <li>Ask to see the dentist&apos;s before-and-after portfolio</li>
            <li>Confirm the brand of ceramic being used (Ivoclar, Vita)</li>
            <li>Check whether Digital Smile Design is included — it&apos;s an important reassurance tool</li>
            <li>Ensure the clinic offers a written guarantee (typically 5–10 years for E-max)</li>
          </ul>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Ready to get a personalised quote?</p>
            <p className="text-gray-600 text-sm mb-4">Send us your photos and we&apos;ll prepare a detailed veneer treatment plan and cost estimate within 24 hours — completely free and no obligation.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
