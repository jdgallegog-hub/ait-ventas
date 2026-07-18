import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "./_supabase";

export default defineTool({
  name: "remove_from_my_quote",
  title: "Quitar de mi cotización",
  description: "Elimina un ítem (por SKU) de la cotización draft del usuario.",
  inputSchema: { sku: z.string().min(1) },
  annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: false },
  handler: async ({ sku }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "No autenticado" }], isError: true };
    const sb = supabaseForUser(ctx);
    const { data: q } = await sb
      .from("quotes")
      .select("id")
      .eq("user_id", ctx.getUserId())
      .eq("status", "draft")
      .maybeSingle();
    if (!q) return { content: [{ type: "text", text: "No hay cotización activa" }] };
    const { error } = await sb.from("quote_items").delete().eq("quote_id", q.id).eq("sku", sku);
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return { content: [{ type: "text", text: `Eliminado ${sku}` }] };
  },
});
