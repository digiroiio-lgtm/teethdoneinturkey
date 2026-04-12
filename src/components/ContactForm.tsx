"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("maqawywr");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center text-green-800 dark:bg-green-900/30 dark:text-green-300">
        <p className="text-xl font-semibold">Thank you for your message!</p>
        <p className="mt-2 text-sm">
          We&apos;ll be in touch shortly to discuss your smile transformation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
        />
        <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
      </div>

      {/* Treatment Interest */}
      <div className="flex flex-col gap-1">
        <label htmlFor="treatment" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Treatment of Interest
        </label>
        <select
          id="treatment"
          name="treatment"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
        >
          <option value="">Select a treatment…</option>
          <option value="dental-implants">Dental Implants</option>
          <option value="veneers">Veneers</option>
          <option value="crowns">Crowns</option>
          <option value="teeth-whitening">Teeth Whitening</option>
          <option value="full-smile-makeover">Full Smile Makeover</option>
          <option value="other">Other / Not Sure</option>
        </select>
        <ValidationError field="treatment" prefix="Treatment" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-800"
          placeholder="Tell us about your dental goals or any questions you have…"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
      </div>

      {/* Form-level errors */}
      <ValidationError errors={state.errors} className="text-sm text-red-600 dark:text-red-400" />

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 rounded-full bg-zinc-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
