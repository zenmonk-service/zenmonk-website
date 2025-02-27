import Title from "@/components/shared/title";
import { Box, Typography } from "@mui/material";
import InfiniteSlider from "@/components/shared/infinite-slider";
import "./styles.scss";

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <Title text="Our Clients" className="section-title" />
      <Typography component="p" className="section-description">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Typography>

      <InfiniteSlider originFrom="left"  sliderProps={{ className: "infinite-slider",gap: 30 }} imageProps={{ size: 200 }}/>
      <InfiniteSlider originFrom="right" sliderProps={{ className: "infinite-slider",gap: 30 }} imageProps={{ size: 200 }}/>
    </Box>
  );
};
