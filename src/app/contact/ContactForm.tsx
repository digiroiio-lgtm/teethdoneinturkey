'use client';

import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const COUNTRIES = [
  'United Kingdom',
  'Ireland',
  'United States',
  'Canada',
  'Australia',
  'New Zealand',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Angola',
  'Argentina',
  'Armenia',
  'Austria',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Belarus',
  'Belgium',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Brazil',
  'Bulgaria',
  'Cambodia',
  'Cameroon',
  'Chile',
  'China',
  'Colombia',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Ecuador',
  'Egypt',
  'Ethiopia',
  'Finland',
  'France',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kosovo',
  'Kuwait',
  'Latvia',
  'Lebanon',
  'Libya',
  'Lithuania',
  'Luxembourg',
  'Malaysia',
  'Malta',
  'Mexico',
  'Moldova',
  'Morocco',
  'Mozambique',
  'Netherlands',
  'Nigeria',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tanzania',
  'Thailand',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zimbabwe',
  'Other',
];

const ZAPIER_ENDPOINT = 'https://submit-form.com/9xGP4VkVm';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    country: '',
    message: '',
    website: '', // honeypot
  });

  const handleChange = (field: keyof typeof formValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): string | null => {
    if (!formValues.name.trim()) return 'Please enter your name.';
    if (!formValues.phone.trim()) return 'Please enter your phone number.';
    if (!formValues.whatsapp.trim()) return 'Please enter your WhatsApp number.';
    if (!formValues.email.trim() || !EMAIL_REGEX.test(formValues.email.trim()))
      return 'Please enter a valid email address.';
    if (!formValues.country.trim()) return 'Please select your country.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Honeypot: silently succeed for bots
    if (formValues.website.trim().length > 0) {
      setStatus('success');
      return;
    }

    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(ZAPIER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formValues.name.trim(),
          phone: formValues.phone.trim(),
          whatsapp: formValues.whatsapp.trim(),
          email: formValues.email.trim(),
          country: formValues.country.trim(),
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFormValues({ name: '', phone: '', whatsapp: '', email: '', country: '', message: '', website: '' });
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
        <p className="text-gray-600 text-sm">
          Our team will get back to you within 24 hours. You can also WhatsApp us for a faster response.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Row 1: Name | Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            required
            value={formValues.name}
            onChange={handleChange('name')}
            className={inputClass}
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone *</label>
          <input
            type="tel"
            required
            value={formValues.phone}
            onChange={handleChange('phone')}
            className={inputClass}
            placeholder="+44 7700 900000"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Row 2: WhatsApp | Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your WhatsApp Number *</label>
          <input
            type="tel"
            required
            value={formValues.whatsapp}
            onChange={handleChange('whatsapp')}
            className={inputClass}
            placeholder="+44 7700 900000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
          <input
            type="email"
            required
            value={formValues.email}
            onChange={handleChange('email')}
            className={inputClass}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
      </div>

      {/* Row 3: Country — full width */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Country *</label>
        <select
          required
          value={formValues.country}
          onChange={handleChange('country')}
          className={inputClass}
        >
          <option value="">Select your country…</option>
          {COUNTRIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Row 4: Message — full width, optional */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows={4}
          value={formValues.message}
          onChange={handleChange('message')}
          className={inputClass}
          placeholder="Tell us about your dental goals or any questions you have…"
        />
      </div>

      {/* Honeypot — hidden from real users */}
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
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
