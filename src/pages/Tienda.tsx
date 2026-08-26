import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, FileText, PackageCheck, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { categories, formatCOP, products, type Product } from "@/data/products";

const processVariables = ["Todos", "Presión", "Caudal", "Temperatura", "Nivel", "Control", "Comunicación"];

const getProcessVariable = (product: Product) => {
  const text = `${product.name} ${product.description}`.toLowerCase();
  if (product.category === "Comunicaciones") return "Comunicación";
  if (product.category === "PLC" || product.category === "Variadores" || product.category === "Motores" || product.category === "Válvulas") return "Control";
  if (text.includes("nivel")) return "Nivel";
  if (text.includes("temperatura") || text.includes("termostato")) return "Temperatura";
  if (text.includes("caudal") || text.includes("flujo")) return "Caudal";
  return "Presión";
};

const ProductCard = ({ product }: { product: Product }) => (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/85 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-amber">
    <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_25%,hsl(var(--primary)/.16),transparent_42%),linear-gradient(145deg,hsl(var(--secondary)),hsl(var(--background)))]">
      <Link to={`/tienda/${encodeURIComponent(product.sku)}`} aria-label={`Ver detalles de ${product.name}`} className="block h-full w-full">
        <img
          src={product.image}
          alt={`${product.imageLabel}: ${product.name}`}
          loading="lazy"
          className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-primary backdrop-blur">
        {product.brand}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-primary-foreground">
        Consultar disponibilidad
      </span>
      <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-[0.14em] text-foreground/60">
        {product.imageLabel.startsWith("Fotografía") ? "Foto del producto" : "Imagen de referencia"}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
        <span>{product.category}</span>
        <span className="max-w-[58%] truncate" title={product.sku}>{product.sku}</span>
      </div>
      <h2 className="min-h-[3.25rem] text-lg font-semibold leading-tight text-foreground">
        <Link to={`/tienda/${encodeURIComponent(product.sku)}`} className="transition-colors hover:text-primary">{product.name}</Link>
      </h2>
      <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">{product.description}</p>
      <div className="mt-5 flex items-end justify-between gap-3 border-t border-border/70 pt-4">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">Precio de referencia</span>
          <span className="mt-1 block text-xl font-bold font-mono text-gradient-amber">{product.price === null ? "Consultar" : formatCOP(product.price)}</span>
        </div>
        <PackageCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      </div>
      <Button asChild variant="outlineGlow" size="sm" className="mt-5 w-full">
        <Link to={`/tienda/${encodeURIComponent(product.sku)}`}>
          Ver producto
          <ArrowUpRight />
        </Link>
      </Button>
      <Button asChild variant="hero" size="sm" className="mt-3 w-full">
        <Link to={`/contacto?sku=${encodeURIComponent(product.sku)}&name=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`}>
          Solicitar cotización
          <ArrowRight />
        </Link>
      </Button>
      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
        <FileText className="h-3.5 w-3.5" />
        Ficha técnica bajo solicitud
      </div>
    </div>
  </article>
);

const Tienda = () => {
  const [active, setActive] = useState("Todos");
  const [process, setProcess] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = active === "Todos" || product.category === active;
      const matchesProcess = process === "Todos" || getProcessVariable(product) === process;
      const matchesQuery = !normalizedQuery || [product.name, product.brand, product.sku, product.category]
        .some((field) => field.toLowerCase().includes(normalizedQuery));
      return matchesCategory && matchesProcess && matchesQuery;
    });
  }, [active, process, query]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 pb-14 pt-24 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -right-40 -top-44 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Catálogo técnico · Colombia
              </div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight lg:text-7xl">
                Componentes para que su operación <span className="text-gradient-amber">no se detenga.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Instrumentación, control y automatización seleccionados para plantas industriales. Consulte disponibilidad, ficha técnica y acompañamiento de un ingeniero.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-card/70 p-6 shadow-card backdrop-blur sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Compra consultiva</span>
                  <p className="mt-3 text-2xl font-semibold">Un equipo. Una respuesta técnica.</p>
                </div>
                <PackageCheck className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border/70 pt-5 text-center">
                <div><strong className="block text-2xl font-mono text-foreground">{products.length}</strong><span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Productos</span></div>
                <div><strong className="block text-2xl font-mono text-foreground">{categories.length - 1}</strong><span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Categorías</span></div>
                <div><strong className="block text-2xl font-mono text-foreground">24h</strong><span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Respuesta</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl md:top-20">
        <div className="container py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar por categoría">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={active === category}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-mono uppercase tracking-[0.12em] transition-all duration-200",
                    active === category
                      ? "border-primary bg-primary text-primary-foreground shadow-amber"
                      : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 lg:order-3" aria-label="Filtrar por variable de proceso">
              {processVariables.map((variable) => (
                <button key={variable} type="button" onClick={() => setProcess(variable)} aria-pressed={process === variable} className={cn("whitespace-nowrap rounded-full border px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] transition-all duration-200", process === variable ? "border-primary/70 bg-primary/15 text-primary" : "border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground")}>{variable}</button>
              ))}
            </div>
            <div className="relative shrink-0 lg:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar marca, modelo o SKU"
                aria-label="Buscar productos"
                className="h-11 rounded-full border-border bg-secondary/50 pl-10 pr-10"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Limpiar búsqueda" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-mono text-muted-foreground">
              Mostrando <span className="font-semibold text-foreground">{filtered.length}</span> de {products.length} referencias
            </p>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">Precios orientativos de segunda mano en COP · validar estado</p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/40 py-24 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-primary/70" />
              <h2 className="text-2xl font-semibold">No encontramos esa referencia</h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">Pruebe con otra marca, categoría o SKU. Si no aparece, podemos buscarla con nuestra red de proveedores.</p>
              <Button asChild variant="outlineGlow" className="mt-7"><Link to="/contacto">Solicitar búsqueda especial <ArrowRight /></Link></Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/25 py-16 lg:py-20">
        <div className="container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">¿No está en el catálogo?</span>
            <h2 className="mt-3 text-3xl font-bold lg:text-5xl">Encontramos el componente que necesita.</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Trabajamos con más de 50 marcas y una red de proveedores especializados. Envíenos el modelo o una fotografía y le ayudamos a identificarlo.</p>
          </div>
          <Button asChild variant="hero" size="xl"><Link to="/contacto">Pedir una referencia <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
};

export default Tienda;
