import { Link } from "react-router-dom";

const Privacidad = () => (
  <section className="container max-w-4xl py-20 lg:py-28">
    <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Información legal</span>
    <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-6xl">Política de tratamiento de datos personales</h1>
    <p className="mt-5 text-muted-foreground">Esta política aplica a los datos enviados voluntariamente a través del sitio web de AIT Soluciones Automáticas con el propósito de solicitar información, cotizaciones o servicios.</p>
    <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
      <section><h2 className="text-xl font-semibold text-foreground">1. Responsable</h2><p className="mt-2">AIT Soluciones Automáticas. Atención comercial desde Bogotá, Colombia. Para consultas relacionadas con el tratamiento de datos puede utilizar el formulario de contacto del sitio o los canales comerciales publicados.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">2. Datos que podemos recibir</h2><p className="mt-2">Nombre, empresa, correo electrónico, teléfono, categoría del requerimiento y la información técnica que el usuario decida incluir en su solicitud.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">3. Finalidades</h2><p className="mt-2">Atender solicitudes comerciales, preparar cotizaciones, validar referencias, responder consultas técnicas y realizar seguimiento de requerimientos relacionados con productos y servicios.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">4. Uso y seguridad</h2><p className="mt-2">La información se utiliza para las finalidades anteriores y se aplican medidas razonables para evitar accesos no autorizados. No solicitamos contraseñas, datos bancarios ni información financiera sensible mediante este formulario.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">5. Derechos del titular</h2><p className="mt-2">El titular puede solicitar consulta, actualización, rectificación o eliminación de sus datos, así como formular preguntas sobre su tratamiento, utilizando los canales de contacto del sitio.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground">6. Actualizaciones</h2><p className="mt-2">Esta política puede actualizarse cuando cambien los procesos del sitio, los servicios ofrecidos o las obligaciones aplicables. La versión publicada en esta página será la vigente.</p></section>
    </div>
    <Link to="/contacto" className="mt-10 inline-flex font-semibold text-primary hover:text-foreground">Contactar a AIT →</Link>
  </section>
);

export default Privacidad;
