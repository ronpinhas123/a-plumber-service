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
    question: "Do you handle permits for plumbing work?",
    answer: "Yes. A Plumber Service handles all necessary permits, inspections, and code compliance for plumbing projects — from water heater installations to sewer line replacements. You never have to worry about paperwork or dealing with city/county permit offices.",
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
        headline="Houston's Trusted Licensed Plumbers — 24/7 Service"
        subheadline="Emergency plumbing, drain cleaning, water heaters, leak detection & sewer services across 32 Houston-area communities. Licensed, insured, and trusted since 2004."
        imageId="photo-1504307651254-35680f356dfd"
        imageAlt="Professional plumber working in Houston TX home"
        badges={["Licensed & Insured in Texas", "24/7 Emergency Service", "Free Estimates", "32 Cities Served"]}
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
        subtitle="Have questions about our plumbing services? Here are answers to what Houston homeowners ask most."
      />

      {/* CTA Banner */}
      <CTABanner />

      {/* Structured content for SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-content">
          <h2>Houston&apos;s Trusted Licensed Plumbers Since 2004</h2>
          <p>
            At A Plumber Service, we&apos;ve spent over two decades building Houston&apos;s most trusted plumbing company. Founded in 2004, our licensed plumbers have completed more than 5,000 plumbing projects across Harris County, Fort Bend County, Montgomery County, Galveston County, and Brazoria County — from routine maintenance to complex sewer line replacements and emergency repairs.
          </p>
          <p>
            What sets us apart isn&apos;t just the quality of our work — though that speaks for itself with a 4.9-star rating across 500+ reviews. It&apos;s our commitment to treating every Houston homeowner with the honesty, transparency, and respect they deserve. When you call A Plumber Service, you get licensed plumbers (not handymen), straight answers, fair prices, and work guaranteed to hold.
          </p>

          <h2>Complete Plumbing Services in Houston, TX</h2>
          <p>
            Our plumbing service portfolio covers every plumbing need a Houston homeowner may face. Whether you&apos;re dealing with a burst pipe at 2am, a water heater that&apos;s stopped working, a slow drain that won&apos;t clear, a slab leak sending your water bill through the roof, or a sewer line that needs inspection — A Plumber Service has the licensed plumbers, the equipment, and the expertise to solve it right the first time.
          </p>

          <h3>Emergency Plumbing in Houston</h3>
          <p>
            Plumbing emergencies don&apos;t keep business hours. A Plumber Service provides 24/7 emergency plumbing response across Houston and 32 surrounding communities. Burst pipes, sewage backups, major leaks, flooding — our licensed plumbers are dispatched quickly to stop the damage and restore your plumbing. We aim for 60–90 minute response times for Houston-area emergencies.
          </p>

          <h3>Drain Cleaning Across Houston</h3>
          <p>
            Clogged drains are the most common plumbing call we receive. A Plumber Service provides professional drain cleaning for every drain in your Houston home — from slow kitchen sinks to complete main sewer line blockages. We use hydro-jetting equipment and sewer cameras to clear blockages completely and find the root cause, not just create a temporary opening.
          </p>

          <h3>Water Heater Installation & Repair in Houston</h3>
          <p>
            Houston homeowners depend on reliable hot water every day. A Plumber Service handles all water heater services — traditional tank and tankless systems, gas and electric, all major brands. We provide honest repair vs. replacement recommendations and offer same-day water heater service throughout the greater Houston area.
          </p>

          <h3>Leak Detection & Slab Leak Repair in Houston</h3>
          <p>
            Hidden leaks are one of the most damaging and expensive problems Houston homeowners face. Houston&apos;s expansive clay soil causes constant movement that stresses pipes under slabs and behind walls. A Plumber Service uses advanced electronic and thermal imaging leak detection to locate leaks without unnecessary demolition — then repairs them with minimal disruption to your home.
          </p>

          <h3>Sewer Line Inspection, Repair & Replacement</h3>
          <p>
            Your sewer line is the backbone of your home&apos;s plumbing system. A Plumber Service provides complete sewer services across Houston — HD camera inspections, root intrusion clearing, trenchless sewer repair, full sewer line replacement, and whole-home repiping. We use trenchless methods wherever possible to protect your yard and landscaping.
          </p>

          <h2>Serving Houston and 32 Surrounding Communities</h2>
          <p>
            Our plumbing service area spans the greater Houston metropolitan area from The Woodlands and Conroe in the north to Pearland and League City in the south, from Katy and Fulshear in the west to Baytown and La Porte in the east. Whether you&apos;re in a master-planned community in Sugar Land, a historic neighborhood in Pasadena, or an established neighborhood in River Oaks, A Plumber Service brings the same level of licensed expertise to every plumbing job.
          </p>
          <p>
            We currently serve Spring TX, Sugar Land TX, Missouri City TX, Richmond TX, Rosenberg TX, Katy TX, Fulshear TX, Cypress TX, Tomball TX, Magnolia TX, Hockley TX, The Woodlands TX, Conroe TX, Porter TX, Humble TX, Kingwood TX, Atascocita TX, Channelview TX, Baytown TX, La Porte TX, Deer Park TX, Pasadena TX, Pearland TX, Friendswood TX, League City TX, Webster TX, Bellaire TX, West University Place TX, Southside Place TX, River Oaks TX, and Memorial TX.
          </p>

          <h2>Get Your Free Plumbing Estimate Today</h2>
          <p>
            Ready to have your plumbing problem solved? Contact A Plumber Service today for a free, no-obligation estimate. You can reach us by phone at <a href="tel:+17139556664">(713) 955-6664</a>, by email at <a href="mailto:ronnie@aplumberservice.com">ronnie@aplumberservice.com</a>, or by visiting us at 2406 Wheeler Ave, Houston, TX 77004. We look forward to solving your plumbing problem the right way.
          </p>
        </div>
      </section>
    </>
  );
}
