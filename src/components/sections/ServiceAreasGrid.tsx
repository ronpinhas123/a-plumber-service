import Link from "next/link";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cities } from "@/data/cities";

export default function ServiceAreasGrid() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="service-areas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Where We Work"
            title="Serving 32+ Houston Area Communities"
            subtitle="A Plumber Service provides expert plumbing services across the greater Houston metropolitan area. Find your city below."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex items-center gap-2 bg-white hover:bg-navy border border-gray-200 hover:border-navy rounded-xl px-4 py-3 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="text-navy group-hover:text-white text-sm font-medium truncate transition-colors">
                {city.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-colors"
          >
            <MapPin className="w-5 h-5" />
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
