import useMediaQuery from '@mui/material/useMediaQuery'
import ClientSatisfactionDesktop from './desktop/desktop'
import ClientSatisfactionMobile from '../client-satisfaction/mobile'

const ClientSatisfaction = () => {
  const isMobile = useMediaQuery(`(max-width:600px)`)
  return isMobile ? <ClientSatisfactionMobile /> : <ClientSatisfactionDesktop />
}

export default ClientSatisfaction
