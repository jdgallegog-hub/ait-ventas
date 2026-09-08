import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Clock, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type QuoteForm = { name: string; company: string; email: string; phone: string; topic: string; message: string };
const emptyForm: QuoteForm = { name: "", company: "", email: "", phone: "", topic: "", message: "" };

const Contacto = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<QuoteForm>(() => {
    const productName = searchParams.get("name");
    const category = searchParams.get("category");
    return { ...emptyForm, topic: category || "", message: productName ? `Me interesa cotizar: ${productName}.\n\nCantidad requerida:\nAplicación / proceso:\nFecha requerida:\nRequerimiento adicional:` : "" };
  });
  const [sending, setSending] = useState(false);
  const updateField = (field: keyof QuoteForm, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const honeypot = event.currentTarget.elements.namedItem("website") as HTMLInputElement | null;
    if (honeypot?.value) return;
    const normalizedForm = { name: form.name.trim(), company: form.company.trim(), email: form.email.trim().toLowerCase(), phone: form.phone.trim(), topic: form.topic.trim(), message: form.message.trim() };
    if (normalizedForm.name.length < 2 || normalizedForm.company.length < 2 || normalizedForm.email.length < 5 || normalizedForm.phone.length < 7 || normalizedForm.topic.length < 2 || normalizedForm.message.length < 10) {
      toast({ title: "Revisa la información", description: "Completa los campos requeridos con información válida antes de enviar la solicitud.", variant: "destructive" });
      return;
    }
    setSending(true);
    if (!supabase) {
      setSending(false);
      toast({ title: "Formulario temporalmente no disponible", description: "Escríbanos directamente por WhatsApp para agilizar su requerimiento.", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("contact_requests").insert(normalizedForm);
    setSending(false);
    if (error) {
      toast({ title: "No pudimos registrar la solicitud", description: "Escríbanos directamente por WhatsApp o intente nuevamente en unos minutos.", variant: "destructive" });
      return;
    }
    toast({ title: "Solicitud recibida", description: "Revisaremos su requerimiento y le responderemos en menos de 24 horas hábiles." });
    setForm(emptyForm);
  };

  const channels = [
    { icon: Phone, label: "Teléfono comercial", value: "+57 300 574 7839", href: "tel:+573005747839" },
    { icon: MessageCircle, label: "WhatsApp comercial", value: "Enviar referencia o foto de placa", href: "https://wa.me/573005747839" },
    { icon: MapPin, label: "Ubicación", value: "Bogotá, Colombia · Atención nacional" },
    { icon: Clock, label: "Horario comercial", value: "Lun–Vie · 7:00–18:00" },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 pb-14 pt-24 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 grid-pattern opacity-40" /><div className="absolute -left-40 -top-48 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative max-w-6xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-primary"><span className="h-px w-10 bg-primary" />Cotización técnica · Respuesta en 24h</div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] lg:text-7xl">Hablemos de su <span className="text-gradient-amber">requerimiento industrial.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Envíenos el modelo, la marca, una fotografía de la placa de datos o una descripción del equipo. No necesita conocer la referencia exacta: le ayudamos a identificarla y a encontrar la solución adecuada.</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-muted-foreground"><span className="rounded-full border border-border/70 bg-card/60 px-4 py-2">✓ Equipos y repuestos</span><span className="rounded-full border border-border/70 bg-card/60 px-4 py-2">✓ Instrumentación y válvulas</span><span className="rounded-full border border-border/70 bg-card/60 px-4 py-2">✓ Automatización y servicio técnico</span></div>
        </div>
      </section>

      <section className="py-14 lg:py-20"><div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border/80 bg-card/90 p-6 shadow-card sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-border/70 pb-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Send className="h-5 w-5" /></span><div><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Solicitud B2B</span><h2 className="mt-1 text-2xl font-semibold">Solicitar cotización técnica</h2></div></div><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Mientras más datos incluya, más rápido podremos validar referencia, compatibilidad, cantidad y disponibilidad.</p></div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="name">Nombre *</Label><Input id="name" name="name" required maxLength={120} autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Nombre y apellido" /></div>
            <div className="space-y-2"><Label htmlFor="company">Empresa *</Label><Input id="company" name="company" required maxLength={160} autoComplete="organization" value={form.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Empresa / organización" /></div>
            <div className="space-y-2"><Label htmlFor="email">Correo corporativo *</Label><Input id="email" name="email" type="email" required maxLength={254} autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="ingenieria@empresa.com" /></div>
            <div className="space-y-2"><Label htmlFor="phone">Teléfono / WhatsApp *</Label><Input id="phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+57 300 000 0000" /></div>
          </div>
          <div className="mt-5 space-y-2"><Label htmlFor="topic">Tipo de requerimiento *</Label><select id="topic" name="topic" value={form.topic} onChange={(event) => updateField("topic", event.target.value)} className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required><option value="" disabled>Seleccione una categoría</option><option value="PLC">PLC y control</option><option value="Variadores">Variadores y arranque</option><option value="Transmisores">Transmisores</option><option value="Instrumentación">Instrumentación de campo</option><option value="Válvulas">Válvulas de control</option><option value="Motores">Motores</option><option value="Comunicaciones">Comunicaciones industriales</option><option value="Calibración">Calibración / mantenimiento</option><option value="Otro">Otro requerimiento</option></select></div>
          <div className="mt-5 space-y-2"><Label htmlFor="message">Requerimiento *</Label><Textarea id="message" name="message" rows={7} required minLength={10} maxLength={4000} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Marca / modelo o referencia, cantidad, aplicación, fecha requerida y cualquier dato técnico disponible..." /></div>
          <Button type="submit" variant="hero" size="lg" className="mt-7 w-full" disabled={sending}>{sending ? "Registrando solicitud..." : <>Solicitar cotización <Send /></>}</Button>
          <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Sus datos se utilizarán exclusivamente para atender esta solicitud comercial.</p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-primary/25 bg-gradient-steel p-7 shadow-card sm:p-8"><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">¿Tiene una referencia crítica?</span><h2 className="mt-3 text-3xl font-bold">Envíenos una foto y la identificamos.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Si el equipo está instalado o la placa de datos es lo único que tiene, puede enviarnos una fotografía por WhatsApp. Le ayudamos a identificar la referencia y a buscar disponibilidad o equivalente.</p><Button asChild variant="hero" className="mt-7"><a href="https://wa.me/573005747839" target="_blank" rel="noopener noreferrer"><MessageCircle />Enviar por WhatsApp</a></Button></div>
          <div className="space-y-3">{channels.map(({ icon: Icon, label, value, href }) => { const content = <><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></div><div><span className="block text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">{label}</span><span className="mt-1 block text-sm font-semibold text-foreground">{value}</span></div></>; return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 p-5 transition-colors hover:border-primary/50">{content}</a> : <div key={label} className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 p-5">{content}</div>; })}</div>
        </aside>
      </div></section>
    </>
  );
};

export default Contacto;
