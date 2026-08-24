import allenBradley1400FrontImage from "@/assets/product-allen-bradley-1400-front.webp";
import allenBradley1400Image from "@/assets/product-allen-bradley-1400.webp";
import allenBradley1400WiredImage from "@/assets/product-allen-bradley-1400-wired.webp";
import s71500Image from "@/assets/product-s7-1500.webp";
import s71500ModulesImage from "@/assets/product-s7-1500-modules.webp";
import s71500PairImage from "@/assets/product-s7-1500-pair.webp";
import softStarterSiriusFrontImage from "@/assets/product-soft-starter-sirius-front.webp";
import softStarterSiriusAngleImage from "@/assets/product-soft-starter-sirius-angle.webp";
import mitsubishiFrD720Image from "@/assets/product-mitsubishi-fr-d720.webp";
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
