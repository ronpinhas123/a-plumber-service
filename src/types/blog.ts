export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  imageId: string;
  category: string;
  tags: string[];
  relatedService?: string;
  relatedCity?: string;
  relatedPosts: string[];
  metaTitle: string;
  metaDescription: string;
}
