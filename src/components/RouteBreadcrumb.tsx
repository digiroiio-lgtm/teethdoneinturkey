"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

interface Crumb {
  name: string;
  path?: string;
}

const HOME: Crumb = { name: "Home", path: "/" };
const PRICES: Crumb = { name: "Prices", path: "/prices/turkey-teeth-cost" };
const TRAVEL: Crumb = { name: "Travel to Turkey", path: "/travel-to-turkey" };

// Pages that render no breadcrumb of their own. Pages with their own
// <Breadcrumb> (treatments/*, guides/*, most of prices/*) are deliberately absent.
const TRAILS: Record<string, Crumb[]> = {
  "/about-us": [HOME, { name: "About Us" }],
  "/blog": [HOME, { name: "Blog" }],
  "/contact": [HOME, { name: "Contact" }],
  "/editorial-policy": [HOME, { name: "Editorial Policy" }],
  "/finance-options-uk": [HOME, { name: "Finance Options" }],
  "/free-treatment-plan": [HOME, { name: "Free Treatment Plan" }],
  "/monthly-payment": [HOME, { name: "Monthly Payments" }],
  "/price-calculator": [HOME, { name: "Price Calculator" }],
  "/prices/all-on-6-dental-implants-turkey-package": [HOME, PRICES, { name: "All-on-6 Implants Package" }],
  "/prices/dental-implants-turkey-cost": [HOME, PRICES, { name: "Dental Implants Cost" }],
  "/prices/hollywood-smile-turkey-package": [HOME, PRICES, { name: "Hollywood Smile Packages" }],
  "/reviews": [HOME, { name: "Patient Reviews" }],
  "/teeth-done-in-turkey-guide": [HOME, { name: "Complete Guide" }],
  "/teeth-done-in-turkey-problems": [HOME, { name: "Problems and How to Avoid Them" }],
  "/travel-to-turkey": [HOME, { name: "Travel to Turkey" }],
  "/travel-to-turkey/dental-holiday-turkey": [HOME, TRAVEL, { name: "Dental Holiday Turkey" }],
  "/travel-to-turkey/how-long-stay-turkey-dental": [HOME, TRAVEL, { name: "How Long to Stay" }],
  "/treatments": [HOME, { name: "Treatments" }],
  "/turkey-teeth-before-after": [HOME, { name: "Before and After" }],
  "/turkey-teeth-clinic": [HOME, { name: "Choosing a Clinic" }],
  "/why-choose-turkey-for-dental-work": [HOME, { name: "Why Choose Turkey" }],
};

export default function RouteBreadcrumb() {
  const pathname = (usePathname() ?? "").replace(/\/+$/, "");
  const trail = TRAILS[pathname];
  if (!trail) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path ?? pathname}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
          {trail.map((crumb, index) => (
            <li key={crumb.name} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index < trail.length - 1 && crumb.path ? (
                <Link href={crumb.path} className="hover:text-gray-900 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gray-700" aria-current="page">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
