import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Wrench, Cpu, Settings, ShieldCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Gauge, title: "Calibración y diagnóstico de instrumentación", desc: "Revisión, calibración y diagnóstico de instrumentos de presión, temperatura, nivel, flujo y otras variables, de acuerdo con el alcance y las condiciones del servicio.", items: ["Transmisores", "Manómetros", "Temperatura", "Diagnóstico"] },
  { icon: Cpu, title: "Automatización y control", desc: "Soporte para PLC, HMI, variadores y sistemas de comunicación industrial, incluyendo configuración, diagnóstico y puesta en marcha según el proyecto.", items: ["PLC", "HMI / SCADA", "HART", "Modbus"] },
  { icon: Settings, title: "Instrumentación de campo", desc: "Selección, suministro e identificación de transmisores y equipos de medición para presión, temperatura, nivel y flujo.", items: ["Presión", "Temperatura", "Nivel", "Flujo"] },
  { icon: Wrench, title: "Válvulas de control y actuadores", desc: "Inspección, diagnóstico, mantenimiento y soporte de válvulas de control, actuadores, posicionadores y accesorios de acuerdo con la aplicación.", items: ["Válvulas", "Actuadores", "Posicionadores", "Diagnóstico"] },
  { icon: ShieldCheck, title: "Mantenimiento de instrumentación", desc: "Mantenimiento preventivo y correctivo orientado a mantener la disponibilidad y confiabilidad de equipos de medición y control.", items: ["Preventivo", "Correctivo", "Inspección", "Reportes"] },
  { icon: Search, title: "Identificación y búsqueda de equipos", desc: "Si tiene una referencia difícil de conseguir, una placa de datos o una fotografía, revisamos la información para ayudarle a identificar el equipo y buscar disponibilidad o alternativa.", items: ["Referencia", "Placa de datos", "Repuestos", "Alternativas"] },
];

const Servicios = () => (
  <>
    <section className="relative overflow-hidden border-b border-border/60 pb-16 pt-24 lg:pb-24 lg:pt-32"><div className="absolute inset-0 grid-pattern opacity-40" /><div className="absolute inset-0 bg-gradient-glow" /><div className="container relative"><span className="text-xs font-mono uppercase tracking-widest text-primary">✽ Servicios técnicos</span><h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] lg:text-7xl">Soporte para instrumentación, <span className="text-gradient-amber">control y automatización</span>.</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Desde la identificación de un instrumento hasta el diagnóstico, calibración, configuración o mantenimiento. El alcance se define según el equipo, la aplicación y las condiciones del servicio.</p></div></section>

    <section className="py-20 lg:py-28"><div className="container"><div className="mb-12 max-w-3xl"><span className="text-xs font-mono uppercase tracking-widest text-primary">Capacidades</span><h2 className="mt-4 text-4xl font-bold lg:text-5xl">Servicios que puede cotizar</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Comparta el equipo, la aplicación, cantidad, ubicación y fecha requerida para validar el alcance.</p></div><div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">{services.map((s) => <article key={s.title} className="group bg-background p-8 transition-smooth hover:bg-card lg:p-10"><div className="mb-6 flex items-start gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary group-hover:border-primary/40 group-hover:bg-primary/10"><s.icon className="h-7 w-7 text-primary" /></div><h2 className="text-2xl font-bold leading-tight lg:text-3xl">{s.title}</h2></div><p className="mb-6 leading-relaxed text-muted-foreground">{s.desc}</p><ul className="flex flex-wrap gap-2">{s.items.map((i) => <li key={i} className="rounded-sm border border-border bg-secondary/50 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">{i}</li>)}</ul></article>)}</div></div></section>

    <section className="border-t border-border/60 bg-secondary/30 py-20"><div className="container text-center"><h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold lg:text-5xl">¿No sabe exactamente qué servicio necesita?</h2><p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">Cuéntenos qué está fallando, qué equipo tiene instalado o qué necesita poner en marcha. Le ayudamos a definir el siguiente paso.</p><Button asChild variant="hero" size="xl"><Link to="/contacto">Consultar requerimiento <ArrowRight /></Link></Button></div></section>
  </>
);

export default Servicios;
