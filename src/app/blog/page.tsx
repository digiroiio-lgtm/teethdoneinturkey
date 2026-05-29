import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Dental Turkey Blog – Tips & Guides",
  description: "Expert guides on dental treatment in Turkey. Costs, safety, how to choose a clinic, patient experiences and more.",
};

const posts = [
  // Finance cluster (growth hack - highlighted)
  { href: "/dental-monthly-payments-uk", title: "Dental Monthly Payments UK: Complete Guide 2026", excerpt: "The pillar guide to dental monthly payments, 0% finance, eligibility, examples and application steps for UK patients.", date: "May 2026", tag: "Finance" },
  { href: "/blog/can-you-pay-monthly-for-teeth-in-turkey", title: "Can You Pay Monthly for Teeth in Turkey?", excerpt: "Yes — spread the cost of dental treatment in Turkey from £82/month with UK-based finance plans.", date: "January 2026", tag: "Finance" },
  { href: "/blog/dental-treatment-turkey-payment-plans", title: "Dental Treatment Turkey Payment Plans", excerpt: "How payment plans work for Turkey dental treatment. Everything UK patients need to know about spreading costs.", date: "January 2026", tag: "Finance" },
  { href: "/blog/finance-dental-implants-turkey-uk-patients", title: "Finance Dental Implants Turkey – UK Patient Guide", excerpt: "How to finance dental implants in Turkey. Monthly options from £54/month for single implants.", date: "January 2026", tag: "Finance" },
  { href: "/blog/dental-tourism-finance-explained", title: "Dental Tourism Finance Explained", excerpt: "A complete guide to funding dental treatment abroad — monthly plans, loans, 0% credit, and which to choose.", date: "January 2026", tag: "Finance" },
  // Core cluster
  { href: "/blog/why-are-dental-treatments-cheaper-in-turkey", title: "Why Are Dental Treatments Cheaper in Turkey?", excerpt: "The real reason dental work costs 70–80% less in Turkey. It's not lower quality — it's lower overheads.", date: "January 2026", tag: "Guide" },
  { href: "/blog/turkey-teeth-explained", title: "Turkey Teeth Explained: What UK Patients Need to Know", excerpt: "What 'turkey teeth' actually means, where the term came from, and what modern Turkish dental work really looks like.", date: "January 2026", tag: "Guide" },
  { href: "/blog/uk-dentist-vs-turkey-dentist", title: "UK Dentist vs Turkey Dentist: Key Differences", excerpt: "An honest comparison of training, materials, technology and costs between UK and Turkish dentists.", date: "January 2026", tag: "Comparison" },
  // Veneers cluster
  { href: "/blog/e-max-vs-zirconia-veneers-turkey", title: "E-max vs Zirconia Veneers in Turkey: Which Is Better?", excerpt: "The definitive comparison of E-max and zirconia veneers for UK patients. Durability, aesthetics, and which to choose.", date: "January 2026", tag: "Veneers" },
  { href: "/blog/full-set-veneers-turkey-cost", title: "Full Set of Veneers in Turkey: Cost Breakdown 2026", excerpt: "Exactly how much a full set of veneers costs in Turkey — 8, 10, 16, or 20 veneers, all-in including travel.", date: "January 2026", tag: "Veneers" },
  { href: "/blog/are-veneers-in-turkey-worth-it", title: "Are Veneers in Turkey Worth It?", excerpt: "An honest assessment of the quality, savings, risks, and overall value of Turkey veneers for UK patients.", date: "January 2026", tag: "Veneers" },
  { href: "/blog/risks-of-veneers-in-turkey", title: "Risks of Veneers in Turkey: What UK Patients Should Know", excerpt: "The honest truth about what can go wrong with veneers in Turkey and how to minimise every risk.", date: "January 2026", tag: "Safety" },
  { href: "/blog/can-you-pay-monthly-for-veneers-turkey", title: "Can You Pay Monthly for Veneers in Turkey?", excerpt: "Yes — a full set of 20 veneers in Turkey financed over 36 months from £106/month.", date: "January 2026", tag: "Finance" },
  { href: "/blog/4-8-10-rule-for-veneers", title: "The 4-8-10 Rule for Veneers Explained", excerpt: "What the 4-8-10 rule means for veneer planning and how it applies to your Turkey treatment.", date: "January 2026", tag: "Veneers" },
  { href: "/blog/composite-vs-porcelain-veneers-turkey", title: "Composite vs Porcelain Veneers Turkey", excerpt: "A clear comparison of composite and porcelain veneers in Turkey — cost, durability, and which is right for you.", date: "January 2026", tag: "Veneers" },
  // Implants cluster
  { href: "/blog/full-mouth-dental-implants-turkey-cost", title: "Full Mouth Dental Implants Turkey Cost 2026", excerpt: "Complete cost breakdown for All-on-4, All-on-6, and full mouth implants for UK patients in Turkey.", date: "January 2026", tag: "Implants" },
  { href: "/blog/same-day-dental-implants-turkey", title: "Same Day Dental Implants Turkey", excerpt: "Everything UK patients need to know about same day (immediate loading) dental implants in Turkey.", date: "January 2026", tag: "Implants" },
  { href: "/blog/dental-implant-recovery-time", title: "Dental Implant Recovery Time: Complete Timeline", excerpt: "A complete recovery timeline from surgery day to final crown — what to expect at every stage.", date: "January 2026", tag: "Implants" },
  { href: "/blog/signs-of-dental-implant-failure", title: "Signs of Dental Implant Failure: What to Watch For", excerpt: "How to recognise implant failure symptoms, what causes them, and what to do if you notice warning signs.", date: "January 2026", tag: "Implants" },
  { href: "/blog/single-tooth-implant-turkey-cost", title: "Single Tooth Implant Turkey Cost 2026", excerpt: "From £250 for a dental implant in Turkey vs £2,500+ in the UK. Full cost breakdown.", date: "January 2026", tag: "Implants" },
  // Safety cluster
  { href: "/blog/risks-of-turkey-teeth", title: "Risks of Turkey Teeth: What UK Patients Should Know", excerpt: "An honest guide to the real risks of getting dental work in Turkey — and how to avoid every one of them.", date: "January 2026", tag: "Safety" },
  { href: "/blog/aftercare-for-dental-work-in-turkey", title: "Aftercare for Dental Work in Turkey", excerpt: "Complete aftercare guide for UK patients returning home after veneers or implants in Turkey.", date: "January 2026", tag: "Aftercare" },
  { href: "/blog/will-uk-dentists-fix-turkey-teeth", title: "Will UK Dentists Fix Turkey Teeth?", excerpt: "The honest answer: what UK dentists will and won't do for dental work that was done in Turkey.", date: "January 2026", tag: "Safety" },
  // Travel & cost cluster
  { href: "/blog/hollywood-smile-turkey-cost", title: "Hollywood Smile Turkey Cost 2026", excerpt: "Full cost breakdown for a Hollywood Smile in Turkey. From £2,800 for 20 zirconia crowns vs £15,000+ in the UK.", date: "January 2026", tag: "Treatments" },
  { href: "/blog/antalya-vs-istanbul-dental-clinics", title: "Antalya vs Istanbul for Dental Treatment", excerpt: "Which Turkish city is better for your dental treatment? An honest comparison for UK patients.", date: "January 2026", tag: "Travel" },
  { href: "/blog/dental-holiday-packages-turkey", title: "Dental Holiday Packages Turkey", excerpt: "How dental holiday packages work — what's included, how much they cost, and how to book.", date: "January 2026", tag: "Travel" },
  // Existing posts
  { href: "/blog/veneers-turkey-cost-uk-vs-turkey", title: "Veneers Turkey Cost: UK vs Turkey Price Comparison 2024", excerpt: "A detailed breakdown of what veneers cost in Turkey vs the UK, what's included, and whether you're getting the same quality.", date: "December 2024", tag: "Pricing" },
  { href: "/blog/is-it-safe-to-get-teeth-done-in-turkey", title: "Is It Safe to Get Teeth Done in Turkey? 2024 Guide", excerpt: "The honest answer to the most common question about Turkish dental tourism. Accreditation, safety records, and how to choose wisely.", date: "November 2024", tag: "Safety" },
  { href: "/blog/how-long-do-dental-veneers-last", title: "How Long Do Dental Veneers Last? Turkey vs UK", excerpt: "E-max, zirconia, composite — we break down exactly how long different veneer types last and what affects their longevity.", date: "November 2024", tag: "Veneers" },
  { href: "/blog/best-dental-clinics-turkey", title: "Best Dental Clinics in Turkey for UK Patients 2024", excerpt: "What to look for in a Turkish dental clinic — accreditation, materials, patient reviews, and red flags to avoid.", date: "October 2024", tag: "Clinics" },
  { href: "/blog/turkey-teeth-reviews", title: "Turkey Teeth Reviews: Real Patient Experiences 2024", excerpt: "We compiled real patient experiences from UK patients who've had dental work done in Turkey — the good, the great, and the rare bad.", date: "October 2024", tag: "Reviews" },
  { href: "/blog/dental-holiday-turkey-guide", title: "The Complete Dental Holiday Turkey Guide for UK Patients", excerpt: "A comprehensive guide to planning your dental trip to Turkey — flights, hotels, what to expect, and how to make the most of your time.", date: "September 2024", tag: "Travel" },
];

