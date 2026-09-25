// "Who this may not suit" — the decision-support counterweight to a commercial page.
export default function NotForYou({ title = "Who treatment in Turkey may not suit", items }: { title?: string; items: string[] }) {
  return (
    <section aria-labelledby="not-for-you" className="my-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
      <h2 id="not-for-you" className="text-xl font-bold text-gray-900 mb-3 scroll-mt-24">{title}</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
