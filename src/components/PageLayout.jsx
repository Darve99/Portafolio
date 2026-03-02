import { motion } from 'framer-motion'

function PageLayout({ title, subtitle, page, children }) {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-sheet"
      >
        <header className="page-head">
          <div className="running-head">
            <span className="running-head__title">{title}</span>
            {subtitle && <span className="running-head__subtitle">{subtitle}</span>}
          </div>
          <div className="ornament">✶ ✶ ✶</div>
        </header>

        <div className="page-body">{children}</div>

        <footer className="page-foot">
          <div className="ornament">✶ ✶ ✶</div>
          {page && <div className="folio">{page}</div>}
        </footer>
      </motion.div>
    </div>
  )
}

export default PageLayout
