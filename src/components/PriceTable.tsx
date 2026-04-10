import Link from 'next/link';

const prices = [
  { treatment: 'Porcelain Veneers', uk: '£900/tooth', turkey: '£190/tooth', saving: '79%' },
  { treatment: 'Dental Implants', uk: '£2,500', turkey: '£450', saving: '82%' },
  { treatment: 'All-on-4 Implants', uk: '£15,000+', turkey: '£4,500', saving: '70%' },
  { treatment: 'All-on-6 Implants', uk: '£18,000+', turkey: '£5,500', saving: '69%' },
  { treatment: 'Full Smile Makeover', uk: '£12,000+', turkey: '£3,500', saving: '71%' },
  { treatment: 'Teeth Whitening', uk: '£600', turkey: '£120', saving: '80%' },
  { treatment: 'Composite Bonding', uk: '£400/tooth', turkey: '£90/tooth', saving: '78%' },
  { treatment: 'Zirconia Crown', uk: '£1,200', turkey: '£250', saving: '79%' },
];

export default function PriceTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">UK vs Turkey Dental Prices</h2>
          <p className="text-gray-600">See how much you could save with dental treatment in Turkey</p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-[#1e40af] text-white">
                <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3 text-right font-semibold">UK Price</th>
                <th className="px-4 py-3 text-right font-semibold">Turkey Price</th>
                <th className="px-4 py-3 text-right font-semibold">Saving</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr key={row.treatment} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                  <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                  <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
                      Save {row.saving}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/prices/teeth-done-in-turkey-cost"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            See Full Price Guide
          </Link>
          <Link href="/book-consultation"
            className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
            Get My Personal Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
