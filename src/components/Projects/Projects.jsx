// Projects.jsx
// Interactive, data-driven project gallery with category/technology filters.

import { useState, useMemo } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Projects.module.css'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const { ref, isVisible } = useScrollAnimation()

  // Extract all unique filters from categories & technologies
  const filterOptions = useMemo(() => {
    const techSet = new Set()
    projects.forEach((p) => {
      p.techStack.forEach((t) => techSet.add(t))
    })
    return ['All', ...Array.from(techSet)]
  }, [])

  // Filter projects based on active selection
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects
    return projects.filter((project) => project.techStack.includes(selectedFilter))
  }, [selectedFilter])

  return (
    <section
      id="projects"
      ref={ref}
      className={`section ${styles.projectsSection} reveal-section ${isVisible ? 'revealed' : ''}`}
    >
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of client-facing applications and interactive prototypes."
        />

        {/* Filter Pills */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter projects by technology">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterButton} ${isActive ? styles.filterActive : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No projects currently match the selected filter.</p>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => setSelectedFilter('All')}
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
