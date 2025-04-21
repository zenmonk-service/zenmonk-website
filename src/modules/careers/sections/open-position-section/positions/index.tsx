'use client'

import { useState } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { Department } from '../../types'
import { positionsList } from './positions-list'
import './styles.scss'

interface SkillsCardProps {
  title: string
  description: string
}

const SkillsCard = ({ title, description }: SkillsCardProps) => (
  <Box className="skills-container">
    <Typography className="skills-title" component="h3">
      ✅&nbsp;{title}
    </Typography>
    <Typography className="skills-description" component="p">
      {description}
    </Typography>
  </Box>
)

const Positions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>(
    positionsList.find(dept => dept.positions.some(pos => pos.isOpening)) ?? positionsList[0]
  )

  const hasOpenPosition = selectedDepartment?.positions.some(pos => pos.isOpening)

  const handleSelectPosition = (department: Department) => setSelectedDepartment(department)

  return (
    <Box className="positions">
      <Box className="left-section">
        {positionsList.map((department, index) => {
          const isSelected = selectedDepartment?.id === department.id
          return (
            <Typography
              key={index}
              className={`position ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectPosition(department)}
              sx={{
                color: 'GrayText',
                '&:hover': { color: 'var(--global-color-secondary)' },
              }}
            >
              {department.department}
            </Typography>
          )
        })}
      </Box>

      <Box className="right-section">
        {hasOpenPosition ? (
          selectedDepartment.positions.map((role, index) => (
            <Box key={index}>
              <Typography component="h1" className="department-title">
                {role.heading}
                <Chip
                  className="chip-label"
                  label={role.isOpening ? 'open' : 'closed'}
                  color={role.isOpening ? 'success' : 'error'}
                  variant="outlined"
                />
              </Typography>
              <Typography component="p" className="department-description">
                {role.description}
              </Typography>
              <Box className="skills-set-wrapper">
                {role.skills.map((skill, skillIndex) => (
                  <SkillsCard
                    key={skillIndex}
                    title={skill.title}
                    description={skill.description}
                  />
                ))}
              </Box>
            </Box>
          ))
        ) : (
          <>
            <Box>
              <Typography component="h1" className="department-title">
                No Open Positions
              </Typography>
              <Typography component="p" className="department-description">
                Currently, there are no available positions in this department.
                Please check back later for updates.
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default Positions
