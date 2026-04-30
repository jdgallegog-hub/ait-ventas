import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Globe } from "lucide-react";
import aitLogo from "@/assets/ait-logo.png";

export const Footer = () => (
  <footer className="border-t border-primary/20 bg-gradient-dark text-white [&_.text-muted-foreground]:text-white/60 [&_.text-foreground]:text-white [&_a:hover]:text-primary-glow">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2 space-y-4">
        <img
          src={aitLogo}
          alt="AIT Soluciones Automáticas"
          className="h-16 w-auto object-contain"
        />
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Ingeniería · Instrumentación · Control
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Especialistas en instrumentación industrial, válvulas de control y
          automatización para industrias de misión crítica en Colombia y
          Latinoamérica.
        </p>
        <a
          href="https://aitsolucionesautomaticas.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-glow transition-smooth"
        >
          <Globe className="h-4 w-4" />
          aitsolucionesautomaticas.com
        </a>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
          Compañía
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary transition-smooth">Inicio</Link></li>
          <li><Link to="/tienda" className="hover:text-primary transition-smooth">Tienda</Link></li>
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
            <a href="mailto:operaciones@aitsolucionesautomaticas.com" className="hover:text-primary">operaciones@aitsolucionesautomaticas.com</a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-primary" />
            <span>Bogotá, Colombia</span>
          </li>
          <li className="flex items-start gap-2">
            <Linkedin className="h-4 w-4 mt-0.5 text-primary" />
            <a
              href="https://www.linkedin.com/company/ait-soluciones-automaticas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} AIT Soluciones Automáticas. Todos los derechos reservados.</span>
        <span className="uppercase tracking-widest">Calibración trazable ONAC</span>
      </div>
    </div>
  </footer>
);
