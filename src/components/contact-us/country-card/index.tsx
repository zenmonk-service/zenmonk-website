import { Box } from "@mui/material";
import "./styles.scss";
import Image from "next/image";
import { Country } from "@/assets/icons/contact-us";

interface CountryCardProps {
  country: Country;
  setSelectedCountry: (country: Country) => void;
}
const CountryCard = ({ country, setSelectedCountry }: CountryCardProps) => {
  const { icon: url, name, id } = country;
  return (
    <Box
      className="country-card"
      onMouseOver={() => setSelectedCountry(country)}
    >
      {url && <Image src={url} alt={name} width={100} height={100} />}
    </Box>
  );
};

export default CountryCard;
