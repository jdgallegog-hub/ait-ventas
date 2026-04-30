import { Link } from "react-router-dom";
import { ArrowRight, Search, Truck, ShieldCheck, Headphones, Package, Zap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products, categories, formatCOP } from "@/data/products";
import { useQuoteCart } from "@/context/QuoteCartContext";

const FEATURED_IDS = ["5", "6", "7", "8"];
const POPULAR_BRANDS = ["Siemens", "Allen-Bradley", "Mitsubishi", "Fisher", "Samson", "Kinco", "Endress+Hauser", "Yokogawa"];

const categoryMeta: Record<string, { icon: string; desc: string }> = {
  PLC: { icon: "⚙", desc: "Controladores Siemens, Allen-Bradley" },
  HMI: { icon: "▢", desc: "Pantallas táctiles industriales" },
  Variadores: { icon: "↯", desc: "Control de velocidad de motores" },
  Transmisores: { icon: "◉", desc: "Presión, temperatura, nivel" },
  Instrumentación: { icon: "✦", desc: "Sensores y medición" },
  Válvulas: { icon: "✕", desc: "Control y aislamiento" },
  Motores: { icon: "↻", desc: "Trifásicos y servomotores" },
  Comunicaciones: { icon: "≡", desc: "Industrial Ethernet, Modbus" },
};

const Index = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { add } = useQuoteCart();

  const featured = products.filter((p) => FEATURED_IDS.includes(p.id)).slice(0, 4);
  const bestsellers = products.slice(0, 8);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/tienda${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  };

  return (
    <>
      {/* HERO COMPACTO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border/60 overflow-hidden bg-gradient-steel">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-primary/30 bg-primary/5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Tienda técnica · {products.length}+ productos en catálogo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
              Instrumentación industrial,{" "}
              <span className="text-gradient-amber">al alcance de un clic</span>.
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              PLC, HMI, transmisores, válvulas y variadores de las marcas líderes.
              Precios en COP, despacho a toda Colombia.
            </p>

            <form onSubmit={onSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar marca, modelo, SKU..."
                className="h-14 pl-12 pr-32 text-base shadow-card"
              />
              <Button
                type="submit"
                variant="hero"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10"
              >
                Buscar
                <ArrowRight />
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-muted-foreground uppercase tracking-widest mr-1">Popular:</span>
              {["Siemens S7", "Fisher", "Samson", "Transmisores", "Variadores"].map((t) => (
                <Link
                  key={t}
                  to={`/tienda?q=${encodeURIComponent(t)}`}
                  className="px-2.5 py-1 rounded-sm border border-border bg-secondary/40 hover:border-primary/40 hover:text-primary transition-smooth"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS RÁPIDOS */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="container py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Despacho nacional", desc: "Toda Colombia" },
            { icon: ShieldCheck, title: "Marcas OEM", desc: "Garantía oficial" },
            { icon: Headphones, title: "Asesoría técnica", desc: "Antes y después" },
            { icon: Zap, title: "Cotización 24h", desc: "Respuesta rápida" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">{b.title}</div>
                <div className="text-xs text-muted-foreground">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                ✽ Compra por categoría
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3">
                Encuentra lo que tu planta necesita.
              </h2>
            </div>
            <Link
              to="/tienda"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-glow"
            >
              Ver catálogo completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.filter((c) => c !== "Todos").map((c) => {
              const meta = categoryMeta[c];
              return (
                <Link
                  key={c}
                  to={`/tienda?cat=${encodeURIComponent(c)}`}
                  className="group p-6 rounded-sm border border-border bg-card hover:border-primary/40 hover:shadow-amber transition-smooth"
                >
                  <div className="text-3xl text-primary mb-3 font-mono">{meta?.icon ?? "✽"}</div>
                  <div className="text-base font-bold mb-1 group-hover:text-primary transition-smooth">
                    {c}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {meta?.desc ?? "Equipos industriales"}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="py-20 lg:py-24 border-y border-border/60 bg-secondary/30">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                ✽ Productos destacados
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3">
                Lo más vendido este mes.
              </h2>
            </div>
            <Link
              to="/tienda"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-glow"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <article
                key={p.id}
                className="group rounded-sm border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-amber transition-smooth flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-background relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-smooth duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm bg-primary text-primary-foreground">
                    Destacado
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    {p.brand} · {p.category}
                  </div>
                  <h3 className="text-sm font-bold mb-3 leading-snug min-h-[2.5rem]">
                    {p.name}
                  </h3>
                  <div className="text-lg font-bold font-mono text-gradient-amber mb-4">
                    {formatCOP(p.price)}
                  </div>
                  <Button
                    onClick={() => add(p)}
                    variant="hero"
                    size="sm"
                    className="mt-auto w-full"
                  >
                    <Plus className="h-4 w-4" />
                    Agregar a cotización
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS / GRID DENSO */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                ✽ Catálogo
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3">
                Explora más equipos.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {bestsellers.map((p) => (
              <Link
                key={p.id}
                to="/tienda"
                className="group rounded-sm border border-border bg-card overflow-hidden hover:border-primary/40 transition-smooth"
              >
                <div className="aspect-square overflow-hidden bg-secondary/40">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground truncate">
                    {p.brand}
                  </div>
                  <div className="text-xs font-semibold leading-snug truncate">{p.name}</div>
                  <div className="text-sm font-bold font-mono text-gradient-amber mt-1">
                    {formatCOP(p.price)}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/tienda">
                Ver catálogo completo
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="border-y border-border/60 bg-secondary/40 py-10 overflow-hidden">
        <div className="container mb-6 flex items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Marcas que distribuimos
          </span>
          <span className="hidden sm:block h-px flex-1 bg-border" />
          <span className="text-xs font-mono text-muted-foreground">OEM autorizado</span>
        </div>
        <div className="relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...POPULAR_BRANDS, ...POPULAR_BRANDS].map((b, i) => (
              <span
                key={i}
                className="text-xl lg:text-2xl font-bold tracking-widest text-muted-foreground/60 hover:text-primary transition-smooth"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm border border-primary/40 bg-gradient-dark p-10 lg:p-16 shadow-elegant">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Package className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                  ¿No encuentras lo que <span className="text-gradient-gold">buscas</span>?
                </h2>
                <p className="text-base text-white/70 max-w-lg">
                  Trabajamos con más de 50 marcas. Pídenos cualquier producto industrial
                  y te conseguimos cotización con OEM autorizado en menos de 24 horas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contacto">
                    Pedir cotización
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outlineGlow" size="xl">
                  <a href="tel:+573005747839">+57 300 574 7839</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
