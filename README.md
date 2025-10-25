# Personal Portfolio

Portfolio personal minimalista construido con Astro, diseño mobile-first.

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── data/
│   │   ├── experiences.json    # Experiencia laboral
│   │   ├── education.json      # Formación académica
│   │   ├── skills.json         # Habilidades técnicas
│   │   ├── languages.json      # Idiomas
│   │   └── links.json          # Enlaces de contacto/redes
│   └── profile.png             # Foto de perfil
├── src/
│   ├── pages/
│   │   └── index.astro         # Página principal del portfolio
│   └── styles/
│       ├── global.css          # Estilos globales y variables CSS
│       └── index.css           # Estilos específicos de la página
└── package.json
```

## 📝 Cómo Actualizar los Datos

Todos los datos del portfolio se gestionan mediante archivos JSON en `public/data/`. Edita estos archivos para actualizar tu información:

### experiences.json

```json

## 📝 Cómo Actualizar los Datos

Todos los datos del portfolio se gestionan mediante archivos JSON en `public/data/`. Edita estos archivos para actualizar tu información:

### experiences.json
```json
[
  {
    "position": "Cargo",
    "company": "Empresa",
    "startDate": "Mes YYYY",
    "endDate": "Mes YYYY",
    "description": "Descripción de responsabilidades y logros"
  }
]
```

### education.json

```json
[
  {
    "degree": "Título",
    "institution": "Institución",
    "startDate": "YYYY",
    "endDate": "YYYY"
  }
]
```

### skills.json

```json
[
  {
    "name": "Tecnología",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/..."
  }
]
```

**Nota:** Usa [Devicon](https://devicon.dev/) para obtener URLs de iconos tecnológicos.

### languages.json

```json
[
  {
    "language": "Idioma",
    "proficiency": "Nivel (Nativo, Avanzado, Intermedio, etc.)"
  }
]
```

### links.json

```json
[
  {
    "label": "Email",
    "url": "mailto:tu@email.com",
    "displayText": "tu@email.com",
    "download": false
  },
  {
    "label": "CV",
    "url": "/cv.pdf",
    "displayText": "Descargar CV",
    "download": true
  }
]
```

## 🎨 Personalización de Estilos

Los colores y tipografía se gestionan con variables CSS en `src/styles/global.css`:

```css
:root {
  --color-text: #333;           /* Texto principal */
  --color-text-secondary: #666; /* Texto secundario */
  --color-text-muted: #999;     /* Texto atenuado */
  --color-bg: #fff;             /* Fondo principal */
  --color-border: #e0e0e0;      /* Bordes */
  --color-bg-secondary: #f0f0f0;/* Fondo secundario */
  --font-main: 'JetBrains Mono', monospace;
}
```

Para cambiar la fuente, modifica el import en `src/styles/global.css` y actualiza `--font-main`.

## 🖼️ Actualizar Foto de Perfil

Reemplaza el archivo `public/profile.png` con tu imagen (recomendado: 256x256px o mayor, formato cuadrado).

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Genera build de producción en `./dist/`          |
| `npm run preview`         | Previsualiza build localmente antes de deploy    |
| `npm run astro`           | Ejecuta comandos CLI de Astro                    |

## 🚀 Despliegue

Este proyecto puede desplegarse en:

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Drag & drop de la carpeta `dist/` o deploy desde Git
- **GitHub Pages**: Ejecuta `npm run build` y sube `dist/` a gh-pages
- **Cloudflare Pages**: Conecta repositorio con build command `npm run build`

### Build Settings

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18.x o superior

## 📚 Recursos

- [Documentación Astro](https://docs.astro.build)
- [Devicon - Iconos de tecnologías](https://devicon.dev/)
- [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
