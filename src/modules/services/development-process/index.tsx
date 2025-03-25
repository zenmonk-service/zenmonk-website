import Image from 'next/image'
import { Stack } from '@mui/material'
import Title from '@/shared/title'
import { DevelopmentProcess as DevelopmentProcessImage } from '../assets/index'

const DevelopmentProcess = () => {
  return (
    <Stack gap={10} alignItems={'center'}>
      <Title text={'Our Development Process'} />
      <Image src={DevelopmentProcessImage} alt="" />
    </Stack>
  )
}

export default DevelopmentProcess
