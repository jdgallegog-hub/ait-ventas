import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type QuoteForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const emptyForm: QuoteForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const Contacto = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<QuoteForm>(() => {
    const productName = searchParams.get("name");
    const category = searchParams.get("category");
    return {
      ...emptyForm,
      topic: category || "",
      message: productName ? `Me interesa cotizar: ${productName}.\n\nRequerimiento adicional:` : "",
    };
  });
  const [sending, setSending] = useState(false);

  const updateField = (field: keyof QuoteForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    const { error } = await supabase.from("contact_requests").insert({
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      topic: form.topic,
      message: form.message.trim(),
    });

    setSending(false);

    if (error) {
      toast({
        title: "No pudimos registrar la solicitud",
        description: "Escríbanos directamente por WhatsApp o intente nuevamente en unos minutos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Solicitud recibida",
      description: "Un ingeniero revisará su requerimiento y le responderá en menos de 24 horas hábiles.",
    });
    setForm(emptyForm);
  };

  const channels = [
    { icon: Phone, label: "Teléfono directo", value: "+57 300 574 7839", href: "tel:+573005747839" },
    { icon: MessageCircle, label: "WhatsApp 24/7", value: "Chat con un ingeniero", href: "https://wa.me/573005747839" },
    { icon: Mail, label: "Correo comercial", value: "operaciones@aitsolucionesautomaticas.com", href: "mailto:operaciones@aitsolucionesautomaticas.com" },
    { icon: MapPin, label: "Cobertura", value: "Bogotá · Colombia · Atención nacional" },
    { icon: Clock, label: "Horario de atención", value: "Lun – Vie · 7:00 – 18:00 · Emergencias 24/7" },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 pb-14 pt-24 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -left-40 -top-48 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative max-w-6xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Ingeniería comercial · Respuesta en 24h
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] lg:text-7xl">
            Hablemos de su <span className="text-gradient-amber">próximo proyecto.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Envíenos el modelo, la marca o una descripción del equipo. Nuestro equipo técnico le ayudará a validar la referencia y encontrar la solución adecuada.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border/80 bg-card/90 p-6 shadow-card sm:p-8 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-6 border-b border-border/70 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Solicitud de cotización</span>
                <h2 className="mt-2 text-2xl font-semibold">Cuéntenos qué necesita</h2>
              </div>
              <Send className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Nombre</Label><Input id="name" name="name" required autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Juan Pérez" /></div>
              <div className="space-y-2"><Label htmlFor="company">Empresa</Label><Input id="company" name="company" required autoComplete="organization" value={form.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Su compañía" /></div>
              <div className="space-y-2"><Label htmlFor="email">Correo corporativo</Label><Input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="ingenieria@empresa.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Teléfono</Label><Input id="phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+57 300 000 0000" /></div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="topic">Tema de interés</Label>
              <select id="topic" name="topic" value={form.topic} onChange={(event) => updateField("topic", event.target.value)} className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required>
                <option value="" disabled>Seleccione una categoría</option>
                <option value="PLC">PLC y control</option>
                <option value="HMI">HMI y visualización</option>
                <option value="Variadores">Variadores y arranque</option>
                <option value="Transmisores">Transmisores</option>
                <option value="Instrumentación">Instrumentación de campo</option>
                <option value="Válvulas">Válvulas de control</option>
                <option value="Motores">Motores</option>
                <option value="Comunicaciones">Comunicaciones industriales</option>
                <option value="Otro">Otro requerimiento</option>
              </select>
            </div>

            <div className="mt-5 space-y-2"><Label htmlFor="message">Describa su requerimiento</Label><Textarea id="message" name="message" rows={6} required value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tipo de planta, marca/modelo, cantidad, criticidad y fecha requerida..." /></div>

            <Button type="submit" variant="hero" size="lg" className="mt-7 w-full" disabled={sending}>
              {sending ? "Registrando solicitud..." : <>Enviar solicitud <Send /></>}
            </Button>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">Sus datos se utilizarán exclusivamente para responder esta solicitud comercial.</p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-primary/25 bg-gradient-steel p-7 shadow-card sm:p-8">
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">¿Necesita respuesta inmediata?</span>
              <h2 className="mt-3 text-3xl font-bold">Hable directamente con un ingeniero.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Para equipos críticos, envíe una fotografía o placa de datos por WhatsApp y agilizamos la identificación.</p>
              <Button asChild variant="hero" className="mt-7"><a href="https://wa.me/573005747839" target="_blank" rel="noopener noreferrer"><MessageCircle />Abrir WhatsApp</a></Button>
            </div>
            <div className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const content = <><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></div><div><span className="block text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">{label}</span><span className="mt-1 block text-sm font-semibold text-foreground">{value}</span></div></>;
                return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 p-5 transition-colors hover:border-primary/50">{content}</a> : <div key={label} className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 p-5">{content}</div>;
              })}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contacto;
