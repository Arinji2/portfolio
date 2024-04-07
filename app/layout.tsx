import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Arinji",
  metadataBase: new URL(process.env.METADATA_BASE_URL!),
  description:
    "A Web Developer and UI/UX Designer  based in India, who loves to build things for the web.",
  openGraph: {
    title: `Arinji`,
    description:
      "A Web Developer and UI/UX Designer  based in India, who loves to build things for the web.",
    images: [
      {
        url: "/logo.png",
        alt: `Arinji Logo Picture`,
      },
    ],
  },
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
