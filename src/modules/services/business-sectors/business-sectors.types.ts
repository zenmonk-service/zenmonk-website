import { StaticImageData } from 'next/image'

export interface Service {
  title: string;
  image: StaticImageData;
}

export interface Sector {
  sector: string;
  id: number;
  services: Service[];
}
