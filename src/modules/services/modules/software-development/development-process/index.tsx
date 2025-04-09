import Image from 'next/image'
import { Stack } from '@mui/material'
import Title from '@/shared/title'
import { DevelopmentProcessImage } from '../assets/index'
import "./style.scss"

const DevelopmentProcess = () => {
  return (
    <Stack className='development-process' gap={10} alignItems={'center'}>
      <Title text={'Our Development Process'} />
      <div className='development-process-image-container'>
      <Image src={DevelopmentProcessImage} alt="" />
      </div>
    </Stack>
  )
}

export default DevelopmentProcess
