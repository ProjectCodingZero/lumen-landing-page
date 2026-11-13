# Lumen · Ecosistema veterinario

Sitio de presentación de **Lumen**, el ecosistema que conecta clínicas
veterinarias y familias. Construido con **Astro 7**, **Tailwind CSS 4** y
**Deno**.

El ecosistema tiene dos productos:

- **Lumen App**: la app para tutores (turnos, vacunas, historia clínica y
  recordatorios).
- **Lumen Web**: el CRM para clínicas veterinarias (agenda, pacientes, tutores,
  especialistas, inventario y reportes).

Ambos comparten la misma historia clínica. Este sitio funciona como puerta de
entrada: presenta los dos productos y redirige a cada uno.

## Características

- **Landing gateway**: hero con doble acceso, tarjetas de producto, beneficios
  compartidos, showcase de la app, showcase del CRM, flujo del ecosistema,
  testimonios, FAQ y CTA final.
- **Sitio multipágina**: `/`, `/productos/`, `/about/` y página 404
  personalizada. La antigua ruta `/services/` redirige a `/productos/`.
- **SEO técnico**:
  - HTML semántico con un único `h1` por página y jerarquía de encabezados.
  - Títulos, descripciones, canonical, Open Graph y Twitter Cards por página.
  - Datos estructurados JSON-LD (`Organization`, `WebSite`,
    `SoftwareApplication`, `FAQPage`, `AboutPage` y `BreadcrumbList`).
  - `sitemap-index.xml` y `robots.txt` generados automáticamente.
  - `site.webmanifest`, favicon y metadatos de idioma (`es-AR`).
- **Accesibilidad**: navegación por teclado, enlace "saltar al contenido",
  `aria-label`/`aria-current`, foco visible y soporte de
  `prefers-reduced-motion`.
- **Rendimiento**: HTML estático prerenderizado, imágenes locales con
  dimensiones explícitas y carga diferida cuando corresponde.

## Estructura

```text
public/                 Recursos estáticos (imágenes, robots, manifest)
src/
  components/
    landing/            Secciones de la home y de /productos/
    ui/                 Componentes de UI reutilizables (Icon)
  data/
    products.ts         Productos, CTAs y URLs configurables
    modules.ts          Módulos de Lumen Web
    faqs.ts             Preguntas frecuentes (UI + schema FAQPage)
  layouts/
    BaseLayout.astro    Documento base: metadatos, SEO, header y footer
  pages/                Rutas del sitio
    index.astro
    productos.astro
    about.astro
    404.astro
  shared/
    components/         Header y Footer del sitio
  styles/
    index.css           Tema de Tailwind, tipografías y animaciones
```

## Comandos

| Comando             | Acción                                            |
| :------------------ | :------------------------------------------------ |
| `deno task dev`     | Servidor de desarrollo en `http://localhost:4321` |
| `deno task build`   | Genera el sitio de producción en `./dist/`        |
| `deno task preview` | Previsualiza el build en `http://localhost:4322`  |
| `deno task lint`    | Ejecuta oxlint                                    |
| `deno task start`   | Build + preview                                   |

> El proyecto usa el adaptador de Deno (`@deno/astro-adapter`), por lo que el
> resultado del build puede desplegarse en Deno Deploy.

## Configuración

### URLs de los productos

Las URLs de acceso a Lumen App y Lumen Web se centralizan en
`src/data/products.ts` y se pueden sobreescribir sin tocar código con variables
de entorno:

```bash
PUBLIC_LUMEN_APP_URL=https://app.lumen-soft.app
PUBLIC_LUMEN_WEB_URL=https://panel.lumen-soft.app
```

Copiá `.env.example` como `.env` y ajustá los valores cuando los dominios
definitivos estén disponibles. Astro solo expone al navegador las variables que
empiezan con `PUBLIC_`.

### Sitio

- `astro.config.mjs`: dominio del sitio, sitemap, redirects y plugins.
- `public/config.json`: nombre de la aplicación y URL de la API (legado).
- Los datos de contacto y horarios se editan en los componentes de
  `src/shared/components/` y en `src/data/`.

## Despliegue

El sitio se publica en `https://lumen-soft.app`. Recordá mantener el dominio en
`astro.config.mjs` (`site`) actualizado para que canonical, sitemap y Open Graph
apunten a la URL correcta, y configurar `PUBLIC_LUMEN_APP_URL` /
`PUBLIC_LUMEN_WEB_URL` en el entorno de despliegue.
