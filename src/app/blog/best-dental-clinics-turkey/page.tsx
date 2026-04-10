import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dental Clinics Turkey – UK Guide",
  description: "How to find the best dental clinic in Turkey. What accreditations to look for, red flags to avoid, and how to verify quality before you book.",
};

export default function BestClinicsBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Clinics</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Best Dental Clinics in Turkey for UK Patients 2024</h1>
          <p className="text-gray-500 text-sm">Published October 2024 · 5 min read</p>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Turkey has hundreds of dental clinics competing for international patients, and the quality varies enormously. Knowing what to look for — and what to avoid — can mean the difference between a life-changing result and a costly mistake.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Makes a Top Turkish Dental Clinic?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "JCI Accreditation", desc: "Joint Commission International is the gold standard for international healthcare quality. JCI-accredited clinics have undergone rigorous independent inspection." },
              { title: "Premium Materials", desc: "Top clinics use Straumann/Nobel Biocare implants and Ivoclar/Vita ceramics — the same brands used by UK specialists." },
              { title: "In-House Lab", desc: "An on-site dental lab means faster turnaround, better communication between dentist and technician, and easier adjustments." },
              { title: "Digital Technology", desc: "CBCT scanners, 3Shape digital impressions, CAD/CAM milling, and Digital Smile Design are signs of a modern, quality-focused practice." },
              { title: "English-Speaking Staff", desc: "A full-time English-speaking patient co-ordinator is essential for UK patients." },
              { title: "Verified Reviews", desc: "Look for 4.8+ star ratings with hundreds of Google reviews mentioning specific treatments and naming the dentist." },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">✓ {item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags to Avoid</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prices dramatically below market rate with no explanation</li>
            <li>Inability to name the implant or veneer brand being used</li>
            <li>No written treatment plan or guarantee</li>
            <li>Pressure to book immediately or &quot;price only valid today&quot;</li>
            <li>No verifiable reviews from UK or European patients</li>
            <li>Dentist qualifications not clearly stated or verifiable</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Istanbul vs Antalya</h2>
          <p>Both cities have excellent dental clinics. Istanbul offers a wider choice of highly specialised clinics and is easier to reach from most UK airports. Antalya is more resort-focused, with a more relaxed atmosphere and slightly lower prices — but fewer specialists in complex treatments like All-on-4.</p>
          <p>Our recommendation: for complex implant work or smile makeovers, Istanbul. For simpler veneer or crown treatments, Antalya is a great option, especially if you want to combine treatment with a seaside holiday.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We&apos;ve done the vetting for you.</p>
            <p className="text-gray-600 text-sm mb-4">Our partner clinics have been personally visited by our team. We only recommend practices that meet our strict quality criteria.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Matched with a Clinic</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
