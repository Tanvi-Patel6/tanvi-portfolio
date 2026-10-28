// About.jsx
// Professional About section highlighting background, design philosophy, and strengths.

import { HiCode, HiSparkles, HiLightningBolt } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './About.module.css'

const HIGHLIGHTS = [
  {
    icon: HiCode,
    title: 'Clean Architecture',
    description: 'Writing maintainable, modular React and CSS that scales gracefully across devices.'
  },
  {
    icon: HiSparkles,
    title: 'Design-Driven',
    description: 'Keen eye for typography, micro-interactions, responsive grids, and design consistency.'
  },
  {
    icon: HiLightningBolt,
    title: 'Performance & a11y',
    description: 'Ensuring fast load times, accessible semantic HTML, and intuitive user experiences.'
  }
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${styles.aboutSection} reveal-section ${isVisible ? 'revealed' : ''}`}
    >
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="A full stack web developer focused on crafting elegant and functional web interfaces."
        />

        <div className={styles.aboutContent}>
          {/* Left Column: Visual Portrait / Geometric Monogram */}
          <div className={styles.visualColumn}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarGraphic}>
                {/* 
                  To use your photo:
                  1. Put your image in 'public/profile.jpg' (or .png)
                  2. If the file exists, it displays your photo inside the circular frame.
                  3. If no photo is found, it automatically falls back to your monogram.
                */}
                <img
                  src="/profile.png"
                  alt="Tanvi Patel"
                  className={styles.avatarImage}
                  onError={(e) => {
                    // Fallback to /profile.jpg if /image.png fails
                    if (!e.currentTarget.src.includes('profile.jpg')) {
                      e.currentTarget.src = '/profile.jpg'
                      return
                    }
                    // Hide image and show fallback if file not found
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className={styles.monogramCircle} style={{ display: 'none' }}>
                  <span className={styles.monogramLetter}>T</span>
                </div>
                <div className={styles.avatarRing} />
              </div>
              <div className={styles.avatarCaption}>
                <span className={styles.captionName}>Tanvi Patel</span>
                <span className={styles.captionRole}>Full Stack Web Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className={styles.narrativeColumn}>
            <h3 className={styles.subHeading}>Passionate about clean code & thoughtful user experiences</h3>

            <p className={styles.paragraph}>
              I specialize in frontend web development with a strong focus on <strong>React</strong>, modern <strong>JavaScript</strong>, and modular styling. My approach centers around building interfaces that are not only visually engaging, but also accessible, lightweight, and structured for long-term maintainability.
            </p>

            <p className={styles.paragraph}>
              Whether architecting component systems from scratch or refining interactive details, I enjoy bridging the gap between design concepts and robust code. When developing projects like <em>HealthyTrack</em> and <em>Farm Fusion</em>, I prioritize intuitive state flow, responsive layouts, and performance.
            </p>

            {/* Core Value Pillars */}
            <div className={styles.highlightsGrid}>
              {HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>
                      <Icon size={22} />
                    </div>
                    <div className={styles.highlightText}>
                      <h4 className={styles.highlightTitle}>{item.title}</h4>
                      <p className={styles.highlightDesc}>{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
