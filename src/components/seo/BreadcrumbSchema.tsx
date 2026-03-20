import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/data/site-config";

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schemaItems = [
    { name: "Home", url: SITE_CONFIG.url },
    ...items.map((item) => ({ name: item.name, url: `${SITE_CONFIG.url}${item.href}` })),
  ];
  const schema = buildBreadcrumbSchema(schemaItems);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
