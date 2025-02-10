import { Box, Button, Typography } from "@mui/material";
import { HeroTech } from "@/assets/images";
import Image from "next/image";
import BaseButton from "../shared/button";
import "./styles.scss"

const HeroSection = () => {
    return (
        <Box className="hero-section-wrapper">
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: "column",
                    gap: 5,
                    textAlign: { xs: "center", md: "left" },
                    padding: { xs: "10px", md: "20px" },
                }}
            >
                <Box className="hero-section-text-wrapper">
                    <Typography variant="h4" sx={{ marginTop: "10px", color: "gray" }} className="text-heading">
                        Super Charge Your Business Growth With&nbsp;
                        <Typography variant="inherit" component="span">Efficient</Typography>,
                        <Typography variant="inherit" component="span"> Intelligent</Typography>,
                        <Typography variant="inherit" component="span"> Versatile</Typography>
                        &nbsp;
                        Software Inovations
                    </Typography>
                    <Typography component='p' className="text-description">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <BaseButton sx={{ width: "180px" }}>Explore More</BaseButton>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    padding: { xs: "10px", md: "20px" },
                }}
            >
                <Image
                    src={HeroTech}
                    alt="techs"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
