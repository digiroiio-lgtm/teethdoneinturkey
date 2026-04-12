import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teeth Done in Turkey",
  description:
    "Affordable, high-quality dental treatments in Turkey — veneers, implants, crowns and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
