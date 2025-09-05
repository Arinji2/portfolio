import { Code, MonitorSmartphone, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import ProjectInfo from "./info.client";
import type { InfoType } from "./main";

export function ProjectExpanded({
	name,
	description,
	image,
	link,
	github,
	expanded,
	top,
	info,
}: {
	name: string;
	description: string;
	image: string;
	link: string;
	github: string;
	expanded: boolean;
	setExpanded: (expanded: boolean) => void;

	scrollFunction: () => void;
	top?: boolean;
	info: InfoType;
}) {
	return (
		<section className="relative flex h-[100svh] w-full flex-col items-center justify-start">
			<div className="absolute top-0 left-0 h-[100svh] w-full">
				<Image
					src={`/projects/${image}`}
					fill
					className={`absolute object-cover ${top && "object-top"}`}
					alt={name}
					sizes="100vw"
					quality={50}
				/>
				<div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-r from-[#1E1E1E] to-[#1e1e1ed0]"></div>
			</div>

			<WidthWrapper transparent>
				<div className="small-scrollbar z-30 flex h-full w-[90%] snap-x snap-mandatory flex-row items-center justify-between gap-8 overflow-x-auto xl:overflow-x-hidden">
					<div className="flex h-full w-full shrink-0 snap-center flex-col items-center justify-center gap-8 xl:w-fit xl:max-w-[500px] xl:items-start">
						<div className="flex h-fit w-full flex-col items-center justify-center gap-3 xl:items-start">
							<h2 className="text-center font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-left xl:text-4xl">
								{name}
							</h2>
							<p className="pl-2 text-center text-lg text-white/80 md:text-xl xl:text-left xl:text-xl">
								{description}
							</p>
						</div>
						<div className="grid h-fit w-[70%] grid-cols-1 justify-start gap-3 gap-y-6 pt-5 md:w-fit md:grid-cols-2">
							<Link
								tabIndex={expanded ? 0 : -1}
								href={link}
								onClick={() => {
									trackEvent("project_link_clicked", {
										projectName: name,
										type: "expanded",
									});
								}}
								target="_blank"
								className="group flex h-fit w-full shrink-0 flex-row items-center justify-between gap-2 rounded-md bg-brand-background-primary px-3 py-3 md:w-[240px]"
							>
								<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
									View Site
								</p>
								<MonitorSmartphone className="h-[30px] w-[30px] font-bold text-brand-primary transition-all duration-500 ease-in-out group-hover:text-white" />
							</Link>
							<Link
								tabIndex={expanded ? 0 : -1}
								href={github}
								onClick={() => {
									trackEvent("project_github_clicked", {
										projectName: name,
										type: "expanded",
									});
								}}
								target="_blank"
								className="group flex h-fit w-full shrink-0 flex-row items-center justify-between gap-2 rounded-md bg-brand-background-secondary px-3 py-3 md:w-[240px]"
							>
								<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
									View Code
								</p>
								<Code className="h-[30px] w-[30px] font-bold text-brand-primary transition-all duration-500 ease-in-out group-hover:text-white" />
							</Link>
							<div className="col-span-1 flex h-full w-full flex-col items-center justify-center md:col-span-2">
								<Link
									tabIndex={expanded ? 0 : -1}
									scroll={false}
									href={`?designer=true&basisOf=projectName&value=${name
										.split(" ")
										.join("-")
										.toLowerCase()}`}
									onClick={() => {
										trackEvent("project_designs_clicked", {
											projectName: name,
											type: "expanded",
										});
									}}
									className="group flex h-fit w-full shrink-0 flex-row items-center justify-between gap-2 rounded-md bg-brand-primary/60 px-3 py-3 transition-all duration-500 ease-out hover:bg-brand-background-primary md:w-[240px] xl:w-full"
								>
									<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
										View Designs
									</p>
									<Palette className="h-[30px] w-[30px] font-bold text-brand-background-primary transition-all duration-500 ease-in-out group-hover:text-white" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex h-[80%] max-h-[500px] w-fit shrink-0 snap-center flex-col items-center justify-start md:max-h-full md:px-2">
						<ProjectInfo info={info} name={name} />
					</div>
				</div>
			</WidthWrapper>
		</section>
	);
}

export function ProjectMinified({
	name,
	description,
	image,
	link,
	github,
	expanded,
}: {
	name: string;
	description: string;
	image: string;
	link: string;
	github: string;
	expanded: boolean;
}) {
	return (
		<section className="relative flex h-full w-full shrink-0 snap-center flex-col items-center justify-start xl:w-[500px]">
			<div className="absolute top-0 left-0 h-full w-full">
				<Image
					src={`/projects/${image}`}
					fill
					className="absolute object-cover"
					alt={name}
					sizes="100vw"
					quality={100}
				/>
				<div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-r from-[#1E1E1E] to-[#1e1e1ed0]"></div>
			</div>

			<div className="z-30 flex h-full w-[90%] flex-col items-center justify-center gap-4 overflow-hidden px-2 xl:w-full">
				<div className="flex h-full w-full shrink-0 flex-col items-center justify-center gap-8 xl:w-fit">
					<div className="flex h-fit w-full flex-col items-center justify-center gap-8">
						<h2 className="h-[80px] text-center font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-4xl">
							{name}
						</h2>
						<p className="text-center text-lg text-white md:text-xl xl:text-lg">
							{description}
						</p>
					</div>
					<div className="flex h-fit w-full flex-col items-center justify-start gap-3 gap-y-6 pt-5">
						<Link
							tabIndex={!expanded ? 0 : -1}
							href={link}
							onClick={() => {
								trackEvent("project_link_clicked", {
									projectName: name,
									type: "minimized",
								});
							}}
							target="_blank"
							className="group flex h-fit w-[80%] flex-row items-center justify-between gap-2 rounded-md bg-brand-background-primary px-2 py-3"
						>
							<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
								View Site
							</p>
							<MonitorSmartphone className="h-[30px] w-[30px] font-bold text-brand-primary transition-all duration-500 ease-in-out group-hover:text-white" />
						</Link>
						<Link
							tabIndex={!expanded ? 0 : -1}
							href={github}
							onClick={() => {
								trackEvent("project_github_clicked", {
									projectName: name,
									type: "minimized",
								});
							}}
							target="_blank"
							className="group flex h-fit w-[80%] flex-row items-center justify-between gap-2 rounded-md bg-brand-background-secondary px-2 py-3"
						>
							<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
								View Code
							</p>
							<Code className="h-[30px] w-[30px] font-bold text-brand-primary transition-all duration-500 ease-in-out group-hover:text-white" />
						</Link>
						<Link
							tabIndex={!expanded ? 0 : -1}
							href={`?designer=true&basisOf=projectName&value=${name
								.split(" ")
								.join("-")
								.toLowerCase()}`}
							onClick={() => {
								trackEvent("project_designs_clicked", {
									projectName: name,
									type: "minimized",
								});
							}}
							target="_blank"
							className="group flex h-fit w-[80%] flex-row items-center justify-between gap-2 rounded-md bg-brand-primary/60 px-2 py-3 transition-all duration-500 ease-out hover:bg-brand-background-primary"
						>
							<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary md:text-sm xl:text-base">
								View Designs
							</p>
							<Palette className="h-[30px] w-[30px] font-bold text-brand-background-primary transition-all duration-500 ease-in-out group-hover:text-white" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
