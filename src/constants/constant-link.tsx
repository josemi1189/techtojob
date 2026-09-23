import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/common/atoms/icons/social";
import { SocialLinks, ItemsFooterProps } from "@/types";
import { routes } from "@/config";

export const LINK = {
  discord: "https://discord.gg/h9FFgKdkRd",
  linkedin: "https://www.linkedin.com/company/techtojob/",
  twitter: "https://x.com/techtojob",
  instagram: "https://www.instagram.com/techtojob",
};
export const socialLink: SocialLinks[] = [
  {
    name: "Discord",
    profileLink: LINK.discord,
    icon: <DiscordIcon />,
  },
  {
    name: "LinkedIn",
    profileLink: LINK.linkedin,
    icon: <LinkedinIcon />,
  },
  {
    name: "X",
    profileLink: LINK.twitter,
    icon: <TwitterIcon />,
  },
  {
    name: "Instagram",
    profileLink: LINK.instagram,
    icon: <InstagramIcon />,
  },
];

export const itemsFooter: ItemsFooterProps[] = [
  {
    to: "#",
    title: "steps",
    ariaLabel: "stepsAriaLabel",
    label: "steps",
    section: "talent",
  },
  {
    to: "#",
    title: "talent",
    ariaLabel: "talentAriaLabel",
    label: "talent",
    section: "talent",
  },
  {
    to: "#",
    title: "company",
    ariaLabel: "companyAriaLabel",
    label: "company",
    section: "talent",
  },
  {
    to: "#",
    title: "tournaments",
    ariaLabel: "tournamentsAriaLabel",
    label: "tournaments",
    section: "community",
  },
  {
    to: "#",
    title: "community",
    ariaLabel: "communityAriaLabel",
    label: "community",
    section: "community",
  },
  {
    to: "#",
    title: "testimonials",
    ariaLabel: "testimonials",
    label: "testimonials",
    section: "community",
  },
  {
    to: "#",
    title: "news",
    ariaLabel: "news",
    label: "news",
    section: "community",
  },
  {
    to: routes.cookies,
    title: "cookies",
    ariaLabel: "cookies",
    label: "cookies",
    section: "legal",
  },
  {
    to: routes.privacy,
    title: "privacy",
    ariaLabel: "privacy",
    label: "privacy",
    section: "legal",
  },
];
