import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { label: "Dental Implants Turkey", href: "/guides/dental-implants-turkey" },
  { label: "Veneers in Turkey — Are They Safe?", href: "/guides/turkish-veneers-safety" },
  { label: "Turkey Teeth Cost (GBP)", href: "/prices/turkey-teeth-cost" },
  { label: "Full-Mouth Implants Cost", href: "/guides/full-mouth-dental-implants-turkey-cost" },
  { label: "Teeth in Turkey: Complete UK Guide", href: "/guides/teeth-in-turkey" },
  { label: "Free Treatment Plan", href: "/free-treatment-plan" },
];

export default function NotFound() {
  return (
    <>
      <div className="hero-gradient text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-7xl font-extrabold text-blue-300 mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Page not found</h1>
          <p className="text-blue-200 text-lg mb-8">
            That page doesn&apos;t exist or may have moved. Try one of the links below, or head back home.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-[#1e40af] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-[#1e40af] font-medium hover:bg-gray-100 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
