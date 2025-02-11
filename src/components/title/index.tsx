import { Box, Typography } from "@mui/material";
import { Mark } from "@/assets/icons";
import Image from "next/image";
import "./styles.scss";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  const words = text.split(" ");
  const lastWord = words.pop();
  const restOfText = words.join(" ");

  return (
    <Typography component="h5" variant="h5" className="title-text">
      {restOfText}{" "}
      <Box component="span" className="last-word">
        {lastWord}
        <Box className="mark-container">
          <Image src={Mark} alt="mark" className="mark-icon" />
        </Box>
      </Box>
    </Typography>
  );
};

export default Title;
