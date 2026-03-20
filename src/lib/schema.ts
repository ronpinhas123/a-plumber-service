import { SITE_CONFIG } from "@/data/site-config";
import { cities } from "@/data/cities";
import type { City } from "@/types/city";
import type { Service } from "@/types/service";
import type { BlogPost } from "@/types/blog";

const SITE_URL = SITE_CONFIG.url;

export function buildLocalBusinessSchema(cityOverride?: City) {
  const areaServed = cityOverride
    ? [{ "@type": "City", name: cityOverride.name, containedInPlace: { "@type": "State", name: "Texas" } }]
    : cities.map((c) => ({ "@type": "City", name: c.name }));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: cityOverride ? `${SITE_CONFIG.name} - ${cityOverride.name} TX` : SITE_CONFIG.name,
    url: cityOverride ? `${SITE_URL}/service-areas/${cityOverride.slug}` : SITE_URL,
    telephone: `+1${SITE_CONFIG.phone}`,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    priceRange: "$$",
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Detection & Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer & Pipe Services" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "500",
    },
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}`,
    serviceType: service.name,
    name: `${service.name} in Houston, TX`,
    description: service.longDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    image: `https://images.unsplash.com/${post.imageId}?auto=format&fit=crop&w=1200&q=80`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    publisher: { "@id": `${SITE_URL}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
