// Contact.jsx
// Contact section featuring a Gmail compose link, direct phone link, and social profiles.

import { HiMail, HiPhone, HiLocationMarker, HiArrowNarrowRight } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Contact.module.css'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const email = 'tannapatel258@gmail.com'
  const phone = '+91 83207 30310'
  const githubUrl = 'https://github.com' // [PLACEHOLDER - update with your GitHub profile]
  const linkedinUrl = 'https://linkedin.com' // [PLACEHOLDER - update with your LinkedIn profile]
  const location = 'Available for Remote & Hybrid Roles'
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

  return (
    <section
      id="contact"
      ref={ref}
      className={`section ${styles.contactSection} reveal-section ${isVisible ? 'revealed' : ''}`}
    >
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Interested in collaborating, hiring for frontend opportunities, or discussing project ideas? Let's connect."
        />

        <div className={styles.contactWrapper}>
          {/* Main Contact Cards */}
          <div className={styles.methodsGrid}>
            {/* Email Card */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              title={`Send email to ${email}`}
            >
              <div className={styles.iconCircle}>
                <HiMail size={24} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Direct Email</span>
                <span className={styles.cardValue}>{email}</span>
              </div>
              <span className={styles.arrowIcon} aria-hidden="true">
                <HiArrowNarrowRight size={20} />
              </span>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className={styles.contactCard}
              title={`Call or WhatsApp ${phone}`}
            >
              <div className={styles.iconCircle}>
                <HiPhone size={24} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Phone Number</span>
                <span className={styles.cardValue}>{phone}</span>
              </div>
              <span className={styles.arrowIcon} aria-hidden="true">
                <HiArrowNarrowRight size={20} />
              </span>
            </a>

            {/* Location / Status Card */}
            <div className={`${styles.contactCard} ${styles.infoOnlyCard}`}>
              <div className={styles.iconCircle}>
                <HiLocationMarker size={24} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Location & Availability</span>
                <span className={styles.cardValue}>{location}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className={styles.socialsContainer}>
            <span className={styles.socialsTitle}>Connect on Professional Platforms:</span>
            <div className={styles.socialLinks}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label="Tanvi Patel on GitHub"
              >
                <SiGithub size={20} />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label="Tanvi Patel on LinkedIn"
              >
                <FaLinkedinIn size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
