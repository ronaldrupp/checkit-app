const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      blue: {
        500: "#0C8FED",
      },
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
