import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Tourism Blog — Tips, Guides & Advice | Teeth Done in Turkey",
  description: "Expert blog covering dental tourism in Turkey. Safety guides, cost comparisons, treatment guides, and tips for UK patients getting dental work done abroad.",
  openGraph: {
    title: "Dental Tourism Blog — Teeth Done in Turkey",
    description: "Expert guides for UK patients getting dental treatment in Turkey.",
    url: "https://www.teethdoneinturkey.co.uk/blog",
    siteName: "Teeth Done in Turkey",
    type: "website",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/blog" },
};

const posts = [
  {
    title: "Is It Safe to Get Your Teeth Done in Turkey? Everything You Need to Know",
    excerpt: "A comprehensive guide covering JCI accreditation, how to choose a reputable clinic, what questions to ask, and how to make your dental trip as safe as possible.",
    href: "/blog/is-it-safe-to-get-teeth-done-in-turkey",
    tag: "Safety & Trust",
    date: "December 2024",
    readTime: "10 min read",
  },
  {
    title: "The Complete Guide to Getting Dental Veneers in Turkey (2024)",
    excerpt: "Everything UK patients need to know about getting veneers in Turkey: types, costs, procedure, recovery, and how to choose the right clinic.",
    href: "/blog/dental-veneers-turkey-guide",
    tag: "Treatment Guide",
    date: "December 2024",
    readTime: "12 min read",
  },
  {
    title: "How Much Do Dental Implants Cost in Turkey? (2024 Price Guide)",
    excerpt: "A detailed breakdown of implant costs in Turkey vs the UK, what affects the price, what is included, and how to get the best deal.",
    href: "/blog/how-much-do-dental-implants-cost-turkey",
    tag: "Pricing",
    date: "November 2024",
    readTime: "11 min read",
  },
  {
    title: "The 4-8-10 Rule for Veneers: What It Means for Your Smile",
    excerpt: "Understanding the 4-8-10 rule in cosmetic dentistry and how it applies to veneer treatment planning for the most natural, beautiful results.",
    href: "/blog/4-8-10-rule-for-veneers",
    tag: "Cosmetic Dentistry",
    date: "November 2024",
    readTime: "9 min read",
  },
  {
    title: "Turkey vs UK Dental Treatment: A Complete Comparison (2024)",
    excerpt: "An honest side-by-side comparison of getting dental treatment in Turkey vs the UK, covering quality, cost, safety, travel, and aftercare.",
    href: "/blog/turkey-vs-uk-dental-treatment",
    tag: "Comparison",
    date: "October 2024",
    readTime: "13 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Dental Tourism Blog</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Expert guides, honest advice, and everything UK patients need to know about getting affordable dental treatment in Turkey.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.href} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-[#1a6b3c]/10 to-[#1a6b3c]/5 w-full md:w-48 flex items-center justify-center py-8 md:py-0 flex-shrink-0">
                    <span className="text-5xl">📝</span>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#1a6b3c]/10 text-[#1a6b3c] text-xs font-semibold px-2 py-1 rounded-full">{post.tag}</span>
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{post.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <Link href={post.href} className="inline-flex items-center gap-1 text-[#1a6b3c] font-semibold hover:gap-2 transition-all">
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
