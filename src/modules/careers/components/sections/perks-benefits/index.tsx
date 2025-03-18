import Title from "@/shared/title";
import Image, { StaticImageData } from "next/image";
import { Box, Container, Typography } from "@mui/material";
import "./styles.scss";

interface PerksCardProps {
  title: string;
  image: StaticImageData;
}

const PerkBenefits = () => {
  return (
    <Box className="perk-benefits">
      <Container maxWidth="lg" className="container">
        <Title text="Perks & Benefits" className="perk-title" />
        <Typography component="p" className="description">
          Remote does not mean "distant". At Capital Numbers, you get a
          competitive benefits package and be part of an award-winning team.
          Plus, by working remotely, you save more and enjoy a work /life
          balance.
        </Typography>
        <Box className="perks-benefits-list"></Box>
      </Container>
    </Box>
  );
};

const PerksCard = ({ title, image }: PerksCardProps) => {
  return (
    <Box>
      <Image src={image} alt={`${title}-image`} />
      <Typography component="p"> {title}</Typography>
    </Box>
  );
};
export default PerkBenefits;
