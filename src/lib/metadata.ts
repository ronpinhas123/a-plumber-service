import type { Metadata } from "next";
import type { City } from "@/types/city";
import type { Service } from "@/types/service";
import type { BlogPost } from "@/types/blog";
import { SITE_CONFIG } from "@/data/site-config";

const SITE_URL = SITE_CONFIG.url;

export function buildBaseMetadata(
  title: string,
  description: string,
  path: string,
  imageId?: string
): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = imageId
    ? `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1200&q=80`
    : `${SITE_URL}/og-default.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildHomeMetadata(): Metadata {
  return buildBaseMetadata(
    `Plumber & Home Remodeling Houston TX | ${SITE_CONFIG.name}`,
    `Houston's trusted plumbing and home remodeling experts. Kitchen, bathroom, flooring, home additions & outdoor living. Serving 32 cities. Call ${SITE_CONFIG.phoneFormatted} for a free estimate.`,
    "/",
    "photo-1556909114-f6e7ad7d3136"
  );
}

export function buildServiceMetadata(service: Service): Metadata {
  return buildBaseMetadata(
    service.metaTitle,
    service.metaDescription,
    `/services/${service.slug}`,
    service.imageId
  );
}

export function buildCityMetadata(city: City): Metadata {
  return buildBaseMetadata(
    `Plumber & Remodeling ${city.name}, TX | ${SITE_CONFIG.name}`,
    city.metaDescription,
    `/service-areas/${city.slug}`,
    city.heroImageId
  );
}

export function buildBlogMetadata(post: BlogPost): Metadata {
  return {
    ...buildBaseMetadata(
      post.metaTitle,
      post.metaDescription,
      `/blog/${post.slug}`,
      post.imageId
    ),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `https://images.unsplash.com/${post.imageId}?auto=format&fit=crop&w=1200&q=80`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [SITE_CONFIG.name],
    },
  };
}

export function buildAboutMetadata(): Metadata {
  return buildBaseMetadata(
    `About Us - Houston Plumber & Remodeling | ${SITE_CONFIG.name}`,
    `Meet the A Plumber Service team — Houston's trusted plumbing and home remodeling experts with 20+ years of experience. Licensed, insured, and committed to excellence.`,
    "/about",
    "photo-1581578731548-c64695cc6952"
  );
}

export function buildContactMetadata(): Metadata {
  return buildBaseMetadata(
    `Contact Us | ${SITE_CONFIG.name} ${SITE_CONFIG.phoneFormatted}`,
    `Contact A Plumber Service for plumbing and home remodeling in Houston, TX. Call ${SITE_CONFIG.phoneFormatted}, email us, or fill out our contact form for a free estimate.`,
    "/contact"
  );
}

export function buildTestimonialsMetadata(): Metadata {
  return buildBaseMetadata(
    `Customer Reviews & Testimonials | ${SITE_CONFIG.name} Houston`,
    `Read what Houston homeowners say about A Plumber Service. Hundreds of 5-star reviews for plumbing and home remodeling across the Houston metro area.`,
    "/testimonials",
    "photo-1560185007-cde436f6a4d0"
  );
}

export function buildBlogIndexMetadata(): Metadata {
  return buildBaseMetadata(
    `Plumbing & Remodeling Blog Houston TX | ${SITE_CONFIG.name}`,
    `Expert tips, cost guides, and home improvement advice from A Plumber Service — Houston's trusted plumbing and remodeling professionals.`,
    "/blog",
    "photo-1484154218962-a197022b5858"
  );
}

export function buildServicesIndexMetadata(): Metadata {
  return buildBaseMetadata(
    `Our Services | ${SITE_CONFIG.name} Houston TX`,
    `A Plumber Service offers kitchen remodeling, bathroom remodeling, flooring installation, home additions, and outdoor living services across Houston and 32 surrounding cities.`,
    "/services",
    "photo-1484154218962-a197022b5858"
  );
}

export function buildServiceAreasMetadata(): Metadata {
  return buildBaseMetadata(
    `Service Areas | ${SITE_CONFIG.name} Houston TX`,
    `A Plumber Service proudly serves Houston and 32 surrounding communities in the greater Houston area. Find your city and get a free estimate today.`,
    "/service-areas",
    "photo-1605146769289-440113cc3d00"
  );
}
