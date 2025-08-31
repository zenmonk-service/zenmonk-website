import { useMediaQuery } from '@mui/material'
import StatisticsDesktop from './desktop/desktop'
import StatisticsMobile from './mobile/mobile'

const Statistics = () => {
  const isMobile = useMediaQuery(`(max-width:600px)`)
  return isMobile ? <StatisticsMobile /> : <StatisticsDesktop />
}

export default Statistics
