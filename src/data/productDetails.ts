import allenBradley1400FrontImage from "@/assets/product-allen-bradley-1400-front.webp";
import allenBradley1400Image from "@/assets/product-allen-bradley-1400.webp";
import allenBradley1400WiredImage from "@/assets/product-allen-bradley-1400-wired.webp";
import s71500Image from "@/assets/product-s7-1500.webp";
import s71500ModulesImage from "@/assets/product-s7-1500-modules.webp";
import s71500PairImage from "@/assets/product-s7-1500-pair.webp";
import softStarterSiriusFrontImage from "@/assets/product-soft-starter-sirius-front.webp";
import softStarterSiriusAngleImage from "@/assets/product-soft-starter-sirius-angle.webp";
import mitsubishiFrD720Image from "@/assets/product-mitsubishi-fr-d720.webp";
import comm6es7541Image1 from "@/assets/product-comm-6es7541-1.webp";
import comm6es7541Image2 from "@/assets/product-comm-6es7541-2.webp";
import comm6es7541Image3 from "@/assets/product-comm-6es7541-3.webp";
import iot2040Image1 from "@/assets/product-iot2040-1.webp";
import iot2040Image2 from "@/assets/product-iot2040-2.webp";
import iot2040Image3 from "@/assets/product-iot2040-3.webp";
import gatewayS2eImage from "@/assets/product-gateway-s2e-100md-1.webp";
import ittNeodynImage1 from "@/assets/product-itt-neodyn-142p-1.webp";
import ittNeodynImage2 from "@/assets/product-itt-neodyn-142p-2.webp";
import ccsDualSnapImage1 from "@/assets/product-ccs-dual-snap-646gze11-1.webp";
import ccsDualSnapImage2 from "@/assets/product-ccs-dual-snap-646gze11-2.webp";
import yokogawaEja110aImage1 from "@/assets/product-yokogawa-eja110a-1.webp";
import yokogawaEja110aImage2 from "@/assets/product-yokogawa-eja110a-2.webp";
import yokogawaEja110aImage3 from "@/assets/product-yokogawa-eja110a-3.webp";
import yokogawaEja110aImage4 from "@/assets/product-yokogawa-eja110a-4.webp";
import ascoSolenoidImage from "@/assets/product-asco-solenoid-1.webp";
import techtopMotorImage1 from "@/assets/product-techtop-motor-1.webp";
import techtopMotorImage2 from "@/assets/product-techtop-motor-2.webp";
import techtopMotorImage3 from "@/assets/product-techtop-motor-3.webp";
import techtopMotorImage4 from "@/assets/product-techtop-motor-4.webp";
import unitedElectricImage1 from "@/assets/product-united-electric-01.jpeg";
import unitedElectricImage2 from "@/assets/product-united-electric-02.jpeg";
import unitedElectricImage3 from "@/assets/product-united-electric-03.jpeg";
import siemensLevelImage1 from "@/assets/product-siemens-level-01.jpeg";
import siemensLevelImage2 from "@/assets/product-siemens-level-02.jpeg";
import siemensLevelImage3 from "@/assets/product-siemens-level-03.jpeg";
import siemensLevelImage4 from "@/assets/product-siemens-level-04.jpeg";
import siemensLevelImage5 from "@/assets/product-siemens-level-05.jpeg";
import siemensLevelImage6 from "@/assets/product-siemens-level-06.jpeg";
import siemensTemperatureImage1 from "@/assets/product-siemens-temperature-01.jpeg";
import siemensTemperatureImage2 from "@/assets/product-siemens-temperature-02.jpeg";
import siemensTemperatureImage3 from "@/assets/product-siemens-temperature-03.jpeg";
import siemensTemperatureImage4 from "@/assets/product-siemens-temperature-04.jpeg";
import siemensTemperatureImage5 from "@/assets/product-siemens-temperature-05.jpeg";
import siemensTemperatureImage6 from "@/assets/product-siemens-temperature-06.jpeg";
import siemensP220Image1 from "@/assets/product-siemens-p220-01.jpeg";
import siemensP220Image2 from "@/assets/product-siemens-p220-02.jpeg";
import siemensP220Image3 from "@/assets/product-siemens-p220-03.jpeg";
import siemensDifferentialImage1 from "@/assets/product-siemens-differential-01.jpeg";
import siemensDifferentialImage2 from "@/assets/product-siemens-differential-02.jpeg";
import siemensDifferentialImage3 from "@/assets/product-siemens-differential-03.jpeg";
import siemensDifferentialImage4 from "@/assets/product-siemens-differential-04.jpeg";
import siemensDifferentialImage5 from "@/assets/product-siemens-differential-05.jpeg";
import siemensDifferentialImage6 from "@/assets/product-siemens-differential-06.jpeg";
import rosemount3300Image1 from "@/assets/product-rosemount-3300-01.jpeg";
import rosemount3300Image2 from "@/assets/product-rosemount-3300-02.jpeg";
import rosemount3300Image3 from "@/assets/product-rosemount-3300-03.jpeg";
import rosemount3300Image4 from "@/assets/product-rosemount-3300-04.jpeg";
import type { Product } from "./products";

