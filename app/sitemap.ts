import { MetadataRoute } from 'next'
import { vehicles } from '@/lib/vehicles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uvbengaluru.com'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/bikes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/vehicles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...vehicles.map((vehicle) => ({
      url: `${baseUrl}/vehicles/${vehicle.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: vehicle.pagePriority === 'high' ? 0.9 : vehicle.pagePriority === 'medium' ? 0.75 : 0.6,
    })),
    { url: `${baseUrl}/showroom`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/workshop`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/test-ride`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
