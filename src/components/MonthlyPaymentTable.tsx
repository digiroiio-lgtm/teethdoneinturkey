import Link from 'next/link';

// This table renders on the homepage, /finance-options-uk and /monthly-payment, so
// its figures have to agree with the canonical price pages. Two rows did not:
//
//   "Veneers Package (10 veneers) — £2,800, £82/mo, £122/mo" was wrong three times
//   over. Ten E-max veneers are £1,900 at the site's published £190/tooth; £2,800 is
//   the 20-crown Hollywood Smile package price, not a 10-veneer price; and neither
//   £82 nor £122 is £2,800 (or £1,900) divided by 36 or 24. That row was the origin
//   of the stray "from £82/month" claim repeated across several pages.
//
//   "Implants Package (single arch)" duplicated the All-on-4 row beneath it at the
//   same £4,500, so the same product was listed twice under two names.
//
// Every figure below is now the treatment price divided by the term at 0% APR
// representative, rounded to the nearest pound, matching /monthly-payment row for row.
const plans = [
  { treatment: 'Smile Makeover (20 E-max veneers)', total: '£3,800', monthly36: '£106/month', monthly24: '£158/month', popular: true },
  { treatment: 'Hollywood Smile (20 zirconia crowns, inc. hotel & transfers)', total: '£2,800', monthly36: '£78/month', monthly24: '£117/month', popular: false },
  { treatment: '10 E-max veneers', total: '£1,900', monthly36: '£53/month', monthly24: '£79/month', popular: false },
  { treatment: 'All-on-4 (one arch, all-inclusive)', total: '£4,500', monthly36: '£125/month', monthly24: '£188/month', popular: false },
  { treatment: 'All-on-6 (one arch, all-inclusive)', total: '£5,600', monthly36: '£156/month', monthly24: '£233/month', popular: false },
];

export default function MonthlyPaymentTable() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            💳 Finance Available
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Monthly Payment Options</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Spread the cost of treatment over 24 or 36 months at 0% APR representative, subject to eligibility.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                <th className="px-4 py-3.5 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3.5 text-right font-semibold">Total Price</th>
                <th className="px-4 py-3.5 text-right font-semibold">Over 36 Months</th>
                <th className="px-4 py-3.5 text-right font-semibold">Over 24 Months</th>
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
                  <td className="px-4 py-3.5 text-right">
                    <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">{row.monthly36}</span>
                  </td>
                  <td className="px-4 py-3.5 text-right text-gray-600">{row.monthly24}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-3xl">
          Monthly figures are the treatment price divided by the term at a <strong>0% APR representative</strong> rate,
          rounded to the nearest pound and with no deposit applied. They are example calculations, not credit offers.
          Finance is subject to a credit check and to the lender&apos;s approval — approval is not guaranteed and not
          everyone will qualify. At any APR above 0% the total repayable will be higher than the price shown. Flights
          are not included in any package price.{" "}
          <Link href="/blog/can-you-pay-monthly-for-teeth-in-turkey" className="text-[#1e40af] font-semibold hover:underline">
            How paying monthly for Turkey teeth works
          </Link>.
        </p>
        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/monthly-payment"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md">
            See Monthly Payment Options
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
