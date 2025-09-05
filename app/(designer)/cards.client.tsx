"use client";

import autoAnimate from "@formkit/auto-animate";
import { ChevronDown, ChevronRight, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/analytics/events";
import { DesignData, type DesignDataType } from "./data";
export function ProjectCard({
	accentColor,
	name,
}: {
	accentColor: string;
	name: string;
}) {
	return (
		<Link
			style={{ "--accentColor": accentColor } as React.CSSProperties}
			href={`?designer=true&basisOf=projectName&value=${name
				.toLowerCase()
				.split(" ")
				.join("-")}`}
			onClick={() => {
				trackEvent("project_card_clicked", {
					projectName: name,
				});
			}}
			className="absolute top-full left-0 flex h-[50px] w-[80%] flex-row items-center justify-between rounded-md rounded-tl-none rounded-tr-none bg-[--accentColor] px-2"
		>
			<h2 className="font-bold text-white text-xs tracking-tight md:text-sm xl:text-sm">
				{name.toUpperCase()}
			</h2>
			<ChevronRight className="size-5 text-white" strokeWidth={3} />
		</Link>
	);
}
export type FilteringType = {
	basisOf: "projectName" | "featureName";
	value: string;
};

function formatText(text: string) {
	return text.replace(/(^\w|-\w)/g, (match) =>
		match.replaceAll("-", " ").toUpperCase(),
	);
}

export function DesignsSection() {
	const searchParams = useSearchParams();
	const params = useMemo(() => {
		return new URLSearchParams(searchParams);
	}, [searchParams]);

	const [isFiltering, setIsFiltering] = useState<null | FilteringType>(null);
	const [designDataState, setDesignDataState] =
		useState<DesignDataType[]>(DesignData);

	const [resetSelection, setResetSelection] = useState(false);

	const parent = useRef<HTMLDivElement>(null);
	const anchor = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (parent.current) autoAnimate(parent.current);
	}, []);

	const memoizedBasisOfSearchParam = useMemo(
		() => searchParams.get("basisOf"),
		[searchParams],
	);
	const memoizedIsValueOfSearchParam = useMemo(
		() => searchParams.get("value"),
		[searchParams],
	);

	useEffect(() => {
		if (resetSelection) {
			params.delete("basisOf");
			params.delete("value");
			window.history.pushState(null, "", `?${params.toString()}`);
			setResetSelection(false);
			return;
		}

		if (isFiltering) {
			if (
				isFiltering.basisOf === memoizedBasisOfSearchParam &&
				isFiltering.value === memoizedIsValueOfSearchParam
			) {
				return;
			}
		}

		if (memoizedBasisOfSearchParam && memoizedIsValueOfSearchParam) {
			const formattedValue = memoizedIsValueOfSearchParam
				.toLowerCase()
				.split(" ")
				.join("-");

			const isValid = DesignData.some((data) =>
				memoizedBasisOfSearchParam === "projectName"
					? data.projectName.toLowerCase().split(" ").join("-") ===
						formattedValue
					: data.featureName.toLowerCase().split(" ").join("-") ===
						formattedValue,
			);

			if (isValid) {
				setIsFiltering({
					basisOf: memoizedBasisOfSearchParam as "projectName" | "featureName",
					value: memoizedIsValueOfSearchParam,
				});
			}

			setTimeout(() => {
				if (anchor.current) {
					anchor.current.scrollIntoView({
						behavior: "smooth",
						block: "start",
						inline: "nearest",
					});
				}
			}, 100);
		}
	}, [
		resetSelection,
		isFiltering,
		memoizedBasisOfSearchParam,
		memoizedIsValueOfSearchParam,
		params,
	]);

	useEffect(() => {
		if (!isFiltering) {
			setDesignDataState(DesignData);
			return;
		}

		const { basisOf, value } = isFiltering;
		console.log(basisOf, value);

		setDesignDataState(
			DesignData.filter((data) => {
				const dataValue =
					basisOf === "projectName"
						? data.projectName.toLowerCase().split(" ").join("-")
						: data.featureName.toLowerCase().split(" ").join("-");

				return dataValue === value;
			}),
		);
	}, [isFiltering]);

	return (
		<div className="flex h-fit w-full flex-col items-center justify-start gap-2 pt-10">
			<div
				className={`${
					isFiltering ? "sticky top-[70px] xl:top-2" : ""
				} z-20 flex h-fit w-fit min-w-[300px] flex-col items-center justify-start gap-2 rounded-md bg-brand-background-overlay p-3 px-8 text-center shadow-black shadow-lg xl:h-[90px]`}
			>
				{isFiltering ? (
					<>
						<p className="text-white text-xs tracking-tight xl:text-sm">
							Currently Filtering by{" "}
							<span className="font-medium text-brand-primary">
								{isFiltering.basisOf === "projectName"
									? "Project Name"
									: "Feature Type"}
							</span>{" "}
							for{" "}
							<span className="font-medium text-brand-primary">
								{formatText(isFiltering.value)}
							</span>
						</p>
						<button
							type="button"
							onClick={() => {
								setIsFiltering(null);
								setResetSelection(true);
							}}
							className="h-fit w-fit rounded-sm bg-black/50 p-1"
						>
							<X className="size-5 text-red-500" strokeWidth={3} />
						</button>
					</>
				) : (
					<p className="text-white text-xs md:text-sm xl:text-lg">
						Showing All Results
					</p>
				)}
			</div>

			<div ref={anchor} className="invisible h-fit w-fit"></div>
			<div
				ref={parent}
				className="grid h-fit min-h-[600px] w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
			>
				{designDataState.map((data) => (
					<DesignCard
						key={data.projectName + data.featureName + data.featureNumber}
						cardData={data}
						setResetSelection={setResetSelection}
					/>
				))}
			</div>
		</div>
	);
}

