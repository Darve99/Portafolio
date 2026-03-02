import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { conceptsData } from '../data/concepts'

function Concepts() {
  return (
    <PageLayout title="Enciclopedia del Desarrollador" subtitle="Glosario técnico" page="092">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="encyclopedia-title">Glosario Técnico</h1>
        <p className="encyclopedia-subtitle">Conceptos explicados con mis propias palabras</p>
        <div className="page-decoration">SECCIÓN E - CONOCIMIENTOS</div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <Link to="/indice" className="font-serif text-blue-ink hover:text-sepia dark:text-blue-ink-light dark:hover:text-sepia-light">
          ← Volver al índice
        </Link>
      </motion.div>

      {/* Concepts grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {conceptsData.map((concept, index) => (
            <motion.article
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="border-2 border-sepia-light p-6 bg-white/50 hover:shadow-lg transition-shadow dark:bg-paper-dark/60 dark:border-sepia/40"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-serif text-3xl font-bold text-sepia dark:text-sepia-light">
                  {index + 1}
                </span>
                <h2 className="font-serif text-2xl font-bold text-blue-ink dark:text-blue-ink-light flex-1">
                  {concept.title}
                </h2>
              </div>
              
              <p className="article-text mb-4">{concept.explanation}</p>
              
              {concept.example && (
                <div className="mt-4 p-4 bg-sepia-light/10 border-l-4 border-sepia dark:bg-paper-dark/60 dark:border-sepia/40">
                  <p className="font-serif text-sm font-bold text-sepia dark:text-sepia-light mb-2">Ejemplo práctico:</p>
                  <p className="article-text text-sm">{concept.example}</p>
                </div>
              )}
              
              {concept.relatedProjects && concept.relatedProjects.length > 0 && (
                <div className="mt-4">
                  <p className="font-serif text-sm font-bold text-sepia dark:text-sepia-light mb-2">Aplicado en:</p>
                  <div className="flex flex-wrap gap-2">
                    {concept.relatedProjects.map((projectId, idx) => (
                      <Link
                        key={idx}
                        to={`/proyecto/${projectId}`}
                        className="text-sm px-2 py-1 border border-blue-ink text-blue-ink hover:bg-blue-ink hover:text-paper transition-colors dark:border-blue-ink-light dark:text-blue-ink-light dark:hover:bg-blue-ink-light dark:hover:text-ink-dark"
                      >
                        {projectId}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
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
        <p className="mt-2">Glosario Técnico - Página 92</p>
      </motion.div>
    </PageLayout>
  )
}

export default Concepts
