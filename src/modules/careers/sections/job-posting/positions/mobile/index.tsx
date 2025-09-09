import React, { useState } from 'react'
import { Collapse, Divider } from '@mui/material'
import Check from '../assets/check.svg'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import { positionsList } from '../positions'
import styles from './mobile.module.scss'

const PositionsMobile = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])

  const handleClick = (index: number) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes((prev) => prev.filter((val) => val !== index))
    } else {
      setSelectedIndexes((prev) => [...prev, index])
    }
  }
  return (
    <div className={styles.container}>
      {positionsList.map((position, index) => {
        const isSelected = selectedIndexes.includes(index)
        return (
          <div className={styles.card} key={position.id}>
            <div
              className={styles.content}
              style={{
                paddingBottom: index === positionsList.length - 1 ? 0 : '16px',
              }}
            >
              <p className={styles.cardTitle}>{position.department}</p>
              <div
                className={styles.iconContainer}
                onClick={() => handleClick(index)}
              >
                {isSelected ? <Minus /> : <Plus />}
              </div>
            </div>
            <Collapse in={isSelected}>
              <div className={styles.collapseContainer}>
                <div className={styles.collapseDescription}>
                  {position.positions[0].description}
                </div>
                <div className={styles.skillList}>
                  {position.positions[0].skills.map((skill) => {
                    return (
                      <div className={styles.skillListItem} key={skill.title}>
                        <div className={styles.skillListItemContent}>
                          <Check />
                          <p className={styles.skillListItemTitle}>
                            {skill.title}
                          </p>
                        </div>
                        <p className={styles.skillListItemDescription}>
                          {skill.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Collapse>
            {index !== positionsList.length - 1 && (
              <Divider className={styles.divider} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default PositionsMobile
