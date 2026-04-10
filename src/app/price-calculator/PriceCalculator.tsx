'use client';

import { useState } from 'react';
import Link from 'next/link';

const treatments = [
  { id: 'veneers_emax', label: 'E-max Porcelain Veneers', unit: 'per tooth', priceMin: 190, priceMax: 220 },
  { id: 'veneers_zirconia', label: 'Zirconia Crowns', unit: 'per tooth', priceMin: 130, priceMax: 150 },
  { id: 'composite', label: 'Composite Veneers', unit: 'per tooth', priceMin: 80, priceMax: 120 },
  { id: 'implant_osstem', label: 'Osstem Implant + Crown', unit: 'per implant', priceMin: 380, priceMax: 420 },
  { id: 'implant_straumann', label: 'Straumann Implant + Crown', unit: 'per implant', priceMin: 800, priceMax: 930 },
  { id: 'allon4', label: 'All-on-4 (per arch)', unit: 'fixed', priceMin: 4500, priceMax: 5500 },
  { id: 'allon6', label: 'All-on-6 Package (both arches, inc. hotel)', unit: 'fixed', priceMin: 5600, priceMax: 5600 },
  { id: 'hollywood20', label: 'Hollywood Smile – 20 Crowns (package)', unit: 'fixed', priceMin: 2800, priceMax: 2800 },
  { id: 'hollywood24', label: 'Hollywood Smile – 24 Crowns (package)', unit: 'fixed', priceMin: 3100, priceMax: 3100 },
  { id: 'whitening', label: 'Teeth Whitening + Cleaning', unit: 'fixed', priceMin: 250, priceMax: 250 },
  { id: 'rootcanal', label: 'Root Canal Treatment', unit: 'per tooth', priceMin: 200, priceMax: 250 },
];

const ukMultipliers: Record<string, { min: number; max: number }> = {
  veneers_emax: { min: 800, max: 1000 },
  veneers_zirconia: { min: 1000, max: 1500 },
  composite: { min: 300, max: 500 },
  implant_osstem: { min: 2000, max: 3000 },
  implant_straumann: { min: 3000, max: 4500 },
  allon4: { min: 12000, max: 18000 },
  allon6: { min: 30000, max: 44000 },
  hollywood20: { min: 20000, max: 30000 },
  hollywood24: { min: 24000, max: 36000 },
  whitening: { min: 400, max: 700 },
  rootcanal: { min: 600, max: 900 },
};

interface LineItem {
  id: string;
  qty: number;
}

export default function PriceCalculator() {
  const [items, setItems] = useState<LineItem[]>([{ id: 'veneers_emax', qty: 10 }]);

  const addItem = () => setItems(prev => [...prev, { id: 'veneers_emax', qty: 1 }]);
  const removeItem = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));
  const updateItem = (index: number, field: 'id' | 'qty', value: string | number) =>
    setItems(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));

  const totals = items.reduce(
    (acc, item) => {
      const t = treatments.find(t => t.id === item.id);
      const uk = ukMultipliers[item.id];
      if (!t || !uk) return acc;
      const qty = t.unit === 'fixed' ? 1 : item.qty;
      return {
        turkeyMin: acc.turkeyMin + t.priceMin * qty,
        turkeyMax: acc.turkeyMax + t.priceMax * qty,
        ukMin: acc.ukMin + uk.min * qty,
        ukMax: acc.ukMax + uk.max * qty,
      };
    },
    { turkeyMin: 0, turkeyMax: 0, ukMin: 0, ukMax: 0 }
  );

  const savingMin = totals.ukMin - totals.turkeyMax;
  const savingMax = totals.ukMax - totals.turkeyMin;
  const savingPct = totals.ukMin > 0
    ? Math.round(((totals.ukMin - totals.turkeyMax) / totals.ukMin) * 100)
    : 0;

  const monthly36 = Math.ceil(totals.turkeyMax / 36);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="font-bold text-gray-900">Build Your Treatment</h2>
          <p className="text-sm text-gray-500 mt-0.5">Add each treatment you&apos;re considering and adjust the quantity</p>
        </div>

        <div className="divide-y divide-gray-100">
          {items.map((item, index) => {
            const t = treatments.find(t => t.id === item.id)!;
            const isFixed = t?.unit === 'fixed';
            return (
              <div key={index} className="px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <select
                  value={item.id}
                  onChange={e => updateItem(index, 'id', e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {treatments.map(t => (
                    <option key={t.id} value={t.id}>{t.label} — from £{t.priceMin}{t.unit !== 'fixed' ? `/${t.unit}` : ''}</option>
                  ))}
                </select>

                {!isFixed && (
                  <div className="flex items-center gap-2 shrink-0">
                    <label className="text-xs text-gray-500 whitespace-nowrap">Qty:</label>
                    <input
                      type="number"
                      min={1}
                      max={32}
                      value={item.qty}
                      onChange={e => updateItem(index, 'qty', Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-xs text-gray-500">{t?.unit}</span>
                  </div>
                )}

                <button
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                  className="text-red-400 hover:text-red-600 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={addItem}
            className="text-[#1e40af] font-semibold text-sm hover:underline"
          >
            + Add another treatment
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#1e40af] rounded-2xl p-6 text-white">
        <h2 className="font-extrabold text-xl mb-6">Your Estimated Costs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">Turkey Cost</p>
            <p className="text-2xl font-extrabold">
              £{totals.turkeyMin.toLocaleString()}
              {totals.turkeyMin !== totals.turkeyMax && `–£${totals.turkeyMax.toLocaleString()}`}
            </p>
            <p className="text-xs text-blue-200 mt-1">All-inclusive estimate</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">UK Cost</p>
            <p className="text-2xl font-extrabold text-red-300 line-through">
              £{totals.ukMin.toLocaleString()}
              {totals.ukMin !== totals.ukMax && `–£${totals.ukMax.toLocaleString()}`}
            </p>
            <p className="text-xs text-blue-200 mt-1">Typical UK private price</p>
          </div>
          <div className="bg-yellow-400 rounded-xl p-4 text-center">
            <p className="text-xs text-[#1e40af] uppercase tracking-wide font-bold mb-1">You Save</p>
            <p className="text-2xl font-extrabold text-[#1e40af]">
              £{savingMin.toLocaleString()}
              {savingMin !== savingMax && `–£${savingMax.toLocaleString()}`}
            </p>
            <p className="text-xs text-[#1e40af] font-semibold mt-1">~{savingPct}% saving</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-100">Or spread the cost from just</p>
            <p className="text-2xl font-extrabold">£{monthly36}/month</p>
            <p className="text-xs text-blue-200">over 36 months</p>
          </div>
          <Link href="/monthly-payment" className="bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap">
            View Payment Plans →
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Estimates are based on typical Turkish clinic prices for 2026. Actual quotes depend on your specific dental assessment.{' '}
        <Link href="/book-consultation" className="text-[#1e40af] underline">Get a free personalised quote</Link> for exact pricing.
      </p>

      <div className="text-center">
        <Link href="/book-consultation" className="bg-[#1e40af] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors inline-block">
          Get My Exact Quote (Free)
        </Link>
      </div>
    </div>
  );
}
