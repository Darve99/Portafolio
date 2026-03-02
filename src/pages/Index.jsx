import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { projectsData } from '../data/projects'

function Index() {
  const categories = [
    { id: 'A', name: 'Proyectos Académicos', projects: projectsData.filter(p => p.category === 'academic') },
    { id: 'B', name: 'Aplicaciones Móviles', projects: projectsData.filter(p => p.category === 'mobile') },
    { id: 'C', name: 'Desarrollo Web', projects: projectsData.filter(p => p.category === 'web') },
    { id: 'D', name: 'Experimentos y Prototipos', projects: projectsData.filter(p => p.category === 'experimental') },
  ]

  return (
    <PageLayout title="Portafolio" subtitle="Índice general" page="001">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="encyclopedia-title">Índice General</h1>
        <div className="page-decoration">VOLUMEN I - EDICIÓN 2026</div>
      </motion.div>

      {/* Navigation links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-6 mb-12 flex-wrap"
      >
        <Link to="/" className="font-serif text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light">
          ← Portada
        </Link>
        <Link to="/sobre-mi" className="font-serif text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light">
          Sobre Mí
        </Link>
        <Link to="/conceptos" className="font-serif text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light">
          Conceptos
        </Link>
        <Link to="/timeline" className="font-serif text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light">
          Línea del Tiempo
        </Link>
      </motion.div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto space-y-12">
        {categories.map((category, index) => (
          <motion.section
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="article-section"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-5xl font-bold text-sepia dark:text-sepia-light">{category.id}</span>
              <h2 className="font-serif text-3xl font-bold text-blue-ink flex-1 border-b-2 border-sepia-light pb-2 dark:text-blue-ink-light dark:border-sepia/40">
                {category.name}
              </h2>
            </div>

            <div className="pl-16 space-y-3">
              {category.projects.length > 0 ? (
                category.projects.map((project, idx) => (
                  <Link
                    key={project.id}
                    to={`/proyecto/${project.id}`}
                    className="block group"
                  >
                    <div className="flex items-baseline justify-between hover:bg-sepia-light/10 dark:hover:bg-paper-dark/50 px-4 py-2 -mx-4 transition-colors">
                      <span className="font-sans text-lg group-hover:text-blue-ink transition-colors flex-1 dark:group-hover:text-blue-ink-light">
                        {idx + 1}. {project.title}
                      </span>
                      <span className="font-serif text-sm text-sepia dark:text-sepia-light ml-4">
                        p. {10 + index * 20 + idx * 3}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="font-sans text-ink/60 dark:text-paper/60 italic">Próximamente...</p>
              )}
            </div>
          </motion.section>
        ))}

        {/* Skills section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="article-section"
        >
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-serif text-5xl font-bold text-sepia dark:text-sepia-light">E</span>
            <h2 className="font-serif text-3xl font-bold text-blue-ink flex-1 border-b-2 border-sepia-light pb-2 dark:text-blue-ink-light dark:border-sepia/40">
              Habilidades y Tecnologías
            </h2>
          </div>

          <div className="pl-16">
            <Link
              to="/conceptos"
              className="block group hover:bg-sepia-light/10 dark:hover:bg-paper-dark/50 px-4 py-2 -mx-4 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-lg group-hover:text-blue-ink transition-colors dark:group-hover:text-blue-ink-light">
                  Glosario Técnico
                </span>
                <span className="font-serif text-sm text-sepia dark:text-sepia-light">p. 92</span>
              </div>
            </Link>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center text-sm text-sepia font-serif"
      >
        <p>★ ★ ★</p>
        <p className="mt-2">Portafolio</p>
      </motion.div>
    </PageLayout>
  )
}

export default Index
