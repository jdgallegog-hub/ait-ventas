import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "../../../data/products";

export default defineTool({
  name: "get_product",
  title: "Detalle de producto",
  description: "Obtiene el detalle completo de un producto por ID o SKU.",
  inputSchema: { idOrSku: z.string().min(1) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ idOrSku }) => {
    const p = products.find(
      (x) => x.id === idOrSku || x.sku.toLowerCase() === idOrSku.toLowerCase()
    );
    if (!p) return { content: [{ type: "text", text: "No encontrado" }], isError: true };
    return { content: [{ type: "text", text: JSON.stringify(p, null, 2) }] };
  },
});
