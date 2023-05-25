const colors = require("wasedatime-ui/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ejs,js,jsx,ts,tsx,html}"],
  safelist:
    process.env.DONT_PURGE_TAILWIND_CSS === "true" ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {
      textColors: colors,
      colors,
    },
  },
  plugins: [require("daisyui")],
};
