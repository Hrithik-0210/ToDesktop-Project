/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3025C6",
        hrithik: "#01ee91",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
    screens: {
      md: "865px",
      lg: "1100px",
      xl: "1240px",
    },
  },
  plugins: [],
};
