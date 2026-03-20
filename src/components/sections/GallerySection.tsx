import OptimizedImage from "@/components/ui/OptimizedImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplashUrl } from "@/lib/images";
import Link from "next/link";

const galleryItems = [
  {
    before: "photo-1556909172-54557c7e4fb7",
    after: "photo-1556909114-f6e7ad7d3136",
    label: "Kitchen Remodel",
    city: "Katy, TX",
    href: "/services/kitchen-remodeling",
  },
  {
    before: "photo-1552321554-5fefe8c9ef14",
    after: "photo-1552321554-5fefe8c9ef14",
    label: "Bathroom Renovation",
    city: "The Woodlands, TX",
    href: "/services/bathroom-remodeling",
  },
  {
    before: "photo-1558618666-fcd25c85cd64",
    after: "photo-1558618666-fcd25c85cd64",
    label: "Flooring Installation",
    city: "Sugar Land, TX",
    href: "/services/flooring-installation",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Project Transformations"
            subtitle="Every project tells a story of transformation. See how A Plumber Service turns Houston homes into something truly remarkable."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map(({ after, label, city, href }) => (
            <Link
              key={label}
              href={href}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72">
                <OptimizedImage
                  src={unsplashUrl(after, 800)}
                  alt={`${label} in ${city} by A Plumber Service`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-white font-semibold">{city}</p>
                </div>
                <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors text-sm"
          >
            Start Your Project Today →
          </Link>
        </div>
      </div>
    </section>
  );
}
