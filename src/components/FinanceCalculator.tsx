'use client';

import { useState } from 'react';
import Link from 'next/link';

// Illustrative dental finance calculator.
//
// UK consumer credit APR is an EFFECTIVE annual rate, so the monthly rate is
// (1 + APR)^(1/12) - 1, NOT APR/12. Treating APR as a nominal rate and dividing
// by 12 gives a higher periodic rate and therefore an inflated monthly payment
// (£168.23 vs £166.54 on £5,000 over 36 months at 12.9% APR). Verified by
// amortising the schedule: at the effective rate the balance closes to exactly
// zero on the final payment.
function monthlyPayment(principal: number, annualRatePct: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0;
  if (annualRatePct === 0) return principal / months;
  const r = Math.pow(1 + annualRatePct / 100, 1 / 12) - 1;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

const PRESETS = [2000, 5000, 8000, 12000];
const TERMS = [12, 24, 36, 48];

const gbp = (n: number) =>
  n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
const gbp2 = (n: number) =>
  n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function FinanceCalculator() {
  const [cost, setCost] = useState(5000);
  const [deposit, setDeposit] = useState(500);
  const [apr, setApr] = useState(0);

  const safeCost = Number.isFinite(cost) && cost > 0 ? cost : 0;
  const safeDeposit = Math.min(Math.max(Number.isFinite(deposit) ? deposit : 0, 0), safeCost);
  const financed = Math.max(0, safeCost - safeDeposit);

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
      <h3 className="text-lg font-bold text-gray-900 mb-1">Illustrative monthly payment calculator</h3>
      <p className="text-sm text-gray-600 mb-5">
        Change the figures to see how the amount borrowed, the term and the interest rate each affect what you would pay.
        These are worked examples, not an offer, a quote or a decision.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        <div>
          <label htmlFor="fc-cost" className="block text-sm font-medium text-gray-700 mb-1">Treatment cost</label>
          <input
            id="fc-cost"
            type="number"
            min={0}
            step={100}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          />
          <div className="flex flex-wrap gap-1.5 mt-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCost(p)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  cost === p
                    ? 'bg-[#1e40af] text-white border-[#1e40af]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                }`}
              >
                {gbp(p)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="fc-deposit" className="block text-sm font-medium text-gray-700 mb-1">Deposit</label>
          <input
            id="fc-deposit"
            type="number"
            min={0}
            step={100}
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          />
          <p className="text-xs text-gray-500 mt-2">Capped at the treatment cost.</p>
        </div>

        <div>
          <label htmlFor="fc-apr" className="block text-sm font-medium text-gray-700 mb-1">
            APR: <span className="font-bold text-[#1e40af]">{apr.toFixed(1)}%</span>
          </label>
          <input
            id="fc-apr"
            type="range"
            min={0}
            max={40}
            step={0.1}
            value={apr}
            onChange={(e) => setApr(Number(e.target.value))}
            className="w-full accent-[#1e40af] mt-2"
          />
          <p className="text-xs text-gray-500 mt-1">
            Set this to 0% to model an interest free plan, or drag it up to see the effect of interest.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div>
            <span className="text-gray-500">Amount financed: </span>
            <span className="font-bold text-gray-900">{gbp(financed)}</span>
          </div>
          <div>
            <span className="text-gray-500">Deposit: </span>
            <span className="font-bold text-gray-900">{gbp(safeDeposit)}</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200">
        <table className="w-full bg-white text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
              <th className="px-4 py-3 text-left font-semibold">Term</th>
              <th className="px-4 py-3 text-right font-semibold">Monthly payment</th>
              <th className="px-4 py-3 text-right font-semibold">Total repayable</th>
              <th className="px-4 py-3 text-right font-semibold">Interest</th>
            </tr>
          </thead>
          <tbody>
            {TERMS.map((n, i) => {
              const m = monthlyPayment(financed, apr, n);
              const total = m * n;
              const interest = total - financed;
              return (
                <tr key={n} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{n} months</td>
                  <td className="px-4 py-3 text-right font-bold text-[#1e40af]">{gbp2(m)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{gbp2(total)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{interest < 0.005 ? 'None' : gbp2(interest)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
        Figures are illustrative and assume a fixed rate with equal monthly instalments over the full term.
        A 0% result is an illustration of an interest free plan, not confirmation that 0% is available to you.
        Teeth Done in Turkey is not a lender and does not make lending decisions. Any finance is provided by a
        third party and is subject to status, eligibility, affordability and that provider&apos;s own criteria,
        so approval is not guaranteed. Your actual rate, term and monthly payment are confirmed only in a
        credit agreement before you sign.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/price-calculator"
          className="bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
        >
          Estimate your treatment cost
        </Link>
        <Link
          href="/monthly-payment"
          className="border-2 border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
        >
          Compare payment plans
        </Link>
      </div>
    </div>
  );
}
