# AIT Ventas

Catálogo técnico y canal de solicitudes comerciales para **AIT Soluciones Automáticas Industriales**. El proyecto es un frontend Vite + React + TypeScript, con imágenes locales, rutas SPA y persistencia opcional de solicitudes en Supabase. No depende de Lovable para desarrollar, compilar o publicar.

## Funcionalidades

La aplicación incluye una portada comercial, páginas de servicios y empresa, un catálogo filtrable de instrumentación industrial y un formulario de cotización con prellenado desde cada producto. Las referencias visuales del catálogo están empaquetadas en `src/assets/`; ya no se cargan imágenes ni fichas desde Odoo, por lo que la tienda no queda inutilizable si esa base de datos desaparece.

> Las fotografías de producto incluidas son imágenes de referencia por categoría. Para publicar una fotografía exacta de cada SKU, reemplace el archivo visual correspondiente en `src/assets/` o actualice el mapeo de imágenes en `src/data/products.ts`.

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

El proyecto incorpora `vercel.json` con salida `dist` y una regla de rewrite hacia `index.html`, necesaria para que las rutas `/servicios`, `/tienda`, `/sobre-nosotros` y `/contacto` funcionen al recargar el navegador.

## Publicación en Vercel

Importe el repositorio desde el panel de Vercel, seleccione el framework **Vite** y configure las tres variables `VITE_SUPABASE_*`. El comando de compilación es `npm run build` y el directorio de salida es `dist`; ambos valores ya están declarados en `vercel.json`. Después de aplicar la migración de Supabase, despliegue la rama `main` y pruebe la navegación directa, los filtros de la tienda y el envío del formulario.

## Estructura relevante

```text
src/
  assets/                  Imágenes locales y marca
  components/site/        Navbar, footer y layout global
  data/products.ts        Catálogo y mapeo de imágenes por categoría
  integrations/supabase/  Cliente y tipos de Supabase
  pages/                  Inicio, servicios, tienda, empresa y contacto
supabase/migrations/      Esquema de solicitudes comerciales
vercel.json               Build y rewrites para Vercel
```
