import plcImage from "@/assets/product-plc.jpg";
import mitsubishiFx5uImage from "@/assets/product-mitsubishi-fx5u";
import positionerImage from "@/assets/product-positioner.jpg";
import sensorImage from "@/assets/product-sensor.jpg";
import transmitterImage from "@/assets/product-transmitter.jpg";
import valveImage from "@/assets/product-valve.jpg";
import allenBradley1400Image from "@/assets/product-allen-bradley-1400.webp";
import s71500Image from "@/assets/product-s7-1500.webp";
import mitsubishiFx5uImage from "@/assets/product-mitsubishi-fx5u-32mr-es.webp";
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
  previousPrice?: number;
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

const productImages: Partial<Record<string, { image: string; label: string }>> = {
  "FX5U-32MR/ES": { image: mitsubishiFx5uImage, label: "Fotografía real del PLC Mitsubishi Electric iQ-F FX5U-32MR/ES disponible en AIT" },
  "E122-2BSB": { image: unitedElectricImage1, label: "Fotografía del termostato industrial United Electric" },
  "7ML5881-0AC01-0AD9-Z": { image: siemensLevelImage1, label: "Fotografía del transmisor de nivel Siemens SITRANS" },
  "7NG3136-0AC11": { image: siemensTemperatureImage1, label: "Fotografía del transmisor de temperatura Siemens SITRANS TF" },
  "7MF44331EY221AC1-Z": { image: siemensDifferentialImage1, label: "Fotografía del transmisor diferencial Siemens SITRANS P DS III" },
  "7MF1567-3CA00-5BA1": { image: siemensP220Image1, label: "Fotografía del transmisor Siemens SITRANS P220" },
  "3300": { image: rosemount3300Image1, label: "Fotografía del transmisor de nivel Rosemount 3300" },
  "S7-1500": { image: s71500Image, label: "Fotografía del PLC Siemens SIMATIC S7-1500" },
  "1766-L32BWA": { image: allenBradley1400Image, label: "Fotografía del PLC Allen-Bradley MicroLogix 1400" },
  "3RW3014-1BB14": { image: softStarterSiriusFrontImage, label: "Fotografía del arrancador suave Siemens SIRIUS" },
  "FX5U-32MR/ES": { image: mitsubishiFx5uImage, label: "Fotografía del PLC Mitsubishi Electric iQ-F FX5U-32MR/ES" },
  "6ES7541-1AB00-0AB0": { image: comm6es7541Image, label: "Fotografía del módulo de comunicación Siemens 6ES7541" },
  "SIMATIC IOT2040": { image: iot2040Image, label: "Fotografía del Siemens SIMATIC IOT2040" },
  "S2E-100MD": { image: gatewayS2eImage, label: "Fotografía del Gateway Industrial S2E-100MD" },
  "142P": { image: ittNeodynImage, label: "Fotografía del presostato ITT Neo-Dyn" },
  "646GZE11": { image: ccsDualSnapImage, label: "Fotografía del presostato CCS Dual-Snap 646GZE11" },
  "91MC27289": { image: yokogawaEja110aImage, label: "Fotografía del transmisor diferencial Yokogawa EJA110A" },
  "ASCO-3/4-24VDC": { image: ascoSolenoidImage, label: "Fotografía de válvula solenoide ASCO" },
  "T1A-71-3-4-B5": { image: techtopMotorImage, label: "Fotografía del motor eléctrico TechTop 0,75 HP" },
};

const product = (
  id: string,
  name: string,
  brand: string,
  category: string,
  sku: string,
  price: number | null,
  description: string,
  previousPrice?: number,
): Product => {
  const visual = productImages[sku] ?? categoryImages[category];
  return { id, name, brand, category, sku, price, previousPrice, description, image: visual.image, imageLabel: visual.label };
};

