import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { aboutData } from '../data/about'

function AboutMe() {
  return (
    <PageLayout title="Enciclopedia del Desarrollador" subtitle="Sobre el autor" page="004">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="encyclopedia-title">Sobre el Autor</h1>
        <p className="encyclopedia-subtitle">David Alejandro Roa Velasquez</p>
        <div className="page-decoration">BIOGRAFÍA PROFESIONAL</div>
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

      <div className="max-w-5xl mx-auto">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="article-section mb-12"
        >
          <div className="grid md:grid-cols-[240px,1fr] gap-8 items-center">
            {aboutData.portrait?.src && (
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0">
                <div className="absolute inset-0 border-4 border-sepia-light translate-x-2 translate-y-2 dark:border-sepia/40" />
                <div className="relative w-full h-full overflow-hidden border-2 border-blue-ink shadow-xl bg-white dark:border-blue-ink-light dark:bg-paper-dark">
                  <img
                    src={aboutData.portrait.src}
                    alt={aboutData.portrait.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {aboutData.portrait.caption && (
                  <p className="mt-3 text-center font-serif text-sm text-sepia dark:text-sepia-light">
                    {aboutData.portrait.caption}
                  </p>
                )}
              </div>
            )}

            <div className="prose max-w-none">
              <p className="article-text text-lg leading-relaxed mb-4 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-sepia dark:first-letter:text-sepia-light first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {aboutData.introduction}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-8">
            {/* Formación */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="article-section"
            >
              <h2 className="article-heading">Formación Académica</h2>
              <div className="space-y-4">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-sepia-light pl-4 dark:border-sepia/40">
                    <h3 className="font-serif text-lg font-bold text-blue-ink dark:text-blue-ink-light">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-sepia dark:text-sepia-light">{edu.institution}</p>
                    <p className="font-sans text-sm text-ink/70 dark:text-paper/70">{edu.period}</p>
                    {edu.highlights && (
                      <p className="font-sans text-sm mt-2 italic">{edu.highlights}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Habilidades técnicas */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="article-section"
            >
              <h2 className="article-heading">Habilidades Técnicas</h2>
              <div className="space-y-4">
                {aboutData.skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="article-subheading">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-blue-ink/10 border border-blue-ink/30 font-sans text-sm dark:bg-paper-dark/60 dark:border-blue-ink/40 dark:text-blue-ink-light"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Filosofía */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="article-section"
            >
              <h2 className="article-heading">Filosofía de Desarrollo</h2>
              <div className="space-y-3">
                {aboutData.philosophy.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-sepia dark:text-sepia-light font-serif text-xl">•</span>
                    <p className="article-text">{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Intereses */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="article-section"
            >
              <h2 className="article-heading">Áreas de Interés</h2>
              <div className="space-y-3">
                {aboutData.interests.map((interest, idx) => (
                  <div key={idx} className="border-l-4 border-sepia-light pl-4 dark:border-sepia/40">
                    <h3 className="font-serif font-bold text-blue-ink dark:text-blue-ink-light">{interest.area}</h3>
                    <p className="article-text text-sm">{interest.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Objetivos */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="article-section"
            >
              <h2 className="article-heading">Objetivos Actuales</h2>
              <div className="bg-sepia-light/10 border-2 border-sepia-light p-4 dark:bg-paper-dark/60 dark:border-sepia/40">
                <p className="article-text">{aboutData.currentGoals}</p>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="article-section mt-12 text-center"
        >
          <h2 className="article-heading text-center">Contacto</h2>
          <div className="flex justify-center gap-6 flex-wrap mt-6">
            {aboutData.contact.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-ink text-blue-ink hover:bg-blue-ink hover:text-paper transition-all duration-300 font-sans dark:border-blue-ink-light dark:text-blue-ink-light dark:hover:bg-blue-ink-light dark:hover:text-ink-dark"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center border-t-2 border-b-2 border-sepia-light py-6 dark:border-sepia/40"
        >
          <p className="font-serif text-xl italic text-sepia dark:text-sepia-light mb-2">
            "{aboutData.quote.text}"
          </p>
          <p className="font-sans text-sm text-ink/70 dark:text-paper/70">— {aboutData.quote.author}</p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-16 text-center text-sm text-sepia dark:text-sepia-light font-serif"
      >
        <p>★ ★ ★</p>
        <p className="mt-2">Biografía Profesional - Edición 2026</p>
      </motion.div>
    </PageLayout>
  )
}

export default AboutMe
