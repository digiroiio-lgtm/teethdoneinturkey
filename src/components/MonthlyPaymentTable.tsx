import Link from 'next/link';
import { FINANCE_TERMS_NOTE, monthlyLabel } from '@/lib/finance';
import { gbp, getPrice } from '@/lib/prices';

// Totals come from src/lib/prices.ts; monthly figures are 0% APR 12- and
// 24-month plans from src/lib/finance.ts (36-month plans carry interest).
const emax = getPrice('emax-veneer');
const plans = [
  { treatment: 'Smile makeover (20 E-max veneers)', total: emax.turkeyFromGBP * 20, popular: true },
  { treatment: 'Veneers (10 E-max)', total: emax.turkeyFromGBP * 10, popular: false },
  { treatment: 'Hollywood Smile (20 zirconia crowns, incl. hotel)', total: getPrice('hollywood-20').turkeyFromGBP, popular: false },
  { treatment: 'All-on-4 (one arch)', total: getPrice('all-on-4').turkeyFromGBP, popular: false },
  { treatment: 'All-on-6 (one arch)', total: getPrice('all-on-6').turkeyFromGBP, popular: false },
].map((p) => ({ ...p, monthly24: `${monthlyLabel(p.total, 24)}`, monthly12: `${monthlyLabel(p.total, 12)}` }));

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
            Spread the cost of treatment at 0% APR over 12 or 24 months, subject to status.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                <th className="px-4 py-3.5 text-left font-semibold">Treatment</th>
                <th className="px-4 py-3.5 text-right font-semibold">Total Price</th>
                <th className="px-4 py-3.5 text-right font-semibold">24 months at 0%</th>
                <th className="px-4 py-3.5 text-right font-semibold">12 months at 0%</th>
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
                  <td className="px-4 py-3.5 text-right font-bold text-[#1e40af]">From {gbp(row.total)}</td>
                  <td className="px-4 py-3.5 text-right">
                    <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">{row.monthly24}</span>
                  </td>
                  <td className="px-4 py-3.5 text-right text-gray-600">{row.monthly12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500 text-center">{FINANCE_TERMS_NOTE} Totals are indicative treatment prices before travel.</p>
        <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/monthly-payment"
            className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md">
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
