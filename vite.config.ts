import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig(({ command }) => ({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: command === "build" && process.env.VERCEL === "1" ? { preset: "vercel" } : false,
}));
