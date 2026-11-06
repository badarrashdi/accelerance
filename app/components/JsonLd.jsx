export default function JsonLd({ type = "global", data = {} }) {
  const baseUrl = "https://accelerance.tech";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${baseUrl}/#organization`,
    "name": "Accelerance Tech Pvt. Ltd.",
    "legalName": "Accelerance Technologies Pvt. Ltd.",
    "alternateName": ["Accelerance Tech", "Accelerance Technologies"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/brand/logo.svg`,
      "width": 240,
      "height": 48
    },
    "image": `${baseUrl}/brand/og-image.png`,
    "description": "Accelerance Technologies Pvt. Ltd. is an award-winning digital growth agency delivering high-performance Next.js websites, scalable headless eCommerce, mobile applications, autonomous AI agents, and HubSpot RevOps.",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Accelerance Leadership Team"
    },
    "sameAs": [
      "https://www.linkedin.com/company/accelerance-tech",
      "https://twitter.com/accelerance_tech",
      "https://github.com/accelerance-tech"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9711091363",
        "contactType": "sales",
        "email": "sales@accelerance.in",
        "areaServed": ["IN", "AE", "BH", "US", "AU"],
        "availableLanguage": ["English", "Hindi", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-7741-345792",
        "contactType": "sales",
        "email": "uk@accelerance.tech",
        "areaServed": ["GB", "IE", "EU"],
        "availableLanguage": ["English"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "401, 4th Floor, Emca House, 23/23B, Ansari Road, Daryaganj",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110002",
      "addressCountry": "IN"
    },
    "subOrganization": [
      {
        "@type": "ProfessionalService",
        "name": "Accelerance Tech — Global Delivery HQ (Delhi NCR)",
        "telephone": "+91-9711091363",
        "email": "sales@accelerance.in",
        "url": `${baseUrl}/locations/india-delhi/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "401, 4th Floor, Emca House, 23/23B, Ansari Road, Daryaganj",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.6433,
          "longitude": 77.2415
        },
        "openingHours": "Mo-Fr 09:00-19:00",
        "priceRange": "$$$"
      },
      {
        "@type": "ProfessionalService",
        "name": "Accelerance Tech — United Kingdom Regional Office (London)",
        "telephone": "+44-7741-345792",
        "email": "uk@accelerance.tech",
        "url": `${baseUrl}/locations/uk-london/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "F-B, 17 Groveway",
          "addressLocality": "London",
          "postalCode": "SW9 0AH",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.4746,
          "longitude": -0.1186
        },
        "openingHours": "Mo-Fr 09:00-17:30",
        "priceRange": "$$$"
      },
      {
        "@type": "ProfessionalService",
        "name": "Accelerance Tech — United Arab Emirates Regional Office (Dubai)",
        "telephone": "+91-9711091363",
        "email": "dubai@accelerance.tech",
        "url": `${baseUrl}/locations/dubai-uae/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office 1402, Marina Plaza, Dubai Marina",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.0772,
          "longitude": 55.1403
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$$"
      },
      {
        "@type": "ProfessionalService",
        "name": "Accelerance Tech — Kingdom of Bahrain Regional Office (Manama)",
        "telephone": "+91-9711091363",
        "email": "bahrain@accelerance.tech",
        "url": `${baseUrl}/locations/bahrain/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 11, Almoayyed Tower, Seef District",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.2411,
          "longitude": 50.5367
        },
        "openingHours": "Su-Th 08:30-17:30",
        "priceRange": "$$$"
      },
      {
        "@type": "ProfessionalService",
        "name": "Accelerance Tech — United States Regional Office (New Jersey)",
        "telephone": "+91-9711091363",
        "email": "usa@accelerance.tech",
        "url": `${baseUrl}/locations/ridgewood-new-jersey/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1124 East Ridgewood, Av, Suite 103",
          "addressLocality": "Ridgewood",
          "addressRegion": "NJ",
          "postalCode": "07450",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.9793,
          "longitude": -74.1165
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$$"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Engineering & Growth Capabilities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Custom Web Development",
            "url": `${baseUrl}/services/web-design-development/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headless Shopify & eCommerce Solutions",
            "url": `${baseUrl}/services/headless-shopify-ecommerce/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development (Flutter & iOS/Android)",
            "url": `${baseUrl}/services/mobile-app-development-flutter/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autonomous AI Agents & Chatbots",
            "url": `${baseUrl}/services/ai-agents-chatbots/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HubSpot RevOps, CRM & Marketing Automation",
            "url": `${baseUrl}/services/hubspot-revops-crm/`
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "Accelerance Tech",
    "alternateName": "Accelerance Technologies",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/services/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const schemaToRender = type === "global"
    ? [organizationSchema, websiteSchema]
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
