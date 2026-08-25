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
import type { Product } from "./products";

export type ProductGalleryImage = {
  src: string;
  alt: string;
};

export const productGalleries: Record<string, ProductGalleryImage[]> = {
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
};

export const productCharacteristics: Record<string, string[]> = {
  "S7-1500": [
    "Controlador Siemens SIMATIC S7-1500 compacto",
    "Pantalla frontal para diagnóstico local",
    "Arquitectura modular con entradas y salidas visibles",
    "Referencia comercial: S7-1500",
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