export type ProductGalleryImage = {
  src: string;
  alt: string;
};

export const productGalleries: Record<string, ProductGalleryImage[]> = {
  "E122-2BSB": [
    { src: unitedElectricImage1, alt: "Termostato United Electric con sensor y capilar" },
    { src: unitedElectricImage2, alt: "Placa frontal del termostato United Electric" },
    { src: unitedElectricImage3, alt: "Termostato United Electric en vista adicional" },
  ],
  "7ML5881-0AC01-0AD9-Z": [
    { src: siemensLevelImage1, alt: "Transmisor de nivel Siemens SITRANS en vista frontal" },
    { src: siemensLevelImage2, alt: "Transmisor de nivel Siemens SITRANS en vista frontal alternativa" },
    { src: siemensLevelImage3, alt: "Sensor del transmisor de nivel Siemens SITRANS" },
    { src: siemensLevelImage4, alt: "Transmisor de nivel Siemens SITRANS con sensor" },
    { src: siemensLevelImage5, alt: "Placa del transmisor de nivel Siemens SITRANS" },
    { src: siemensLevelImage6, alt: "Transmisor de nivel Siemens SITRANS con empaque" },
  ],
  "7NG3136-0AC11": [
    { src: siemensTemperatureImage1, alt: "Transmisor de temperatura Siemens SITRANS TF en vista diagonal" },
    { src: siemensTemperatureImage2, alt: "Transmisor de temperatura Siemens SITRANS TF en su empaque" },
    { src: siemensTemperatureImage3, alt: "Transmisor de temperatura Siemens SITRANS TF en vista lateral" },
    { src: siemensTemperatureImage4, alt: "Transmisor de temperatura Siemens SITRANS TF en vista frontal" },
    { src: siemensTemperatureImage5, alt: "Transmisor de temperatura Siemens SITRANS TF en vista posterior" },
    { src: siemensTemperatureImage6, alt: "Transmisor de temperatura Siemens SITRANS TF en vista adicional" },
  ],
  "7MF1567-3CA00-5BA1": [
    { src: siemensP220Image1, alt: "Transmisor Siemens SITRANS P220 en vista frontal" },
    { src: siemensP220Image2, alt: "Transmisor Siemens SITRANS P220 en vista frontal alternativa" },
    { src: siemensP220Image3, alt: "Transmisor Siemens SITRANS P220 en vista lateral" },
  ],
  "7MF44331EY221AC1-Z": [
    { src: siemensDifferentialImage1, alt: "Transmisor diferencial Siemens SITRANS P DS III en vista de placa" },
    { src: siemensDifferentialImage2, alt: "Transmisor diferencial Siemens SITRANS P DS III en vista frontal" },
    { src: siemensDifferentialImage3, alt: "Transmisor diferencial Siemens SITRANS P DS III con conexiones" },
    { src: siemensDifferentialImage4, alt: "Transmisor diferencial Siemens SITRANS P DS III en vista lateral" },
    { src: siemensDifferentialImage5, alt: "Transmisor diferencial Siemens SITRANS P DS III en su empaque" },
    { src: siemensDifferentialImage6, alt: "Transmisor diferencial Siemens SITRANS P DS III en vista adicional" },
  ],
  "3300": [
    { src: rosemount3300Image1, alt: "Transmisor de nivel Rosemount 3300 con sonda" },
    { src: rosemount3300Image2, alt: "Transmisor de nivel Rosemount 3300 en vista lateral" },
    { src: rosemount3300Image3, alt: "Placa del transmisor de nivel Rosemount 3300" },
    { src: rosemount3300Image4, alt: "Transmisor de nivel Rosemount 3300 en vista adicional" },
  ],
  "S7-1500": [
    {
      src: s71500Image,
      alt: "PLC Siemens SIMATIC S7-1500 en vista individual",
    },
    {
      src: s71500ModulesImage,
      alt: "PLC Siemens SIMATIC S7-1500 con módulos de entradas y salidas",
    },
    {
      src: s71500PairImage,
      alt: "Dos configuraciones del PLC Siemens SIMATIC S7-1500",
    },
  ],
  "1766-L32BWA": [
    {
      src: allenBradley1400Image,
      alt: "PLC Allen-Bradley MicroLogix 1400 instalado con cableado",
    },
    {
      src: allenBradley1400FrontImage,
      alt: "PLC Allen-Bradley MicroLogix 1400 sobre fondo blanco",
    },
    {
      src: allenBradley1400WiredImage,
      alt: "PLC Allen-Bradley MicroLogix 1400 con conexiones visibles",
    },
  ],
  "3RW3014-1BB14": [
    {
      src: softStarterSiriusFrontImage,
      alt: "Arrancador suave Siemens SIRIUS 3RW3014-1BB14 de frente",
    },
    {
      src: softStarterSiriusAngleImage,
      alt: "Arrancador suave Siemens SIRIUS 3RW3014-1BB14 en vista lateral",
    },
  ],
  "FR-D720-042-NA": [
    {
      src: mitsubishiFrD720Image,
      alt: "Variador Mitsubishi FR-D720 de 1 HP en vista frontal",
    },
  ],
  "6ES7541-1AB00-0AB0": [
    { src: comm6es7541Image1, alt: "Módulo de comunicación Siemens 6ES7541 en vista frontal" },
    { src: comm6es7541Image2, alt: "Módulo de comunicación Siemens 6ES7541 en vista posterior" },
    { src: comm6es7541Image3, alt: "Módulo de comunicación Siemens 6ES7541 en vista lateral" },
  ],
  "SIMATIC IOT2040": [
    { src: iot2040Image1, alt: "Siemens SIMATIC IOT2040 en vista frontal" },
    { src: iot2040Image2, alt: "Siemens SIMATIC IOT2040 en vista lateral" },
    { src: iot2040Image3, alt: "Siemens SIMATIC IOT2040 en vista alternativa" },
  ],
  "S2E-100MD": [
    { src: gatewayS2eImage, alt: "Gateway industrial S2E-100MD en vista superior" },
  ],
  "142P": [
    { src: ittNeodynImage1, alt: "Presostato ITT Neo-Dyn 142P en instalación" },
    { src: ittNeodynImage2, alt: "Placa del presostato ITT Neo-Dyn 142P" },
  ],
  "646GZE11": [
    { src: ccsDualSnapImage1, alt: "Presostato CCS Dual-Snap 646GZE11 con conexiones" },
    { src: ccsDualSnapImage2, alt: "Placa del presostato CCS Dual-Snap 646GZE11" },
  ],
  "91MC27289": [
    { src: yokogawaEja110aImage1, alt: "Transmisor diferencial Yokogawa EJA110A en vista de placa" },
    { src: yokogawaEja110aImage2, alt: "Transmisor diferencial Yokogawa EJA110A en vista frontal" },
    { src: yokogawaEja110aImage3, alt: "Transmisor diferencial Yokogawa EJA110A en vista lateral" },
    { src: yokogawaEja110aImage4, alt: "Transmisor diferencial Yokogawa EJA110A en vista alternativa" },
  ],
  "ASCO-3/4-24VDC": [
    { src: ascoSolenoidImage, alt: "Válvula solenoide ASCO de 3/4 de pulgada" },
  ],
  "T1A-71-3-4-B5": [
    { src: techtopMotorImage1, alt: "Motor eléctrico TechTop en vista delantera" },
    { src: techtopMotorImage2, alt: "Motor eléctrico TechTop en vista lateral" },
    { src: techtopMotorImage3, alt: "Placa del motor eléctrico TechTop" },
    { src: techtopMotorImage4, alt: "Motor eléctrico TechTop con montaje de brida" },
  ],
};

