import { useMediaQuery } from '@mui/material'
import ClientSatisfactionDesktop from './desktop'
import ClientSatisfactionMobile from './mobile'

const ClientSatisfaction = () => {
  const isMobile = useMediaQuery('(max-width:1000px)')
  return isMobile ? <ClientSatisfactionMobile /> : <ClientSatisfactionDesktop />
}

export default ClientSatisfaction
