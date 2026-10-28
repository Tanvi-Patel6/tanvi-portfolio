// Footer.jsx
// Clean, elegant portfolio footer with quick navigation, social links, and copyright notice.

import { Link, useLocation } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import { smoothScrollTo } from '../../utils/smoothScroll'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleNavClick = (targetId) => {
    if (isHomePage) {
      smoothScrollTo(targetId)
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Brand & Mini Tagline */}
        <div className={styles.brandBlock}>
          <div className={styles.brandLogo}>
            <span className={styles.logoMark}>T</span>
            <span className={styles.logoText}>Tanvi Patel</span>
          </div>
          <p className={styles.tagline}>
            Full Stack Web Developer specializing in React, clean CSS architectures, and user-first web applications.
          </p>
        </div>

        {/* Quick Anchor Navigation */}
        <nav className={styles.navBlock} aria-label="Footer Navigation">
          <h4 className={styles.blockTitle}>Quick Links</h4>
          <ul className={styles.navList}>
            {['hero', 'about', 'skills', 'projects', 'contact'].map((id) => {
              const label = id.charAt(0).toUpperCase() + id.slice(1)
              return (
                <li key={id}>
                  {isHomePage ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(id)}
                      className={styles.footerLink}
                    >
                      {label === 'Hero' ? 'Top' : label}
                    </button>
                  ) : (
                    <Link to={`/#${id}`} className={styles.footerLink}>
                      {label === 'Hero' ? 'Top' : label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Social Profiles */}
        <div className={styles.socialBlock}>
          <h4 className={styles.blockTitle}>Connect</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCircle}
              aria-label="GitHub profile"
              title="GitHub"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCircle}
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            © {currentYear} Tanvi Patel. Crafted with React, Vite & Plain CSS.
          </p>
          <p className={styles.signature}>
            <span>Designed with precision</span>
            <HiHeart className={styles.heartIcon} size={14} aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}