export const productCharacteristics: Record<string, string[]> = {
  "E122-2BSB": [
    "Termostato industrial United Electric Controls",
    "Referencia de catálogo: E122-2BSB",
    "Rango indicado en el catálogo: 30–250 °F",
    "Estado, conexión y configuración deben confirmarse antes de cotizar",
  ],
  "7NG3136-0AC11": [
    "Transmisor de temperatura Siemens SITRANS TF",
    "Referencia de catálogo: 7NG3136-0AC11",
    "Equipo fotografiado con cuerpo y conexión de proceso visibles",
    "Rango, salida, alimentación y configuración deben confirmarse con la placa y la ficha técnica",
  ],
  "3300": [
    "Transmisor de nivel Rosemount 3300",
    "Referencia comercial: 3300",
    "Fotografías del inventario muestran electrónica Rosemount, sonda y cableado",
    "Longitud de sonda, conexión, salida, alimentación y estado deben confirmarse antes de cotizar",
  ],
  "S7-1500": [
    "Conjunto Siemens SIMATIC S7-1500 compacto con CPU y módulos visibles",
    "Pantalla frontal para diagnóstico local",
    "El valor publicado considera el conjunto fotografiado, no una CPU aislada",
    "Referencias exactas de CPU, módulos, memoria y fuente deben confirmarse antes de cotizar",
  ],
  "1766-L32BWA": [
    "PLC Allen-Bradley MicroLogix 1400",
    "Entradas y salidas integradas para control medio",
    "Pantalla y teclado frontal para operación y diagnóstico",
    "Referencia: 1766-L32BWA",
  ],
  "3RW3014-1BB14": [
    "Arrancador suave Siemens SIRIUS 3RW30",
    "Referencia visible: 3RW3014-1BB14",
    "Entrada de control de 110–230 V",
    "Ajuste de tiempo de arranque y tensión inicial",
  ],
  "FR-D720-042-NA": [
    "Variador de frecuencia Mitsubishi serie D700",
    "Referencia de catálogo: FR-D720-042-NA",
    "Alimentación y potencia final sujetas a validación técnica",
    "Control de velocidad para aplicaciones con motores eléctricos",
  ],
  "6ES7541-1AB00-0AB0": [
    "Módulo de comunicación Siemens PtP",
    "Referencia: 6ES7541-1AB00-0AB0",
    "Integración de equipos serie con plataformas SIMATIC",
    "Validación de protocolo y compatibilidad bajo solicitud",
  ],
  "SIMATIC IOT2040": [
    "Gateway IoT industrial Siemens SIMATIC IOT2040",
    "Conectividad y procesamiento de datos en el borde",
    "Diseñado para integración con redes y equipos industriales",
    "Referencia y accesorios se validan antes de cotizar",
  ],
  "S2E-100MD": [
    "Gateway industrial Serial-Ethernet S2E-100MD",
    "Conversión de comunicación serial a red IP",
    "Conectividad para equipos industriales legados",
    "Alimentación y protocolo deben validarse según la aplicación",
  ],
  "142P": [
    "Presostato ITT Neo-Dyn para baja presión",
    "Modelo visible en placa: 142P81C6443",
    "Rango incremental visible: 2 a 40 pulgadas de columna de agua",
    "Equipo para ambientes y aplicaciones industriales exigentes",
  ],
  "646GZE11": [
    "Presostato industrial CCS Dual-Snap",
    "Modelo visible en placa: 646GZE11",
    "Rango incremental visible: 12 a 150 PSI",
    "Conexiones y estado del equipo sujetos a validación técnica",
  ],
  "91MC27289": [
    "Transmisor diferencial Yokogawa EJA110A",
    "Tecnología DPharp y fabricación Yokogawa visible en placa",
    "Salida y configuración deben validarse con la placa completa",
    "Referencia comercial del catálogo: 91MC27289",
  ],
  "ASCO-3/4-24VDC": [
    "Válvula solenoide ASCO de cuerpo de latón",
    "Conexión nominal de 3/4 de pulgada según carpeta de producto",
    "Bobina y tensión deben confirmarse con la placa antes de cotizar",
    "Equipo fotografiado en condición usada o de inventario",
  ],
  "T1A-71-3-4-B5": [
    "Motor eléctrico TechTop, frame 71",
    "Potencia confirmada en placa: 0,75 HP / 0,55 kW",
    "Velocidad nominal aproximada: 1.650 rpm a 60 Hz",
    "Montaje con brida B5 según referencia del catálogo",
  ],
};

