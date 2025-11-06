import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rshmdev.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}`,
          'en-US': `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Seções específicas para melhor indexação
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/#about`,
          'en-US': `${baseUrl}/en#about`,
        },
      },
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/#skills`,
          'en-US': `${baseUrl}/en#skills`,
        },
      },
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/#experience`,
          'en-US': `${baseUrl}/en#experience`,
        },
      },
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/#projects`,
          'en-US': `${baseUrl}/en#projects`,
        },
      },
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/#contact`,
          'en-US': `${baseUrl}/en#contact`,
        },
      },
    },
  ]
}