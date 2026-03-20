export interface UnsplashImage {
  id: string;
  alt: string;
  credit: string;
}

const BASE = "https://images.unsplash.com";

export function unsplashUrl(photoId: string, width = 1200, quality = 80): string {
  return `${BASE}/${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

// Tiny base64 LQIP placeholder (10px wide gray gradient)
export const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIRAAAQQCAgMAAAAAAAAAAAAAAQIDBBESITFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amz1RfaN7mhklXYSISIiAiIiA//Z";

export const images = {
  // Hero Images
  homeHero: {
    id: "photo-1556909114-f6e7ad7d3136",
    alt: "Luxury modern kitchen remodel with white cabinets and quartz countertops",
    credit: "Unsplash",
  },
  servicesHero: {
    id: "photo-1484154218962-a197022b5858",
    alt: "Beautiful luxury home in Houston Texas",
    credit: "Unsplash",
  },
  aboutHero: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Professional plumber and remodeling team in Houston TX",
    credit: "Unsplash",
  },
  contactHero: {
    id: "photo-1570129477492-45c003edd2be",
    alt: "Elegant Houston home exterior with professional landscaping",
    credit: "Unsplash",
  },
  serviceAreasHero: {
    id: "photo-1605146769289-440113cc3d00",
    alt: "Houston Texas skyline at sunset",
    credit: "Unsplash",
  },
  testimonialsHero: {
    id: "photo-1560185007-cde436f6a4d0",
    alt: "Happy Houston homeowners after home remodel",
    credit: "Unsplash",
  },
  blogHero: {
    id: "photo-1484154218962-a197022b5858",
    alt: "Home remodeling and plumbing blog Houston TX",
    credit: "Unsplash",
  },

  // Service Images
  kitchenRemodeling: {
    id: "photo-1556909114-f6e7ad7d3136",
    alt: "Modern kitchen remodel with custom cabinets and quartz countertops in Houston",
    credit: "Unsplash",
  },
  bathroomRemodeling: {
    id: "photo-1552321554-5fefe8c9ef14",
    alt: "Luxury bathroom remodel with marble tile and freestanding tub in Houston",
    credit: "Unsplash",
  },
  flooringInstallation: {
    id: "photo-1558618666-fcd25c85cd64",
    alt: "Beautiful hardwood floor installation in Houston home",
    credit: "Unsplash",
  },
  homeAdditions: {
    id: "photo-1484154218962-a197022b5858",
    alt: "Custom home addition and room extension in Houston Texas",
    credit: "Unsplash",
  },
  outdoorLiving: {
    id: "photo-1558618047-3c8c76ca7d13",
    alt: "Beautiful outdoor patio and pergola with outdoor kitchen in Houston",
    credit: "Unsplash",
  },

  // Team & Trust Images
  team: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "A Plumber Service team of professional plumbers and remodelers in Houston TX",
    credit: "Unsplash",
  },
  owner: {
    id: "photo-1507003211169-0a1dd7228f2d",
    alt: "Ronnie, owner of A Plumber Service Houston TX",
    credit: "Unsplash",
  },
  workingPlumber: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Professional plumber working on pipes in Houston home",
    credit: "Unsplash",
  },

  // Before/After Gallery
  kitchenBefore: {
    id: "photo-1556909172-54557c7e4fb7",
    alt: "Kitchen before remodeling in Houston home",
    credit: "Unsplash",
  },
  kitchenAfter: {
    id: "photo-1556909114-f6e7ad7d3136",
    alt: "Kitchen after beautiful remodeling by A Plumber Service Houston",
    credit: "Unsplash",
  },
  bathroomBefore: {
    id: "photo-1552321554-5fefe8c9ef14",
    alt: "Bathroom before renovation in Houston home",
    credit: "Unsplash",
  },
  bathroomAfter: {
    id: "photo-1552321554-5fefe8c9ef14",
    alt: "Luxury bathroom after full renovation by A Plumber Service",
    credit: "Unsplash",
  },
  flooringBefore: {
    id: "photo-1558618666-fcd25c85cd64",
    alt: "Old flooring before replacement in Houston home",
    credit: "Unsplash",
  },
  flooringAfter: {
    id: "photo-1558618666-fcd25c85cd64",
    alt: "New luxury hardwood floors installed by A Plumber Service Houston",
    credit: "Unsplash",
  },

  // City Images
  cityDefault: {
    id: "photo-1570129477492-45c003edd2be",
    alt: "Beautiful residential neighborhood in Houston Texas area",
    credit: "Unsplash",
  },
  cityLuxury: {
    id: "photo-1600596542815-ffad4c1539a9",
    alt: "Luxury home in Houston Texas",
    credit: "Unsplash",
  },
  citySuburban: {
    id: "photo-1480074568708-e7b720bb3f09",
    alt: "Suburban neighborhood home in Houston Texas area",
    credit: "Unsplash",
  },

  // Blog Images
  blogPlumbing: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Emergency plumbing services in Houston TX",
    credit: "Unsplash",
  },
  blogKitchen: {
    id: "photo-1556909114-f6e7ad7d3136",
    alt: "Kitchen remodeling trends Houston 2025",
    credit: "Unsplash",
  },
  blogBathroom: {
    id: "photo-1552321554-5fefe8c9ef14",
    alt: "Bathroom remodeling cost guide Houston TX",
    credit: "Unsplash",
  },
  blogFlooring: {
    id: "photo-1558618666-fcd25c85cd64",
    alt: "Flooring installation guide for Houston homes",
    credit: "Unsplash",
  },
  blogOutdoor: {
    id: "photo-1558618047-3c8c76ca7d13",
    alt: "Outdoor living spaces Houston Texas home value",
    credit: "Unsplash",
  },
} as const;

export type ImageKey = keyof typeof images;
