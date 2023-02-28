/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      extend: {
        fontFamily: {
          Special: ["Shantell Sans", "cursive"],
          Normal: ["Merriweather", "serif"],
        },
        colors: {
            primary: {
                50: "#FBFEFB",
                100: "#F7FCF8",
                200: "#E4F4EA",
                300: "#C6E5D5",
                400: "#A0D0BD",
                500: "#76B5A2",
                600: "#509484",
                700: "#316F64",
                800: "#1B4741",
                900: "#0B211E",
            },
            secondary: {
              50: "#FEF9F8",
              100: "#FCF8F6",
              200: "#F4EFED",
              300: "#E5E0DE",
              400: "#D0CCC9",
              500: "#B5B1AE",
              600: "#94918F",
              700: "#6F6D6B",
              800: "#474645",
              900: "#212020",
          }
        }
      },
    },
    plugins: [],
  }