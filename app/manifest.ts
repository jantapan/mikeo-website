import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MIKEO Health & Beauty",
    short_name: "MIKEO",
    description: "Discover MIKEO health and beauty products and official brand information.",
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
