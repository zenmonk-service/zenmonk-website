import { Box, Typography } from '@mui/material'
import "./styles.scss"

const TagLine = () => {
    return (
        <Box className="tagline-wrapper">
            <Typography className="text">
                Fueling client success that&nbsp;
                <Typography component="span" variant='inherit'>adapts</Typography>,
                <Typography component="span" variant='inherit'>&nbsp;evolves</Typography>, and&nbsp;
                <Typography component="span" variant='inherit'>excels</Typography>.
            </Typography>
        </Box>
    )
}

export default TagLine