export const getProductGallery = (product: Product): ProductGalleryImage[] =>
  productGalleries[product.sku] ?? [
    {
      src: product.image,
      alt: `${product.imageLabel}: ${product.name}`,
    },
  ];

export const getProductCharacteristics = (product: Product): string[] =>
  productCharacteristics[product.sku] ?? [
    `Marca: ${product.brand}`,
    `Categoría: ${product.category}`,
    `Referencia: ${product.sku}`,
    "Disponibilidad y ficha técnica bajo solicitud",
  ];

export type ProductTechnicalSpecs = {
  variable: string;
  range: string;
  output: string;
  power: string;
  protection: string;
  certifications: string;
};

const categoryTechnicalSpecs: Record<string, ProductTechnicalSpecs> = {
  PLC: { variable: "Control lógico y automatización", range: "Según configuración del equipo", output: "E/S y protocolo según referencia", power: "Por confirmar según placa", protection: "Por confirmar según gabinete", certifications: "Por confirmar según referencia" },
  Variadores: { variable: "Control de velocidad y arranque", range: "Según potencia y configuración", output: "Frecuencia y control según referencia", power: "Por confirmar según placa", protection: "Por confirmar según instalación", certifications: "Por confirmar según referencia" },
  Transmisores: { variable: "Presión, nivel o temperatura", range: "Según modelo y elemento sensor", output: "4–20 mA / protocolo según referencia", power: "Por confirmar según placa", protection: "Por confirmar según modelo", certifications: "Por confirmar según aplicación" },
  Instrumentación: { variable: "Presión, temperatura o calidad de proceso", range: "Según referencia del instrumento", output: "Contacto, señal o indicador según modelo", power: "Por confirmar según placa", protection: "Por confirmar según instalación", certifications: "Por confirmar según aplicación" },
  Válvulas: { variable: "Control y aislamiento de fluidos", range: "Diámetro y presión según referencia", output: "Accionamiento según configuración", power: "Por confirmar según actuador o bobina", protection: "Por confirmar según instalación", certifications: "Por confirmar según servicio" },
  Motores: { variable: "Conversión electromecánica de potencia", range: "Potencia y velocidad según placa", output: "Eje y montaje según referencia", power: "Por confirmar según placa", protection: "Por confirmar según motor", certifications: "Por confirmar según placa" },
  Comunicaciones: { variable: "Conectividad y transmisión industrial", range: "Según protocolo y distancia", output: "Ethernet, serial o protocolo según referencia", power: "Por confirmar según placa", protection: "Por confirmar según gabinete", certifications: "Por confirmar según referencia" },
};

