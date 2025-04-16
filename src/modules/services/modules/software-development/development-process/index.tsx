import Image from 'next/image'
import { Stack } from '@mui/material'
import { DevelopmentProcessImage } from '../assets/index'
import "./style.scss"
import { SectionTitle } from '@/shared/typography'

const DevelopmentProcess = () => {
  return (
    <Stack className='development-process' gap={10} alignItems={'center'}>
      <SectionTitle text={'Our Development Process'} markText='Process' />
      <div className='development-process-image-container'>
      <Image src={DevelopmentProcessImage} alt="" />
      </div>
    </Stack>
  )
}

export default DevelopmentProcess
