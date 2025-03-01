import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";
import { TechBlock } from "./experience.client";

export default async function Experience() {
  return (
    <section className="w-full  relative h-fit flex flex-row items-center justify-start ">
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src="/experience.png"
          fill
          className="object-cover absolute"
          alt="Experience Image"
          sizes="100vw"
          quality={100}
        />
        <OverlayWrapper opacity={0.58} />
      </div>
      <WidthWrapper transparent>
        <div className="w-full h-full flex flex-col  items-center justify-start pt-10 pb-20 z-20">
          <div className=" md:pl-10 shrink-0 h-fit w-[95%]  xl:w-full  flex flex-row items-center gap-3 justify-center  z-10">
            <h2 className="text-brand-primary xl:text-5xl md:text-3xl text-2xl tracking-title font-bold">
              EXPERIENCE
            </h2>
          </div>
          <div className="w-[95%] mt-auto xl:w-full gap-5 md:pl-10  h-fit flex flex-row items-start pt-10 no-scrollbar justify-center overflow-x-auto overflow-y-hidden z-50">
            <TechBlock
              name="REVIVENODE"
              description="Premium servers at a pocket friendly price"
              post="Frontend, UI/UX"
              time="June 2023 - July 2024"
              link="https://revivenode.com"
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}
