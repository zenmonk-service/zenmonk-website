import { Box } from "@mui/material";
import Image from "next/image";
import { First, Quality as QualityImg, Second, Third } from "@/modules/how-we-work/assets";

import "./styles.scss";
import Title from "@/shared/title";

const Quality = () => {
  return (
    <Box className="quality-hero-section-wrapper">
      <div className="first-section">
        <Title align="left" text={"Our Promise of Quality Analysis"} />
        <p className="subheading">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. Lorem Ipsum has been the industry's standard.
        </p>

        <div className="images-container">
        <Image src={First} alt="process-diagram" />
        <Image src={Second} alt="process-diagram" />
        <Image src={Third} alt="process-diagram" />
        </div>
      </div>
      <div>
        <Image src={QualityImg} alt="process-diagram" />
      </div>
    </Box>
  );
};

export { Quality };
