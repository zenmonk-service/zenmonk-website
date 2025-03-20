import { Box } from "@mui/material";
import Image from "next/image";
import { Process as ProcessImg } from "@/modules/how-we-work/assets";

import "./styles.scss";

const Process = () => {
  return (
    <Box className="process-hero-section-wrapper">
      <Image src={ProcessImg} alt="process-diagram" />
    </Box>
  );
};

export { Process };
