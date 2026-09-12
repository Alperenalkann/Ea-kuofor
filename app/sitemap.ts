import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://ea-kuafor1.vercel.app/',
    // Update this date when the homepage content or metadata changes.
    lastModified: '2026-09-12',
    changeFrequency: 'monthly',
    priority: 1,
  }];
}
