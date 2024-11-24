import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#019BA2",
        },
        grey: {
          DEFAULT: "#717171",
        },
        backgroundImage: {
          "primary-gradient": "linear-gradient(to right, #019BA2, #034245)",
          "secondary-gradient": "linear-gradient(to bottom, #002558, #E6943A)",
          "teal-gradient": "linear-gradient(to bottom right, #FFFFFF, #F8FFFF)",
        },
        secondary: {
          DEFAULT: "#E6943A",
        },
        tertiary: {
          DEFAULT: "#002558",
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
