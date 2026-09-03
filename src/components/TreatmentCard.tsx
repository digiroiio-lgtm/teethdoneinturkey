import Link from 'next/link';

interface TreatmentCardProps {
  title: string;
  description: string;
  price: string;
  ukPrice: string;
  href: string;
  icon: string;
}

export default function TreatmentCard({ title, description, price, ukPrice, href, icon }: TreatmentCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1.5 p-6 flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-extrabold text-[#1e40af]">{price}</span>
          <span className="text-xs text-gray-400">per treatment</span>
        </div>
        <p className="text-xs text-gray-500">
          <span className="line-through text-red-400">{ukPrice} in UK</span>
          &nbsp;— save up to 70%
        </p>
      </div>
      <Link
        href={href}
        className="flex items-center justify-center gap-1.5 bg-[#1e40af] text-white text-center py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm group-hover:gap-2.5"
      >
        Learn More
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </div>
  );
}
