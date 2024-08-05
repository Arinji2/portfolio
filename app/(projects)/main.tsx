"use client";

import { AppWindow, LayoutGrid } from "lucide-react";
import { useRef, useState } from "react";
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
const projects = [
  {
    name: "Vibeify",
    description: "Giving Love to your Spotify Playlists",
    image: "vibeify.png",
    link: "https://vibeify.arinji.com",
    github: "https://github.com/Arinji2/vibeify",
    stack: [
      {
        name: "Next JS",
        used: "It is the base for this project, it is used for the frontend and backend.",
        key: "Frontend",
      },
      {
        name: "Pocketbase",
        used: "It is the database for this project, it is also used to authenticate.",
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
        "The site has a modern and simplistic light mode design, with a slight new brutalist style. There are also themes you can choose, like pixel and neo brutalism. ",
    },
  },
  {
    name: "Imagee",
    description: "Custom Emojis for Discord, for free.",
    image: "imagee.jpg",
    link: "https://imagee.arinji.com",
    github: "https://github.com/Arinji2/imagee/",
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
        "This site has a very intense neo brutalist design with emphasis on vibrant colors. The site has a pocket feel with compact components placed together.",
    },
    top: true,
  },
  {
    name: "News Nest",
    description: "Discover. Explore. Stay Informed.",
    image: "news.png",
    link: "https://news.arinji.com",
    github: "https://github.com/Arinji2/news-nest",
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
        "A modern site with a dark background and a asset-rich design. The site has a clean and simple layout with a focus on the content. A sharp red color is used for emphasis.",
    },
  },
  {
    name: "Gourmet Gusto",
    description: "Savor. Create. Inspire.",
    image: "gourmet.png",
    link: "https://food.arinji.com",
    github: "https://github.com/Arinji2/gourmet-gusto",
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
        "With large assets and minimal usage of text, this site has a lively feel. ",
    },
  },
  {
    name: "Word Or Not",
    description: "AI Game to guess valid words",
    image: "word.png",
    link: "https://word.arinji.com",
    github: "https://github.com/Arinji2/Word-Or-Nonsence/",
    stack: [
      {
        name: "Next JS",
        used: "It is used for the frontend and backend.",
        key: "Frontend",
      },
      {
        name: "Open AI",
        used: "It is used for validating words.",
        key: "Backend",
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
        "This site has a entirely pixelated design with usage of pixelated assets. The site has a lot of contrasting colors and no clear primary palette.",
    },
  },
  {
    name: "Taskation",
    description: "An app to manage your tasks",
    image: "task.jpg",
    link: "https://taskation.arinji.com",
    github: "https://github.com/Arinji2/taskation/",
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
        "A minimalistic design with a monochromatic color scheme of black and white. The site has a clean and simple layout with a focus on the content.",
    },
  },
  {
    name: "Fusion Mania",
    description: "RNG Game with Unique Avatars",
    image: "fusion.png",
    link: "https://fusion.arinji.com",
    github: "https://github.com/Arinji2/fusion-mania",
    stack: [
      {
        name: "React",
        used: "It is used for the frontend.",
        key: "Frontend",
      },
      {
        name: "Firebase",
        used: "It is used for the backend and authentication.",
        key: "Backend",
      },
      {
        name: "Tailwind",
        used: "It is used for styling.",
        key: "Styling",
      },
    ],
    design: {
      type: "Pixelated",
      details: "This site has a pixelated design with a large usage of colors.",
    },
  },
];

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
        {projects.map((project, index) => (
          <ProjectExpanded
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            stack={project.stack}
            scrollFunction={handleMinifiedScroll}
            expanded={expanded}
            setExpanded={setExpanded}
            top={project.top}
            design={project.design}
          />
        ))}
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
        <div className="w-full relative flex h-full flex-row items-center justify-start overflow-x-scroll small-scrollbar gap-8">
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
