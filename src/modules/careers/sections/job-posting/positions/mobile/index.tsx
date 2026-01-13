import React, { useState } from 'react'
import { Collapse, Divider, Box } from '@mui/material'
import Check from '../assets/check.svg'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import { Department, Position } from '../../../types'
import BaseButton from '@/shared/button'
import styles from './mobile.module.scss'

interface PositionsMobileProps {
  positionsList: Department[]
  onApply: (id: string, title: string) => void
}

const PositionsMobile = ({ positionsList, onApply }: PositionsMobileProps) => {
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
      {positionsList.map((dept, deptIndex) => {
        const isSelected = selectedIndexes.includes(deptIndex)
        return (
          <div className={styles.card} key={dept.id}>
            <div
              className={styles.content}
              onClick={() => handleClick(deptIndex)}
              style={{
                paddingBottom: deptIndex === positionsList.length - 1 && !isSelected ? 0 : '16px',
                cursor: 'pointer'
              }}
            >
              <p className={styles.cardTitle}>{dept.department}</p>
              <div className={styles.iconContainer}>
                {isSelected ? <Minus /> : <Plus />}
              </div>
            </div>
            <Collapse in={isSelected}>
              <div className={styles.collapseContainer}>
                {dept.positions.map((role: Position) => (
                  <div key={role.id} className={styles.roleContainer}>
                    <h3 className={styles.roleTitle}>{role.heading}</h3>
                    <div className={styles.collapseDescription}>
                      {role.description}
                    </div>
                    <div className={styles.skillList}>
                      {role.skills.map((skill) => {
                        return (
                          <div className={styles.skillListItem} key={skill.title}>
                            <div className={styles.skillListItemContent}>
                              <Check className="check-icon" />
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
                    <div className={styles.actionFooter}>
                      <BaseButton
                        className={styles.applyBtn}
                        onClick={() => onApply(role.id, role.heading)}
                      >
                        APPLY
                      </BaseButton>
                    </div>
                    <div className={styles.roleSeparator} />
                  </div>
                ))}
              </div>
            </Collapse>
            {deptIndex !== positionsList.length - 1 && (
              <Divider className={styles.divider} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default PositionsMobile
