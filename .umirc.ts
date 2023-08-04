import { defineConfig } from "umi";
import router from "./config/router";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  routes: router,
  npmClient: "pnpm",
  tailwindcss: {},
});
