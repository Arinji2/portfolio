"use client";

import FooterWrapper from "@/components/footerWrapper";
import { AppWindow, LayoutGrid } from "lucide-react";
import { useRef, useState } from "react";
import { ProjectExpanded, ProjectMinified } from "./components";

export default function Projects() {
  const [expanded, setExpanded] = useState(true);
  const minifiedRef = useRef<HTMLDivElement>(null);

  const handleMinifiedScroll = () => {
    if (minifiedRef.current) {
      const y =
        minifiedRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-start relative overflow-hidden ">
      <div
        className={`${
          expanded
            ? "translate-x-0  overflow-auto opacity-100 "
            : "-translate-x-full  overflow-hidden opacity-0 absolute  "
        }transition-all ease-in-out duration-[2000ms] w-full flex flex-col items-center justify-start`}
        aria-hidden={!expanded}
      >
        <ProjectExpanded
          name="VIBEIFY"
          description="Giving Love to your Spotify Playlists"
          image="listify.png"
          link="https://vibeify.arinji.com"
          github="https://github.com/Arinji2/vibeify"
          expanded={expanded}
          setExpanded={setExpanded}
          scrollFunction={handleMinifiedScroll}
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
          scrollFunction={handleMinifiedScroll}
          stack={["Next JS", "News API", "Tailwind"]}
        />
        <ProjectExpanded
          name="Gourmet Gusto"
          description="Savor. Create. Inspire."
          image="gourmet.png"
          link="https://food.arinji.com"
          github="https://github.com/Arinji2/gourmet-gusto"
          expanded={expanded}
          setExpanded={setExpanded}
          scrollFunction={handleMinifiedScroll}
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
          scrollFunction={handleMinifiedScroll}
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
          scrollFunction={handleMinifiedScroll}
          stack={["Next JS", "Open AI", "Tailwind"]}
        />
      </div>
      <div
        className={`${
          !expanded
            ? "translate-x-0  opacity-100 "
            : "translate-x-full overflow-hidden absolute opacity-0 "
        }transition-all ease-in-out h-[100svh]  bg-black duration-[2000ms]  w-full flex flex-col items-center justify-start`}
        aria-hidden={expanded}
        ref={minifiedRef}
      >
        <div className="sticky left-0 top-0 h-[80px] w-full z-50 bg-brand-background-primary flex flex-col items-center justify-center">
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white text-[13px] md:text-[20px] font-bold">
              Projects
            </p>
            <div className="w-fit h-full flex flex-row items-center justify-end gap-8">
              <AppWindow
                tabIndex={!expanded ? 0 : -1}
                onClick={() => setExpanded(!expanded)}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                tabIndex={!expanded ? 0 : -1}
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
            expanded={expanded}
            name="Listify"
            description="Spotify Playlists, Redesigned"
            image="listify.png"
            link="https://listify.arinji.com"
            github="https://github.com/Arinji2/listify"
          />
          <ProjectMinified
            expanded={expanded}
            name="News Nest"
            description="Discover. Explore. Stay Informed."
            image="news.png"
            link="https://news.arinji.com"
            github="https://github.com/Arinji2/news-nest"
          />
          <ProjectMinified
            expanded={expanded}
            name="Gourmet Gusto"
            description="Savor. Create. Inspire."
            image="gourmet.png"
            link="https://gourmet.arinji.com"
            github="https://github.com/Arinji2/gourmet-gusto"
          />
          <ProjectMinified
            expanded={expanded}
            name="Fusion Mania"
            description="RNG Game with Unique Avatars"
            image="fusion.png"
            link="https://fusion.arinji.com"
            github="https://github.com/Arinji2/fusion-mania"
          />
          <ProjectMinified
            expanded={expanded}
            name="Word Or Not"
            description="AI Game to guess valid words"
            image="word.png"
            link="https://word.arinji.com"
            github="https://github.com/Arinji2/Word-Or-Nonsence/"
          />
        </div>
      </div>
      <FooterWrapper />
    </div>
  );
}
