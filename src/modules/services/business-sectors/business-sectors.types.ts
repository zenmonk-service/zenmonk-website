export interface Service {
  title: string;
  image: any;
}

export interface Sector {
  sector: string;
  id: number;
  services: Service[];
}
