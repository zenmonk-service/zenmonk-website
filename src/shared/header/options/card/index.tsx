import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Button, Typography } from '@mui/material'
import './styles.scss'

interface OptionCardProps {
  title: string
  description: string
  imageUrl: StaticImageData
  route: string
  isAlreadyOpen: boolean
}

const OptionCard = ({
  title,
  description,
  imageUrl,
  route,
  isAlreadyOpen,
}: OptionCardProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Box
        className={`option-card  ${isAlreadyOpen ? 'selected' : ''}`}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Image
          src={imageUrl}
          style={{
            width: '1.66vw',
            height: '1.66vw',
          }}
          alt={`${title}-image`}
        />
        <Box className="option-card-content">
          <Typography variant="h6" className="title">
            {title}
          </Typography>
          <Typography variant="body2" className="description">
            {description}
          </Typography>
          {(isVisible || isAlreadyOpen) && (
            <Button className="link-button" color="inherit" disableRipple>
              Explore &nbsp;
              <ArrowRightAltIcon
                style={{
                  fontSize: '0.9375vw',
                }}
              />
            </Button>
          )}
        </Box>
      </Box>
    </>
  )
}

export default OptionCard
