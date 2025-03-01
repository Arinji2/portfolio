import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";
import { GithubButton } from "./github.client";

export default async function Github() {
  return (
    <section
      tabIndex={0}
      className="w-full  relative h-[100svh] flex flex-col items-center justify-start py-10 px-2"
    >
      <Image
        src="/github.png"
        fill
        className="object-cover absolute"
        alt="Github Image"
        sizes="100vw"
        quality={100}
      />
      <OverlayWrapper opacity={0.9} />
      <WidthWrapper transparent>
        <div className="w-full xl:w-[90%] h-full flex flex-col items-center justify-center z-20">
          <h2 className="text-white xl:text-5xl md:text-3xl text-2xl tracking-title font-bold">
            GITHUB
          </h2>
          <div className="w-full  md:w-[95%] h-full flex-nowrap flex md:flex-row items-center justify-start md:justify-center gap-8 flex-col">
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
    <article className="md:w-[300px] shrink xl:w-[600px] h-[25%] md:h-auto flex flex-col items-center justify-center gap-3 md:aspect-square w-[90%] rounded-md bg-brand-background-secondary bg-opacity-5 shadow-[5px_4px_4px_0px_#000]">
      <h3 className="text-brand-primary font-bold xl:text-3xl md:text-2xl text-xl ">
        {name}
      </h3>
      <p className="text-white font-bold xl:text-xl md:text-lg text-base">
        {description}
      </p>
    </article>
  );
}
