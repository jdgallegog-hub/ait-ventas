import { Link } from "react-router-dom";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import aitLogo from "@/assets/ait-logo.png";

const productLinks = [
  "Transmisores de presión",
  "Transmisores de temperatura",
  "Flujómetros",
  "PLCs y control",
  "Válvulas de control",
];

const serviceLinks = [
  "Calibración",
  "Puesta en marcha",
  "Automatización",
  "Mantenimiento",
];

export const Footer = () => (
  <footer className="border-t border-border/60 bg-gradient-steel">
    <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <div className="space-y-4">
        <img src={aitLogo} alt="AIT Soluciones Automáticas" className="h-14 w-auto object-contain" />
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ingeniería · Instrumentación · Control</div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Distribución e integración de instrumentación y automatización industrial para plantas en Colombia.</p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Productos</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {productLinks.map((item) => <li key={item}><Link to="/tienda" className="transition-colors hover:text-primary">{item}</Link></li>)}
          <li className="pt-2"><Link to="/tienda" className="font-semibold text-primary hover:text-foreground">Ver catálogo completo →</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Servicios</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {serviceLinks.map((item) => <li key={item}><Link to="/#servicios" className="transition-colors hover:text-primary">{item}</Link></li>)}
          <li className="pt-2"><Link to="/contacto" className="font-semibold text-primary hover:text-foreground">Cotizar servicio →</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contacto</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Bogotá, Colombia</span></li>
          <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="tel:+573005747839" className="hover:text-primary">+57 300 574 7839</a></li>
          <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="https://wa.me/573005747839" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp comercial</a></li>
          <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><Link to="/contacto" className="hover:text-primary">Formulario de cotización</Link></li>
          <li className="flex items-start gap-2"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Lun–Vie · 7:00–18:00</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-2 py-5 text-center text-xs font-mono text-muted-foreground sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} AIT Soluciones Automáticas S.A.S. — Todos los derechos reservados</span>
        <span className="uppercase tracking-widest">Calibración trazable ONAC</span>
      </div>
    </div>
  </footer>
);
