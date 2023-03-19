import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import defineOptions from "unplugin-vue-define-options/vite";

import { resolve } from "path";

export default ({ mode }) =>
  defineConfig({
    base: mode === "development" ? "/" : "./",
    build: {
      outDir: "docs"
    },
    plugins: [vue(), defineOptions()],
    resolve: {
      alias: {
        "@": "/src",
        "@lib": "/lib"
      }
    }
  });
