"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/analytics/events";
import ModalController from "./modal-controller";

export default function QuickActions() {
	const [isScrollable, setIsScrollable] = useState(false);

	const goToTop = useMemo(() => {
		return () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrollable(true);
			} else {
				setIsScrollable(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Suspense fallback={<div></div>}>
				<ModalController />
			</Suspense>
			<div className="fixed top-0 right-0 z-[200] flex h-fit w-fit flex-row items-center justify-end p-3">
				<div className="flex h-fit w-fit flex-row items-stretch justify-center rounded-md bg-black/50 p-3 backdrop-blur-sm">
					<Link
						aria-label="Copy Email Address"
						onClick={() => {
							navigator.clipboard.writeText(
								process.env.NEXT_PUBLIC_FROM_EMAIL!,
							);
							window.dispatchEvent(new Event("emailCopied"));
							trackEvent("email_copied");
						}}
						href={`mailto:${process.env.NEXT_PUBLIC_FROM_EMAIL}`}
					>
						<Mail className="size-5 text-brand-primary md:size-8" />
					</Link>
					<div className="mx-3 w-1 bg-white/20"></div>
					<Link
						href={`https://github.com/Arinji2`}
						target="_blank"
						aria-label="Github Link"
						onClick={() => {
							trackEvent("github_link_clicked", {
								where: "quick-actions",
							});
						}}
					>
						<FontAwesomeIcon
							icon={faGithub}
							className="size-5 text-brand-primary md:size-8"
						/>
					</Link>
					<div className="mx-3 w-1 bg-white/20"></div>
					<button
						type="button"
						aria-label="Go To Top"
						disabled={!isScrollable}
						onClick={goToTop}
						className="h-fit w-fit"
					>
						<ArrowUp
							className={`${
								isScrollable ? "opacity-100" : "opacity-50"
							} size-5 text-brand-primary md:size-8`}
						/>
					</button>
				</div>
			</div>
		</>
	);
}
