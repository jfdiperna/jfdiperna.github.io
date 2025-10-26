# Portfolio Personal

Portfolio minimalista con sistema de internacionalización completo. Soporta tres idiomas (inglés, español e italiano) con detección automática y persistencia de preferencias.

## Stack Técnico

- **Framework:** Astro 5.15.1
- **Routing i18n:** Sistema integrado con prefixDefaultLocale deshabilitado
- **Optimización:** Imágenes en WebP, lazy loading, SEO completo
- **Deploy:** GitHub Pages con workflow automatizado

## Estructura

```
├── public/
│   ├── data/
│   │   ├── en/         # Contenido en inglés
│   │   ├── es/         # Contenido en español  
│   │   └── it/         # Contenido en italiano
│   └── images/
│       └── profile.jpg
├── src/
│   ├── components/
│   │   └── LanguagePicker.astro
│   ├── i18n/
│   │   ├── locales/    # Traducciones UI (en.json, es.json, it.json)
│   │   └── utils.ts    # Funciones i18n, tipos Locale
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Ruta: /
│   │   ├── es/
│   │   │   └── index.astro # Ruta: /es/
│   │   └── it/
│   │       └── index.astro # Ruta: /it/
│   ├── styles/
│   │   ├── global.css
│   │   ├── index.css
│   │   └── language-picker.css
│   └── utils/
│       ├── colors.ts   # Constantes de color compartidas
│       └── loadData.ts # Carga dinámica de datos por locale
└── astro.config.mjs
```

## Cómo Funciona el i18n

### Detección de Idioma

El sistema prioriza en este orden:

1. **localStorage**: Si el usuario ya eligió un idioma, se respeta siempre
2. **Idioma del navegador**: En la primera visita se detecta automáticamente (ej: `es-AR` → `/es/`)
3. **Idioma de la URL**: Si llegas directo a `/it/`, se guarda italiano como preferencia

El script se ejecuta en el `<head>` antes de que cargue el contenido, evitando parpadeos.

### Agregar un Nuevo Idioma

1. Crea carpeta `public/data/fr/` con los JSON traducidos
2. Agrega `fr.json` en `src/i18n/locales/`
3. Actualiza `src/i18n/utils.ts`:

   ```typescript
   export const languages = {
       en: 'English',
       es: 'Español',
       it: 'Italiano',
       fr: 'Français',  // ← nuevo
   };
   
   export const ogLocales: Record<Locale, string> = {
       en: 'en_US',
       es: 'es_ES',
       it: 'it_IT',
       fr: 'fr_FR',  // ← nuevo
   };
   ```

4. Crea `src/pages/fr/index.astro`
5. Actualiza `astro.config.mjs`:

   ```javascript
   i18n: {
       defaultLocale: 'en',
       locales: ['en', 'es', 'it', 'fr'],  // ← agregar fr
   }
   ```

## Actualizar Contenido

Los archivos JSON en `public/data/{locale}/` controlan todo el contenido:

### experiences.json

```json
[
    {
        "position": "Software Engineer",
        "company": "Company Name",
        "employmentType": "Full-time",  // En inglés siempre
        "location": "Remote",            // En inglés siempre
        "startDate": "Dec 2019",
        "endDate": "Present",
        "description": "Descripción del rol..."
    }
]
```

**Nota:** `employmentType` y `location` se mantienen en inglés en todos los idiomas para consistencia.

### education.json

```json
[
    {
        "degree": "Engineer's degree",
        "field": "Information Technology",
        "institution": "Universidad Tecnológica Nacional",
        "startDate": "2012",
        "endDate": "2019",
        "grade": "8.65 / 10"
    }
]
```

### languages.json

```json
[
    {
        "name": "Spanish",
        "level": "Native"
    }
]
```

### links.json

```json
[
    {
        "label": "LinkedIn",
        "url": "https://linkedin.com/in/username",
        "displayText": "in/username"
    },
    {
        "label": "Resume",
        "url": "/resume.pdf",
        "displayText": "download",
        "download": true
    }
]
```

### technologies.json

```json
[
    {
        "name": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    }
]
```

Iconos disponibles en [Devicon](https://devicon.dev/).

## Traducciones de UI

Los textos de la interfaz están en `src/i18n/locales/{locale}.json`:

```json
{
    "hero": {
        "greeting": "Hi, I'm Joaquín!",
        "subtitle": "Software Engineer"
    },
    "nav": {
        "contact": "Contact me"
    },
    "sections": {
        "experience": "Experience",
        "education": "Education",
        "languages": "Languages",
        "technologies": "Technologies"
    },
    "buttons": {
        "seeMore": "see more",
        "seeLess": "see less",
        "scrollToTop": "Scroll to top"
    },
    "meta": {
        "title": "Joaquín - Software Engineer",
        "description": "Portfolio of Joaquín - Software Engineer"
    }
}
```

Usa la función `t()` en los componentes: `{t("hero.greeting")}`

## Colores y Estilos

Los colores están centralizados en `src/utils/colors.ts` e inyectados como variables CSS:

```typescript
export const COLORS = {
    text: '#2c2416',
    textSecondary: '#5c5041',
    textMuted: '#8c7d6b',
    bg: '#f5f1e8',
    border: '#d9d0c1',
    bgSecondary: '#ebe4d6',
} as const;
```

En CSS se usan como: `color: var(--color-text);`

Para cambiar la paleta, edita solo `colors.ts` y se actualizará todo el sitio automáticamente (incluyendo el `theme-color` del meta tag).

## SEO

Cada página incluye:

- **Hreflang tags**: Indica a Google las versiones traducidas
- **Canonical URL**: URL principal de cada versión
- **Open Graph**: Con locale específico (`en_US`, `es_ES`, `it_IT`)
- **JSON-LD**: Structured data con schema Person
- **Imágenes optimizadas**: Conversión automática a WebP (reducción del 99%)

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Desarrollo (localhost:4321)
npm run build        # Build de producción
npm run preview      # Preview del build
```

## Deploy

El repositorio incluye GitHub Actions (`.github/workflows/deploy.yml`) que hace deploy automático a GitHub Pages en cada push a `main`.

**Configuración manual:**

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18.x

Compatible con Vercel, Netlify, Cloudflare Pages.

## Performance

- **Imágenes**: Astro Image optimiza automáticamente (WebP, lazy loading)
- **Scripts**: Mínimo JavaScript, ejecutado después del render
- **CSS**: Inline crítico, resto lazy
- **Fuentes**: Google Fonts con `display=swap`

## Accesibilidad

- `lang` attribute dinámico por ruta
- `dir="ltr"` en HTML (preparado para RTL)
- Aria labels traducidos
- Botón scroll-to-top con texto localizado
- Contraste WCAG AA compliant
