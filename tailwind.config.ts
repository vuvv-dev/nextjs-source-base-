import type { Config } from "tailwindcss";

const {heroui} = require("@heroui/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#000000",
        "tertiary": "#000000",
        "quaternary": "#000000",
        "quinary": "#000000",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;
