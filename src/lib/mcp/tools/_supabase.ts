import { createClient } from "@supabase/supabase-js";
import type { ToolContext } from "@lovable.dev/mcp-js";

export function supabaseForUser(ctx: ToolContext) {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY!;
  return createClient(url, key, {
    global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function getOrCreateDraft(ctx: ToolContext) {
  const sb = supabaseForUser(ctx);
  const userId = ctx.getUserId();
  const { data: existing } = await sb
    .from("quotes")
    .select("id")
    .eq("user_id", userId)
    .eq("status", "draft")
    .maybeSingle();
  if (existing) return { sb, quoteId: existing.id as string, userId };
  const { data: created, error } = await sb
    .from("quotes")
    .insert({ user_id: userId, status: "draft" })
    .select("id")
    .single();
  if (error) throw error;
  return { sb, quoteId: created.id as string, userId };
}
