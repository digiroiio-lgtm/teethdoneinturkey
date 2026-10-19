import Link from "next/link";

export default function ExpertQuote({
  quote,
  name,
  href,
  role,
}: {
  quote: string;
  name: string;
  href?: string;
  role: string;
}) {
  return (
    <figure className="expert-quote my-6 border-l-4 border-[#1e40af] bg-blue-50/60 rounded-r-xl px-5 py-4">
      <blockquote>
        <p className="text-gray-800 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        {href && href.startsWith("http") ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1e40af] hover:underline">{name}</a>
        ) : href ? (
          <Link href={href} className="font-semibold text-[#1e40af] hover:underline">{name}</Link>
        ) : (
          <strong className="text-gray-900">{name}</strong>
        )}
        <span className="block">{role}</span>
      </figcaption>
    </figure>
  );
}
