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
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
        "fade-down": { from: { opacity: "0", transform: "translateY(-14px)" }, to: { opacity: "1", transform: "none" } },
        "panel-in": {
          from: { opacity: "0", transform: "translateY(36px) scale(0.97)" },
          to: { opacity: "1", transform: "none" },
        },
        "ken-burns": { from: { transform: "scale(1.08)" }, to: { transform: "scale(1)" } },
        "grow-y": { from: { transform: "scaleY(0)" }, to: { transform: "scaleY(1)" } },
        "menu-in": { from: { opacity: "0", transform: "translateY(-8px) scale(0.98)" }, to: { opacity: "1", transform: "none" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(.2,.7,.2,1) both",
        "fade-down": "fade-down 0.7s cubic-bezier(.2,.7,.2,1) both",
        "panel-in": "panel-in 1.1s cubic-bezier(.2,.7,.2,1) both",
        "ken-burns": "ken-burns 2.6s cubic-bezier(.2,.7,.2,1) both",
        "grow-y": "grow-y 0.9s cubic-bezier(.2,.7,.2,1) both",
        "menu-in": "menu-in 0.25s ease-out both",
        "spin-slow": "spin-slow 90s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
