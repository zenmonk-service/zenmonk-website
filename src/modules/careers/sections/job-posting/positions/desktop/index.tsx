import React, { useState, useEffect } from 'react'
import { Box, Skeleton } from '@mui/material'
import { Department, Position } from '../../../types'
import Check from '../assets/desktopCheck.svg'
import BaseButton from '@/shared/button'
import './styles.scss'

interface SkillsCardProps {
  title: string
  description: string
}

const SkillsCard = ({ title, description }: SkillsCardProps) => (
  <Box className="skills-container">
    <Box className="skills-header">
      <Check className="check-icon" />
      <Box component="span" className="skills-title">
        {title}
      </Box>
    </Box>
    <Box component="p" className="skills-description">
      {description}
    </Box>
  </Box>
)

interface PositionsDesktopProps {
  positionsList: Department[]
  onApply: (id: string, title: string) => void
  isLoading?: boolean
}

const normalizeDeptName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

const PositionsDesktop = ({ positionsList, onApply, isLoading }: PositionsDesktopProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>(
    positionsList.find((dept) => dept.positions.some((pos) => pos.isOpening)) ||
    positionsList[0]
  )

  useEffect(() => {
    if (selectedDepartment) {
      const targetNorm = normalizeDeptName(selectedDepartment.department)
      const updated = positionsList.find((dept) => normalizeDeptName(dept.department) === targetNorm) || positionsList[0]
      setSelectedDepartment(updated)
    } else {
      setSelectedDepartment(positionsList[0])
    }
  }, [positionsList])

  const handleSelectPosition = (department: Department) =>
    setSelectedDepartment(department)

  return (
    <Box component="div" className="positions">
      <Box component="div" className="left-section">
        {positionsList.map((department, index) => {
          const isSelected = selectedDepartment?.id === department.id
          return (
            <Box
              component="div"
              key={index}
              className={`position ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectPosition(department)}
            >
              {department.department}
            </Box>
          )
        })}
      </Box>

      <Box component="div" className="right-section">
        {isLoading ? (
          <Box component="div" className="roles-list">
            <Box component="div" className="role-content">
              <Box component="div" className="role-header">
                <Box component="div" className="title-container">
                  <Skeleton variant="rectangular" width="50%" height="2vw" sx={{ minHeight: '30px', borderRadius: '4px' }} />
                </Box>
                <Skeleton variant="rectangular" width="126px" height="43px" sx={{ borderRadius: '12px', flexShrink: 0 }} />
              </Box>
              <Box component="div" className="role-descriptions">
                <Skeleton variant="rectangular" width="100%" height="4vw" sx={{ minHeight: '60px', borderRadius: '4px' }} />
              </Box>
              <Box component="div" className="skills-grid" sx={{ marginTop: '16px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <Box key={i} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Skeleton variant="circular" width="24px" height="24px" sx={{ flexShrink: 0 }} />
                      <Skeleton variant="rectangular" width="60%" height="20px" sx={{ borderRadius: '4px' }} />
                    </Box>
                    <Skeleton variant="rectangular" width="90%" height="40px" sx={{ ml: '32px', borderRadius: '4px' }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ) : selectedDepartment?.positions?.length > 0 ? (
          <Box component="div" className="roles-list">
            {selectedDepartment.positions.map((role: Position, roleIndex: number) => (
              <Box component="div" key={role.id} className="role-content">
                <Box component="div" className="role-header">
                  <Box component="div" className="title-container">
                    <Box component="h2" className="role-title">
                      {role.heading}
                      <Box component="span" className={`status-badge ${role.isOpening ? 'open' : 'closed'}`}>
                        {role.isOpening ? 'Open' : 'Closed'}
                      </Box>
                    </Box>
                  </Box>
                  <BaseButton
                    className="apply-btn"
                    onClick={() => onApply(role.id, role.heading)}
                  >
                    Apply Now
                  </BaseButton>
                </Box>
                <Box component="div" className="role-descriptions">
                  <Box component="p" className="role-description">
                    {role.description}
                  </Box>
                </Box>

                <Box component="div" className="skills-grid">
                  {role.skills.map((skill, skillIndex) => (
                    <SkillsCard
                      key={skillIndex}
                      title={skill.title}
                      description={skill.description}
                    />
                  ))}
                </Box>

                {roleIndex !== selectedDepartment.positions.length - 1 && (
                  <Box component="div" className="role-separator" />
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Box component="div" className="no-positions">
            <Box component="h2" className="role-title">
              No Open Positions
            </Box>
            <Box component="p" className="role-description">
              Currently, there are no available positions in this department.
              Please check back later for updates.
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PositionsDesktop
