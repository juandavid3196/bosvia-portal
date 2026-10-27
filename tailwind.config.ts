import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5EE",
        surface: "#FBFAF6",
        forest: "#103C34",
        ink: "#092524",
        moss: "#496952",
        sage: "#D9DFCD",
        "sage-soft": "#E3E6DA",
        "sage-bg": "#E4E8DA",
        terracotta: { DEFAULT: "#B65330", hover: "#9C4426" },
        sand: "#D9CAB7",
        "warm-brown": "#8E6240",
        roble: "#8E4A2C",
        paragraph: "#626A76",
        line: "#E3DED2",
        "line-soft": "#EDE8DD",
        "status-dot": "#3E9A5B",
        rule: "#8A9188",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { reveal: "cubic-bezier(.2,.7,.2,1)" },
    },
  },
  plugins: [],
};

export default config;
