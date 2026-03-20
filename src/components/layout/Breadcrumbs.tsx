import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />}
            {index === 0 && <Home className="w-3.5 h-3.5 text-gray-400" />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === allItems.length - 1 ? "text-navy font-medium" : "text-gray-500"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
