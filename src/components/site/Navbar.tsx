import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import aitLogo from "@/assets/ait-logo.png";
import { useQuoteCart } from "@/context/QuoteCartContext";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { count, setOpen: openCart } = useQuoteCart();

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
        "fixed top-8 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
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
          <button
            onClick={() => openCart(true)}
            className="relative h-10 px-3 rounded-sm border border-border hover:border-primary/40 hover:bg-secondary transition-smooth flex items-center gap-2 text-sm font-mono"
            aria-label="Abrir cotización"
          >
            <ShoppingCart className="h-4 w-4" />
            Cotización
            {count > 0 && (
              <span className="min-w-[20px] h-[20px] px-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <Button asChild variant="hero" size="sm">
            <Link to="/contacto">Contáctanos</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => openCart(true)}
            className="relative p-2 text-foreground"
            aria-label="Abrir cotización"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
              <Link to="/contacto">Solicitar diagnóstico</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
