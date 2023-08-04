import { defineConfig } from "umi";

type umiConfig = Parameters<typeof defineConfig>[0];

const router: umiConfig["routes"] = [{ path: "/home", component: "Home" }];

export default router;
