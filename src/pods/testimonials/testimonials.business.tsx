import { PlatformConfig, PlatformTypes } from "@/types";

import {
  LinkedinIcon,
  InstagramIcon,
  DiscordIcon,
  TwitterIcon,
  GlobeIcon,
} from "@/common/atoms/icons/social";

export const getPlatformConfig = (platform: PlatformTypes): PlatformConfig => {
  switch (platform) {
    case "linkedin":
      return {
        icon: <LinkedinIcon />,
        label: "viewProfile",
        platformClass:
          "hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2]",
      };

    case "instagram":
      return {
        icon: <InstagramIcon />,
        label: "viewProfile",
        platformClass:
          "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent",
      };

    case "discord":
      return {
        icon: <DiscordIcon />,
        label: "viewProfile",
        platformClass:
          "hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2]",
      };

    case "X":
      return {
        icon: <TwitterIcon />,
        label: "viewProfile",
        platformClass:
          "hover:bg-[#000000] hover:text-white hover:border-[#000000]",
      };

    default:
      return {
        icon: <GlobeIcon />,
        label: "viewExternalLink",
        platformClass: "hover:bg-secondary hover:text-third",
      };
  }
};
