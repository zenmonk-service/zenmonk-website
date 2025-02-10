import { Box } from '@mui/material'
import Image from 'next/image'
import CollaborationLogo from '@/assets/icons/collaboration'
import "./styles.scss"

const Collaboration = () => {
    return (
        <Box className="collaboration-wrapper">
            {CollaborationLogo.map((logo) => (
                <Image key={logo.name} src={logo.src} alt={logo.name} width={177} height={80} />
            ))}
        </Box>
    )
}

export default Collaboration
