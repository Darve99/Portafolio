import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Cover() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-paper via-paper to-sepia-light/10 dark:from-ink-dark dark:via-ink-dark dark:to-blue-ink/20 p-6 sm:p-8"
    >
      {/* Decorative border */}
      <div className="max-w-4xl w-full border-4 border-double border-sepia p-6 md:p-12 bg-paper/95 shadow-2xl dark:border-sepia-light/60 dark:bg-paper-dark/80">
        {/* Top decoration */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block border-t-2 border-b-2 border-sepia py-2 px-6 md:px-8 dark:border-sepia-light/60">
            <p className="font-serif text-xs md:text-sm tracking-[0.3em] text-sepia dark:text-sepia-light">VOLUMEN I</p>
          </div>
        </div>

        {/* Main title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 md:mb-6 text-blue-ink dark:text-blue-ink-light leading-tight"
        >
          Portafolio
        </motion.h1>

        {/* Author */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-ink dark:text-paper mb-2">
            David Alejandro Roa Velasquez
          </p>
          <p className="font-sans text-base sm:text-lg md:text-xl text-sepia dark:text-sepia-light italic">
            Ingeniero de Sistemas
          </p>
        </motion.div>

        {/* Edition info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-block border-t border-b border-sepia py-2 px-4 md:px-8 dark:border-sepia-light/60">
            <p className="font-serif text-xs sm:text-sm md:text-base tracking-widest text-sepia dark:text-sepia-light">
              EDICIÓN 2026
            </p>
          </div>
        </motion.div>

        {/* Enter button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/indice')}
            className="font-serif text-sm sm:text-base md:text-lg px-6 sm:px-10 md:px-12 py-3 md:py-4 border-2 border-blue-ink text-blue-ink hover:bg-blue-ink hover:text-paper transition-all duration-300 tracking-wider whitespace-nowrap dark:border-blue-ink-light dark:text-blue-ink-light dark:hover:bg-blue-ink-light dark:hover:text-ink-dark"
          >
            ABRIR PORTAFOLIO
          </button>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 text-center text-xs text-sepia dark:text-sepia-light font-serif"
        >
          <p>★ ★ ★</p>
        </motion.div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
          color: '#704214'
        }} />
      </div>
    </motion.div>
  )
}

export default Cover
