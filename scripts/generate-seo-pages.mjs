import { mkdir, readFile, writeFile } from "node:fs/promises";

const distIndex = await readFile("dist/index.html", "utf8");
const title = "Catálogo de instrumentación industrial | AIT Ventas";
const description = "Catálogo de PLCs, transmisores, variadores, válvulas y equipos de automatización industrial en Colombia. Consulte referencias, precios orientativos y cotización técnica.";
const head = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="https://ait-ventas.vercel.app/tienda" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="https://ait-ventas.vercel.app/tienda" />
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: "https://ait-ventas.vercel.app/tienda",
      isPartOf: { "@type": "WebSite", name: "AIT Soluciones", url: "https://ait-ventas.vercel.app/" },
      numberOfItems: 18,
    })}</script>`;
const fallback = `<main><h1>Catálogo de instrumentación industrial en Colombia</h1><p>PLCs, transmisores, variadores, válvulas y equipos de automatización industrial con referencias, fotografías y cotización técnica.</p><nav><a href="/">Inicio</a> <a href="/contacto">Solicitar cotización</a> <a href="/tienda/S7-1500">PLC Siemens S7-1500</a> <a href="/tienda/3300">Rosemount 3300</a></nav></main>`;
const base = distIndex
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta name="description"[^>]*>/g, "")
  .replace(/\s*<meta name="robots"[^>]*>/g, "")
  .replace(/\s*<link rel="canonical"[^>]*>/g, "")
  .replace(/\s*<meta property="og:title"[^>]*>/g, "")
  .replace(/\s*<meta property="og:description"[^>]*>/g, "")
  .replace(/\s*<meta property="og:url"[^>]*>/g, "");
const page = base
  .replace("</head>", `${head}\n  </head>`)
  .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);

await mkdir("dist/tienda", { recursive: true });
await writeFile("dist/tienda/index.html", page);
console.log("Generated dist/tienda/index.html for SEO crawling");
