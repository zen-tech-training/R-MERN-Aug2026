import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "quiz",
      filename: "remoteEntry.js",

      exposes: {
        "./QuizApp": "./src/App.tsx",
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
    port: 5001,
    cors: true,
  },

  build: {
    target: "esnext",
  },
});
