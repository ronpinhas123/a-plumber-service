export interface Service {
  name: string;
  slug: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  imageId: string;
  icon: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  featuredCities: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
