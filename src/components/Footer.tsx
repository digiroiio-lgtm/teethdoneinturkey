import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-slate-950 text-gray-300">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e40af] to-blue-600 text-white flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
                🦷
              </span>
              <span className="text-white font-bold text-xl">Teeth Done in Turkey</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">Premium dental treatments in Turkey for UK patients. Save up to 70% vs UK prices.</p>
            <a href="https://wa.me/905353998999" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 hover:-translate-y-0.5 transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Treatments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/treatments/veneers-turkey" className="hover:text-white hover:pl-1 transition-all">Veneers Turkey</Link></li>
              <li><Link href="/treatments/dental-implants-turkey" className="hover:text-white hover:pl-1 transition-all">Dental Implants</Link></li>
              <li><Link href="/treatments/all-on-4-turkey" className="hover:text-white hover:pl-1 transition-all">All-on-4</Link></li>
              <li><Link href="/treatments/all-on-6-turkey" className="hover:text-white hover:pl-1 transition-all">All-on-6</Link></li>
              <li><Link href="/treatments/full-smile-makeover-turkey" className="hover:text-white hover:pl-1 transition-all">Smile Makeover</Link></li>
            </ul>
          </div>

          {/* Prices & Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Prices & Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/teeth-done-in-turkey-guide" className="hover:text-white hover:pl-1 transition-all">Complete UK Patient Guide</Link></li>
              <li><Link href="/prices/teeth-done-in-turkey-cost" className="hover:text-white hover:pl-1 transition-all">Turkey Dental Costs</Link></li>
              <li><Link href="/prices/veneers-turkey-cost" className="hover:text-white hover:pl-1 transition-all">Veneers Cost</Link></li>
              <li><Link href="/prices/dental-implants-turkey-cost" className="hover:text-white hover:pl-1 transition-all">Implants Cost</Link></li>
              <li><Link href="/price-calculator" className="hover:text-white hover:pl-1 transition-all">Price Calculator</Link></li>
              <li><Link href="/monthly-payment" className="hover:text-white hover:pl-1 transition-all">Monthly Payment</Link></li>
              <li><Link href="/finance-options-uk" className="hover:text-white hover:pl-1 transition-all">Finance Options</Link></li>
              <li><Link href="/turkey-teeth-clinic" className="hover:text-white hover:pl-1 transition-all">Choosing a Clinic</Link></li>
              <li><Link href="/free-treatment-plan" className="hover:text-white hover:pl-1 transition-all">Free Treatment Plan</Link></li>
              <li><Link href="/travel-to-turkey/dental-holiday-turkey" className="hover:text-white hover:pl-1 transition-all">Dental Holiday Turkey</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-white hover:pl-1 transition-all">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white hover:pl-1 transition-all">Patient Reviews</Link></li>
              <li><Link href="/before-after" className="hover:text-white hover:pl-1 transition-all">Before & After</Link></li>
              <li><Link href="/blog" className="hover:text-white hover:pl-1 transition-all">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:pl-1 transition-all">Contact</Link></li>
              <li><Link href="/book-consultation" className="hover:text-white hover:pl-1 transition-all">Book Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Teeth Done in Turkey. All rights reserved.</p>
          <p>For UK patients seeking affordable dental care in Turkey.</p>
        </div>
      </div>
    </footer>
  );
}
