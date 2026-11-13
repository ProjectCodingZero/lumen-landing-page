# Lumen Veterinaria

Sitio institucional y de presentación de **Lumen**, la plataforma de gestión
veterinaria integral de San Miguel de Tucumán. Construido con **Astro 7**,
**Tailwind CSS 4** y **Deno**.

## Características

- **Landing premium**: hero, métricas, funcionalidades, showcase del panel,
  pasos de reserva, testimonios, FAQ y llamados a la acción.
- **Sitio multipágina**: `/`, `/services/`, `/about/` y página 404 personalizada.
- **SEO técnico**:
  - HTML semántico con un único `h1` por página y jerarquía de encabezados.
  - Títulos, descripciones, canonical, Open Graph y Twitter Cards por página.
  - Datos estructurados JSON-LD (`VeterinaryCare`, `WebSite`, `FAQPage`,
    `OfferCatalog`, `AboutPage` y `BreadcrumbList`).
  - `sitemap-index.xml` y `robots.txt` generados automáticamente.
  - `site.webmanifest`, favicon y metadatos de idioma (`es-AR`).
- **Accesibilidad**: navegación por teclado, enlace "saltar al contenido",
  `aria-label`/`aria-current`, foco visible y soporte de `prefers-reduced-motion`.
- **Rendimiento**: HTML estático prerenderizado, imágenes locales con
  dimensiones explícitas y carga diferida cuando corresponde.

## Estructura

```text
public/                 Recursos estáticos (imágenes, robots, manifest)
src/
  components/
    landing/            Secciones de la home (Hero, Features, FAQ, CTA…)
    ui/                 Componentes de UI reutilizables (Icon)
  data/                 Contenido tipado (servicios, preguntas frecuentes)
  layouts/
    BaseLayout.astro    Documento base: metadatos, SEO, header y footer
  pages/                Rutas del sitio
    index.astro
    services.astro
    about.astro
    404.astro
  shared/
    components/         Header y Footer del sitio
  styles/
    index.css           Tema de Tailwind, tipografías y animaciones
```

## Comandos

| Comando            | Acción                                             |
| :----------------- | :------------------------------------------------- |
| `deno task dev`    | Servidor de desarrollo en `http://localhost:4321`  |
| `deno task build`  | Genera el sitio de producción en `./dist/`         |
| `deno task preview`| Previsualiza el build en `http://localhost:4322`       |
| `deno task lint`   | Ejecuta oxlint                                     |
| `deno task start`  | Build + preview                                    |

> El proyecto usa el adaptador de Deno (`@deno/astro-adapter`), por lo que el
> resultado del build puede desplegarse en Deno Deploy.

## Configuración

- `astro.config.mjs`: dominio del sitio, sitemap, trailing slash y plugins.
- `public/config.json`: nombre de la aplicación y URL de la API.
- Los datos de contacto y horarios se editan en los componentes de
  `src/shared/components/` y en `src/data/`.

## Despliegue

El sitio se publica en `https://lumen-soft.app`. Recordá mantener el dominio en
`astro.config.mjs` (`site`) actualizado para que canonical, sitemap y Open Graph
apunten a la URL correcta.
