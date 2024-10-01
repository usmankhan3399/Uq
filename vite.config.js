import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit from 500 kB to 1000 kB or any desired value
  },
  server: {
    watch: {
      // Ensure i18n translation files trigger hot reloads
      usePolling: true,
    },
  },
});
