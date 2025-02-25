import Title from "@/components/shared/title";
import { Box, Typography } from "@mui/material";
import "./styles.scss";
import { standOutList } from "./stand-out";
import StandOutCard from "../../card/stand-out-card";
import Image from "next/image";

const StandOutSection = () => {
  return (
    <Box className="stand-out-section">
      <Title text="Stand Out From The Rest" align="center" />
      <Box className="stand-out-card-container">
        <Box className="left-section">
          {standOutList
            .slice(0, standOutList.length - 1)
            .map((standOut, index) => (
              <StandOutCard
                key={index}
                icon={standOut.icon}
                title={standOut.title}
              />
            ))}
        </Box>
        <Box className="right-section">
          <Image
            src={standOutList[standOutList.length - 1].icon}
            alt="stand-out"
            width={78}
            height={100}
          />
          <Typography variant="h4" className="title">
            {standOutList[standOutList.length - 1].title}
          </Typography>
          <Typography variant="body1" className="description">
            {standOutList[standOutList.length - 1].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StandOutSection;
