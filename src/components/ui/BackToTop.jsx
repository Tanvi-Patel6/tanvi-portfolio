// BackToTop.jsx
// Fixed floating button — visible after scrolling 400px.
// Smooth scrolls to the top of the page on click.

import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import styles from './ui.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <HiArrowUp size={20} />
    </button>
  )
}

