import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Award, Heart } from "lucide-react";
import { buildAboutMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/data/site-config";
import { unsplashUrl } from "@/lib/images";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = buildAboutMetadata();

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "We never take shortcuts. Every joint, tile, cabinet, and finish is installed to the highest standard — because your home deserves nothing less.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We treat your home as if it were our own. That means daily cleanup, respectful crews, honest communication, and work we're proud to stand behind.",
  },
  {
    icon: Users,
    title: "Community Roots",
    description: "We're not a national franchise. We're your Houston neighbors — committed to this community for the long term and invested in our reputation with every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About Us", href: "/about" }]} />

      <HeroSection
        headline="Houston's Licensed Plumbers Since 2004"
        subheadline="Two decades of solving plumbing problems, one call at a time. A Plumber Service is Houston's most trusted licensed plumbing company."
        imageId="photo-1581578731548-c64695cc6952"
        imageAlt="A Plumber Service team of licensed plumbers in Houston TX"
        minHeight="min-h-[65vh]"
        overlay={65}
        badges={["20+ Years in Business", "5,000+ Projects", "4.9/5 Stars"]}
      />

      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Built on Houston&apos;s Trust Since 2004
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A Plumber Service was founded in Houston, Texas in 2004 with a simple mission: provide honest, expert plumbing services to Houston-area homeowners at fair prices. Twenty years later, that mission drives everything we do.
                </p>
                <p>
                  From emergency plumbing response to water heater installations, drain cleaning to slab leak repair, sewer line inspections to complete repiping — our licensed plumbers handle every aspect of residential plumbing with the skill and integrity Houston homeowners deserve.
                </p>
                <p>
                  We&apos;ve now served over 5,000 Houston-area homeowners across 32 communities. Our 4.9-star rating across 500+ reviews is the result of thousands of satisfied families who trusted us with their home&apos;s most critical systems.
                </p>
                <p>
                  Based at 2406 Wheeler Ave in Houston, TX, we&apos;re deeply rooted in this community. When you call A Plumber Service, you&apos;re calling your Houston neighbors — people who care about this city as much as you do.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-colors shadow-gold"
                >
                  Get a Free Estimate
                </Link>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Read Our Reviews
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src={unsplashUrl("photo-1581578731548-c64695cc6952", 800)}
                alt="A Plumber Service team in Houston Texas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="What Drives Us"
              title="Our Core Values"
              subtitle="These principles guide every decision we make and every project we take on."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <TestimonialsSection limit={3} theme="dark" />

      <CTABanner />
    </>
  );
}
