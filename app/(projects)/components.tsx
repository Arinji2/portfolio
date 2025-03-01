import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import { Code, MonitorSmartphone, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectInfo from "./info.client";
import { InfoType } from "./main";

export function ProjectExpanded({
  name,
  description,
  image,
  link,
  github,
  expanded,
  top,
  info,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  expanded: boolean;
  setExpanded: Function;

  scrollFunction: Function;
  top?: boolean;
  info: InfoType;
}) {
  return (
    <section className="w-full  h-[100svh] flex flex-col items-center justify-start relative ">
      <div className="h-[100svh] w-full absolute top-0 left-0">
        <Image
          src={`/projects/${image}`}
          fill
          className={`object-cover  absolute ${top && "object-top"}`}
          alt={name}
          sizes="100vw"
          quality={50}
        />
        <div className="bg-gradient-to-r from-[#1E1E1E] to-[#1e1e1ed0] z-20 absolute w-full h-full top-0 left-0"></div>
      </div>

      <WidthWrapper transparent>
        <div className="w-[90%] h-full flex flex-row items-center justify-between snap-x snap-mandatory xl:overflow-x-hidden overflow-x-auto small-scrollbar gap-8 z-30">
          <div className="shrink-0 xl:w-fit xl:max-w-[500px] w-full h-full snap-center  flex flex-col items-center xl:items-start justify-center gap-8">
            <div className="h-fit w-full flex flex-col items-center xl:items-start justify-center gap-3">
              <h2 className="xl:text-4xl md:text-3xl text-2xl  text-center xl:text-left text-brand-primary tracking-title font-bold">
                {name}
              </h2>
              <p className="text-white/80 text-center xl:text-left xl:text-xl md:text-xl text-lg   pl-2">
                {description}
              </p>
            </div>
            <div className="w-[70%] md:w-fit pt-5 h-fit grid md:grid-cols-2 grid-cols-1  justify-start gap-y-6 gap-3">
              <Link
                tabIndex={expanded ? 0 : -1}
                href={link}
                target="_blank"
                className="w-full md:w-[240px] shrink-0 group rounded-md h-fit bg-brand-background-primary flex flex-row items-center justify-between px-3 gap-2 py-3"
              >
                <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                  View Site
                </p>
                <MonitorSmartphone className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
              </Link>
              <Link
                tabIndex={expanded ? 0 : -1}
                href={github}
                target="_blank"
                className="w-full md:w-[240px] shrink-0 group rounded-md h-fit bg-brand-background-secondary flex flex-row items-center justify-between px-3 gap-2 py-3"
              >
                <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                  View Code
                </p>
                <Code className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
              </Link>
              <div className="w-full h-full md:col-span-2 flex flex-col items-center justify-center col-span-1 ">
                <Link
                  tabIndex={expanded ? 0 : -1}
                  scroll={false}
                  href={`?designer=true&basisOf=projectName&value=${name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  className="w-full md:w-[240px] xl:w-full shrink-0  group rounded-md h-fit transition-all ease-out duration-500 hover:bg-brand-background-primary bg-brand-primary/60 flex flex-row items-center justify-between px-3 gap-2 py-3"
                >
                  <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                    View Designs
                  </p>
                  <Palette className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-background-primary" />
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[80%] w-fit md:max-h-full max-h-[500px] flex flex-col items-center snap-center shrink-0 justify-start md:px-2 ">
            <ProjectInfo info={info} imageName={image} />
          </div>
        </div>
      </WidthWrapper>
    </section>
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
    <section className="w-full xl:w-[500px] shrink-0 h-full flex flex-col items-center  snap-center justify-start relative">
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src={`/projects/${image}`}
          fill
          className="object-cover absolute"
          alt={name}
          sizes="100vw"
          quality={100}
        />
        <div className="bg-gradient-to-r from-[#1E1E1E] to-[#1e1e1ed0] z-20 absolute w-full h-full top-0 left-0"></div>
      </div>

      <div className="w-[90%] xl:w-full h-full flex flex-col items-center justify-center overflow-hidden  gap-4 px-2 z-30">
        <div className="shrink-0 xl:w-fit w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="h-fit w-full flex flex-col items-center justify-center gap-8">
            <h2 className="xl:text-4xl h-[80px] md:text-3xl text-2xl text-center text-brand-primary font-bold tracking-title">
              {name}
            </h2>
            <p className="text-white xl:text-lg md:text-xl text-lg text-center">
              {description}
            </p>
          </div>
          <div className="w-full pt-5 h-fit flex flex-col  items-center justify-start gap-y-6 gap-3">
            <Link
              tabIndex={!expanded ? 0 : -1}
              href={link}
              onClick={() => {
                trackEvent("project_link_clicked", {
                  projectName: name,
                  type: "minimized",
                });
              }}
              target="_blank"
              className="w-[80%] group rounded-md h-fit py-3 bg-brand-background-primary flex flex-row items-center justify-between px-2 gap-2"
            >
              <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                View Site
              </p>
              <MonitorSmartphone className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
            </Link>
            <Link
              tabIndex={!expanded ? 0 : -1}
              href={github}
              onClick={() => {
                trackEvent("project_github_clicked", {
                  projectName: name,
                  type: "minimized",
                });
              }}
              target="_blank"
              className="w-[80%] group rounded-md h-fit py-3 bg-brand-background-secondary flex flex-row items-center justify-between px-2 gap-2"
            >
              <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                View Code
              </p>
              <Code className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-primary" />
            </Link>
            <Link
              tabIndex={!expanded ? 0 : -1}
              href={`?designer=true&basisOf=projectName&value=${name
                .split(" ")
                .join("-")
                .toLowerCase()}`}
              onClick={() => {
                trackEvent("project_designs_clicked", {
                  projectName: name,
                  type: "minimized",
                });
              }}
              target="_blank"
              className="w-[80%]  group rounded-md h-fit  transition-all ease-out duration-500 hover:bg-brand-background-primary bg-brand-primary/60 flex flex-row items-center justify-between px-2 gap-2 py-3"
            >
              <p className="text-white group-hover:text-brand-primary transition-all ease-in-out duration-500 text-xs md:text-sm xl:text-base tracking-tight font-bold">
                View Designs
              </p>
              <Palette className="w-[30px] group-hover:text-white transition-all ease-in-out duration-500 h-[30px] font-bold text-brand-background-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
