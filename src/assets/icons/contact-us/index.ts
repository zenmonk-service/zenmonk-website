import India from "./india.svg";
import Brazil from "./brazil.svg";
import Colombia from "./colombia.svg";
import Ecuador from "./ecuador.svg";
import Peru from "./peru.svg";
import Spain from "./spain.svg";

interface Country {
  icon: string;
  name: string;
  id: string;
  address?: string;
}
export const countries = [
  {
    id: "1",
    name: "India",
    icon: India,
    lat: 20.5937,
    lng: 78.9629,
  },
  {
    id: "2",
    name: "Spain",
    icon: Spain,
    lat: 40.4637,
    lng: -3.7492,
  },
  {
    id: "3",
    name: "Brazil",
    icon: Brazil,
    lat: -14.235,
    lng: -51.9253,
  },
  {
    id: "4",
    name: "Colombia",
    icon: Colombia,
    lat: 4.5709,
    lng: -74.2973,
  },
  {
    id: "5",
    name: "Peru",
    icon: Peru,
    lat: -9.19,
    lng: -75.0152,
  },
  {
    id: "6",
    name: "Ecuador",
    icon: Ecuador,
    lat: -1.8312,
    lng: -78.1834,
  },
];

export type { Country };
