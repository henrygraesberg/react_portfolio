import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        background_dark: "#555",

        navbar: "rgba(110, 110, 110, 0.5)",
        navbar_dark: "rgba(40, 0, 71, 0.5)",

        text: "#1F1F1F",
        text_secondary: "#EBEBEB",

        primary: "#6457A6",
        secondary: "#7D7ABC",
        accent: "#2AF5FF",
      },
    },
  },
  plugins: [],
};
export default config;
