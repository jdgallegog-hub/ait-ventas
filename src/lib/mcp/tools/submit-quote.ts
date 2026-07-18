import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "./_supabase";

export default defineTool({
  name: "submit_my_quote",
  title: "Enviar cotización",
  description: "Marca la cotización draft actual como enviada. Un asesor de AIT contactará al usuario.",
  inputSchema: { notes: z.string().max(2000).optional() },
  annotations: { readOnlyHint: false, openWorldHint: false },
  handler: async ({ notes }, ctx) => {
    if (!ctx.isAuthenticated())
      return { content: [{ type: "text", text: "No autenticado" }], isError: true };
    const sb = supabaseForUser(ctx);
    const { data: q } = await sb
      .from("quotes")
      .select("id, quote_items(id)")
      .eq("user_id", ctx.getUserId())
      .eq("status", "draft")
      .maybeSingle();
    if (!q || !q.quote_items?.length)
      return { content: [{ type: "text", text: "La cotización está vacía" }], isError: true };
    const { error } = await sb
      .from("quotes")
      .update({ status: "submitted", submitted_at: new Date().toISOString(), notes: notes ?? null })
      .eq("id", q.id);
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return { content: [{ type: "text", text: "Cotización enviada. Un asesor te contactará pronto." }] };
  },
});
