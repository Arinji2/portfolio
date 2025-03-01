import Image from "next/image";
import { ProjectCard } from "./cards.client";
import { FeaturedDataType } from "./data";

export function FeaturedCard({ cardData }: { cardData: FeaturedDataType }) {
  const { name, accentColor, image } = cardData;
  return (
    <div className="w-full  max-w-[550px]  max-h-[160px] md:max-h-[300px] h-auto aspect-video rounded-md shrink-0  flex flex-col items-start justify-end relative">
      <Image
        src={image}
        fill
        sizes="(min-width: 1280px) 550px, (min-width: 768px) 532px, 100vw"
        alt="Design"
        className="object-fill xl:object-cover rounded-md rounded-bl-none brightness-75"
        placeholder="blur"
      />
      <ProjectCard accentColor={accentColor} name={name} />
    </div>
  );
}
