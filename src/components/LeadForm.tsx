'use client';

import { useState, useEffect } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORM_ENDPOINT = 'https://submit-form.com/9xGP4VkVm';
const SUCCESS_PARAM = 'submitted';

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

interface LeadFormProps {
  /** Absolute path (no trailing slash) to redirect back to after submission, e.g. "/book-consultation". */
  successPath?: string;
  /** Label for the submit button. */
  submitLabel?: string;
}

export default function LeadForm({ successPath = '/contact', submitLabel = 'Send Message' }: LeadFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get(SUCCESS_PARAM) === '1') {
      setIsSuccess(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (honeypot.trim()) { e.preventDefault(); return; }
    if (!name.trim()) { e.preventDefault(); setValidationError('Please enter your name.'); return; }
    if (!phone.trim()) { e.preventDefault(); setValidationError('Please enter your phone number.'); return; }
    if (!whatsapp.trim()) { e.preventDefault(); setValidationError('Please enter your WhatsApp number.'); return; }
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) { e.preventDefault(); setValidationError('Please enter a valid email address.'); return; }
    if (!country.trim()) { e.preventDefault(); setValidationError('Please select your country.'); return; }
    setValidationError('');
    setIsSubmitting(true);
    // Validation passed — native POST proceeds
  };

  if (isSuccess) {
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

  const redirectUrl = `https://www.teethdoneinturkey.co.uk${successPath}?${SUCCESS_PARAM}=1`;

  return (
    <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_redirect" value={redirectUrl} />
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className={inputClass}
              placeholder="Your full name"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className={inputClass}
              placeholder="+44 7700 900000"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your WhatsApp Number *</label>
            <input
              type="tel"
              name="whatsapp"
              required
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              className={inputClass}
              placeholder="+44 7700 900000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={inputClass}
              placeholder="your@email.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Country *</label>
          <select
            name="country"
            required
            value={country}
            onChange={e => setCountry(e.target.value)}
            className={inputClass}
          >
            <option value="">Select your country…</option>
            {COUNTRIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={inputClass}
            placeholder="Tell us about your dental goals or any questions you have…"
          />
        </div>

        {/* Honeypot — hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="lf-website">Website</label>
          <input
            type="text"
            id="lf-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
          />
        </div>

        {validationError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
            {validationError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending…' : submitLabel}
        </button>
      </div>
    </form>
  );
}
