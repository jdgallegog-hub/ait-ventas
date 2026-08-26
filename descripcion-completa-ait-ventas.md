# Descripción completa de la página web AIT Ventas

**Nombre visible:** AIT Soluciones Automáticas  
**URL pública:** https://ait-ventas.vercel.app/  
**Tienda:** https://ait-ventas.vercel.app/tienda  
**Mercado objetivo:** Colombia, especialmente plantas industriales, integradores, empresas de mantenimiento, áreas de compras y responsables de instrumentación, control y automatización.

## 1. Descripción general

AIT Ventas es un sitio web B2B de catálogo técnico para comercializar equipos de instrumentación, control y automatización industrial. Su mensaje principal es ayudar a que la operación industrial no se detenga mediante el suministro de componentes, la identificación técnica de referencias y el acompañamiento de un ingeniero.

La página está diseñada bajo un modelo de **compra consultiva**. Esto significa que no presenta una compra automática con carrito y pago en línea; presenta cada equipo, muestra sus fotografías y precio de referencia, y conduce al visitante a solicitar disponibilidad y cotización. Antes de cerrar una operación se deben confirmar el estado, la configuración, los accesorios, la compatibilidad, la prueba funcional y, cuando corresponda, la calibración.

El sitio es independiente de Lovable y Odoo. Está desarrollado como una aplicación web con **Vite, React, TypeScript, React Router y Tailwind CSS**, con componentes de interfaz reutilizables. El repositorio se administra en GitHub, la aplicación está publicada en Vercel y el formulario de contacto registra las solicitudes comerciales en Supabase.

## 2. Estructura de navegación

La barra superior es fija y contiene el logotipo de AIT, los enlaces **Inicio, Tienda, Nosotros y Contacto**, el teléfono **+57 300 574 7839** y el botón **Cotizar ahora**. En dispositivos móviles la navegación se convierte en un menú desplegable.

Las rutas públicas principales son las siguientes:

| Ruta | Contenido |
|---|---|
| `/` | Página de inicio o landing page. Incluye soluciones, beneficios, sectores atendidos, servicios técnicos y llamadas a cotizar. |
| `/tienda` | Catálogo de 18 referencias con buscador, filtros, precios orientativos y botones de producto y cotización. |
| `/tienda/:sku` | Ficha individual de cada producto, con galería, características, especificaciones, aplicaciones y botones de cotización. |
| `/sobre-nosotros` | Presentación institucional, experiencia, misión, visión, compromiso y valores. |
| `/contacto` | Formulario de solicitud de cotización y canales de atención. |
| Ruta no encontrada | Pantalla de referencia no encontrada con enlace de regreso a la tienda. |

**Servicios no aparece como una ruta independiente en la navegación pública.** Está presentado como una sección dentro de Inicio y los enlaces del pie de página dirigen a `/#servicios`.

## 3. Página de Inicio

La portada utiliza una imagen de ambiente industrial, fondo oscuro, tipografía técnica y acentos amarillos. El encabezado principal comunica: **“Instrumentación y automatización industrial con soporte técnico en Colombia”**. El texto de apoyo presenta transmisores, válvulas, PLC, sensores y variadores con respaldo técnico local, cotización en menos de dos horas y entrega en toda Colombia.

La portada tiene dos llamadas principales: **Solicitar cotización** y **Ver catálogo completo**. También comunica tres beneficios inmediatos: respuesta en menos de dos horas, envío a toda Colombia y soporte técnico.

### Soluciones técnicas presentadas

La sección “Soluciones para cada proceso industrial” organiza la oferta en seis grupos de solución:

| Grupo de solución | Ejemplos presentados |
|---|---|
| Medición de presión | Transmisores de presión, manómetros industriales y presostatos. |
| Medición de caudal | Flujómetros electromagnéticos, medidores ultrasónicos y rotámetros. |
| Medición de temperatura | Termómetros industriales, termopares, RTD y transmisores de temperatura. |
| Análisis y calidad | Analizadores de pH, conductivímetros y turbidímetros. |
| Control y automatización | PLC, HMI, variadores de frecuencia y relés de protección. |
| Válvulas de control | Válvulas neumáticas, válvulas solenoides y actuadores. |

Cada bloque enlaza al catálogo. También existe una llamada para solicitar una referencia especial cuando el producto no aparece publicado.

### Diferenciadores comerciales

La portada comunica cuatro elementos de valor: soporte técnico real, disponibilidad y entrega, marcas líderes y respaldo técnico posterior a la venta. El texto menciona asesoría antes, durante y después de la compra, disponibilidad de inventario en Bogotá, despacho a toda Colombia, calibración, puesta en marcha, mantenimiento y capacitación.

