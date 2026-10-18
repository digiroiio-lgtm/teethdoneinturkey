interface Source {
  label: string;
  href: string;
  publisher?: string;
  supports?: string;
}

export default function SourcesList({ sources, title = "Sources & References" }: { sources: Source[]; title?: string }) {
  return (
    <div className="my-10">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <ul className="space-y-1.5 text-sm">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#1e40af] hover:underline break-words">
              {s.label}
            </a>
            {s.publisher && <span className="text-gray-600"> ({s.publisher})</span>}
            {s.supports && <p className="text-xs text-gray-500 mt-1 mb-3">{s.supports}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
