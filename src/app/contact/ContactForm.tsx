'use client';

import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    treatmentInterest: '',
    message: '',
    website: '',
  });

  const handleChange = (field: keyof typeof formValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): string | null => {
    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();

    if (!name) return 'Please enter your name.';
    if (!email || !EMAIL_REGEX.test(email)) return 'Please enter a valid email address.';
    if (!message) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: formValues.phone.trim(),
          treatmentInterest: formValues.treatmentInterest.trim(),
          message: formValues.message.trim(),
          website: formValues.website,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFormValues({ name: '', email: '', phone: '', treatmentInterest: '', message: '', website: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us via WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-gray-900 mb-2">Thank you. Your message has been sent successfully.</h3>
        <p className="text-gray-600 text-sm">Our team will get back to you within 24 hours. You can also WhatsApp us for a faster response.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input
          type="text"
          required
          value={formValues.name}
          onChange={handleChange('name')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          required
          value={formValues.email}
          onChange={handleChange('email')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          value={formValues.phone}
          onChange={handleChange('phone')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          placeholder="+44 7..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest</label>
        <select
          value={formValues.treatmentInterest}
          onChange={handleChange('treatmentInterest')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
        >
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
        <textarea
          required
          rows={4}
          value={formValues.message}
          onChange={handleChange('message')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
          placeholder="Tell us about your dental goals or any questions you have..."
        ></textarea>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formValues.website}
          onChange={handleChange('website')}
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
