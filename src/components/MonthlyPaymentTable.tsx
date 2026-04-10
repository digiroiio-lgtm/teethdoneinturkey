import Link from 'next/link';

const plans = [
  { treatment: 'Smile Makeover (20 veneers)', total: '£3,200', monthly36: '£95/month', monthly24: '£140/month', popular: true },
  { treatment: 'Veneers Package (10 veneers)', total: '£2,800', monthly36: '£82/month', monthly24: '£122/month', popular: false },
  { treatment: 'Implants Package (single arch)', total: '£4,500', monthly36: '£135/month', monthly24: '£196/month', popular: false },
  { treatment: 'All-on-4', total: '£4,500', monthly36: '£135/month', monthly24: '£196/month', popular: false },
  { treatment: 'All-on-6', total: '£5,500', monthly36: '£163/month', monthly24: '£240/month', popular: false },
];

export default function MonthlyPaymentTable() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            💳 Finance Available
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Monthly Payment Options</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Spread the cost of your dental treatment with 0% interest finance options. No hidden fees.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-[#1e40af] text-white">
                <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3 text-right font-semibold">Total Price</th>
                <th className="px-4 py-3 text-right font-semibold">Over 36 Months</th>
                <th className="px-4 py-3 text-right font-semibold">Over 24 Months</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((row, i) => (
                <tr key={row.treatment} className={row.popular ? 'bg-blue-50 border-l-4 border-[#1e40af]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    <span>{row.treatment}</span>
                    {row.popular && (
                      <span className="ml-2 inline-block bg-[#1e40af] text-white text-xs font-bold px-2 py-0.5 rounded-full">MOST POPULAR</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-[#1e40af]">{row.total}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">{row.monthly36}</span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">{row.monthly24}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/monthly-payment"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Pre-Qualify in 60 Seconds
          </Link>
          <Link href="/book-consultation"
            className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
            Discuss Payment Options
          </Link>
        </div>
      </div>
    </section>
  );
}
