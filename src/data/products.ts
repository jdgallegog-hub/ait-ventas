import plcImage from "@/assets/product-plc.jpg";
import hmiImage from "@/assets/product-hmi.jpg";
import positionerImage from "@/assets/product-positioner.jpg";
import sensorImage from "@/assets/product-sensor.jpg";
import transmitterImage from "@/assets/product-transmitter.jpg";
import valveImage from "@/assets/product-valve.jpg";
import allenBradley1400Image from "@/assets/product-allen-bradley-1400.webp";
import s71500Image from "@/assets/product-s7-1500.webp";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  sku: string;
  price: number;
  description: string;
  image: string;
  imageLabel: string;
};

const categoryImages: Record<string, { image: string; label: string }> = {
  PLC: { image: plcImage, label: "Imagen de referencia de PLC" },
  HMI: { image: hmiImage, label: "Imagen de referencia de interfaz HMI" },
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
  "S7-1500": {
    image: s71500Image,
    label: "Fotografía del PLC Siemens SIMATIC S7-1500",
  },
  "1766-L32BWA": {
    image: allenBradley1400Image,
    label: "Fotografía del PLC Allen-Bradley MicroLogix 1400",
  },
};

const product = (
  id: string,
  name: string,
  brand: string,
  category: string,
  sku: string,
  price: number,
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
  product("7", "HMI Kinco 7\" Touch", "Kinco", "HMI", "GL070E", 600000, "Pantalla táctil HMI Kinco 7\" para interfaz hombre-máquina en aplicaciones industriales."),
  product("8", "Variador Mitsubishi 1HP", "Mitsubishi", "Variadores", "FR-D720-042-NA", 550000, "Variador de frecuencia Mitsubishi 1HP serie D720 para control de velocidad de motores."),
  product("9", "Gateway Industrial", "Moxa", "Comunicaciones", "S2E-100MD", 300000, "Gateway industrial Serial-Ethernet para conectar equipos legados a redes IP."),
  product("10", "Siemens SIMATIC IOT2040", "Siemens", "Comunicaciones", "SIMATIC IOT2040", 1500000, "Gateway IoT industrial Siemens SIMATIC IOT2040 para conectividad y procesamiento en el borde."),
  product("11", "Arrancador Suave Siemens SIRIUS", "Siemens", "Variadores", "3RW3014-1BB14", 500000, "Arrancador suave Siemens SIRIUS 3RW30 para arranque controlado de motores trifásicos."),
  product("12", "Módulo de Comunicación Siemens", "Siemens", "Comunicaciones", "6ES7541-1AB00-0AB0", 1800000, "Módulo de comunicación Siemens 6ES7541 PtP para integración con protocolos serie."),
  product("13", "Válvula Solenoide ASCO 3/4\" NPT 24VDC", "ASCO", "Válvulas", "ASCO-3/4-24VDC", 400000, "Válvula solenoide ASCO 3/4\" NPT - 24VDC. Nueva sin caja, lista para servicio."),
  product("14", "Motor Eléctrico Techtop 0.75 HP", "Techtop", "Motores", "T1A-71-3-4-B5", 350000, "Motor eléctrico Techtop 0.75 HP (0.55 kW) - 1500 RPM - Brida B5 para acoplamiento directo."),
  product("15", "Presostato Industrial CCS Dual-Snap", "CCS", "Instrumentación", "646GZE11", 1000000, "Presostato industrial CCS Dual-Snap 646GZE11 con rango 12-150 PSI para control de presión."),
  product("16", "Presostato Baja Presión ITT Neo-Dyn", "ITT Neo-Dyn", "Instrumentación", "142P", 1200000, "Presostato de baja presión ITT Neo-Dyn 142P con rango 2-40 in H2O para servicios delicados."),
  product("17", "Transmisor de Presión Siemens SITRANS P DS III", "Siemens", "Transmisores", "7MF4033-1DA10-1NC6-Z", 2600000, "Transmisor de presión Siemens SITRANS P DS III modelo 7MF4033 con protocolo HART."),
  product("18", "Transmisor de Presión Siemens SITRANS P220", "Siemens", "Transmisores", "7MF1567-3CA00-5BA1", 650000, "Transmisor de presión Siemens SITRANS P220 rango 0-10 Bar, salida 4-20 mA."),
  product("19", "Transmisor Diferencial Siemens SITRANS P DS III", "Siemens", "Transmisores", "7MF44331EY221AC1-Z", 5000000, "Transmisor de presión diferencial Siemens SITRANS P DS III modelo 7MF4433 de alta precisión."),
  product("20", "Transmisor Diferencial Yokogawa EJA110A", "Yokogawa", "Transmisores", "91MC27289", 3000000, "Transmisor de presión diferencial Yokogawa EJA110A con tecnología DPharp y alta estabilidad."),
  product("21", "Transmisor de Nivel Ultrasónico Siemens SITRANS", "Siemens", "Transmisores", "7ML5881-0AC01-0AD9-Z", 6000000, "Transmisor de nivel ultrasónico Siemens SITRANS para medición sin contacto en tanques y silos."),
  product("22", "Termostato Industrial United Electric", "United Electric", "Instrumentación", "E122-2BSB", 900000, "Termostato industrial United Electric E122-2BSB con rango 30-250°F para control de temperatura."),
  product("23", "Elemento de Presión Helicoidal Barton (0-50 PSI)", "Barton", "Instrumentación", "B-ELM-050", 300000, "Elemento de presión helicoidal Barton rango 0-50 PSI, repuesto OEM para registradores."),
  product("25", "Elemento de Presión Helicoidal Barton (0-1000 PSI)", "Barton", "Instrumentación", "B-ELM-1000", 850000, "Elemento de presión helicoidal Barton rango 0-1000 PSI, repuesto OEM de alta presión."),
  product("26", "Elemento de Presión Helicoidal Barton (0-1500 PSI)", "Barton", "Instrumentación", "B-ELM-1500", 900000, "Elemento de presión helicoidal Barton rango 0-1500 PSI, repuesto OEM para alta presión."),
];

export const categories = [
  "Todos",
  "PLC",
  "HMI",
  "Variadores",
  "Transmisores",
  "Instrumentación",
  "Válvulas",
  "Motores",
  "Comunicaciones",
];

export const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
