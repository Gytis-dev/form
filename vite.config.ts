import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
      service: "/src/service",
      styles: "/src/styles",
      layouts: "/src/layouts",
    },
  },
});
