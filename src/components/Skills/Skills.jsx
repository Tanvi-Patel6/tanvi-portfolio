// Skills.jsx
// Categorized technical competencies with interactive badge grids.

import SectionHeading from '../ui/SectionHeading'
import SkillBadge from './SkillBadge'
import { skills } from '../../data/skills'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Skills.module.css'

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="skills"
      ref={ref}
      className={`section ${styles.skillsSection} reveal-section ${isVisible ? 'revealed' : ''}`}
    >
      <div className="container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="My core toolkit for building resilient, responsive, and intuitive web applications."
        />

        <div className={styles.categoryGrid}>
          {skills.map((categoryGroup) => (
            <div key={categoryGroup.category} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{categoryGroup.category}</h3>
              <div className={styles.badgesWrapper}>
                {categoryGroup.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
