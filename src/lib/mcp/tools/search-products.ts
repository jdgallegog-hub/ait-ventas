import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/data/products";

export default defineTool({
  name: "search_products",
  title: "Buscar productos",
  description: "Busca productos por texto libre (nombre, marca, SKU o descripción).",
  inputSchema: { query: z.string().min(1).describe("Texto de búsqueda") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query.toLowerCase();
    const hits = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    return { content: [{ type: "text", text: JSON.stringify(hits, null, 2) }] };
  },
});
