# Guía: Agregar imágenes al portafolio

## Estructura
Las imágenes se guardan en `/public/images/` organizadas por proyecto:

```
public/
├── images/
│   ├── tu-gestor/
│   │   ├── dashboard.png
│   │   ├── estudiantes.png
│   │   └── reportes.png
│   ├── kaizen/
│   │   ├── landing.png
│   │   ├── dashboard.png
│   │   └── logros.png
```

## Cómo usarlas en `projects.js`

```javascript
images: [
  {
    url: '/images/tu-gestor/dashboard.png',
    title: 'Dashboard Principal',
    description: 'Vista general del sistema'
  },
  {
    url: '/images/tu-gestor/estudiantes.png',
    title: 'Gestión de Estudiantes',
    description: 'Módulo de administración'
  }
]
```

## Pasos para agregar imágenes

1. **Crea las carpetas** en `/public/images/` (una por proyecto)
2. **Copia las imágenes** (preferiblemente PNG o WebP, < 500KB cada una)
3. **Actualiza `projects.js`** con las rutas correctas
4. **Haz push a GitHub** y GitHub Actions deployará automáticamente

## Tamaños recomendados
- Ancho: 600px
- Alto: 400px
- Formato: PNG o WebP
- Peso: < 200KB por imagen

## Deploy automático
- Haz push a la rama `main`
- GitHub Actions construirá y deployará automáticamente en GitHub Pages
- Tu sitio estará en: `https://tu-usuario.github.io/portafolio`
