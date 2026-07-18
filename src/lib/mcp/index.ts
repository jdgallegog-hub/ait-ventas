import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listProductsTool from "./tools/list-products";
import searchProductsTool from "./tools/search-products";
import getProductTool from "./tools/get-product";
import listMyQuoteTool from "./tools/list-my-quote";
import addToQuoteTool from "./tools/add-to-quote";
import removeFromQuoteTool from "./tools/remove-from-quote";
import submitQuoteTool from "./tools/submit-quote";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "ait-ventas-mcp",
  title: "AIT Ventas Industriales",
  version: "0.1.0",
  instructions:
    "Herramientas de la tienda AIT Soluciones Automáticas. Permite consultar el catálogo industrial (válvulas, PLC, transmisores, HMI) y gestionar la cotización personal del usuario autenticado (agregar productos, revisar, enviar).",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listProductsTool,
    searchProductsTool,
    getProductTool,
    listMyQuoteTool,
    addToQuoteTool,
    removeFromQuoteTool,
    submitQuoteTool,
  ],
});
