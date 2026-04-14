import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🦷</span>
              <span className="font-bold text-white text-lg">Teeth Done in Turkey</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Affordable dental excellence in Turkey. World-class treatment at a fraction of UK prices.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/447911123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#22c55e] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:+442012345678"
                className="bg-[#1a6b3c] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#155c32] transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Treatments</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Dental Veneers", href: "/treatments/dental-veneers" },
                { label: "Dental Implants", href: "/treatments/dental-implants" },
                { label: "Hollywood Smile", href: "/treatments/hollywood-smile" },
                { label: "Dental Crowns", href: "/treatments/dental-crowns" },
                { label: "All-on-4 Implants", href: "/treatments/all-on-4-implants" },
                { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
                { label: "Smile Makeover", href: "/treatments/smile-makeover" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Treatment Prices", href: "/prices" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Monthly Payment", href: "/monthly-payment" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Why Trust Us</h3>
            <div className="space-y-3">
              {[
                { icon: "🏆", text: "JCI-Accredited Clinics" },
                { icon: "😊", text: "10,000+ Happy Patients" },
                { icon: "⭐", text: "5-Star Rated on Google" },
                { icon: "💰", text: "Save Up to 70%" },
                { icon: "✈️", text: "All-Inclusive Packages" },
                { icon: "🔒", text: "Lifetime Guarantee Available" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Teeth Done in Turkey. All rights reserved.</p>
          <p className="text-center">
            Results may vary. Consult a dentist for personalised advice. This website is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
