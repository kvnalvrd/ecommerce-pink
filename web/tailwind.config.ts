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
        primary: "#F53AB1",
        secondary: "#FCE4EC",
        tertiary: "#2F3538",
        neutral: "#F9F9F9",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)"],
        sans: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
