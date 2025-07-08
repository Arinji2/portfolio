"use client";

import { XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/analytics/events";

export default function ModalController() {
	const [hasModalsOpen, setHasModalsOpen] = useState(false);
	const searchParams = useSearchParams();
	const [typeOfModal, setTypeOfModal] = useState<
		"developer" | "designer" | null
	>(null);
	const memoizedSearchParams = useMemo(() => {
		if (searchParams.get("developer") === "true") {
			setTypeOfModal("developer");
			return true;
		} else if (searchParams.get("designer") === "true") {
			setTypeOfModal("designer");
			return true;
		} else {
			return false;
		}
	}, [searchParams]);

	useEffect(() => {
		if (memoizedSearchParams) {
			setHasModalsOpen(true);
		} else {
			setHasModalsOpen(false);
		}
	}, [memoizedSearchParams]);

	return (
		<div className="fixed top-0 left-0 z-[1000] flex h-fit w-fit flex-row items-center justify-end p-3">
			<div
				className={`${
					hasModalsOpen ? "opacity-100" : "opacity-0"
				} flex h-fit w-fit flex-row items-stretch justify-center rounded-md bg-black/50 p-3 backdrop-blur-sm `}
			>
				<Link
					aria-label="Close Currently Opened Modal"
					tabIndex={hasModalsOpen ? 0 : -1}
					href={"/"}
					onClick={() => {
						if (typeOfModal === "developer") {
							trackEvent("developer_modal_closed");
						} else if (typeOfModal === "designer") {
							trackEvent("designer_modal_closed");
						}
					}}
					scroll={false}
				>
					<XCircle className="size-5 text-red-500 md:size-8" />
				</Link>
			</div>
		</div>
	);
}
