import React, { useState } from 'react'
import { Box } from '@mui/material'
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
}

const PositionsDesktop = ({ positionsList, onApply }: PositionsDesktopProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>(
    positionsList.find((dept) => dept.positions.some((pos) => pos.isOpening)) ||
    positionsList[0]
  )

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
        {selectedDepartment?.positions?.length > 0 ? (
          <Box component="div" className="roles-list">
            {selectedDepartment.positions.map((role: Position) => (
              <Box component="div" key={role.id} className="role-content">
                <Box component="h2" className="role-title">
                  {role.heading}
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

                <Box component="div" className="action-footer">
                  <BaseButton
                    className="apply-btn"
                    onClick={() => onApply(role.id, role.heading)}
                  >
                    APPLY
                  </BaseButton>
                </Box>

                {selectedDepartment.positions.length > 1 && (
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
