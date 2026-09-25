export interface Fact {
  label: string;
  value: string;
}

// Key facts as a definition list — the cheapest possible structure for a machine
// to extract, and a scannable summary for a person.
export default function AtAGlance({ title = "At a glance", facts }: { title?: string; facts: Fact[] }) {
  return (
    <section aria-label={title} className="my-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-bold uppercase tracking-wide text-[#1e40af] mb-3">{title}</h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {facts.map((f) => (
          <div key={f.label} className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="text-gray-500">{f.label}</dt>
            <dd className="font-semibold text-gray-900 text-right">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
