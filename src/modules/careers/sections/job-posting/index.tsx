'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery, Box, CircularProgress, Skeleton } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PositionsDesktop from './positions/desktop'
import PositionsMobile from './positions/mobile'
import ApplicationModal from './application-modal'
import { Department, Position } from '../types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchJobs } from '@/store/features/jobs/jobs-actions'
import './styles.scss'

const OpenPosition = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
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
          text="Explore Open Positions and Join Our Team"
          markText="Our Team"
        />
        <SectionDescription
          className="description"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

      </Box>
      <Box className="position-container">
        {isLoading ? (
          <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
            {/* Sidebar Skeleton */}
            {!isMobile && (
              <Box sx={{ width: '19.79vw', bgcolor: '#F5F5F5', p: 4, borderRadius: '1.04vw 0 0 1.04vw' }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} variant="text" sx={{ fontSize: '1.5rem', mb: 2, width: '80%' }} />
                ))}
              </Box>
            )}

            {/* Content Area Skeleton */}
            <Box sx={{ flex: 1, p: 4, bgcolor: '#fff', borderRadius: isMobile ? '12px' : '0 1.04vw 1.04vw 0' }}>
              <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 3 }} />
              <Skeleton variant="rectangular" width="100%" height={100} sx={{ mb: 4 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 3 }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} variant="rectangular" width="100%" height={120} sx={{ borderRadius: 2 }} />
                ))}
              </Box>
            </Box>
          </Box>
        ) : departments.length > 0 ? (
          isMobile ? (
            <PositionsMobile
              positionsList={departments}
              onApply={handleApplyClick}
            />
          ) : (
            <PositionsDesktop
              positionsList={departments}
              onApply={handleApplyClick}
            />
          )
        ) : (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <SectionDescription text="No open positions currently available. Please check back later." />
          </Box>
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
