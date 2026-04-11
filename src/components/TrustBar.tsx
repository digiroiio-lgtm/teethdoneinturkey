export default function TrustBar() {
  const items = [
    { icon: '⭐⭐⭐⭐⭐', label: '500+ UK Patient Reviews' },
    { icon: '✓', label: 'JCI-Accredited Clinics' },
    { icon: '⭐', label: '5-Star Google Rating' },
    { icon: '📷', label: 'Real Before & After Photos' },
    { icon: '💳', label: 'Monthly Payment Options' },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-700">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 font-medium">
              <span className="text-[#1e40af]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
