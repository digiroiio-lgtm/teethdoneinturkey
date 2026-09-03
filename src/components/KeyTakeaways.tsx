export default function KeyTakeaways({ title = "Key Takeaways", items }: { title?: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 my-8">
      <h2 className="text-sm font-bold uppercase tracking-wide text-[#1e40af] mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-gray-800 text-sm leading-relaxed">
            <svg className="w-5 h-5 text-[#1e40af] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
