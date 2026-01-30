'use client'

import styles from './list-item.module.scss'

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.listItemContainer}>
      <p className={styles.listItem}>{text}</p>
    </div>
  )
}

export default ListItem
