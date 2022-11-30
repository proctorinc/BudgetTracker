/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  daisyui: {
    themes: ["corporate"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
