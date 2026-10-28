// GeometricShape.jsx
// Decorative SVG geometric illustration for the Hero section.
// Adapts cleanly to the Chocolate Brown, Cream, and Burnt Orange palette.

import styles from './ui.module.css'

export default function GeometricShape() {
  return (
    <div className={styles.geoWrapper} aria-hidden="true">
      <svg
        className={styles.geoSvg}
        viewBox="0 0 420 420"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Ambient surface disc */}
        <circle
          cx="210"
          cy="210"
          r="165"
          fill="var(--color-surface)"
          opacity="0.8"
        />

        {/* Concentric orbital rings */}
        <circle
          cx="210"
          cy="210"
          r="135"
          stroke="var(--color-border)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="210"
          cy="210"
          r="105"
          stroke="var(--color-accent)"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* Rotated diamond frame */}
        <rect
          x="135"
          y="135"
          width="150"
          height="150"
          rx="12"
          stroke="var(--color-text)"
          strokeWidth="1.5"
          opacity="0.25"
          transform="rotate(45 210 210)"
        />

        {/* Burnt Orange focal planet/node */}
        <circle
          cx="210"
          cy="75"
          r="14"
          fill="var(--color-accent)"
        />

        {/* Accents & constellations */}
        <circle cx="345" cy="210" r="6" fill="var(--color-accent)" opacity="0.75" />
        <circle cx="75"  cy="210" r="6" fill="var(--color-accent)" opacity="0.75" />
        <circle cx="210" cy="345" r="7" fill="var(--color-accent)" opacity="0.75" />
        <circle cx="115" cy="115" r="4" fill="var(--color-text)" opacity="0.3" />
        <circle cx="305" cy="305" r="4" fill="var(--color-text)" opacity="0.3" />

        {/* Architectural corner lines */}
        <line
          x1="285" y1="55"
          x2="365" y2="55"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <line
          x1="365" y1="55"
          x2="365" y2="135"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <line
          x1="55" y1="285"
          x2="55" y2="365"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <line
          x1="55" y1="365"
          x2="135" y2="365"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
