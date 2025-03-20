import Title from "@/shared/title";
import { Box, Container, Typography } from "@mui/material";
import "./styles.scss";
import Image from "next/image";
import { bgImage } from "./assets";
import { traditionsCustoms } from "./tradition-customs";
import TraditionCustomCard from "./card/tradition-card";

const TraditionsCustoms = () => {
  return (
    <Box className="traditions-customs-section">
      <Image src={bgImage} alt="bg" className="bg-image" />
      <Container maxWidth="xl" className="container">
        <Box className="traditions-customs-title-description-wrapper">
          <Typography component="h1" className="traditions-customs-title">
            Experiencing Traditions and Customs
          </Typography>
          <Typography className="traditions-customs-description" component="p">
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
            has been the industry's standardever
          </Typography>
        </Box>
        <Box className="traditions-customs-list">
          {traditionsCustoms.map((tradition, index) => {
            return (
              <TraditionCustomCard
                key={index}
                image={tradition.image}
                title={tradition.title}
                description={tradition.description}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TraditionsCustoms;
