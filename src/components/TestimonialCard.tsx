interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  quote: string;
  treatment?: string;
}

export default function TestimonialCard({ name, location, rating, quote, treatment }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#f5a623]" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {treatment && (
        <span className="inline-block bg-[#1a6b3c]/10 text-[#1a6b3c] text-xs font-semibold px-2 py-1 rounded-full mb-3">
          {treatment}
        </span>
      )}
      <blockquote className="text-gray-700 leading-relaxed mb-4 italic">&quot;{quote}&quot;</blockquote>
      <div>
        <p className="font-bold text-[#1a1a1a]">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
