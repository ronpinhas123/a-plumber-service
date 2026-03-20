import Link from "next/link";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import type { Service } from "@/types/service";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import SectionHeading from "@/components/ui/SectionHeading";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { unsplashUrl } from "@/lib/images";
import { getTestimonialsByService } from "@/data/testimonials";

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const featuredCityObjects = cities.filter((c) => service.featuredCities.includes(c.slug));
  const relatedServiceObjects = services.filter((s) => service.relatedServices.includes(s.slug));
  const serviceTestimonials = getTestimonialsByService(service.slug);

  return (
    <>
      <ServiceSchema service={service} />
      <FAQSchema faqs={service.faqs} />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: service.name, href: `/services/${service.slug}` },
      ]} />

      {/* Hero */}
      <HeroSection
        headline={`${service.name} in Houston, TX`}
        subheadline={service.tagline}
        imageId={service.imageId}
        imageAlt={`${service.name} in Houston TX by A Plumber Service`}
        minHeight="min-h-[70vh]"
        overlay={60}
        badges={["Licensed & Insured", "Free Estimates", "Houston & 32 Cities"]}
      />

      {/* Breadcrumbs */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: service.name },
          ]} />
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Expert Service</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">{service.name} Houston, TX</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">{service.longDescription}</p>

              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-gold"
              >
                Get a Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src={unsplashUrl(service.imageId, 800)}
                alt={`${service.name} in Houston TX`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="How It Works"
              title={`Our ${service.name} Process`}
              subtitle="A clear, professional process from first contact to final walkthrough."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-navy">{step}</span>
                </div>
                <h3 className="font-serif font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* Testimonials */}
      {serviceTestimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <SectionHeading
                eyebrow="Reviews"
                title={`What Clients Say About Our ${service.name}`}
                subtitle="Real reviews from real Houston homeowners."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {serviceTestimonials.map((t) => (
                <div key={t.id} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{t.name}</p>
                      <Link href={`/service-areas/${t.citySlug}`} className="text-gold text-xs hover:text-gold-dark transition-colors">
                        {t.city}, TX
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available in Cities */}
      {featuredCityObjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <SectionHeading
                eyebrow="Service Areas"
                title={`${service.name} Available In`}
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {featuredCityObjects.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="bg-white border border-gray-200 hover:border-gold hover:text-gold rounded-xl px-5 py-2.5 text-sm font-medium text-navy transition-all hover:shadow-md"
                >
                  {city.name}, TX
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="bg-navy text-white hover:bg-navy-light border border-navy rounded-xl px-5 py-2.5 text-sm font-medium transition-all hover:shadow-md"
              >
                View All 32 Cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        faqs={service.faqs}
        title={`${service.name} FAQ — Houston, TX`}
        subtitle="Common questions from Houston homeowners about our service."
      />

      {/* Related Services */}
      {relatedServiceObjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl font-bold text-navy text-center mb-8">You May Also Be Interested In</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {relatedServiceObjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex items-center gap-2 bg-gray-50 hover:bg-gold/10 border border-gray-200 hover:border-gold rounded-xl px-6 py-3 text-navy font-medium transition-all"
                >
                  {related.name}
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
