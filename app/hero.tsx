import OverlayWrapper from "@/components/overlayWrapper";
import WidthWrapper from "@/components/widthWrapper";
import Image from "next/image";
import Link from "next/link";
import { DeveloperCTA } from "./(code)/info";
import { DesignerCTA } from "./(designer)/info";

export default function Hero() {
  return (
    <>
      <DeveloperCTA />
      <DesignerCTA />

      <section
        tabIndex={0}
        className="w-full  relative  h-[100svh] flex flex-col items-center justify-center xl:justify-start  shadow-lg shadow-black"
      >
        <Image
          src="/hero.png"
          fill
          className="object-cover absolute"
          alt="Hero Image"
          priority
          sizes="100vw"
          quality={100}
        />
        <OverlayWrapper opacity={0.5} />
        <WidthWrapper transparent>
          <div className="w-full xl:w-[90%] h-fit flex flex-col items-center xl:items-start justify-center xl:justify-start z-20 xl:gap-y-20">
            <h1 className="text-white font-bold text-[60px] md:text-[120px]">
              HELLO!
            </h1>
            <div className="w-full h-full flex flex-col items-end justify-start">
              <div className="w-full xl:w-[90%] h-full flex flex-col items-center xl:items-start justify-start gap-y-10 md:gap-y-28">
                <h2 className="text-white text-[30px] md:text-[50px]">
                  I am{" "}
                  <span className="text-brand-primary font-medium">
                    ARINJAY DHAR
                  </span>
                </h2>
                <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center xl:justify-start gap-8">
                  <Link
                    href={"?developer=true"}
                    className="w-[250px] h-fit p-1 bg-brand-purple bg-opacity-60 flex flex-col items-center justify-center"
                  >
                    <p className="text-white text-[25px]">DEVELOPER</p>
                  </Link>
                  <Link
                    href={"?designer=true"}
                    className="w-[250px] h-fit p-1 bg-brand-red bg-opacity-60 flex flex-col items-center justify-center"
                  >
                    <p className="text-white text-[25px]">DESIGNER</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </section>
    </>
  );
}