export const getProductTechnicalSpecs = (product: Product): ProductTechnicalSpecs =>
  categoryTechnicalSpecs[product.category] ?? {
    variable: "Por confirmar con el asesor técnico",
    range: "Por confirmar con la referencia",
    output: "Por confirmar con la placa",
    power: "Por confirmar con la placa",
    protection: "Por confirmar con la ficha técnica",
    certifications: "Por confirmar según aplicación",
  };

const categoryApplications: Record<string, string[]> = {
  PLC: ["Líneas de producción", "Máquinas y celdas automatizadas", "Control de procesos industriales"],
  Variadores: ["Motores y bombas", "Transportadores y ventiladores", "Arranque controlado de maquinaria"],
  Transmisores: ["Plantas de proceso", "Tanques y líneas de servicios", "Monitoreo y control de variables"],
  Instrumentación: ["Sistemas de presión y temperatura", "Servicios industriales", "Protección y monitoreo de equipos"],
  Válvulas: ["Líneas de proceso", "Control de fluidos", "Sistemas neumáticos e hidráulicos"],
  Motores: ["Bombas y ventiladores", "Transportadores", "Maquinaria industrial"],
  Comunicaciones: ["Integración de equipos legados", "Redes industriales", "Monitoreo remoto y edge computing"],
};

export const getProductApplications = (product: Product): string[] =>
  categoryApplications[product.category] ?? ["Procesos industriales", "Mantenimiento y operación", "Integración técnica bajo solicitud"];
