import Link from "next/link";

export interface FollowUp {
  question: string;
  /** The one page on this site that owns this question's intent. */
  href: string;
  /** One-sentence answer shown inline, so the link is not the only content. */
  answer: string;
}

// The natural next questions after the page's main query, each routed to the
// single URL that owns that intent. Builds the topic graph explicitly.
export default function FollowUpQuestions({ title = "Common follow-up questions", items }: { title?: string; items: FollowUp[] }) {
  return (
    <section aria-labelledby="follow-up-questions" className="my-10">
      <h2 id="follow-up-questions" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-24">{title}</h2>
      <ul className="divide-y divide-gray-100 rounded-xl ring-1 ring-gray-200 bg-white">
        {items.map((f) => (
          <li key={f.question} className="p-4">
            <p className="font-semibold text-gray-900">
              <Link href={f.href} className="hover:text-[#1e40af] hover:underline">{f.question}</Link>
            </p>
            <p className="text-sm text-gray-600 mt-1">{f.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
