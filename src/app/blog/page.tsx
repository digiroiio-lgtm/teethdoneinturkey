import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Turkey Blog | Tips, Guides & Patient Advice",
  description: "Expert guides on dental treatment in Turkey. Costs, safety, how to choose a clinic, patient experiences and more.",
};

const posts = [
  { href: "/blog/veneers-turkey-cost-uk-vs-turkey", title: "Veneers Turkey Cost: UK vs Turkey Price Comparison 2024", excerpt: "A detailed breakdown of what veneers cost in Turkey vs the UK, what's included, and whether you're getting the same quality.", date: "December 2024", tag: "Pricing" },
  { href: "/blog/is-it-safe-to-get-teeth-done-in-turkey", title: "Is It Safe to Get Teeth Done in Turkey? 2024 Guide", excerpt: "The honest answer to the most common question about Turkish dental tourism. Accreditation, safety records, and how to choose wisely.", date: "November 2024", tag: "Safety" },
  { href: "/blog/how-long-do-dental-veneers-last", title: "How Long Do Dental Veneers Last? Turkey vs UK", excerpt: "E-max, zirconia, composite — we break down exactly how long different veneer types last and what affects their longevity.", date: "November 2024", tag: "Veneers" },
  { href: "/blog/best-dental-clinics-turkey", title: "Best Dental Clinics in Turkey for UK Patients 2024", excerpt: "What to look for in a Turkish dental clinic — accreditation, materials, patient reviews, and red flags to avoid.", date: "October 2024", tag: "Clinics" },
  { href: "/blog/turkey-teeth-reviews", title: "Turkey Teeth Reviews: Real Patient Experiences 2024", excerpt: "We compiled real patient experiences from UK patients who've had dental work done in Turkey — the good, the great, and the rare bad.", date: "October 2024", tag: "Reviews" },
  { href: "/blog/dental-holiday-turkey-guide", title: "The Complete Dental Holiday Turkey Guide for UK Patients", excerpt: "A comprehensive guide to planning your dental trip to Turkey — flights, hotels, what to expect, and how to make the most of your time.", date: "September 2024", tag: "Travel" },
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
          <div className="space-y-6">
            {posts.map(post => (
              <Link key={post.href} href={post.href} className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1e40af] hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-2">{post.tag}</span>
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
