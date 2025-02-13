import Image from "next/image";
import CollaborationLogo from "@/assets/icons/collaboration";
import "./styles.scss";

const InfiniteSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...CollaborationLogo, ...CollaborationLogo].map(({ src }, index) => (
          <div className="slide" key={index}>
            {src && <Image src={src} height="80" width="250" alt={`slide-${index}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
