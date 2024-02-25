import { defineConfig } from "vite";
import unoCSS from "unocss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unoCSS({ configFile: "./unocss.config.ts" })],
});
