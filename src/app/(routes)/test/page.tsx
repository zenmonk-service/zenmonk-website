import { Box } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'

const page = () => {
  return (
    <Box mt={50}>
      <SectionTitle
        text="Super Charge Your Business Growth With Efficient, Intelligent, Versatile Software Inovations"
        markText="Versatile"
        markTextProps={{
          rotate: 2,
          className: 'marker-className',
        }}
      />
      <SectionDescription text="normal" />
      <SectionDescription text="description 1 --sm" className="description-sm" />
      <SectionDescription text="description 2 --md" className="description-md" />
      <SectionDescription text="description 3--lg" className="description-lg" />
      <SectionDescription text="description 4 --xl" className="description-xl" />
      <SectionDescription text="description 13 --xs" className="description-xs" />

    </Box>
  )
}

export default page
