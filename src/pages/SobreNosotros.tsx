import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Eye, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import supportImg from "@/assets/service-support.jpg";

const capabilities = [
  "Identificación y selección de instrumentación industrial",
  "Suministro de PLCs, transmisores, válvulas, variadores y repuestos",
  "Calibración, diagnóstico y mantenimiento de equipos de proceso",
  "Configuración, puesta en marcha y soporte de sistemas de control",
  "Búsqueda de referencias específicas y alternativas compatibles",
  "Atención de requerimientos industriales desde Bogotá para Colombia",
];

const values = [
  { title: "Criterio técnico", desc: "Buscamos que la referencia seleccionada corresponda realmente con la aplicación y los requisitos del proceso." },
  { title: "Transparencia", desc: "Diferenciamos disponibilidad, equipos bajo pedido y valores de referencia antes de formalizar una cotización." },
  { title: "Respuesta", desc: "Facilitamos la identificación del equipo para que ingeniería y compras puedan avanzar sin perder tiempo." },
  { title: "Continuidad", desc: "Cuando una referencia no está disponible, exploramos nueva disponibilidad o alternativas técnicamente compatibles." },
];

const SobreNosotros = () => (
  <>
    <section className="relative overflow-hidden border-b border-border/60 pb-16 pt-24 lg:pb-24 lg:pt-32"><div className="absolute inset-0 grid-pattern opacity-40" /><div className="absolute inset-0 bg-gradient-glow" /><div className="container relative"><span className="text-xs font-mono uppercase tracking-widest text-primary">✽ Quiénes somos</span><h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] lg:text-7xl">Un aliado técnico para sus <span className="text-gradient-amber">requerimientos industriales</span>.</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">AIT Soluciones Automáticas integra suministro de equipos, instrumentación, automatización y soporte técnico para ayudar a empresas y profesionales a resolver requerimientos de planta.</p></div></section>

    <section className="py-20 lg:py-28"><div className="container grid items-center gap-16 lg:grid-cols-2"><div className="relative"><img src={supportImg} alt="Soporte técnico de instrumentación industrial" loading="lazy" className="w-full rounded-sm shadow-elegant" width={1024} height={1024} /></div><div><span className="text-xs font-mono uppercase tracking-widest text-primary">Qué hacemos</span><h2 className="mb-6 mt-4 text-3xl font-bold lg:text-4xl">Resolvemos desde la referencia hasta la aplicación.</h2><div className="space-y-4 text-muted-foreground leading-relaxed"><p>Trabajamos alrededor de una necesidad concreta: identificar el equipo correcto, validar sus características, encontrar disponibilidad y acompañar el requerimiento técnico o de servicio.</p><p>El catálogo permite consultar referencias de automatización e instrumentación; cuando un equipo está agotado o ya fue vendido, también podemos recibir la solicitud para buscar otra unidad o una alternativa.</p><p>Para requerimientos de mayor complejidad, el canal de cotización permite compartir aplicación, cantidad, fecha requerida y datos de placa para realizar una validación antes de cotizar.</p></div></div></div></section>

    <section className="border-y border-border/60 bg-secondary/30 py-20 lg:py-24"><div className="container grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><span className="text-xs font-mono uppercase tracking-widest text-primary">Capacidad técnica</span><h2 className="mt-4 text-4xl font-bold">En qué podemos ayudarle</h2><p className="mt-5 leading-relaxed text-muted-foreground">Si no conoce la referencia exacta, no es un problema: puede iniciar la solicitud con la información que tenga disponible.</p></div><ul className="grid gap-3 sm:grid-cols-2">{capabilities.map((item) => <li key={item} className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/70 p-5 text-sm leading-relaxed"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div></section>

    <section className="py-20 lg:py-28"><div className="container"><div className="mx-auto mb-12 max-w-3xl text-center"><span className="text-xs font-mono uppercase tracking-widest text-primary">Cómo trabajamos</span><h2 className="mt-4 text-4xl font-bold lg:text-5xl">Menos incertidumbre antes de comprar</h2></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{values.map((v, i) => <div key={v.title} className="rounded-2xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:border-primary/40"><div className="mb-4 text-4xl font-bold font-mono text-gradient-amber">0{i + 1}</div><h3 className="mb-2 text-xl font-bold">{v.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p></div>)}</div></div></section>

    <section className="border-t border-border/60 py-20"><div className="container grid gap-6 md:grid-cols-3"><div className="rounded-2xl border border-border bg-card p-7"><Target className="mb-5 h-9 w-9 text-primary" /><h3 className="text-xl font-bold">Misión</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Facilitar soluciones de instrumentación y automatización que respondan a necesidades técnicas reales de la industria.</p></div><div className="rounded-2xl border border-border bg-card p-7"><Eye className="mb-5 h-9 w-9 text-primary" /><h3 className="text-xl font-bold">Visión</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Construir relaciones comerciales basadas en conocimiento técnico, respuesta y cumplimiento de los requerimientos acordados.</p></div><div className="rounded-2xl border border-border bg-card p-7"><Wrench className="mb-5 h-9 w-9 text-primary" /><h3 className="text-xl font-bold">Enfoque</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Suministro, identificación y soporte: desde una referencia específica hasta el acompañamiento técnico necesario.</p></div></div></section>

    <section className="border-t border-border/60 py-24"><div className="container text-center"><h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold lg:text-5xl">¿Tiene un requerimiento industrial?</h2><p className="mx-auto mb-8 max-w-2xl text-muted-foreground">Comparta la referencia, aplicación o fotografía del equipo y empecemos por identificar la solución adecuada.</p><Button asChild variant="hero" size="xl"><Link to="/contacto">Solicitar cotización <ArrowRight /></Link></Button></div></section>
  </>
);

export default SobreNosotros;
