import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FeaturedDataType } from "./data";

export function FeaturedCard({ cardData }: { cardData: FeaturedDataType }) {
  const { name, accentColor, id, image } = cardData;
  return (
    <div className="w-full  max-w-[550px]  max-h-[160px] xl:max-h-[300px] h-auto aspect-video rounded-md shrink-0  flex flex-col items-start justify-end relative">
      <Image
        src={image}
        fill
        alt="Design"
        className="object-fill xl:object-cover rounded-md rounded-bl-none brightness-75"
        placeholder="blur"
      />
      <Link
        style={{ "--accentColor": accentColor } as React.CSSProperties}
        href={`?designer=true&basisOf=projectName&value=${name
          .toLowerCase()
          .replace(" ", "-")}`}
        className="absolute top-full left-0 bg-[--accentColor] w-[80%] h-[50px] rounded-tl-none rounded-tr-none rounded-md flex flex-row items-center justify-between px-2"
      >
        <h2 className="text-white text-xl tracking-wide font-bold">
          {name.toUpperCase()}
        </h2>
        <ChevronRight className="size-5 text-white" strokeWidth={3} />
      </Link>
    </div>
  );
}
