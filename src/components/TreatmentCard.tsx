import Link from "next/link";

interface TreatmentCardProps {
  title: string;
  description: string;
  price: string;
  href: string;
  emoji: string;
}

export default function TreatmentCard({ title, description, price, href, emoji }: TreatmentCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-[#1a6b3c] font-bold text-lg mb-3">
          Starting from <span className="text-[#f5a623]">{price}</span>
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-[#1a6b3c] font-semibold hover:gap-2 transition-all text-sm"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
