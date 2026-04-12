'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── Price data ────────────────────────────────────────────────────────────
const TREATMENTS = [
  { id: 'veneers_emax',        label: 'E-max Porcelain Veneers',               unit: 'tooth',   priceMin: 190, priceMax: 220, ukMin: 800,   ukMax: 1000  },
  { id: 'veneers_zirconia',    label: 'Zirconia Crowns',                        unit: 'tooth',   priceMin: 130, priceMax: 150, ukMin: 1000,  ukMax: 1500  },
  { id: 'composite',           label: 'Composite Bonding',                      unit: 'tooth',   priceMin: 80,  priceMax: 120, ukMin: 300,   ukMax: 500   },
  { id: 'implant_osstem',      label: 'Dental Implant (Osstem)',                unit: 'implant', priceMin: 250, priceMax: 280, ukMin: 2000,  ukMax: 3000  },
  { id: 'implant_straumann',   label: 'Dental Implant (Straumann)',             unit: 'implant', priceMin: 800, priceMax: 930, ukMin: 3000,  ukMax: 4500  },
  { id: 'allon4',              label: 'All-on-4 Implants',                      unit: 'arch',    priceMin: 4500, priceMax: 5500, ukMin: 12000, ukMax: 18000 },
  { id: 'allon6',              label: 'All-on-6 Implants (both arches + hotel)',unit: 'package', priceMin: 5600, priceMax: 5600, ukMin: 30000, ukMax: 44000 },
  { id: 'hollywood20',         label: 'Hollywood Smile – 20 Crowns',            unit: 'package', priceMin: 2800, priceMax: 2800, ukMin: 20000, ukMax: 30000 },
  { id: 'hollywood24',         label: 'Hollywood Smile – 24 Crowns',            unit: 'package', priceMin: 3100, priceMax: 3100, ukMin: 24000, ukMax: 36000 },
  { id: 'whitening',           label: 'Teeth Whitening & Cleaning',             unit: 'session', priceMin: 120, priceMax: 120, ukMin: 400,   ukMax: 700   },
  { id: 'rootcanal',           label: 'Root Canal Treatment',                   unit: 'tooth',   priceMin: 200, priceMax: 250, ukMin: 600,   ukMax: 900   },
  { id: 'fullmakeover',        label: 'Full Smile Makeover',                    unit: 'package', priceMin: 3500, priceMax: 4500, ukMin: 12000, ukMax: 18000 },
] as const;

type TreatmentId = typeof TREATMENTS[number]['id'];

interface DetectedItem {
  id: TreatmentId;
  qty: number;
}

// ─── Number word map ───────────────────────────────────────────────────────
const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
  seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
  thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20,
};

