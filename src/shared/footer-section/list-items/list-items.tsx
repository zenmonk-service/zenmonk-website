'use client'

import Link from 'next/link'
import styles from './list-item.module.scss'

const ListItem = ({ text, link }: { text: string; link?: string }) => {
  return (
    <div className={styles.listItemContainer}>
      {link ? (
        <Link href={link} className={`${styles.listItem} ${styles.linkItem}`}>
          {text}
        </Link>
      ) : (
        <p className={`${styles.listItem} ${styles.textItem}`}>{text}</p>
      )}
    </div>
  )
}

export default ListItem
