import { Review as ReviewImg } from "@/modules/how-we-work/assets";
import Image from "next/image";
import "./styles.scss";
import Title from "@/shared/title";
import { Box } from "@mui/material";

const Review = () => {
  return (
    <Box className="review-hero-section-wrapper">
      <Title text={"Execution Testing Review and Finalization"} />
      <p className="subheading">
      State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier. state burst think end are its.
      </p>
      <div className="images-container">
        <Image src={ReviewImg} alt="process-diagram" />
      </div>
    </Box>
  );
};

export { Review };
