'use client'
import { Box } from '@mui/material'
import "./styles.scss"

const SectionWrapper = ({ children }: ChildrenProps) => {
    return (
        <Box className="section-wrapper">
            {children}
        </Box>
    )
}

export default SectionWrapper
