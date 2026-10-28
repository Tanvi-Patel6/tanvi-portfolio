// SkillBadge.jsx
// Interactive chip displaying skill name and relevant tech icon.

import {
  SiHtml5,
  SiCss,
  SiCssmodules,
  SiJavascript,
  SiReact,
  SiVite,
  SiGit,
  SiGithub,
  SiPostman,
  SiExpress,
  SiPhp,
} from 'react-icons/si'
import { TbBrandVscode, TbApi, TbDatabase } from 'react-icons/tb'
import { HiCode } from 'react-icons/hi'
import styles from './Skills.module.css'

const ICON_MAP = {
  SiHtml5: SiHtml5,
  SiCss: SiCss,
  SiCssmodules: SiCssmodules,
  SiJavascript: SiJavascript,
  SiReact: SiReact,
  SiVite: SiVite,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiPostman: SiPostman,
  SiExpress: SiExpress,
  SiPhp: SiPhp,
  TbBrandVscode: TbBrandVscode,
  TbApi: TbApi,
  TbDatabase: TbDatabase,
}

export default function SkillBadge({ name, icon }) {
  const IconComponent = ICON_MAP[icon] || HiCode

  return (
    <div className={styles.skillBadge} title={name}>
      <span className={styles.badgeIcon} aria-hidden="true">
        <IconComponent size={20} />
      </span>
      <span className={styles.badgeName}>{name}</span>
    </div>
  )
}
