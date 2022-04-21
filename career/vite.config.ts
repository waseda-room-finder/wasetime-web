import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");

// https://vitejs.dev/config/
// export default defineConfig({
//   root: "./src",
//   plugins: [react()]
// })

export default {
  root: "./src",
  rollupOptions: {
    input: "wasedatime-career.ts",
    format: "system",
    preserveEntrySignatures: true,
  },
  resolve: {
    fullySpecified: false,
    alias: {
      "@app": path.resolve(__dirname, "src/"),
    },
    modules: ["node_modules"],
  },
  plugins: [reactRefresh(), dynamicImport()],
};
