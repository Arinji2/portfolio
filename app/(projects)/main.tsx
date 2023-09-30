"use client";

import WidthWrapper from "@/components/widthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppWindow, LayoutGrid, ChevronRight, Pointer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-hidden ">
      <div
        className={`${
          expanded
            ? "translate-x-0 h-full overflow-auto "
            : "-translate-x-full h-0 overflow-hidden  "
        }transition-all ease-in-out duration-700 w-full flex flex-col items-center justify-start`}
        aria-hidden={!expanded}
      >
        <ProjectExpanded
          name="Listify"
          description="Spotify Playlists, Redesigned"
          image="listify.png"
          link="https://listify.arinji.com"
          github="https://github.com/Arinji2/listify"
          expanded={expanded}
          setExpanded={setExpanded}
          stack={["Next JS", "Supabase", "Tailwind"]}
        />
        <ProjectExpanded
          name="News Nest"
          description="Discover. Explore. Stay Informed."
          image="news.png"
          link="https://news.arinji.com"
          github="https://github.com/Arinji2/news-nest"
          expanded={expanded}
          setExpanded={setExpanded}
          stack={["Next JS", "News API", "Tailwind"]}
        />
        <ProjectExpanded
          name="Gourmet Gusto"
          description="Savor. Create. Inspire."
          image="gourmet.png"
          link="https://gourmet.arinji.com"
          github="https://github.com/Arinji2/gourmet-gusto"
          expanded={expanded}
          setExpanded={setExpanded}
          stack={["Next JS", "Open AI", "Tailwind"]}
        />
        <ProjectExpanded
          name="Fusion Mania"
          description="RNG Game with Unique Avatars"
          image="fusion.png"
          link="https://fusion.arinji.com"
          github="https://github.com/Arinji2/fusion-mania"
          expanded={expanded}
          setExpanded={setExpanded}
          stack={["React", "Firebase", "Tailwind"]}
        />
        <ProjectExpanded
          name="Word Or Not"
          description="AI Game to guess valid words"
          image="word.png"
          link="https://word.arinji.com"
          github="https://github.com/Arinji2/Word-Or-Nonsence/"
          expanded={expanded}
          setExpanded={setExpanded}
          stack={["Next JS", "Open AI", "Tailwind"]}
        />
      </div>
      <div
        className={`${
          !expanded
            ? "translate-x-0  h-[100svh] "
            : "translate-x-full h-[0svh] overflow-hidden "
        }transition-all ease-in-out bg-black duration-700 relative w-full flex flex-col items-center justify-start`}
        aria-hidden={expanded}
      >
        <div className="sticky left-0 top-0 h-[80px] w-full z-50 bg-brand-background-primary flex flex-col items-center justify-center">
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white text-[13px] md:text-[20px] font-bold">
              Projects
            </p>
            <div className="w-fit h-full flex flex-row items-center justify-end gap-8">
              <AppWindow
                onClick={() => setExpanded(!expanded)}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                onClick={() => setExpanded(!expanded)}
                className={`${
                  !expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
            </div>
          </div>
        </div>
        <div className="w-full relative flex h-full flex-row items-center justify-start overflow-x-scroll small-scrollbar gap-8">
          <ProjectMinified
            name="Listify"
            description="Spotify Playlists, Redesigned"
            image="listify.png"
            link="https://listify.arinji.com"
            github="https://github.com/Arinji2/listify"
          />
          <ProjectMinified
            name="News Nest"
            description="Discover. Explore. Stay Informed."
            image="news.png"
            link="https://news.arinji.com"
            github="https://github.com/Arinji2/news-nest"
          />
          <ProjectMinified
            name="Gourmet Gusto"
            description="Savor. Create. Inspire."
            image="gourmet.png"
            link="https://gourmet.arinji.com"
            github="https://github.com/Arinji2/gourmet-gusto"
          />
          <ProjectMinified
            name="Fusion Mania"
            description="RNG Game with Unique Avatars"
            image="fusion.png"
            link="https://fusion.arinji.com"
            github="https://github.com/Arinji2/fusion-mania"
          />
          <ProjectMinified
            name="Word Or Not"
            description="AI Game to guess valid words"
            image="word.png"
            link="https://word.arinji.com"
            github="https://github.com/Arinji2/Word-Or-Nonsence/"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectExpanded({
  name,
  description,
  image,
  link,
  github,
  expanded,
  setExpanded,
  stack,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  expanded: boolean;
  setExpanded: Function;
  stack: string[];
}) {
  return (
    <section className="w-full h-[100svh] flex flex-col items-center justify-start relative">
      <div className="h-[100svh] w-full absolute top-0 left-0">
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
      <div className="sticky top-0 h-[80px] w-full z-50 bg-brand-background-primary flex flex-col items-center justify-center">
        <WidthWrapper transparent>
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white text-[13px] md:text-[20px] font-bold">
              Projects/<span className="text-brand-primary">{name}</span>
            </p>
            <div className="w-fit h-full flex flex-row items-center justify-end gap-8">
              <AppWindow
                onClick={() => setExpanded(!expanded)}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                onClick={() => setExpanded(!expanded)}
                className={`${
                  !expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
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
          <StackAnimation stack={stack} />{" "}
        </div>
      </WidthWrapper>
    </section>
  );
}

function StackAnimation({ stack }: { stack: string[] }) {
  return (
    <div className="w-full md:w-[500px] shrink-0 md:aspect-video flex flex-col items-center justify-center aspect-square  relative group z-30">
      <Pointer className="text-white w-[20px] h-[20px] z-40 absolute -top-5 right-20" />
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 bg-[#141414]  absolute group-hover:translate-x-[110%] group-hover:rotate-2 group-hover:translate-y-3 -rotate-2 z-30">
        <p className="text-brand-primary font-bold text-[10px] md:text-[15px]">
          {stack[0]}
        </p>
      </div>
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 bg-[#3f3f3f]  absolute group-hover:rotate-0 group-hover:translate-x-0 -rotate-3 -translate-y-2 z-20 -translate-x-2">
        <p className="text-brand-primary font-bold text-[10px] md:text-[15px]">
          {stack[1]}
        </p>
      </div>
      <div className=" w-[30%] rounded-md aspect-[63/88] flex flex-col items-center justify-center transition-all ease-[0.7, -0.4, 0.4, 1.4] duration-500 ] bg-[#696969] absolute group-hover:-rotate-[2deg] -rotate-[4deg] group-hover:-translate-x-[110%] group-hover:translate-y-3 -translate-y-3 z-10 -translate-x-3">
        <p className="text-brand-primary font-bold text-[10px] md:text-[15px]">
          {stack[2]}
        </p>
      </div>
    </div>
  );
}

function ProjectMinified({
  name,
  description,
  image,
  link,
  github,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
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
