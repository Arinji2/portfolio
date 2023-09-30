import "./globals.css";
import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Arinji",
  description:
    "A Web Developer and UI/UX Designer  based in India, who loves to build things for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-brand-background-primary">
      <body className={silkscreen.className}>{children}</body>
    </html>
  );
}
