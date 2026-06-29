import India from "./assets/countries/india.svg?url";
import Spain from "./assets/countries/spain.svg?url";
import Equador from "./assets/countries/ecuador.svg?url";
import Brazil from "./assets/countries/brazil.svg?url";
import Peru from "./assets/countries/peru.svg?url";
import USA from "./assets/countries/usa.svg?url";
import Mexico from "./assets/countries/mexico.svg?url";
import Argentina from "./assets/countries/argentina.svg?url";
import Colombia from "./assets/countries/colombia.svg?url";

export const countries = [
  {
    markerOffset: -5,
    name: 'India',
    coordinates: [30.7046, 76.7179],
    title: 'India',
    description:
      'Asha Tower, Phase 8B, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar (Mohali), Punjab 160055',
    isActive: true,
    icon: India,
    idx: 0,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
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
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: 40,
    name: 'Brazil',
    coordinates: [-15.7939, -47.8828],
    title: 'Brazil',
    description: 'R. Vento Sul, 126 - Campeche Leste, Florianópolis, Brazil',
    isActive: false,
    icon: Brazil,
    idx: 2,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: 8,
    marketXoffSet: -35,
    name: 'Ecuador',
    coordinates: [-2.1709, -79.9224],
    title: 'Ecuador',
    description: 'Geronimo y Miguel H. Alcivar, 090512. Guayaquil, Ecuador',
    isActive: false,
    icon: Equador,
    idx: 3,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: 35,
    name: 'Peru',
    coordinates: [-12.0464, -74.0428],
    title: 'Peru',
    description: 'Jr. Chimucápac 163, Santiago de Surco 15038, Peru',
    isActive: false,
    icon: Peru,
    idx: 4,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: -15,
    name: 'USA',
    coordinates: [37.0902, -95.7129],
    title: 'USA',
    description: 'Cl. 40 #26a8, Bogotá, Colombia',
    isActive: false,
    icon: USA,
    idx: 5,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: -15,
    name: 'Mexico',
    coordinates: [23.6345, -102.5528],
    title: 'Mexico',
    description: 'Cl. 40 #26a8, Bogotá, Colombia',
    isActive: false,
    icon: Mexico,
    idx: 6,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: -15,
    name: 'Argentina',
    coordinates: [-38.4161, -63.6167],
    title: 'Argentina',
    description: 'Cl. 40 #26a8, Bogotá, Colombia',
    isActive: false,
    icon: Argentina,
    idx: 7,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },

  {
    markerOffset: -15,
    name: 'Colombia',
    coordinates: [4.711, -74.0721],
    title: 'Colombia',
    description: 'Cl. 40 #26a8, Bogotá, Colombia',
    isActive: false,
    icon: Colombia,
    idx: 8,
    office: {
      email: 'admin@zenmonk.tech',
      phone: '+91 9012345678',
    },
  },
]
