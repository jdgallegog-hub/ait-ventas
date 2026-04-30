import { Link } from "react-router-dom";
import { ShoppingCart, X, Minus, Plus, Trash2, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/context/QuoteCartContext";
import { formatCOP } from "@/data/products";
import { cn } from "@/lib/utils";

const PHONE = "573005747839";

const buildMessage = (items: ReturnType<typeof useQuoteCart>["items"], total: number) => {
  const lines = [
    "Hola AIT, quisiera cotizar los siguientes productos:",
    "",
    ...items.map(
      (i, idx) =>
        `${idx + 1}. ${i.name} (${i.sku}) — ${i.qty} x ${formatCOP(i.price)} = ${formatCOP(i.qty * i.price)}`
    ),
    "",
    `Subtotal estimado: ${formatCOP(total)}`,
    "Por favor confirmar disponibilidad y tiempos de entrega.",
  ];
  return lines.join("\n");
};

export const QuoteCartFAB = () => {
  const { count, setOpen } = useQuoteCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Abrir carrito de cotización"
      className="fixed bottom-6 right-24 z-50 group"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-amber text-primary-foreground shadow-elegant ring-4 ring-primary/20 transition-transform duration-200 group-hover:scale-110">
        <ShoppingCart className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-foreground text-background text-[11px] font-mono font-bold flex items-center justify-center border-2 border-background">
            {count}
          </span>
        )}
      </span>
    </button>
  );
};

export const QuoteCartDrawer = () => {
  const { items, total, count, remove, setQty, clear, open, setOpen } = useQuoteCart();

  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(buildMessage(items, total))}`;
  const mailHref = `mailto:operaciones@aitsolucionesautomaticas.com?subject=${encodeURIComponent(
    "Solicitud de cotización"
  )}&body=${encodeURIComponent(buildMessage(items, total))}`;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-foreground/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[71] h-full w-full sm:w-[420px] bg-background border-l border-border shadow-elegant flex flex-col transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              ✽ Cotización
            </div>
            <h2 className="text-xl font-bold mt-1">
              {count} {count === 1 ? "producto" : "productos"}
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="h-9 w-9 rounded-sm hover:bg-secondary flex items-center justify-center"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-10 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-6">
                Tu cotización está vacía. Agrega productos del catálogo.
              </p>
              <Button asChild variant="hero" onClick={() => setOpen(false)}>
                <Link to="/tienda">Ir a la tienda</Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((i) => (
                <li key={i.id} className="p-4 flex gap-3">
                  <div className="h-20 w-20 shrink-0 rounded-sm bg-secondary/40 overflow-hidden">
                    <img src={i.image} alt={i.name} className="w-full h-full object-contain p-1" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {i.brand} · {i.sku}
                    </div>
                    <div className="text-sm font-semibold leading-snug truncate">{i.name}</div>
                    <div className="text-sm font-mono text-gradient-amber font-bold mt-1">
                      {formatCOP(i.price * i.qty)}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="inline-flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => setQty(i.id, i.qty - 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-secondary"
                          aria-label="Disminuir"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-mono">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.id, i.qty + 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-secondary"
                          aria-label="Aumentar"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(i.id)}
                        className="ml-auto h-7 w-7 flex items-center justify-center text-muted-foreground hover:text-destructive"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border p-6 space-y-4 bg-secondary/30">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Subtotal estimado
              </span>
              <span className="text-2xl font-bold font-mono text-gradient-amber">
                {formatCOP(total)}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Los precios son referenciales. Confirmaremos disponibilidad, IVA y tiempos de entrega al recibir tu solicitud.
            </p>
            <div className="grid grid-cols-1 gap-2">
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Enviar cotización por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outlineGlow" size="default" className="w-full">
                <a href={mailHref}>
                  <Mail className="h-4 w-4" />
                  Enviar por correo
                </a>
              </Button>
              <button
                onClick={clear}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-destructive transition-smooth py-2"
              >
                Vaciar cotización
              </button>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
};
