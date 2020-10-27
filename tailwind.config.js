const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          900: "#1c256d",
          800: "#283683",
          700: "#303f8f",
          600: "#38499b",
          500: "#3e51a4",
          400: "#5b6ab1",
          300: "#7885be",
          200: "#9da7d1",
          100: "#c4c9e4",
          50: "#e8eaf4",
        },
        secondary: {
          900: "#c90000",
          800: "#d6000b",
          700: "#e30615",
          600: "#f51d1a",
          500: "#ff2d17",
          400: "#ff443c",
          300: "#f46a66",
          200: "#fb9691",
          100: "#ffcbce",
          50: "#ffeaed",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
