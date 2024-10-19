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
        customPrimary: "#1E90FF",
        customSecondary: "#0B132B",
        customAccent: "#04F06A",
        customGhostWhite: "#F8F7FF",
      },
    },
  },
  plugins: [],
};
export default config;
