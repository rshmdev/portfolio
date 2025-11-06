import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://rshmdev.com/sitemap.xml',
    host: 'https://rshmdev.com',
  }
}