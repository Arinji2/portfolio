"use client";

import { ChevronDown, ChevronDownCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { type RefObject, useCallback, useEffect, useRef } from "react";
import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import { useIsVisible } from "@/utils/useIsVisible";
import type { InfoType } from "./data";
import { useGlobalInfoContext, useInfoContext } from "./info-context";

export function InfoWrapper({
	children,
	index,
}: {
	children: React.ReactNode;
	index: number;
}) {
	const { isOpen, setIsOpen } = useInfoContext();
	const { focusedIndex } = useGlobalInfoContext();

	const parentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (focusedIndex !== index) {
			setIsOpen(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [focusedIndex, index]);

	useEffect(() => {
		function scrollToTop() {
			const maxHeight = -parentRef.current?.scrollHeight! + 100;
			parentRef.current?.scrollTo({ top: maxHeight, behavior: "smooth" });
		}
		if (!isOpen) {
			setTimeout(() => {
				scrollToTop();
			}, 500);
		} else {
			const codeModal = document.getElementById("code-modal")!;

			const rect = parentRef.current?.getBoundingClientRect()!;

			setTimeout(() => {
				codeModal.scrollTo({
					top: rect.top + rect.height / 2,
					behavior: "smooth",
				});
			}, 500);
		}

		window.addEventListener("resize", scrollToTop);
		return () => {
			window.removeEventListener("resize", scrollToTop);
		};
	}, [isOpen]);

	return (
		<WidthWrapper transparent>
			<div
				ref={parentRef}
				className={`${
					isOpen
						? " h-[70svh] overflow-y-auto xl:h-[80svh]"
						: " h-[130px] overflow-y-hidden xl:h-[170px]"
				} ${
					focusedIndex !== index ? "opacity-50" : "opacity-100"
				} no-scrollbar flex w-full flex-col-reverse items-start justify-start rounded-md bg-[#403A3A] px-5 transition-all duration-500 ease-in-out xl:flex-row xl:justify-center xl:gap-10`}
			>
				{children}
			</div>
		</WidthWrapper>
	);
}

export function InfoContent({
	index,
	info,
}: {
	index: string;
	info: InfoType;
}) {
	const { isOpen, setIsOpen } = useInfoContext();
	const { isVisible, targetRef } = useIsVisible(
		{
			root: null,
			rootMargin: "200px",
			threshold: 0.1,
		},
		false,
	);

	const videoRef = useRef<HTMLVideoElement>(null);

	const startVideoOnMouseMove = useCallback(async () => {
		try {
			await videoRef?.current!.play();
		} catch {}
	}, []);

	const stopVideoOnMove = useCallback(() => {
		try {
			videoRef?.current!.pause();
		} catch {}
	}, []);

	useEffect(() => {
		if (isVisible) {
			startVideoOnMouseMove();
		} else {
			stopVideoOnMove();
		}
	}, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

	const { focusedIndex, setFocusedIndex } = useGlobalInfoContext();

	return (
		<div className="top-0 flex h-full w-full flex-col items-center justify-start gap-5 pt-5 xl:sticky xl:items-center xl:pb-5">
			<button
				type="button"
				onClick={() => {
					setIsOpen(!isOpen);
					const previousFocusedIndex = focusedIndex;
					setFocusedIndex(parseInt(index));
					if (!isOpen) {
						trackEvent("code_card_clicked", {
							tite: info.title,
							previousFocusedIndex: previousFocusedIndex,
						});
					}
				}}
				className="flex h-[90px] w-full shrink-0 flex-row items-center justify-center p-2 xl:h-[120px] "
			>
				<h3 className=" w-full overflow-hidden text-center font-medium text-white/80 md:text-lg xl:text-left xl:text-xl ">
					<span className="line-clamp-2 w-fit">
						{" "}
						<span className="text-brand-primary">{index}.</span> {info.title}
					</span>
					<span className="block shrink-0 text-brand-primary text-sm md:inline md:text-base xl:text-lg">{`> ${info.language}`}</span>
				</h3>
				<div className="flex h-full w-fit shrink-0 flex-col items-center justify-center px-4">
					<ChevronDownCircle
						className={`${
							isOpen ? "rotate-180" : ""
						} size-6 text-brand-primary/50 transition-all duration-500 ease-in-out md:size-8 `}
					/>
				</div>
			</button>
			<p className="line-clamp-3 min-h-[40px] text-center text-brand-primary/50 text-xs xl:line-clamp-2 xl:text-sm">
				{info.info}
			</p>
			<Link
				tabIndex={isOpen ? 0 : -1}
				href={info.githubURL}
				onClick={() => {
					trackEvent("code_github_clicked", {
						title: info.title,
					});
				}}
				target="_blank"
				className="group flex h-fit w-[80%] flex-row items-center justify-between gap-2 rounded-md bg-brand-background-primary px-2 py-3 md:w-[260px]"
			>
				<p className="font-bold text-white text-xs tracking-tight transition-all duration-500 ease-in-out group-hover:text-brand-primary xl:text-sm">
					View In Github
				</p>
				<ChevronRight className="h-[30px] w-[30px] font-bold text-brand-primary transition-all duration-500 ease-in-out group-hover:text-white" />
			</Link>

			{info.video.length > 0 && (
				<div
					ref={targetRef as RefObject<HTMLDivElement>}
					className="mt-auto h-fit w-fit max-w-[400px] overflow-hidden rounded-md shadow-black shadow-lg xl:min-h-[200px]"
				>
					<video
						ref={videoRef}
						src={info.video}
						muted
						playsInline
						className="w-full object-fill"
						loop
					></video>
				</div>
			)}
			<ChevronDown
				strokeWidth={3}
				className="size-7 h-fit w-fit animate-bounce text-brand-primary/50 transition-all duration-500 ease-in-out xl:hidden "
			/>
		</div>
	);
}
