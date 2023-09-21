import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [react(), terser()],
  build: {
    rollupOptions: {
      plugins: [terser()],
    },
  },
  base: "/Portfolio-/",
});
