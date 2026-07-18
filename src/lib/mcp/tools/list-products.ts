import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/data/products";

export default defineTool({
  name: "list_products",
  title: "Listar productos",
  description: "Lista todos los productos del catálogo AIT (opcionalmente filtrados por categoría o marca).",
  inputSchema: {
    category: z.string().optional().describe("Categoría: PLC, Válvulas, Transmisores, HMI, etc."),
    brand: z.string().optional().describe("Marca: Siemens, Fisher, Rosemount, Allen-Bradley, etc."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, brand }) => {
    const list = products.filter(
      (p) =>
        (!category || p.category.toLowerCase().includes(category.toLowerCase())) &&
        (!brand || p.brand.toLowerCase().includes(brand.toLowerCase()))
    );
    return {
      content: [{ type: "text", text: JSON.stringify(list.map(({ id, name, brand, sku, price, category }) => ({ id, name, brand, sku, price, category })), null, 2) }],
    };
  },
});
