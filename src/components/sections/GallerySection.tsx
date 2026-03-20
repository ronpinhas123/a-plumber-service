import OptimizedImage from "@/components/ui/OptimizedImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplashUrl } from "@/lib/images";
import Link from "next/link";

const galleryItems = [
  {
    before: "photo-1504307651254-35680f356dfd",
    after: "photo-1504307651254-35680f356dfd",
    label: "Emergency Pipe Repair",
    city: "Katy, TX",
    href: "/services/emergency-plumbing",
  },
  {
    before: "photo-1581578731548-c64695cc6952",
    after: "photo-1581578731548-c64695cc6952",
    label: "Drain Cleaning",
    city: "Spring, TX",
    href: "/services/drain-cleaning",
  },
  {
    before: "photo-1504307651254-35680f356dfd",
    after: "photo-1504307651254-35680f356dfd",
    label: "Water Heater Installation",
    city: "Sugar Land, TX",
    href: "/services/water-heater-services",
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
            subtitle="See examples of our plumbing work across Houston — from emergency repairs to full system installations."
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
            Get a Free Plumbing Estimate →
          </Link>
        </div>
      </div>
    </section>
  );
}
