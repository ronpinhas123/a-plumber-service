import { buildLocalBusinessSchema } from "@/lib/schema";
import type { City } from "@/types/city";

interface LocalBusinessSchemaProps {
  city?: City;
}

export default function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
  const schema = buildLocalBusinessSchema(city);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
