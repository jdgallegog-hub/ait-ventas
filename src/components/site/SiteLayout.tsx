import { Outlet } from "react-router-dom";
import { Globe } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";

export const SiteLayout = () => (
  <div className="min-h-screen flex flex-col bg-background">
    {/* Top announcement bar — link to corporate site */}
    <a
      href="https://aitsolucionesautomaticas.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 inset-x-0 z-[60] bg-gradient-amber text-primary-foreground text-xs font-mono uppercase tracking-widest py-2 px-4 flex items-center justify-center gap-2 hover:opacity-90 transition-smooth"
    >
      <Globe className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">AIT Soluciones Automáticas — Especialistas en Instrumentación Industrial ·</span>
      <span className="sm:hidden">Visita</span>
      <span className="underline underline-offset-2">aitsolucionesautomaticas.com</span>
    </a>
    <div className="h-8" />
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFAB />
  </div>
);
