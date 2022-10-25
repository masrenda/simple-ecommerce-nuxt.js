/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Fester"],
      serif: ["Fester"],
      mono: ["Fester"],
      display: ["Fester"],
      body: ["Fester"],
    },
    extend: {},
  },
  plugins: [],
};
