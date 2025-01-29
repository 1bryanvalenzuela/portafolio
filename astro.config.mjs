// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
// import node from "@astrojs/node";
// test
// https://astro.build/config
export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
