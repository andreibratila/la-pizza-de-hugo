import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/img/',
      crawlDelay: 10,
    },
    sitemap: 'https://lapizzadehugo.es/sitemap.xml',
  }
}