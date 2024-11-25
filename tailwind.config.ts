import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

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
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
