import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MIKEO Brand & Product Showcase",
    short_name: "MIKEO",
    description: "Explore the MIKEO brand and its 13-product showcase.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ed1017",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
