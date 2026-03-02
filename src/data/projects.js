export const projectsData = [
  {
    id: 'sistema-gestion-escolar',
    title: 'Sistema Tu-Gestor',
    category: 'academic',
    categoryName: 'Proyecto Académico',
    status: 'Completado',
    summary: 'Sistema de escritorio integral para la administración de Tutorias, desarrollado como proyecto de grado. Permite gestionar estudiantes, docentes, horarios, calificaciones y reportes académicos.',
    context: 'Porceso de transformacion digital que soluciona las dificultades para administrar eficientemente  procesos académicos. Este proyecto nació de la necesidad de digitalizar y centralizar la información académica de La iniciatiavia  Proyecto Tu-Tutor de la Pontificia Universidad javeriana.',
    architecture: 'Arquitectura en capas (3-tier): capa de presentación con React, capa de lógica de negocio con Node.js/Express, y capa de datos con PostgreSQL. Implementación de API RESTful para la comunicación entre capas.',
    technologies: [ 'Node.js', 'Npm', 'Rust', 'Rustup', 'Tauri', 'TypeScript', 'React' ],
    patterns: 'MVVM (Model-View-ViewModel) donde el Model representa la lógica de negocio en Rust (gestión de tutores, tutorados, emparejamientos), la View son los componentes React/TypeScript (interfaz gráfica), y el ViewModel/Controller actúa como capa intermedia que comunica React con Rust mediante comandos Tauri, Repository Pattern para acceso a datos.',
    procedure: [
      'Análisis de requerimientos mediante entrevistas con personal administrativo',
      'Diseño de base de modulos',
      'Desarrollo iterativo con sprints de 2 semanas',
      'Implementación de módulos principales',
      'Pruebas de integración y corrección de bugs',
      'Despliegue en los escritorios de la iniciativa Proyecto Tu-Tutor'
    ],
    results: 'Sistema funcional implementado en una institución con mas de  500 estudiantes. Reducción del 99.4% en tiempo de generación de reportes. Interfaz intuitiva con 95% de satisfacción de usuarios.',
    metrics: [
      { value: '500+', label: 'Estudiantes' },
      { value: '99.4%', label: 'Reducción tiempo' },
      { value: '95%', label: 'Satisfacción' }
    ],
    learnings: 'Aprendí la importancia de validar requerimientos continuamente con usuarios finales. Inicialmente no consideré la complejidad de los horarios académicos, lo que requirió refactorización. Hoy implementaría tests automatizados desde el inicio.',
    images: [
      {
        url: 'https://via.placeholder.com/600x400?text=Dashboard+Tu-Gestor',
        title: 'Dashboard Principal',
        description: 'Vista general del sistema con métricas de estudiantes y docentes en tiempo real'
      },
      {
        url: 'https://via.placeholder.com/600x400?text=Gestion+Estudiantes',
        title: 'Gestión de Estudiantes',
        description: 'Módulo para administrar perfil, horarios y calificaciones de estudiantes'
      },
      {
        url: 'https://via.placeholder.com/600x400?text=Reportes',
        title: 'Generación de Reportes',
        description: 'Sistema automatizado de reportes académicos con exportación a PDF'
      }
    ],
    github: 'https://github.com/Sistema-TuGestor/',
    demo: null,
    documentation: null
  },
  {
    id: 'Kaizen',
    title: 'Kaizen - Plataforma de seguimiento de habitos',
    category: 'academic',
    categoryName: 'proyecto académico',
    status: 'Terminada',
    summary: 'Aplicación fullstack para gestión de hábitos con métricas y recompensas.',
    context: 'Proyecto personal  para practicar diseño de APIs, persistencia y UI moderna.',
    architecture: 'cliente‑servidor, API REST, MVC en backend.',
    technologies: ['Node.js/Express', 'PostgreSQL', 'React/Vite', 'Tailwind'],
    patterns: 'repositorio/servicios, DTOs, middlewares.',
    procedure: [
      'Definición de requerimientos y modelo de datos.',
      'Implementación de endpoints y lógica de negocio',
      'Integración frontend con API y componentes UI.',
      'Pruebas manuales y ajustes de UX.',
 ],
    results: 'Aplicación funcional con capacidad de gestionar hábitos, gamificación completa (6 logros desbloqueables, sistema XP 1–500), estadísticas en tiempo real, historial paginado y autenticación JWT. Arquitectura escalable con 12 endpoints API validados, separación en capas (controllers/services/repositories) y error handling centralizado.',
    
    learnings:[ 
      'Arquitectura en capas (controladores → servicios → repositorios).',
      'Persistencia con transacciones y migraciones en PostgreSQL.',
       'Componentes reutilizables en React y validación en frontend.',
    ],
    images: [
      
      {
        url: 'https://ibb.co/ZRssGCvh',
        title: 'Landing Page/login',
        description: 'Vista inicial del proyecto, diseño y propuesta de valor y flujo de login con validaciones en tiempo real'
      },
      {
        url: 'https://ibb.co/rGCTrFH7',
        title: 'Dashboard de Hábitos',
        description: 'Visualización de progreso diario con estadísticas de hábitos'
      },

      {
        url: 'https://ibb.co/FkNjwmjd',
        title: 'seguimiento de Subtareas',
        description: 'Gestión detallada de hábitos con subtareas y graficos de progresos'
      },
      {
        url: 'https://via.placeholder.com/600x400?text=Logros+Gamificacion',
        title: 'Sistema de Logros',
        description: '6 logros desbloqueables con sistema XP y niveles'
      }
    ],
    github: 'https://github.com/usuario/finanzas-app',
    demo: null,
    documentation: null
  }
]
