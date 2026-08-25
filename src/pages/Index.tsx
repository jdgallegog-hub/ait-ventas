import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Hammer,
  MapPin,
  MessageCircle,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Star,
  Thermometer,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-industrial.jpg";
import valvesImg from "@/assets/service-valves.jpg";
import supportImg from "@/assets/service-support.jpg";
import automationImg from "@/assets/service-automation.jpg";
import sectorsBg from "@/assets/sectors-bg.jpg";

const solutionCategories = [
  { icon: Gauge, title: "Medición de presión", items: ["Transmisores de presión", "Manómetros industriales", "Presostatos"] },
  { icon: Droplets, title: "Medición de caudal", items: ["Flujómetros electromagnéticos", "Medidores ultrasonido", "Rotámetros"] },
  { icon: Thermometer, title: "Medición de temperatura", items: ["Termómetros industriales", "Termopares y RTD", "Transmisores de temperatura"] },
  { icon: FlaskConical, title: "Análisis y calidad", items: ["Analizadores de pH", "Conductivímetros", "Turbidímetros"] },
  { icon: Settings2, title: "Control y automatización", items: ["PLCs y HMIs", "Variadores de frecuencia", "Relés de protección"] },
  { icon: Wrench, title: "Válvulas de control", items: ["Válvulas de control neumáticas", "Válvulas solenoides", "Actuadores"] },
];

const benefits = [
  { icon: Wrench, title: "Soporte técnico real", text: "Nuestro equipo de ingenieros te asesora antes, durante y después de la compra. No vendemos solo un producto: resolvemos el problema de proceso." },
  { icon: Truck, title: "Disponibilidad y entrega", text: "Inventario disponible en Bogotá. Cotización en menos de 2 horas y despacho a toda Colombia con transportadora especializada." },
  { icon: Star, title: "Marcas líderes", text: "Distribuimos e integramos equipos de las marcas más reconocidas del sector, con validación técnica para cada aplicación." },
  { icon: RefreshCw, title: "Respaldo técnico post-venta", text: "Ofrecemos calibración, puesta en marcha, mantenimiento y capacitación. Tu inversión está respaldada." },
];

const sectors = [
  { icon: FlaskConical, name: "Petroquímica y refinación" },
  { icon: Droplets, name: "Agua y saneamiento" },
  { icon: Factory, name: "Manufactura y metalmecánica" },
  { icon: Hammer, name: "Alimentos y bebidas" },
  { icon: Zap, name: "Energía y utilities" },
  { icon: Settings2, name: "Construcción e infraestructura" },
];

const services = [
  { title: "Calibración de instrumentos", text: "Calibración en sitio y en laboratorio de transmisores, manómetros, termómetros y equipos de análisis. Certificados de calibración incluidos.", image: supportImg, icon: Gauge },
  { title: "Puesta en marcha", text: "Instalación, configuración y arranque supervisado de instrumentos, PLCs, variadores y sistemas SCADA.", image: automationImg, icon: Settings2 },
  { title: "Automatización de procesos", text: "Diseño e implementación de sistemas de control, HMI y comunicación industrial: Profibus, HART, Modbus y Ethernet Industrial.", image: valvesImg, icon: Wrench },
  { title: "Mantenimiento preventivo", text: "Planes de mantenimiento periódico para instrumentación crítica y reducción de paros no programados.", image: supportImg, icon: ShieldCheck },
];

const Index = () => (
  <>
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Planta industrial con tableros e instrumentación de control" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/.96),hsl(var(--background)/.78)_45%,hsl(var(--background)/.52))]" />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      </div>
      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-background/40 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Instrumentación · Automatización · Colombia</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-7xl">Instrumentación y automatización industrial <span className="text-gradient-amber">con soporte técnico en Colombia</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 lg:text-xl">Transmisores, válvulas, PLCs, sensores y variadores con respaldo técnico local. Cotización en menos de 2 horas. Entrega en toda Colombia.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl"><Link to="/contacto">Solicitar cotización <ArrowRight /></Link></Button>
            <Button asChild variant="outlineGlow" size="xl"><Link to="/tienda">Ver catálogo completo <ArrowRight /></Link></Button>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 text-sm text-foreground/80 sm:flex-row sm:items-center sm:gap-7">
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> Respuesta en &lt; 2 horas</span>
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Envío a toda Colombia</span>
            <span className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-primary" /> Soporte técnico incluido</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section id="soluciones" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Catálogo técnico</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">Soluciones para cada proceso industrial</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Instrumentación, control y automatización seleccionados para medir mejor, controlar con precisión y mantener la operación disponible.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutionCategories.map(({ icon: Icon, title, items }) => (
            <article key={title} className="group rounded-2xl border border-border/80 bg-card/80 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-amber">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
              <Link to="/tienda" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground">Ver productos <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-primary/25 bg-secondary/40 p-7 text-center">
          <p className="text-lg font-semibold">¿No encuentras lo que necesitas?</p>
          <p className="mt-2 text-muted-foreground">Consulta nuestro catálogo completo o escríbenos directamente.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="hero"><Link to="/tienda">Ir al catálogo <ArrowRight /></Link></Button><Button asChild variant="outlineGlow"><Link to="/contacto">Contactar asesor <MessageCircle /></Link></Button></div>
        </div>
      </div>
    </section>

    <section className="border-y border-border/60 bg-secondary/30 py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center"><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Nuestra diferencia</span><h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">¿Por qué elegir AIT Soluciones Automáticas?</h2></div>
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-border/80 bg-card/75 p-7"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-foreground py-16 text-background lg:py-20">
      <div className="absolute inset-0 opacity-20"><img src={sectorsBg} alt="" className="h-full w-full object-cover" loading="lazy" /></div>
      <div className="container relative"><div className="mx-auto mb-10 max-w-2xl text-center"><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Cobertura nacional</span><h2 className="mt-4 text-4xl font-bold">Industrias que atendemos</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{sectors.map(({ icon: Icon, name }) => <div key={name} className="flex items-center gap-3 rounded-xl border border-background/15 bg-background/5 p-5"><Icon className="h-6 w-6 shrink-0 text-primary" /><span className="font-medium">{name}</span></div>)}</div></div>
    </section>

    <section id="servicios" className="py-20 lg:py-28">
      <div className="container"><div className="mx-auto mb-14 max-w-3xl text-center"><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Ingeniería aplicada</span><h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">Servicios técnicos especializados</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Acompañamiento técnico para que sus equipos funcionen con precisión, seguridad y continuidad.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ title, text, image, icon: Icon }) => <article key={title} className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-card"><div className="aspect-[4/3] overflow-hidden"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className="p-6"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div></div>
    </section>

    <section className="border-t border-border/60 bg-primary py-12 text-primary-foreground lg:py-14">
      <div className="container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-bold lg:text-4xl">¿Listo para cotizar o tienes una duda técnica?</h2><p className="mt-2 text-primary-foreground/80">Nuestro equipo responde en menos de 2 horas.</p><p className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/75"><MapPin className="h-4 w-4" /> Bogotá, Colombia · Atención lun-vie 7am-6pm</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90"><Link to="/contacto">Solicitar cotización <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><a href="https://wa.me/573005747839?text=Hola%2C%20necesito%20asesor%C3%ADa%20con%20instrumentaci%C3%B3n%20industrial" target="_blank" rel="noopener noreferrer"><MessageCircle /> Escribir por WhatsApp</a></Button></div></div>
    </section>
  </>
);

export default Index;
