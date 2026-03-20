"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [areasExpanded, setAreasExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-navy shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-serif text-lg font-bold">A Plumber Service</span>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Phone CTA */}
        <div className="p-4 border-b border-white/10">
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex items-center justify-center gap-2 bg-gold text-navy font-bold px-4 py-3 rounded-lg w-full text-sm"
            onClick={onClose}
          >
            <Phone className="w-4 h-4" />
            Call {SITE_CONFIG.phoneFormatted}
          </a>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
          >
            About Us
          </Link>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Services
              {servicesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {servicesExpanded && (
              <div className="ml-4 mt-1 space-y-1 border-l border-gold/30 pl-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block py-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="block py-2 text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas Accordion */}
          <div>
            <button
              onClick={() => setAreasExpanded(!areasExpanded)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Service Areas
              {areasExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {areasExpanded && (
              <div className="ml-4 mt-1 border-l border-gold/30 pl-3">
                <Link
                  href="/service-areas"
                  onClick={onClose}
                  className="block py-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                >
                  View All Areas
                </Link>
                <div className="grid grid-cols-2 gap-x-2 mt-1">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      onClick={onClose}
                      className="block py-1.5 text-white/70 text-xs hover:text-gold transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/testimonials"
            onClick={onClose}
            className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="p-4 mt-4 border-t border-white/10 space-y-2">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="block text-white/70 text-sm hover:text-gold transition-colors"
          >
            {SITE_CONFIG.email}
          </a>
          <p className="text-white/50 text-xs">{SITE_CONFIG.address.full}</p>
          <p className="text-white/50 text-xs">{SITE_CONFIG.hours.weekdays}</p>
        </div>
      </div>
    </div>
  );
}
