import React, { useState, useEffect, useRef } from 'react'
import { Collapse, Divider, Skeleton } from '@mui/material'
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

const normalizeDeptName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

const formatDeptDisplayName = (name: string) => {
  if (!name) return ''
  let formatted = name.replace(/_/g, ' ').trim()
  if (/^ui[\s\-_/]*ux/i.test(formatted)) {
    return formatted.replace(/^ui[\s\-_/]*ux[\s\-_]*(designer)?/i, (_match, d) => (d ? 'UI/UX Designer' : 'UI/UX'))
  }
  if (/\bqa\b/i.test(formatted)) {
    formatted = formatted.replace(/\bqa\b/gi, 'QA').replace(/\bengineer\b/gi, 'Engineer')
  }
  return formatted.replace(/\b([a-z])/g, (match) => match.toUpperCase())
}

const PositionsMobile = ({ positionsList, onApply, isLoading }: PositionsMobileProps) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>(() => {
    const mgmtIdx = positionsList.findIndex(
      (dept) => normalizeDeptName(dept.department) === 'management'
    )
    return mgmtIdx !== -1 ? [mgmtIdx] : [0]
  })
  const hasUserToggledRef = useRef(false)

  useEffect(() => {
    if (!hasUserToggledRef.current && positionsList.length > 0) {
      const mgmtIdx = positionsList.findIndex(
        (dept) => normalizeDeptName(dept.department) === 'management'
      )
      if (mgmtIdx !== -1) {
        setSelectedIndexes([mgmtIdx])
      }
    }
  }, [positionsList])

  const handleClick = (index: number) => {
    hasUserToggledRef.current = true
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes((prev) => prev.filter((val) => val !== index))
    } else {
      setSelectedIndexes((prev) => [...prev, index])
    }
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={styles.card}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
              }}
            >
              <Skeleton variant="rectangular" width={i % 2 === 0 ? '50%' : '65%'} height={24} sx={{ borderRadius: '6px' }} />
              <Skeleton variant="circular" width={36} height={36} sx={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>
      ) : (
        positionsList.map((dept, deptIndex) => {
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
                <p className={styles.cardTitle}>{formatDeptDisplayName(dept.department)}</p>
                <div className={styles.iconContainer}>
                  {isSelected ? <Minus /> : <Plus />}
                </div>
              </div>
              <Collapse in={isSelected}>
                <div className={styles.collapseContainer}>
                  {dept.positions && dept.positions.length > 0 ? (
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
                          {role.skills.map((skill) => (
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
                          ))}
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
        })
      )}
    </div>
  )
}

export default PositionsMobile
