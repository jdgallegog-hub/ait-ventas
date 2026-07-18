import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { formatCOP } from "@/data/products";

type Quote = {
  id: string;
  status: string;
  notes: string | null;
  created_at: string;
  submitted_at: string | null;
  quote_items: { id: string; sku: string; name: string; brand: string | null; price: number; qty: number }[];
};

const MiCuenta = () => {
  const { user, loading, signOut } = useAuth();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("quotes")
        .select("id,status,notes,created_at,submitted_at,quote_items(id,sku,name,brand,price,qty)")
        .order("created_at", { ascending: false });
      setQuotes((data as any) ?? []);
      setBusy(false);
    })();
  }, [user]);

  if (loading) return <section className="min-h-[60vh] flex items-center justify-center">Cargando…</section>;
  if (!user) return <Navigate to="/auth?next=/mi-cuenta" replace />;

  return (
    <section className="py-20 lg:py-28">
      <div className="container max-w-4xl">
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">✽ Mi cuenta</div>
            <h1 className="text-4xl lg:text-5xl font-bold mt-2">Hola, {user.email}</h1>
            <p className="text-muted-foreground mt-2">
              Tus cotizaciones y solicitudes. También accesibles desde ChatGPT / Claude vía integraciones MCP.
            </p>
          </div>
          <Button variant="outlineGlow" onClick={signOut}>Salir</Button>
        </div>

        <h2 className="text-xl font-bold mb-4">Cotizaciones</h2>
        {busy ? (
          <p className="text-muted-foreground">Cargando…</p>
        ) : quotes.length === 0 ? (
          <div className="p-8 border border-border rounded-sm text-center">
            <p className="text-muted-foreground mb-4">Aún no tienes cotizaciones guardadas.</p>
            <Button asChild variant="hero"><Link to="/tienda">Ir a la tienda</Link></Button>
          </div>
        ) : (
          <ul className="space-y-4">
            {quotes.map((q) => {
              const total = q.quote_items.reduce((s, i) => s + i.price * i.qty, 0);
              return (
                <li key={q.id} className="p-6 border border-border rounded-sm bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {new Date(q.created_at).toLocaleString()} · <span className="text-primary">{q.status}</span>
                    </div>
                    <div className="font-mono font-bold text-gradient-amber">{formatCOP(total)}</div>
                  </div>
                  <ul className="text-sm space-y-1">
                    {q.quote_items.map((i) => (
                      <li key={i.id} className="flex justify-between">
                        <span>{i.qty} × {i.name} <span className="text-muted-foreground">({i.sku})</span></span>
                        <span className="font-mono">{formatCOP(i.price * i.qty)}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MiCuenta;
