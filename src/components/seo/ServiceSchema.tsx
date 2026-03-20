import { buildServiceSchema } from "@/lib/schema";
import type { Service } from "@/types/service";

export default function ServiceSchema({ service }: { service: Service }) {
  const schema = buildServiceSchema(service);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
