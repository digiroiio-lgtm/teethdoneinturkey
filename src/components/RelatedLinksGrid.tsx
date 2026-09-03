import Link from 'next/link';

interface RelatedLink {
  title: string;
  desc: string;
  href: string;
}

export default function RelatedLinksGrid({ title, links }: { title: string; links: RelatedLink[] }) {
  return (
    <div className="my-10">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <p className="font-semibold text-gray-900 mb-1">{l.title}</p>
            <p className="text-sm text-gray-600">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
