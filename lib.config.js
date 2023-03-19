import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import defineOptions from "unplugin-vue-define-options/vite";

import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), defineOptions()],
  resolve: {
    alias: {
      "@": "/src",
      "@lib": "/lib"
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "flexiblay",
      fileName: "flexiblay"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
