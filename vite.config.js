import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev:  /systemx/  → http://localhost:5173/systemx/
// Vercel (prod): /  → https://sytemx.vercel.app/
// GitHub Pages:  /systemx/  → https://sebzx1.github.io/systemx/
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.VERCEL ? "/" : "/systemx/");

export default defineConfig({
  plugins: [react()],
  base: base.endsWith("/") ? base : `${base}/`,
  build: {
    chunkSizeWarningLimit: 100000000,
  },
});
