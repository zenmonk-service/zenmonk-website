import { useMediaQuery } from '@mui/material'
import ClientSatisfactionDesktop from './desktop'
import ClientSatisfactionMobile from './mobile'

const ClientSatisfaction = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return isMobile ? <ClientSatisfactionMobile /> : <ClientSatisfactionDesktop />
}

export default ClientSatisfaction
