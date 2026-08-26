import plcImage from "@/assets/product-plc.jpg";
import positionerImage from "@/assets/product-positioner.jpg";
import sensorImage from "@/assets/product-sensor.jpg";
import transmitterImage from "@/assets/product-transmitter.jpg";
import valveImage from "@/assets/product-valve.jpg";
import allenBradley1400Image from "@/assets/product-allen-bradley-1400.webp";
import s71500Image from "@/assets/product-s7-1500.webp";
import mitsubishiFrD720Image from "@/assets/product-mitsubishi-fr-d720.webp";
import softStarterSiriusFrontImage from "@/assets/product-soft-starter-sirius-front.webp";
import comm6es7541Image from "@/assets/product-comm-6es7541-1.webp";
import iot2040Image from "@/assets/product-iot2040-1.webp";
import gatewayS2eImage from "@/assets/product-gateway-s2e-100md-1.webp";
import ittNeodynImage from "@/assets/product-itt-neodyn-142p-2.webp";
import ccsDualSnapImage from "@/assets/product-ccs-dual-snap-646gze11-2.webp";
import yokogawaEja110aImage from "@/assets/product-yokogawa-eja110a-1.webp";
import ascoSolenoidImage from "@/assets/product-asco-solenoid-1.webp";
import techtopMotorImage from "@/assets/product-techtop-motor-1.webp";
import unitedElectricImage1 from "@/assets/product-united-electric-01.jpeg";
import siemensLevelImage1 from "@/assets/product-siemens-level-01.jpeg";
import siemensTemperatureImage1 from "@/assets/product-siemens-temperature-01.jpeg";
import siemensDifferentialImage1 from "@/assets/product-siemens-differential-01.jpeg";
import siemensP220Image1 from "@/assets/product-siemens-p220-01.jpeg";
import rosemount3300Image1 from "@/assets/product-rosemount-3300-01.jpeg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  sku: string;
  price: number | null;
  description: string;
  image: string;
  imageLabel: string;
};

const categoryImages: Record<string, { image: string; label: string }> = {
  PLC: { image: plcImage, label: "Imagen de referencia de PLC" },
  Variadores: { image: positionerImage, label: "Imagen de referencia de equipo de control" },
  Comunicaciones: { image: sensorImage, label: "Imagen de referencia de comunicación industrial" },
  Transmisores: { image: transmitterImage, label: "Imagen de referencia de transmisor" },
  Instrumentación: { image: sensorImage, label: "Imagen de referencia de instrumentación" },
  Válvulas: { image: valveImage, label: "Imagen de referencia de válvula industrial" },
  Motores: { image: positionerImage, label: "Imagen de referencia de equipo electromecánico" },
};

/**
 * Sobrescribe aquí la foto de un SKU específico cuando ya tengas la imagen real.
 * Ejemplo: "S7-1500": { image: plcImage, label: "Foto real del PLC S7-1500" },
 */
const productImages: Partial<Record<string, { image: string; label: string }>> = {
  "E122-2BSB": {
    image: unitedElectricImage1,
    label: "Fotografía del termostato industrial United Electric",
  },
  "7ML5881-0AC01-0AD9-Z": {
    image: siemensLevelImage1,
    label: "Fotografía del transmisor de nivel Siemens SITRANS",
  },
  "7NG3136-0AC11": {
    image: siemensTemperatureImage1,
    label: "Fotografía del transmisor de temperatura Siemens SITRANS TF",
  },
  "7MF44331EY221AC1-Z": {
    image: siemensDifferentialImage1,
    label: "Fotografía del transmisor diferencial Siemens SITRANS P DS III",
  },
  "7MF1567-3CA00-5BA1": {
    image: siemensP220Image1,
    label: "Fotografía del transmisor Siemens SITRANS P220",
  },
  "3300": {
    image: rosemount3300Image1,
    label: "Fotografía del transmisor de nivel Rosemount 3300",
  },
  "S7-1500": {
    image: s71500Image,
    label: "Fotografía del PLC Siemens SIMATIC S7-1500",
  },
  "1766-L32BWA": {
    image: allenBradley1400Image,
    label: "Fotografía del PLC Allen-Bradley MicroLogix 1400",
  },
  "3RW3014-1BB14": {
    image: softStarterSiriusFrontImage,
    label: "Fotografía del arrancador suave Siemens SIRIUS",
  },
  "FR-D720-042-NA": {
    image: mitsubishiFrD720Image,
    label: "Fotografía del variador Mitsubishi FR-D720",
  },
  "6ES7541-1AB00-0AB0": {
    image: comm6es7541Image,
    label: "Fotografía del módulo de comunicación Siemens 6ES7541",
  },
  "SIMATIC IOT2040": {
    image: iot2040Image,
    label: "Fotografía del Siemens SIMATIC IOT2040",
  },
  "S2E-100MD": {
    image: gatewayS2eImage,
    label: "Fotografía del Gateway Industrial S2E-100MD",
  },
  "142P": {
    image: ittNeodynImage,
    label: "Fotografía del presostato ITT Neo-Dyn",
  },
  "646GZE11": {
    image: ccsDualSnapImage,
    label: "Fotografía del presostato CCS Dual-Snap 646GZE11",
  },
  "91MC27289": {
    image: yokogawaEja110aImage,
    label: "Fotografía del transmisor diferencial Yokogawa EJA110A",
  },
  "ASCO-3/4-24VDC": {
    image: ascoSolenoidImage,
    label: "Fotografía de válvula solenoide ASCO",
  },
  "T1A-71-3-4-B5": {
    image: techtopMotorImage,
    label: "Fotografía del motor eléctrico TechTop 0,75 HP",
  },
};

