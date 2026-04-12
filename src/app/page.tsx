import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Teeth Done in Turkey
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Affordable, high-quality dental treatments in Turkey. Veneers,
          implants, crowns &amp; more — with full aftercare support.
        </p>
        <Link
          href="/contact"
          className="mt-4 rounded-full bg-zinc-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Get a Free Quote
        </Link>
      </div>
    </main>
  );
}
