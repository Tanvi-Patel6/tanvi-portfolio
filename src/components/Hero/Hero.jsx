// Hero.jsx
// Hero section with name, professional title, interactive typewriter effect, CTA buttons, and geometric visual.

import { useState, useEffect } from 'react'
import { HiArrowNarrowRight, HiDocumentDownload } from 'react-icons/hi'
import GeometricShape from '../ui/GeometricShape'
import { smoothScrollTo } from '../../utils/smoothScroll'
import styles from './Hero.module.css'

const ROLES = [
  'Full Stack Web Developer',
  'React & UI Specialist',
  'Crafting Clean Web Experiences'
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect loop
  useEffect(() => {
    const currentFullText = ROLES[roleIndex]
    const typingSpeed = isDeleting ? 40 : 85

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1))
        if (displayedText === currentFullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        // Deleting backwards
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1))
        if (displayedText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        {/* Left Column: Introductions & CTAs */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for Full Stack Opportunities
          </div>

          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>Tanvi Patel</h1>

          <div className={styles.typingContainer} aria-label="Professional focus">
            <span className={styles.dynamicRole}>{displayedText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </div>

          <p className={styles.bioExcerpt}>
            Passionate about transforming thoughtful designs into accessible, resilient,
            and high-performing web applications with React, modern JavaScript, and clean CSS.
          </p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.primaryCta}
              onClick={() => smoothScrollTo('projects')}
            >
              <span>View Projects</span>
              <HiArrowNarrowRight size={18} />
            </button>

            <a
              href="/resume.pdf"
              download="Tanvi_Patel_Resume.pdf"
              className={styles.secondaryCta}
            >
              <HiDocumentDownload size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className={styles.visualContainer}>
          <GeometricShape />
        </div>
      </div>
    </section>
  )
}
