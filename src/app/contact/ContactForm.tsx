'use client';

import LeadForm from '@/components/LeadForm';

export default function ContactForm() {
  return <LeadForm successPath="/contact" submitLabel="Send Message" />;
}
