// useTheme.js
// Manages dark / light theme state.
// - Reads from localStorage on first load
// - Falls back to system preference (prefers-color-scheme)
// - Applies 'dark' class directly to document.documentElement (<html>)
// - Returns { theme, toggleTheme }

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'tanvi-portfolio-theme'

function getInitialTheme() {
  // 1. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored

  // 2. Fall back to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

  // 3. Default to light
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Safe SSR guard — though Vite is CSR-only, good practice
    if (typeof window === 'undefined') return 'light'
    return getInitialTheme()
  })

  // Apply class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}

