//lms-mfe/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "lms",
      filename: "remoteEntry.js",

      exposes: {
        "./LmsApp": "./src/App.tsx",
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],

  server: {
    port: 5003,
    cors: true,
  },

  build: {
    target: "esnext",
  },
});
