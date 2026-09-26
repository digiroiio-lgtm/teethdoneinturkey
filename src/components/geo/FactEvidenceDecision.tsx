// Separates what is known, how it is known, what it means, and what the reader
// still has to weigh up themselves. Used for YMYL claims (safety, risk, outcomes).
export default function FactEvidenceDecision({
  title,
  fact,
  evidence,
  interpretation,
  decision,
}: {
  title: string;
  fact: string;
  evidence: string;
  interpretation: string;
  decision: string;
}) {
  const rows = [
    { label: "Fact", text: fact },
    { label: "Evidence", text: evidence },
    { label: "What it means", text: interpretation },
    { label: "Your decision", text: decision },
  ];
  return (
    <section className="my-8 rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <dl className="space-y-2 text-sm">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1">
            <dt className="font-semibold text-[#1e40af]">{r.label}</dt>
            <dd className="text-gray-700 leading-relaxed">{r.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
