import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "host",
      remotes: {
        quiz: {
          type: "module",
          name: "quiz",
          entry: "http://localhost:5001/remoteEntry.js",
        },
        lms: {
          type: "module",
          name: "lms",
          entry: "http://localhost:5003/remoteEntry.js",
        },
        feedback: {
          type: "module",
          name: "feedback",
          entry: "http://localhost:5004/remoteEntry.js",
        },
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
});