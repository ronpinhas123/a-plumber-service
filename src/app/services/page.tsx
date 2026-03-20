import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildServicesIndexMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { unsplashUrl } from "@/lib/images";
import OptimizedImage from "@/components/ui/OptimizedImage";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = buildServicesIndexMetadata();

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />

      <HeroSection
        headline="Expert Plumbing Services in Houston, TX"
        subheadline="A Plumber Service offers comprehensive plumbing solutions across 32 Houston-area communities. Licensed, insured, and committed to excellence."
        imageId="photo-1504307651254-35680f356dfd"
        imageAlt="Professional plumbing services in Houston Texas"
        minHeight="min-h-[60vh]"
        overlay={65}
        badges={["Licensed & Insured", "Free Estimates", "32 Cities Served"]}
      />

      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">Our Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency plumbing response to complete sewer replacements, A Plumber Service delivers expert plumbing solutions for every Houston homeowner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative md:w-56 h-52 md:h-auto flex-shrink-0">
                  <OptimizedImage
                    src={unsplashUrl(service.imageId, 600)}
                    alt={`${service.name} in Houston TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 bg-white">
                  <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
