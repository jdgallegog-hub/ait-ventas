import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/context/AuthContext";

const safeNext = (raw: string | null) => {
  if (!raw) return "/mi-cuenta";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/mi-cuenta";
  return raw;
};

const Auth = () => {
  const [params] = useSearchParams();
  const nav = useNavigate();
  const { session } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const next = safeNext(params.get("next"));

  useEffect(() => {
    if (session) nav(next, { replace: true });
  }, [session, next, nav]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const redirect = `${window.location.origin}${next}`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: redirect, data: { display_name: name } },
        });
        if (error) throw error;
        toast({ title: "Cuenta creada", description: "Ya puedes iniciar sesión." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (e: any) {
      toast({ title: "Error", description: e.message ?? String(e), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}${next}`,
    });
    if (result.error) {
      toast({ title: "Google", description: String((result.error as any).message ?? result.error), variant: "destructive" });
      setBusy(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="w-full max-w-md p-8 rounded-sm border border-border bg-card shadow-card">
        <div className="text-xs font-mono uppercase tracking-widest text-primary">✽ Cuenta</div>
        <h1 className="text-3xl font-bold mt-2 mb-6">
          {mode === "signin" ? "Iniciar sesión" : "Crear cuenta"}
        </h1>

        <Button variant="outlineGlow" className="w-full mb-4" onClick={onGoogle} disabled={busy}>
          Continuar con Google
        </Button>
        <div className="flex items-center gap-3 my-4 text-xs font-mono text-muted-foreground">
          <div className="h-px flex-1 bg-border" /> o <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Correo</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={busy}>
            {busy ? "Procesando..." : mode === "signin" ? "Entrar" : "Crear cuenta"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground w-full text-center"
        >
          {mode === "signin" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
        <div className="text-center mt-4">
          <Link to="/" className="text-xs font-mono text-muted-foreground hover:text-primary">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Auth;
