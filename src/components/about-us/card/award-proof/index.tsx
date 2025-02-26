import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.scss"

interface AwardProofCardProps {
    title: string;
    description: string;
    image: string;
}

const AwardProofCard = ({ image, title, description }: AwardProofCardProps) => {
    return (
        <Box className="award-proof-card">
            <Image src={image} width={113} height={174} alt={`${title}-icon`} />
            <Typography className="title" component='h3'>{title}</Typography>
            <Typography className="description" component='p'>{description}</Typography>
        </Box>
    )
}

export default AwardProofCard
