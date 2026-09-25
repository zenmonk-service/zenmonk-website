import India from "./assets/countries/india.svg?url";
import Spain from "./assets/countries/spain.svg?url";
import USA from "./assets/countries/usa.svg?url";
import PuertoRico from "./assets/countries/puerto-rico.svg?url";
import Equador from "./assets/countries/ecuador.svg?url";
import Colombia from "./assets/countries/colombia.svg?url";
import Mexico from "./assets/countries/mexico.svg?url";

export const countries = [
  {
    markerOffset: -5,
    name: 'India',
    coordinates: [30.7046, 76.7179],
    title: 'India',
    description:
      'Asha Tower, Phase 8B, Industrial Area, Sector 75, SAS Nagar (Mohali), Punjab 160055',
    isActive: true,
    icon: India,
    idx: 0,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
      address:
        'Asha Tower, Phase 8B, Industrial Area, Sector 75, SAS Nagar (Mohali), Punjab 160055',
    },
  },

  {
    markerOffset: 35,
    name: 'Spain (Cantabria)',
    coordinates: [43.4623, -3.8099],
    title: 'Spain Cantabria',
    description: 'C. Isabel Torres, 21, 39011. Santander, Cantabria, Spain',
    isActive: false,
    icon: Spain,
    idx: 1,
    office: {
      address: 'C. Isabel Torres, 21, 39011. Santander, Cantabria, Spain',
    },
  },

  {
    markerOffset: -15,
    name: 'USA',
    coordinates: [40.7069, -74.009],
    title: 'USA',
    description: '30 Wall Street 8th Floor, New York, NY 10005, USA',
    isActive: false,
    icon: USA,
    idx: 2,
    office: {
      address: '30 Wall Street 8th Floor, New York, NY 10005, USA',
    },
  },

  {
    markerOffset: -10,
    name: 'Puerto Rico',
    coordinates: [18.4724, -66.7157],
    title: 'Puerto Rico',
    description: 'Road 658 Km 1.0 Bo. Arenalejos Sector Palaches Arecibo, PR',
    isActive: false,
    icon: PuertoRico,
    idx: 3,
    office: {
      address: 'Road 658 Km 1.0 Bo. Arenalejos Sector Palaches Arecibo, PR',
    },
  },

  {
    markerOffset: 8,
    marketXoffSet: -35,
    name: 'Ecuador',
    coordinates: [-2.1709, -79.9224],
    title: 'Ecuador',
    description: 'Geronimo Aviles y Miguel H. Alcivar, 090512. Guayaquil, Ecuador',
    isActive: false,
    icon: Equador,
    idx: 4,
    office: {
      address: 'Geronimo Aviles y Miguel H. Alcivar, 090512. Guayaquil, Ecuador',
    },
  },

  {
    markerOffset: -15,
    name: 'Colombia',
    coordinates: [4.711, -74.0721],
    title: 'Colombia',
    description: 'Calle 40, Nº26A-08, CP 111311, Bogotá - Colombia',
    isActive: false,
    icon: Colombia,
    idx: 5,
    office: {
      address: 'Calle 40, Nº26A-08, CP 111311, Bogotá - Colombia',
    },
  },

  {
    markerOffset: -15,
    name: 'Mexico',
    coordinates: [19.3908, -99.1764],
    title: 'Mexico',
    description: 'Wisconsin 38, Col. Ampliación Nápoles, Benito Juárez, CP 03810, Mexico',
    isActive: false,
    icon: Mexico,
    idx: 6,
    office: {
      address: 'Wisconsin 38, Col. Ampliación Nápoles, Benito Juárez, CP 03810, Mexico',
    },
  },
]
