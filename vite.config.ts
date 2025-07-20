import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    cors: {
      origin: "https://aricummings.com", // Allow access from this origin
      methods: ['GET', 'POST'], // Specify allowed methods
      allowedHeaders: ['Content-Type'], // Specify allowed headers
    },
    allowedHosts: [
      'aricummings.com', // Add the host to the allowed hosts
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
