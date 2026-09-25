export interface DecisionStep {
  condition: string;
  action: string;
}

// If X → consider A. An explicit reasoning path the reader (or an answer engine)
// can follow; the last step should always route to a clinical assessment.
export default function DecisionTree({ title, steps }: { title: string; steps: DecisionStep[] }) {
  return (
    <section aria-labelledby="decision-guide" className="my-10">
      <h2 id="decision-guide" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-24">{title}</h2>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s.condition} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e40af] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>If {s.condition}</strong> → {s.action}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