export const products: Product[] = [
  product("5", "PLC S7-1500 Compacto con módulos", "Siemens", "PLC", "S7-1500", 4000000, "Controlador lógico programable Siemens SIMATIC S7-1500 compacto de alto desempeño para automatización industrial. Unidad de liquidación, usada y probada funcionalmente, sin caja original.", 5800000),
  product("6", "PLC Allen-Bradley 1400", "Allen-Bradley", "PLC", "1766-L32BWA", null, "🔥 ¡Equipo vendido! Esta unidad ya fue vendida, pero podemos ayudarte a conseguir otro Allen-Bradley MicroLogix 1400 o una alternativa compatible bajo pedido. Consulta disponibilidad, precio y opciones para tu proyecto."),
  product("8", "PLC Mitsubishi iQ-F FX5U-32MR/ES", "Mitsubishi Electric", "PLC", "FX5U-32MR/ES", 1000000, "PLC Mitsubishi Electric serie iQ-F FX5U-32MR/ES, unidad en excelente estado. 32 puntos de E/S: 16 entradas 24 VDC y 16 salidas a relé. Incluye Ethernet integrado para programación y comunicación Modbus TCP, RS485 para redes industriales y comunicación con variadores, ranura para tarjeta SD para registro y respaldo, capacidad de control de movimiento y alimentación 100-240 V AC. Ideal para modernización y automatización industrial. Consulte disponibilidad y cotice esta referencia."),
  product("9", "Gateway Industrial", "Moxa", "Comunicaciones", "S2E-100MD", 350000, "Gateway industrial Serial-Ethernet para conectar equipos legados a redes IP."),
  product("10", "Siemens SIMATIC IOT2040", "Siemens", "Comunicaciones", "SIMATIC IOT2040", 650000, "Gateway IoT industrial Siemens SIMATIC IOT2040 para conectividad y procesamiento en el borde."),
  product("11", "Arrancador Suave Siemens SIRIUS", "Siemens", "Variadores", "3RW3014-1BB14", 550000, "Arrancador suave Siemens SIRIUS 3RW30 para arranque controlado de motores trifásicos."),
  product("12", "Módulo de Comunicación Siemens", "Siemens", "Comunicaciones", "6ES7541-1AB00-0AB0", 1700000, "Módulo de comunicación Siemens 6ES7541 PtP para integración con protocolos serie."),
  product("13", "Válvula Solenoide ASCO 3/4\" NPT 24VDC", "ASCO", "Válvulas", "ASCO-3/4-24VDC", 500000, "Válvula solenoide ASCO 3/4\" NPT - 24VDC. Nueva sin caja, lista para servicio."),
  product("14", "Motor Eléctrico Techtop 0.75 HP", "Techtop", "Motores", "T1A-71-3-4-B5", 450000, "Motor eléctrico Techtop 0.75 HP (0.55 kW) - 1500 RPM - Brida B5 para acoplamiento directo."),
  product("15", "Presostato Industrial CCS Dual-Snap", "CCS", "Instrumentación", "646GZE11", 1100000, "Presostato industrial CCS Dual-Snap 646GZE11 con rango 12-150 PSI para control de presión."),
  product("16", "Presostato de Baja Presión Nega-Rate", "ITT Neo-Dyn", "Instrumentación", "142P", 1600000, "Equipo a prueba de explosión para rangos críticos (2-40 inH2O)."),
  product("18", "Transmisor de Presión SITRANS P220 (0-10 Bar)", "Siemens", "Transmisores", "7MF1567-3CA00-5BA1", 1350000, "Transmisor compacto piezorresistivo de acero inoxidable 4-20 mA."),
  product("19", "Transmisor Diferencial SITRANS P DS III HART", "Siemens", "Transmisores", "7MF44331EY221AC1-Z", 10000000, "Transmisor inteligente con celda de alta precisión y display local."),
  product("20", "Transmisor Diferencial Yokogawa EJA110A", "Yokogawa", "Transmisores", "91MC27289", 4200000, "Sensor monocristalino DPharp de alta estabilidad a largo plazo."),
  product("21", "Radar de Onda Guiada SITRANS LG250", "Siemens", "Transmisores", "7ML5881-0AC01-0AD9-Z", 11500000, "Tecnología GWR de alta gama para nivel e interfaz en tanques."),
  product("22", "Termostato Industrial Heavy-Duty (30-250°F)", "United Electric", "Instrumentación", "E122-2BSB", 1650000, "Control de temperatura hermético a prueba de explosión (Clase I Div 1)."),
  product("24", "Transmisor de Temperatura de Campo SITRANS TF", "Siemens", "Transmisores", "7NG3136-0AC11", 4800000, "Cabezal IP67 de aluminio con display digital e integración HART."),
  product("27", "Transmisor de Nivel por Radar de Onda Guiada", "Rosemount", "Transmisores", "3300", 10000000, "Instrumentación de proceso de nivel continuo para líquidos severos."),
];

export const categories = ["Todos", "PLC", "Variadores", "Transmisores", "Instrumentación", "Válvulas", "Motores", "Comunicaciones"];

export const formatCOP = (value: number | null) => value === null ? "Consultar" : new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
