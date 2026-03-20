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
        navy: {
          DEFAULT: "#1a2744",
          light: "#243360",
          dark: "#111b33",
          50: "#eef1f8",
          100: "#d5dced",
          200: "#abbad9",
          300: "#8197c5",
          400: "#5775b1",
          500: "#2d539d",
          600: "#243380",
          700: "#1a2744",
          800: "#111b33",
          900: "#090e1a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#d4b86a",
          dark: "#a88a3a",
          50: "#fdf8ec",
          100: "#f9eed0",
          200: "#f2daa1",
          300: "#ebc672",
          400: "#e4b243",
          500: "#c9a84c",
          600: "#a88a3a",
          700: "#876c28",
          800: "#664e16",
          900: "#453004",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        gold: "0 4px 20px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.4)",
        navy: "0 4px 20px rgba(26, 39, 68, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
