import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // customNoche: "#151515",
        customPrimary: "#1E90FF",
        customSecondary: "#3B429F",
        customAccent: "#04F06A",
        customGhostWhite: "#F8F7FF",
      },
    },
  },
  plugins: [],
};
export default config;
