import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";

export default async function About() {
  return (
    <section
      tabIndex={0}
      className="w-full  relative h-[100svh] flex flex-row items-center justify-end md:justify-center z-[90] shadow-lg shadow-black "
    >
      <div className="w-[30%] h-full relative md:block hidden">
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
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-[30%] p-2 flex flex-col items-center justify-center text-center">
              <p className="text-white text-[15px] md:text-[25px]">
                I am a ui/ux designer from India, born in America.
              </p>
            </div>
            <div
              className="h-[5%] w-full flex flex-col items-center justify-center pb-2"
              aria-hidden
            >
              <div className="h-3 w-[75%] bg-white"></div>
            </div>
            <div className="w-full h-[30%] my-4 p-2 flex flex-col items-center justify-center text-center">
              <h2 className="text-brand-primary text-[50px] md:text-[70px]">
                ABOUT ME
              </h2>
            </div>
            <div
              className="h-[5%] w-full flex flex-col items-center justify-center pt-2"
              aria-hidden
            >
              <div className="h-3 w-[75%] bg-white"></div>
            </div>
            <div className="w-full h-[30%] p-2 flex flex-col items-center justify-center text-center">
              <p className="text-white text-[15px] md:text-[25px]">
                i am 16 years old, and started coding at the age of 14.
              </p>
            </div>
          </div>
        </WidthWrapper>
      </div>

      <div className="w-full md:w-[30%] h-full absolute md:relative ">
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
