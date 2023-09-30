import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
};
export default config;
