import { defineConfig } from "umi";

type umiConfig = Parameters<typeof defineConfig>[0];

const router: umiConfig["routes"] = [
  { path: "/", component: "Home" },
  { path: "/f/detail", component: "StudyDetail" },
];

export default router;