### Sectores atendidos

La sección de cobertura nacional presenta seis sectores industriales:

| Sector | Aplicación comercial |
|---|---|
| Petroquímica y refinación | Instrumentación y control de procesos críticos. |
| Agua y saneamiento | Medición, control y tratamiento de servicios. |
| Manufactura y metalmecánica | Automatización de máquinas y líneas de producción. |
| Alimentos y bebidas | Medición y continuidad de procesos productivos. |
| Energía y utilities | Control, monitoreo y mantenimiento de infraestructura. |
| Construcción e infraestructura | Equipos de control y soluciones para proyectos. |

### Servicios técnicos dentro de Inicio

La página presenta cuatro servicios principales:

| Servicio | Descripción publicada |
|---|---|
| Calibración de instrumentos | Calibración en sitio y laboratorio de transmisores, manómetros, termómetros y equipos de análisis. |
| Puesta en marcha | Instalación, configuración y arranque supervisado de instrumentos, PLC, variadores y sistemas SCADA. |
| Automatización de procesos | Diseño e implementación de control, HMI y comunicación industrial con Profibus, HART, Modbus y Ethernet Industrial. |
| Mantenimiento preventivo | Planes periódicos para instrumentación crítica y reducción de paros no programados. |

## 4. Tienda o catálogo técnico

La tienda presenta el mensaje **“Componentes para que su operación no se detenga”** y comunica el modelo de compra consultiva mediante la frase **“Un equipo. Una respuesta técnica.”** Actualmente muestra:

| Indicador | Valor publicado |
|---|---:|
| Productos | 18 |
| Categorías | 7 |
| Respuesta comercial | 24 horas |
| Moneda | COP |
| Condición | Precios orientativos de segunda mano; validar estado |

Cada tarjeta de producto contiene una fotografía, marca, estado de disponibilidad, categoría, SKU, nombre, descripción breve, precio de referencia, botón **Ver producto**, botón **Solicitar cotización** y la indicación **Ficha técnica bajo solicitud**.

### Filtros de categoría

La tienda permite filtrar por las siete categorías comerciales siguientes:

| Categoría | Cantidad de referencias |
|---|---:|
| PLC | 2 |
| Variadores | 2 |
| Transmisores | 6 |
| Instrumentación | 3 |
| Válvulas | 1 |
| Motores | 1 |
| Comunicaciones | 3 |
| **Total** | **18** |

### Filtros por variable de proceso

Además de las categorías, la tienda tiene filtros por variable o aplicación: **Presión, Caudal, Temperatura, Nivel, Control y Comunicación**, junto con la opción **Todos**.

### Buscador

El buscador permite localizar productos por **marca, modelo, SKU o categoría**. Cuando no hay coincidencias, la tienda muestra un mensaje y ofrece solicitar una búsqueda especial mediante la red de proveedores.

## 5. Inventario publicado

Los precios son valores de referencia para equipos usados o de inventario y no constituyen una garantía de funcionamiento. El total aritmético de los 18 precios publicados es **$28.650.000 COP**, antes de considerar descuentos, transporte, impuestos, pruebas, calibración, comisiones o servicios adicionales.

| No. | Equipo | Marca | Categoría | SKU / referencia | Precio de referencia |
|---:|---|---|---|---|---:|
| 1 | PLC S7-1500 Compacto con módulos | Siemens | PLC | `S7-1500` | $5.800.000 |
| 2 | PLC Allen-Bradley 1400 | Allen-Bradley | PLC | `1766-L32BWA` | $1.650.000 |
| 3 | Variador Mitsubishi 1HP | Mitsubishi | Variadores | `FR-D720-042-NA` | $650.000 |
| 4 | Gateway Industrial | Moxa | Comunicaciones | `S2E-100MD` | $350.000 |
| 5 | Siemens SIMATIC IOT2040 | Siemens | Comunicaciones | `SIMATIC IOT2040` | $650.000 |
| 6 | Arrancador Suave Siemens SIRIUS | Siemens | Variadores | `3RW3014-1BB14` | $550.000 |
| 7 | Módulo de Comunicación Siemens | Siemens | Comunicaciones | `6ES7541-1AB00-0AB0` | $1.700.000 |
| 8 | Válvula Solenoide ASCO 3/4” NPT 24VDC | ASCO | Válvulas | `ASCO-3/4-24VDC` | $500.000 |
| 9 | Motor Eléctrico TechTop 0,75 HP | TechTop | Motores | `T1A-71-3-4-B5` | $450.000 |
| 10 | Presostato Industrial CCS Dual-Snap | CCS | Instrumentación | `646GZE11` | $1.100.000 |
| 11 | Presostato de Baja Presión ITT Neo-Dyn | ITT Neo-Dyn | Instrumentación | `142P` | $700.000 |
| 12 | Transmisor de Presión Siemens SITRANS P220 | Siemens | Transmisores | `7MF1567-3CA00-5BA1` | $700.000 |
| 13 | Transmisor Diferencial Siemens SITRANS P DS III | Siemens | Transmisores | `7MF44331EY221AC1-Z` | $1.500.000 |
| 14 | Transmisor Diferencial Yokogawa EJA110A | Yokogawa | Transmisores | `91MC27289` | $1.200.000 |
| 15 | Transmisor de Nivel Ultrasónico Siemens SITRANS | Siemens | Transmisores | `7ML5881-0AC01-0AD9-Z` | $3.800.000 |
| 16 | Termostato Industrial United Electric | United Electric | Instrumentación | `E122-2BSB` | $750.000 |
| 17 | Transmisor de Temperatura Siemens SITRANS TF | Siemens | Transmisores | `7NG3136-0AC11` | $1.800.000 |
| 18 | Transmisor de Nivel Rosemount 3300 | Rosemount | Transmisores | `3300` | $4.800.000 |

