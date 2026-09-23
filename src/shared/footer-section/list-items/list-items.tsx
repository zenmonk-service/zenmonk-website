'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { toggleLoader } from '@/store/features/header/header-slice'
import LoadingIndicator from '@/shared/loader/detector'
import styles from './list-item.module.scss'

const ListItem = ({ text, link }: { text: string; link?: string }) => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()

  const isActive = Boolean(link && pathname === link)

  return (
    <div className={styles.listItemContainer}>
      {link ? (
        <Link
          href={link}
          className={`${styles.listItem} ${styles.linkItem} ${isActive ? styles.active : ''}`}
          prefetch={true}
          onClick={(e) => {
            if (pathname === link) {
              e.preventDefault()
              return
            }
            if (!link.startsWith('#') && !link.includes('#')) {
              dispatch(toggleLoader(true))
            }
          }}
        >
          <LoadingIndicator targetHref={link} />
          {text}
        </Link>
      ) : (
        <p className={`${styles.listItem} ${styles.textItem}`}>{text}</p>
      )}
    </div>
  )
}

export default ListItem
