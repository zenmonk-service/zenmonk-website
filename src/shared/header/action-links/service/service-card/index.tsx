import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Stack, Typography } from '@mui/material'
import LoadingIndicator from '@/shared/loader/detector'
import './styles.scss'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: StaticImageData
  route: string
  isAlreadyOpen: boolean
  closeMenu: () => void
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  route,
  isAlreadyOpen,
  closeMenu,
}: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <Link
        href={`/services/${route}`}
        className={`service-card  ${isAlreadyOpen ? 'selected' : ''}`}
        prefetch={false}
        // onNavigate={() => closeMenu()}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <LoadingIndicator />
        <Image
          src={imageUrl}
          style={{
            width: '1.66vw',
            height: '1.66vw',
          }}
          alt={`${title}-image`}
        />
        <Box className="service-card-content">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
          <Typography variant="body2" className="description">
            {description}
          </Typography>
          {isVisible || isAlreadyOpen ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className="link-button"
              color="inherit"
            >
              Explore &nbsp;
              <ArrowRightAltIcon
                style={{
                  fontSize: '0.9375vw',
                }}
              />
            </Stack>
          ) : (
            <div className="hidden" />
          )}
        </Box>
      </Link>
    </>
  )
}

export default ServiceCard
