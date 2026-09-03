import Link from 'next/link';

interface GuideCardProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  updated: string;
  href: string;
  featured?: boolean;
}

export default function GuideCard({ category, title, description, readingTime, updated, href, featured }: GuideCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-2xl hover:shadow-blue-900/10'
          : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200'
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block bg-[#1e40af] text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
          Guide
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{category}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e40af] transition-colors">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-3 border-t border-gray-100">
        <span>{readingTime} read</span>
        <span>Updated {updated}</span>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1e40af] group-hover:gap-2.5 transition-all">
        Read Guide <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
