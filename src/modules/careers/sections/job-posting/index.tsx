'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery, Box } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PositionsDesktop from './positions/desktop'
import PositionsMobile from './positions/mobile'
import ApplicationModal from './application-modal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchJobs } from '@/store/features/jobs/jobs-actions'
import { positionsList } from './positions/positions'
import './styles.scss'

const OpenPosition = () => {
  const pxToVw = (px: number) => `${(px / 1920) * 100}vw`
  const isMobile = useMediaQuery('(max-width:1000px)')
  const dispatch = useAppDispatch()
  const { departments, loading: isLoading } = useAppSelector((state) => state.jobs)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<{ id: string, title: string } | null>(null)

  const handleApplyClick = (id: string, title: string) => {
    setSelectedJob({ id, title })
    setIsModalOpen(true)
  }

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  const displayList = departments.length > 0 ? departments : positionsList

  return (
    <section className="open-position-container">
      <Box
        className="open-position-header"
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <SectionTitle
          className="open-position-title"
          text={"Explore Open Positions and Join\nOur Team"}
          markText="Our Team"
        />
        <SectionDescription
          className="description"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

      </Box>
      <Box className="position-container">
        {isMobile ? (
          <PositionsMobile
            positionsList={displayList}
            onApply={handleApplyClick}
            isLoading={isLoading}
          />
        ) : (
          <PositionsDesktop
            positionsList={displayList}
            onApply={handleApplyClick}
            isLoading={isLoading}
          />
        )}
      </Box>

      {selectedJob && (
        <ApplicationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobTitle={selectedJob.title}
          jobId={selectedJob.id}
        />
      )}
    </section>
  )
}

export default OpenPosition
