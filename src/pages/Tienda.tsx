import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search, Package, ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { products, categories, formatCOP } from "@/data/products";
import { useQuoteCart } from "@/context/QuoteCartContext";

const Tienda = () => {
  const [params] = useSearchParams();
  const [active, setActive] = useState(params.get("cat") || "Todos");
  const [query, setQuery] = useState(params.get("q") || "");
  const { add } = useQuoteCart();

  useEffect(() => {
    const cat = params.get("cat");
    const q = params.get("q");
    if (cat) setActive(cat);
    if (q) setQuery(q);
  }, [params]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === "Todos" || p.category === active;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container relative">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            ✽ Catálogo · {products.length} productos
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6 max-w-4xl leading-[1.05]">
            Tienda <span className="text-gradient-amber">técnica industrial</span>.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl">
            Stock disponible de instrumentación, PLC, transmisores, válvulas y
            componentes de las marcas líderes. Precios en COP, despacho a toda
            Colombia.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 md:top-20 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container py-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm border transition-smooth",
                  active === c
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar marca, modelo o SKU..."
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-8 text-sm font-mono text-muted-foreground">
            Mostrando <span className="text-foreground font-semibold">{filtered.length}</span> de {products.length} productos
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No se encontraron productos. Pruebe otra búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group rounded-sm border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-amber transition-smooth flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-secondary/40 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-smooth duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm bg-background/85 backdrop-blur border border-border text-primary">
                      {p.brand}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm bg-primary text-primary-foreground">
                      Oferta
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {p.category}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[60%]" title={p.sku}>
                        {p.sku}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mb-3 leading-snug min-h-[3rem]">
                      {p.name}
                    </h3>
                    <div className="text-xl font-bold font-mono text-gradient-amber mb-4">
                      {formatCOP(p.price)}
                    </div>
                    <div className="mt-auto flex flex-col gap-2">
                      <Button asChild variant="hero" size="sm" className="w-full">
                        <Link to={`/contacto?sku=${encodeURIComponent(p.sku)}&name=${encodeURIComponent(p.name)}`}>
                          Cotizar
                          <ArrowRight />
                        </Link>
                      </Button>
                      <a
                        href={p.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-smooth"
                      >
                        Ver detalle
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/60 bg-secondary/30">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            ¿Necesita un producto que no está en el catálogo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Trabajamos con más de 50 marcas del sector. Cuéntenos qué busca y
            le conseguimos cotización con OEM autorizado.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contacto">
              Pedir un equipo específico
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Tienda;
