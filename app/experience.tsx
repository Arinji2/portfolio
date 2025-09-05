import Image from "next/image";
import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import { TechBlock } from "./experience.client";

export default async function Experience() {
	return (
		<section className="relative flex h-fit w-full flex-row items-center justify-start">
			<div className="absolute top-0 left-0 h-full w-full">
				<Image
					src="/experience.png"
					fill
					className="absolute object-cover"
					alt="Experience Image"
					sizes="100vw"
					quality={100}
				/>
				<OverlayWrapper opacity={0.58} />
			</div>
			<WidthWrapper transparent>
				<div className="z-20 flex h-full w-full flex-col items-center justify-start pt-10 pb-20">
					<div className="z-10 flex h-fit w-[95%] shrink-0 flex-row items-center justify-center gap-3 md:pl-10 xl:w-full">
						<h2 className="font-bold text-2xl text-brand-primary tracking-title md:text-3xl xl:text-5xl">
							EXPERIENCE
						</h2>
					</div>
					<div className="no-scrollbar z-50 mt-auto flex h-fit w-[95%] flex-row items-start justify-center gap-5 overflow-x-auto overflow-y-hidden pt-10 md:pl-10 xl:w-full">
						<TechBlock
							name="REVIVENODE"
							description="Premium servers at a pocket friendly price"
							post="Frontend, UI/UX"
							time="June 2023 - Present"
							link="https://revivenode.com"
						/>
					</div>
				</div>
			</WidthWrapper>
		</section>
	);
}
