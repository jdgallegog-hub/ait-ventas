import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

// Beta namespace shim: `supabase.auth.oauth` is not in the current typings.
type OAuthAny = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};
const oauth = ((supabase.auth as any).oauth as OAuthAny | undefined);

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) { setError("Falta authorization_id"); return; }
      if (!oauth) { setError("El servidor OAuth no está disponible en este cliente."); return; }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) { setError(error.message ?? String(error)); return; }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) { window.location.href = immediate; return; }
      setDetails(data);
    })();
    return () => { active = false; };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    if (!oauth) return;
    setBusy(true);
    const fn = approve ? oauth.approveAuthorization : oauth.denyAuthorization;
    const { data, error } = await fn(authorizationId);
    if (error) { setError(error.message ?? String(error)); setBusy(false); return; }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) { setError("El servidor de autorización no devolvió URL de redirección."); setBusy(false); return; }
    window.location.href = target;
  };

  if (error) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="max-w-md p-8 border border-destructive/40 rounded-sm bg-card">
          <h1 className="text-xl font-bold mb-2">No pudimos cargar la autorización</h1>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </section>
    );
  }
  if (!details) {
    return <section className="min-h-[70vh] flex items-center justify-center">Cargando…</section>;
  }

  const clientName = details.client?.name ?? "una aplicación externa";
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="w-full max-w-lg p-8 rounded-sm border border-border bg-card shadow-card">
        <div className="text-xs font-mono uppercase tracking-widest text-primary">✽ Autorización</div>
        <h1 className="text-2xl font-bold mt-2 mb-4">
          Conectar <span className="text-gradient-amber">{clientName}</span> a tu cuenta AIT
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          {clientName} podrá usar las herramientas de esta tienda actuando como tú
          (ver catálogo, gestionar tu cotización). No obtiene tu contraseña y puedes
          revocar el acceso cuando quieras.
        </p>
        <div className="text-xs font-mono text-muted-foreground mb-6">
          Esto no salta las políticas de acceso de la aplicación.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outlineGlow" disabled={busy} onClick={() => decide(false)}>
            Cancelar
          </Button>
          <Button variant="hero" disabled={busy} onClick={() => decide(true)}>
            {busy ? "Procesando..." : "Aprobar"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OAuthConsent;
