import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "@/data/products";

const SITE_URL = "https://ait-ventas.vercel.app";
const pages: Record<string, [string, string]> = {
  "/": ["AIT Soluciones | Instrumentación y Automatización Industrial en Colombia", "Instrumentación industrial, PLC, transmisores, válvulas, variadores y soporte técnico en Colombia. Buscamos referencias y alternativas para sus requerimientos."],
  "/tienda": ["Tienda de Instrumentación y Automatización Industrial | AIT", "Catálogo de PLC, transmisores, variadores, válvulas y equipos industriales. Consulte disponibilidad y cotización en Colombia."],
  "/servicios": ["Servicios de Instrumentación y Automatización Industrial | AIT", "Calibración, automatización, puesta en marcha, diagnóstico y mantenimiento de instrumentación y control industrial."],
  "/sobre-nosotros": ["Sobre AIT Soluciones | Instrumentación y Automatización Industrial", "Conozca AIT Soluciones, su enfoque en instrumentación, automatización, suministro de equipos y soporte técnico para industria."],
  "/contacto": ["Cotización de Equipos Industriales | AIT Soluciones", "Solicite una cotización técnica de PLC, transmisores, válvulas, variadores, instrumentación o servicios industriales. Atención desde Bogotá."],
  "/privacidad": ["Política de Privacidad | AIT Soluciones", "Política de tratamiento de datos personales de AIT Soluciones Automáticas."],
  "/terminos": ["Términos y Condiciones | AIT Soluciones", "Condiciones de uso del catálogo, solicitudes de cotización, disponibilidad y servicios técnicos de AIT Soluciones."],
};

const upsertMeta = (selector: string, attribute: "content" | "property", value: string) => {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, selector.match(/\[([^=]+)=/)?.[1] ?? attribute); document.head.appendChild(element); }
  element.setAttribute("content", value);
};

const upsertJsonLd = (id: string, data: unknown) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) { script = document.createElement("script"); script.id = id; script.type = "application/ld+json"; document.head.appendChild(script); }
  script.textContent = JSON.stringify(data);
};

export function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const product = normalizedPath.startsWith("/tienda/") ? products.find((p) => p.sku === decodeURIComponent(normalizedPath.split("/").pop() || "")) : undefined;
    const isKnownPage = Boolean(pages[normalizedPath] || product);
    const [title, description] = product ? [`${product.name} | ${product.brand} | AIT Soluciones`, `${product.description} Consulte disponibilidad, compatibilidad y cotización en Colombia.`] : pages[normalizedPath] || pages["/"];
    const canonical = SITE_URL + normalizedPath;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", isKnownPage ? "index, follow" : "noindex, follow");
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
    upsertMeta('meta[property="og:title"]', "property", title);
    upsertMeta('meta[property="og:description"]', "property", description);
    upsertMeta('meta[property="og:url"]', "property", canonical);
    upsertMeta('meta[property="og:type"]', "property", product ? "product" : "website");
    if (product) upsertMeta('meta[property="og:image"]', "property", new URL(product.image, SITE_URL).toString());

    if (product) {
      upsertJsonLd("ait-product-schema", { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, image: [new URL(product.image, SITE_URL).toString()], sku: product.sku, brand: { "@type": "Brand", name: product.brand }, category: product.category, offers: product.price !== null ? { "@type": "Offer", url: canonical, priceCurrency: "COP", price: product.price, availability: "https://schema.org/InStock", seller: { "@type": "Organization", name: "AIT Soluciones Automáticas" } } : undefined });
      upsertJsonLd("ait-breadcrumb-schema", { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" }, { "@type": "ListItem", position: 2, name: "Tienda", item: SITE_URL + "/tienda" }, { "@type": "ListItem", position: 3, name: product.name, item: canonical }] });
    } else {
      document.getElementById("ait-product-schema")?.remove();
      document.getElementById("ait-breadcrumb-schema")?.remove();
    }
  }, [pathname]);
  return null;
}
