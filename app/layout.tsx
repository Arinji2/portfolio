import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const dogicalPixelFont = localFont({
	src: [
		{
			path: "./../fonts/dogicapixel.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./../fonts/dogicapixelbold.ttf",
			weight: "800",
			style: "normal",
		},
	],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Arinji | UI/UX Designer and Developer",
	metadataBase: new URL(process.env.METADATA_BASE_URL!),
	keywords: [
		"Arinji",
		"Arinjay Dhar",
		"Arinjay",
		"UI/UX",
		"Indian",
		"Developer",
	],
	description:
		"A Developer and UI/UX Designer, who loves to build things for the web. I like to make unnecesarily complicated things, purely for the fun of it :)",
	openGraph: {
		title: "Arinji",
		description:
			"A Developer and UI/UX Designer, who loves to build things for the web. I like to make unnecesarily complicated things, purely for the fun of it :)",
		images: [{ url: "/logo.png", alt: "Arinji Logo Picture" }],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-brand-background-primary">
			<head>
				<Script
					src="https://analytics.arinji.com/script.js"
					data-website-id={process.env.ANALYTICS_ID}
					strategy="afterInteractive"
				/>
			</head>
			<body className={`${dogicalPixelFont.className} tracking-normal`}>
				{children}
			</body>
		</html>
	);
}