function DesignCard({
	cardData,
	setResetSelection,
}: {
	cardData: DesignDataType;
	setResetSelection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const router = useRouter();
	const [imageDimensions, setImageDimensions] = useState({
		width: 0,
		height: 0,
	});

	const handleSearch = (
		basisOf: "projectName" | "featureName",
		value: string,
	) => {
		params.set("basisOf", basisOf);
		params.set("value", value.toLowerCase().split(" ").join("-"));
		window.history.pushState(null, "", `?${params.toString()}`);
		setResetSelection(false);
		router.replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center xl:min-h-[200px]">
			<div
				style={{ "--bgColor": cardData.bgColor } as React.CSSProperties}
				className={`${
					isExpanded ? "translate-y-0" : "translate-y-[50%]"
				} h-fit w-full overflow-hidden rounded-md rounded-b-none bg-[--bgColor] transition-all duration-300 ease-in-out`}
			>
				<button
					type="button"
					onClick={() => setIsExpanded(true)}
					className={`${
						isExpanded ? "translate-x-full" : "translate-x-0"
					} absolute top-0 left-0 z-20 flex h-[50%] w-full flex-row items-center justify-between px-2 transition-all delay-300 duration-300 ease-in-out`}
				>
					<h2 className="truncate text-sm text-white tracking-tight">
						{cardData.projectName}
						{" > "}{" "}
						<span className="text-xs opacity-60">{cardData.featureName}</span>
					</h2>
					<ChevronDown className="size-5 shrink-0 text-white" strokeWidth={3} />
				</button>
				<div className="relative flex h-fit w-full flex-col items-start justify-start gap-2 p-2">
					<button
						type="button"
						tabIndex={isExpanded ? 0 : -1}
						onClick={() => setIsExpanded(false)}
						className={`${
							isExpanded
								? "translate-y-0 opacity-100 delay-500"
								: "translate-y-[600px] opacity-0"
						} absolute top-2 right-2 h-fit w-fit rounded-sm bg-black/70 p-1 transition-all duration-500 ease-in-out`}
					>
						<X className="size-3 text-red-500" strokeWidth={3} />
					</button>
					<div
						className={`${
							isExpanded
								? "translate-y-0 opacity-100 delay-300"
								: "translate-y-[600px] opacity-0"
						} -tracking-tight relative flex shrink-0 flex-col items-start justify-center gap-2 text-white transition-all duration-[400ms] ease-in-out`}
					>
						<p className="-mb-2 text-[10px] text-white/60">Project Name</p>
						<h3 className="line-clamp-1 text-[14px] text-white tracking-tight">
							{cardData.projectName}
						</h3>
						<button
							type="button"
							onClick={() => {
								handleSearch("projectName", cardData.projectName);
								trackEvent("project_name_searched", {
									projectName: cardData.projectName,
									params: params.toString(),
								});
							}}
							className="-right-10 absolute h-fit w-fit rounded-sm bg-black/50 p-1"
						>
							<Search className="size-3 text-white" strokeWidth={2} />
						</button>
					</div>
					<div
						className={`${
							isExpanded
								? "translate-y-0 opacity-100"
								: "translate-y-[600px] opacity-0"
						} -tracking-tight relative flex shrink-0 flex-col items-start justify-center gap-2 text-white transition-all delay-[500ms] duration-[400ms] ease-in-out`}
					>
						<p className="-mb-2 text-[10px] text-white/60">Design Type</p>
						<h3 className="line-clamp-1 text-[14px] text-white tracking-tight">
							{cardData.featureName}{" "}
							<span className="text-sm opacity-60">
								{cardData.featureNumber ? `(#${cardData.featureNumber})` : ""}
							</span>
						</h3>
						<button
							type="button"
							onClick={() => {
								handleSearch("featureName", cardData.featureName);
								trackEvent("feature_name_searched", {
									featureName: cardData.featureName,
									params: params.toString(),
								});
							}}
							className="-right-10 absolute h-fit w-fit rounded-sm bg-black/50 p-1"
						>
							<Search className="size-3 text-white" strokeWidth={2} />
						</button>
					</div>
				</div>
			</div>
			<button
				type="button"
				onClick={() => setIsExpanded(false)}
				className="relative flex aspect-video h-auto w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-md rounded-t-none bg-green-500"
			>
				<Image
					src={cardData.image}
					placeholder="blur"
					fill
					sizes="(min-width: 1280px) 414px, (min-width: 768px) 532px, 100vw"
					onLoad={(e) => {
						setImageDimensions({
							width: e.currentTarget.naturalWidth,
							height: e.currentTarget.naturalHeight,
						});
					}}
					style={{
						objectPosition: cardData.imagePosition,
						aspectRatio:
							imageDimensions.width > 0
								? imageDimensions.width / imageDimensions.height
								: "auto",
					}}
					className={`${
						cardData.coverImage ? "object-cover" : "object-fill"
					} absolute`}
					alt="Hero Image"
				/>
			</button>
		</div>
	);
}
