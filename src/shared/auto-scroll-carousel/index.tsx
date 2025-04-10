import Image from 'next/image'
import Box from '@mui/material/Box'
import './styles.scss'

interface SliderData {
  label: string
  Src: any
  background?: string
}

interface AutoScrollCarouselProps {
  data: SliderData[]
  isBgShadow?: boolean
  reverse?: boolean
  sliderProps?: {
    className?: string
  }
  imageProps?: {
    size?: {
      height?: number
      width?: number
    }
  }
}

const AutoScrollCarousel = (props: AutoScrollCarouselProps) => {
  const { data, imageProps, reverse, sliderProps, isBgShadow = false } = props
  const carouselItems = [...data, ...data]

  return (
    <Box className={`slider ${sliderProps?.className}`}>
      <Box className={`slide-track ${reverse ? 'reverse' : ''}`}>
        {carouselItems.map(({ label, Src, background }, index) => (
          <Box
            className="slide"
            key={label + index}
            sx={{ background: isBgShadow ? background : null }}
          >
            <Src/>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default AutoScrollCarousel