// ─── Parser ────────────────────────────────────────────────────────────────
function parseInput(raw: string): DetectedItem[] {
  const text = raw.toLowerCase();
  const results: DetectedItem[] = [];

  /** Find a nearby number in a ±50 char window around `pos`. */
  function nearbyQty(pos: number, defaultQty: number): number {
    const start = Math.max(0, pos - 50);
    const end = Math.min(text.length, pos + 60);
    const snippet = text.substring(start, end);
    const digitMatch = snippet.match(/\b(\d{1,2})\b/);
    if (digitMatch) return Math.min(parseInt(digitMatch[1]), 32);
    for (const [word, num] of Object.entries(NUMBER_WORDS)) {
      const re = new RegExp(`\\b${word}\\b`);
      if (re.test(snippet)) return num;
    }
    return defaultQty;
  }

  function alreadyHas(id: string) {
    return results.some(r => r.id === id);
  }

  // ── All-on-6 (check before generic implant) ──────────────────────────────
  if (/all[\s-]?on[\s-]?6/.test(text) || /6[\s-]?impl/.test(text)) {
    results.push({ id: 'allon6', qty: 1 });
  }

  // ── All-on-4 ─────────────────────────────────────────────────────────────
  if (/all[\s-]?on[\s-]?4/.test(text) && !alreadyHas('allon6')) {
    const bothArches = /both.*(arch|jaw)|upper.+and.+lower|full\s+mouth|full\s+set\s+of\s+impl/.test(text);
    results.push({ id: 'allon4', qty: bothArches ? 2 : 1 });
  }

  // ── Hollywood smile / smile makeover ─────────────────────────────────────
  if (/hollywood\s*smile|smile\s+makeover|full\s+smile\s+make/.test(text)) {
    const pos = text.search(/hollywood|smile\s+makeover/);
    const qty = nearbyQty(pos, 20);
    results.push({ id: qty >= 22 ? 'hollywood24' : 'hollywood20', qty: 1 });
  }

  // ── Full smile makeover (generic) ─────────────────────────────────────────
  if (/full\s+smile|complete\s+smile|whole\s+mouth\s+veneer|full\s+set\s+of\s+veneer/.test(text)
      && !alreadyHas('hollywood20') && !alreadyHas('hollywood24')) {
    results.push({ id: 'fullmakeover', qty: 1 });
  }

  // ── Porcelain / E-max veneers ─────────────────────────────────────────────
  if (/e[\s-]?max|porcelain\s+veneer|emax/.test(text)
      || (/veneer/.test(text) && !/composite/.test(text)
          && !alreadyHas('hollywood20') && !alreadyHas('hollywood24') && !alreadyHas('fullmakeover'))) {
    const pos = text.search(/veneer|e[\s-]?max|emax/);
    // Context hints for defaults
    let defQty = 10;
    if (/top.*(teeth|row|arch)|upper.*(teeth|row|arch)/.test(text)) defQty = 10;
    if (/bottom.*(teeth|row|arch)|lower.*(teeth|row|arch)/.test(text)) defQty = 10;
    if (/both.*(arch|row)|top.+and.+bottom|upper.+and.+lower/.test(text)) defQty = 20;
    const qty = nearbyQty(pos, defQty);
    results.push({ id: 'veneers_emax', qty });
  }

  // ── Zirconia crowns ───────────────────────────────────────────────────────
  if (/zirconia|zircon/.test(text)
      && !alreadyHas('hollywood20') && !alreadyHas('hollywood24')) {
    const pos = text.search(/zirconia|zircon/);
    results.push({ id: 'veneers_zirconia', qty: nearbyQty(pos, 1) });
  } else if (/\bcrown/.test(text)
      && !alreadyHas('hollywood20') && !alreadyHas('hollywood24')
      && !alreadyHas('allon4') && !alreadyHas('allon6')) {
    const pos = text.search(/\bcrown/);
    results.push({ id: 'veneers_zirconia', qty: nearbyQty(pos, 1) });
  }

  // ── Composite bonding ─────────────────────────────────────────────────────
  if (/composite\s+bond|composite\s+veneer|bonding/.test(text)) {
    const pos = text.search(/composite|bonding/);
    results.push({ id: 'composite', qty: nearbyQty(pos, 6) });
  }

  // ── Implants (not already All-on) ────────────────────────────────────────
  if (!alreadyHas('allon4') && !alreadyHas('allon6')) {
    if (/implant|missing\s+teet?h?|missing\s+tooth/.test(text)) {
      const pos = text.search(/implant|missing/);
      const qty = nearbyQty(pos, 1);
      if (/straumann/.test(text)) {
        results.push({ id: 'implant_straumann', qty });
      } else {
        results.push({ id: 'implant_osstem', qty });
      }
    }
  }

  // ── Whitening ─────────────────────────────────────────────────────────────
  if (/whiten|bleach/.test(text)) {
    results.push({ id: 'whitening', qty: 1 });
  }

  // ── Root canal ────────────────────────────────────────────────────────────
  if (/root\s+canal|root\s+treatment|root\s+filling/.test(text)) {
    const pos = text.search(/root/);
    results.push({ id: 'rootcanal', qty: nearbyQty(pos, 1) });
  }

  return results;
}

