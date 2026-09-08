import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "@/data/products";

const SITE_URL = "https://ait-ventas.vercel.app";
const pages: Record<string, [string, string]> = {
  "/": ["AIT Soluciones | Instrumentación y Automatización Industrial en Colombia", "Equipos de instrumentación, automatización y control industrial en Colombia: PLC, transmisores, válvulas y variadores."],
  "/tienda": ["Tienda de Instrumentación y Automatización Industrial | AIT", "Catálogo de PLC, transmisores, variadores, válvulas y equipos industriales en Colombia."],
  "/servicios": ["Servicios de Instrumentación y Automatización Industrial | AIT", "Servicios técnicos de instrumentación, automatización, soporte y puesta en marcha industrial."],
  "/sobre-nosotros": ["Sobre AIT Soluciones | Ingeniería e Instrumentación Industrial", "Experiencia en instrumentación, automatización y equipos para procesos industriales en Colombia."],
  "/contacto": ["Contacto y Cotizaciones | AIT Soluciones Industriales", "Solicite cotización o asesoría técnica para equipos de instrumentación y automatización industrial."]
};

export function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const product = pathname.startsWith("/tienda/") ? products.find(p => p.sku === decodeURIComponent(pathname.split("/").pop() || "")) : undefined;
    const [title, description] = product
      ? [`${product.name} | ${product.brand} | AIT Soluciones`, `${product.description} Consulte disponibilidad y cotización en Colombia.`]
      : pages[pathname] || pages["/"];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", SITE_URL + pathname);
  }, [pathname]);
  return null;
}