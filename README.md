# TechToJob — Landing Page

> Plataforma web moderna de alto rendimiento que conecta talento tecnológico con empresas mediante procesos de comunidad, participación real y torneos técnicos, alejándose de los filtros tradicionales de CV.

![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript 5](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![next-intl](https://img.shields.io/badge/next--intl-v4-FF5722?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)

---

## 📋 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Estructura de Directorios](#-estructura-de-directorios)
- [Módulos e Implementaciones Clave](#-módulos-e-implementaciones-clave)
  - [Internacionalización (i18n)](#1-sistema-de-internacionalización-i18n)
  - [Layouts, metadata y SEO](#2-layouts-metadata-y-seo)
  - [Componentes interactivos y UX](#3-componentes-interactivos-y-ux)
  - [Design System & Estilos (Tailwind CSS v4)](#4-design-system--estilos-tailwind-css-v4)
- [SEO, Metadatos y Accesibilidad](#-seo-metadatos-y-accesibilidad)
- [Guía de Inicio Rápido](#-guía-de-inicio-rápido)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación y Ejecución](#instalación-y-ejecución)
  - [Scripts Disponibles](#scripts-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Convenciones de Código y Buenas Prácticas](#-convenciones-de-código-y-buenas-prácticas)

---

## 🎯 Visión General

**TechToJob** es una landing page bilingüe desarrollada con **Next.js (App Router)** y **React 19** para conectar talento tecnológico con empresas a través de comunidad, torneos técnicos, networking y oportunidades reales. La propuesta de valor del producto se centra en mostrar perfiles auténticos y capacidades prácticas, antes que depender únicamente de currículums tradicionales.

La aplicación combina una estética oscura con identidad visual moderna, navegación multiidioma, secciones estructuradas por contenido y componentes reutilizables para crear una experiencia clara, rápida y escalable.

---

## 🛠 Stack Tecnológico

| Tecnología / Herramienta                                                                                          | Versión   | Propósito en el Proyecto                                                    |
| :---------------------------------------------------------------------------------------------------------------- | :-------- | :-------------------------------------------------------------------------- |
| **[Next.js](https://nextjs.org/)**                                                                                | `^16.2.6` | Framework React con App Router, server components y rendimiento optimizado. |
| **[React](https://react.dev/)**                                                                                   | `19.2.3`  | Biblioteca base para interfaces reactivas y componentes modernos.           |
| **[TypeScript](https://www.typescriptlang.org/)**                                                                 | `^5.9.3`  | Tipado estático estricto para mayor estabilidad y mantenibilidad.           |
| **[Tailwind CSS](https://tailwindcss.com/)**                                                                      | `^4.3.3`  | Estilos rápidos y modernos con configuración basada en CSS.                 |
| **[next-intl](https://next-intl-docs.vercel.app/)**                                                               | `^4.12.0` | Internacionalización con rutas locales y mensajes por idioma.               |
| **[@fontsource-variable/sora](https://fontsource.org/fonts/sora)**                                                | `^5.3.0`  | Tipografía local para la identidad visual del proyecto.                     |
| **[@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)** | `^16.2.6` | Integración orientada a analytics y terceros.                               |

---

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura basada en Next.js App Router con enfoque **server-first**:

1. **Rutas dinámicas por locale (`src/app/[locale]/`)**: toda la navegación pública vive bajo el segmento `[locale]` y se gestiona con `next-intl`.
2. **Generación de rutas por idioma**: la configuración de locales está definida en `src/i18n/routing.ts` con `locales: ["es", "en"]` y `defaultLocale: "es"`.
3. **Separación de responsabilidades**:
   - **Server Components**: utilizados para layouts, contenido estructural y metadatos.
   - **Client Components**: reservados para interacción de usuario, estado local y comportamientos del navegador.
4. **Contenido modularizado**: cada sección principal está encapsulada en `src/pods`, mientras que el ensamblaje final se realiza en `src/app/[locale]/page.tsx`.

---

## 📂 Estructura de Directorios

```plaintext
techtojob/
├── public/                           # Assets estáticos y recursos públicos
│   ├── hero.webp                    # Imagen principal de la sección hero
│   ├── techtojob-social.webp       # Meta social para Open Graph / Twitter
│   └── robots.txt                  # Archivo de robots generado o estático
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx           # Layout principal por locale con metadata
│   │   │   ├── page.tsx             # Página de inicio: composición de secciones
│   │   │   └── not-found.tsx        # Página fallback para rutas no encontradas
│   │   ├── layout.tsx               # Layout raíz global
│   │   ├── manifest.ts              # Manifest de la app
│   │   ├── robots.ts                # Generación del archivo robots.txt
│   │   └── globals.css              # Estilos globales, tema y utilidades
│   ├── assets/
│   │   ├── css/
│   │   │   ├── base/
│   │   │   └── vendors/
│   ├── common/
│   │   ├── atoms/
│   │   └── index.ts
│   ├── config/
│   │   ├── index.ts
│   │   ├── menu.ts
│   │   └── routes.ts
│   ├── constants/
│   │   ├── constant-link.tsx
│   │   ├── constants.ts
│   │   └── index.ts
│   ├── content/
│   │   ├── news-data.ts
│   │   ├── testimonials-data.ts
│   │   ├── categories-networking/
│   │   └── tournaments/
│   ├── helpers/
│   │   └── string.ts
│   ├── hooks/
│   │   └── useActiveSection.ts
│   ├── i18n/
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   ├── routes-config.ts
│   │   └── routing.ts
│   ├── layout/
│   │   ├── content-dark.layout.tsx
│   │   ├── content-light.layout.tsx
│   │   ├── footer/
│   │   ├── header/
│   │   └── index.ts
│   ├── lib/
│   │   ├── date-to-iso.ts
│   │   ├── localize.ts
│   │   └── metadata.ts
│   ├── messages/
│   │   ├── home/
│   │   ├── nav/
│   │   └── tournaments/
│   ├── pods/
│   │   ├── companySteps/
│   │   ├── hero/
│   │   ├── networking/
│   │   ├── news/
│   │   ├── newsletter/
│   │   ├── preFooter/
│   │   ├── selectLanguages/
│   │   ├── steps/
│   │   ├── talent/
│   │   ├── testimonials/
│   │   ├── tournaments/
│   │   └── index.ts
│   ├── types/
│   │   ├── categories-networking.vm.ts
│   │   ├── common.vm.ts
│   │   ├── index.ts
│   │   ├── news.vm.ts
│   │   ├── testimonials.vm.ts
│   │   └── tournament.vm.ts
│   ├── proxy.ts
│   └── ...
├── .gitignore
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── ...
```

---

## ⚡ Módulos e Implementaciones Clave

### 1. Sistema de Internacionalización (i18n)

El proyecto usa `next-intl` para soportar dos idiomas:

- `es`: idioma principal y por defecto.
- `en`: traducción en inglés.

La configuración está centralizada en `src/i18n/routing.ts` y la carga de mensajes se gestiona a través de `src/i18n/request.ts`. Los textos se organizan por features y namespaces, especialmente en:

```text
src/messages/
├── home/
│   ├── en.json
│   └── es.json
├── nav/
│   ├── en.json
│   └── es.json
└── tournaments/
    ├── en.json
    └── es.json
```

Esto facilita mantener consistencia entre idiomas y evitar duplicación de textos en componentes.

### 2. Layouts, metadata y SEO

La app usa una estructura de layout multilocale en `src/app/[locale]/layout.tsx`, donde se configuran:

- provider de internacionalización `NextIntlClientProvider`
- `Header` y `Footer`
- metadatos abiertos para SEO
- Open Graph y Twitter Card
- integración opcional de Cookie Script y Google Analytics

El helper de metadata se encuentra en `src/lib/metadata.ts`, con soporte para:

- title y description
- imágenes sociales
- URLs absolutas con `NEXT_PUBLIC_BASE_URL`
- alternancia entre idiomas

### 3. Componentes interactivos y UX

La página de inicio compone varias secciones en el orden real del producto:

- `Hero`
- `Steps`
- `Talent`
- `CompanySteps`
- `Tournaments`
- `Networking`
- `News`
- `Testimonials`
- `Newsletter`
- `PreFooter`

Esto se hace desde `src/app/[locale]/page.tsx` y permite mantener la composición de la landing page clara y modular. Cada bloque vive en `src/pods` con su propia lógica y contenido estático o dinámico según el caso.

### 4. Design System & Estilos (Tailwind CSS v4)

La base visual del proyecto se trabaja con Tailwind CSS v4 y estilos globales en `src/assets/css/base/global-styles.css` y `src/assets/css/vendors/`. El proyecto usa un enfoque de diseño basado en:

- superficie oscura con acentos teal
- tipografía Sora
- capas visuales consistentes
- componentes reutilizables y layouts pensados para conversión

La organización actual favorece mantener el estilo centralizado y reutilizable sin depender de configuraciones complejas heredadas.

---

## 🔍 SEO, Metadatos y Accesibilidad

- **Metadatos dinámicos**: el layout por locale genera `title`, `description` y recursos sociales con `generateMetadata`.
- **Open Graph y Twitter**: se usan imágenes de tamaño cuadrado para mejorar la aparición en redes sociales.
- **Robots y manifest**: generados a través de `src/app/robots.ts` y `src/app/manifest.ts`.
- **A11y**: la navegación y los elementos interactivos se estructuran con buenas prácticas semánticas, accesibilidad de enlaces y texto claro para contenido público.
- **Performance**: la aplicación está pensada para ser ligera y mantener una estructura modular con baja carga de JS innecesario en varias secciones.

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos

- **Node.js**: versión compatible con la versión de Next.js instalada.
- **npm**: recomendado `10.x` o superior.
- **Git**: para clonar y gestionar el repositorio.

### Instalación y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/josemi1189/techtojob.git
   cd techtojob
   ```

2. **Instalar dependencias:**

   ```bash
   npm ci
   ```

3. **Configurar variables de entorno locales:**

   ```env
   NEXT_PUBLIC_BASE_URL="https://techtojob-omega.vercel.app/"
   NEXT_PUBLIC_LINK_DISCORD="https://discord.gg/zRj82mvgE"
   NEXT_PUBLIC_GA_ANALYTICS_ID=""
   NEXT_PUBLIC_COOKIE_SCRIPT=""
   ```

4. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Abrir la aplicación:**
   Navega a [http://localhost:3000](http://localhost:3000) y la app resolverá automáticamente el idioma según la configuración de `next-intl`.

### Scripts Disponibles

| Comando         | Descripción                                          |
| :-------------- | :--------------------------------------------------- |
| `npm run dev`   | Inicia la app en modo desarrollo con hot reload.     |
| `npm run build` | Genera la build de producción optimizada.            |
| `npm run start` | Sirve la aplicación compilada.                       |
| `npm run lint`  | Ejecuta ESLint y validaciones de calidad del código. |

---

## 🌐 Variables de Entorno

Puedes crear un archivo `.env.local` en la raíz del proyecto con los siguientes valores:

```env
NEXT_PUBLIC_BASE_URL="https://techtojob-omega.vercel.app/"
NEXT_PUBLIC_LINK_DISCORD="https://discord.gg/zRj82mvgE"
NEXT_PUBLIC_GA_ANALYTICS_ID=""
NEXT_PUBLIC_COOKIE_SCRIPT=""
```

### Descripción de cada variable

- `NEXT_PUBLIC_BASE_URL`: URL base del sitio para generación de rutas absolutas y metadatos sociales.
- `NEXT_PUBLIC_LINK_DISCORD`: invitación pública de Discord para la comunidad.
- `NEXT_PUBLIC_GA_ANALYTICS_ID`: ID de Google Analytics para entorno productivo.
- `NEXT_PUBLIC_COOKIE_SCRIPT`: identificador del script de Cookies, si se desea activar en producción.

> Si no se define una variable opcional, la app puede seguir funcionando en local con valores vacíos.

---

## 🎨 Variables de Color predefinidas en TailwindCSS

En `src/assets/css/base/global-styles.css` se definen las variables de tema del proyecto dentro de `@theme`:

```css
@theme {
  --color-primary: #2f3436;
  --color-secondary: #84c0bf;
  --color-third: #ffffff;
  --color-accent: #e07a5f;
  --shadow-header: 0px 0px 11px 4px #343d41;
  --shadow-footer: 0px 0px 11px 4px #343d41;
}
```

### Significado de cada variable

- `--color-primary`: fondo principal oscuro, usado en la base visual del sitio.
- `--color-secondary`: tono principal teal/acento de marca.
- `--color-third`: blanco para superficies claras y texto sobre fondos oscuros.
- `--color-accent`: acento coral para contrastes puntuales.
- `--shadow-header` y `--shadow-footer`: sombras comunes para cabecera y pie de página.

## 📐 Convenciones de Código y Buenas Prácticas

1. **Traducciones consistentes**: si se añade una clave en `es`, debe existir una versión equivalente en `en`.
2. **Modularización**: nuevas secciones deben añadirse preferiblemente dentro de `src/pods` y reutilizar patrones existentes.
3. **SEO y metadata**: cualquier cambio relevante en títulos, descripción o imágenes sociales debe mantener coherencia con `src/lib/metadata.ts` y el layout por locale.
4. **Validación pre-merge**: antes de mandar cambios, verificar que `npm run lint` y `npm run build` finalicen correctamente.
5. **Credenciales y secretos**: no incluir tokens ni claves en el código o en archivos de configuración públicos.

---

Todos los derechos reservados © 2026. - José Miguel González
