const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
