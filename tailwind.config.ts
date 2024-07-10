import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: {
          50: "#E4FBF9",
          100: "#C5F6F2",
          200: "#90EFE5",
          300: "#56E6D8",
          400: "#20DAC7",
          500: "#18A396",
          600: "#138176",
          700: "#0E6259",
          800: "#0A433D",
          900: "#051F1C",
          950: "#031210",
        },
      },
    },
  },
  plugins: [],
};

export default config;
("");
