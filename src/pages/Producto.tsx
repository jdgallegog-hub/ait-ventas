import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, FileText, MessageCircle, PackageCheck, Search, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCOP, products } from "@/data/products";
import { getProductApplications, getProductCharacteristics, getProductGallery, getProductTechnicalSpecs } from "@/data/productDetails";

const ProductNotFound = () => (
  <section className="container flex min-h-[55vh] flex-col items-center justify-center py-20 text-center">
    <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Referencia no encontrada</span>
    <h1 className="mt-4 text-4xl font-bold tracking-tight">No encontramos ese producto.</h1>
    <p className="mt-4 max-w-lg text-muted-foreground">Regrese al catálogo o solicite una búsqueda especial. Podemos ayudarle a identificar una referencia equivalente.</p>
    <Button asChild variant="hero" className="mt-8"><Link to="/tienda">Volver a la tienda <ArrowRight /></Link></Button>
  </section>
);

const Producto = () => {
  const { sku: routeSku } = useParams<{ sku: string }>();
  const sku = routeSku ? decodeURIComponent(routeSku) : "";
  const product = products.find((item) => item.sku === sku);
  const gallery = product ? getProductGallery(product) : [];
  const characteristics = product ? getProductCharacteristics(product) : [];
  const technicalSpecs = product ? getProductTechnicalSpecs(product) : null;
  const applications = product ? getProductApplications(product) : [];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => setActiveImage(0), [sku]);

  if (!product) return <ProductNotFound />;

  const isSoldOrByOrder = product.price === null;
  const quoteUrl = `/contacto?sku=${encodeURIComponent(product.sku)}&name=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`;
  const whatsappUrl = `https://wa.me/573005747839?text=${encodeURIComponent(`Hola, quiero consultar disponibilidad de ${product.name} (${product.sku}).`)}`;
  const selectedImage = gallery[activeImage] ?? gallery[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative">
          <Link to="/tienda" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="h-4 w-4" /> Volver al catálogo</Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/80 bg-[radial-gradient(circle_at_50%_25%,hsl(var(--primary)/.16),transparent_42%),linear-gradient(145deg,hsl(var(--secondary)),hsl(var(--background)))] shadow-card">
                <img src={selectedImage.src} alt={selectedImage.alt} className="h-full w-full object-contain p-8 sm:p-12" width={800} height={800} decoding="async" />
                <span className="absolute left-5 top-5 rounded-full border border-border/70 bg-background/85 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-primary backdrop-blur">{product.brand}</span>
                <span className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] ${isSoldOrByOrder ? "border border-primary/30 bg-background/90 text-primary" : "bg-primary text-primary-foreground"}`}>
                  {isSoldOrByOrder ? "Bajo pedido" : "Disponible"}
                </span>
              </div>
              {gallery.length > 1 && <div className="mt-4 grid grid-cols-3 gap-3" aria-label="Galería de imágenes del producto">{gallery.map((image, index) => <button key={image.src} type="button" onClick={() => setActiveImage(index)} aria-label={`Ver imagen ${index + 1} de ${gallery.length}`} aria-pressed={activeImage === index} className={`aspect-square overflow-hidden rounded-xl border bg-secondary/40 transition-all ${activeImage === index ? "border-primary ring-2 ring-primary/30" : "border-border/70 hover:border-primary/50"}`}><img src={image.src} alt="" className="h-full w-full object-contain p-2" width={200} height={200} loading="lazy" /></button>)}</div>}
            </div>

            <div className="lg:pt-4">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground"><span className="text-primary">{product.category}</span><span className="h-1 w-1 rounded-full bg-border" /><span>SKU / referencia: {product.sku}</span></div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">{product.name}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{product.description}</p>

              {isSoldOrByOrder ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-7">
                  <div className="flex items-center gap-3"><PackageCheck className="h-6 w-6 text-primary" /><span className="text-xs font-mono uppercase tracking-[0.16em] text-primary">Referencia vendida recientemente</span></div>
                  <h2 className="mt-3 text-2xl font-bold">Consiga este equipo o una alternativa compatible</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">Esta unidad ya fue vendida. Podemos buscar otra unidad, revisar nueva disponibilidad o proponer una alternativa técnicamente compatible para su aplicación.</p>
                  <p className="mt-4 text-sm font-semibold">Indíquenos marca, modelo, cantidad y fecha requerida.</p>
                </div>
              ) : (
                <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-y border-border/70 py-6">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">Precio de referencia</span>
                    <div className="mt-2 flex flex-wrap items-baseline gap-3">
                      {product.previousPrice && <span className="text-lg font-mono text-muted-foreground line-through">{formatCOP(product.previousPrice)}</span>}
                      <span className="text-3xl font-bold font-mono text-gradient-amber">{formatCOP(product.price)}</span>
                    </div>
                    <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">Valor de referencia. La cotización final se confirma según condición, configuración, accesorios, pruebas y requerimientos de entrega.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-primary"><PackageCheck className="h-5 w-5" /> Disponibilidad por confirmar</div>
                </div>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="sm:flex-1"><Link to={quoteUrl}>{isSoldOrByOrder ? "Quiero conseguir este equipo" : "Cotizar esta referencia"} <ArrowRight /></Link></Button>
                <Button asChild variant="outlineGlow" size="xl"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> {isSoldOrByOrder ? "Consultar disponibilidad" : "Consultar por WhatsApp"}</a></Button>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">¿No tiene la referencia exacta? Envíenos una foto de la placa de datos y le ayudamos a identificarla.</p>

              <div className="mt-10 rounded-2xl border border-border/80 bg-card/70 p-6 shadow-card sm:p-7">
                <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-primary" /><h2 className="text-xl font-semibold">Características del producto</h2></div>
                <ul className="mt-5 space-y-3">{characteristics.map((characteristic) => <li key={characteristic} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{characteristic}</span></li>)}</ul>
                <p className="mt-6 border-t border-border/70 pt-5 text-xs leading-relaxed text-muted-foreground">La ficha técnica completa, disponibilidad y compatibilidad se validan con un ingeniero antes de cotizar.</p>
              </div>

              {technicalSpecs && <div className="mt-6 rounded-2xl border border-border/80 bg-card/70 p-6 shadow-card sm:p-7"><div className="flex items-center gap-3"><Settings2 className="h-5 w-5 text-primary" /><h2 className="text-xl font-semibold">Especificaciones técnicas</h2></div><dl className="mt-5 grid gap-4 sm:grid-cols-2">{[["Variable medida / control", technicalSpecs.variable], ["Rango", technicalSpecs.range], ["Señal de salida", technicalSpecs.output], ["Alimentación", technicalSpecs.power], ["Protección", technicalSpecs.protection], ["Certificaciones", technicalSpecs.certifications]].map(([label, value]) => <div key={label} className="border-t border-border/60 pt-3"><dt className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">{label}</dt><dd className="mt-1 text-sm leading-relaxed text-foreground/85">{value}</dd></div>)}</dl></div>}

              <div className="mt-6 rounded-2xl border border-border/80 bg-card/70 p-6 shadow-card sm:p-7"><h2 className="text-xl font-semibold">Aplicaciones típicas</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{applications.map((application) => <li key={application} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{application}</li>)}</ul><p className="mt-5 border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground">Ficha técnica PDF disponible bajo solicitud al equipo comercial.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-secondary/20 py-14 lg:py-20"><div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Compra consultiva</span><h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight lg:text-5xl">¿Necesita validar esta referencia para su planta?</h2><p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Envíenos cantidad, aplicación, fecha requerida o una fotografía de la placa de datos. Le ayudaremos a validar la referencia y, si no está disponible, a buscar una alternativa.</p></div><Button asChild variant="hero" size="xl"><Link to={quoteUrl}><Search /> Solicitar validación técnica <ArrowRight /></Link></Button></div></section>
    </>
  );
};

export default Producto;
