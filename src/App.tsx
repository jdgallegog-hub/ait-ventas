import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index.tsx";
import Servicios from "./pages/Servicios.tsx";
import Tienda from "./pages/Tienda.tsx";
import SobreNosotros from "./pages/SobreNosotros.tsx";
import Contacto from "./pages/Contacto.tsx";
import Auth from "./pages/Auth.tsx";
import MiCuenta from "./pages/MiCuenta.tsx";
import OAuthConsent from "./pages/OAuthConsent.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/mi-cuenta" element={<MiCuenta />} />
              <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
