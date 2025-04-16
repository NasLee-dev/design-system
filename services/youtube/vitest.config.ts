import { defineConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@/src": "/src",
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["/node_modules/", "/.next/"],
    setupFiles: "./vitest.setup.ts",
  },
});
