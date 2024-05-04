import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://triple-point-brown.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://triple-point-brown.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://triple-point-brown.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://triple-point-brown.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://triple-point-brown.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
