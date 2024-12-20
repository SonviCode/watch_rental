/// <reference types="vitest/config" />

import path from 'path'
import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react';

export default defineConfig({
  // plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
