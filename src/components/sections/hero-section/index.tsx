import { Box, Button, Toolbar, Typography } from "@mui/material";
import { HeroTech } from "@/assets/images";
import Image from "next/image";
import BaseButton from "../../shared/button";
import "./styles.scss";

const HeroSection = () => {
  return (
    <Box className="hero-section-wrapper">
      <Toolbar />
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography
            variant="h4"
            sx={{ marginTop: "10px", color: "gray" }}
            className="text-heading"
          >
            Super Charge Your Business <br />
            Growth With
            <Typography variant="inherit" component="span">
              {" "}
              Efficient
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              {" "}
              Intelligent
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              {" "}
              Versatile
            </Typography>
            &nbsp;Software Inovations
          </Typography>
          <Typography component="p" className="text-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </Box>
        <BaseButton sx={{ width: "180px" }}>Explore More</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Image className="hero-section-image" src={HeroTech} alt="techs" />
      </Box>
    </Box>
  );
};

export { HeroSection };
