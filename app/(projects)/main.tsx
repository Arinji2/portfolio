"use client";

import { AppWindow, LayoutGrid } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import { ProjectExpanded, ProjectMinified } from "./components";
import { ProjectsData } from "./data";
export type TechStackType = {
	name: string;
	used: string;
	key: string;
};

export type DesignType = {
	type: string;
	details: string;
};

export type StatsType = {
	name: string;
	value: string | boolean;
};

export type InfoType = {
	stack: TechStackType[];
	design: DesignType;
	image?: string;
	about?: string;
	stats?: StatsType[];
};

function ExpandedProjectsSection({
	handleMinifiedScroll,
	expanded,
	setExpanded,
}: {
	handleMinifiedScroll: () => void;
	expanded: boolean;
	setExpanded: (expanded: boolean) => void;
}) {
	const [currentProject, setCurrentProject] = useState("");

	const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const observers = observerRefs.current.map((ref, index) => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setCurrentProject(ProjectsData[index].name);
						}
					});
				},
				{
					threshold: 0.9,
				},
			);

			if (ref) {
				observer.observe(ref);
			}

			return observer;
		});

		return () => {
			observers.forEach((observer) => {
				observer.disconnect();
			});
		};
	}, []);

	const setRef = (index: number) => (el: HTMLDivElement | null) => {
		observerRefs.current[index] = el;
	};

	return (
		<div className="relative w-full">
			<div className="sticky top-0 z-[50] flex h-[80px] w-full shrink-0 flex-col items-center justify-center bg-brand-background-primary shadow-black shadow-md">
				<WidthWrapper transparent>
					<div className="flex h-full w-[90%] flex-row items-center justify-between">
						<p className="font-bold text-sm text-white tracking-title md:text-base xl:text-lg">
							Projects/
							<span className="text-brand-primary">{currentProject}</span>
						</p>
						<div className="flex h-full w-fit flex-row items-center justify-end gap-8">
							<AppWindow
								tabIndex={expanded ? 0 : -1}
								onClick={() => {
									setExpanded(true);
									trackEvent("projects_expanded");
								}}
								className={`${
									expanded ? "text-brand-primary" : "text-white"
								}md:w-[40px] h-[20px] w-[20px] outline-none transition-all duration-300 ease-in-out will-change-transform hover:scale-110 hover:cursor-pointer md:h-[40px]`}
							/>
							<LayoutGrid
								tabIndex={expanded ? 0 : -1}
								onClick={() => {
									setExpanded(false);
									handleMinifiedScroll();
									trackEvent("projects_collapsed");
								}}
								className={`${
									!expanded ? "text-brand-primary" : "text-white"
								}md:w-[40px] h-[20px] w-[20px] outline-none transition-all duration-300 ease-in-out will-change-transform hover:scale-110 hover:cursor-pointer md:h-[40px]`}
							/>
						</div>
					</div>
				</WidthWrapper>
			</div>

			<div className="w-full">
				{ProjectsData.map((project, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Nothing else we can use
					<div key={index} ref={setRef(index)}>
						<ProjectExpanded
							name={project.name}
							description={project.description}
							image={project.image}
							link={project.link}
							github={project.github}
							scrollFunction={handleMinifiedScroll}
							expanded={expanded}
							setExpanded={setExpanded}
							info={project.info}
							top={project.top}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Projects() {
	const [expanded, setExpanded] = useState(true);
	const minifiedRef = useRef<HTMLDivElement>(null);

	const handleMinifiedScroll = () => {
		if (minifiedRef.current) {
			const y =
				minifiedRef.current.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};
	return (
		<div className="relative z-[300] flex h-full w-full flex-col items-center justify-start overflow-clip">
			<div
				className={`${
					expanded
						? "translate-x-0 opacity-100"
						: "-translate-x-full absolute overflow-clip opacity-0"
				}transition-all flex w-full flex-col items-center justify-start duration-[2000ms] ease-in-out`}
				aria-hidden={!expanded}
			>
				<ExpandedProjectsSection
					handleMinifiedScroll={handleMinifiedScroll}
					setExpanded={setExpanded}
					expanded={expanded}
				/>
			</div>
			<div
				className={`${
					!expanded
						? "translate-x-0 opacity-100"
						: "absolute translate-x-full overflow-clip opacity-0"
				}transition-all flex h-[100svh] w-full flex-col items-center justify-start bg-black duration-[2000ms] ease-in-out`}
				aria-hidden={expanded}
				ref={minifiedRef}
			>
				<div className="sticky top-0 left-0 z-50 flex h-[80px] w-full flex-col items-center justify-center bg-brand-background-primary">
					<div className="flex h-full w-[90%] flex-row items-center justify-between">
						<p className="font-bold text-[13px] text-white md:text-[20px]">
							Projects
						</p>
						<div className="flex h-full w-fit flex-row items-center justify-end gap-8">
							<AppWindow
								tabIndex={!expanded ? 0 : -1}
								onClick={() => {
									setExpanded(true);
									trackEvent("projects_expanded");
								}}
								className={`${
									expanded ? "text-brand-primary" : "text-white"
								}md:w-[40px] h-[20px] w-[20px] outline-none transition-all duration-300 ease-in-out will-change-transform hover:scale-110 hover:cursor-pointer md:h-[40px]`}
							/>
							<LayoutGrid
								tabIndex={!expanded ? 0 : -1}
								onClick={() => {
									setExpanded(false);
									trackEvent("projects_collapsed");
								}}
								className={`${
									!expanded ? "text-brand-primary" : "text-white"
								}md:w-[40px] h-[20px] w-[20px] outline-none transition-all duration-300 ease-in-out will-change-transform hover:scale-110 hover:cursor-pointer md:h-[40px]`}
							/>
						</div>
					</div>
				</div>
				<div className="small-scrollbar relative flex h-full w-full snap-x snap-proximity flex-row items-center justify-start gap-8 overflow-x-scroll md:snap-none">
					{ProjectsData.map((project, index) => (
						<ProjectMinified
							// biome-ignore lint/suspicious/noArrayIndexKey: Nothing else we can use
							key={index}
							expanded={expanded}
							name={project.name}
							description={project.description}
							image={project.image}
							link={project.link}
							github={project.github}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
