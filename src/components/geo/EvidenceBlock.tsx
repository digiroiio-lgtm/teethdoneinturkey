import Link from "next/link";

export interface Evidence {
  claim: string;
  /** Where the claim comes from, e.g. "Partner clinic list price" or "NHS England". */
  basis: string;
  /** Optional link to the primary source or to the page that holds the data. */
  href?: string;
  checked: string;
}

// "How we know this": ties each headline claim on the page to its evidence and
// the date it was last verified.
export default function EvidenceBlock({ items }: { items: Evidence[] }) {
  return (
    <section aria-labelledby="how-we-know" className="my-10">
      <h2 id="how-we-know" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-24">How we know this</h2>
      <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200">
        <table className="w-full text-sm bg-white">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th scope="col" className="px-4 py-2 text-left font-semibold">Claim</th>
              <th scope="col" className="px-4 py-2 text-left font-semibold">Evidence</th>
              <th scope="col" className="px-4 py-2 text-left font-semibold">Last checked</th>
            </tr>
          </thead>
          <tbody>
            {items.map((e) => (
              <tr key={e.claim} className="border-t border-gray-100 align-top">
                <td className="px-4 py-2 text-gray-800">{e.claim}</td>
                <td className="px-4 py-2 text-gray-600">
                  {e.href ? (
                    e.href.startsWith("/") ? (
                      <Link href={e.href} className="text-[#1e40af] hover:underline">{e.basis}</Link>
                    ) : (
                      <a href={e.href} target="_blank" rel="noopener noreferrer nofollow" className="text-[#1e40af] hover:underline">{e.basis}</a>
                    )
                  ) : (
                    e.basis
                  )}
                </td>
                <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{e.checked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        How prices are collected, what they include and how often they are checked:{" "}
        <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link>.
      </p>
    </section>
  );
}
