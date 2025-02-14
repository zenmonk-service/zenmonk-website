import { Typography, TypographyProps } from "@mui/material";
import { Mark } from "@/assets/icons";
import Image from "next/image";
import "./styles.scss";

interface TitleProps extends TypographyProps {
  text: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const Title = ({ text, align = "center", className, ...props }: TitleProps) => {
  const words = text.split(" ");
  const isSingleWord = words.length === 1;
  const lastWord = words.pop() || "";
  const restOfText = words.join(" ");

  return (
    <Typography
      component="h5"
      variant="h5"
      className={`title-text ${className}`}
      textAlign={align}
      {...props}
    >
      {isSingleWord ? (
        <span className="last-word">
          <span className="word-container">{lastWord}</span>
          <span className="mark-container" style={{ width: `${lastWord.length}ch` }}>
            {Mark && <Image src={Mark} alt="mark" className="mark-icon" />}
          </span>
        </span>
      ) : (
        <>
          {restOfText}{" "}
          <span className="last-word">
            <span className="word-container">{lastWord}</span>
            <span className="mark-container" style={{ width: `${lastWord.length}ch` }}>
              {Mark && <Image src={Mark} alt="mark" className="mark-icon" />}
            </span>
          </span>
        </>
      )}
    </Typography>
  );
};

export default Title;
