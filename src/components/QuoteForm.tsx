"use client";

import { useState } from "react";

const treatmentOptions = [
  "Dental Veneers",
  "Dental Implants",
  "Hollywood Smile",
  "Dental Crowns",
  "All-on-4 Implants",
  "Teeth Whitening",
  "Smile Makeover",
  "Other / Not Sure",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#1a6b3c]/10 border border-[#1a6b3c]/20 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#1a6b3c] mb-2">Thank You!</h3>
        <p className="text-gray-700">
          We&apos;ve received your request and will get back to you within 24 hours with your free personalised quote.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          In the meantime, feel free to{" "}
          <a
            href="https://wa.me/447911123456"
            className="text-[#1a6b3c] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>{" "}
          for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7XXX XXXXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="treatment" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Treatment Interested In *
          </label>
          <select
            id="treatment"
            name="treatment"
            required
            value={formData.treatment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition bg-white"
          >
            <option value="">Select a treatment</option>
            {treatmentOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          Message / Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dental concerns or ask any questions..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#e09415] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {loading ? "Sending..." : "Request Free Quote →"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        🔒 Your details are safe. We never share your information with third parties.
      </p>
    </form>
  );
}
