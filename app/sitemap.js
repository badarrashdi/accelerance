import { caseStudiesList, servicesList, agencyInfo } from './data';

export default function sitemap() {
  const baseUrl = 'https://accelerance.tech';
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Specialized & Core Service Pages
  const specializedServiceSlugs = [
    'ai-agents-chatbots',
    'headless-shopify-ecommerce',
    'hubspot-revops-crm',
    'mobile-app-development-flutter',
    'website-design-development',
  ];

  const allServiceSlugs = Array.from(
    new Set([
      ...servicesList.map((s) => s.slug),
      ...specializedServiceSlugs,
    ])
  );

  const serviceRoutes = allServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Regional & GEO Location Hubs
  const locationSlugs = [
    'india-delhi',
    'uk-london',
    'dubai-uae',
    'bahrain',
    'ridgewood-new-jersey',
    'usa-new-jersey',
  ];

  const locationRoutes = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // All Client Case Studies
  const caseStudyRoutes = caseStudiesList.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...caseStudyRoutes,
  ];
}
