"use client";

import WidthWrapper from "@/components/widthWrapper";
import FoodLandingImage from "@/public/designs/food-landing.png";
import ImageeLandingImage from "@/public/designs/imagee-landing.png";
import NewsLandingImage from "@/public/designs/news-landing.png";
import SenseLandingImage from "@/public/designs/sense-landing.png";
import TaskationLandingImage from "@/public/designs/task-landing.png";
import VibeifyLandingImage from "@/public/designs/vibeify-landing.png";
import { AppWindow, LayoutGrid } from "lucide-react";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectExpanded, ProjectMinified } from "./components";
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
  image?: StaticImageData;
  about?: string;
  stats?: StatsType[];
};
const projects = [
  {
    name: "Vibeify",
    description: "Giving Love to Your Spotify Playlists",
    image: "vibeify.png",
    link: "https://vibeify.arinji.com",
    github: "https://github.com/Arinji2/vibeify",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is the base for this project, used for the frontend and backend.",
          key: "Frontend",
        },
        {
          name: "Pocketbase",
          used: "It is the database for this project and also used for authentication.",
          key: "Database",
        },
        {
          name: "Tailwind",
          used: "It is used for the styling of the project.",
          key: "Styling",
        },
      ],
      design: {
        type: "Modern Fusion",
        details:
          "The site has a modern and simplistic light mode design, with a slight new brutalist style. There are also themes you can choose, like pixel and neo brutalism.",
      },
      image: VibeifyLandingImage,
      about:
        "Vibeify is a web app that allows you to customize your Spotify playlists and make them unique to you. You can give your playlists a custom design, custom links, etc. Vibeify also has features to compare two playlists and split a playlist into selected genres with the help of AI.",
      stats: [
        {
          name: "Dependencies",
          value: "12",
        },
        {
          name: "Has Go backend",
          value: true,
        },
        {
          name: "Time taken",
          value: "3 months",
        },
        {
          name: "Uses AI",
          value: true,
        },
      ],
    },
  },
  {
    name: "Sense or Nonsense",
    description: "AI Game to Guess Fake or Real Words",
    image: "word.png",
    link: "https://sense.arinji.com",
    github: "https://github.com/Arinji2/sense-or-nonsense",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is used for the frontend.",
          key: "Frontend",
        },
        {
          name: "Go",
          used: "It is used for the backend and cron jobs.",
          key: "Backend",
        },
        {
          name: "Open AI",
          used: "It is used for validating and generating words.",
          key: "Helper",
        },
        {
          name: "Tailwind",
          used: "It is used for styling.",
          key: "Styling",
        },
      ],
      design: {
        type: "Pixelated Asset Heavy",
        details:
          "This site has an entirely pixelated design with the use of pixelated assets. The site has a lot of contrasting colors and no clear primary palette.",
      },
      image: SenseLandingImage,
      about:
        "Sense or Nonsense is a web game that allows you to practice your English skills. It will show you a word and its definition, and you have to guess if the word is fake or not. The words are generated based on a selected difficulty level. Additional features like a leaderboard and a timer are also available.",
      stats: [
        {
          name: "Dependencies",
          value: "18",
        },
        {
          name: "Uses AI",
          value: true,
        },
        {
          name: "Has Go backend",
          value: true,
        },
        {
          name: "Time taken",
          value: "5 months",
        },
      ],
    },
  },
  {
    name: "Imagee",
    description: "Custom Emojis for Discord, for Free.",
    image: "imagee.png",
    link: "https://imagee.arinji.com",
    github: "https://github.com/Arinji2/imagee/",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is used for the frontend and backend.",
          key: "Frontend",
        },
        {
          name: "DiscordJS",
          used: "It is used for interacting with the Discord API.",
          key: "Backend",
        },
        {
          name: "Tailwind",
          used: "It is used for styling.",
          key: "Styling",
        },
      ],
      design: {
        type: "Neo Brutalism Pocket",
        details:
          "This site has a very intense neo-brutalist design with an emphasis on vibrant colors. The site has a pocket feel with compact components placed together.",
      },
      image: ImageeLandingImage,
      about:
        "Imagee is a web app that allows you to upload custom emojis to be used in Discord. The site has reverse-engineered how Discord displays images and will try its best to match a normal custom emoji.",
      stats: [
        {
          name: "Dependencies",
          value: "13",
        },
        {
          name: "Discord Bot",
          value: true,
        },
        {
          name: "Time taken",
          value: "2 months",
        },
      ],
    },
  },
  {
    name: "News Nest",
    description: "Discover. Explore. Stay Informed.",
    image: "news.png",
    link: "https://news.arinji.com",
    github: "https://github.com/Arinji2/news-nest",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is used for the frontend and backend.",
          key: "Frontend",
        },
        {
          name: "News API",
          used: "It is used to fetch news articles.",
          key: "Backend",
        },
        {
          name: "Tailwind",
          used: "It is used for styling.",
          key: "Styling",
        },
      ],
      design: {
        type: "Modern Dark",
        details:
          "A modern site with a dark background and an asset-rich design. The site has a clean and simple layout with a focus on the content. A sharp red color is used for emphasis.",
      },
      image: NewsLandingImage,
      about:
        "News Nest is a web app that hosts news articles from reputable news sources. You can save articles, view more about them, etc. There are sections for different topics, countries, and even live news.",
      stats: [
        {
          name: "Dependencies",
          value: "18",
        },
        {
          name: "Has Go backend",
          value: true,
        },
        {
          name: "Time taken",
          value: "4 months",
        },
      ],
    },
  },
  {
    name: "Gourmet Gusto",
    description: "Savor. Create. Inspire.",
    image: "gourmet.png",
    link: "https://food.arinji.com",
    github: "https://github.com/Arinji2/gourmet-gusto",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is used for the frontend and backend.",
          key: "Frontend",
        },
        {
          name: "Open AI",
          used: "It is used for generating recipes and suggestions.",
          key: "Backend",
        },
        {
          name: "Tailwind",
          used: "It is used for styling.",
          key: "Styling",
        },
      ],
      design: {
        type: "Modern Asset Focused",
        details:
          "With large assets and minimal usage of text, this site has a lively feel. The site uses images to describe and detail different sections of the site.",
      },
      image: FoodLandingImage,
      about:
        "Gourmet Gusto is a web app that allows you to access food recipes. There are two ways to access recipes: by searching for one or by adding ingredients, which we then use to generate a recipe.",
      stats: [
        {
          name: "Dependencies",
          value: "8",
        },
        {
          name: "Uses AI",
          value: true,
        },
        {
          name: "Time taken",
          value: "1 month",
        },
      ],
    },
  },
  {
    name: "Taskation",
    description: "An App to Manage Your Tasks",
    image: "task.png",
    link: "https://taskation.arinji.com",
    github: "https://github.com/Arinji2/taskation/",
    info: {
      stack: [
        {
          name: "Next JS",
          used: "It is used for the frontend and backend.",
          key: "Frontend",
        },
        {
          name: "MySQL",
          used: "It is used as the database.",
          key: "Backend",
        },
        {
          name: "Tailwind",
          used: "It is used for styling.",
          key: "Styling",
        },
      ],
      design: {
        type: "Monochromatic Minimalist",
        details:
          "A minimalistic design with a monochromatic color scheme and simple highlights. The site has a clean and simple layout with a focus on the content.",
      },
      image: TaskationLandingImage,
      about:
        "Taskation is a web app that allows you to manage your tasks. You can add tasks, mark them as completed, delete them, etc. Each task can have multiple sub-tasks, with their own tasks. There is also a system for making your tasks public.",
      stats: [
        {
          name: "Dependencies",
          value: "13",
        },
        {
          name: "Has In-House Auth",
          value: true,
        },
        {
          name: "Time taken",
          value: "1 month",
        },
      ],
    },
  },
];

export function ExpandedProjectsSection({
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
              setCurrentProject(projects[index].name);
            }
          });
        },
        {
          threshold: 0.9,
        }
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
      <div className="sticky top-0 h-[80px] w-full z-50 bg-brand-background-primary shrink-0 flex flex-col items-center justify-center">
        <WidthWrapper transparent>
          <div className="w-[90%] h-full flex flex-row items-center justify-between">
            <p className="text-white text-[13px] md:text-[20px] font-bold tracking-wider">
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
        {projects.map((project, index) => (
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
    <div className="w-full h-full flex flex-col items-center justify-start relative overflow-clip ">
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
                onClick={() => setExpanded(true)}
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
          {projects.map((project, index) => (
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
