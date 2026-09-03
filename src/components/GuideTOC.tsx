interface TOCItem {
  id: string;
  label: string;
}

export default function GuideTOC({ items }: { items: TOCItem[] }) {
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8">
      <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">On This Page</h2>
      <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-[#1e40af] hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
