import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#1a6b3c] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Get a <strong className="text-[#f5a623]">FREE</strong> personalised quote today. No obligation, just honest advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors shadow-lg"
          >
            Get Free Quote
          </Link>
          <a
            href="https://wa.me/447911123456?text=Hi%2C%20I%27d%20like%20a%20free%20dental%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1a6b3c] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
