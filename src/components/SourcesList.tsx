interface Source {
  label: string;
  href: string;
}

export default function SourcesList({ sources, introduction }: { sources: Source[]; introduction?: string }) {
  return (
    <div className="my-10">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Sources &amp; References</h2>
      {introduction && <p className="text-sm text-gray-600 leading-relaxed mb-4">{introduction}</p>}
      <ul className="space-y-1.5 text-sm">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="text-[#1e40af] hover:underline break-words">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
