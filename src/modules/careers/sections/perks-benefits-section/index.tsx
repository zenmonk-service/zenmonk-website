import Title from "@/shared/title";
import Image, { StaticImageData } from "next/image";
import { Box, Container, Typography } from "@mui/material";
import "./styles.scss";
import { perkBenefitsList } from "./perks-benefits-list";

interface PerksCardProps {
  borderColor: string;
  bgColor: string;
  title: string;
  image: StaticImageData;
}

const PerkBenefits = () => {
  return (
    <Box className="perk-benefits-section">
      <Container maxWidth="xl" className="container">
        <Title text="Perks & Benefits" className="perk-title" />
        <Typography component="p" className="description">
          Remote does not mean "distant". At Capital Numbers, you get a
          competitive benefits package and be part of an award-winning team.
          Plus, by working remotely, you save more and enjoy a work /life
          balance.
        </Typography>
        <Box className="perks-benefits-list">
          {perkBenefitsList.map((item, index) => (
            <PerksCard
              borderColor={item.borderColor}
              bgColor={item.color}
              key={index}
              title={item.title}
              image={item.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const PerksCard = ({ title, image, bgColor, borderColor }: PerksCardProps) => {
  return (
    <Box sx={{ border: `1px solid ${borderColor}` }} className="perk-card">
      <Box sx={{ bgcolor: bgColor }} className="perk-card-image">
        <Image src={image} alt={`${title}-image`} />
      </Box>
      <Typography component="p" className="perk-card-title">
        {title}
      </Typography>
    </Box>
  );
};
export default PerkBenefits;
