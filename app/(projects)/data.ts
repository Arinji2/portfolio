export const ProjectsData = [
  {
    name: "Downloads On Steroids",
    description: "The download tool made for the power user",
    image: "dos.png",
    top: true,
    link: "https://dos.arinji.com",
    github: "https://github.com/Arinji2/dos",
    info: {
      stack: [
        {
          name: "Golang",
          used: "It is the base for this project, used for creating the app with cross platform support",
          key: "App",
        },
        {
          name: "Go Releaser",
          used: "It is used for creating and releasing cross platform versions for the app.",
          key: "Devops",
        },
      ],
      design: {
        type: "Modern Terminal",
        details:
          "This site has a modern design for an old school terminal based look using a dark background and terminal based colors",
      },
      image: "/designs/dos-landing.png",
      about:
        "Downloads on Steroids (DOS) is a tool that makes downloading files from the web easy and fast. It works using just filenames, making it cross platform, simple and easy to use. Delete, Move and Link files with ease, only on DOS",
      stats: [
        {
          name: "Platforms",
          value: "3",
        },
        {
          name: "Cross Platform Test Suite",
          value: true,
        },
        {
          name: "Time taken",
          value: "2 months",
        },
        {
          name: "Feature Count",
          value: "6",
        },
      ],
    },
  },

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
      image: "/designs/vibeify-landing.png",
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
      image: "/designs/sense-landing.png",
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
      image: "/designs/imagee-landing.png",
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
      image: "/designs/news-landing.png",
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
      image: "/designs/food-landing.png",
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
      image: "/designs/task-landing.png",
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