const tagColors: Record<string, string> = {
  Finance: "bg-green-100 text-green-700",
  Veneers: "bg-purple-100 text-purple-700",
  Implants: "bg-blue-100 text-[#1e40af]",
  Safety: "bg-red-100 text-red-700",
  Travel: "bg-orange-100 text-orange-700",
  Guide: "bg-blue-100 text-[#1e40af]",
  Comparison: "bg-blue-100 text-[#1e40af]",
  Treatments: "bg-teal-100 text-teal-700",
  Aftercare: "bg-yellow-100 text-yellow-700",
  Pricing: "bg-blue-100 text-[#1e40af]",
  Clinics: "bg-blue-100 text-[#1e40af]",
  Reviews: "bg-blue-100 text-[#1e40af]",
};

const tagGroups = [
  { label: "Finance & Payment", tags: ["Finance"] },
  { label: "Veneers", tags: ["Veneers"] },
  { label: "Implants", tags: ["Implants"] },
  { label: "Safety", tags: ["Safety", "Aftercare"] },
  { label: "Guides & Comparisons", tags: ["Guide", "Comparison", "Treatments"] },
  { label: "Travel", tags: ["Travel"] },
  { label: "Pricing", tags: ["Pricing"] },
];

export default function BlogPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Turkey Blog</h1>
          <p className="text-xl text-blue-200">Expert guides, tips and advice for UK patients considering dental treatment in Turkey</p>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {posts.map(post => (
              <Link key={post.href} href={post.href} className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1e40af] hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2 ${tagColors[post.tag] || "bg-blue-100 text-[#1e40af]"}`}>{post.tag}</span>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1e40af] mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                  </div>
                  <span className="text-[#1e40af] font-bold flex-shrink-0 mt-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
