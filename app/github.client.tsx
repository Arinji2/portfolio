"use client";

import Link from "next/link";
import { trackEvent } from "@/analytics/events";

export function GithubButton() {
	return (
		<Link
			href="https://github.com/Arinji2"
			onClick={() => {
				trackEvent("github_link_clicked", {
					where: "section",
				});
			}}
			target="_blank"
			className="flex h-fit w-fit flex-col items-center justify-center gap-1"
		>
			<p className="text-center font-medium text-[20px] text-white hover:text-brand-primary">
				Show me More!
			</p>
			<div className="h-[2px] w-full bg-brand-primary"></div>
		</Link>
	);
}
