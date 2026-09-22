import { TournamentsVM } from "@/types";

export const tournamentsData: TournamentsVM[] = [
  {
    id: "1",
    active: false,
    title: {
      es: "Logo y apariencia para la web oficial de TechToJob",
      en: "Logo and look for the official TechToJob website",
    },
    subtitle: {
      es: "Diseños e ideas de logo y apariencia para la web oficial de TechToJob",
      en: "Logo designs and visual ideas for the official TechToJob website",
    },
    state: "closed",
    urlLink:
      "https://discord.com/channels/1500449244019036219/1541839370330308648",
    linkLabel: {
      es: "Bases en Discord",
      en: "View rules on Discord",
    },
  },
  {
    id: "2",
    active: true,
    title: {
      es: "Página oficial de TechToJob",
      en: "TechToJob official website",
    },
    subtitle: {
      es: "Construcción de la web oficial de TechToJob",
      en: "Development of the official TechToJob website",
    },
    linkLabel: {
      es: "Bases en Discord",
      en: "View rules on Discord",
    },
    state: "building",
    urlLink:
      "https://discord.com/channels/1500449244019036219/1546508508374114405",
  },
];
