import Link from "next/link";

const primaryPages = [
  { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Prices", description: "Compare treatment costs and what quotations include." },
  { href: "/treatments/veneers-turkey", label: "Veneers in Turkey", description: "Explore veneer options, materials and preparation." },
  { href: "/treatments/dental-implants-turkey", label: "Dental Implants", description: "Understand implant treatment and planning." },
  { href: "/reviews", label: "Patient Reviews", description: "Read patient experiences and evaluation guidance." },
  { href: "/about-us", label: "About Us", description: "Learn about our independent guidance and coordination role." },
  { href: "/contact", label: "Contact", description: "Get in touch with the patient coordination team." },
] as const;

/** Crawlable, visible homepage links to the site's six principal destinations. */
export default function ExploreKeyPages() {
  return (
    <nav aria-label="Explore key pages" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore Teeth Done in Turkey</h2>
        <p className="text-gray-600 mb-7">Explore dental treatment costs in Turkey, compare veneers and implant options, and read patient experiences before making a decision. Our guides explain practical considerations for UK patients, while our coordination team can help you understand the next steps and request information for your circumstances.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {primaryPages.map(({ href, label, description }) => (
            <li key={href}>
              <Link href={href} className="block h-full rounded-xl border border-gray-200 p-5 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700">
                <span className="block font-semibold text-[#1e40af] mb-2">{label}</span>
                <span className="block text-sm text-gray-600">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
