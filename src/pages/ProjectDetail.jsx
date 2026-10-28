// ProjectDetail.jsx
// Dedicated project route displaying detailed case study, features, stack, and demo links.

import { useParams, Link, Navigate } from 'react-router-dom'
import { HiArrowLeft, HiExternalLink, HiCode, HiCheckCircle } from 'react-icons/hi'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  // Invalid route fallback: if project does not exist, redirect or show not found
  if (!project) {
    return (
      <div className={`container ${styles.notFoundContainer}`}>
        <div className={styles.notFoundCard}>
          <span className={styles.notFoundCode}>404</span>
          <h1 className={styles.notFoundTitle}>Project Not Found</h1>
          <p className={styles.notFoundMessage}>
            The project <code className={styles.codePill}>{projectId}</code> could not be found or has been moved.
          </p>
          <Link to="/" className={styles.backButton}>
            <HiArrowLeft size={18} />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    )
  }

  const { title, category, tagline, description, longDescription, keyFeatures, techStack, liveUrl, githubUrl, image } = project

  return (
    <article className={styles.pageWrapper}>
      {/* Top Banner Navigation */}
      <div className={styles.topBar}>
        <div className="container">
          <Link to="/#projects" className={styles.backLink}>
            <HiArrowLeft size={18} />
            <span>Back to all projects</span>
          </Link>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        {/* Header Information */}
        <header className={styles.header}>
          <span className={styles.categoryBadge}>{category}</span>
          <h1 className={styles.title}>{title}</h1>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </header>

        {/* Hero Visual or Placeholder */}
        <div className={styles.visualContainer}>
          {image ? (
            <img src={image} alt={`Preview for ${title}`} className={styles.heroImage} />
          ) : (
            <div className={styles.heroPlaceholder}>
              <div className={styles.placeholderSymbol}>{title.slice(0, 2).toUpperCase()}</div>
              <p className={styles.placeholderLabel}>Project Demonstration & Screenshot Placeholder</p>
            </div>
          )}
        </div>

        {/* Grid: Overview & Meta Details */}
        <div className={styles.detailsGrid}>
          {/* Main Description & Highlights */}
          <div className={styles.mainColumn}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Project Overview</h2>
              <p className={styles.paragraph}>{longDescription || description}</p>
            </section>

            {keyFeatures && keyFeatures.length > 0 && (
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>Key Highlights & Functionality</h2>
                <ul className={styles.featureList}>
                  {keyFeatures.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <HiCheckCircle className={styles.featureIcon} size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar Column: Tech Stack & Links */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.metaCard}>
              <h3 className={styles.metaCardTitle}>Technologies Used</h3>
              <div className={styles.tagsContainer}>
                {techStack.map((tech) => (
                  <span key={tech} className={styles.tagChip}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.divider} />

              <h3 className={styles.metaCardTitle}>Links & Artifacts</h3>
              <div className={styles.linksStack}>
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButtonPrimary}
                  >
                    <span>Open Live Demo</span>
                    <HiExternalLink size={18} />
                  </a>
                ) : (
                  <div className={styles.actionButtonDisabled}>
                    <span>Live Demo (URL Pending)</span>
                  </div>
                )}

                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButtonSecondary}
                  >
                    <HiCode size={18} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <div className={styles.actionButtonDisabled}>
                    <span>Repository (URL Pending)</span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

