// ProjectCard.jsx
// Reusable, accessible project card showcasing project metadata, tags, demo/code links, and link to detail page.

import { Link } from 'react-router-dom'
import { HiExternalLink, HiCode, HiArrowRight } from 'react-icons/hi'
import styles from './Projects.module.css'

export default function ProjectCard({ project }) {
  const { id, title, category, tagline, description, techStack, liveUrl, githubUrl, image } = project

  return (
    <article className={styles.card}>
      {/* Project Image or Visual Placeholder */}
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} className={styles.projectImage} loading="lazy" />
        ) : (
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderPattern}>
              <span className={styles.placeholderInitials}>{title.slice(0, 2).toUpperCase()}</span>
            </div>
            <span className={styles.placeholderBadge}>Screenshot Pending</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className={styles.cardBody}>
        <div className={styles.categoryBadge}>{category}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        {tagline && <p className={styles.cardTagline}>{tagline}</p>}
        <p className={styles.cardDescription}>{description}</p>

        {/* Technology Chips */}
        <div className={styles.techStack} aria-label="Technologies used">
          {techStack.map((tech) => (
            <span key={tech} className={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className={styles.cardFooter}>
          <Link to={`/project/${id}`} className={styles.detailsLink} aria-label={`View full details for ${title}`}>
            <span>Case Study</span>
            <HiArrowRight size={16} />
          </Link>

          <div className={styles.externalLinks}>
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                title="View GitHub Repository"
                aria-label={`GitHub repository for ${title}`}
              >
                <HiCode size={20} />
              </a>
            ) : (
              <span className={styles.disabledLink} title="Repository placeholder (link to be provided)">
                <HiCode size={20} />
              </span>
            )}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                title="View Live Demo"
                aria-label={`Live demo for ${title}`}
              >
                <HiExternalLink size={20} />
              </a>
            ) : (
              <span className={styles.disabledLink} title="Live demo placeholder (link to be provided)">
                <HiExternalLink size={20} />
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
