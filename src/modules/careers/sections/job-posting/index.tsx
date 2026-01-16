'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery, Box, Skeleton } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PositionsDesktop from './positions/desktop'
import PositionsMobile from './positions/mobile'
import ApplicationModal from './application-modal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchJobs } from '@/store/features/jobs/jobs-actions'
import './styles.scss'

const OpenPosition = () => {
  const pxToVw = (px: number) => `${(px / 1920) * 100}vw`
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
          <Box sx={{ width: '100%', display: 'flex', gap: isMobile ? 2 : pxToVw(16) }}>
            {/* Sidebar Skeleton */}
            {!isMobile && (
              <Box sx={{ width: pxToVw(380), bgcolor: '#F5F5F5', p: pxToVw(32), borderRadius: pxToVw(20) + ' 0 0 ' + pxToVw(20) }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} variant="text" sx={{ fontSize: '1.5rem', mb: pxToVw(16), width: '80%', height: pxToVw(40) }} />
                ))}
              </Box>
            )}

            {/* Content Area Skeleton */}
            <Box sx={{
              flex: 1,
              p: isMobile ? '16px' : pxToVw(32),
              bgcolor: '#fff',
              borderRadius: isMobile ? '12px' : '0 ' + pxToVw(20) + ' ' + pxToVw(20) + ' 0'
            }}>
              <Skeleton variant="rectangular" width="40%" height={isMobile ? 32 : pxToVw(40)} sx={{ mb: pxToVw(24) }} />
              <Skeleton variant="rectangular" width="100%" height={isMobile ? 80 : pxToVw(100)} sx={{ mb: pxToVw(32) }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '16px' : pxToVw(24) }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} variant="rectangular" width="100%" height={isMobile ? 100 : pxToVw(120)} sx={{ borderRadius: isMobile ? '8px' : pxToVw(8) }} />
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
          <Box sx={{ textAlign: 'center', py: isMobile ? '40px' : pxToVw(40) }}>
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
