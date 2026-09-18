'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMediaQuery, Box, Button } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PositionsDesktop from './positions/desktop'
import PositionsMobile from './positions/mobile'
import ApplicationModal from './application-modal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchJobs } from '@/store/features/jobs/jobs-actions'
import { toggleLoader } from '@/store/features/header/header-slice'
import { resetSubmitSuccess } from '@/store/features/applications/applications-slice'
import { positionsList } from './positions/positions'
import './styles.scss'

const OpenPosition = () => {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:1000px)')
  const dispatch = useAppDispatch()
  const { departments, loading: isLoading } = useAppSelector((state) => state.jobs)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<{ id: string, title: string } | null>(null)

  const handleApplyClick = (id: string, title: string) => {
    dispatch(resetSubmitSuccess())
    setSelectedJob({ id, title })
    setIsModalOpen(true)
  }

  const handleTrackApplicationClick = () => {
    dispatch(toggleLoader(true))
    router.push('/track-application')
  }

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  const displayList = departments.length > 0 ? departments : positionsList

  return (
    <section className="open-position-container" id="open-positions">
      <Box className="open-position-header">
        <Box className="header-left">
          <SectionTitle
            className="open-position-title"
            text="Explore Open Positions and Join Our Team"
            markText="Our Team"
          />
          <SectionDescription
            className="description"
            text="Discover high-impact engineering, design, and management opportunities. Join our team and help shape cutting-edge digital experiences for global clients."
          />
        </Box>

        <Button
          onClick={handleTrackApplicationClick}
          className="track-application-btn"
        >
          Track Application
        </Button>
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
