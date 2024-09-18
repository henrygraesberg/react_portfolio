import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#576cbc",
        secondary: "#19376d",
        dark: "#0b2447",
      },
      animation: {
        float: "float 4s infinite ease-in-out",
      },
      keyframes: {
        float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5%)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
