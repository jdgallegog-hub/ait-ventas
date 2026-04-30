import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Wrench, Cpu, ShieldCheck, Zap, Activity, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-industrial.jpg";
import valvesImg from "@/assets/service-valves.jpg";
import supportImg from "@/assets/service-support.jpg";
import automationImg from "@/assets/service-automation.jpg";
import sectorsBg from "@/assets/sectors-bg.jpg";

const brands = ["SIEMENS", "FISHER", "SAMSON", "KIMRAY", "EMERSON", "ROSEMOUNT", "ENDRESS+HAUSER", "YOKOGAWA"];

const services = [
  {
    icon: Gauge,
    title: "Válvulas de Control",
    desc: "Suministro, intervención y calibración de válvulas Fisher, Samson y Kimray con trazabilidad completa.",
    img: valvesImg,
  },
  {
    icon: Wrench,
    title: "Soporte Técnico en Sitio",
    desc: "Asistencia especializada en campo 24/7. Diagnóstico rápido para minimizar paradas no programadas.",
    img: supportImg,
  },
  {
    icon: Cpu,
    title: "Automatización Industrial",
    desc: "Integración y programación de PLC, DCS y SCADA con tecnología Siemens y arquitecturas redundantes.",
    img: automationImg,
  },
];

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "200+", label: "Plantas atendidas" },
  { value: "<4h", label: "Tiempo de respuesta" },
  { value: "99.7%", label: "Disponibilidad operativa" },
];

const sectors = [
  { name: "Petróleo y Gas", desc: "Upstream, midstream y downstream." },
  { name: "Petroquímica", desc: "Refinerías y plantas de procesamiento." },
  { name: "Energía Eléctrica", desc: "Generación térmica e hidroeléctrica." },
  { name: "Alimentos y Bebidas", desc: "Procesos sanitarios FDA / 3-A." },
  { name: "Cemento y Minería", desc: "Procesos de alta exigencia." },
  { name: "Tratamiento de Agua", desc: "PTAP y PTAR municipales e industriales." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sala de control industrial con instrumentación Siemens y válvulas de control en planta de procesamiento"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-glow" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Operación · Continuidad · Confiabilidad
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Ingeniería crítica para la{" "}
              <span className="text-gradient-amber">continuidad</span> de su planta.
            </h1>

            <p className="text-lg lg:text-xl text-foreground/80 max-w-2xl mb-10 leading-relaxed">
              Especialistas en instrumentación, válvulas de control y automatización
              industrial. Representamos las marcas líderes del sector —{" "}
              <span className="text-foreground font-medium">Siemens, Fisher y Samson</span> —
              con servicio técnico certificado en sitio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contacto">
                  Solicitar diagnóstico
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineGlow" size="xl">
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>

            <a
              href="https://aitsolucionesautomaticas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-glow transition-smooth group"
            >
              <span className="h-px w-8 bg-primary group-hover:w-12 transition-all" />
              Visite nuestro sitio corporativo · aitsolucionesautomaticas.com
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-amber font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* BRAND MARQUEE */}
      <section className="border-y border-border/60 bg-secondary/40 py-8 overflow-hidden">
        <div className="container mb-6 flex items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Marcas que representamos
          </span>
          <span className="hidden sm:block h-px flex-1 bg-border" />
          <span className="text-xs font-mono text-muted-foreground">
            Distribuidor autorizado
          </span>
        </div>
        <div className="relative">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="text-2xl lg:text-3xl font-bold tracking-widest text-muted-foreground/60 hover:text-primary transition-smooth"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              ✽ Qué hacemos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Tres pilares para mantener su planta operando.
            </h2>
            <p className="text-lg text-muted-foreground">
              Combinamos ingeniería de campo, suministro técnico y soporte 24/7
              para garantizar la confiabilidad de sus procesos críticos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-card hover:shadow-amber transition-smooth"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-8 -mt-20 relative">
                  <div className="h-12 w-12 rounded-sm bg-gradient-amber flex items-center justify-center mb-5 shadow-amber">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-secondary/30 border-y border-border/60">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              ✽ Por qué AIT
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Compromiso con la eficiencia y la seguridad industrial.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada intervención se ejecuta bajo estándares internacionales,
              con trazabilidad completa y respaldo documental para auditorías.
            </p>
            <ul className="space-y-4">
              {[
                "Ingenieros certificados Siemens, Fisher y Samson",
                "Calibración con patrones trazables a ONAC",
                "Restauración de válvulas con repuestos OEM y pruebas certificadas",
                "Garantía extendida en repuestos OEM",
                "Reportes técnicos digitales en 24 horas",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "Restauración de Válvulas", val: "OEM" },
              { icon: Zap, label: "Disponibilidad", val: "24/7" },
              { icon: Activity, label: "Calibración", val: "ONAC" },
              { icon: Gauge, label: "Performance", val: "Élite" },
            ].map((b) => (
              <div
                key={b.label}
                className="p-8 rounded-sm border border-border bg-card hover:border-primary/40 transition-smooth"
              >
                <b.icon className="h-8 w-8 text-primary mb-4" />
                <div className="text-2xl font-bold font-mono text-gradient-amber">
                  {b.val}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sectorsBg}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              ✽ Sectores que atendemos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Donde la operación no puede detenerse.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="bg-background p-8 hover:bg-card transition-smooth group"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-smooth" />
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm border border-primary/30 bg-gradient-steel p-12 lg:p-20">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                ¿Su planta requiere una{" "}
                <span className="text-gradient-amber">intervención crítica</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
                Programe una visita técnica con nuestros ingenieros. Diagnóstico
                inicial sin costo y propuesta en menos de 48 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contacto">
                    Solicitar diagnóstico
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outlineGlow" size="xl">
                  <a href="tel:+573005747839">Llamar ahora · +57 300 574 7839</a>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border/60">
                <a
                  href="https://aitsolucionesautomaticas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base font-mono text-primary hover:text-primary-glow transition-smooth"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                  Conozca más en aitsolucionesautomaticas.com
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
