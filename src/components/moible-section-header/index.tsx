import "./style.css";

import Image from 'next/image';
import React from 'react';

interface MobileSectionHeaderProps {
  headline: string;
  subheadline: string;
  imageSrc: any;
}

const MobileSectionHeader: React.FC<MobileSectionHeaderProps> = ({ headline, subheadline, imageSrc }) => {
  return (
    <div className="mobile-section-header">
      <div>
        <Image src={imageSrc} alt={headline} />
        <p className="headline">{headline}</p>
      </div>
      <p className="subheadline">{subheadline}</p>
    </div>
  );
};

export default MobileSectionHeader;
