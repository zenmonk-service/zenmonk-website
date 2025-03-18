import Image from "next/image";
import CollaborationLogo from "@/assets/icons/collaboration";
import "./styles.scss";
import { Box } from "@mui/material";

interface SliderData {
  name: string;
  src: string;
}
interface InfiniteSliderProps {
  data?: SliderData[];
  originFrom?: "right" | "left";
  sliderProps?: {
    className?: string;
    gap?: number;
  };
  imageProps?: {
    size?: number;
  };
}

const InfiniteSlider = ({
  data = [...CollaborationLogo, ...CollaborationLogo],
  originFrom = "right",
  imageProps,
  sliderProps,
}: InfiniteSliderProps) => {
  return (
    <Box className={`slider ${originFrom} ${sliderProps?.className}`}>
      <Box className="slide-track" gap={sliderProps?.gap}>
        {data.map(({ src }, index) => (
          <Box className="slide" key={index}>
            {src && (
              <Image
                src={src}
                width={imageProps?.size ?? 150}
                alt={`slide-${index}`}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InfiniteSlider;
