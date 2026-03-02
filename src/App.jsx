import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import Cover from './pages/Cover'
import Index from './pages/Index'
import ProjectDetail from './pages/ProjectDetail'
import Concepts from './pages/Concepts'
import Timeline from './pages/Timeline'
import AboutMe from './pages/AboutMe'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-ink-dark dark:text-paper transition-colors duration-500 relative overflow-hidden [perspective:1200px]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 120, rotateY: -45, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, x: -120, rotateY: 45, scale: 0.98 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-y-0 -right-4 w-12 bg-gradient-to-l from-sepia/40 via-sepia/10 to-transparent dark:from-blue-ink/60 dark:via-blue-ink/20 opacity-80" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_-18px_0_28px_rgba(0,0,0,0.12)] dark:shadow-[inset_-18px_0_32px_rgba(0,0,0,0.45)]" />
          <div className="pointer-events-none absolute inset-y-0 -left-3 w-8 bg-gradient-to-r from-transparent via-sepia/10 to-sepia/30 dark:from-transparent dark:via-blue-ink/20 dark:to-blue-ink/50 opacity-60" />
          <Routes location={location}>
            <Route path="/" element={<Cover />} />
            <Route path="/indice" element={<Index />} />
            <Route path="/proyecto/:id" element={<ProjectDetail />} />
            <Route path="/conceptos" element={<Concepts />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
