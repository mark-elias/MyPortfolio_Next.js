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
        customDark: "#000814",
        customDarkBlue: "#001D3D",
        customBlue: "#003566",
        customYellow: "#ECCE8E",
      },
    },
  },
  plugins: [],
};
export default config;