## 6. Fichas individuales de producto

Al seleccionar **Ver producto**, el visitante llega a una ficha individual con una galería de imágenes, marca, categoría, SKU, nombre, descripción, precio de referencia, estado de disponibilidad y botones para solicitar cotización o consultar por WhatsApp.

La ficha incluye cuatro bloques de información:

1. **Características del producto.** Presenta la referencia, elementos visibles y datos conocidos del equipo.
2. **Especificaciones técnicas.** Organiza variable medida o control, rango, señal de salida, alimentación, protección y certificaciones. Cuando el dato exacto no está confirmado, se indica que debe validarse con la placa o la ficha técnica.
3. **Aplicaciones típicas.** Relaciona el equipo con líneas de producción, máquinas, tanques, bombas, redes industriales, servicios de proceso u otras aplicaciones según su categoría.
4. **Solicitud técnica.** Invita a enviar cantidad, aplicación, fecha requerida o fotografía de la placa para confirmar compatibilidad y disponibilidad.

La ficha informa que el precio es un valor orientativo para equipo usado y se confirma según prueba funcional, configuración, accesorios y calibración. También indica que la ficha técnica completa, disponibilidad y compatibilidad se validan con un ingeniero antes de cotizar.

### Galerías de fotografías

Las galerías tienen entre una y seis fotografías por referencia. Se incluyen vistas frontales, laterales, posteriores, placas, conexiones, sondas, cableado, módulos y empaques según el producto. El S7-1500 tiene tres imágenes; el Rosemount 3300 tiene cuatro; el SITRANS TF y el SITRANS P DS III tienen seis cada uno; el resto cuenta con galerías de una a cuatro imágenes.

Las tarjetas y fichas distinguen entre **“Foto del producto”** e **“Imagen de referencia”**. En el catálogo actual las referencias publicadas tienen una imagen específica asignada, procedente del inventario fotográfico integrado al proyecto.

## 7. Contacto y cotización

La página de Contacto está orientada a convertir el interés en una solicitud comercial. El formulario solicita:

| Campo | Uso |
|---|---|
| Nombre | Identificar al solicitante. |
| Empresa | Calificar el contexto B2B. |
| Correo corporativo | Enviar respuesta o cotización. |
| Teléfono | Facilitar contacto comercial. |
| Tema de interés | Clasificar PLC, variadores, transmisores, instrumentación, válvulas, motores, comunicaciones u otro requerimiento. |
| Descripción del requerimiento | Registrar planta, modelo, cantidad, criticidad, fecha y necesidades adicionales. |

Cuando el visitante llega desde una ficha de producto, el formulario puede prellenar el nombre del equipo y su categoría. Al enviarse, la solicitud se registra en la tabla `contact_requests` de Supabase y se muestra un aviso de confirmación. Si existe un problema de configuración, la página ofrece WhatsApp como alternativa.

Los canales publicados son el teléfono **+57 300 574 7839**, WhatsApp comercial, cobertura desde Bogotá para atención nacional y horario de lunes a viernes de 7:00 a 18:00, con atención de emergencias anunciada como 24/7.

## 8. Página Nosotros

La sección institucional presenta a AIT Soluciones Automáticas como una empresa colombiana orientada a instrumentación, control y automatización industrial. El contenido comunica más de una década de experiencia, una cifra visual de **15+ años** y acompañamiento a más de **200 plantas** en sectores como petróleo y gas, petroquímica, generación eléctrica, alimentos y tratamiento de agua.

