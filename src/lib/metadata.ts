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
    `Plumber Houston TX | ${SITE_CONFIG.name}`,
    `Houston's trusted licensed plumbers. Emergency plumbing, drain cleaning, water heater services, leak detection & sewer repairs. Serving 32 cities. Call ${SITE_CONFIG.phoneFormatted}.`,
    "/",
    "photo-1504307651254-35680f356dfd"
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
    `Plumber ${city.name}, TX | ${SITE_CONFIG.name}`,
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
    `About Us - Houston Licensed Plumbers | ${SITE_CONFIG.name}`,
    `Meet the A Plumber Service team — Houston's trusted licensed plumbers with 20+ years of experience. Licensed, insured, and committed to excellence.`,
    "/about",
    "photo-1581578731548-c64695cc6952"
  );
}

export function buildContactMetadata(): Metadata {
  return buildBaseMetadata(
    `Contact Us | ${SITE_CONFIG.name} ${SITE_CONFIG.phoneFormatted}`,
    `Contact A Plumber Service for plumbing services in Houston, TX. Call ${SITE_CONFIG.phoneFormatted}, email us, or fill out our contact form for a free estimate.`,
    "/contact"
  );
}

export function buildTestimonialsMetadata(): Metadata {
  return buildBaseMetadata(
    `Customer Reviews & Testimonials | ${SITE_CONFIG.name} Houston`,
    `Read what Houston homeowners say about A Plumber Service. Hundreds of 5-star reviews for plumbing services across the Houston metro area.`,
    "/testimonials",
    "photo-1560185007-cde436f6a4d0"
  );
}

export function buildBlogIndexMetadata(): Metadata {
  return buildBaseMetadata(
    `Plumbing Tips & Advice Houston TX | ${SITE_CONFIG.name}`,
    `Expert plumbing tips, cost guides, and maintenance advice from A Plumber Service — Houston's trusted licensed plumbers.`,
    "/blog",
    "photo-1581578731548-c64695cc6952"
  );
}

export function buildServicesIndexMetadata(): Metadata {
  return buildBaseMetadata(
    `Plumbing Services Houston TX | ${SITE_CONFIG.name}`,
    `A Plumber Service offers emergency plumbing, drain cleaning, water heater services, leak detection, and sewer & pipe services across Houston and 32 surrounding cities.`,
    "/services",
    "photo-1504307651254-35680f356dfd"
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
