import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { buildContactMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/data/site-config";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = buildContactMetadata();

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      {/* Page Header */}
      <div className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact A Plumber Service
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to start your project? Get a free estimate from Houston&apos;s most trusted plumbing team. We respond within 1–2 business hours.
          </p>
        </div>
      </div>

      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">Request a Free Estimate</h2>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form below and we&apos;ll contact you within 1–2 business hours to schedule your free in-home consultation.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-serif text-xl font-bold mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <a href={SITE_CONFIG.phoneHref} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-white font-semibold group-hover:text-gold transition-colors">
                        {SITE_CONFIG.phoneFormatted}
                      </p>
                    </div>
                  </a>

                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-white font-semibold group-hover:text-gold transition-colors text-sm break-all">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Address</p>
                      <address className="text-white font-semibold not-italic text-sm leading-relaxed">
                        {SITE_CONFIG.address.street}<br />
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                      <div className="text-white text-sm space-y-0.5">
                        <p>{SITE_CONFIG.hours.weekdays}</p>
                        <p>{SITE_CONFIG.hours.saturday}</p>
                        <p>{SITE_CONFIG.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-serif text-2xl font-bold text-navy">{SITE_CONFIG.rating}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Based on {SITE_CONFIG.reviewCount}+ verified reviews from Houston homeowners
                </p>
                <Link href="/testimonials" className="inline-block mt-3 text-gold hover:text-gold-dark text-sm font-semibold transition-colors">
                  Read Reviews →
                </Link>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-navy mb-3 text-sm">Serving 32 Houston-Area Cities</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  We serve the entire greater Houston metropolitan area including Spring, Katy, Sugar Land, The Woodlands, Pearland, Cypress, and more.
                </p>
                <Link href="/service-areas" className="text-gold hover:text-gold-dark text-sm font-semibold transition-colors">
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / Address section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-10 text-center">
            <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">Visit Our Office</h3>
            <p className="text-gray-600 mb-1">{SITE_CONFIG.address.full}</p>
            <p className="text-gray-500 text-sm">{SITE_CONFIG.hours.weekdays} | {SITE_CONFIG.hours.saturday}</p>
          </div>
        </div>
      </section>
    </>
  );
}
