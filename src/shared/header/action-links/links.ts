interface ActionLink {
  name: string;
  href: string;
  options?:boolean
}

const actionsLink = [
  {
    name: "Services",
    href: "/services",
    options:true
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "How we work",
    href: "/how-we-work",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
];

export { actionsLink };
export type { ActionLink };
