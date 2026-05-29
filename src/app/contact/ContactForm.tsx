'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours. You can also WhatsApp us for a faster response.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="Your full name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="+44 7..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest</label>
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]">
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" placeholder="Tell us about your dental goals or any questions you have..."></textarea>
      </div>
      <button type="submit" className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
        Send Message
      </button>
    </form>
  );
}
