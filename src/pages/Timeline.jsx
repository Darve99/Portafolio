import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { timelineData } from '../data/timeline'

function Timeline() {
  return (
    <PageLayout title="Enciclopedia del Desarrollador" subtitle="Cronología" page="064">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="encyclopedia-title">Línea del Tiempo</h1>
        <p className="encyclopedia-subtitle">Cronología del aprendizaje</p>
        <div className="page-decoration">HISTORIA DEL DESARROLLO</div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <Link to="/indice" className="font-serif text-blue-ink hover:text-sepia dark:text-blue-ink-light dark:hover:text-sepia-light">
          ← Volver al índice
        </Link>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sepia-light dark:bg-sepia/40" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative pl-20"
              >
                {/* Year marker */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-sepia text-paper flex items-center justify-center font-serif font-bold border-4 border-paper shadow-lg dark:border-ink-dark">
                  {item.year}
                </div>

                {/* Content card */}
                <div className="border-2 border-sepia-light p-6 bg-white/70 hover:shadow-lg transition-shadow dark:bg-paper-dark/60 dark:border-sepia/40">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl font-bold text-blue-ink dark:text-blue-ink-light">
                      {item.title}
                    </h3>
                    <span className="text-sm font-sans text-sepia dark:text-sepia-light whitespace-nowrap ml-4">
                      {item.month}
                    </span>
                  </div>

                  <p className="article-text mb-4">{item.description}</p>

                  {/* Technologies learned */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mb-4">
                      <p className="font-serif text-sm font-bold text-sepia dark:text-sepia-light mb-2">
                        Tecnologías aprendidas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-ink/10 border border-blue-ink/30 font-sans text-sm text-blue-ink dark:bg-paper-dark/60 dark:border-blue-ink/40 dark:text-blue-ink-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related project link */}
                  {item.projectId && (
                    <Link
                      to={`/proyecto/${item.projectId}`}
                      className="inline-block font-sans text-blue-ink hover:text-sepia transition-colors text-sm dark:text-blue-ink-light dark:hover:text-sepia-light"
                    >
                      → Ver proyecto relacionado
                    </Link>
                  )}

                  {/* Key achievement */}
                  {item.achievement && (
                    <div className="mt-4 p-3 bg-sepia-light/10 border-l-4 border-sepia dark:bg-paper-dark/60 dark:border-sepia/40">
                      <p className="font-serif text-sm font-bold text-sepia dark:text-sepia-light mb-1">
                        Logro destacado:
                      </p>
                      <p className="article-text text-sm">{item.achievement}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center text-sm text-sepia dark:text-sepia-light font-serif"
      >
        <p>★ ★ ★</p>
        <p className="mt-2">Cronología completa del aprendizaje</p>
      </motion.div>
    </PageLayout>
  )
}

export default Timeline
