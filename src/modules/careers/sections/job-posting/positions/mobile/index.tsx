import React, { useState } from 'react'
import { Collapse, Divider, Box, Skeleton } from '@mui/material'
import Check from '../assets/check.svg'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import { Department, Position } from '../../../types'
import BaseButton from '@/shared/button'
import styles from './mobile.module.scss'

interface PositionsMobileProps {
  positionsList: Department[]
  onApply: (id: string, title: string) => void
  isLoading?: boolean
}

const PositionsMobile = ({ positionsList, onApply, isLoading }: PositionsMobileProps) => {
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
                {isLoading ? (
                  <div className={styles.roleContainer}>
                    <div className={styles.roleHeader} style={{ marginBottom: '12px' }}>
                      <Skeleton variant="rectangular" width="60%" height={24} sx={{ borderRadius: '4px' }} />
                    </div>
                    <div className={styles.collapseDescription} style={{ marginBottom: '16px' }}>
                      <Skeleton variant="rectangular" width="100%" height={60} sx={{ borderRadius: '4px' }} />
                    </div>
                    <div className={styles.skillList} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                      {[1, 2].map((i) => (
                        <div className={styles.skillListItem} key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Skeleton variant="circular" width="16px" height="16px" style={{ flexShrink: 0 }} />
                            <Skeleton variant="rectangular" width="40%" height={16} sx={{ borderRadius: '4px' }} />
                          </div>
                          <Skeleton variant="rectangular" width="90%" height={32} sx={{ marginLeft: '24px', borderRadius: '4px' }} />
                        </div>
                      ))}
                    </div>
                    <div className={styles.actionFooter}>
                      <Skeleton variant="rectangular" width="100px" height={36} sx={{ borderRadius: '8px' }} />
                    </div>
                  </div>
                ) : dept.positions.length > 0 ? (
                  dept.positions.map((role: Position, roleIndex: number) => (
                    <div key={role.id} className={styles.roleContainer}>
                      <div className={styles.roleHeader}>
                        <h3 className={styles.roleTitle}>
                          {role.heading}
                          <span className={`${styles.statusBadge} ${role.isOpening ? styles.open : styles.closed}`}>
                            {role.isOpening ? 'Open' : 'Closed'}
                          </span>
                        </h3>
                      </div>
                      <div className={styles.collapseDescription}>
                        {role.description}
                      </div>
                      <div className={styles.skillList}>
                        {role.skills.map((skill) => {
                          return (
                            <div className={styles.skillListItem} key={skill.title}>
                              <div className={styles.skillListItemContent}>
                                <Check className={styles.checkIcon} viewBox="0 0 14 14" />
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
                          Apply Now
                        </BaseButton>
                      </div>
                      {roleIndex !== dept.positions.length - 1 && (
                        <div className={styles.roleSeparator} />
                      )}
                    </div>
                  ))
                ) : (
                  <div className={styles.noPositions}>
                    <h3 className={styles.noPositionsTitle}>No Open Positions</h3>
                    <p className={styles.noPositionsText}>
                      Currently, there are no available positions in this department. Please check back later.
                    </p>
                  </div>
                )}
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
