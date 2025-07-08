"use client";

import { CheckCircle, ChevronDown, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/analytics/events";
import type { InfoType } from "./main";

export default function ProjectInfo({
	info,
	name,
}: {
	info: InfoType;
	name: string;
}) {
	const { stack, design, image, about, stats } = info;
	const [expanded, setExpanded] = useState(false);
	return (
		<div
			className={`${
				expanded ? "h-full " : "h-[110px] overflow-hidden md:h-[90px] "
			}w-[90vw] group relative z-30 flex shrink-0 flex-col items-start justify-start gap-6 rounded-sm bg-brand-background-primary p-6 shadow-black shadow-lg transition-all duration-500 ease-in-out md:aspect-video md:w-[500px]`}
		>
			<div className="flex h-fit w-full shrink-0 flex-row items-center justify-start gap-3">
				<p className="font-bold text-lg text-white md:text-xl xl:text-xl">
					Info about the Project
				</p>
				<button
					aria-label={`${expanded ? "Collapse" : "Expand"} the info`}
					className="h-fit w-fit"
					onClick={() => {
						setExpanded(!expanded);
						if (expanded) {
							trackEvent("project_info_collapsed", {
								projectName: name,
							});
						} else {
							trackEvent("project_info_expanded", {
								projectName: name,
							});
						}
					}}
				>
					<ChevronDown
						strokeWidth={3}
						className={`${
							expanded ? "rotate-180 " : ""
						} h-[30px] w-[30px] text-brand-primary transition-all duration-500 ease-in-out`}
					/>
				</button>
			</div>
			<div className="flex h-full w-full flex-col items-center justify-start gap-8 overflow-y-auto pr-2">
				<div className="flex h-fit w-full flex-col items-start justify-start gap-3">
					<p className="font-bold text-white md:text-lg">A. Tech Stack</p>
					{stack.map((stack, index) => (
						<div
							key={index}
							className="flex h-fit w-full flex-col items-start justify-start gap-2 pl-3"
						>
							<p className="font-bold text-brand-primary text-xs xl:text-sm">
								{`${index + 1}. ${stack.key}`}
							</p>
							<p className="text-white/50 text-xs xl:text-sm">
								<span className="font-bold text-white">{`${stack.name}:`}</span>
								{` ${stack.used}`}
							</p>
						</div>
					))}
				</div>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-3">
					<p className="font-bold text-white md:text-lg">B. Design</p>

					<div className="flex h-fit w-full flex-col items-start justify-start gap-2 pl-3">
						<p className="font-bold text-brand-primary text-xs xl:text-sm">
							{design.type}
						</p>
						<p className="text-white/70 text-xs xl:text-sm">{design.details}</p>
						{image && (
							<div className="relative aspect-video w-full rounded-sm border-[5px] border-black shadow-black shadow-lg">
								<Image
									src={image}
									fill
									className="h-full w-full object-fill"
									alt="vibeify"
									sizes="100vw"
									quality={50}
								/>
							</div>
						)}
					</div>
				</div>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-3">
					<p className="font-bold text-lg text-white">C. About</p>

					<div className="flex h-fit w-full flex-col items-start justify-start gap-2 pl-3">
						<p className="text-white/70 text-xs xl:text-sm">{about}</p>
					</div>
				</div>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-3">
					<p className="font-bold text-lg text-white">D. Stats</p>

					<div className="flex h-fit w-full flex-col items-start justify-start gap-2 pl-3">
						{stats?.map((stat, index) => (
							<div
								key={index}
								className="flex h-fit w-fit flex-row items-center justify-start"
							>
								<p className="font-medium text-brand-primary text-xs xl:text-sm">
									{stat.name}
								</p>
								<p className="text-white/70 text-xs xl:text-sm">
									:{" "}
									{typeof stat.value === "boolean" ? (
										stat.value ? (
											<CheckCircle className="inline size-3 text-green-500" />
										) : (
											<XCircle className="inline size-3 text-red-500" />
										)
									) : (
										stat.value
									)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
// />
