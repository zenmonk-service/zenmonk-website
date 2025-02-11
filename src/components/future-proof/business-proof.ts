import {
  Gear,
  BriefCase,
  Mobile,
  BriefCasePerson,
} from "@/assets/icons/business";

interface BusinessProof {
  id: string;
  icon: any;
  title: string;
  color: string;
  description: string;
}

const businessProof: BusinessProof[] = [
  {
    id: "01",
    icon: Gear,
    title: "Software Development",
    color: "#41CDD6",
    description:
      "Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ",
  },
  {
    id: "02",
    icon: BriefCase,
    title: "IT Consulting",
    color: "#41CDD6",
    description:
      "Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ",
  },
  {
    id: "03",
    icon: Mobile,
    title: "Mobile App Development",
    color: "#A15AFF",
    description:
      "Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ",
  },
  {
    id: "04",
    icon: BriefCasePerson,
    title: "IT Consulting",
    color: "#48B95C",
    description:
      "Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ",
  },
];

export { businessProof };
export type { BusinessProof };
