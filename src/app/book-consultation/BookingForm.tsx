'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation Request Received!</h3>
        <p className="text-gray-600">We&apos;ll contact you within 24 hours to arrange your free consultation. Check your WhatsApp and email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
        <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="+44 7..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest *</label>
        <select required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]">
          <option value="">Select treatment...</option>
          <option>Veneers</option>
          <option>Dental Implants</option>
          <option>All-on-4</option>
          <option>All-on-6</option>
          <option>Full Smile Makeover</option>
          <option>Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Date</label>
        <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Your Goals</label>
        <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="What would you like to achieve? Any concerns or questions?"></textarea>
      </div>
      <button type="submit" className="w-full bg-[#1e40af] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
        Request Free Consultation →
      </button>
      <p className="text-xs text-gray-400 text-center">100% free, no obligation. We will never share your data.</p>
    </form>
  );
}
