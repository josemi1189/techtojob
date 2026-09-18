import * as constants from "@/constants/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: constants.appName,
    short_name: constants.appName,
    start_url: "/",
    theme_color: "#2f3436",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
