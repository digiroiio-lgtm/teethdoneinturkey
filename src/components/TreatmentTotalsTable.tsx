import Link from 'next/link';

const plans = [
  { treatment: 'Smile makeover (20 E-max veneers)', total: '£3,800', popular: true },
  { treatment: 'Veneers package (10 veneers)', total: '£2,800', popular: false },
  { treatment: 'Implants package (single arch)', total: '£4,500', popular: false },
  { treatment: 'All-on-4 (one arch)', total: '£4,500', popular: false },
  { treatment: 'All-on-6 (one arch)', total: '£5,600', popular: false },
];

export default function TreatmentTotalsTable() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Treatment Totals to Plan Around</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            These are the treatment prices published on this site. If you choose to borrow, the lender sets the terms and the monthly amount in your written offer.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                <th className="px-4 py-3.5 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3.5 text-right font-semibold">Treatment price in Turkey</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((row, i) => (
                <tr
                  key={row.treatment}
                  className={`${row.popular ? 'bg-blue-50 border-l-4 border-[#1e40af]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'} hover:bg-blue-50/60 transition-colors`}
                >
                  <td className="px-4 py-3.5 font-medium text-gray-800">
                    <span>{row.treatment}</span>
                    {row.popular && (
                      <span className="ml-2 inline-block bg-[#1e40af] text-white text-xs font-bold px-2 py-0.5 rounded-full">MOST POPULAR</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-right font-bold text-[#1e40af]">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/finance-options-uk"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md">
            How Paying Monthly Works
          </Link>
          <Link href="/book-consultation"
            className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
            Ask About Payment Options
          </Link>
        </div>
      </div>
    </section>
  );
}
