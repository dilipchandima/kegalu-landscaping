/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./contact.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
        weare: "url('/img/back2.png')",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
