/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      bubblePink: "#F30050",
      darkGrey: "#292929",
      darkPurple: "#390554",
      magenta: "#960252",
    },
  },
  plugins: [],
};
