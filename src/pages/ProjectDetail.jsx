import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import { projectsData } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)
  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false)
  const [cursorPercent, setCursorPercent] = useState({ x: 50, y: 50 })
  const [isGalleryHovering, setIsGalleryHovering] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (!project.images) return

    if (isLeftSwipe) {
      setCurrentImageIdx((prev) => (prev + 1) % project.images.length)
    }
    if (isRightSwipe) {
      setCurrentImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  if (!project) {
    return (
      <PageLayout title="Enciclopedia del Desarrollador" subtitle="Artículo técnico" page="—">
        <div className="text-center">
          <h1 className="encyclopedia-title">Proyecto no encontrado</h1>
          <Link to="/indice" className="font-serif text-blue-ink hover:text-sepia dark:text-blue-ink-light dark:hover:text-sepia-light">
            ← Volver al índice
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Enciclopedia del Desarrollador" subtitle={project.title} page="018">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link to="/indice" className="font-serif text-blue-ink hover:text-sepia inline-block mb-4 dark:text-blue-ink-light dark:hover:text-sepia-light">
          ← Volver al índice
        </Link>
        
        <div className="flex items-start gap-6 mb-4">
          <span className="font-serif text-6xl font-bold text-sepia dark:text-sepia-light">
            {project.category === 'academic' ? 'A' : 
             project.category === 'mobile' ? 'B' : 
             project.category === 'web' ? 'C' : 'D'}
          </span>
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-blue-ink dark:text-blue-ink-light mb-2">
              {project.title}
            </h1>
            <div className="flex gap-4 text-sm font-sans text-sepia dark:text-sepia-light">
              <span>Categoría: {project.categoryName}</span>
              <span>•</span>
              <span>Estado: {project.status}</span>
            </div>
          </div>
        </div>
        
        <div className="page-decoration">ARTÍCULO TÉCNICO</div>
      </motion.div>

      {/* Content in two columns */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-8">
            {/* Resumen */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="article-section"
            >
              <h2 className="article-heading">Resumen</h2>
              <p className="article-text">{project.summary}</p>
            </motion.section>

            {/* Contexto */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="article-section"
            >
              <h2 className="article-heading">Contexto</h2>
              <p className="article-text">{project.context}</p>
            </motion.section>

            {/* Metodología */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="article-section"
            >
              <h2 className="article-heading">Metodología</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="article-subheading">Arquitectura</h3>
                  <p className="article-text">{project.architecture}</p>
                </div>
                
                <div>
                  <h3 className="article-subheading">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-sepia-light/20 border border-sepia-light font-sans text-sm dark:bg-paper-dark/60 dark:border-sepia/40 dark:text-paper"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.patterns && (
                  <div>
                    <h3 className="article-subheading">Patrones</h3>
                    <p className="article-text">{project.patterns}</p>
                  </div>
                )}
              </div>
            </motion.section>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Procedimiento */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="article-section"
            >
              <h2 className="article-heading">Procedimiento</h2>
              <ul className="space-y-2 article-text">
                {project.procedure.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="font-serif text-sepia dark:text-sepia-light font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Resultados */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="article-section"
            >
              <h2 className="article-heading">Resultados</h2>
              <p className="article-text">{project.results}</p>
              {project.metrics && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-3 bg-sepia-light/10 border border-sepia-light dark:bg-paper-dark/60 dark:border-sepia/40">
                      <p className="font-serif text-2xl font-bold text-blue-ink dark:text-blue-ink-light">{metric.value}</p>
                      <p className="font-sans text-sm text-sepia dark:text-sepia-light">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>

            {/* Aprendizajes */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="article-section"
            >
              <h2 className="article-heading">Aprendizajes</h2>
              {Array.isArray(project.learnings) ? (
                <ul className="space-y-2 article-text">
                  {project.learnings.map((learning, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-serif text-sepia dark:text-sepia-light font-bold">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="article-text">{project.learnings}</p>
              )}
            </motion.section>

            {/* Galería de Imágenes */}
            {project.images && project.images.length > 0 && (
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="article-section"
              >
                <h2 className="article-heading">Galería</h2>
                <div className="space-y-4">
                  {/* Carrusel */}
                  <div 
                    className="relative bg-paper-light dark:bg-paper-dark border border-sepia-light/30 dark:border-sepia/20 overflow-hidden rounded-sm"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="relative h-96 bg-black/5 dark:bg-black/30 overflow-hidden group"
                      onMouseEnter={() => setIsGalleryHovering(true)}
                      onMouseLeave={() => {
                        setIsGalleryHovering(false)
                        setCursorPercent({ x: 50, y: 50 })
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const x = ((e.clientX - rect.left) / rect.width) * 100
                        const y = ((e.clientY - rect.top) / rect.height) * 100
                        setCursorPercent({ x, y })
                      }}
                    >
                      <motion.img
                        key={currentImageIdx}
                        src={project.images[currentImageIdx].url}
                        alt={project.images[currentImageIdx].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-contain p-2 transition-transform duration-150 ease-out cursor-zoom-in will-change-transform"
                        style={{
                          transform: isGalleryHovering
                            ? `scale(1.9) translate(${(50 - cursorPercent.x) * 0.22}%, ${(50 - cursorPercent.y) * 0.22}%)`
                            : 'scale(1) translate(0, 0)'
                        }}
                        onClick={() => setIsImageZoomOpen(true)}
                        title="Click para ampliar"
                      />
                      
                      {/* Controles */}
                      {project.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                          <button
                            onClick={() => setCurrentImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length)}
                            className="p-2 bg-sepia/80 text-paper rounded hover:bg-sepia transition-colors pointer-events-auto"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => setCurrentImageIdx((prev) => (prev + 1) % project.images.length)}
                            className="p-2 bg-sepia/80 text-paper rounded hover:bg-sepia transition-colors pointer-events-auto"
                          >
                            →
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Información de la imagen */}
                    <motion.div
                      key={`info-${currentImageIdx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 border-t border-sepia-light/30 dark:border-sepia/20"
                    >
                      <h3 className="font-serif text-lg font-bold text-blue-ink dark:text-blue-ink-light mb-2">
                        {project.images[currentImageIdx].title}
                      </h3>
                      <p className="font-sans text-sm text-sepia dark:text-sepia-light">
                        {project.images[currentImageIdx].description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Indicadores */}
                  {project.images.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIdx(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIdx
                              ? 'bg-blue-ink dark:bg-blue-ink-light w-6'
                              : 'bg-sepia-light/50 dark:bg-sepia/30'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            {/* Referencias */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="article-section"
            >
              <h2 className="article-heading">Referencias</h2>
              <div className="space-y-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-sans text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light"
                  >
                    → Repositorio en GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-sans text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light"
                  >
                    → Demostración en vivo
                  </a>
                )}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-sans text-blue-ink hover:text-sepia transition-colors dark:text-blue-ink-light dark:hover:text-sepia-light"
                  >
                    → Documentación técnica
                  </a>
                )}
              </div>
            </motion.section>
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
      </motion.div>

      {project.images && project.images.length > 0 && isImageZoomOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setIsImageZoomOpen(false)}
        >
          <button
            onClick={() => setIsImageZoomOpen(false)}
            className="absolute top-4 right-4 text-paper bg-black/50 border border-paper/30 px-3 py-1 rounded hover:bg-black/70 transition-colors"
          >
            ✕
          </button>

          <div
            className="max-w-[95vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[currentImageIdx].url}
              alt={project.images[currentImageIdx].title}
              className="w-auto h-auto max-w-none max-h-none"
            />
          </div>
        </motion.div>
      )}
    </PageLayout>
  )
}

export default ProjectDetail