También presenta una misión relacionada con garantizar la continuidad operativa, una visión de ser aliado técnico de referencia en Latinoamérica hacia 2030 y un compromiso con calidad, seguridad y respuesta inmediata.

Los cuatro valores institucionales son:

| Valor | Mensaje |
|---|---|
| Integridad | Trazabilidad y transparencia en cada intervención técnica. |
| Excelencia | Estándares internacionales aplicados a los procesos. |
| Compromiso | Disponibilidad para procesos de misión crítica. |
| Innovación | Tecnologías para aumentar la confiabilidad. |

Las cifras de experiencia, plantas atendidas, certificaciones, cobertura 24/7 y cualquier mención de acreditación deben conservarse únicamente si AIT cuenta con soporte documental para demostrarlas ante un cliente.

## 9. Pie de página y llamadas permanentes

El pie de página muestra el logotipo, el lema **“Ingeniería · Instrumentación · Control”**, una descripción institucional y accesos rápidos a productos, servicios y contacto.

Incluye enlaces de productos genéricos como transmisores de presión, transmisores de temperatura, flujómetros, PLC y control y válvulas de control. También enlaza a los servicios de calibración, puesta en marcha, automatización y mantenimiento, y contiene accesos al catálogo completo y al formulario de cotización.

El bloque de contacto repite Bogotá, el teléfono, WhatsApp comercial, el formulario y el horario. También muestra el texto **“Calibración trazable ONAC”**; esta afirmación debe respaldarse documentalmente antes de utilizarse como garantía comercial o publicitaria.

Existe además un botón flotante de WhatsApp en la esquina inferior derecha, disponible durante la navegación, con un mensaje inicial de asesoría en instrumentación industrial.

## 10. Diseño y experiencia de usuario

El diseño utiliza una identidad industrial técnica con fondos oscuros, tarjetas claras u oscuras, patrones de retícula, acentos amarillos y tipografía monoespaciada para categorías, SKU y datos operativos. La interfaz es responsive: adapta navegación, filtros, tarjetas y formularios a computador, tableta y teléfono.

La interacción principal está organizada alrededor de tres acciones: **ver catálogo, ver ficha técnica y solicitar cotización**. La navegación conserva un botón visible de contacto y WhatsApp para reducir la distancia entre la búsqueda de un equipo y la conversación comercial.

## 11. Qué está incluido y qué no está automatizado

### Incluido actualmente

- Catálogo web público con 18 referencias.
- Fotografías específicas integradas por producto.
- Filtros por siete categorías y seis variables de proceso.
- Buscador por marca, modelo, SKU y categoría.
- Fichas individuales con galerías y contenido técnico.
- Formulario de cotización conectado a Supabase.
- Enlaces directos a teléfono y WhatsApp.
- Publicación en GitHub y Vercel.
- Sitio independiente de Lovable y Odoo.

### No está incluido actualmente

- Carrito de compras.
- Pago en línea.
- Checkout automático.
- Sincronización automática del inventario con Google Drive.
- Actualización automática de precios desde una hoja o base externa.
- Panel administrativo para cambiar productos sin modificar el código.
- Fichas PDF descargables para cada referencia.
- Confirmación automática de stock en tiempo real.

Las fotografías que se agreguen o cambien en Google Drive no actualizan por sí solas la página. Para que aparezcan en producción deben integrarse al proyecto, actualizar el catálogo y publicar una nueva versión.

## 12. Descripción comercial corta

> **AIT Ventas es un catálogo B2B colombiano de instrumentación, control y automatización industrial. Ofrece 18 referencias de equipos nuevos sin caja, usados o de inventario, incluyendo PLC, transmisores, variadores, comunicaciones, instrumentación, válvulas y motores. Cada producto cuenta con fotografía, SKU, precio orientativo y ficha individual. La página permite filtrar por categoría y variable de proceso, buscar por marca o referencia y solicitar cotización mediante formulario, teléfono o WhatsApp, con validación técnica de disponibilidad, configuración, accesorios, prueba y calibración antes de cerrar la operación.**

## 13. Descripción para hoja de vida o presentación profesional

> Diseñé y publiqué una plataforma web B2B para la comercialización de instrumentación y automatización industrial en Colombia. El proyecto incluye catálogo responsive de 18 referencias, filtros por categoría y variable de proceso, buscador por marca/modelo/SKU, fichas técnicas con galerías de fotografías reales, integración de solicitudes comerciales con Supabase, enlaces de WhatsApp, despliegue independiente en GitHub y Vercel, y estructuración de precios orientativos para equipos de segunda mano. La solución permite presentar inventario técnico y convertir consultas de usuarios en oportunidades de cotización.
