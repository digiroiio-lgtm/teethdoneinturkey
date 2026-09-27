import {
  TRUSTPILOT_URL,
  TRUSTPILOT_RATING,
  TRUSTPILOT_COUNT,
  TRUSTPILOT_SUBJECT,
} from '@/lib/trustpilot';

// Corrected 2026-09-27. Two of these badges were unsourced rating claims that
// the clinic's actual Trustpilot profile contradicts:
//   '500+ UK Patient Reviews'  → the real figure is 94 reviews
//   '5-Star Google Rating'     → no Google rating evidence exists for this site
// Both are replaced by one linked, attributed, checkable badge. The score is the
// partner clinic's, so the badge names the clinic rather than implying it is a
// rating of this website.
//
// STILL UNVERIFIED and deliberately left as-is pending evidence from the owner:
// 'JCI-Accredited Clinics'. JCI accreditation is a specific, publicly checkable
// status and should either be evidenced with the accredited entity's name or
// softened to the Turkish Ministry of Health registration the site cites
// elsewhere.
export default function TrustBar() {
  const items = [
    { icon: '✓', label: 'JCI-Accredited Clinics' },
    { icon: '📷', label: 'Real Before & After Photos' },
    { icon: '💳', label: 'Monthly Payment Options' },
    { icon: '🩺', label: 'Medically Reviewed by a Dentist' },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4 relative z-10 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-gray-700">
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium bg-gray-50 hover:bg-blue-50 transition-colors rounded-full px-3.5 py-1.5 border border-gray-100"
          >
            <span className="text-[#00b67a]">★</span>
            <span>
              {TRUSTPILOT_RATING}/5 on Trustpilot &mdash; {TRUSTPILOT_SUBJECT} ({TRUSTPILOT_COUNT} reviews)
            </span>
          </a>
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 font-medium bg-gray-50 hover:bg-blue-50 transition-colors rounded-full px-3.5 py-1.5 border border-gray-100"
            >
              <span className="text-[#1e40af]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
