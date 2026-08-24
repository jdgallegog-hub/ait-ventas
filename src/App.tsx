import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";

const Index = lazy(() => import("./pages/Index"));
const Tienda = lazy(() => import("./pages/Tienda"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="flex min-h-[45vh] items-center justify-center bg-background text-sm font-mono uppercase tracking-[0.18em] text-primary">
    Cargando AIT Ventas...
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<Contacto />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
