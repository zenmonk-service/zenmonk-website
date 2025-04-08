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

const Positions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<
    Department
  >(positionsList.find((dept) => dept.positions.some((pos) => pos.isOpening)) ?? positionsList[0])

  const hasOpenPosition = selectedDepartment?.positions.some(
    (position) => position.isOpening
  )

  const selectPosition = (department: Department) => {
    setSelectedDepartment(department)
  }

  return (
    <Box className="positions">
      <Box className="left-section">
        {positionsList.map((department, index) => {
          const isSelected = selectedDepartment?.id === department.id
          const aboveSelected = selectedDepartment.id - 1 === department.id;
          const belowSelected = selectedDepartment.id + 1 === department.id;
          return (
            <Typography
              className={`position ${isSelected ? 'selected' : ''} 
                          ${aboveSelected ? 'above-selected' : ''}
                          ${belowSelected ? 'below-selected' : ''}`}
              key={index}
              onClick={() => selectPosition(department)}
              sx={{
                color: 'GrayText',
                '&:hover': {
                  color: 'var(--global-color-secondary)',
                },
              }}
            >
              {department.department}
            </Typography>
          )
        })}
      </Box>

      <Box className="right-section">
        {hasOpenPosition ? (
          selectedDepartment?.positions.map((department, index) => {
            console.log(department.description)
            return (
              <Box key={index}>
                <Typography component="h1" className="department-title">
                  {department.heading}
                  <Chip
                    className="chip-label"
                    label={department.isOpening ? 'open' : 'closed'}
                    color={department.isOpening ? 'success' : 'error'}
                    variant="outlined"
                  />
                </Typography>
                <Typography component="p" className="department-description">
                  {department.description}
                </Typography>
                <Box className="skills-set-wrapper">
                  {department.skills.map((skill, index) => (
                    <SkillsCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                    />
                  ))}
                </Box>
              </Box>
            )
          })
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

const SkillsCard = ({ title, description }: SkillsCardProps) => {
  return (
    <Box className="skills-container">
      <Typography className="skills-title" component="h3">
        ✅&nbsp;{title}
      </Typography>
      <Typography className="skills-description" component="p">
        {description}
      </Typography>
    </Box>
  )
}

export default Positions
