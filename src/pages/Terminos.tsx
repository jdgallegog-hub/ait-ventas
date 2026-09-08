import { Link } from "react-router-dom";

const Terminos = () => (
  <section className="container max-w-4xl py-20 lg:py-28">
    <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Información comercial</span>
    <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-6xl">Términos de uso y condiciones comerciales</h1>
    <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
      <section><h2 className="text-xl font-semibold text-foreground">1. Información del catálogo</h2><p className="mt-2">Las fotografías, descripciones, especificaciones, precios y estados de disponibilidad publicados son información comercial de referencia. La cotización final confirma referencia, condición, configuración, accesorios, cantidad, impuestos, transporte y plazo.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">2. Equipos disponibles y bajo pedido</h2><p className="mt-2">Un producto publicado puede agotarse, venderse o cambiar de disponibilidad. Cuando una referencia no esté disponible, AIT puede revisar nueva disponibilidad, otra unidad o una alternativa compatible según los requisitos del cliente.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">3. Compatibilidad técnica</h2><p className="mt-2">La compatibilidad de un equipo depende de la aplicación, configuración, versión, accesorios, señales, alimentación, comunicaciones y demás condiciones de proceso. La selección final debe validarse antes de la compra o instalación.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">4. Solicitudes y cotizaciones</h2><p className="mt-2">Enviar una solicitud desde el sitio no constituye una orden de compra ni garantiza precio o disponibilidad. Las condiciones comerciales quedan establecidas en la cotización aceptada por las partes.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">5. Servicios técnicos</h2><p className="mt-2">El alcance de calibración, diagnóstico, mantenimiento, puesta en marcha o automatización se define según el equipo, las condiciones del sitio y el requerimiento específico. Cualquier certificado o documento técnico se entrega únicamente cuando forme parte del alcance contratado.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">6. Contacto</h2><p className="mt-2">Para aclaraciones sobre una referencia, disponibilidad o condiciones comerciales, utilice los canales publicados en la sección de contacto.</p></section>
    </div>
    <Link to="/contacto" className="mt-10 inline-flex font-semibold text-primary hover:text-foreground">Solicitar cotización →</Link>
  </section>
);

export default Terminos;
