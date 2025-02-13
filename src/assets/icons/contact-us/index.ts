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
    address:
      "Asha Tower, Phase 8B, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar (Mohali), Punjab 160055",
  },
  { id: "2", name: "Spain", icon: Spain },
  { id: "3", name: "Brazil", icon: Brazil },
  { id: "4", name: "Colombia", icon: Colombia },
  { id: "5", name: "Peru", icon: Peru },
  { id: "6", name: "Ecuador", icon: Ecuador },
];

export type { Country };