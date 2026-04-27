import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import supportImg from "@/assets/service-support.jpg";

const values = [
  { title: "Integridad", desc: "Trazabilidad y transparencia en cada intervención técnica." },
  { title: "Excelencia", desc: "Estándares internacionales aplicados a todos nuestros procesos." },
  { title: "Compromiso", desc: "Disponibilidad 24/7 para procesos de misión crítica." },
  { title: "Innovación", desc: "Adoptamos tecnologías que aumentan la confiabilidad." },
];

const SobreNosotros = () => (
  <>
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container relative">
        <span className="text-xs font-mono uppercase tracking-widest text-primary">
          ✽ Quiénes somos
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6 max-w-4xl leading-[1.05]">
          Más de una década resolviendo retos de{" "}
          <span className="text-gradient-amber">automatización industrial</span>.
        </h1>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={supportImg}
            alt="Ingeniero AIT realizando inspección técnica en planta industrial"
            loading="lazy"
            className="rounded-sm shadow-elegant w-full"
            width={1024}
            height={1024}
          />
          <div className="absolute -bottom-6 -right-6 hidden lg:block bg-gradient-amber p-6 rounded-sm shadow-amber max-w-xs">
            <div className="text-4xl font-bold font-mono text-primary-foreground">15+</div>
            <div className="text-sm text-primary-foreground/90 uppercase tracking-wider mt-1">
              Años transformando la industria
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ingeniería que mantiene operando lo que no puede detenerse.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AIT Soluciones Automáticas Industriales nace en Colombia con un
              propósito claro: ofrecer a la industria de procesos un aliado
              técnico de confianza para la instrumentación, el control y la
              automatización de sus operaciones críticas.
            </p>
            <p>
              Hemos acompañado a más de 200 plantas en sectores de petróleo y
              gas, petroquímica, generación eléctrica, alimentos y tratamiento
              de agua, entregando soluciones que combinan suministro técnico
              con ejecución en sitio.
            </p>
            <p>
              Nuestro equipo está conformado por ingenieros especializados con
              certificaciones de fábrica de los principales OEM del sector.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 border-y border-border/60 bg-secondary/30">
      <div className="container grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
        {[
          { icon: Target, title: "Misión", text: "Garantizar la continuidad operativa de la industria mediante soluciones de instrumentación y automatización de clase mundial." },
          { icon: Eye, title: "Visión", text: "Ser el aliado técnico de referencia en Latinoamérica para procesos industriales críticos hacia 2030." },
          { icon: Award, title: "Compromiso", text: "Calidad certificada, seguridad sin concesiones y respuesta inmediata cuando la planta lo necesita." },
        ].map((b) => (
          <div key={b.title} className="bg-background p-10">
            <b.icon className="h-10 w-10 text-primary mb-5" />
            <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">✽ Valores</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Lo que define nuestra forma de trabajar.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="p-8 rounded-sm border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-smooth"
            >
              <div className="text-5xl font-bold font-mono text-gradient-amber mb-4">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 border-t border-border/60">
      <div className="container text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Trabajemos juntos en su próximo proyecto.
        </h2>
        <Button asChild variant="hero" size="xl">
          <Link to="/contacto">
            Contactar al equipo
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default SobreNosotros;
