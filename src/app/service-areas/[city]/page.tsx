import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { buildCityMetadata } from "@/lib/metadata";
import { buildFAQSchema } from "@/lib/schema";
import { getCityBySlug, getCitySlugs, cities } from "@/data/cities";
import { services } from "@/data/services";
import { getTestimonialsByCity } from "@/data/testimonials";
import { SITE_CONFIG } from "@/data/site-config";
import { unsplashUrl } from "@/lib/images";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import SectionHeading from "@/components/ui/SectionHeading";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

interface PageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return getCitySlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return buildCityMetadata(city);
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) return notFound();

  const cityTestimonials = getTestimonialsByCity(city.slug);
  const nearbyCityObjects = cities.filter((c) => city.nearbyCities.includes(c.name));

  const cityFAQs = [
    {
      question: `Do you serve all of ${city.name}'s zip codes?`,
      answer: `Yes! A Plumber Service covers all of ${city.name}'s zip codes including ${city.zipCodes.join(", ")}. Whether you're in ${city.neighborhoods[0] || city.name} or any other part of ${city.name}, we come to you for a free estimate.`,
    },
    {
      question: `How quickly can you respond to a plumbing emergency in ${city.name}?`,
      answer: `We strive for same-day emergency plumbing response in ${city.name}. For non-emergency plumbing inquiries, we typically schedule free estimates within 1–2 business days. Call us at ${SITE_CONFIG.phoneFormatted} any time — 24/7 for emergencies.`,
    },
    {
      question: `What permits are required for plumbing work in ${city.name}?`,
      answer: `Permit requirements in ${city.name} (${city.county}) vary by project type. Water heater replacements, sewer line work, and major plumbing repairs typically require permits. A Plumber Service handles all permitting as part of our standard service — you never need to deal with the permit office yourself.`,
    },
    {
      question: `What plumbing services do you offer in ${city.name}, TX?`,
      answer: `In ${city.name}, TX, A Plumber Service offers emergency plumbing, drain cleaning, water heater installation and repair, leak detection and repair, and sewer & pipe services. Contact us at ${SITE_CONFIG.phoneFormatted} for a free ${city.name} estimate.`,
    },
  ];

  const faqSchema = buildFAQSchema(cityFAQs);

  return (
    <>
      <LocalBusinessSchema city={city} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: "Service Areas", href: "/service-areas" },
        { name: `${city.name}, TX`, href: `/service-areas/${city.slug}` },
      ]} />

      {/* Hero */}
      <HeroSection
        headline={`Licensed Plumber in ${city.name}, TX`}
        subheadline={`Expert plumbing services in ${city.name}, ${city.county}. Emergency plumbing, drain cleaning, water heaters, leak detection & sewer repairs. Licensed, insured, and trusted since 2004.`}
        imageId={city.heroImageId}
        imageAlt={`Professional plumbing services in ${city.name}, TX`}
        minHeight="min-h-[65vh]"
        overlay={65}
        badges={[`Serving ${city.name} Since 2004`, "Licensed & Insured", "24/7 Emergency Service"]}
      />

      {/* Breadcrumbs */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Service Areas", href: "/service-areas" },
            { label: `${city.name}, TX` },
          ]} />
        </div>
      </div>

      {/* Services in This City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow={`${city.name}, TX`}
              title={`Our Services in ${city.name}, Texas`}
              subtitle={`A Plumber Service provides full-service plumbing throughout ${city.name} and surrounding ${city.county} communities.`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <span className="text-gold text-xl">⚡</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in This City */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Local Experts</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Why {city.name} Homeowners Choose A Plumber Service
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <div className="space-y-4 mb-8">
                {[
                  `We serve all of ${city.name}'s zip codes: ${city.zipCodes.join(", ")}`,
                  `Licensed and insured in ${city.county} and all of Texas`,
                  `Free in-home estimates with no obligation`,
                  `20+ years of experience serving ${city.name} and the greater Houston area`,
                  `Expert craftsmen — no subcontracting to unknown workers`,
                  `Transparent pricing with itemized written estimates`,
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-gold"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src={unsplashUrl(city.heroImageId, 800)}
                alt={`${city.name} TX neighborhood served by A Plumber Service`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About This City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose-content">
            <h2>Plumbing Services in {city.name} and {city.county}</h2>
            <p>{city.description}</p>
            <p>
              Located approximately {city.distanceFromHouston} of downtown Houston, {city.name} is home to thriving residential communities including {city.neighborhoods.join(", ")}. A Plumber Service has been serving {city.name} homeowners with licensed plumbing services for over two decades.
            </p>

            <h3>Zip Codes We Serve in {city.name}, TX</h3>
            <p>
              Our licensed plumbers serve all {city.name} zip codes, including: <strong>{city.zipCodes.join(", ")}</strong>. Whether you&apos;re in a newer master-planned community or an established neighborhood, A Plumber Service comes to you for a free estimate.
            </p>

            <h3>Nearby Neighborhoods and Areas</h3>
            <p>
              We provide plumbing services throughout {city.name} and nearby areas including communities surrounding {city.landmarks.join(", ")}. Our team is familiar with local building codes, permit requirements, and the plumbing characteristics common in {city.county} homes.
            </p>

            <h3>Emergency Plumbing in {city.name}</h3>
            <p>
              Plumbing emergencies can happen any time. A Plumber Service provides 24/7 emergency plumbing response in {city.name}, TX — burst pipes, sewage backups, water heater failures, and major leaks. Call {SITE_CONFIG.phoneFormatted} any time for immediate dispatch.
            </p>

            <h3>Common Plumbing Services in {city.name}, TX</h3>
            <p>
              {city.name} homeowners trust A Plumber Service for emergency plumbing, professional drain cleaning, water heater installation and repair, slab leak detection and repair, and complete sewer line services. Our licensed plumbers handle every plumbing need — from routine maintenance to complex repairs — with the skill and transparency you deserve.
            </p>

            <h3>Contact A Plumber Service in {city.name}</h3>
            <p>
              Need a plumber in {city.name}? Contact A Plumber Service today at <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneFormatted}</a> or email us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>. We offer free estimates with no obligation, and we&apos;ll come to you anywhere in {city.name} or surrounding {city.county} communities.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {cityTestimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <SectionHeading
                eyebrow="Reviews"
                title={`What ${city.name} Homeowners Say`}
                subtitle={`Real reviews from real customers in ${city.name}, TX.`}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cityTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
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
                      <p className="text-gray-500 text-xs">{city.name}, TX • {t.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/testimonials" className="text-gold hover:text-gold-dark font-semibold text-sm transition-colors">
                Read All Reviews →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        faqs={cityFAQs}
        title={`FAQ — ${city.name}, TX Plumbing Services`}
        subtitle={`Common questions from ${city.name} homeowners about our plumbing services.`}
      />

      {/* Nearby Cities */}
      {nearbyCityObjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">Also Serving Nearby Communities</h3>
              <p className="text-gray-600 text-sm">A Plumber Service serves all of {city.county} and beyond.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyCityObjects.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-navy border border-gray-200 hover:border-navy text-navy hover:text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {nearby.name}, TX
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy rounded-xl px-5 py-2.5 text-sm font-bold transition-all"
              >
                All 32 Cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Need a Plumber in ${city.name}?`}
        subtitle={`Get a free estimate from A Plumber Service — ${city.name}'s trusted licensed plumbing experts.`}
      />
    </>
  );
}
