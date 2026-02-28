import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const plugins = [
    react(),
    tailwindcss(),
  ];

  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch (err) {
      console.warn("lovable-tagger não encontrado, seguindo sem ele");
    }
  }

  return {
    server: {
      host: "::",
      port: 5173,
      hmr: {
        overlay: false,
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});