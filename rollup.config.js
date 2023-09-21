import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [reactRefresh(), commonjs(), terser()],
  build: {
    // Configure your build options here
  },
});
