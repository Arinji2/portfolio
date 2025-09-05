"use client";

import Link from "next/link";
import { trackEvent } from "@/analytics/events";

export function TechBlock({
	name,
	description,
	post,
	time,
	link,
}: {
	name: string;
	description: string;
	post: string;
	time: string;
	link: string;
}) {
	return (
		<Link
			href={link}
			onClick={() => {
				trackEvent("experience_link_clicked", {
					name: name,
				});
			}}
			target="_blank"
			className="group relative flex h-fit w-[300px] shrink-0 scale-[.80] flex-col items-center justify-center gap-8 rounded-md bg-brand-background-overlay bg-opacity-60 py-8 text-center transition-all duration-300 ease-in-out will-change-transform hover:scale-90 hover:cursor-pointer md:w-[400px]"
		>
			<h3 className="font-bold text-brand-primary text-xl md:text-2xl xl:text-3xl">
				{name}
			</h3>
			<div className="flex h-fit w-[90%] flex-col items-center justify-center gap-7 text-center">
				<p className="text-base text-white/60 transition-color duration-200 ease-in-out group-hover:text-white md:text-lg xl:text-xl">
					{description}
				</p>
				<p className="font-bold text-base text-white/80 md:text-lg xl:text-xl">
					{post}
				</p>
				<p className="text-base text-brand-primary md:text-lg xl:text-xl">
					{time}
				</p>
			</div>
		</Link>
	);
}
