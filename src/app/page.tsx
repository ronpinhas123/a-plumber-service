import type { Metadata } from "next";
import { buildHomeMetadata } from "@/lib/metadata";
import { buildFAQSchema } from "@/lib/schema";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BlogPreview from "@/components/sections/BlogPreview";
import GallerySection from "@/components/sections/GallerySection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = buildHomeMetadata();

const homeFAQs = [
  {
    question: "What areas do you serve in the Houston metro area?",
    answer: "A Plumber Service proudly serves Houston and 32 surrounding communities including Spring, Katy, Sugar Land, The Woodlands, Pearland, Cypress, Conroe, Humble, Kingwood, League City, Friendswood, and many more. Check our Service Areas page for the complete list.",
  },
  {
    question: "Are you licensed and insured in Texas?",
    answer: "Yes. A Plumber Service is fully licensed by the State of Texas and carries comprehensive general liability insurance on every project. You are fully protected — ask for our license number and certificate of insurance at any time.",
  },
  {
    question: "How do I get a free estimate?",
    answer: "Simply call us at (713) 955-6664, send us an email at ronnie@aplumberservice.com, or fill out the contact form on our website. We typically schedule free in-home estimates within 1–2 business days.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Absolutely. A Plumber Service handles all necessary permits, inspections, and code compliance for every project type — from kitchen remodels to home additions. You never have to worry about paperwork or dealing with city/county permit offices.",
  },
];

export default function HomePage() {
  const faqSchema = buildFAQSchema(homeFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <HeroSection
        headline="Houston's Premier Plumbing & Home Remodeling Experts"
        subheadline="From emergency plumbing to complete kitchen and bathroom transformations, A Plumber Service delivers exceptional craftsmanship across 32 Houston-area communities. Licensed, insured, and trusted since 2004."
        imageId="photo-1556909114-f6e7ad7d3136"
        imageAlt="Luxury kitchen remodel by A Plumber Service Houston TX"
        badges={["Licensed & Insured in Texas", "20+ Years Experience", "Free Estimates", "32 Cities Served"]}
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats */}
      <StatsSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Service Areas */}
      <ServiceAreasGrid />

      {/* How It Works */}
      <ProcessSteps />

      {/* Blog Preview */}
      <BlogPreview />

      {/* FAQ */}
      <FAQSection
        faqs={homeFAQs}
        title="Frequently Asked Questions"
        subtitle="Have questions about working with A Plumber Service? Here are answers to what Houston homeowners ask most."
      />

      {/* CTA Banner */}
      <CTABanner />

      {/* Structured content for SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-content">
          <h2>Houston&apos;s Trusted Plumbing & Home Remodeling Contractor</h2>
          <p>
            At A Plumber Service, we&apos;ve spent over two decades building Houston&apos;s most trusted plumbing and home remodeling company. Founded in 2004, our team has completed more than 5,000 projects across Harris County, Fort Bend County, Montgomery County, Galveston County, and Brazoria County — transforming homes from modest updates to complete luxury renovations.
          </p>
          <p>
            What sets us apart isn&apos;t just the quality of our work — though that speaks for itself with a 4.9-star rating across 500+ reviews. It&apos;s our commitment to treating every Houston homeowner with the honesty, transparency, and respect they deserve. When you work with A Plumber Service, you get straight answers, fair prices, and craftsmanship you&apos;ll be proud of for years to come.
          </p>

          <h2>Comprehensive Home Remodeling Services in Houston, TX</h2>
          <p>
            Our service portfolio covers the full spectrum of residential remodeling and plumbing work. Whether you&apos;re dreaming of a gourmet kitchen with custom cabinetry and quartz countertops, a spa-inspired master bathroom with a freestanding soaking tub, or a stunning outdoor entertainment area that makes the most of Houston&apos;s year-round climate — A Plumber Service has the expertise, the crew, and the vision to make it happen.
          </p>

          <h3>Kitchen Remodeling in Houston</h3>
          <p>
            The kitchen is the heart of the Houston home. Our kitchen remodeling services encompass everything from cabinet replacements and countertop installations to complete gut renovations. We work with Houston homeowners in every budget range to design and build kitchens that are both strikingly beautiful and highly functional. As licensed plumbers, we also handle all the plumbing work — sink relocation, dishwasher connections, garbage disposals, and water filtration systems — under one roof.
          </p>

          <h3>Bathroom Remodeling in Houston</h3>
          <p>
            A beautifully renovated bathroom adds immediate value to your Houston home. Our bathroom remodeling team specializes in custom tile work, walk-in shower builds, freestanding tub installations, double vanities, and complete wet room transformations. We serve everything from modest bathroom updates to luxury master suite renovations in Houston&apos;s most prestigious neighborhoods including River Oaks, Memorial, Bellaire, and West University Place.
          </p>

          <h3>Flooring Installation Across Houston</h3>
          <p>
            Houston&apos;s humid subtropical climate demands thoughtful flooring selection. Our expert installation crews work with hardwood, engineered hardwood, luxury vinyl plank (LVP), porcelain and ceramic tile, laminate, and natural stone. We advise every client on the best flooring choice for Houston&apos;s specific climate challenges and install every floor with meticulous attention to subfloor preparation, pattern alignment, and precision finishing.
          </p>

          <h3>Home Additions in Houston, TX</h3>
          <p>
            Need more space? A Plumber Service designs and builds custom home additions throughout the Houston area. From single-room additions and sunrooms to second-story additions and garage conversions, we handle the entire process — architectural design, permitting, framing, plumbing, electrical coordination, insulation, and interior finishing. Every addition is designed to blend seamlessly with your existing home&apos;s architecture.
          </p>

          <h3>Outdoor Living Spaces in Houston</h3>
          <p>
            Houston&apos;s climate is made for outdoor living. Our outdoor living team creates custom covered patios, pergolas, outdoor kitchens, fire pit areas, and complete backyard entertainment spaces. We engineer every outdoor project with Houston&apos;s heavy rainfall and drainage challenges in mind, ensuring your investment stays beautiful and functional through every Texas weather event.
          </p>

          <h2>Serving Houston and 32 Surrounding Communities</h2>
          <p>
            Our service area spans the greater Houston metropolitan area from The Woodlands and Conroe in the north to Pearland and League City in the south, from Katy and Fulshear in the west to Baytown and La Porte in the east. Whether you&apos;re in a master-planned community in Sugar Land, a historic neighborhood in Pasadena, or a luxury estate in River Oaks, A Plumber Service brings the same level of excellence to every project.
          </p>
          <p>
            We currently serve Spring TX, Sugar Land TX, Missouri City TX, Richmond TX, Rosenberg TX, Katy TX, Fulshear TX, Cypress TX, Tomball TX, Magnolia TX, Hockley TX, The Woodlands TX, Conroe TX, Porter TX, Humble TX, Kingwood TX, Atascocita TX, Channelview TX, Baytown TX, La Porte TX, Deer Park TX, Pasadena TX, Pearland TX, Friendswood TX, League City TX, Webster TX, Bellaire TX, West University Place TX, Southside Place TX, River Oaks TX, and Memorial TX.
          </p>

          <h2>Get Your Free Estimate Today</h2>
          <p>
            Ready to transform your Houston home? Contact A Plumber Service today for a free, no-obligation estimate. You can reach us by phone at <a href="tel:+17139556664">(713) 955-6664</a>, by email at <a href="mailto:ronnie@aplumberservice.com">ronnie@aplumberservice.com</a>, or by visiting us at 2406 Wheeler Ave, Houston, TX 77004. We look forward to bringing your vision to life.
          </p>
        </div>
      </section>
    </>
  );
}
