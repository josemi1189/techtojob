import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/common/atoms/icons/social";
import { SocialLinks, ItemsFooterProps } from "@/types";
import { routes } from "@/config";

export const socialLink: SocialLinks[] = [
  {
    name: "Discord",
    profileLink: "https://discord.gg/h9FFgKdkRd",
    icon: <DiscordIcon />,
  },
  {
    name: "LinkedIn",
    profileLink: "https://www.linkedin.com/company/techtojob/",
    icon: <LinkedinIcon />,
  },
  {
    name: "X",
    profileLink: "https://x.com/techtojob",
    icon: <TwitterIcon />,
  },
  {
    name: "Instagram",
    profileLink: "https://www.instagram.com/techtojob",
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
