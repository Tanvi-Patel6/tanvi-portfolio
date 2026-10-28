// useActiveSection.js
// Tracks which section ID is currently in the viewport.
// Used by Navbar to highlight the active nav link.
// Returns: activeSection (string | null)

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const observers = []

    const options = {
      root: null,
      // Trigger when section occupies the middle 30% of the viewport
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    }

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      }, options)

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [sectionIds])

  return activeSection
}

