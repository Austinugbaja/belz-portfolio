/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navActiveColor: "#2AA1F8",
        btnColor: "#60B1FC",
        secondary: "#363535",
        tertiary: "#4B4C4D",
      },
      fontFamily: {
        Poppins: [
          "Poppins",
          "sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        Montserrat: [
          "Montserrat",
          "sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
