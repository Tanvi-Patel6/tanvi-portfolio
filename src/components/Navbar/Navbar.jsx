// Navbar.jsx
// Sticky responsive navigation with active link tracking, mobile menu, and theme toggle.

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { useActiveSection } from '../../hooks/useActiveSection'
import { smoothScrollTo } from '../../utils/smoothScroll'
import styles from './Navbar.module.css'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

const NAV_ITEMS = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false)
    if (isHomePage) {
      smoothScrollTo(targetId)
    }
  }

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        {/* Brand Logo */}
        <Link to="/" className={styles.logo} onClick={() => isHomePage && smoothScrollTo('hero')}>
          <span className={styles.logoMark}>T</span>
          <span className={styles.logoText}>Tanvi Patel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.target
              return (
                <li key={item.target}>
                  {isHomePage ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.target)}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={`/#${item.target}`}
                      className={styles.navLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Action Controls: Theme Switcher & Mobile Menu Toggle */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.target
            return (
              <li key={`mobile-${item.target}`}>
                {isHomePage ? (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.target)}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={`/#${item.target}`}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
