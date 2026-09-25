import Link from "next/link";

// Visible freshness line. Dates must match the page's JSON-LD datePublished /
// dateModified, and "Pricing checked" must match src/lib/prices.ts.
export default function PageFreshness({
  published,
  reviewed,
  pricingChecked,
  className = "text-gray-500",
}: {
  published: string;
  reviewed?: string;
  pricingChecked?: string;
  className?: string;
}) {
  return (
    <p className={`text-sm ${className}`}>
      Published: {published}
      {reviewed && <> · Last reviewed: {reviewed}</>}
      {pricingChecked && <> · Pricing checked: {pricingChecked}</>}
      {" · "}
      <Link href="/methodology" className="underline hover:no-underline">Methodology</Link>
    </p>
  );
}
