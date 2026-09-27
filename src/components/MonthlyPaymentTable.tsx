import Link from 'next/link';

// Rebuilt 2026-09-27 — factual correction, not a redesign.
//
// The row that used to read
//   { treatment: 'Veneers Package (10 veneers)', total: '£2,800',
//     monthly36: '£82/month', monthly24: '£122/month' }
// was wrong three times over, and because this component renders on several
// pages it was the origin of a price claim repeated across the whole site:
//
//  1. WRONG TREATMENT. £2,800 is this site's all-inclusive Hollywood Smile
//     price for 20 ZIRCONIA CROWNS including hotel and transfers — that is what
//     /prices/veneers-turkey-cost, /blog/hollywood-smile-turkey-cost,
//     /prices/hollywood-smile-turkey-package and /finance-options-uk all
//     publish. The canonical price for 10 veneers is £1,900 (E-max) or £1,300
//     (zirconia), per the count table on /prices/veneers-turkey-cost.
//  2. WRONG ARITHMETIC. Even taking £2,800, £2,800 / 36 = £78 and
//     £2,800 / 24 = £117, not £82 and £122. Both figures reconcile to a total
//     of roughly £2,950, which is not a price this site publishes anywhere.
//     /finance-options-uk already carries a comment stating "£2,800 / 36 = £78"
//     and a table using £78, while its own plan cards still said £82 — the two
//     contradicted each other on the same page.
//  3. OVERSTATED THE OFFER. "From £82/month" was repeated on 27 live locations as
//     the site's headline finance figure. The cheapest financeable package the
//     site actually prices is 10 E-max veneers at £1,900, which is £53/month
//     over 36 — so the claim was both unsupported and worse than the truth.
//
// Monthly figures below are the treatment total divided across the term at 0%
// APR representative, ROUNDED UP to the nearest £1 so a quoted instalment can
// never come out lower than the real one. Totals are the prices published on
// the cost pages, so this component introduces no new or competing price.
// Total repayable equals the treatment total because the representative example
// is 0% APR with no deposit; that column exists so the 0% claim is checkable.
const plans = [
  { treatment: '10 E-max veneers', total: '£1,900', monthly36: '£53/month', monthly24: '£80/month', repayable: '£1,900', popular: false },
  { treatment: 'Hollywood Smile — 20 zirconia crowns (inc. hotel & transfers)', total: '£2,800', monthly36: '£78/month', monthly24: '£117/month', repayable: '£2,800', popular: false },
  { treatment: 'Smile makeover — 20 E-max veneers', total: '£3,800', monthly36: '£106/month', monthly24: '£159/month', repayable: '£3,800', popular: true },
  { treatment: 'All-on-4 implants — one arch', total: '£4,500', monthly36: '£125/month', monthly24: '£188/month', repayable: '£4,500', popular: false },
  { treatment: 'All-on-6 implants — one arch', total: '£5,600', monthly36: '£156/month', monthly24: '£234/month', repayable: '£5,600', popular: false },
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
            What each treatment works out at per month when the cost is spread over 24 or 36 months at 0% APR representative.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                <th className="px-4 py-3.5 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3.5 text-right font-semibold">Treatment total</th>
                <th className="px-4 py-3.5 text-right font-semibold">Over 36 months</th>
                <th className="px-4 py-3.5 text-right font-semibold">Over 24 months</th>
                <th className="px-4 py-3.5 text-right font-semibold">Total repayable</th>
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
                  <td className="px-4 py-3.5 text-right text-gray-600">{row.repayable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          Example calculations, not a credit offer. Monthly figures are the treatment total divided across the
          term at <strong>0% APR representative</strong>, rounded up to the nearest pound, with no deposit — so the
          total repayable is the same as the treatment total. Your own term, APR, deposit and total repayable are
          set by the finance provider, not by us. All finance is subject to status, a credit check and lender
          approval; not everyone will qualify. Flights are not included in the treatment totals shown.
        </p>
        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/monthly-payment"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md">
            See Monthly Costs by Treatment
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
