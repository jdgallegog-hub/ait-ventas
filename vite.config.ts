import { defineConfig, type IndexHtmlTransformContext } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    {
      name: "preload-lcp-hero",
      transformIndexHtml: {
        order: "post",
        handler(html: string, ctx: IndexHtmlTransformContext) {
          if (!ctx.bundle) return html;

          const heroAsset = Object.values(ctx.bundle).find(
            (item) => item.type === "asset" && item.name === "hero-industrial.jpg"
          );

          if (!heroAsset || heroAsset.type !== "asset") return html;

          const href = `/${heroAsset.fileName}`;
          if (html.includes(`href="${href}"`)) return html;

          return {
            html,
            tags: [
              {
                tag: "link",
                attrs: {
                  rel: "preload",
                  as: "image",
                  href,
                  fetchpriority: "high",
                  type: "image/jpeg",
                },
                injectTo: "head-prepend",
              },
            ],
          };
        },
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
