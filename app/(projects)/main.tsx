"use client";

import { trackEvent } from "@/analytics/events";
import WidthWrapper from "@/components/widthWrapper";
import { AppWindow, LayoutGrid } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ProjectExpanded, ProjectMinified } from "./components";
import { ProjectsData } from "./data";
export type TechStackType = {
  name: string;
  used: string;
  key: string;
};

export type DesignType = {
  type: string;
  details: string;
};

export type StatsType = {
  name: string;
  value: string | boolean;
};

export type InfoType = {
  stack: TechStackType[];
  design: DesignType;
  image?: string;
  about?: string;
  stats?: StatsType[];
};

function ExpandedProjectsSection({
  handleMinifiedScroll,
  expanded,
  setExpanded,
}: {
  handleMinifiedScroll: () => void;
  expanded: boolean;
  setExpanded: Function;
}) {
  const [currentProject, setCurrentProject] = useState("");

  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentProject(ProjectsData[index].name);
            }
          });
        },
        {
          threshold: 0.9,
        },
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    observerRefs.current[index] = el;
  };

  return (
    <div className="relative w-full">
      <div className="sticky top-0  h-[80px] w-full z-[50] bg-brand-background-primary shadow-black shadow-md shrink-0 flex flex-col items-center justify-center">
        <WidthWrapper transparent>
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white xl:text-lg md:text-base text-sm font-bold tracking-title">
              Projects/
              <span className="text-brand-primary">{currentProject}</span>
            </p>
            <div className="w-fit h-full flex flex-row items-center justify-end gap-8">
              <AppWindow
                tabIndex={expanded ? 0 : -1}
                onClick={() => setExpanded(true)}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] hover:cursor-pointer outline-none transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                tabIndex={expanded ? 0 : -1}
                onClick={() => {
                  setExpanded(false);
                  handleMinifiedScroll();
                }}
                className={`${
                  !expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] outline-none hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
            </div>
          </div>
        </WidthWrapper>
      </div>

      <div className="w-full">
        {ProjectsData.map((project, index) => (
          <div key={index} ref={setRef(index)}>
            <ProjectExpanded
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
              scrollFunction={handleMinifiedScroll}
              expanded={expanded}
              setExpanded={setExpanded}
              info={project.info}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <div className="w-full h-full flex flex-col items-center z-[300] justify-start relative overflow-clip ">
      <div
        className={`${
          expanded
            ? "translate-x-0  opacity-100 "
            : "-translate-x-full  overflow-clip opacity-0 absolute  "
        }transition-all ease-in-out duration-[2000ms] w-full flex flex-col items-center justify-start`}
        aria-hidden={!expanded}
      >
        <ExpandedProjectsSection
          handleMinifiedScroll={handleMinifiedScroll}
          setExpanded={setExpanded}
          expanded={expanded}
        />
      </div>
      <div
        className={`${
          !expanded
            ? "translate-x-0  opacity-100 "
            : "translate-x-full overflow-clip absolute opacity-0  "
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
                onClick={() => {
                  setExpanded(true);
                  trackEvent("projects_expanded");
                }}
                className={`${
                  expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] outline-none hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
              <LayoutGrid
                tabIndex={!expanded ? 0 : -1}
                onClick={() => setExpanded(false)}
                className={`${
                  !expanded ? "text-brand-primary " : "text-white "
                }md:w-[40px] h-[20px] w-[20px] md:h-[40px] outline-none hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 will-change-transform`}
              />
            </div>
          </div>
        </div>
        <div className="w-full relative flex h-full flex-row items-center justify-start overflow-x-scroll md:snap-none snap-x snap-proximity small-scrollbar gap-8">
          {ProjectsData.map((project, index) => (
            <ProjectMinified
              key={index}
              expanded={expanded}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
