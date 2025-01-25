// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// import node from "@astrojs/node";
// test
// https://astro.build/config
export default defineConfig({
  site: "https://1bryanvalenzuela.github.io",
  base: "portafolio",

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
