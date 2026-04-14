"use client";

import Link from "next/link";
import { useState } from "react";

const treatments = [
  { label: "Dental Veneers", href: "/treatments/dental-veneers" },
  { label: "Dental Implants", href: "/treatments/dental-implants" },
  { label: "Hollywood Smile", href: "/treatments/hollywood-smile" },
  { label: "Dental Crowns", href: "/treatments/dental-crowns" },
  { label: "All-on-4 Implants", href: "/treatments/all-on-4-implants" },
  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
  { label: "Smile Makeover", href: "/treatments/smile-makeover" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1a6b3c] text-white text-sm py-2 px-4 text-center">
        <span>☎ Free Consultation: +44 20 1234 5678 | </span>
        <a
          href="https://wa.me/447911123456?text=Hi%2C%20I%27d%20like%20a%20free%20dental%20quote"
          className="underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <span className="font-bold text-[#1a6b3c] text-lg leading-tight">
            Teeth Done<br className="hidden sm:block" /> in Turkey
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Treatments dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#1a6b3c] font-medium transition-colors"
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              onBlur={() => setTimeout(() => setTreatmentsOpen(false), 150)}
            >
              Treatments
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {treatmentsOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded-lg border border-gray-100 py-1 z-50">
                {treatments.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#1a6b3c] hover:text-white transition-colors"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    {t.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/treatments"
                    className="block px-4 py-2 text-sm font-medium text-[#1a6b3c] hover:bg-[#1a6b3c] hover:text-white transition-colors"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    All Treatments →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/prices" className="text-[#1a1a1a] hover:text-[#1a6b3c] font-medium transition-colors">
            Prices
          </Link>
          <Link href="/blog" className="text-[#1a1a1a] hover:text-[#1a6b3c] font-medium transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-[#1a1a1a] hover:text-[#1a6b3c] font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#1a1a1a] hover:text-[#1a6b3c] font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-[#f5a623] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#e09415] transition-colors text-sm"
          >
            Get Free Quote
          </Link>
          <button
            className="md:hidden p-2 text-[#1a1a1a]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <div className="space-y-1">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold px-3 py-2">Treatments</p>
              {treatments.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block px-3 py-2 text-[#1a1a1a] hover:text-[#1a6b3c] hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-2 space-y-1">
              {[
                { label: "Prices", href: "/prices" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-[#1a1a1a] hover:text-[#1a6b3c] hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-[#f5a623] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#e09415] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
