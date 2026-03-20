import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { buildTestimonialsMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata: Metadata = buildTestimonialsMetadata();

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Testimonials", href: "/testimonials" }]} />

      <HeroSection
        headline="Houston Homeowners Love A Plumber Service"
        subheadline={`Over 500 five-star reviews from homeowners across 32 Houston-area communities. See what your neighbors are saying.`}
        imageId="photo-1560185007-cde436f6a4d0"
        imageAlt="Happy Houston homeowners after plumbing service by A Plumber Service"
        minHeight="min-h-[55vh]"
        overlay={65}
        badges={[`${SITE_CONFIG.rating}/5 Stars`, `${SITE_CONFIG.reviewCount} Reviews`, "32 Cities Served"]}
      />

      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />
        </div>
      </div>

      {/* Overall Rating */}
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Overall Rating</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-serif text-5xl font-bold text-white">{SITE_CONFIG.rating}</span>
          </div>
          <p className="text-white/70">Based on {SITE_CONFIG.reviewCount}+ verified reviews across Houston and 32 surrounding communities</p>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Customer Reviews"
              title="What Our Clients Say"
              subtitle="Authentic reviews from Houston-area homeowners who trusted A Plumber Service with their homes."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Link href={`/service-areas/${t.citySlug}`} className="text-gold hover:text-gold-dark transition-colors">
                        {t.city}, TX
                      </Link>
                      <span>•</span>
                      <Link href={`/services/${t.serviceSlug}`} className="hover:text-gold transition-colors">
                        {t.service}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Ready to join hundreds of satisfied Houston homeowners?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-colors shadow-gold"
            >
              Get Your Free Estimate Today
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
