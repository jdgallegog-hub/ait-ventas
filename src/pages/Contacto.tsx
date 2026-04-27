import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contacto = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Solicitud enviada",
        description: "Un ingeniero se pondrá en contacto en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container relative max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            ✽ Contacto
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6 leading-[1.05]">
            Hablemos de su <span className="text-gradient-amber">proyecto</span>.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Cuéntenos su requerimiento técnico. Un ingeniero especializado lo
            contactará en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-5 gap-12">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 lg:p-12 rounded-sm border border-border bg-card shadow-card space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required placeholder="Juan Pérez" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" required placeholder="Su compañía" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">Correo corporativo</Label>
                <Input id="email" type="email" required placeholder="ingenieria@empresa.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" required placeholder="+57 300 000 0000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">Tema de interés</Label>
              <select
                id="topic"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
                required
              >
                <option value="" disabled>Seleccione un servicio</option>
                <option>Válvulas de Control</option>
                <option>Automatización y PLC</option>
                <option>Instrumentación de Campo</option>
                <option>Mantenimiento Preventivo</option>
                <option>Sistemas Instrumentados de Seguridad</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Describa su requerimiento</Label>
              <Textarea
                id="message"
                rows={5}
                required
                placeholder="Tipo de planta, marca/modelo de equipo, criticidad, plazos..."
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
              {sending ? "Enviando..." : (
                <>
                  Enviar solicitud
                  <Send />
                </>
              )}
            </Button>

            <p className="text-xs font-mono text-muted-foreground text-center">
              Respuesta garantizada en menos de 24 horas hábiles.
            </p>
          </form>

          {/* INFO */}
          <aside className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                label: "Teléfono directo",
                value: "+57 300 574 7839",
                href: "tel:+573005747839",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp 24/7",
                value: "Chat con ingeniero",
                href: "https://wa.me/573005747839",
              },
              {
                icon: Mail,
                label: "Correo comercial",
                value: "ventas@aitsoluciones.com",
                href: "mailto:ventas@aitsoluciones.com",
              },
              {
                icon: MapPin,
                label: "Oficina principal",
                value: "Bogotá, Colombia",
              },
              {
                icon: Clock,
                label: "Horario de atención",
                value: "Lun – Vie · 7:00 – 18:00 · Emergencias 24/7",
              },
            ].map((c) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className="flex items-start gap-4 p-6 rounded-sm border border-border bg-card hover:border-primary/40 transition-smooth group"
                >
                  <div className="h-11 w-11 rounded-sm bg-secondary border border-border flex items-center justify-center group-hover:bg-gradient-amber group-hover:border-transparent transition-smooth shrink-0">
                    <c.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      {c.label}
                    </div>
                    <div className="font-semibold text-foreground">{c.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contacto;
