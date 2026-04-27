import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import valveImg from "@/assets/product-valve.jpg";
import plcImg from "@/assets/product-plc.jpg";
import transmitterImg from "@/assets/product-transmitter.jpg";
import sensorImg from "@/assets/product-sensor.jpg";
import positionerImg from "@/assets/product-positioner.jpg";
import hmiImg from "@/assets/product-hmi.jpg";

type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  sku: string;
  description: string;
  image: string;
};

const categories = ["Todos", "Válvulas", "Control", "Instrumentación", "HMI"];

const products: Product[] = [
  {
    id: "1",
    name: "Válvula de Control Fisher",
    brand: "Fisher",
    category: "Válvulas",
    sku: "FSH-DVC6200",
    description: "Válvula de control con posicionador digital DVC6200 para servicio severo.",
    image: valveImg,
  },
  {
    id: "2",
    name: "PLC SIMATIC S7-1500",
    brand: "Siemens",
    category: "Control",
    sku: "SIE-S71500",
    description: "Controlador lógico programable de alto desempeño con PROFINET integrado.",
    image: plcImg,
  },
  {
    id: "3",
    name: "Transmisor de Presión Rosemount",
    brand: "Rosemount",
    category: "Instrumentación",
    sku: "RSM-3051S",
    description: "Transmisor de presión de alta precisión ±0.025% con protocolo HART.",
    image: transmitterImg,
  },
  {
    id: "4",
    name: "Sensor de Nivel Ultrasónico",
    brand: "Endress+Hauser",
    category: "Instrumentación",
    sku: "ENH-FMU90",
    description: "Sensor ultrasónico para medición de nivel en líquidos y sólidos.",
    image: sensorImg,
  },
  {
    id: "5",
    name: "Posicionador Inteligente Samson",
    brand: "Samson",
    category: "Válvulas",
    sku: "SAM-3730",
    description: "Posicionador electroneumático con diagnóstico avanzado para válvulas.",
    image: positionerImg,
  },
  {
    id: "6",
    name: "Panel HMI Touch SIMATIC",
    brand: "Siemens",
    category: "HMI",
    sku: "SIE-TP1200",
    description: "Panel táctil industrial 12'' para interfaz hombre-máquina.",
    image: hmiImg,
  },
];

const Tienda = () => {
  const [active, setActive] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === "Todos" || p.category === active;
      const matchQ =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.sku.toLowerCase().includes(query.toLowerCase());
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
            ✽ Catálogo
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6 max-w-4xl leading-[1.05]">
            Tienda <span className="text-gradient-amber">técnica industrial</span>.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl">
            Suministro de instrumentación, válvulas y componentes de control
            de las marcas líderes del mercado. Solicite cotización con
            disponibilidad y plazos en menos de 24 horas.
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
                  "px-4 py-2 text-sm font-mono uppercase tracking-wider rounded-sm border transition-smooth",
                  active === c
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-border"
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
              placeholder="Buscar por marca, modelo o SKU..."
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No se encontraron productos. Pruebe otra búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      width={768}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm bg-background/80 backdrop-blur border border-border text-primary">
                      {p.brand}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {p.category}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        SKU · {p.sku}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 leading-tight">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {p.description}
                    </p>
                    <Button asChild variant="outlineGlow" size="sm" className="w-full">
                      <Link to={`/contacto?sku=${p.sku}`}>
                        Solicitar cotización
                        <ArrowRight />
                      </Link>
                    </Button>
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
