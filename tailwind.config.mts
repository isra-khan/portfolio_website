import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#e6f7f0",
          100: "#b3e6d1",
          200: "#80d5b2",
          300: "#4dc493",
          400: "#2E8B57",
          500: "#20B2AA",
          600: "#1a8f88",
          700: "#146c66",
          800: "#0d4944",
          900: "#072622",
        },
      },
    },
  },
  plugins: [],
};

export default config;


