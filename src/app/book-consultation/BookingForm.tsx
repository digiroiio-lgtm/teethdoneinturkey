'use client';

import LeadForm from '@/components/LeadForm';

export default function BookingForm() {
  return <LeadForm successPath="/book-consultation" submitLabel="Request Free Consultation →" />;
}
