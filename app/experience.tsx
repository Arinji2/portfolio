import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";
import Link from "next/link";

export default async function Experience() {
  return (
    <section className="w-full relative h-[100svh] flex flex-row items-center justify-start ">
      <div className="h-[100svh] w-full absolute top-0 left-0">
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
        <div className="w-full h-full flex flex-col  items-center justify-start  z-20">
          <div className=" md:pl-10 shrink-0 h-fit w-[95%]  xl:w-full  flex flex-row items-center  gap-3 justify-center  z-10">
            <h2 className="text-[40px] md:text-[50px] xl:text-[70px] text-brand-primary font-bold text-center">
              Experience
            </h2>
          </div>
          <div className="w-[95%] xl:w-full gap-5 md:pl-10  h-full flex flex-row items-start pt-10 no-scrollbar justify-center overflow-x-scroll z-50">
            <TechBlock
              name="Revivenode"
              description="Premium servers at a pocket friendly price"
              post="Frontend, Ui/Ux"
              time="June 2023 - May 2024"
              link="https://revivenode.com"
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}

function TechBlock({
  name,
  description,
  post,
  time,
  link,
}: {
  name: string;
  description: string;
  post: string;
  time: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:scale-110 hover:cursor-pointer will-change-transform transition-all ease-in-out duration-300 w-[300px] md:w-[400px] bg-brand-background-overlay bg-opacity-60 rounded-md relative shrink-0 h-[450px] flex flex-col items-center justify-center gap-5 text-center"
    >
      <h3 className="text-[30px] md:text-[40px] text-brand-primary font-bold">
        {name}
      </h3>
      <div className="w-[90%] h-fit flex flex-col items-center justify-center text-center gap-7">
        <p className="text-white text-[15px] md:text-[20px] ">{description}</p>
        <p className="text-[30px] md:text-[40px] text-white font-bold">
          {post}
        </p>
        <p className=" text-[15px] md:text-[20px] text-brand-primary">{time}</p>
      </div>
    </Link>
  );
}
