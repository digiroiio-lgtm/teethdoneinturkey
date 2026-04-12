import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Teeth Done in Turkey",
  description:
    "Get in touch to find out how you can transform your smile with affordable, high-quality dental treatments in Turkey.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 py-20 dark:bg-black">
      <div className="w-full max-w-lg">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Get a Free Quote
        </h1>
        <p className="mb-10 text-base text-zinc-600 dark:text-zinc-400">
          Fill in the form below and one of our patient coordinators will get
          back to you within 24 hours.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
