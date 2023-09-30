import FooterWrapper from "@/components/footerWrapper";
import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";
import Link from "next/link";

export default async function Freelance() {
  return (
    <section className="w-full relative h-[100svh] mt-10 flex flex-row items-center justify-start">
      <WidthWrapper color="">
        <div className="w-full h-full flex flex-col  items-center justify-start  z-20">
          <div className=" md:pl-10 shrink-0 h-fit w-[95%]  xl:w-full  flex flex-row items-center  gap-3 justify-center md:justify-start z-10">
            <h2 className="text-[30px] md:text-[50px] xl:text-[70px] text-white font-bold xl:text-left text-center">
              Let&apos;s Build the,
              <br />
              <span className="text-brand-primary">Next big thing</span>
            </h2>
          </div>
          <div className="w-[95%] xl:w-full gap-5 md:pl-10  h-full flex flex-row items-start pt-10 no-scrollbar justify-center md:justify-start overflow-x-scroll z-50">
            <TechBlock
              name="Duh"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu."
              post="CEO of Feds.lol"
              icon="feds.png"
            />
          </div>
        </div>
      </WidthWrapper>

      <FooterWrapper />
    </section>
  );
}

function TechBlock({
  name,
  description,
  post,

  icon,
}: {
  name: string;
  description: string;
  post: string;
  icon: string;
}) {
  return (
    <section className=" w-[300px] md:w-[400px] px-4 py-6 bg-brand-background-secondary shadow-[-5px_4px_4px_0px_#000] rounded-md relative shrink-0  h-[350px] flex flex-col items-start justify-start gap-8">
      <div className="w-full h-[60%] flex flex-col items-start justify-end text-left">
        <p className="text-white text-[15px] md:text-[20px] ">{description}</p>
      </div>
      <div className="w-full h-[40%] flex flex-col items-start justify-start text-left gap-2">
        <div className="w-[90%] h-[2px] bg-white"></div>
        <div className="w-[90%] h-full flex flex-row items-end justify-between">
          <div className="w-fit h-fit flex flex-col items-start justify-start gap-1">
            <p className="text-[30px] font-bold text-brand-primary">{name}</p>
            <div className="w-full h-full flex flex-col items-start text-left justify-center gap-1">
              <p className="text-[15px] text-white">{post}</p>
              <div className="w-full h-[2px] bg-white"></div>
            </div>
          </div>
          <div className="h-full w-fit flex flex-col items-center justify-start pt-5">
            <div className="w-[50px] h-[50px] rounded-full relative overflow-hidden shadow-[-2px_0px_0px_0px_#66FCE1]">
              <Image
                alt={name}
                src={`/testimonials/${icon}`}
                fill
                sizes="50px"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
