import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import aitLogo from "@/assets/ait-logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/sobre-nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="AIT Soluciones Automáticas - Inicio">
          <img
            src={aitLogo}
            alt="AIT Soluciones Automáticas"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-smooth rounded-sm",
                  active
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-amber" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+573005747839"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-smooth"
          >
            <Phone className="h-4 w-4" />
            +57 300 574 7839
          </a>
          <Button asChild variant="hero" size="sm">
            <Link to="/contacto">Cotizar ahora</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-sm",
                  pathname === l.to
                    ? "text-primary bg-secondary"
                    : "text-foreground/80 hover:bg-secondary"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-4">
              <Link to="/contacto">Cotizar ahora</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
