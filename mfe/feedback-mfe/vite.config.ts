import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "feeback",
      filename: "remoteEntry.js",

      exposes: {
        "./FeedbackApp": "./src/App.tsx",
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
    port: 5004,
    cors: true,
  },

  build: {
    target: "esnext",
  },
})
