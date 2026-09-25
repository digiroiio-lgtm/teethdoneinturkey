import { type PriceRecord, savingRange, turkeyPrice, ukRange } from "@/lib/prices";

// Turkey vs UK price table rendered straight from src/lib/prices.ts.
export default function PriceRows({ records, caption }: { records: PriceRecord[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-md my-4">
      <table className="w-full bg-white text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
            <th scope="col" className="px-4 py-3 text-left">Treatment</th>
            <th scope="col" className="px-4 py-3 text-right">Turkey</th>
            <th scope="col" className="px-4 py-3 text-right">UK private</th>
            <th scope="col" className="px-4 py-3 text-right">Difference</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">
                {r.treatment} <span className="text-xs font-normal text-gray-500">({r.unit})</span>
              </th>
              <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{turkeyPrice(r)}</td>
              <td className="px-4 py-3 text-right text-gray-700">{ukRange(r)}</td>
              <td className="px-4 py-3 text-right">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{savingRange(r)} lower</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
