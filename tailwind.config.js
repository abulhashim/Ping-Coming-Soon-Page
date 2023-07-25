/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LibreFranklin: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        Blue: "hsl(223, 87%, 63%)",
        PaleBlue: "hsl(223, 100%, 88%)",
        LightRed: "hsl(354, 100%, 66%)",
        Gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue: "hsl(209, 33%, 12%)",
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        "2.5xl": "45.25rem",
      },
      width: {
        100: "26rem",
      },
      margin: {
        22: "5.375rem",
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};
