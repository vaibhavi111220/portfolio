import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
    port: 3000,
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
