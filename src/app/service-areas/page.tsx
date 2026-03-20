import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { buildServiceAreasMetadata } from "@/lib/metadata";
import { cities } from "@/data/cities";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildServiceAreasMetadata();

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Service Areas", href: "/service-areas" }]} />

      <HeroSection
        headline="Serving Houston and 32 Surrounding Communities"
        subheadline="A Plumber Service brings expert plumbing and home remodeling to neighborhoods across the entire greater Houston metro area. Find your city below."
        imageId="photo-1605146769289-440113cc3d00"
        imageAlt="Greater Houston Texas service area map"
        minHeight="min-h-[60vh]"
        overlay={65}
        badges={["32 Cities Served", "Harris County", "Fort Bend County", "Montgomery County"]}
      />

      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Our Coverage"
              title="Plumbing & Remodeling Across Greater Houston"
              subtitle="No matter where you are in the Houston metro area, A Plumber Service is your local expert. Click your city to learn more about our services in your community."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group bg-white hover:bg-navy border border-gray-200 hover:border-navy rounded-xl p-5 transition-all duration-200 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy group-hover:text-white transition-colors text-sm">
                        {city.name}, TX
                      </h3>
                      <p className="text-gray-500 group-hover:text-white/60 text-xs mt-0.5 transition-colors">
                        {city.county}
                      </p>
                      <p className="text-gray-400 group-hover:text-white/40 text-xs transition-colors">
                        Zip: {city.zipCodes.slice(0, 2).join(", ")}{city.zipCodes.length > 2 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 -translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-navy rounded-2xl p-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Don&apos;t See Your City?</h3>
            <p className="text-white/70 mb-6">
              We may still serve your area. Contact us to confirm coverage and schedule your free estimate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
