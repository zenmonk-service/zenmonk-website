'use client'

import { useState } from 'react'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { Department } from '../../../types'
import Check from '../assets/desktopCheck.svg'
import { positionsList } from '../positions'
import './styles.scss'
import BaseButton from '@/shared/button'

interface SkillsCardProps {
  title: string
  description: string
}

const SkillsCard = ({ title, description }: SkillsCardProps) => (
  <Box className="skills-container">
    <Stack direction="row" alignItems="center" gap={'0.520vw'}>
      <Check />
      <Typography className="skills-title" component="h3">
        {title}
      </Typography>
    </Stack>
    <Typography className="skills-description" component="p">
      {description}
    </Typography>
  </Box>
)

const PositionsDesktop = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>(
    positionsList.find((dept) => dept.positions.some((pos) => pos.isOpening)) ??
      positionsList[0]
  )

  const hasOpenPosition = selectedDepartment?.positions.some(
    (pos) => pos.isOpening
  )

  const handleSelectPosition = (department: Department) =>
    setSelectedDepartment(department)

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
              <Stack direction="row" alignItems="flex-start" gap={'1.042vw'}>
                <Box>
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
                </Box>
                <BaseButton className='apply-btn' >Apply Now</BaseButton>
              </Stack>
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

export default PositionsDesktop
