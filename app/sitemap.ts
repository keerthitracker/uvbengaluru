import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { vehicles } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/bikes", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/electric-bike-finance-bengaluru",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/finance", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/f77-mach-2-vs-f77-superstreet",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/f77-price-bengaluru",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/service", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/showroom", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/test-ride", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
    {
      path: "/ultraviolette-service-centre-bengaluru",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/ultraviolette-showroom-bengaluru",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/ultraviolette-test-ride-bengaluru",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/vehicles", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/workshop", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...vehicles.map((vehicle) => ({
      url: `${siteConfig.url}/vehicles/${vehicle.slug}`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "weekly" as const,
      priority:
        vehicle.pagePriority === "high"
          ? 0.9
          : vehicle.pagePriority === "medium"
            ? 0.75
            : 0.6,
    })),
  ];
}
