export interface ComparisonRow {
  factor: string;
  values: string[];
}

// Factor × option comparison. Rows should show real trade-offs — including the
// ones where the alternative is the better choice — not a one-sided sales grid.
export default function ComparisonTable({
  id,
  title,
  options,
  rows,
  caption,
}: {
  id?: string;
  title: string;
  options: string[];
  rows: ComparisonRow[];
  caption?: string;
}) {
  return (
    <section aria-labelledby={id} className="my-10">
      <h2 id={id} className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-24">{title}</h2>
      <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200">
        <table className="w-full text-sm bg-white">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
              <th scope="col" className="px-4 py-3 text-left font-semibold">Factor</th>
              {options.map((o) => (
                <th key={o} scope="col" className="px-4 py-3 text-left font-semibold">{o}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.factor} className={`align-top ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <th scope="row" className="px-4 py-3 text-left font-medium text-gray-900">{r.factor}</th>
                {r.values.map((v, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <p className="mt-2 text-xs text-gray-500">{caption}</p>}
    </section>
  );
}
