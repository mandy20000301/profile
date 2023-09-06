/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./composables/**/*.{js,ts}",
  ],
  presets: [
    require("./vender/tailwindcss/project-preset.js"),
],
  theme: {
    container: {
      center: true,
  },
  },
  corePlugins: {
    // aspectRatio: false,
    container: false,
},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
}

