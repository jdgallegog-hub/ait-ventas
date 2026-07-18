import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "../../../data/products";
import { getOrCreateDraft } from "./_supabase";

export default defineTool({
  name: "add_to_my_quote",
  title: "Agregar a mi cotización",
  description: "Agrega un producto (por ID o SKU) a la cotización del usuario autenticado.",
  inputSchema: {
    idOrSku: z.string().min(1),
    qty: z.number().int().min(1).max(999).default(1),
  },
  annotations: { readOnlyHint: false, openWorldHint: false },
  handler: async ({ idOrSku, qty }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "No autenticado" }], isError: true };
    const p = products.find((x) => x.id === idOrSku || x.sku.toLowerCase() === idOrSku.toLowerCase());
    if (!p) return { content: [{ type: "text", text: "Producto no encontrado" }], isError: true };
    const { sb, quoteId, userId } = await getOrCreateDraft(ctx);
    const { data: existing } = await sb
      .from("quote_items")
      .select("id,qty")
      .eq("quote_id", quoteId)
      .eq("sku", p.sku)
      .maybeSingle();
    if (existing) {
      const newQty = Math.min(999, existing.qty + qty);
      const { error } = await sb.from("quote_items").update({ qty: newQty }).eq("id", existing.id);
      if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    } else {
      const { error } = await sb.from("quote_items").insert({
        quote_id: quoteId,
        user_id: userId,
        sku: p.sku,
        name: p.name,
        brand: p.brand,
        price: p.price,
        qty,
        image: p.image,
      });
      if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return { content: [{ type: "text", text: `Agregado: ${qty} × ${p.name} (${p.sku})` }] };
  },
});
