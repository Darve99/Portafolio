export const conceptsData = [
  {
    id: 'api-rest',
    title: 'API REST',
    explanation: 'Una API REST es como un camarero en un restaurante digital. El cliente (frontend) pide algo del menú (hace una petición), y el camarero (API) se comunica con la cocina (backend/base de datos) para traerte exactamente lo que pediste. Usa verbos HTTP como GET para leer, POST para crear, PUT para actualizar y DELETE para eliminar datos.',
    example: 'En mi sistema escolar, cuando un profesor consulta la lista de estudiantes, el frontend hace GET /api/estudiantes. El servidor procesa esto y devuelve un JSON con los datos. Es simple, predecible y cualquier frontend puede consumirlo.',
    relatedProjects: ['sistema-gestion-escolar']
  },
  {
    id: 'mvc',
    title: 'Patrón MVC',
    explanation: 'MVC (Modelo-Vista-Controlador) es como organizar una oficina: el Modelo guarda y gestiona los datos (como un archivero), la Vista es lo que ves en pantalla (el escritorio donde trabajas), y el Controlador es el gerente que coordina todo. Cuando haces clic en un botón, el Controlador recibe la orden, pide datos al Modelo y actualiza la Vista.',
    example: 'En mi backend con Express, cada ruta tiene un controlador que valida datos, llama al modelo (que interactúa con la BD) y devuelve una respuesta. Esto mantiene el código organizado y fácil de mantener.',
    relatedProjects: ['sistema-gestion-escolar']
  },
  {
    id: 'autenticacion-jwt',
    title: 'Autenticación con JWT',
    explanation: 'JWT (JSON Web Token) es como una pulsera VIP en un concierto. Cuando inicias sesión correctamente, el servidor te da un token firmado digitalmente. Cada vez que pides algo protegido, muestras tu token. El servidor verifica la firma sin consultar la base de datos cada vez, lo que es muy eficiente.',
    example: 'En mi app, cuando un usuario se autentica, genero un JWT con su ID y rol. Este token viaja en el header Authorization en cada petición. El middleware verifica el token antes de permitir acceso a rutas protegidas.',
    relatedProjects: ['sistema-gestion-escolar']
  },
  {
    id: 'flutter',
    title: 'Flutter',
    explanation: 'Flutter es un framework de Google para crear apps móviles desde un solo código. Usa Dart como lenguaje y dibuja cada píxel de la interfaz, lo que garantiza que se vea igual en Android e iOS. Todo es un "widget" (componente reutilizable), desde un botón hasta la app completa.',
    example: 'Con Flutter puedo escribir el código una vez y compilarlo para Android, iOS y hasta web. Los widgets se componen como bloques de LEGO. Un Scaffold contiene un AppBar, un Body con ListView, y cada item es un Card personalizado.',
    relatedProjects: ['app-finanzas-personales']
  },
  {
    id: 'sql-relacional',
    title: 'Bases de Datos SQL',
    explanation: 'SQL es el lenguaje universal para hablar con bases de datos relacionales. Piensa en tablas de Excel conectadas entre sí. Una tabla de "Estudiantes" se relaciona con "Calificaciones" mediante un ID. SQL te permite hacer consultas complejas como "dame los estudiantes con promedio mayor a 4.0 en matemáticas".',
    example: 'En PostgreSQL diseñé tablas normalizadas: usuarios, estudiantes, cursos, inscripciones. Con JOINs puedo consultar datos de múltiples tablas. Las claves foráneas garantizan integridad referencial.',
    relatedProjects: ['sistema-gestion-escolar']
  },
  {
    id: 'estado-react',
    title: 'Gestión de Estado',
    explanation: 'El "estado" en React es la memoria de un componente. Cuando el estado cambia, React re-renderiza automáticamente la interfaz. Es como un tablero de control: cada cambio actualiza lo que ves. Para apps complejas, herramientas como Context API o Redux centralizan el estado.',
    example: 'En mi app de finanzas uso Provider (Flutter) para compartir el estado de transacciones entre pantallas. Cuando agrego un gasto, todos los gráficos se actualizan automáticamente sin recargar datos.',
    relatedProjects: ['app-finanzas-personales']
  }
]
