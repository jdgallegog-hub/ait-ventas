# AIT Ventas

Catálogo técnico y canal de solicitudes comerciales para **AIT Soluciones Automáticas Industriales**. El proyecto es un frontend Vite + React + TypeScript, con imágenes locales, rutas SPA y persistencia opcional de solicitudes en Supabase. No depende de Lovable para desarrollar, compilar o publicar.

## Funcionalidades

La aplicación incluye una landing comercial, un catálogo filtrable de instrumentación industrial, la página Nosotros y un formulario de cotización con prellenado desde cada producto. Las referencias visuales del catálogo están empaquetadas en `src/assets/`; ya no se cargan imágenes ni fichas desde Odoo, por lo que la tienda no queda inutilizable si esa base de datos desaparece.

> Las fotografías incluidas son imágenes de referencia. Deben sustituirse por fotografías propias o autorizadas antes de presentar el catálogo como inventario real.

### Cómo cambiar las fotografías del catálogo

Las fotos del catálogo se controlan desde `src/data/products.ts`. Para cambiar una imagen de una categoría completa, agregue el archivo optimizado dentro de `src/assets/`, impórtelo arriba del archivo y reemplace la entrada correspondiente en `categoryImages`. Por ejemplo:

```ts
import plcRealImage from "@/assets/product-plc-s7-1500.webp";

const categoryImages = {
  PLC: { image: plcRealImage, label: "Foto real del PLC S7-1500" },
  // Mantenga aquí las demás categorías existentes.
};
```

Para asignar una foto distinta a un solo producto sin cambiar los demás PLC, agregue el import y el SKU dentro de `productImages`:

```ts
import plcS71500Image from "@/assets/product-plc-s7-1500.webp";

const productImages = {
  "S7-1500": {
    image: plcS71500Image,
    label: "Foto real del PLC Siemens S7-1500 Compacto",
  },
};
```

El nombre del SKU debe coincidir exactamente con el quinto argumento de cada llamada `product(...)`. El sistema usa primero `productImages[sku]` y, si no existe, utiliza la imagen de respaldo de `categoryImages`.

### Cómo cambiar las fotografías de la landing y Nosotros

Las imágenes de la portada se importan al inicio de `src/pages/Index.tsx`: `heroImg` controla el hero, `valvesImg` las válvulas, `supportImg` el soporte técnico, `automationImg` la automatización y `sectorsBg` el fondo de sectores. La imagen de la página Nosotros se importa en `src/pages/SobreNosotros.tsx`. Puede conservar los mismos nombres de archivo y reemplazar los archivos, o importar nuevos nombres y actualizar la variable usada en el componente.

Use preferiblemente `.webp` o `.jpg`, mantenga la orientación de la imagen según el bloque donde se muestra y comprima cada archivo antes de subirlo. Las fotos de producto funcionan mejor en formato vertical o cuadrado con fondo limpio; el hero funciona mejor en formato horizontal amplio. Después de cambiar una imagen, ejecute `npm run build` y publique el commit en `main` para que Vercel genere el nuevo deployment.

## Requisitos

Se recomienda Node.js 20 o superior y npm. Para desarrollo local:

```bash
git clone https://github.com/jdgallegog-hub/ait-ventas.git
cd ait-ventas
npm install
cp .env.example .env
npm run dev
```

El servidor local queda disponible en `http://localhost:8080`.

## Supabase

El formulario escribe en `public.contact_requests`. Aplique la migración `supabase/migrations/202608240001_contact_requests.sql` desde el SQL Editor del proyecto de Supabase. La política pública sólo permite insertar solicitudes; la lectura, edición y eliminación requieren una sesión autenticada.

Configure estas variables en `.env` durante el desarrollo y en Vercel como variables de entorno de producción:

```env
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-or-publishable-key
```

La clave publicable/anon no debe confundirse con una `service_role` o clave secreta. No suba `.env` al repositorio.

## Compilación y verificación

```bash
npm run lint
npm run build
npm run preview
```

El proyecto incorpora `vercel.json` con salida `dist` y una regla de rewrite hacia `index.html`, necesaria para que las rutas `/`, `/tienda`, `/sobre-nosotros` y `/contacto` funcionen al recargar el navegador.

## Publicación en Vercel

Importe el repositorio desde el panel de Vercel, seleccione el framework **Vite** y configure las tres variables `VITE_SUPABASE_*`. El comando de compilación es `npm run build` y el directorio de salida es `dist`; ambos valores ya están declarados en `vercel.json`. Después de aplicar la migración de Supabase, despliegue la rama `main` y pruebe la navegación directa, los filtros de la tienda y el envío del formulario.

## Estructura relevante

```text
src/
  assets/                  Imágenes locales y marca
  components/site/        Navbar, footer y layout global
  data/products.ts        Catálogo y mapeo de imágenes por categoría
  integrations/supabase/  Cliente y tipos de Supabase
  pages/                  Inicio, tienda, Nosotros y contacto
supabase/migrations/      Esquema de solicitudes comerciales
vercel.json               Build y rewrites para Vercel
```
