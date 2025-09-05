"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/analytics/events";
import { isInert } from "@/utils/inert";

export default function DesignerModal({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const memoizedSearchParams = useMemo(() => {
		if (searchParams.get("designer") === "true") {
			return true;
		} else {
			return false;
		}
	}, [searchParams]);

	useEffect(() => {
		if (memoizedSearchParams) {
			setIsOpen(true);
			trackEvent("designer_modal_opened");
			document.body.style.overflow = "hidden";
		} else {
			setIsOpen(false);
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [memoizedSearchParams]);

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				router.push("/");
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [router]);

	return (
		<div
			id="designer-modal"
			inert={isInert(!isOpen) as any}
			className={`${
				isOpen ? "translate-y-0" : "translate-y-full"
			}overflow-y-auto scrollbar-stable fixed top-0 left-0 z-[500] flex h-[100dvh] w-full flex-col items-center justify-start bg-[#403A3A] duration-700 ease-in-out`}
		>
			<div className="relative flex h-fit w-full shrink-0 flex-col items-center justify-center p-5 pt-20 xl:h-[40%] xl:pt-0">
				<Image
					src="/designer.png"
					fill
					className="object-cover object-[30%_25%]"
					alt="Hero Image"
					priority
					sizes="40vw"
					quality={50}
				/>
				<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-30% from-black/90 to-black/60"></div>
				<h2 className="z-20 text-center font-bold text-2xl text-white/40 tracking-title md:text-3xl xl:text-left xl:text-4xl">
					A Showcase Of My <span className="text-red-500">Designs</span>
				</h2>
			</div>
			{children}
		</div>
	);
}
