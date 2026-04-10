import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/why-are-dental-treatments-cheaper-in-turkey" },
  title: "Why Is Dental Care Cheaper in Turkey?",
  description: "Discover exactly why dental treatment costs 70–80% less in Turkey vs the UK. It's not lower quality — it's lower overheads. A full, honest explanation for UK patients.",
};

export default function WhyCheaperPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Guide</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Why Are Dental Treatments Cheaper in Turkey?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>It&apos;s the question every UK patient asks: <strong>how can a Turkish dentist charge £190 for a veneer that costs £900 in Manchester?</strong> Is the quality worse? Are the materials inferior? Is there some hidden catch?</p>
          <p>The answer is none of the above. The dramatic price difference is explained entirely by structural economic factors — lower wages, lower rents, lower running costs — not any compromise in quality, training, or materials.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Lower Staff and Labour Costs</h2>
          <p>The single biggest driver of dental costs anywhere in the world is staff salaries. In the UK, a dental nurse earns £25,000–£35,000 per year. A dental technician can earn £30,000–£50,000. Receptionists, patient co-ordinators, practice managers — all of these roles cost far more in the UK than in Turkey, where average wages are significantly lower.</p>
          <p>This difference flows directly into treatment prices. The dentist in Turkey may be equally skilled (or more so), but their salary expectations — and those of their supporting team — are set by a Turkish cost-of-living context, not a UK one.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Lower Clinic Running Costs</h2>
          <p>Commercial property in central Istanbul or Antalya costs a fraction of equivalent space in London, Manchester, or Birmingham. A dental clinic that would pay £8,000 per month in rent in London might pay equivalent of £800–£1,500 in Istanbul. This is a direct cost reduction reflected in treatment prices.</p>
          <p>Similarly, utilities, insurance, equipment maintenance, and administrative overheads are all substantially lower in Turkey — allowing clinics to operate profitably at prices that would be impossible in the UK.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. The Same Materials at International Prices</h2>
          <p>Here&apos;s the key fact that surprises many UK patients: <strong>the materials used are exactly the same</strong>. The leading Turkish dental clinics use Ivoclar E-max ceramic for veneers — the identical brand and product used by top UK practices. Implant brands like Straumann and Nobel Biocare are global companies; a Turkish clinic buys the same implant as a London clinic, at very similar international wholesale prices.</p>
          <p>The materials cost is not meaningfully different. Only the labour and overhead costs are — and those are dramatically lower in Turkey.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Competitive Market & Volume</h2>
          <p>Turkey&apos;s dental tourism industry is intensely competitive. Thousands of clinics compete for international patients, which drives prices down and quality standards up. Clinics that deliver poor work or charge inflated prices quickly lose out to competitors in a market where international reviews and reputation are everything.</p>
          <p>Additionally, many Turkish clinics treat a very high volume of patients — far more than the average UK private dentist. This volume enables clinics to invest in the latest digital dentistry technology (CBCT scanners, CAD/CAM mills, 3Shape systems) and in-house labs, further reducing costs and turnaround times.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Currency Advantage</h2>
          <p>The Turkish lira (TRY) has weakened significantly against the pound over recent years. This means that even when Turkish clinics maintain their prices in lira terms (reflecting local cost inflation), the sterling cost for UK patients remains very favourable compared to historical rates.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Lower Regulatory Overhead</h2>
          <p>UK dental practices carry significant regulatory overhead: CQC registration, GDC compliance, NHS contract administration, and extensive insurance requirements. These administrative and compliance costs are substantial — and are ultimately passed on in treatment prices. Turkish clinics, regulated by the Turkish Ministry of Health and for top practices JCI, carry lower administrative costs, further contributing to lower prices.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Means for UK Patients</h2>
          <p>The savings are real, substantial, and not at the expense of quality — <strong>when you choose the right clinic</strong>. The key is choosing a clinic that uses brand-name materials, holds proper accreditation, and has a verifiable track record with international patients.</p>
          <p>Even after adding flights (from ~£80 return) and a week&apos;s hotel (from £40/night), the total cost of a trip to Turkey for veneers or implants typically represents a saving of thousands of pounds versus equivalent UK private treatment.</p>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mt-8 space-y-3">
            <p className="font-bold text-gray-900">Explore treatment costs in detail:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] hover:underline">→ Veneers Turkey cost guide</Link></li>
              <li><Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] hover:underline">→ Dental implants Turkey cost guide</Link></li>
              <li><Link href="/teeth-done-in-turkey-guide" className="text-[#1e40af] hover:underline">→ Complete guide: teeth done in Turkey</Link></li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Ready to see exactly how much you&apos;d save?</p>
            <p className="text-blue-200 text-sm mb-4">Get a free personalised treatment plan and cost comparison within 24 hours.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Get My Free Quote</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/treatments/all-on-4-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-4 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full arch restoration</span>
            </Link>
            <Link href="/prices/teeth-done-in-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All Treatment Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">Full price guide</span>
            </Link>
            <Link href="/prices/veneers-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">Prices & comparisons</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
