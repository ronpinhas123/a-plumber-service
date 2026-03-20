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
    id: "photo-1504307651254-35680f356dfd",
    alt: "Professional plumber working on pipes in Houston TX",
    credit: "Unsplash",
  },
  servicesHero: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Expert plumbing services in Houston Texas",
    credit: "Unsplash",
  },
  aboutHero: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "A Plumber Service team of licensed plumbers in Houston TX",
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
    alt: "Happy Houston homeowners after plumbing service",
    credit: "Unsplash",
  },
  blogHero: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Plumbing tips and advice blog for Houston homeowners",
    credit: "Unsplash",
  },

  // Service Images
  emergencyPlumbing: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Emergency plumbing service in Houston TX",
    credit: "Unsplash",
  },
  drainCleaning: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Professional drain cleaning service in Houston TX",
    credit: "Unsplash",
  },
  waterHeaterServices: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Water heater installation and repair in Houston TX",
    credit: "Unsplash",
  },
  leakDetection: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Leak detection and pipe repair in Houston TX",
    credit: "Unsplash",
  },
  sewerPipeServices: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Sewer line repair and pipe services in Houston TX",
    credit: "Unsplash",
  },

  // Team & Trust Images
  team: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "A Plumber Service team of licensed plumbers in Houston TX",
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

  // Project Gallery
  pipeBefore: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Damaged pipes before repair by A Plumber Service Houston",
    credit: "Unsplash",
  },
  pipeAfter: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "New pipes after repair by A Plumber Service Houston",
    credit: "Unsplash",
  },
  drainBefore: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Clogged drain before cleaning in Houston home",
    credit: "Unsplash",
  },
  drainAfter: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Clear drain after professional cleaning by A Plumber Service",
    credit: "Unsplash",
  },
  waterHeaterBefore: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Old water heater before replacement in Houston home",
    credit: "Unsplash",
  },
  waterHeaterAfter: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "New water heater installed by A Plumber Service Houston",
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
  blogEmergencyPlumbing: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Emergency plumbing services in Houston TX",
    credit: "Unsplash",
  },
  blogDrainCleaning: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Drain cleaning tips for Houston homeowners",
    credit: "Unsplash",
  },
  blogWaterHeater: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Water heater maintenance guide Houston TX",
    credit: "Unsplash",
  },
  blogSlabLeak: {
    id: "photo-1581578731548-c64695cc6952",
    alt: "Slab leak detection and repair in Houston TX",
    credit: "Unsplash",
  },
  blogPipeMaintenance: {
    id: "photo-1504307651254-35680f356dfd",
    alt: "Houston home plumbing maintenance guide",
    credit: "Unsplash",
  },
} as const;

export type ImageKey = keyof typeof images;
