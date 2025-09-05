import Image from "next/image";
import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import { GithubButton } from "./github.client";

export default async function Github() {
	return (
		<section className="relative flex h-[100svh] w-full flex-col items-center justify-start px-2 py-10">
			<Image
				src="/github.png"
				fill
				className="absolute object-cover"
				alt="Github Image"
				sizes="100vw"
				quality={100}
			/>
			<OverlayWrapper opacity={0.9} />
			<WidthWrapper transparent>
				<div className="z-20 flex h-full w-full flex-col items-center justify-center xl:w-[90%]">
					<h2 className="font-bold text-2xl text-white tracking-title md:text-3xl xl:text-5xl">
						GITHUB
					</h2>
					<div className="flex h-full w-full flex-col flex-nowrap items-center justify-start gap-8 md:w-[95%] md:flex-row md:justify-center">
						<Card name="Repos" description="50+" />
						<Card name="Commits" description="2500+" />
						<Card name="Stars" description="20+" />
					</div>
					<GithubButton />
				</div>
			</WidthWrapper>
		</section>
	);
}

function Card({ name, description }: { name: string; description: string }) {
	return (
		<article className="flex h-[25%] w-[90%] shrink flex-col items-center justify-center gap-3 rounded-md bg-brand-background-secondary bg-opacity-5 shadow-[5px_4px_4px_0px_#000] md:aspect-square md:h-auto md:w-[300px] xl:w-[600px]">
			<h3 className="font-bold text-brand-primary text-xl md:text-2xl xl:text-3xl">
				{name}
			</h3>
			<p className="font-bold text-base text-white md:text-lg xl:text-xl">
				{description}
			</p>
		</article>
	);
}
