import Link from "next/link";
import { UtensilsCrossed, Bath, Square, Home, Trees, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { unsplashUrl } from "@/lib/images";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UtensilsCrossed,
  Bath,
  Square,
  Home,
  Trees,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Expert Home Remodeling & Plumbing Services"
            subtitle="From complete kitchen transformations to stunning outdoor living spaces, A Plumber Service delivers exceptional craftsmanship across every project type."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <OptimizedImage
                    src={unsplashUrl(service.imageId, 800)}
                    alt={`${service.name} in Houston TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-colors"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
