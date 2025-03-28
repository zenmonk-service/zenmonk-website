import Image from 'next/image'
import "./styles.scss"
import { Box, Typography } from '@mui/material'
import COST_EFFECTIVE from './assets/cost_effective.svg'
import EXPERT_KNOWLEDGE from './assets/expert_knowledge.svg'
import ON_TIME from './assets/on_time.svg'
import PROVEN_SUCCESS from './assets/proven_sucess.svg'
import SUPPORT from './assets/support.svg'
import Title from '../../../shared/title'

const YourIdealChoice = () => {
  const ChoicesData = [
    {
      icon: PROVEN_SUCCESS,
      title: 'Proven Success',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Standard dummy text ever since the 1500s.",
    },
    {
      icon: EXPERT_KNOWLEDGE,
      title: 'Expert Knowledge',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Standard dummy text ever since the 1500s.",
    },
    {
      icon: ON_TIME,
      title: 'On-Time Delivery',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Standard dummy text ever since the 1500s.",
    },
    {
      icon: COST_EFFECTIVE,
      title: 'Cost-Effective & Scalable Solutions',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: SUPPORT,
      title: '24/7 Support',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Standard dummy text ever since the 1500s.",
    },
  ]

  return (
    <Box className="your-ideal-choice">
      <Box className="first-container">
        <Title align='left' className='title' text={'Why our Expertise'}></Title>
        <Typography className="title">
         Your Ideal Choice
        </Typography>
        <Typography className="description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Typography>
      </Box>

      {ChoicesData.map(({ icon, title, description }: any) => {
        return (
          <Box className="container">
            <Image src={icon} alt={title}></Image>
            <Typography className="title">{title}</Typography>
            <Typography className="description">{description}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default YourIdealChoice
