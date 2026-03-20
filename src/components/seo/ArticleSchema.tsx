import { buildArticleSchema } from "@/lib/schema";
import type { BlogPost } from "@/types/blog";

export default function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = buildArticleSchema(post);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
