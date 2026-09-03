import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden text-white py-24 px-4">
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-grid-white opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-50 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
          🇬🇧 UK Patients Welcome — English-Speaking Support
        </div>
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Teeth Done in{' '}
          <span className="bg-gradient-to-r from-teal-300 via-sky-200 to-white bg-clip-text text-transparent">
            Turkey
          </span>
        </h1>
        <p className="animate-fade-in-up text-2xl sm:text-3xl font-bold text-blue-100 mb-3">
          Premium Dental Treatments from £1,850
        </p>
        <p className="animate-fade-in-up text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
          Save up to 70% vs UK prices &nbsp;|&nbsp; UK patient support &nbsp;•&nbsp; Modern JCI-accredited clinics &nbsp;•&nbsp; 5-star reviews
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/book-consultation"
            className="bg-white text-[#1e40af] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-full sm:w-auto text-center"
          >
            Free Consultation →
          </Link>
          <Link
            href="/prices/teeth-done-in-turkey-cost"
            className="border-2 border-white/70 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto text-center"
          >
            Get Price Quote
          </Link>
        </div>

        <a
          href="https://wa.me/905353998999"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us Now
        </a>

        <div className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-3 text-sm text-blue-100">
          {['Free consultation', 'All-inclusive packages', 'UK aftercare support', '10-year guarantee'].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5">
              <svg className="w-3.5 h-3.5 text-teal-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
