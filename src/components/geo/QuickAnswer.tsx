import type { ReactNode } from "react";

// The direct answer to the page's one question, placed straight after the H1.
// Keep `children` under ~100 words and self-contained: an answer engine should be
// able to lift this block alone and answer the query correctly.
export default function QuickAnswer({ question, children }: { question: string; children: ReactNode }) {
  return (
    <section aria-labelledby="quick-answer" className="my-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
      <h2 id="quick-answer" className="text-lg font-bold text-gray-900 mb-2 scroll-mt-24">
        {question}
      </h2>
      <div className="text-gray-800 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
