import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

const topCities = cities.slice(0, 16);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <div className="bg-white rounded-lg px-3 py-2 inline-block">
                <Image
                  src="/logo.png"
                  alt="A Plumber Service — Houston TX"
                  width={150}
                  height={82}
                  className="block"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Houston&apos;s trusted licensed plumbers since {SITE_CONFIG.founded}. Emergency plumbing, drain cleaning, water heaters, leak detection & sewer services across 32 communities.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/80 text-sm">{SITE_CONFIG.rating}/5 ({SITE_CONFIG.reviewCount} reviews)</span>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services + Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 border-b border-gold/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link href="/services" className="text-white/60 hover:text-gold text-sm transition-colors">
                  All Services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 border-b border-gold/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },
                { href: "/service-areas", label: "All Service Areas" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 border-b border-gold/30 pb-2">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="text-white/60 hover:text-gold text-xs transition-colors leading-relaxed"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="inline-block mt-4 text-gold text-xs font-semibold hover:text-gold-light transition-colors"
            >
              View All 32 Cities →
            </Link>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 border-b border-gold/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm group-hover:text-gold transition-colors">
                    {SITE_CONFIG.phoneFormatted}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm group-hover:text-gold transition-colors break-all">
                    {SITE_CONFIG.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <address className="text-white/60 text-sm not-italic leading-relaxed">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div className="text-white/60 text-sm leading-relaxed">
                    <p>{SITE_CONFIG.hours.weekdays}</p>
                    <p>{SITE_CONFIG.hours.saturday}</p>
                    <p>{SITE_CONFIG.hours.sunday}</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* License Badge */}
            <div className="mt-6 px-3 py-2 bg-white/5 rounded-lg border border-gold/20">
              <p className="text-gold text-xs font-semibold">✓ {SITE_CONFIG.license}</p>
              <p className="text-white/50 text-xs mt-0.5">State of Texas Plumbing License</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="text-white/40 text-xs">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved. Serving Houston, TX and surrounding areas.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="text-white/40 hover:text-gold text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-white/40 hover:text-gold text-xs transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-white/40 hover:text-gold text-xs transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
