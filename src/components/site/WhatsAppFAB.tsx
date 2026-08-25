import { MessageCircle } from "lucide-react";

const PHONE = "573005747839";
const MESSAGE =
  "Hola, necesito asesoría con instrumentación industrial.";

export const WhatsAppFAB = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant ring-4 ring-[#25D366]/20 transition-transform duration-200 group-hover:scale-110">
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-foreground px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 hidden md:block">
        Consultar por WhatsApp
      </span>
    </a>
  );
};
