// Home.jsx
// Homepage view assembling all portfolio sections in single-page scroll layout.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function Home() {
  const location = useLocation()

  // Smooth scroll to hash anchor if navigating back from a project route (e.g., /#projects)
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '')
      // Small delay to ensure DOM is ready
      const timeout = setTimeout(() => {
        smoothScrollTo(sectionId)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [location])

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

