import Image from 'next/image'
import Box from '@mui/material/Box'
import './styles.scss'

interface SliderData {
  label: string
  src: string
}
interface AutoScrollCarouselProps {
  data: SliderData[]
  reverse?: true
  sliderProps?: {
    className?: string
  }
  imageProps?: {
    size?: number
  }
}

const AutoScrollCarousel = (props: AutoScrollCarouselProps) => {
  const { data, imageProps, reverse, sliderProps } = props
  const carouselItems = [...data, ...data]
  return (
    <Box className={`slider ${sliderProps?.className}`}>
      <Box className={`slide-track ${reverse ? 'reverse' : null}`}>
        {carouselItems.map(({ label, src },index) => (
          <Box className="slide" key={label + index}>
            <Image
              src={src}
              width={imageProps?.size ?? 150}
              alt={label}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default AutoScrollCarousel
