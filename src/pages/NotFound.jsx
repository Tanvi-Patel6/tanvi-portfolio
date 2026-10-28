// NotFound.jsx
// Generic 404 page for unmatched routes.

import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import styles from './ProjectDetail.module.css'

export default function NotFound() {
  return (
    <div className={`container ${styles.notFoundContainer}`}>
      <div className={styles.notFoundCard}>
        <span className={styles.notFoundCode}>404</span>
        <h1 className={styles.notFoundTitle}>Page Not Found</h1>
        <p className={styles.notFoundMessage}>
          The page or path you are looking for does not exist.
        </p>
        <Link to="/" className={styles.backButton}>
          <HiArrowLeft size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  )
}

