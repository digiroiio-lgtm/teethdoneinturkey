'use client';

import Link from 'next/link';
import { useState } from 'react';

const treatments = [
  { href: '/treatments/veneers-turkey', label: 'Veneers Turkey' },
  { href: '/treatments/dental-implants-turkey', label: 'Dental Implants' },
  { href: '/treatments/all-on-4-turkey', label: 'All-on-4' },
  { href: '/treatments/all-on-6-turkey', label: 'All-on-6' },
  { href: '/treatments/full-smile-makeover-turkey', label: 'Smile Makeover' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#1e40af] font-bold text-xl leading-tight">
              Teeth Done<br className="hidden sm:block" /> in Turkey
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Treatments dropdown */}
            <div className="relative" onMouseEnter={() => setTreatmentsOpen(true)} onMouseLeave={() => setTreatmentsOpen(false)}>
              <button className="text-gray-700 hover:text-[#1e40af] font-medium flex items-center gap-1">
                Treatments
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {treatmentsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 z-50">
                  {treatments.map(t => (
                    <Link key={t.href} href={t.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e40af]">
                      {t.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/prices/teeth-done-in-turkey-cost" className="text-gray-700 hover:text-[#1e40af] font-medium">Prices</Link>
            <Link href="/ai-price-estimate" className="text-gray-700 hover:text-[#1e40af] font-medium flex items-center gap-1">
              <span>🤖</span> AI Estimate
            </Link>
            <Link href="/monthly-payment" className="text-gray-700 hover:text-[#1e40af] font-medium">Monthly Payment</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-[#1e40af] font-medium">Reviews</Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#1e40af] font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1e40af] font-medium">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Treatments</p>
          {treatments.map(t => (
            <Link key={t.href} href={t.href} className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>
              {t.label}
            </Link>
          ))}
          <hr />
          <Link href="/prices/teeth-done-in-turkey-cost" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>Prices</Link>
          <Link href="/ai-price-estimate" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>🤖 AI Price Estimate</Link>
          <Link href="/monthly-payment" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>Monthly Payment</Link>
          <Link href="/reviews" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>Reviews</Link>
          <Link href="/blog" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#1e40af]" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/book-consultation" className="block bg-[#1e40af] text-white text-center py-3 rounded-lg font-semibold mt-2" onClick={() => setMobileOpen(false)}>
            Book Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