// ─── Example prompts ───────────────────────────────────────────────────────
const EXAMPLES = [
  'I want 10 porcelain veneers on my top teeth and teeth whitening',
  'I need 3 dental implants for missing back teeth',
  'I\'d like a Hollywood smile makeover with 20 teeth',
  'I need All-on-4 implants for my lower arch — my teeth are failing',
  'I want composite bonding on 6 teeth and a root canal on one tooth',
  'I need 8 E-max veneers and 2 implants for missing teeth',
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function AIPriceEstimator() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<DetectedItem[] | null>(null);
  const [analysed, setAnalysed] = useState(false);

  function handleEstimate() {
    const detected = parseInput(input);
    setItems(detected);
    setAnalysed(true);
  }

  function handleExample(example: string) {
    setInput(example);
    const detected = parseInput(example);
    setItems(detected);
    setAnalysed(true);
  }

  function handleReset() {
    setInput('');
    setItems(null);
    setAnalysed(false);
  }

  // ── Totals ────────────────────────────────────────────────────────────────
  const totals = (items ?? []).reduce(
    (acc, item) => {
      const t = TREATMENTS.find(t => t.id === item.id);
      if (!t) return acc;
      const qty = t.unit === 'package' || t.unit === 'session' ? 1 : item.qty;
      return {
        turkeyMin: acc.turkeyMin + t.priceMin * qty,
        turkeyMax: acc.turkeyMax + t.priceMax * qty,
        ukMin: acc.ukMin + t.ukMin * qty,
        ukMax: acc.ukMax + t.ukMax * qty,
      };
    },
    { turkeyMin: 0, turkeyMax: 0, ukMin: 0, ukMax: 0 }
  );

  const savingMin = Math.max(0, totals.ukMin - totals.turkeyMax);
  const savingMax = Math.max(0, totals.ukMax - totals.turkeyMin);
  const savingPct = totals.ukMin > 0
    ? Math.round(((totals.ukMin - totals.turkeyMax) / totals.ukMin) * 100)
    : 0;
  const monthly36 = Math.ceil(totals.turkeyMax / 36);
  const hasResults = analysed && items && items.length > 0;
  const noMatch = analysed && items && items.length === 0;

  return (
    <div className="space-y-6">
      {/* ── Input area ────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#1e40af] to-blue-600 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤖</span>
            <div>
              <h2 className="font-bold text-white text-lg">AI Price Estimator</h2>
              <p className="text-blue-200 text-sm">Describe your dental needs in plain English — get an instant estimate</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-5">
          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setAnalysed(false); }}
            onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleEstimate(); }}
            rows={3}
            placeholder="e.g. I want 10 porcelain veneers on my top teeth and 2 implants for missing back teeth…"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />

          <div className="mt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-xs text-gray-400">Press <kbd className="bg-gray-100 border border-gray-300 rounded px-1 py-0.5 font-mono text-xs">⌘ Enter</kbd> or click the button to estimate</p>
            <div className="flex gap-2">
              {analysed && (
                <button
                  onClick={handleReset}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              )}
              <button
                onClick={handleEstimate}
                disabled={!input.trim()}
                className="bg-[#1e40af] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Estimate My Cost →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Example prompts ────────────────────────────────────────────────── */}
      {!analysed && (
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Try an example</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => handleExample(ex)}
                className="text-xs bg-blue-50 text-[#1e40af] border border-blue-200 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors text-left"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── No match ─────────────────────────────────────────────────────── */}
      {noMatch && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-2xl mb-2">🤔</p>
          <p className="font-semibold text-gray-800 mb-1">We couldn&apos;t recognise specific treatments</p>
          <p className="text-sm text-gray-600 mb-4">
            Try mentioning treatments like <em>veneers</em>, <em>implants</em>, <em>crowns</em>, <em>whitening</em>, <em>All-on-4</em>, or <em>Hollywood smile</em>.
          </p>
          <button
            onClick={handleReset}
            className="text-[#1e40af] font-semibold text-sm hover:underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* ── Results ──────────────────────────────────────────────────────── */}
      {hasResults && (
        <div className="space-y-4">
          {/* Detected treatments */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <h3 className="font-bold text-gray-800 text-sm">Treatments Detected</h3>
              <span className="ml-auto text-xs text-gray-400">{items.length} treatment{items.length !== 1 ? 's' : ''} identified</span>
            </div>
            <div className="divide-y divide-gray-100">
              {items.map((item, i) => {
                const t = TREATMENTS.find(t => t.id === item.id)!;
                const isPackage = t.unit === 'package' || t.unit === 'session';
                const qty = isPackage ? 1 : item.qty;
                const lineMin = t.priceMin * qty;
                const lineMax = t.priceMax * qty;
                return (
                  <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{t.label}</p>
                      {!isPackage && (
                        <p className="text-xs text-gray-500">
                          {qty} × £{t.priceMin}–£{t.priceMax} per {t.unit}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#1e40af] text-sm">
                        £{lineMin.toLocaleString()}
                        {lineMin !== lineMax && `–£${lineMax.toLocaleString()}`}
                      </p>
                      <p className="text-xs text-gray-400">Turkey estimate</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price summary */}
          <div className="bg-[#1e40af] rounded-2xl p-6 text-white">
            <h3 className="font-extrabold text-lg mb-5">Your Estimated Cost Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">Turkey Total</p>
                <p className="text-2xl font-extrabold">
                  £{totals.turkeyMin.toLocaleString()}
                  {totals.turkeyMin !== totals.turkeyMax && `–£${totals.turkeyMax.toLocaleString()}`}
                </p>
                <p className="text-xs text-blue-200 mt-1">All-inclusive estimate</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">UK Equivalent</p>
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

            {/* Monthly option */}
            {totals.turkeyMax > 0 && (
              <div className="bg-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-blue-100">Or spread the cost from just</p>
                  <p className="text-2xl font-extrabold">£{monthly36}/month</p>
                  <p className="text-xs text-blue-200">over 36 months — no hidden fees</p>
                </div>
                <Link href="/monthly-payment" className="bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap">
                  View Payment Plans →
                </Link>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-consultation"
                className="flex-1 bg-white text-[#1e40af] text-center px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                📋 Get My Exact Free Quote
              </Link>
              <a
                href="https://wa.me/905353998999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp for Exact Quote
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center">
            ⚠️ Estimates are based on typical 2026 clinic prices and are for guidance only. Actual costs depend on your dental assessment.{' '}
            <Link href="/book-consultation" className="text-[#1e40af] underline">Get a free personalised quote</Link> for exact pricing.
          </p>
        </div>
      )}
    </div>
  );
}