const product = (
  id: string,
  name: string,
  brand: string,
  category: string,
  sku: string,
  price: number | null,
  description: string,
): Product => {
  const visual = productImages[sku] ?? categoryImages[category];

  return {
  id,
  name,
  brand,
  category,
  sku,
  price,
  description,
    image: visual.image,
    imageLabel: visual.label,
  };
};

export const products: Product[] = [
  product("5", "PLC S7-1500 Compacto", "Siemens", "PLC", "S7-1500", 2850000, "Controlador lógico programable Siemens SIMATIC S7-1500 compacto de alto desempeño para automatización industrial."),
  product("6", "PLC Allen-Bradley 1400", "Allen-Bradley", "PLC", "1766-L32BWA", 1950000, "PLC Allen-Bradley MicroLogix 1400 con E/S integradas para aplicaciones de control medio."),
  product("8", "Variador Mitsubishi 1HP", "Mitsubishi", "Variadores", "FR-D720-042-NA", 550000, "Variador de frecuencia Mitsubishi 1HP serie D720 para control de velocidad de motores."),
  product("9", "Gateway Industrial", "Moxa", "Comunicaciones", "S2E-100MD", 300000, "Gateway industrial Serial-Ethernet para conectar equipos legados a redes IP."),
  product("10", "Siemens SIMATIC IOT2040", "Siemens", "Comunicaciones", "SIMATIC IOT2040", 1500000, "Gateway IoT industrial Siemens SIMATIC IOT2040 para conectividad y procesamiento en el borde."),
  product("11", "Arrancador Suave Siemens SIRIUS", "Siemens", "Variadores", "3RW3014-1BB14", 500000, "Arrancador suave Siemens SIRIUS 3RW30 para arranque controlado de motores trifásicos."),
  product("12", "Módulo de Comunicación Siemens", "Siemens", "Comunicaciones", "6ES7541-1AB00-0AB0", 1800000, "Módulo de comunicación Siemens 6ES7541 PtP para integración con protocolos serie."),
  product("13", "Válvula Solenoide ASCO 3/4\" NPT 24VDC", "ASCO", "Válvulas", "ASCO-3/4-24VDC", 400000, "Válvula solenoide ASCO 3/4\" NPT - 24VDC. Nueva sin caja, lista para servicio."),
  product("14", "Motor Eléctrico Techtop 0.75 HP", "Techtop", "Motores", "T1A-71-3-4-B5", 350000, "Motor eléctrico Techtop 0.75 HP (0.55 kW) - 1500 RPM - Brida B5 para acoplamiento directo."),
  product("15", "Presostato Industrial CCS Dual-Snap", "CCS", "Instrumentación", "646GZE11", 1000000, "Presostato industrial CCS Dual-Snap 646GZE11 con rango 12-150 PSI para control de presión."),
  product("16", "Presostato Baja Presión ITT Neo-Dyn", "ITT Neo-Dyn", "Instrumentación", "142P", 1200000, "Presostato de baja presión ITT Neo-Dyn 142P con rango 2-40 in H2O para servicios delicados."),
  product("18", "Transmisor de Presión Siemens SITRANS P220", "Siemens", "Transmisores", "7MF1567-3CA00-5BA1", 650000, "Transmisor de presión Siemens SITRANS P220 rango 0-10 Bar, salida 4-20 mA."),
  product("19", "Transmisor Diferencial Siemens SITRANS P DS III", "Siemens", "Transmisores", "7MF44331EY221AC1-Z", 5000000, "Transmisor de presión diferencial Siemens SITRANS P DS III modelo 7MF4433 de alta precisión."),
  product("20", "Transmisor Diferencial Yokogawa EJA110A", "Yokogawa", "Transmisores", "91MC27289", 3000000, "Transmisor de presión diferencial Yokogawa EJA110A con tecnología DPharp y alta estabilidad."),
  product("21", "Transmisor de Nivel Ultrasónico Siemens SITRANS", "Siemens", "Transmisores", "7ML5881-0AC01-0AD9-Z", 6000000, "Transmisor de nivel ultrasónico Siemens SITRANS para medición sin contacto en tanques y silos."),
  product("22", "Termostato Industrial United Electric", "United Electric", "Instrumentación", "E122-2BSB", 900000, "Termostato industrial United Electric E122-2BSB con rango 30-250°F para control de temperatura."),
  product("24", "Transmisor de Temperatura Siemens SITRANS TF", "Siemens", "Transmisores", "7NG3136-0AC11", null, "Transmisor de temperatura Siemens SITRANS TF. Referencia, configuración y disponibilidad técnica bajo solicitud."),
  product("27", "Transmisor de Nivel Rosemount 3300", "Rosemount", "Transmisores", "3300", null, "Transmisor de nivel Rosemount 3300 con sonda y electrónica visibles en las fotografías del inventario. Configuración, longitud de sonda y disponibilidad bajo solicitud."),
];

export const categories = [
  "Todos",
  "PLC",
  "Variadores",
  "Transmisores",
  "Instrumentación",
  "Válvulas",
  "Motores",
  "Comunicaciones",
];

export const formatCOP = (value: number | null) =>
  value === null
    ? "Consultar"
    : new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
