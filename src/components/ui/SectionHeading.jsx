// SectionHeading.jsx
// Reusable section title + subtitle block.
// Props:
//   title    (string) — main heading text
//   subtitle (string) — optional muted subtext below title
//   align    ('left' | 'center') — default 'center'

import styles from './ui.module.css'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <div
      className={styles.sectionHeading}
      style={{ textAlign: align }}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      {subtitle && (
        <p className={styles.sectionSubtitle}>{subtitle}</p>
      )}
      <span className={styles.sectionDivider} aria-hidden="true" />
    </div>
  )
}

