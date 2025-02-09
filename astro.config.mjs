// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  adapter: node({
    mode: "standalone",
  }),

  server: {
    host: "0.0.0.0",
  },
});
