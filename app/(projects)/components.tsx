import WidthWrapper from "@/components/widthWrapper";
import { AppWindow, ChevronRight, LayoutGrid, Pointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectInfo from "./info.client";
import { DesignType, TechStackType } from "./main";

export function ProjectExpanded({
  name,
  description,
  image,
  link,
  github,
  expanded,
  setExpanded,
  stack,
  scrollFunction,
  top,
  design,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  expanded: boolean;
  setExpanded: Function;
  stack: TechStackType[];
  design: DesignType;
  scrollFunction: Function;
  top?: boolean;
}) {
  return (
    <section className="w-full  h-[100svh] flex flex-col items-center justify-start relative">
      <div className="h-[100svh] w-full absolute top-0 left-0">
        <Image
          src={`/projects/${image}`}
          fill
          className={`object-cover  absolute ${top && "object-top"}`}
          alt={name}
          sizes="100vw"
          quality={100}
        />
        <div className="bg-gradient-to-r from-[#1E1E1E] to-[#1E1E1E80] z-20 absolute w-full h-full top-0 left-0"></div>
      </div>
      <div className="sticky top-0 h-[80px] w-full z-50 bg-brand-background-primary flex flex-col items-center justify-center">
        <WidthWrapper transparent>
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white text-[13px] md:text-[20px] font-bold tracking-wider">
              Projects/<span className="text-brand-primary">{name}</span>
            </p>
            <div className="w-fit h-full flex flex-row items-center justify-end gap-8">
              <AppWindow
                tabIndex={expanded ? 0 : -1}
                onClick={() => {
                  setExpanded(true);
                }}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer outline-none  transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                tabIndex={expanded ? 0 : -1}
                onClick={() => {
                  setExpanded(false);

                  scrollFunction();
                }}
                className={`${
                  !expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] outline-none  hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
            </div>
          </div>
        </WidthWrapper>
      </div>
      <WidthWrapper transparent>
        <div className="w-[90%] h-full flex flex-row items-center justify-between overflow-x-scroll small-scrollbar gap-8 z-30">
          <div className="shrink-0 xl:w-fit w-full h-full flex flex-col items-center xl:items-start justify-center gap-8">
            <div className="h-fit w-full flex flex-col items-center xl:items-start justify-center gap-3">
              <h2 className="text-[50px] md:text-[50px] text-center text-brand-primary font-bold">
                {name}
              </h2>
              <p className="text-white text-[15px] text-center md:text-[20px] font-bold pl-2">
                {description}
              </p>
            </div>
            <div className="w-full pt-5 h-fit flex flex-col xl:flex-row items-center justify-start gap-y-6 gap-3">
              <Link
                tabIndex={expanded ? 0 : -1}
                href={link}
                target="_blank"
                className="w-[180px] md:w-[220px] group rounded-md h-fit py-3 bg-brand-background-primary flex flex-row items-center justify-center gap-2"
              >
                <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-[15px] md:text-[20px] font-bold">
                  View Site
                </p>
                <ChevronRight className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
              </Link>
              <Link
                tabIndex={expanded ? 0 : -1}
                href={github}
                target="_blank"
                className="w-[180px] md:w-[220px] group rounded-md h-fit py-3 bg-brand-background-secondary flex flex-row items-center justify-center gap-2"
              >
                <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-[15px] md:text-[20px] font-bold">
                  View Code
                </p>
              </Link>
            </div>
          </div>
          <div className="h-[80%] w-fit flex flex-col items-center justify-start">
            <ProjectInfo stack={stack} design={design} />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}

export function StackAnimation({ stack }: { stack: string[] }) {
  return (
    <div className="w-full md:w-[500px] shrink-0 md:aspect-video flex flex-col items-center justify-center aspect-square  relative group z-30">
      <Pointer className="text-white w-[20px] h-[20px] z-40 absolute -top-5 right-20" />
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 bg-[#141414]  absolute group-hover:translate-x-[110%] group-hover:rotate-2 group-hover:translate-y-3 -rotate-2 z-30">
        <p className="text-brand-primary font-medium text-[10px] md:text-[20px]">
          {stack[0]}
        </p>
      </div>
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 bg-[#3f3f3f]  absolute group-hover:rotate-0 group-hover:translate-x-0 -rotate-3 -translate-y-2 z-20 -translate-x-2">
        <p className="text-brand-primary font-medium text-[10px] md:text-[20px]">
          {stack[1]}
        </p>
      </div>
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 ] bg-[#696969] absolute group-hover:-rotate-[2deg] -rotate-[4deg] group-hover:-translate-x-[110%] group-hover:translate-y-3 -translate-y-3 z-10 -translate-x-3">
        <p className="text-brand-primary font-medium text-[10px] md:text-[20px]">
          {stack[2]}
        </p>
      </div>
    </div>
  );
}

export function ProjectMinified({
  name,
  description,
  image,
  link,
  github,
  expanded,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  expanded: boolean;
}) {
  return (
    <section className="w-full xl:w-[500px] shrink-0 h-full flex flex-col items-center justify-start relative">
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src={`/projects/${image}`}
          fill
          className="object-cover absolute"
          alt={name}
          sizes="100vw"
          quality={100}
        />
        <div className="bg-gradient-to-r from-[#1E1E1E] to-[#1E1E1E80] z-20 absolute w-full h-full top-0 left-0"></div>
      </div>

      <div className="w-[90%] xl:w-full h-full flex flex-col items-center justify-center overflow-hidden  gap-8 z-30">
        <div className="shrink-0 xl:w-fit w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="h-fit w-full flex flex-col items-center justify-center gap-3">
            <h2 className="text-[30px] text-center text-brand-primary font-bold">
              {name}
            </h2>
            <p className="text-white text-[15px] text-center  font-bold pl-2">
              {description}
            </p>
          </div>
          <div className="w-full pt-5 h-fit flex flex-col  items-center justify-start gap-y-6 gap-3">
            <Link
              tabIndex={!expanded ? 0 : -1}
              href={link}
              target="_blank"
              className="w-[180px] md:w-[220px] group rounded-md h-fit py-3 bg-brand-background-primary flex flex-row items-center justify-center gap-2"
            >
              <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-[15px] md:text-[20px] font-bold">
                View Site
              </p>
              <ChevronRight className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
            </Link>
            <Link
              tabIndex={!expanded ? 0 : -1}
              href={github}
              target="_blank"
              className="w-[180px] md:w-[220px] group rounded-md h-fit py-3 bg-brand-background-secondary flex flex-row items-center justify-center gap-2"
            >
              <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-[15px] md:text-[20px] font-bold">
                View Code
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
