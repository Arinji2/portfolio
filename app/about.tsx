import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";

export default async function About() {
  return (
    <section
      tabIndex={0}
      className="w-full  relative h-auto xl:h-[100svh]  flex flex-row items-stretch xl:items-center justify-end md:justify-center  z-[90] shadow-lg shadow-black "
    >
      <div className="w-[30%] xl:h-full relative md:block hidden">
        <Image
          src="/about-pc.png"
          fill
          className="object-cover absolute"
          alt="About PC Image"
          sizes="30vw"
          quality={100}
        />
        <OverlayWrapper opacity={0.5} />
      </div>
      <div className="w-[70%] md:w-[40%]  h-full relative flex flex-col items-center justify-start z-20">
        <WidthWrapper color="#6D6D6D">
          <div className="w-full h-full flex flex-col items-center justify-center py-3 xl:py-0 gap-6 xl:gap-0">
            <div className="w-full h-[30%] p-2 flex flex-col items-center justify-center text-center">
              <p className="text-white xl:text-2xl md:text-lg text-xs tracking-tight">
                I am a UI/UX designer and developer from India, born in America.
              </p>
            </div>
            <div
              className="h-[5%] w-full flex flex-col items-center justify-center xl:pb-2"
              aria-hidden
            >
              <div className="h-1 md:h-3 w-[75%] md:bg-white bg-white/20"></div>
            </div>
            <div className="w-full xl:h-[30%] xl:my-4 p-2 flex flex-col items-center justify-center text-center">
              <h2 className="text-brand-primary xl:text-5xl md:text-3xl text-2xl tracking-title font-bold">
                ABOUT ME
              </h2>
            </div>
            <div
              className="h-[5%] w-full flex flex-col items-center justify-center xl:pt-2"
              aria-hidden
            >
              <div className="h-1 md:h-3 w-[75%] md:bg-white bg-white/20"></div>
            </div>
            <div className="w-full h-[30%] p-2 flex flex-col items-center justify-center text-center">
              <p className="text-white xl:text-2xl md:text-lg text-xs tracking-tight">
                I am {new Date().getFullYear() - 2007} years old, and started
                coding at the age of 14. I love making things on my own and
                learning through projects.
              </p>
            </div>
          </div>
        </WidthWrapper>
      </div>

      <div className="w-full md:w-[30%] md:h-auto h-full xl:h-full absolute md:relative ">
        <Image
          src="/about.png"
          fill
          className="object-cover absolute md:object-left"
          alt="About Image"
          priority
          sizes="(min-width: 768px) 30vw, 100vw"
          quality={100}
        />
        <OverlayWrapper opacity={0.5} />
      </div>
    </section>
  );
}
