import Image from "next/image";
import { ProjectCard } from "./cards.client";
import type { FeaturedDataType } from "./data";

export function FeaturedCard({ cardData }: { cardData: FeaturedDataType }) {
	const { name, accentColor, image } = cardData;
	return (
		<div className="relative flex aspect-video h-auto max-h-[160px] w-full max-w-[550px] shrink-0 flex-col items-start justify-end rounded-md md:max-h-[300px]">
			<Image
				src={image}
				fill
				sizes="(min-width: 1280px) 550px, (min-width: 768px) 532px, 100vw"
				alt="Design"
				className="rounded-md rounded-bl-none object-fill brightness-75 xl:object-cover"
				placeholder="blur"
			/>
			<ProjectCard accentColor={accentColor} name={name} />
		</div>
	);
}
