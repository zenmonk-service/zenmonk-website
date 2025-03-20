import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import "./styles.scss"


interface WhyChooseUsCardProps {
    title: string,
    description: string,
    icon: string
}
const WhyChooseUsCard = ({ title, description, icon }: WhyChooseUsCardProps) => {
    return (
        <Box className="why-choose-us-card">
            <Image src={icon} width={72} height={62} alt={`${title}-icon`} />
            <Box className="content">
                <Typography component="h3" className="title">{title}</Typography>
                <Typography component="p" className="description">{description}</Typography>
            </Box>
        </Box>
    )
}

export default WhyChooseUsCard
