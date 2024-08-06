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

export type StatsType = {
  name: string;
  value: string | boolean;
};

export type InfoType = {
  stack: TechStackType[];
  design: DesignType;
  showImage?: boolean;
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
      showImage: true,
      about:
        "Vibeify is a web app that allows you to customize your Spotify playlists and make them unique to you. You can give your playlists a custom design, custom links, etc. Vibeify also has features to compare two playlists and split a playlist into selected genres with the help of AI.",
      stats: [
        {
          name: "Dependencies",
          value: "12",
        },
        {
          name: "Has separate backend",
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
      showImage: true,
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
      showImage: true,
      about:
        "News Nest is a web app that hosts news articles from reputable news sources. You can save articles, view more about them, etc. There are sections for different topics, countries, and even live news.",
      stats: [
        {
          name: "Dependencies",
          value: "18",
        },
        {
          name: "Has separate backend",
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
      showImage: true,
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
    name: "Sense or Nonsense",
    description: "AI Game to Guess Fake or Real Words",
    image: "word.png",
    link: "https://sense.arinji.com",
    github: "https://github.com/Arinji2/sense-or-nonsense",
    info: {
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
          "This site has an entirely pixelated design with the use of pixelated assets. The site has a lot of contrasting colors and no clear primary palette.",
      },
      showImage: true,
      about:
        "Sense or Nonsense is a web game that allows you to practice your English skills. It will show you a word and its definition, and you have to guess if the word is fake or not. The words are generated based on a selected difficulty level.",
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
          name: "Has separate backend",
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
      showImage: true,
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
            scrollFunction={handleMinifiedScroll}
            expanded={expanded}
            setExpanded={setExpanded}
            info={project.info}
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
