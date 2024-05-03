import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'animateBg 6s linear infinite',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #cf5c5c, #c19b4a, #def2a0, #c6ee4a, #42eca6, #208ea2, #cf5c5c, #c19b4a)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        '700': '700% 100%',
      },
      keyframes: {
        animateBg: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 0%' },
        }
      }
    },
  },
  plugins: [],
};

export default config;

