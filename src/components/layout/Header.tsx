"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy shadow-navy py-3"
            : "bg-navy/95 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="bg-white rounded-lg px-2.5 py-1.5 group-hover:bg-gray-50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="A Plumber Service — Houston TX"
                  width={130}
                  height={71}
                  priority
                  className="block"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-colors",
                  pathname === "/"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-colors",
                  pathname === "/about"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                )}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors",
                    pathname.startsWith("/services")
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 mt-1 border border-gray-100">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-navy font-semibold hover:bg-gold/10 hover:text-gold border-b border-gray-100"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-gold/10 hover:text-gold transition-colors",
                          pathname === `/services/${service.slug}`
                            ? "text-gold font-semibold"
                            : "text-gray-700"
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors",
                    pathname.startsWith("/service-areas")
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  )}
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                >
                  Service Areas <ChevronDown className={cn("w-4 h-4 transition-transform", areasOpen && "rotate-180")} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 w-[640px] bg-white shadow-xl rounded-lg py-4 mt-1 border border-gray-100" style={{ left: "-200px" }}>
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <Link
                        href="/service-areas"
                        className="text-sm font-bold text-navy hover:text-gold transition-colors"
                      >
                        View All Service Areas →
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-0 p-2">
                      {cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/service-areas/${city.slug}`}
                          className={cn(
                            "block px-3 py-1.5 text-xs rounded hover:bg-gold/10 hover:text-gold transition-colors",
                            pathname === `/service-areas/${city.slug}`
                              ? "text-gold font-semibold"
                              : "text-gray-600"
                          )}
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
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-colors",
                  pathname === "/testimonials"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                )}
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-colors",
                  pathname === "/blog"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                )}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-colors",
                  pathname === "/contact"
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm shadow-gold hover:shadow-gold-lg"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
