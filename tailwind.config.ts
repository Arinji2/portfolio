import { scrollbarGutter } from "tailwind-scrollbar-utilities";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%, 100%": {
            transform: "translateX(50%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1);",
          },
          "50%": {
            transform: "translateX(0%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1);",
          },
        },
      },

      animation: {
        slideLeft: "slideLeft 1s ease-in-out infinite",
      },
      colors: {
        brand: {
          primary: "#66FCE1",
          purple: "#6708C6",
          red: "#C60808",
          background: {
            primary: "#323232",
            secondary: "#6D6D6D",
            overlay: "#1E1E1E",
          },
        },
      },
    },
    letterSpacing: {
      title: "0.1875rem",
      normal: "0.15rem",
    },
  },
  plugins: [scrollbarGutter()],
};
export default config;
