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
      name: "optimize-initial-resources",
      transformIndexHtml: {
        order: "post",
        handler(html: string, ctx: IndexHtmlTransformContext) {
          if (!ctx.bundle) return html;
          const heroAsset = Object.values(ctx.bundle).find(
            (item) => item.type === "asset" && item.name === "hero-industrial.jpg"
          );
          let optimizedHtml = html;
          if (heroAsset && heroAsset.type === "asset") {
            const heroHref = `/${heroAsset.fileName}`;
            if (!optimizedHtml.includes(`href="${heroHref}"`)) {
              optimizedHtml = optimizedHtml.replace(
                "</head>",
                `    <link rel="preload" as="image" href="${heroHref}" fetchpriority="high" type="image/jpeg" />\n  </head>`
              );
            }
          }
          optimizedHtml = optimizedHtml.replace(
            /<link rel="stylesheet"([^>]*?)>/g,
            (_match, attrs: string) => {
              const hrefMatch = attrs.match(/href="([^"]+)"/);
              if (!hrefMatch) return _match;
              const href = hrefMatch[1];
              return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />\n    <noscript><link rel="stylesheet" href="${href}" /></noscript>`;
            }
          );
          return optimizedHtml;
        },
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
