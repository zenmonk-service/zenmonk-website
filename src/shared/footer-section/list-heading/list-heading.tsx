'use client'

import styles from './list-heading.module.scss'

const ListHeading = ({ title }: { title: string }) => {
  return (
    <div className={styles.listTitleContainer}>
      <p className={styles.listTitle}>{title}</p>
    </div>
  )
}

export default ListHeading
