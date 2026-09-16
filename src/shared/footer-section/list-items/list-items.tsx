'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './list-item.module.scss'

const ListItem = ({ text, link }: { text: string; link?: string }) => {
  const pathname = usePathname()

  return (
    <div className={styles.listItemContainer}>
      {link ? (
        <Link
          href={link}
          className={`${styles.listItem} ${styles.linkItem}`}
          onClick={(e) => {
            if (pathname === link) {
              e.preventDefault()
            }
          }}
        >
          {text}
        </Link>
      ) : (
        <p className={`${styles.listItem} ${styles.textItem}`}>{text}</p>
      )}
    </div>
  )
}

export default ListItem
