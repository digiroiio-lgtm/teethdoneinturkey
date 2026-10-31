import Link from "next/link";

// Five before/after close-ups from the partner clinic's patient gallery.
// Each file is a 392 x 500 WebP (before on top, after below), already optimised,
// so plain <img> is used with explicit width/height to avoid layout shift.
const SIZE = { width: 392, height: 500 };

const photos = [1, 2, 3, 4, 5].map((n) => ({
  src: `/smile-gallery/akdeniz-dental-smile-before-after-${n}.webp`,
  alt: `Before and after close-up of a patient's smile at Akdeniz Dental Clinic, Antalya: before on the top half, after on the bottom half (example ${n} of 5)`,
}));

export default function SmileGallery() {
  return (
    <section className="py-16 bg-white" aria-labelledby="smile-gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 id="smile-gallery-heading" className="text-3xl font-extrabold text-gray-900 mb-3">Smile Gallery</h2>
          <p className="text-gray-600">
            Before-and-after smile close-ups from our partner clinic, Akdeniz Dental Clinic in Antalya. On smaller screens, swipe sideways to see all five.
          </p>
        </div>

        <ul
          role="list"
          tabIndex={0}
          aria-label="Smile gallery, scroll sideways for more photos"
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-0 pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e40af] rounded-2xl"
        >
          {photos.map((p) => (
            <li key={p.src} className="shrink-0 basis-[68%] sm:basis-[38%] md:basis-[30%] lg:basis-auto snap-start">
              <figure className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  width={SIZE.width}
                  height={SIZE.height}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto aspect-[392/500] object-cover"
                />
                <span aria-hidden="true" className="absolute left-2 top-2 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">Before</span>
                <span aria-hidden="true" className="absolute left-2 top-[calc(50%+8px)] rounded-full bg-[#1e40af]/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">After</span>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          Photos are from the patient gallery of Akdeniz Dental Clinic, Antalya. Results vary with each person&apos;s starting condition and treatment plan, so a written plan from your own examination matters more than any gallery.{" "}
          <Link href="/turkey-teeth-before-after" className="text-[#1e40af] font-semibold hover:underline">See more before-and-after cases</Link>.
        </p>
      </div>
    </section>
  );
}
