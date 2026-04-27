import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-gradient-steel">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-sm bg-gradient-amber flex items-center justify-center font-bold text-primary-foreground shadow-amber">
            AIT
          </div>
          <div>
            <div className="font-semibold tracking-tight">
              AIT Soluciones Automáticas
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Ingeniería · Instrumentación · Control
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Especialistas en instrumentación industrial, válvulas de control y
          automatización para industrias de misión crítica en Colombia y
          Latinoamérica.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
          Compañía
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary transition-smooth">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-primary transition-smooth">Servicios</Link></li>
          <li><Link to="/sobre-nosotros" className="hover:text-primary transition-smooth">Nosotros</Link></li>
          <li><Link to="/contacto" className="hover:text-primary transition-smooth">Contacto</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
          Contacto
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Phone className="h-4 w-4 mt-0.5 text-primary" />
            <a href="tel:+573005747839" className="hover:text-primary">+57 300 574 7839</a>
          </li>
          <li className="flex items-start gap-2">
            <Mail className="h-4 w-4 mt-0.5 text-primary" />
            <a href="mailto:ventas@aitsoluciones.com" className="hover:text-primary">ventas@aitsoluciones.com</a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-primary" />
            <span>Bogotá, Colombia</span>
          </li>
          <li className="flex items-start gap-2">
            <Linkedin className="h-4 w-4 mt-0.5 text-primary" />
            <a href="#" className="hover:text-primary">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} AIT Soluciones Automáticas. Todos los derechos reservados.</span>
        <span className="uppercase tracking-widest">ISO 9001 · OSHA Compliant</span>
      </div>
    </div>
  </footer>
);
