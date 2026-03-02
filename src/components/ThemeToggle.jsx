import { useEffect, useMemo, useState } from 'react'

const THEME_KEY = 'encyclopedia-theme'

function ThemeToggle() {
  const [themeMode, setThemeMode] = useState('system')
  const [prefersDark, setPrefersDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light' || saved === 'system') {
      setThemeMode(saved)
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => setPrefersDark(event.matches)
    setPrefersDark(media.matches)
    media.addEventListener('change', handleChange)

    return () => media.removeEventListener('change', handleChange)
  }, [])

  const isDark = useMemo(() => {
    if (themeMode === 'dark') return true
    if (themeMode === 'light') return false
    return prefersDark
  }, [themeMode, prefersDark])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem(THEME_KEY, themeMode)
  }, [isDark, themeMode])

  const handleToggle = () => {
    setThemeMode((current) => {
      if (current === 'system') return 'dark'
      if (current === 'dark') return 'light'
      return 'system'
    })
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-sepia-light/70 bg-paper/90 px-3 py-1.5 text-xs font-serif text-blue-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-sepia/40 dark:bg-paper-dark/80 dark:text-blue-ink-light"
      aria-label={
        themeMode === 'system'
          ? 'Cambiar a modo oscuro'
          : themeMode === 'dark'
          ? 'Cambiar a modo claro'
          : 'Usar tema del sistema'
      }
      title={
        themeMode === 'system'
          ? 'Tema del sistema'
          : themeMode === 'dark'
          ? 'Modo oscuro'
          : 'Modo claro'
      }
    >
      <span className="text-sm">
        {themeMode === 'system' ? '◎' : isDark ? '☾' : '☀︎'}
      </span>
      <span>
        {themeMode === 'system'
          ? 'Sistema'
          : isDark
          ? 'Oscuro'
          : 'Claro'}
      </span>
    </button>
  )
}

export default ThemeToggle
