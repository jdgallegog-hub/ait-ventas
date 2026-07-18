import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "./_supabase";

export default defineTool({
  name: "list_my_quote",
  title: "Ver mi cotización",
  description: "Lista los ítems actuales del carrito de cotización del usuario autenticado.",
  inputSchema: {},
  annotations: { readOnlyHint: true, openWorldHint: false },
  handler: async (_input, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "No autenticado" }], isError: true };
    const sb = supabaseForUser(ctx);
    const { data, error } = await sb
      .from("quotes")
      .select("id,status,created_at,quote_items(id,sku,name,brand,price,qty)")
      .eq("user_id", ctx.getUserId())
      .eq("status", "draft")
      .maybeSingle();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return { content: [{ type: "text", text: JSON.stringify(data ?? { items: [] }, null, 2) }] };
  },
});
