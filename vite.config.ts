import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "192.168.88.3",
    port: 8080,
    cors: {
      origin: "https://aricummings.com", // Allow access from this origin
      methods: ['GET', 'POST'], // Specify allowed methods
      allowedHeaders: ['Content-Type'], // Specify allowed headers
    },
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
