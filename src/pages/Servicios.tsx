import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Wrench, Cpu, Settings, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Gauge,
    title: "Válvulas de Control",
    desc: "Suministro, montaje, calibración y mantenimiento de válvulas Fisher, Samson y Kimray. Diagnóstico de actuadores neumáticos y posicionadores inteligentes.",
    items: ["Fisher DVC6200", "Samson 3730", "Kimray Back Pressure", "Reparación in situ"],
  },
  {
    icon: Cpu,
    title: "Automatización y Control",
    desc: "Diseño, integración y puesta en marcha de sistemas PLC y DCS Siemens. Migraciones tecnológicas y arquitecturas redundantes para procesos críticos.",
    items: ["Siemens SIMATIC S7-1500", "PCS 7", "WinCC SCADA", "PROFINET / PROFIBUS"],
  },
  {
    icon: Settings,
    title: "Instrumentación de Campo",
    desc: "Selección, suministro y calibración de transmisores de presión, temperatura, nivel y flujo. Trazabilidad completa con patrones ONAC.",
    items: ["Rosemount", "Endress+Hauser", "Yokogawa", "Calibración acreditada"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    desc: "Planes de mantenimiento basados en criticidad y confiabilidad (RCM). Reducimos paradas no programadas y extendemos la vida útil de sus activos.",
    items: ["RCM / FMEA", "Termografía", "Análisis de vibraciones", "Reportes digitales"],
  },
  {
    icon: ShieldCheck,
    title: "Sistemas Instrumentados de Seguridad",
    desc: "Implementación de SIS conforme a IEC 61511. Estudios SIL, validación funcional y mantenimiento de funciones de seguridad.",
    items: ["IEC 61508 / 61511", "Estudios SIL", "Pruebas Proof Test", "F&G Systems"],
  },
  {
    icon: BarChart3,
    title: "Optimización de Procesos",
    desc: "Sintonización avanzada de lazos de control, auditorías de desempeño y consultoría para maximizar OEE y reducir consumo energético.",
    items: ["Loop Tuning", "APC", "KPI Industrial", "Eficiencia energética"],
  },
];

const Servicios = () => (
  <>
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container relative">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">
          ✽ Servicios
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6 max-w-4xl leading-[1.05]">
          Soluciones de ingeniería para la{" "}
          <span className="text-gradient-amber">industria de procesos</span>.
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl">
          Del suministro técnico al servicio de campo: cubrimos todo el ciclo
          de vida de la instrumentación y el control en su planta.
        </p>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-background p-10 lg:p-12 hover:bg-card transition-smooth group"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="h-14 w-14 rounded-sm bg-secondary border border-border flex items-center justify-center group-hover:bg-gradient-amber group-hover:border-transparent transition-smooth shrink-0">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  {s.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm border border-border bg-secondary/50 text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 border-t border-border/60 bg-secondary/30">
      <div className="container text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          ¿No encuentra el servicio que necesita?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Diseñamos soluciones a la medida de sus procesos críticos.
        </p>
        <Button asChild variant="hero" size="xl">
          <Link to="/contacto">
            Hablar con un ingeniero
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default Servicios;
